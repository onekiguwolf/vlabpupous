var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next){
  res.render('about');
});

router.get('/disciplines/cs-cpe', function(req, res, next){
  res.render('Disciplines/coengg')
})

router.get('/disciplines/elec-comm', function(req, res, next){
  res.render('Disciplines/elec-comm')
})

router.get('/disciplines/eengg', function(req, res, next){
  res.render('Disciplines/eengg')
})
module.exports = router;
