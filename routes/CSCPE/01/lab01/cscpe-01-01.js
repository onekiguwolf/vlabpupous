var express = require('express');
var router = express.Router();

// Lab 01 - ANN

router.get('/aim', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-01/aim')
})

router.get('/theory', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-01/theory')
})

router.get('/procedure', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-01/procedure')
})

router.get('/observations', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-01/observations')
})

router.get('/assignment', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-01/assignment')
})

router.get('/references', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-01/references')
})

module.exports = router;
