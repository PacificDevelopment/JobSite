const employers = require('./controllers/employersController');
const jobSearch = require('./controllers/jobSearchController');

const applications = require('./controllers/applicationsController');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello Job Seekers!')
});

app.get('/data/jobsearch', jobSearch.jobSearch);

app.get('/data/jobsearchdescription', jobSearch.scrapeDescription);

app.get('/data/employers', employers.retrieveEmployerData);

app.post('/onclick', applications.oneClickApply);

app.listen(port, () => {
  console.log(`Jobsite app listening at http://localhost:${port}`);
});
