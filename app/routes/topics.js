var express = require('express');
var router = express.Router();

// mount all middlewares in app/middlewares, examples:
// 
// router.route('/')
//  .get($middlewares.check_session_is_expired, $.list)
//  .post($.create);
// 
var $middlewares  = require('mount-middlewares')(__dirname);

// core controller
var $ = require('mount-controllers')(__dirname).topics_controller;


/**
 * Auto generate RESTful url routes.
 *
 * URL routes:
 *
 *  GET    /topics[/]        => topic.list()
 *  GET    /topics/new       => topic.new()
 *  GET    /topics/:id       => topic.show()
 *  GET    /topics/:id/edit  => topic.edit()
 *  POST   /topics[/]        => topic.create()
 *  PATCH  /topics/:id       => topic.update()
 *  DELETE /topics/:id       => topic.destroy()
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


// -- custom routes




module.exports = router;