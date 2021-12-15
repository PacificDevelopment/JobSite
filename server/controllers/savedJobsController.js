/* eslint-disable camelcase */
const savedJobModels = require('../models/savedJobModel.js');
const employerModel = require('../models/employerModel');
const jobPostModel = require('../models/jobPostModel');

exports.saveJob = (req, res) => {
  // const employerId = employerModel.insertEmployer();
  // const job_post_id = jobPostModel.insertJobPost();

  const { session_id, interest_level, job_post_id } = req.body;
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
