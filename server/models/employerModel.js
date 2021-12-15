/* eslint-disable camelcase */
const { pool } = require('./db/index');

exports.getSingleEmployerData = (employerId, callback) => {
  pool.query(
    'SELECT * FROM Employers WHERE Employers.id = $1',
    [employerId],
    (err, results) => {
      if (err) {
        console.log('Error getting Employer data from Database', err);
        callback(err);
      } else {
        callback(null, results.rows[0]);
      }
    },
  );
};

exports.insertEmployer = (
  {
    name,
    logo_url = null,
    street_address = null,
    city = null,
    state = null,
    zip = null,
    phone_number = null,
    date_created = Date.now(),
  },
) => {
  let id;
  pool.query(
    `INSERT INTO Employers (logo_url, street_address, city, state, zip, phone_number, name, date_created)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING id`,
    [logo_url, street_address, city, state, zip, phone_number, name, date_created],
  )
    .then((employer_id) => { id = employer_id; })
    .catch((err) => console.log(err));
  return id;
};
