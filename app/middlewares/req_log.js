/*!
 * Moajs Middle
 * Copyright(c) 2015-2019 Alfred Sang <shiren1118@126.com>
 * MIT Licensed
 */

// request logger
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


function request_logger (req) {
  //
  // if(type_1.toLowerCase().match(//)){
  //
  // }
}