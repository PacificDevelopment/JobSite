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
    date_created = new Date(),
    open = true,
    salary = 0,
    experience_level,
    employment_type,
    work_site,
  },
) => {
  return pool.query(
    `WITH input_rows(job_api_id, url, employer_id, "street address", city, state, zip, phone_number, description, title, date_created, open, salary, experience_level, employment_type, work_site) AS (
      VALUES
         ($1::varchar(200), $2::varchar(200), $3::int, $4::varchar(100), $5::varchar(50), $6::varchar(50), $7::varchar(10), $8::smallint, $9::text, $10::varchar(100), $11::timestamptz, $12::boolean, $13::int, $14::experience_levels, $15::employment_types, $16::work_site_types)
      )
   , ins AS (
      INSERT INTO Job_Posts (job_api_id, url, employer_id, "street address", city, state, zip, phone_number, description, title, date_created, open, salary, experience_level, employment_type, work_site)
      SELECT * FROM input_rows
      ON CONFLICT (job_api_id) DO NOTHING
      RETURNING id
      )
      SELECT 'inserted' AS source
     , id
     FROM   ins
     UNION  ALL
     SELECT 'already existed' AS source
     , j.id
    FROM   input_rows
    JOIN   Job_Posts j USING (job_api_id);`,
    [job_api_id, url, employer_id, street_address, city, state, zip, phone_number, description, title, date_created, open, salary, experience_level, employment_type, work_site],
  );
};
