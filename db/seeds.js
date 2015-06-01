//  This file should contain all the record creation needed to seed the database with its default values.
//  The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
// 
//  Examples:
// 
//    cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
//    Mayor.create(name: 'Emanuel', city: cities.first)


var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var MongooseDao = require('mongoosedao');

require('../config/mongo');


var MovieDao = require('../app/models/movie');
 
var m = new MovieDao.model({
  name:'sss',
  age:1
});

console.dir(m);

// m.save(function(err, movie){
//   console.log(err)
//   console.log(movie);
// });

MovieDao.delete({},function(err, movies){

  MovieDao.create(m, function(err, movies){
    console.log(err)
    console.log(movies);
  });
});
