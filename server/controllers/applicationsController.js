/* eslint-disable camelcase */

const applicationModel = require('../models/applicationModel.js');
const employerModel = require('../models/employerModel');
const jobPostModel = require('../models/jobPostModel');
const userModel = require('../models/userModel');

exports.oneClickApply = async (req, res) => {
  if (req.user === undefined) {
    res.status(401).send('Please Login to your JobSite account');
    return;
  }
  const {
    company,
  } = req.body.job;

  // Make employer if it doesn't exist
  // Get Employer ID
  await employerModel.insertEmployer({ name: company })
    .then((data) => {
      req.body.job.employer_id = data.rows[0].id;
    })
    .catch((err) => console.log(err));

  // Make job post if doesn't exist
  // Get Job Post ID
  let job_post_id;
  await jobPostModel.insertJobPost(req.body.job)
    .then((data) => { job_post_id = data.rows[0].id; })
    .catch((err) => console.log(err));

  // Get Resume to attach
  // in the future deal with case where user is logged in but has no resume
  let resume_attach_url;
  await userModel.getPDF(req.user.id)
    .then((data) => { resume_attach_url = data.rows[0].id; })
    .catch((err) => console.log(err));

  // Make application row with - Similar to Save Jobs Row
  // Job post ID, user id, resume URL
  applicationModel.applyForJob(
    req.user.id,
    req.body.job.employer_id,
    job_post_id,
    resume_attach_url,
  )
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });

  // const reqdata = req.body;
  // oneClickModels.quickApply(reqdata.session_id, reqdata.job_post_id)
  //   .then((data) => console.log('WE ARE MASTERS'), data)
  //   .then(() => res.status(200).send(data))
  //   .catch((err) => console.log('WHYYYYY', err));
};

exports.getAppliedJobs = (req, res) => {
  if (req.user === undefined) {
    res.status(401).send('Please login to your JobSite account');
  } else {
    const user_id = req.user.id;
    applicationModel.getAppliedJobs(user_id)
      .then((data) => {
        res.status(200).send(data.rows);
      })
      .catch((err) => res.status(500).send(err));
  }
};
