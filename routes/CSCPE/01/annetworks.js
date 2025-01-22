var express = require('express');
var router = express.Router();

/* Pages for different Home Pages -- CSCPE*/
router.get('/', function(req, res, next){
  res.render('labs/CSCPE/cscpe-01/home')
})
router.get('/lab01', function(req, res, next) {
  res.render('labs/CSCPE/cscpe-01/lab-01/aim');
});

module.exports = router;
