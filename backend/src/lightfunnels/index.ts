import rp from 'request-promise';
import jsonwebtoken from 'jsonwebtoken';
import type {Context, APIGatewayProxyEventV2, APIGatewayProxyResultV2} from 'aws-lambda';
import knex from '../services/db';

const state = 123;

export async function handler(event: APIGatewayProxyEventV2, ctx: Context): Promise<APIGatewayProxyResultV2> {

	ctx.callbackWaitsForEmptyEventLoop = false;

	// path must be connect-url or connect-response
	let path = event.rawPath.split('/')[2];

	let body = '', statusCode = 404, headers={};

	let eventBody: any = {};
	try {
		eventBody = JSON.parse(event.body!);
	} catch (e) {}

	if(path === "connect-url"){
		body = `${process.env.LightfunnelsFrontUrl}admin/oauth?client_id=${process.env.LightfunnelsAppKey}`+
			`&state=${state}&redirect_uri=${eventBody.redirectUrl}&response_type=code&scope=orders,funnels&account-id=${eventBody.accountID}`;
		statusCode = 200;
	} else if (path === "connect-response") {

		await (
			rp({
				uri: `${process.env.LightfunnelsUrl}oauth/access`,
				method: 'POST',
				body:{
					client_id: process.env.LightfunnelsAppKey,
					client_secret: process.env.LightfunnelsAppSecret,
					code: eventBody.code,
				},
				json: true,
				simple: false
			})
			.then(
				async function(data: {access_token: string, account_id: number, id: number}){

					if(data === undefined){
						statusCode = 401;
						body = "wrong code";
						return;
					}

					// we store lightfunnels token with its id
					let [id] = await (
						knex.table('accounts').insert({
							lightfunnels_token: data.access_token,
							lightfunnels_account_id: data.account_id
						})
						.onConflict()
						.merge({
							'lightfunnels_token': knex.raw('values(lightfunnels_token)'),
							'id': knex.raw('LAST_INSERT_ID(id)')
						})
					);

					// we generate a new token for this app only so we don't share the lightfunnel's one.
					let token = jsonwebtoken.sign({acid: id}, process.env.AppSecret);
					body = JSON.stringify({
						token,
						id: data.id
					});
					headers = {'Content-Type': 'application/json'};
					statusCode = 200;

				}
			)
		)
		
	}

	return {
		statusCode,
		headers,
		body
	};
	
}