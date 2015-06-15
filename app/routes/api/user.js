var express = require('express');
var router = express.Router();

var $ = require('mount-controllers').users_controller;
var $middlewares = require('mount-middlewares');


router.get('/show', $middlewares.check_api_token, $.api.show);


module.exports = router;
