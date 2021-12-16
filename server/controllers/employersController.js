const employer = require('../models/employerModel');

exports.retrieveEmployerData = (req, res) => {
  employer.getSingleEmployerData(req.query.employer_id, (err, employerData) => {
    if (err) {
      res.status(500).send("Error getting employer data");
    } else {
      res.status(200).send(employerData);
    }
  })
};
