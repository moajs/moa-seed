/*!
 * Moajs Middle
 * Copyright(c) 2015-2019 Alfred Sang <shiren1118@126.com>
 * MIT Licensed
 */

// 检查用户会话
module.exports = function(req, res, next) {
  if (req.session.current_user) {
    console.log('session user=' + req.session.current_user);
    if ( req.originalUrl === '/users/login' ) {
      return res.redirect('/');
    }
    return next();
  } else {
    console.log('no session user')
    return res.redirect('/users/login');
  }
};