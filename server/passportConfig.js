const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/userModel');

module.exports = function (passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username }, (err, user) => {
        if (err) throw err;
        if (user.rows[0] === undefined) return done(null, false);
        bcrypt.compare(password, user.rows[0].hash, (err, result) => {
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
    cb(null, user.rows[0].id);
  });
  passport.deserializeUser((id, cb) => {
    User.findById(id, (err, user) => {
      const userInformation = {
        username: user.rows[0].email,
        id: user.rows[0].id,
      };
      cb(err, userInformation);
    });
  });
};
