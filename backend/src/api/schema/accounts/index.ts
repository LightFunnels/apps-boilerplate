const types = require('../types');
import * as graphql from 'graphql';
import knex from '../../../services/db';
import {globalIdField} from 'graphql-relay';

types.Shop = new graphql.GraphQLObjectType({
	name: 'Shop',
	fields:() => ({
		id: globalIdField(),
		_id:{
			type: graphql.GraphQLNonNull(graphql.GraphQLInt),
			resolve: _ => _.id,
		},
		shop:{type: graphql.GraphQLNonNull(graphql.GraphQLString)}
	})
});

types.Account = new graphql.GraphQLObjectType({
	name: 'Account',
	interfaces: () => ([types.Node]),
	fields:() => ({
		id: globalIdField(),
		shops:{
			type: graphql.GraphQLNonNull(graphql.GraphQLList(graphql.GraphQLNonNull(types.Shop))),
			resolve(_, args, ctx: ApiContext){
				return knex.table('shops').where('account_id', ctx.account.id);
			}
		}
	})
})

export function account(_, args, ctx: ApiContext){
	return ctx.loaders.Account.load(ctx.account.id);
}