const oneClickModels = require('../models/applicationModel.js');

exports.oneClickApply = (req, res) => {
  const reqdata = req.body;
  oneClickModels.quickApply(reqdata.session_id, reqdata.job_post_id)
    .then((data) => console.log('WE ARE MASTERS'), data)
    .then(() => res.status(200).send(data))
    .catch((err) => console.log('WHYYYYY', err));
}

exports.getAppliedJobs = (req, res) => {
  const user_id = req.body.user_id //change this to the correct name
  oneClickModels.getAppliedJobs(user_id)
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => res.send(err))
}
