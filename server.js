//require statements
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mathRouter = require('./routes/math');
var app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: true }));

//send requests to the router
app.use('/math', mathRouter);

//middleware function
app.use(function (req, res, next) {
  console.log('Got a request!');
  next();
});

//sendStatus function for POST requests
app.post('/', function (req, res) {
  console.log('req.body:', req.body);
  res.sendStatus(200);
});

//handler function for GET requests
app.get('/', function (req, res) {
  console.log('Received a request at', new Date());
  var filename = path.join(__dirname, 'public/views/index.html');
  console.log('filename:', filename);
  res.sendFile(filename);
});

app.use(express.static('public'));

//listener function
app.listen(3000);
