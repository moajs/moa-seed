/**
 * Created by alfred on July 1st 2015, 11:54:42 pm.
 */

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var MongooseDao = require('mongoosedao');

var topicSchema = new Schema(
    {"title":"String","body":"String"}
);

var Topic = mongoose.model('Topic', topicSchema);
var TopicDao = new MongooseDao(Topic);
 
module.exports = TopicDao;