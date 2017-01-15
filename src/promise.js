/**
 * Author : anning
 * Date : 17/1/15
 * Mail : amnhhlod@gmail.com
 */

var Amnhh = require('./core');

var proto = Amnhh.fn;

var constant = require('./constant').promise;

// 如果原生支持 promise 的话, 就直接用原生的 promise
if (typeof Promise !== 'undefined' && false/*单纯为了走 else, 写完会移除*/) {
  proto.Promise = Promise;
} else {

  // 三种状态
  var PENDING = constant.PENDING;
  var RESOLVED = constant.RESOLVED;
  var REJECTED = constant.REJECTED;

  proto.Promise = function (func) {
    // 如果说入参不是一个 function 的话, 直接报错
    if (typeof func !== 'function') {
      throw new TypeError('promise 传入的应该是一个函数');
    }

    var resolve = function (val) {
      this.resolve(val);
    };

  };

  // 取出来更简单点的变量
  var promise = proto.Promise;
  var fn = proto.Promise.prototype;

  // 定义 promise 的
}