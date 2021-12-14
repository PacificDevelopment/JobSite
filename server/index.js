const express = require('express');
const employers = require('./controllers/employersController');
const applications = require('./controllers/applicationsController');
const savedJobs = require('./controllers/savedJobsController');
const app = express();
const port = 3000;

app.use(express.static('dist'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Job Seekers!');
});

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

app.post('/appliedJobs', applications.oneClickApply);

app.get('/appliedJobs', applications.getAppliedJobs);

app.post('/savedJobs', savedJobs.saveJob);

app.get('/savedJobs', savedJobs.getSavedJobs);

app.listen(port, () => {
  console.log(`Jobsite app listening at http://localhost:${port}`);
});
