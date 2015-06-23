/**
 * Created by Moajs on 01/06/2015.
 */

var $models = require('mount-models');

var Topic = $models.topic;

exports.list = function (req, res, next) {
  console.log(req.method + ' /topics => list, query: ' + JSON.stringify(req.query));
  
  Topic.getAll(function(err, topics){
    console.log(topics);
    res.render('topics/index', {
      topics : topics
    })
  });
};

exports.new = function (req, res, next) {
  console.log(req.method + ' /topics/new => new, query: ' + JSON.stringify(req.query));
  
  res.render('topics/new', {
    topic : {
      "_action" : "new"
    }
  })
};

exports.show = function (req, res, next) {
  console.log(req.method + ' /topics/:id => show, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params));
  var id = req.params.id;
  console.log(id)
  
  Topic.getById(id, function(err, topic) {
    console.log(topic);
    res.render('topics/show', {
      topic : topic
    })
  });
};

exports.edit = function (req, res, next) {
  console.log(req.method + ' /topics/:id/edit => edit, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params));
    
  var id = req.params.id; 
  
  Topic.getById(id, function (err, topic) {
    console.log(topic);
    topic._action = 'edit';
    
    res.render('topics/edit', {
      topic : topic
    })
  });
};

exports.create = function (req, res, next) {
  console.log(req.method + ' /topics => create, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));
  
  Topic.create({title: req.body.title,body: req.body.body}, function (err, topic) {
    if(err){
      console.dir(err);
    }
    console.log(topic);
    res.render('topics/show', {
      topic : topic
    })
  });
};

exports.update = function (req, res, next) {
  console.log(req.method + ' /topics/:id => update, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));
    
  var id = req.params.id; 

  Topic.updateById(id,{title: req.body.title,body: req.body.body,owner: req.body.owner}, function (err, topic) {
    console.log(topic);
  
    res.json({
      data:{
        redirect : '/topics/' + id
      },
      status:{
        code : 0,
        msg  : 'delete success!'
      }
    });
  });
};

exports.destroy = function (req, res, next) {
  var id = req.params.id;
  Topic.deleteById(id, function (err) {
    if (err) {
      throw new Error(err);
    }
    
    res.json({
      data:{},
      status:{
        code : 0,
        msg  : 'delete success!'
      }
    });
  });
};

// -- custom api

exports.api = {
  list: function (req, res, next) {
    var user_id = req.api_user._id;
    
    Topic.query({}, function (err, topics) {
      if (err) {
        return res.api_error(err);
      }
      
      res.api({
        topics : topics
      })
    });
  },
  show: function (req, res, next) {
    var user_id = req.api_user._id;
    var id = req.params.topic_id;
    
    Topic.getById(id, function (err, topic) {
      if (err) {
        return res.api_error(err);
      }
      
      res.api({
        topic : topic
      });
    }); 
  },
  create: function (req, res, next) {
    var user_id = req.api_user._id;
  
    Topic.create({title: req.body.title,body: req.body.body,owner: req.body.owner}, function (err, topic) {
      if (err) {
        return res.api_error(err);
      }
      
      res.json({
        topic : topic
      })
    });
  },
  update: function (req, res, next) {
    var user_id = req.api_user._id;
    var id = req.params.topic_id; 
    Topic.updateById(id, {title: req.body.title,body: req.body.body,owner: req.body.owner}, function (err, topic) {
      if (err) {
        return res.api_error(err);
      }
  
      res.api({
        topic : topic,
        redirect : '/topics/' + id
      })
    });
  },
  delete: function (req, res, next) {
    var user_id = req.api_user._id;
    var id = req.params.topic_id; 
    
    Topic.deleteById(id, function (err) {
      if (err) {
        return res.api_error(err);
      }
    
      res.api({id:id})
    });
  }
}
