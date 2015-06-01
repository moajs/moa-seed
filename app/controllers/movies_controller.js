/**
 * Created by sang on 01/06/14.
 */

var Movie = require('../models/movie');

exports.list = function (req, res, next) {
  console.log(req.method + ' /movies => list, query: ' + JSON.stringify(req.query));
  Movie.getAll(function(err, movies){
    console.log(movies);
    res.render('movies/index', {
      movies : movies
    })
  });
};

exports.new = function (req, res, next) {
  console.log(req.method + ' /movies/new => new, query: ' + JSON.stringify(req.query));
  
  res.render('movies/new', {
    movie : {
      "_action" : "new"
    }
  })
};

exports.show = function (req, res, next) {
  console.log(req.method + ' /movies/:id => show, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params));
  var id = req.params.id;
  
  Movie.getById(id, function(err, movie){
    console.log(movie);
    res.render('movies/show', {
      movie : movie
    })
  });
};

exports.edit = function (req, res, next) {
  console.log(req.method + ' /movies/:id/edit => edit, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params));
    
  var id = req.params.id; 
  
  Movie.getById(id, function(err, movie){
    console.log(movie);
    movie._action = 'edit';
    
    res.render('movies/edit', {
      movie : movie
    })
  });
};

exports.create = function (req, res, next) {
  console.log(req.method + ' /movies => create, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));
  
    Movie.create({
      name : req.body.name,
      age : req.body.age,
    }, function(err, movie){
      console.log(movie);
      res.render('movies/show', {
        movie : movie
      })
    });
   
};

exports.update = function (req, res, next) {
  console.log(req.method + ' /movies/:id => update, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));
    
    var id = req.params.id; 
  
    Movie.updateById(id,{
      name : req.body.name,
      age  : req.body.age
    }, function(err, movie){
      console.log(movie);
    
      res.json({
        data:{
          redirect : '/movies/' + id
        },
        status:{
          code : 0,
          msg  : 'delete success!'
        }
      });
    });
};

exports.destroy = function (req, res, next) {
  console.log(req.method + ' /movies/:id => destroy, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));
  var id = req.params.id;
  Movie.deleteById(id, function(err){
    console.log(err);
    res.json({
      data:{},
      status:{
        code : 0,
        msg  : 'delete success!'
      }
    });
  });
};