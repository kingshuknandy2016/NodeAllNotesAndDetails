var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

// Show Contact Form
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

// Send Email
router.post('/send', function(req, res, next) {
    // create Reusable Transporter
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'kingshuknandy24@gmail.com',
            pass: '9007438097kingshuk'
        }
    });

    // Email Setup
    var mailOptions = {
        from: 'Fleeting Moments <admin@fleetingmoments.net>',
        to: 'kingshuknandy1990@gmail.com',
        subject: 'Website Submission',
        // Plain Text Version
        text: 'You have a submission with the following details... Name: '+req.body.name +'Email: '+req.body.email +'Message: '+req.body.message,
        // HTML Version
        html: '<p>You got a website submission with the following details...</p><ul><li>Name: <b>'+req.body.name+'</b></li><li>Email: <b>'+req.body.email+'</b></li><li>Message: <b>'+req.body.message+'</b></li></ul>'
    };

    // Send
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.redirect('/');
        }else{
            console.log('Message sent: ' + info.response);
            res.redirect('/');
        }
    });
});

module.exports = router;