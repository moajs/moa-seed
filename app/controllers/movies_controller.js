/**
 * Created by san on 01/06/14.
 */

var Movie = require('../models/movie');
// var express = require('express');

//configure routes

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
  
  res.render('');
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
};

exports.create = function (req, res, next) {
  console.log(req.method + ' /movies => create, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));
};

exports.update = function (req, res, next) {
  console.log(req.method + ' /movies/:id => update, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));
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


//
// var router = express.Router();
//
// exports.save = function(req,res){
//        Movie.find(function(err,movies){
//            if(err)
//                 res.send(err);
//            res.json(movies);
//        });
//     };
//
// router.route('/movies')
//     .get(function(req,res){
//        Movie.find(function(err,movies){
//            if(err)
//                 res.send(err);
//            res.json(movies);
//        });
//     })
//
//     .post(function(req,res){
//         var movie=new Movie(req.body);
//         movie.save(function(err){
//             if(err)
//                 res.send(err);
//             res.send({message:'Movie Added'});
//         });
//     });
//
// router.route('/movies/:id')
//     .put(function(req,res){
//         Movie.findOne({_id:req.params.id},function(err,movie){
//
//             if(err)
//                 res.send(err);
//
//            for(prop in req.body){
//                 movie[prop]=req.body[prop];
//            }
//
//             // save the movie
//             movie.save(function(err) {
//                 if (err)
//                     res.send(err);
//
//                 res.json({ message: 'Movie updated!' });
//             });
//
//         });
//     })
//
//     .get(function(req,res){
//         Movie.findOne({_id:req.params.id},function(err, movie) {
//             if(err)
//                 res.send(err);
//
//             res.json(movie);
//         });
//     })
//
//     .delete(function(req,res){
//         Movie.remove({
//             _id: req.params.id
//         }, function(err, movie) {
//             if (err)
//                 res.send(err);
//
//             res.json({ message: 'Successfully deleted' });
//         });
//     });
//
// module.exports=router;
