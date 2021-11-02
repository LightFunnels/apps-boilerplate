
exports.up = async function(knex) {
  await knex.raw('SET FOREIGN_KEY_CHECKS=0');
  await knex.raw(`DROP TABLE IF EXISTS accounts, shops, connections, oauth_states, records`);
  await knex.raw('SET FOREIGN_KEY_CHECKS=1');
  return knex.schema.createTable(
  	'accounts',
  	function (table) {
  		table.increments();
  		table.integer('lightfunnels_account_id').unsigned().unique();
      table.string('lightfunnels_token').notNullable();
  	}
  )
  .createTable(
    'shops',
    function (table) {
      table.increments();
      table.integer('account_id').unsigned();
      table.foreign('account_id').references('accounts.id').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('token').notNullable();
      table.string('shop').notNullable().unique();
    }
  )
  .createTable(
    'connections',
    function (table) {
      table.increments();
      table.string('webhook_suffix', 36).notNullable();
      table.integer('lightfunnels_webhook_id').unsigned().notNullable();
      table.integer('shop_id').unsigned().notNullable();
      table.foreign('shop_id').references('shops.id').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('funnel_id').unsigned();
    }
  )
  .createTable(
    'oauth_states',
    function (table) {
      table.string('state', 48);
      table.integer('account_id').unsigned();
      table.foreign('account_id').references('accounts.id').onUpdate('CASCADE').onDelete('CASCADE');
    }
  )
  .createTable(
    'records',
    function (table) {
      table.increments();
      // table.integer('account_id').unsigned().notNullable();

      table.integer('connection_id').unsigned().notNullable();
      table.string('shopify_order_id').notNullable();
      table.integer('payment_id').unsigned().notNullable();
      table.integer('order_id').unsigned().notNullable();
      table.integer('order_name').unsigned().notNullable();

      table.foreign('connection_id').references('connections.id').onUpdate('CASCADE').onDelete('CASCADE');

      table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable();
    }
  );
};

exports.down = async function(knex) {
  
};
