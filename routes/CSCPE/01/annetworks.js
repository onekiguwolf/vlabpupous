var express = require('express');
var router = express.Router();

/* Pages for different Home Pages -- CSCPE*/
router.get('/', function(req, res, next){
  res.render('../../../labs/CSCPE/cscpe-01/home')
})
router.get('/lab01', function(req, res, next) {
  res.render('../../../labs/CSCPE/cscpe-01/lab01/aim');
});
router.get('/lab02', function(req, res, next) {
  res.render('../../../labs/CSCPE/cscpe-01/lab02/aim');
});
router.get('/lab03', function(req, res, next) {
  res.render('../../../labs/CSCPE/cscpe-01/lab03/aim');
});
router.get('/lab04', function(req, res, next) {
  res.render('../../../labs/CSCPE/cscpe-01/lab04/aim');
});

module.exports = router;
