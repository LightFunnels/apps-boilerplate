import Knex from 'knex';

var knex = Knex({
  client: 'mysql',
  connection: {
    host : process.env.DbHost,
    user : process.env.DbUser,
    database : process.env.DbName,
    password : process.env.DbPass,
    dateStrings: true,
  },
});

export default knex;