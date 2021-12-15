const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./user');

module.exports = function (passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.rows[0].hash, (err, result) => {
          console.log('b', user.rows[0].hash, password, err, result);
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          }
          return done(null, false);
        });
      });
    }),
  );

  passport.serializeUser((user, cb) => {
    console.log('s', user);
    cb(null, user.rows[0].id);
  });
  passport.deserializeUser((id, cb) => {
    User.findById({ id }, (err, user) => {
      console.log('fbid', user);
      const userInformation = {
        username: user.username,
      };
      cb(err, userInformation);
    });
  });
};
