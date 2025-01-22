var express = require('express');
var router = express.Router();

// Lab 01 - ANN

router.get('/aim', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-01/aim')
})

router.get('/01/lab01/theory', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-01/theory')
})

router.get('/01/lab01/procedure', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-01/procedure')
})

router.get('/01/lab01/observations', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-01/observations')
})

module.exports = router;
