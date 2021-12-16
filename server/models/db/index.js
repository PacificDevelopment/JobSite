require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DBDATABASE,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
});

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
// });

exports.pool = pool;
