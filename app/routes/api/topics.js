var express = require('express');
var router = express.Router();

var $ = require('mount-controllers').topics_controller;

var $middlewares  = require('mount-middlewares');

// route define
router.get('/list', $middlewares.check_api_token, $.api.list);

router.post('/', $middlewares.check_api_token, $.api.create);

router.get('/:topic_id', $middlewares.check_api_token, $.api.show);

router.patch('/:topic_id', $middlewares.check_api_token, $.api.update);

router.delete('/:topic_id', $middlewares.check_api_token, $.api.delete);


module.exports = router;
