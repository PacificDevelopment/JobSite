const { pool } = require('./db/index');

exports.saveJob = async (session_id, interest_level, job_post_id) => {
  const user = pool.query('SELECT id FROM Users WHERE session_id = $1', [session_id]);
  const response = pool.query('INSERT INTO Saved_Jobs (interest_level, job_post_,id, user_id) VALUES $1, $2, $3', [interest_level, job_post_id, user]);
  return response;
};

exports.getSavedJobs = async (session_id) => {
  const user = await pool.query('SELECT id FROM Users WHERE session_id = $1', [session_id]);

  const response = pool.query('SELECT job_post_id FROM Saved_Jobs WHERE user_id = $1', [user]);
  return response;
  //SELECT * FROM Job_Posts WHERE id = any of the job_post_id's that are in response
};
