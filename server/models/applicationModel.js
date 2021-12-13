const { pool } = require('./db/index');

exports.quickApply = async (session_id, job_post_id) => {
  const user = await pool.query('SELECT id FROM Users WHERE session_id = $1', [session_id]);
  const resume = await pool.query('SELECT resume_pdf_url FROM Users WHERE id = $1', [user]);
  const coverLetter = await pool.query('SELECT cover_letter_pdf_url FROM Users WHERE id = $1', [user]);
  const employerID = await pool.query('SELECT employer_id FROM Job_Posts WHERE id = $1', [job_post_id]);

  const response = await pool.query(
    'INSERT into Applications (employer_id, cover_letter_attach_url, resume_attach_url, job_post_id, user_id, date_applied) values ($1, $2, $3, $4, $5, $6)',
    [employerID, coverLetter, resume, job_post_id, user, NOW()],
  );
  return response;
};
