const path = require('path');
const express = require('express');
const employers = require('./controllers/employersController');
const jobSearch = require('./controllers/jobSearchController');

const applications = require('./controllers/applicationsController');
const savedJobs = require('./controllers/savedJobsController');

const app = express();
const port = 3000;

app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello Job Seekers!');
});

app.get('/data/jobsearch', jobSearch.jobSearch);

app.get('/data/jobsearchdescription', jobSearch.scrapeDescription);

app.get('/data/employers', employers.retrieveEmployerData);

app.post('/appliedJobs', applications.oneClickApply);

app.get('/appliedJobs', applications.getAppliedJobs);

app.post('/saveJob', savedJobs.saveJob);

app.get('/savedJobs', savedJobs.getSavedJobs);

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
