/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const savedJobModels = require('../models/savedJobModel.js');
const employerModel = require('../models/employerModel');
const jobPostModel = require('../models/jobPostModel');

exports.saveJob = async (req, res) => {
  const {
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
    company,
    employmentType,
    experienceLevel,
    worksite,
  } = req.body;

  let employer_id;
  await employerModel.insertEmployer({ name: company })
    .then((data) => {
      employer_id = data.rows[0].id;
    })
    .catch((err) => console.log(err));

  let job_post_id;
  await jobPostModel.insertJobPost({
    job_api_id: url,
    url,
    employer_id,
    street_address: locations,
    description,
    title,
    date_created: date,
    salary: parseInt(salary_max, 10),
    experience_level: experienceLevel,
    employment_type: employmentType,
    work_site: worksite,
  })
    .then((data) => { job_post_id = data.rows[0].id; })
    .catch((err) => console.log(err));

  const { session_id, interest_level } = req.body;
  savedJobModels.saveJob(session_id, interest_level, job_post_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getSavedJobs = (req, res) => {
  savedJobModels.getSavedJobs(req.body.session_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
