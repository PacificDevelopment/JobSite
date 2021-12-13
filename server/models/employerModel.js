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
