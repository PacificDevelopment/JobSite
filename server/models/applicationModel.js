/* eslint-disable camelcase */

const { pool } = require('./db/index');

exports.quickApply = async (id, job_post_id) => {
  const resume = await pool.query('SELECT resume_pdf_url FROM Users WHERE id = $1', [id]);
  const employerID = await pool.query('SELECT employer_id FROM Job_Posts WHERE id = $1', [job_post_id]);

  // to do:is this syntax correct?

  // to do: delete from Saved_Jobs

  const response = await pool.query(
    'INSERT into Applications (employer_id, cover_letter_attach_url, resume_attach_url, job_post_id, user_id, date_applied) values ($1, $2, $3, $4, $5, $6)',
    [employerID, coverLetter, resume, job_post_id, user, 'NOW()'],
  );
  return response;
};

exports.applyForJob = (user_id, employer_id, job_post_id, resume_attach_url) => pool.query('INSERT INTO applications (employer_id, job_post_id, user_id, resume_attach_url, date_applied) VALUES ($1, $2, $3, $4, NOW())', [employer_id, job_post_id, user_id, resume_attach_url]);

exports.getAppliedJobs = async (user_id) => {
  const response = await pool.query(
    'SELECT * FROM Job_Posts j LEFT JOIN Applications a ON j.id = a.job_post_id WHERE a.user_id = $1',
    [user_id],
  );
  return response;
};
