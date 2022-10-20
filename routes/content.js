var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.set('Content-Type', 'application/json');
  res.json({ title: 'Hello world' });
});

module.exports = router;
