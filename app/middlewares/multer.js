/*!
 * Moajs Middle
 * Copyright(c) 2015-2019 Alfred Sang <shiren1118@126.com>
 * MIT Licensed
 */

var multer        = require('multer');
// multer上传
module.exports = function (req, res, next) {  
  multer({ 
  	dest: './public/uploads/',
    rename: function (fieldname, filename) {
      return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
    }
  })
  next();
};