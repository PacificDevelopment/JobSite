const user = require('../models/userModel');

module.exports.insertPDF = (req, res) => {
  console.log(req)
  let {pdfURL, fileUse, userId} = req.body
  userId = req.user.id || userId
  console.log('pdf url', pdfURL);
  user.uploadPDF(pdfURL, fileUse, userId)
    .then(() => {res.status(201).send('PDF Uploaded \n' + pdfURL)})
    .catch(err => res.status(500).send(err));
}
