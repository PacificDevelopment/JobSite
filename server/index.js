const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');

const employers = require('./controllers/employersController');
const User = require('./user'); // update to postgres pool

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
); // ^^^ Might need to delete Cors since there is no cross-server?
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
require('./passportConfig')(passport);

// -------------------------------------- END OF MIDDLEWARE-----------------------------------------

app.get('/', (req, res) => {
  res.send('Hello Job Seekers!');
});

app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.send('No User Exists');
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send('Successfully Authenticated');
        console.log(req.user);
      });
    }
  })(req, res, next);
});
app.post('/register', (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send('User Already Exists');
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send('User Created');
    }
  });
});
app.get('/user', (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside it.
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

app.listen(port, () => {
  console.log(`Jobsite app listening at http://localhost:${port}`);
});
