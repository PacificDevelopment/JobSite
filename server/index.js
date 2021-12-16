const path = require('path');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');

// ----------------------------------------- END OF IMPORTS-----------------------------------------

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:3000', // <-- location of the react app were connecting to
    credentials: true,
  }),
);
app.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true,
  }),
);
app.use(cookieParser('secretcode'));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded());
require('./passportConfig')(passport);

const employers = require('./controllers/employersController');
const jobSearch = require('./controllers/jobSearchController');
const user = require('./controllers/usersController');
const applications = require('./controllers/applicationsController');
const savedJobs = require('./controllers/savedJobsController');
const authorization = require('./controllers/authController');
// -------------------------------------- END OF MIDDLEWARE-----------------------------------------

app.get('/', (req, res) => {
  res.send('Hello Job Seekers!');
});

app.post('/login', authorization.login);
app.post('/register', authorization.register);
app.get('/user', (req, res) => {
  if (!req.user) {
    req.user = { loggedIn: false };
  } else {
    req.user.loggedIn = true;
  }
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside it.
});

app.post('/data/upload', user.insertPDF);

app.get('/data/jobsearch', jobSearch.jobSearch);

app.get('/data/jobsearchdescription', jobSearch.scrapeDescription);

app.get('/data/employers', employers.retrieveEmployerData);

app.post('/appliedJobs', applications.oneClickApply);

app.get('/appliedJx`obs', applications.getAppliedJobs);

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
