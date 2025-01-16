var express = require('express');
var router = express.Router();

/*
This is for: CS-CPE. This is a long one, mind you.
*/
router.get('/01', function(req, res, next) {
  res.render('labs/CSCPE/cscpe-01/home');
});



module.exports = router;
