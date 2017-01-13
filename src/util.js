/**
 * Author : anning
 * Date : 17/1/13
 * Mail : amnhhlod@gmail.com
 */

var Amnhh = require('./core');

Amnhh.fn.util = {};

var util = Amnhh.fn.util;


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

util.property = function (key) {
  return function (obj) {
    return obj != null && obj[key];
  };
};