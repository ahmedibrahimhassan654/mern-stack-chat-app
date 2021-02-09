const LocalStrategy = require('passport-local').Strategy;
const sha256 = require("js-sha256");
const bcrypt = require('bcryptjs');

// Load User model
const User = require('../models/User');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        

        // Match password
        bcrypt.compare(sha256(password + process.env.SALT), user.password, (err) => {
          if (err) throw err;
        //   console.log(user);

        // console.log(sha256(password + process.env.SALT));
        if(sha256(password + process.env.SALT)===user.password){
            return done(null, user);
        }else{
            return done(null, false, { message: 'Password incorrect' });
        }
       
        });
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};