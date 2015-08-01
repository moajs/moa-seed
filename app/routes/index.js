var express = require('express');
var router = express.Router();

var $middlewares = require('mount-middlewares')(__dirname);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Moajs' });
});

module.exports = router;
