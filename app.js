var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var mount         = require('mount-routes');
var multer        = require('multer');
var session       = require('express-session')
var MongoStore    = require('connect-mongo')(session);
var mongoose      = require('mongoose');

require('./config/mongo');

var app = express();

// 支持跨域
app.use(require('cors')());

app.use(function(req, res, next) {
  req.server_path = path.join(__dirname, 'public');
  return next();
});


// for raw data
app.use(function(req, res, next){
  if (req.is('text/*')) {
    req.text = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){ req.text += chunk });
    req.on('end', next);
  } else {
    next();
  }
});

app.use(multer({ 
	dest: './public/uploads/',
  rename: function (fieldname, filename) {
    return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
  }
}))


var half_hour = 3600000 / 2;

app.use(session({
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  secret: 'moajs.org@me',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: half_hour
  }
}));


// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
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
mount(app, __dirname + '/app/routes');

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

module.exports = app;
