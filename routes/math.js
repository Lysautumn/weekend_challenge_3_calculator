var express = require('express');

//bring in router from express library
var router = express.Router();

router.post('/', function (req, res) {
  console.log('router post');
});

router.get('/', function (req, res) {
  res.send('Got it!');
});

module.exports = router;
