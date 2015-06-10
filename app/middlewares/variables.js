/*!
 * Moajs Middle
 * Copyright(c) 2015-2019 Alfred Sang <shiren1118@126.com>
 * MIT Licensed
 */
var path = require('path')
// 定义变量
module.exports = function (req, res, next) {
  req.server_path = path.join(__dirname, 'public');
  next();
};
