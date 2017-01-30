var express = require('express');
var bodyParser = require('body-parser');
var urlStatus = require('url-status');
var nodemailer = require('nodemailer');
var fs = require('fs');
var http = require('http');
var https = require('https');

var app = express();
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(express.static(__dirname + '/public_html'));
app.set('view engine', 'ejs');

var portnumber = 3000;
//Redirect Everything to http without www
// app.get('*', function(req, res, next) {
//
//   weather.get(function(callback){
//     temp = callback;
//   })
//
//   if (req.headers.host.match(/^www/) !== null ) {
//     res.redirect('https://' + req.headers.host.replace(/^www\./, '') + req.url);
//   } else {
//     next();
//   }
// })



app.post('/', function (req, res){
  res.render('./pages/index',{
    title: "Hello World3",
    body: "Hello World"
  });
})

app.get('/', function (req, res){
  res.render('./pages/index',{
    title: "Hello World",
    body: "Hello World"
  });
})
app.get('/checkout', function (req, res){
  res.render('./pages/checkout',{

  });
})
app.get('/contact', function (req, res){
  res.render('./pages/contact',{

  });
})

app.get('/pricing', function (req, res){
  res.render('./pages/pricing',{

  });
})

app.get('/videos', function (req, res){
  res.render('./pages/videos',{

  });
})

app.get('/student-portal', function (req, res){
  res.render('./pages/student-portal',{

  });
})

app.get('/tutoring-experience', function (req, res){
  res.render('./pages/tutoring-experience',{

  });
})



module.exports = app;

app.listen(portnumber);
//console.log("Express Server with EJS Running on Port: "+portnumber);
