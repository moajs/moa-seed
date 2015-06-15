var express = require('express');
var router = express.Router();

var $ = require('../../controllers/users_controller');
var User = require('../../models/user');



var $models = require('mount-models');
console.log('$models list');
console.log($models);


var jwt = require('jsonwebtoken');//用来创建和确认用户信息摘要

var $middlewares = require('mount-middlewares');


router.get('/show', $middlewares.check_api_token, $.api.show);


module.exports = router;
