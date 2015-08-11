var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var mount         = require('mount-routes');
var res_api       = require('res.api');

require('./config/mongo');

var current_path = process.cwd();

console.log(current_path)

var app = express();

// global api
app.use(res_api);

app.root_path = __dirname;

var $middlewares = require('moa-middlewares')(app);

// $middlewares.dir();

// console.dir($middlewares)

$middlewares.mount([
  // 'check_session_is_expired',
  'variables', // 定义变量
  'raw_post',
  'multer',  
  'session'
])
// $middlewares.mount(['cors']);

// $middlewares.mount(['cors','mkdir']);

// app.use($middlewares.cors);

// view engine setup
app.set('views', path.join(current_path, '/app/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// mount routes
// require('./config/routes')(app);
mount(app, current_path + '/app/routes');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

process.on('uncaughtException', function (err) {
  //打印出错误
  console.log(err);
  //打印出错误的调用栈方便调试
  console.log(err.stack);
});

module.exports = app;
