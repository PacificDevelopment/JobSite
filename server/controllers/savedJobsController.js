/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const savedJobModels = require('../models/savedJobModel');
const employerModel = require('../models/employerModel');
const jobPostModel = require('../models/jobPostModel');

exports.saveJob = async (req, res) => {
  if (req.user === undefined) {
    res.status(401).send("Please Login to your JobSite account");
  }
  console.log('Current User', req.user);
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
    interest_level,
  } = req.body.job;

  await employerModel.insertEmployer({ name: company })
    .then((data) => {
      req.body.job.employer_id = data.rows[0].id;
    })
    .catch((err) => console.log(err));

  let job_post_id;
  await jobPostModel.insertJobPost(req.body.job)
    .then((data) => { job_post_id = data.rows[0].id; })
    .catch((err) => console.log(err));
  savedJobModels.saveJob(req.user.id, interest_level, job_post_id)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getSavedJobs = (req, res) => {
// Kevin and Duncan will add the userID. in the meantime, use hard coded:
  req.user = {
    id: 1,
  };
  savedJobModels.getSavedJobs(req.user.id)
    .then((data) => {
      res.status(200).send(data.rows);
    })
    .catch((err) => {
      res.send(err);
    });
};
