import DataLoader from 'dataloader';
import knex from '../services/db';
import lf from '../services/lightfunnels';

export default function setupLoaders(acid: number, lfToken: string){
	return {
		Account: new DataLoader<number, any>((ids) => {
			return knex.table('accounts')
				.whereIn('accounts.id', ids)
				.then(
					items => {
						return ids.map(
							id => {
								return items.find(item => item.id === id);
							}
						)
					}
				)
		}),
		Connection: new DataLoader<number, any>((ids) => {
			return knex.table('connections')
				.select('connections.*')
				.whereIn('connections.id', ids)
				.join('shops', q => {
					q.on('shops.id', 'connections.shop_id')
					.on('shops.account_id', knex.raw('?', [acid]));
				})
				.then(
					items => {
						return ids.map(
							id => {
								return items.find(item => item.id === id);
							}
						)
					}
				)
		}),
		Shop: new DataLoader<number, any>((ids) => {
			return knex.table('shops')
				.select('shops.*')
				.whereIn('shops.id', ids)
				.where('shops.account_id', acid)
				.then(
					items => {
						return ids.map(
							id => {
								return items.find(item => item.id === id);
							}
						)
					}
				)
		}),
		Funnel: new DataLoader<number, any>((ids) => {
			return lf({
				data: {
					variables:{
						ids
					},
					query:`
						query funnelsList($ids: [Int!]!){
							funnelsList(ids: $ids){
								id
								_id
								name
							}
						}
					`
				},
				token: lfToken
			})
			.then(
				resp => {
					return resp.data.funnelsList;
				}
			)
		}),
		
	};
}


export type Loaders = ReturnType<typeof setupLoaders>;