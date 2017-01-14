/**
 * Author : anning
 * Date : 17/1/14
 * Mail : amnhhlod@gmail.com
 */

/**
 * 对 object 的扩展
 */

var Amnhh = require('./core');
require('./util');
Amnhh.fn.object = {};
var proto = Amnhh.fn;
var protoObj = proto.object;

protoObj.keys = function (obj) {
  if (!proto.util.isObject(obj)) return;
  if (typeof Object.keys === 'function') {
    return Object.keys(obj);
  }
  var keys = [];
  for (var name in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, name)) {
      keys.push(name)
    }
  }
  return keys;
};