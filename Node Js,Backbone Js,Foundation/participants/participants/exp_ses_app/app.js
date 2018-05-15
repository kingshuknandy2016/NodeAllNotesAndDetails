var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session=require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: 'superSecretTokenUsedToEncryptSID',
  resave: true,
  saveUninitialized: true,
  //name : "bls",
  unset:"destroy",  //VVINP by default keep
  cookie: { maxAge : 60000,httpOnly :true }
}))

app.use(function(req,res,next){
  var ses=req.session;
  if(ses.user){
    ses.views=ses.views+1;
    if(ses.views===5){
      //req.session= null //OR
      req.session.destroy(()=>console.log("session was destroyed"));
    }
    res.setHeader('Content-Type','text/html');
    res.write('<h2>Express session Demo:</h2>');
    res.write('<p>Total Views:'+(ses.views)+'</p>');
    res.write('<p>Session expires in:'+(ses.cookie.maxAge/1000)+'</p>');
    res.write('<p>Cookie Id:'+JSON.stringify(ses.id)+'</p>');
    res.write('<p>Cookie Info:'+JSON.stringify(ses.cookie)+'</p>');
    res.write('<p>User Info:'+JSON.stringify(ses.user)+'</p>');
    res.end(); 
  }else{
    ses.views=1;
    ses.user={id:1,username:"sanjana",role:"admin"};
    res.end('<h2>welcome to session demo. refresh!</h2>')
  }


});

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
