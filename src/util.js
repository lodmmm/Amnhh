/**
 * Author : anning
 * Date : 17/1/13
 * Mail : amnhhlod@gmail.com
 */

var Amnhh = require('./core');
require('./array');
var proto = Amnhh.fn;

// 初始化 uitl
proto.util = {};
var protoUtil = Amnhh.fn.util;

var constant = require('./constant');

protoUtil.isObject = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};


protoUtil.class2type = {};

protoUtil.toString = Object.prototype.toString;

/**
 * 对 isError, isArguments... 之类的定义
 */
proto.array.each(['Arguments', 'Function', 'Object', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Undefined', 'Null', 'Window', 'Boolean'], function (type) {

  /** 对 class2type 扩展
   *
   * @type {string}
   *
   * @example
   *   class2type['[object Object]'] = 'object'
   */
  protoUtil.class2type['[object ' + type + ']'] = type.toLowerCase();
  proto.array['is' + type] = function (val) {
    return protoUtil.toString.call(val) === '[object ' + type + ']';
  };
});


protoUtil.type = function (val) {
  return (typeof val === 'function' || typeof val === 'object')
    ? protoUtil.class2type[protoUtil.toString.call(val)] : typeof val;
};






