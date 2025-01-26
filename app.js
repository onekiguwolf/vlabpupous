var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const serverless = require('serverless-http')
const router = express.Router()

var app = express();

let views = path.join(__dirname, './views')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// pls work
router.get('/', (req, res) => {
  res.sendFile('index.html', { root: views })
})

//other routers qwp
router.get('/cscpe/01', (req, res) => {
  res.sendFile('./labs/CSCPE/cscpe-01/home.html', { root: views })
})
router.get('/cscpe/01/lab01/aim', (req, res) => {
  res.sendFile('./labs/CSCPE/cscpe-01/lab-01/aim.html', { root: views })
})
router.get('/cscpe/01/lab02/aim', (req, res) => {
  res.sendFile('./labs/CSCPE/cscpe-01/lab-02/aim.html', { root: views })
})
router.get('/cscpe/01/lab03/aim', (req, res) => {
  res.sendFile('./labs/CSCPE/cscpe-01/lab-03/aim.html', { root: views })
})
router.get('/cscpe/01/lab04/aim', (req, res) => {
  res.sendFile('./labs/CSCPE/cscpe-01/lab-04/aim.html', { root: views })
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
module.exports.handler = serverless(app)