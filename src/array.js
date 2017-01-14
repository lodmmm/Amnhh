/**
 * Author : anning
 * Date : 17/1/14
 * Mail : amnhhlod@gmail.com
 */

/**
 * Array 扩展
 */

var Amnhh = require('./core');
var constant = require('./constant');
var proto = Amnhh.fn;

require('./object');

// 初始化 array
proto.array = {};
var protoArr = proto.array;


/**
 * 获取相应的属性
 * 属于函数式编程
 *
 * @param key
 * @returns {Function}
 *
 * @example
 *  底下的 getLength 方法定义的时候以传参的形式调用 property 来进行定义
 *  可以结合其参数理解
 */
var property = function (key) {
  return function (obj) {
    return obj != null && obj[key];
  };
};

/**
 * @member Amnhh.fn.array
 *
 * 会获取 this 的 length
 * @type {Function}
 */
protoArr.getLength = property('length');



/**
 * 检测是不是类数组对象
 * 其实就是去检测 length 属性
 * 用的时候也是根据这个来确定是使用 for 循环还是 for/in 循环
 *
 * @member Amnhh.fn.array
 *
 * @param {Mixed} col 集合
 * @returns {boolean} 返回是否是类数组对象
 *
 * @example
 *   Amnhh().array.isArrayLike([])
 */
protoArr.isArrayLike = function (col) {
  var length = protoArr.getLength(col);
  return typeof length === 'number' && length >= 0 && length < constant.ARRAY_RANGE;
};


/**
 * 定义 each/forEach 循环
 *
 * @member Amnhh.fn.array
 *
 * @param arr
 * @param func
 */
protoArr.each = protoArr.forEach = function (arr, func) {
  if (protoArr.isArrayLike(arr)) {
    for (var i = 0, len = protoArr.getLength(arr); i < len; i ++) {
      func(arr[i], i, arr);
    }
  } else {
    var keys = proto.object.keys(arr);
    for (var i = 0, len = protoArr.getLength(keys); i < len; i ++) {
      var key = keys[i];
      func(arr[key], key, arr);
    }
  }
};