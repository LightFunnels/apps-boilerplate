import schema from './schema';
import * as graphql from 'graphql';
import type {Context, APIGatewayProxyEventV2, APIGatewayProxyResultV2} from 'aws-lambda';
import setupLoaders from './loaders';
import knex from '../services/db';
import {SimpleError, reduceError} from './errors';
import translation from '../services/translation';

export async function handler(event: APIGatewayProxyEventV2, ctx: Context): Promise<APIGatewayProxyResultV2> {

	ctx.callbackWaitsForEmptyEventLoop = false;

	let response = {};
	let body = {};

	try {
		body = JSON.parse(event.body ?? '');
	} catch {};

	if(event.body){

		let {variables, query, operationName} = JSON.parse(event.body);

		const accountID = (event.requestContext.authorizer! as any).lambda.acid;

		let row = await knex.table('accounts')
			// here we use the app's ids, because it how we generated the token
			// check lightfunnels function
			.where('accounts.id', accountID)
			.first();

		if(!row){

			// here we should throw an error
			// this can happen if the user installed the app then uninstalled it and 
			// tried to open it,
			// we still has a valid token in the browser store, but the row was removed from the database
			response = {
				data: null,
				errors:[
					{
						key: 'account_deleted' as keyof typeof translation,
						message: translation.account_deleted,
						path: []
					}
				]
			}
			
		} else {

			const {lightfunnels_token: lightfunnelsToken} = row;

			const context: ApiContext = {
				account:{
					id: accountID,
					lightfunnelsToken,
				},
				loaders: setupLoaders(accountID, lightfunnelsToken)
			};

			response = await graphql.graphql(
				schema,
				query,
				{},
				context,
				variables,
				operationName,
			)
			.then(
				function (resp: any) {
					if(resp.errors){
						resp.errors = resp.errors.reduce(reduceError, []);
					}
					return resp;
				}
			);

		}


	}

	return {
		body: JSON.stringify(response),
		statusCode: 200,
		headers:{
			'Content-Type': 'application/json; charset=UTF-8'
		}
	}
	
}