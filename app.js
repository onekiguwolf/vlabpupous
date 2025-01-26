var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const serverless = require('serverless-http')

var indexRouter = require('./routes/index');
var cs01 = require('./routes/CSCPE/01/annetworks');
var cs01lab01 = require('./routes/CSCPE/01/lab01/cscpe-01-01')
var cs01lab02 = require('./routes/CSCPE/01/lab02/cscpe-01-02')
var cs01lab03 = require('./routes/CSCPE/01/lab03/cscpe-01-03')
var cs01lab04 = require('./routes/CSCPE/01/lab04/cscpe-01-04')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/cscpe/01', cs01);
app.use('/cscpe/01/lab01', cs01lab01)
app.use('/cscpe/01/lab02', cs01lab02)
app.use('/cscpe/01/lab03', cs01lab03)
app.use('/cscpe/01/lab04', cs01lab04)

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

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app)