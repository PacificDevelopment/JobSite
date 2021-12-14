const pool = require('./models/db/index');

const user = {
  findOne: async (username, cb) => {
    const user = await pool.pool.query('SELECT id FROM Users WHERE email = $1', [username.username]);
    console.log('findOne', user);
    console.log('findOne', user.rows);
    cb(null, user);
  },
  findById: async (id, cb) => {
    const user = await pool.pool.query('SELECT id FROM Users WHERE id = $1', [id]);
    console.log('findById', user);
    cb(null, user);
  },
  insert: async (username, hashPass, salt) => {
    const newUser = await pool.pool.query(
      'INSERT into Users (email, hash, password_salt, date_created, employer_enabled) values ($1, $2, $3, $4, $5)',
      [username, hashPass, salt, 'NOW()', false],
    );
  },
};

module.exports = user;
