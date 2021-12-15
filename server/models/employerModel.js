/* eslint-disable arrow-body-style */
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
    date_created = new Date(),
  },
) => {
  return pool.query(
    `WITH input_rows(logo_url, street_address, city, state, zip, phone_number, name, date_created) AS (
      VALUES
         ($1::varchar(200), $2::varchar(200), $3::varchar(50), $4::varchar(50), $5::varchar(10), $6::smallint, $7::varchar(100), $8::timestamptz)
      )
   , ins AS (
      INSERT INTO Employers (logo_url, street_address, city, state, zip, phone_number, name, date_created)
      SELECT * FROM input_rows
      ON CONFLICT (name) DO NOTHING
      RETURNING id
      )
      SELECT 'inserted' AS source
     , id
     FROM   ins
     UNION  ALL
     SELECT 'already existed' AS source
     , e.id
    FROM   input_rows
    JOIN   Employers e USING (name);`,
    [logo_url, street_address, city, state, zip, phone_number, name, date_created],
  );
};

// `INSERT INTO Employers (logo_url, street_address, city, state, zip, phone_number, name, date_created)
// VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
// RETURNING id`
