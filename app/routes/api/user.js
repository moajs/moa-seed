var express = require('express');
var router = express.Router();

var $models = require('mount-models');
console.log('$models list');
console.log($models);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    data:[],
    status:{
      code: 0,
      msg : 'success'
    }
  })
});

router.get('/2', function(req, res, next) {
  res.status(200).json({
    data:[],
    status:{
      code: 0,
      msg : 'success'
    }
  })
});

module.exports = router;
