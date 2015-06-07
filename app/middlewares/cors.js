/*!
 * Moajs Middle
 * Copyright(c) 2015-2019 Alfred Sang <shiren1118@126.com>
 * MIT Licensed
 */

module.exports = function (req, res, next) {
  require('cors')();
  next();
};