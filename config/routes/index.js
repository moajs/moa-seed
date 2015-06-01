var fs     = require('fs');
var routes = require('require-directory')(module);

/**
 * Mount routes with directory.
 *
 * Examples:
 *
 *     // mount routes in app.js
 *     require('./config/routes')(app);
 *
 * @param {Object} app
 * @param {Object} routes
 * @param {String} pre
 * @return 
 * @api public
 */
function mount(app) {
  var r = arguments[1] || routes;
  var pre = arguments[2] || '';
  
  for (var k in r) {
    console.log('mount /' + pre + '' + k + " route");
  
    if(typeof r[k] == 'object') {
      console.log('this is a obj');
      mount(app, r[k], pre + k + '/');
    }else if(k === 'home') {
      app.use('/', r[k]);
    }else {
      app.use('/' + pre + '' + k, r[k]);
    }
  }
}

// for test
// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
//
//
// var app = express();
//
// mount(app) ;

module.exports = mount;