var express = require('express');
var router = express.Router();

// Lab 02 - ANN

router.get('/aim', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-03/aim')
})

router.get('/theory', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-03/theory')
})

router.get('/procedure', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-03/procedure')
})

router.get('/observations', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-03/observations')
})

router.get('/assignment', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-03/assignment')
})

router.get('/references', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-03/references')
})

module.exports = router;
