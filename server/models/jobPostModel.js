/* eslint-disable max-len */
/* eslint-disable camelcase */
const { pool } = require('./db/index');

exports.insertJobPost = (
  {
    job_api_id,
    url,
    employer_id,
    street_address = null,
    city = null,
    state = null,
    zip = null,
    phone_number = null,
    description,
    title,
    date_created = Date.now(),
    open = true,
    salary,
    experience_level,
    employment_type,
    work_site,
  },
) => {
  let id;
  pool.query(
    `INSERT INTO Job_Posts (job_api_id, url, employer_id, "street address", city, state, zip, phone_number, description, title, date_created, open, salary, experience_level, employment_type, work_site)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
    RETURNING id`,
    [job_api_id, url, employer_id, street_address, city, state, zip, phone_number, description, title, date_created, open, salary, experience_level, employment_type, work_site],
  )
    .then((job_post_id) => { id = job_post_id; })
    .catch((err) => console.log(err));
  return id;
};
