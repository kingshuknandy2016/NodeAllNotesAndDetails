var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/userModel');

var router = express.Router();

/* GET home page. */
router.get('/', ensureAuthenticated, function (req, res, next) {
      res.render('index', { title: 'Members' });
});

function ensureAuthenticated(req, res, next) {
      if (req.isAuthenticated()) {
            next();
      }
      res.redirect('/login');
}

passport.serializeUser(function (user, done) {
      console.log("passport.serilize()......");
      done(null, user);
});

passport.deserializeUser(function (req, id, done) {
      console.log("passport.deserilize()......");
      done(null, req.session.passport.user);
});

var isValidPassword = function (user, password) {
      console.log('pssss::::  '+user.password +'--'+ password);
      return (password === user.password);
};

passport.use('localStrategy', new LocalStrategy(
      function (username, password, done) {
            //check in mongo if a user with  username  exist or not
            User.findOne({ 'username': username }, function (err, user) {

                  if (err)
                        return done(err);

                  if (!user) {
                        console.log('user not found with username' + username);
                        return done(null, false, { message: 'user not found' });
                  }

                  console.log('asad::::  '+user);

                  //user exist but wrong password,log the error
                  if (!isValidPassword(user, password)) {
                        console.log(password+ ' is invalid password');
                        return done(null, false, { message: 'Invalid credentials' });
                  }

                  //user and password both match return user fron
                  //
                  return done(null, user);
            });

      }));

router.post('/login', passport.authenticate('localStrategy', { failureRedirect: '/login', failureFlash: true }), function (req,res,next) {
      console.log('Authentication successful');
      console.log('r.s.p.user' + req.session.passport.user);
      console.log('r.user' + req.user);
      req.flash('successMsg', 'you are logged in');
      res.render('index', { message: req.flash('successMsg') })


});

router.get('/logout', function (req, res) {
      req.logout();
      req.flash('successMsg', 'you have logged out');
      res.render('login', { message: req.flash('successMsg') });
});





router.get('/login', function (req, res, next) {
      res.render('login', { 'title': 'Login' });
});

router.get('/users/register', function (req, res, next) {
      res.render('register', { 'title': 'Register' });
});

module.exports = router;