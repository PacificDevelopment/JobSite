/* eslint-disable arrow-body-style */
/* eslint-disable camelcase */
const { pool } = require('./db/index');

exports.saveJob = (user_id, interest_level, job_post_id) => {
  return pool.query('INSERT INTO Saved_Jobs (interest_level, job_post_,id, user_id) VALUES ($1, $2, $3)', [interest_level, job_post_id, user_id]);
};

exports.getSavedJobs = async () => {
  const response = pool.query('SELECT job_post_id FROM Saved_Jobs WHERE user_id = $1', [user]);
  return response;
  //SELECT * FROM Job_Posts WHERE id = any of the job_post_id's that are in response
};
