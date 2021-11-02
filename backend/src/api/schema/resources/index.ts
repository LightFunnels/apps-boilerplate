import * as graphql from 'graphql'
const types = require('../types');
import knex from '../../../services/db';
import lightfunnels from '../../../services/lightfunnels';
import Joi from '../../joi';
import {globalIdField, connectionDefinitions, toGlobalId} from 'graphql-relay';
import {v4 as uuid} from 'uuid';
import {SimpleError} from '../../errors';

types.Record = new graphql.GraphQLObjectType({
	name: 'Record',
	fields:{
		payment_id: {type: graphql.GraphQLNonNull(graphql.GraphQLInt)},
		order_id: {type: graphql.GraphQLNonNull(graphql.GraphQLInt)},
		shopify_order_id: {type: graphql.GraphQLNonNull(graphql.GraphQLString)},
		created_at: {type: graphql.GraphQLNonNull(graphql.GraphQLString)},
	}
});

types.Connection = new graphql.GraphQLObjectType({
	name: 'Connection',
	fields: () => ({
		id: globalIdField(),
		_id:{
			type: graphql.GraphQLNonNull(graphql.GraphQLInt),
			resolve(_){
				return _.id;
			}
		},
		shop_id: {type: graphql.GraphQLNonNull(graphql.GraphQLInt)},
		shop:{
			type: graphql.GraphQLNonNull(types.Shop),
			resolve(_, args, ctx: ApiContext){
				return ctx.loaders.Shop.load(_.shop_id);
			}
		},
		funnel_id: {type: graphql.GraphQLNonNull(graphql.GraphQLInt)},
		funnel:{
			type: types.Funnel,
			resolve(_, args, ctx: ApiContext){
				return ctx.loaders.Funnel.load(_.funnel_id);
			}
		}
	})
});
types.ConnectionInput = new graphql.GraphQLInputObjectType({
	name: 'ConnectionInput',
	fields:{
		shop_id: {type: graphql.GraphQLNonNull(graphql.GraphQLInt)},
		funnel_id: {type: graphql.GraphQLNonNull(graphql.GraphQLInt)},
	}
});

types.Funnel = new graphql.GraphQLObjectType({
  name: "Funnel",
  interfaces: () => [types.Node],
  fields: () => ({
  	_id: {
  		type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
  	},
  	id: {
  		type: new graphql.GraphQLNonNull(graphql.GraphQLID)
  	},
    name: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
  })
});
const {connectionType} = connectionDefinitions({
	nodeType: types.Funnel
});

types.FunnelsConnection = connectionType;

export function funnelsList(_, args, ctx: ApiContext){
	return ctx.loaders.Funnel.loadMany(args.ids);
}

export function funnels(_, args, ctx: ApiContext){
	return lightfunnels({
		token: ctx.account.lightfunnelsToken,
		data:{
			query: `
				query funnelsPagination($query: String!, $after: String, $first: Int){
					funnels(query: $query, after: $after, first: $first){
						edges{
				      node{
				        id
				        _id
				        name
				      }
				      cursor
				    }
				    pageInfo{
		          hasNextPage
		          endCursor
		        }
					}
				}
			`,
			variables:{
				query: args.query,
				after: args.after,
				first: args.first,
			}
		}
	})
	.then(
		resp => {
			return resp.data.funnels;
		}
	)
}

export function connections(_, args, ctx: ApiContext){
	return knex.table('connections')
	.select('connections.*')
	.join('shops', q => {
		q.on('shops.id', 'connections.shop_id')
		.on('shops.account_id', knex.raw('?', [ctx.account.id]))
	})
	// .where({
	// 	account_id: ctx.account.id
	// })
	.orderBy('id', 'desc');
}

export function records(_, args, ctx: ApiContext){
	return knex.table('records')
	.select('records.*')
	.join('connections', 'connections.id', 'records.connection_id')
	.join('shops', q => {
		q.on('shops.id', 'connections.shop_id')
		.on('shops.account_id', knex.raw('?', [ctx.account.id]))
	})
	.modify(function(q){
		if(args.offset){
			q.where('records.id', '<', args.offset);
		}
	})
	.limit(50)
	.orderBy('records.id', 'desc');
}

export async function createConnection(_, args, ctx: ApiContext){

	const data: {funnel_id, shop_id} = Joi.attempt(args.node, connectionSchema);

	let [shResp, lfResp] = await Promise.all([
		ctx.loaders.Shop.load(data.shop_id).then(Boolean),
		lightfunnels({
			token: ctx.account.lightfunnelsToken,
			data:{
				query:`
					query Funnel($id: Int!){
						funnel(id: $id){
							id
						}
					}
				`,
				variables:{
					id: data.funnel_id
				}
			}
		})
		.then(function(resp){
			if(resp.errors){
				throw new SimpleError('resources_ownership_confirmation_failes');
			}
			return Boolean(resp.data.funnel);
		})
		.catch(function (){
			throw new SimpleError('resources_ownership_confirmation_failes');
		})
	]);

	if((shResp === false) || (lfResp === false)){
		throw new SimpleError('resources_ownership');
	}

	const urlSuffix = uuid();
	const resp = await lightfunnels({
	  token: ctx.account.lightfunnelsToken,
	  data:{
	    query: `
	      mutation CreateWebhook($node: WebhookInput!){
	        createWebhook(node: $node){
	          _id
	        }
	      }
	    `,
	    variables:{
	      node:{
	        type: 'payment/created',
	        url: process.env.AppURL + `webhooks/payments/${urlSuffix}`,
	        settings: {}
	      }
	    }
	  }
	});

	return (
		knex.table('connections')
		.insert({
			shop_id: data.shop_id,
			funnel_id: data.funnel_id,
			webhook_suffix: urlSuffix,
			lightfunnels_webhook_id: resp.data.createWebhook._id
		})
		.then(
			function([id]){
				return ctx.loaders.Connection.load(id);
			}
		)
	)
}

export function deleteConnection(_, args, ctx: ApiContext){


	return (
		knex.transaction(
			async function(trx){

				let res = await trx.table('connections')
					.modify(connectionToAccount, ctx.account.id, 'connections')
					.where('connections.id', args.id)
					.select('connections.lightfunnels_webhook_id')
					.forShare()
					.first();

				if(!res){
					return 0;
				}

				await lightfunnels({
				  token: ctx.account.lightfunnelsToken,
				  data:{
				    query: `
				      mutation DeleteWebhook($id: Int!){
				        deleteWebhook(id: $id)
				      }
				    `,
				    variables:{
				      id: res.lightfunnels_webhook_id
				    }
				  }
				});
				
				return trx.table('connections')
				.where('connections.id', args.id)
				.limit(1)
				.del();

			}
		)
		.then(
			function(deleted){
				if(deleted>0){
					return toGlobalId('Connection', args.id);
				}
				return;
			}
		)
	);
}

function connectionToAccount(q, id, table){
	q.join('shops', q => {
		q.on('shops.id', knex.raw('??', [`${table}.shop_id`]))
		.on('shops.account_id', knex.raw('?', [id]))
	})
}

const connectionSchema = Joi.object().required().keys({
	shop_id: Joi.number().min(1).required(),
	funnel_id: Joi.number().min(1).required(),
});