var express = require('express');
var router = express.Router();

var User=require('../models/userModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post('/register',function(req, res, next){
    //get form values
    var lname=req.body.name;
    var lemail=req.body.email;
    var lusername=req.body.username;
    var lpassword=req.body.password;
    var lpassword2=req.body.password2;

    //Form validations
    req.checkBody('name','Name field is required').notEmpty();
    req.checkBody('email','Email Field is required').notEmpty();
    req.checkBody('email','Enter a valid email address ').isEmail();
    req.checkBody('username','Usename field is required').notEmpty();
    req.checkBody('password','Password field is required').notEmpty();
    req.checkBody('password2','Passwords do not match').equals(req.body.password);

    //check for errors
    var errors=req.validationErrors();

    if(errors){
        res.render('register',{
            errors : errors,
            fname  :lname,
            femail :lemail,
            fusername:lusername,
            fpassword:lpassword,
            fpassword2:lpassword2

        });
    }else{

      var newUser=new User({
        name:lname,
        email:lemail,
        username:lusername,
        password:lpassword
      });
      User.createUser(newUser,function(err,user){
          if(err)
          throw err;
          console.log(user);
      });

      //Success Message
      console.log("registration was successful");
     // req.flash("successMsg",'You are now registered and you may login');
    //  res.render("index",{message: req.flash("success")});
    res.render('regSuccess');
    }
});


module.exports = router;
