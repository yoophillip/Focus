const { Pool } = require('pg')
//elephant SQL
const PG_URI = 'postgres://@fanny.db.elephantsql.com/qpekcips';

const pool = new Pool({
    connectionString: PG_URI
  });

module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };