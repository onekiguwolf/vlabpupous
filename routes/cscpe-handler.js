var express = require('express');
var router = express.Router();

/*
This is for: CS-CPE. This is a long one, mind you.
*/
router.get('/01', function(req, res, next) {
  res.render('labs/CSCPE/cscpe-01/home');
});

router.get('/01/lab01/aim', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-01/aim')
})

router.get('/01/lab01/theory', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-01/theory')
})



module.exports = router;
