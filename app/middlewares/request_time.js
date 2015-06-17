module.exports = function (req, res, next) {
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