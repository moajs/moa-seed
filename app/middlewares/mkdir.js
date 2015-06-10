/*!
 * Moajs Middle
 * Copyright(c) 2015-2019 Alfred Sang <shiren1118@126.com>
 * MIT Licensed
 */

var path = require('path');

// 定义变量
module.exports = function (req, res, next) {
  var app = require('../../app');
  var root_path = app.root_path;
  console.log('root_path = ' + root_path);
  
  req.server_path = path.join(root_path, 'public');
  next();
};