const user = require('../models/userModel');

module.exports.insertPDF = (req, res) => {
  console.log(req)
  let {pdfURL, fileUse, userId} = req.body
  console.log('pdf url', pdfURL);
  // let userId = req.user.id;
  user.uploadPDF(pdfURL, fileUse, userId)
    .then(() => {res.status(201).send('PDF Uploaded \n' + pdfURL)})
    .catch(err => res.status(500).send(err));
}
