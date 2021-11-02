const types = require('../types');
import * as graphql from 'graphql';
import {globalIdField} from 'graphql-relay';
import qs from 'qs';
import rp from 'request-promise';
import knex from '../../../services/db';
import {SimpleError} from '../../errors';
import randomatic from 'randomatic';
import crypto from "crypto"
import {v4 as uuid} from 'uuid';
import lightfunnels from '../../../services/lightfunnels'

export const connectShopifyUrl =  {
  type: graphql.GraphQLNonNull(graphql.GraphQLString),
  args:{
    shop: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    redirectUri: {type: graphql.GraphQLNonNull(graphql.GraphQLString)},
  },
  async resolve(_, args, ctx: ApiContext){
    const access_mode = "per-user"
    const nonce = randomatic('aA0', 48);
    await knex.table('oauth_states').insert({
      state: nonce,
      account_id: ctx.account.id
    });
    const uri = `https://${args.shop}/admin/oauth/authorize?client_id=${process.env.ShopifyClientID}&scope=write_orders,read_customers&redirect_uri=${args.redirectUri}&state=${nonce}&grant_options[]=${access_mode}`;
    return uri;
  }
}

export async function connectShopifyResponse(_, args, ctx: ApiContext){

  const {
    code,
    hmac,
    timestamp,
    state,
    host,
    shop
  } = qs.parse(args.query,{ignoreQueryPrefix:true});

  const reg = /[^.\s]+\.myshopify\.com/;

  if(!reg.test(`${shop}`)){
    throw new SimpleError('wrong_shop_name');
  }

  if (!hmac || !timestamp || !state || !code || !host) {
    return ctx.loaders.Account.load(ctx.account.id);
  }

  const signature = qs.stringify({
    code,
    host,
    shop,
    state,
    timestamp
  });
  
  const hash = crypto
    .createHmac('sha256', process.env.ShopifyClientSecret)
    .update(signature)
    .digest("hex");


  if( hash !== hmac ){
    throw new SimpleError('wrong_hmac');
  }

  return knex.transaction(async function (transaction) {
    
    const results = await transaction.select("state")
    .from('oauth_states')
    .where({
      "account_id": ctx.account.id,
      "state": state
    })
    .forShare()
    .first();

    if (!results) {
      throw new SimpleError('wrong_state');
    }

    const data = await (
      rp({
        uri: `https://${shop}/admin/oauth/access_token`,
        method: 'POST',
        body:{
          client_id:process.env.ShopifyClientID,
          client_secret:process.env.ShopifyClientSecret,
          code,
        },
        json: true
      })
    );

    await transaction.delete('*')
      .from('oauth_states')
      .where('account_id', ctx.account.id);

    
    const [id] = await transaction.table('shops')
      .insert({
        account_id: ctx.account.id,
        shop,
        token: data.access_token,
      })
      .onConflict()
      .merge({
        token: knex.raw('values(token)'),
        id: knex.raw('LAST_INSERT_ID(id)')
      });

    await rp({
      uri: `https://${shop}/admin/api/2021-10/webhooks.json`,
      method: "POST",
      body: {
        webhook: {
          topic: "app/uninstalled",
          address: process.env.AppURL + `webhooks/uninstall-shopify/${id}`,
          format: "json"
        }
      },
      headers: {
        "X-Shopify-Access-Token": `${data.access_token} `,
      },
      json: true
    });


  })
  .then(
    function(){
      return ctx.loaders.Account.load(ctx.account.id);
    }
  );
  
}
