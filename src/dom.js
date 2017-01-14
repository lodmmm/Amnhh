/**
 * Author : anning
 * Date : 17/1/14
 * Mail : amnhhlod@gmail.com
 */

/**
 * 对 dom 的扩展
 */


var Amnhh = require('./core');
require('./util');

// 拿到 prototype 的引用
var proto = Amnhh.fn;




// 必须 $.fn.xxx, 不能使 $.fn.dom.xxx => 因为后者的话, this 的取值会发生变化, 而且有些过度封装的感觉


proto.attr = function (name, value) {
};


/**
 * 获取 value 属性
 * @returns {string}
 */
proto.getValue = function () {
  return this._dom.getAttribute('value');
};