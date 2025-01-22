var express = require('express');
var router = express.Router();

// Lab 02 - ANN

router.get('/aim', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-02/aim')
})

router.get('/theory', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-02/theory')
})

router.get('/procedure', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-02/procedure')
})

router.get('/observations', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-02/observations')
})

router.get('/assignment', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-02/assignment')
})

router.get('/references', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/lab-02/references')
})

module.exports = router;
