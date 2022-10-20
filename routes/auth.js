var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("auth route hit with");
  console.log(req.query);
  console.log(req.query);
});

module.exports = router;
