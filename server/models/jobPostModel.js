/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable camelcase */
const { pool } = require('./db/index');

exports.insertJobPost = (
  {
    employer_id,
    salary_min,
    locations,
    salary_type,
    date,
    description,
    salary_currency_code,
    salary,
    site,
    url,
    title,
    salary_max,
    employmentType,
    experienceLevel,
    worksite,
  },
) => {
  return pool.query(
    `WITH input_rows(
      employer_id,
      salary_min,
      locations,
      salary_type,
      date,
      description,
      salary_currency_code,
      salary,
      site,
      url,
      title,
      salary_max,
      employmentType,
      experienceLevel,
      worksite) AS (
      VALUES
         ($1::int, $2::int, $3::varchar(100), $4::varchar(10), $5::timestamptz, $6::text, $7::varchar(10), $8::varchar(50), $9::varchar(10), $10::varchar(200), $11::varchar(100), $12::int, $13::employment_types, $14::experience_levels, $15::work_site_types)
      )
   , ins AS (
      INSERT INTO Job_Posts (employer_id,
        salary_min,
        locations,
        salary_type,
        date,
        description,
        salary_currency_code,
        salary,
        site,
        url,
        title,
        salary_max,
        employmentType,
        experienceLevel,
        worksite)
      SELECT * FROM input_rows
      ON CONFLICT (url) DO NOTHING
      RETURNING id
      )
      SELECT 'inserted' AS source
     , id
     FROM   ins
     UNION  ALL
     SELECT 'already existed' AS source
     , j.id
    FROM   input_rows
    JOIN   Job_Posts j USING (url);`,
    [employer_id,
      salary_min,
      locations,
      salary_type,
      date,
      description,
      salary_currency_code,
      salary,
      site,
      url,
      title,
      salary_max,
      employmentType,
      experienceLevel,
      worksite],
  );
};
