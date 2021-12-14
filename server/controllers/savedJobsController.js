const saveJobModels = require('../models/savedJobModel.js');

exports.saveJob = (req, res) => {
  const { session_id, interest_level, job_post_id } = req.body;
  saveJobModels.saveJob(session_id, interest_level, job_post_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.send(err);
    })
}

exports.getSavedJobs = (req, res) => {
  savedJobModels.getSavedJobs(req.body.session_id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.send(err);
    })
}