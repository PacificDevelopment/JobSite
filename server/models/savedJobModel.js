/* eslint-disable arrow-body-style */
/* eslint-disable camelcase */
const { pool } = require('./db/index');

exports.saveJob = (user_id, interest_level, job_post_id) => {
  return pool.query('INSERT INTO Saved_Jobs (interest_level, job_post_id, user_id) VALUES ($1, $2, $3)', [interest_level, job_post_id, user_id]);
};

exports.getSavedJobs = async (user_id) => {
  return pool.query('SELECT * FROM Job_Posts j LEFT JOIN Saved_Jobs s ON j.id = s.job_post_id WHERE s.user_id = $1', [user_id]);
};

exports.deleteSavedJob = async (user_id, job_post_id) => {
  return pool.query('DELETE FROM Saved_Jobs WHERE user_id = $1 AND job_post_id = $2', [user_id, job_post_id]);
};
