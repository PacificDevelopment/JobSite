const path = require('path');
const express = require('express');
const employers = require('./controllers/employersController');
const applications = require('./controllers/applicationsController');

const app = express();
const port = 3000;

app.use(express.static('dist'));
app.use(express.json());

// app.get('/job_listings', (req, res) => {
//   console.log('express get request');
//   db.getJobListingss(req.query.product_id)
//     .then((data) => {
//       res.status(200).send(data.data);
//     })
//     .catch((err) => {
//       res.status(404).send(err);
//     });
// });

app.get('/data/employers', employers.retrieveEmployerData);

app.post('/onclick', applications.oneClickApply);

// Should always be last route
app.get('*', (req, res) => {
  if (req.path.endsWith('bundle.js')) {
    res.sendFile(path.resolve(__dirname, '../dist/main.bundle.js'));
  } else {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
  }
});

app.listen(port, () => {
  console.log(`Jobsite app listening at http://localhost:${port}`);
});
