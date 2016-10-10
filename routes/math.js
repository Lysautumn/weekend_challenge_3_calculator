var express = require('express');

//bring in router from express library
var router = express.Router();

//get info from router
//perform math operations
var answer = '0';
router.post('/', function (req, res) {
  if (req.body.operator == 'add') {
    answer = parseFloat(req.body.x) + parseFloat(req.body.y);
    res.sendStatus(200);
  } else if (req.body.operator == 'sub') {
    answer = parseFloat(req.body.x) - parseFloat(req.body.y);
    res.sendStatus(200);
  } else if (req.body.operator == 'divide') {
    answer = parseFloat(req.body.x) / parseFloat(req.body.y);
    res.sendStatus(200);
  } else if (req.body.operator == 'multiply') {
    answer = parseFloat(req.body.x) * parseFloat(req.body.y);
    res.sendStatus(200);
  } else {
    console.log('Not working');
    res.sendStatus(400);
  }
});

//send math back to client.js
router.get('/', function (req, res) {
  console.log(answer);
  res.send(answer.toString());
});

module.exports = router;
