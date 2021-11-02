import * as graphql from 'graphql';
import type {Context, APIGatewayProxyEventV2, APIGatewayProxyResultV2} from 'aws-lambda';
import knex from '../services/db';
import log from '../services/log';
import crypto from 'crypto';
import lf from '../services/lightfunnels';
import rp from 'request-promise';

export async function handler(event: APIGatewayProxyEventV2, ctx: Context): Promise<APIGatewayProxyResultV2> {

	ctx.callbackWaitsForEmptyEventLoop = false;

	/*

	what will happend here is lightfunnels will send us events on this route whenever
	a customer is created on it,
	then we will use that data ( data of payment ) to send it to shopify

	*/

	const [_, base, kind, webhookSufix] = event.rawPath.split('/');

	try {

		switch(kind){
			case 'payments':{

				let account: {token, shop, funnel_id, connection_id, lightfunnels_token} = await knex.table('connections')
					.join('shops', 'shops.id', 'connections.shop_id')
					.join('accounts', 'accounts.id', 'shops.account_id')
					.select(
						'connections.funnel_id', 'connections.id as connection_id',
						'shops.token', 'shops.shop',
						'accounts.lightfunnels_token'
					)
					.where('connections.webhook_suffix', webhookSufix)
					.first();

				let body = JSON.parse(event.body!);

				// must know which funnel is the pm from

				if(account){

					const resp = await lf({
						token: account.lightfunnels_token,
						data:{
							query:`
								query payment($id: Int!){
									payment(id: $id){
										source{
											order{
												notes
												email
												phone
												name
												_id
												checkout{
								          step{
								            funnel_id
								          }
								        }
												billing_address{
													line1
													line2
													country
													city
													first_name
													last_name
													zip
													state
												}
												shipping_address{
													line1
													line2
													country
													city
													first_name
													last_name
													zip
													state
												}
												customer{
													first_name
													last_name
													accepts_marketing
													notes
													custom
												}
											}
										}
									}
								}
							`,
							variables:{
								id: body.id
							}
						}
					});

					const order = resp.data.payment.source.order;

					const line_items = body.items.reduce(
						function(ac, item){
							let id = `${item.type}:${item.parent_id}`;
							let ndx = ac.findIndex(g => g.id === id);
							if(ndx===-1){
								ac.push({
									id,
									sku: item.sku,
									image: item.image,
									price: item.price,
									title: item.title,
									quantity: 1,
									// discount_allocations:[{
									// 	amount: 5,
									// 	discount_application_index: 1
									// }]
								});
							} else {
								ac[ndx].quantity++;
							}
							return ac;
						},
						[]
					);

					const shopifyOrder = {
						line_items,
						"customer": {
							first_name: order.customer.first_name,
							last_name: order.customer.last_name,
							accepts_marketing: order.customer.accepts_marketing,
							notes: order.customer.notes,
							custom: order.customer.custom,
							phone: undefined,
							email: undefined,
						},
						"billing_address": {
							address1: order.billing_address?.line1,
							address2: order.billing_address?.line2,
							country: order.billing_address?.country,
							city: order.billing_address?.city,
							first_name: order.billing_address?.first_name,
							last_name: order.billing_address?.last_name,
							zip: order.billing_address?.zip,
							state: order.billing_address?.state,
						},
						"shipping_address": {
							address1: order.shipping_address?.line1,
							address2: order.shipping_address?.line2,
							country: order.shipping_address?.country,
							city: order.shipping_address?.city,
							first_name: order.shipping_address?.first_name,
							last_name: order.shipping_address?.last_name,
							zip: order.shipping_address?.zip,
							state: order.shipping_address?.state,
						},
						"email": order.email,
						"phone": order.phone,
						// "sub_total": 20,
						// "discount_applications":[
						// 	{
						// 		value: 5,
						// 		value_type: 'fixed_amount'
						// 	}
						// ],
						// "total_discount": body.discount_value,
						// "total": 15
					};

					if(order.customer.phone){
						shopifyOrder.customer.phone = order.customer.phone;
					}
					if(order.customer.email){
						shopifyOrder.customer.email = order.customer.email;
					}

					const data = await rp({
						uri: `https://${account.shop}/admin/api/2021-10/orders.json`,
						method: 'POST',
						body: {
							order: shopifyOrder
						},
						headers: {
							'X-Shopify-Access-Token': `${account.token}`
						},
						json: true
					});

					await knex.table('records').insert({
						shopify_order_id: data.order.id,
						payment_id: body.id,
						order_id: order._id,
						order_name: order.name,
						connection_id: account.connection_id
					});

					await lf({
						token: account.lightfunnels_token,
						data:{
							query:`
								mutation updateOrder($id: Int!, $node: InputOrder!){
									updateOrder(id: $id, node: $node){
										id
										notes
									}
								}
							`,
							variables:{
								id: order._id,
								node:{
									notes: order.notes + `\nsynced to shopify order:${data.order.id}`
								}
							}
						}
					})
					.catch((error) => {
						if(error.response){
							console.log("yXNGgWTemWlzYsdhO", JSON.stringify(error.response))
							return;
						}
						return Promise.reject(error);
					})

				} else {
					// remove webhook
				}

				break;
			}
			case 'uninstall-shopify':{
				// depending on the app, webhookSufix = ctx.account.id

				const shopifyTopic = event.headers["X-Shopify-Topic"] ?? event.headers["x-shopify-topic"];
				const shopifyHmac = event.headers["X-Shopify-Hmac-Sha256"] ?? event.headers["x-shopify-hmac-sha256"];
				const shopifyDomain = event.headers["X-Shopify-Shop-Domain"] ?? event.headers["x-shopify-shop-domain"];

				if (
					(event.requestContext.http.method === "POST") &&
					(shopifyTopic === "app/uninstalled") &&
					shopifyHmac &&
					shopifyDomain &&
					event.body
				) {
					const hash = crypto
						.createHmac('sha256', process.env.ShopifyClientSecret)
						.update(Buffer.from(event.body,"utf-8"))
						.digest("base64");        
					if (hash === shopifyHmac) {
						await knex.table('shops')
							.where('id', webhookSufix)
							.limit(1)
							.del();
					}
				}

				break;
			}
		}

	} catch (error) {
		log({
			cause: 'WEBHOOKS',
			message: error.message,
			stack: error.stack,
			name: error.name,
			error,
			event
		});
	}


	return {
		body: "",
		statusCode: 200,
		headers:{}
	}
	
}