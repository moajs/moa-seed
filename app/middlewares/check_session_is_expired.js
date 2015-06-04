var check_session_is_expired;

module.exports = check_session_is_expired = function(req, res, next) {
  if (req.session.current_user) {
    console.log('session user=' + req.session.current_user);
    return next();
  } else {
    console.log('no session user')
    return res.redirect('/users/login');
  }
};