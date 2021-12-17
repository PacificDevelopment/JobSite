const oneClickModels = require('../models/applicationModel.js');

exports.oneClickApply = (req, res) => {
  const reqdata = req.body;
  oneClickModels.quickApply(reqdata.session_id, reqdata.job_post_id)
    .then((data) => console.log('WE ARE MASTERS'), data)
    .then(() => res.status(200).send(data))
    .catch((err) => console.log('WHYYYYY', err));
}

exports.getAppliedJobs = (req, res) => {
  if (req.user === undefined) {
    res.status(401).send('Please login to your JobSite account')
  } else {
    oneClickModels.getAppliedJobs(req.user.id)
      .then((data) => {
        res.status(200).send(data)
      })
      .catch((err) => {
        console.log(err.message)
        res.send(err)
      })
  }
}
