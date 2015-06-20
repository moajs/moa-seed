/**
 * Created by alfred on 01/06/14.
 */

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var MongooseDao = require('mongoosedao');

var topicSchema = new Schema(
    {"title":"String","body":"String","owner":"ObjectId"}
);

var Topic = mongoose.model('Topic', topicSchema);
var TopicDao = new MongooseDao(Topic);
 
module.exports = TopicDao;