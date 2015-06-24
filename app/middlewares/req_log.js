/*!
 * Moajs Middle
 * Copyright(c) 2015-2019 Alfred Sang <shiren1118@126.com>
 * MIT Licensed
 */

// request logger
// 如果是product环境，置空，提高性能
// 如果是dev环境，当调用此函数的时候，打出请求日志，以及对应的error
module.exports = function (req, res, next) {
  // dump request
  
  console.log(req.method + ' /users => list, query: ' + JSON.stringify(req.query));
  
  // 记录start time:
  var exec_start_at = Date.now();
  // 保存原始处理函数:
  var _send = res.send;
  // 绑定我们自己的处理函数:
  res.send = function () {
    // 发送Header:
    res.set('X-Execution-Time', String(Date.now() - exec_start_at));
    // 调用原始处理函数:
    return _send.apply(res, arguments);
  };
  
  next();
}

// ### Type 1
//
// - GET
// - COPY
// - HEAD
// - OPTIONS
// - PURGE
//
// url params details
//
// - key
// - value
//
// ### Type 2
//
// - POST
// - PUT
// - PATCH
// - DELETE
// - LINK
// - UNLINK
//
//
// url params details
//
// - form-data
//   - key
//   - value
//   - type
// - x-www-form-urlencoded
//   - key
//   - value
// - raw
//   - type {text|json|xml|html}
//   - content
//

var type_1 = [
  'GET',
  'COPY',
  'HEAD',
  'OPTIONS',
  'PURGE'
]

var type_2 = [
  'POST',
  'PUT',
  'PATCH',
  'DELETE',
  'LINK',
  'UNLINK'
]

// 
function request_logger (req) {
  //
  var type = type(req);
  if(type == 1){
    console.log(req.method + ' /topics/:id => show, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params));
  }else{
    console.log(req.method + ' /topics => create, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));
  }
}

function type(req){
  if(type_1.toLowerCase().split(req.method).length > 0){
    return 1
  }else{
    return 2
  }
}