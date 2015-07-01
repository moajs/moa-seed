/**
 * Created by alfred on July 1st 2015, 11:52:49 pm.
 */

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var MongooseDao = require('mongoosedao');

var userSchema = new Schema(
    {"username":"String","password":"String","avatar":"String","phone_number":"String","address":"String"}
);

var User = mongoose.model('User', userSchema);
var UserDao = new MongooseDao(User);
 
module.exports = UserDao;