var express = require('express');
var router = express.Router();

var $ = require('mount-controllers')(__dirname).users_controller;
var $middlewares = require('mount-middlewares')(__dirname);


router.get('/show', $middlewares.check_api_token, $.api.show);


module.exports = router;
