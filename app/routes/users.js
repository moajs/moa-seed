var express = require('express');
var router = express.Router();

var $ = require('../controllers/users_controller');
var checksession = require('../middlewares/check_session_is_expired');

// -- custom
router.route('/register')
  .get($.register_get)
  .post($.register);
  
router.route('/login')
  .get($.login_get)
  .post($.login);
  
router.get('/logout', $.logout);  


/**
 * Auto generate RESTful url routes.
 *
 * URL routes:
 *
 *  GET    /users[/]        => user.list()
 *  GET    /users/new       => user.new()
 *  GET    /users/:id       => user.show()
 *  GET    /users/:id/edit  => user.edit()
 *  POST   /users[/]        => user.create()
 *  PATCH  /users/:id       => user.update()
 *  DELETE /users/:id       => user.destroy()
 *
 */

router.get('/new', $.new);  
router.get('/:id/edit', $.edit);

router.route('/')
  .get($.list)
  .post($.create);

router.route('/:id')
  .patch($.update)
  .get($.show)
  .delete($.destroy);


module.exports = router;
