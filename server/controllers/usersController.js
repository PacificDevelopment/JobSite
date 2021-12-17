const user = require('../models/userModel');

module.exports.insertPDF = (req, res) => {
  console.log(req);
  // eslint-disable-next-line prefer-const
  let { pdfURL, fileUse, userId } = req.body;
  userId = req.user.id || userId;
  user.uploadPDF(pdfURL, fileUse, userId)
    .then(() => { res.status(201).send(`PDF Uploaded \n${pdfURL}`); })
    .catch((err) => res.status(500).send(err));
};

module.exports.getPDF = (req, res) => {
  const { fileUse } = req.params;
  const userId = req.user.id;
  user.getPDF(fileUse, userId)
    .then((data) => res.send(data.rows[0][`${fileUse}_pdf_url`]))
    .catch((err) => res.status(500).send(err));
};
