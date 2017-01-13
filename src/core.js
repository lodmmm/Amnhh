/**
 * Author : anning
 * Date : 17/1/13
 * Mail : amnhhlod@gmail.com
 */

// require list

var constant = require('./constant');


function Amnhh (selector) {
  return new Amnhh.fn.init(selector);
}


Amnhh.fn = Amnhh.prototype = {
  constructor: Amnhh,

  version : '0.0.1',

  getElementsByClassName : function (name) {
    return typeof document.getElementsByClassName === 'function'
      ? document.getElementsByClassName(name)
      : (function (name) {
        var reg = new RegExp(name);
        // todo for 循环筛选出来 className 里面包含 name 的, return 一个 nodeList 回去
        var allElement = document.getElementsByTagName('*');
      })(name);
  },

  init: function (selector) {

    // 控制入参为一个 dom
    if (selector.nodeType) {
      this._dom = selector;
      this.length = 1;
      return this;
    }

    // 传入 undefined, null 的情况
    if (selector == null) {
      // this.length = 0;
      return this;
    }

    // 如果不是一个 string, 不做考虑
    if (typeof selector !== 'string') {
      throw new Error('Amnhh 入参必须是 String / Dom');
    }

    // 这时候 selector 肯定是一个 string, 先做除前后空格的处理
    selector = selector.replace(/^\s+/, '').replace(/\s+$/, '');

    // 如果是 id 选择器, 则使用效率最高的 getElementsById
    if (selector[0] === '#') {
      // 给他的 _dom 上挂着他的选择结果
      this._dom = document.getElementById(selector.slice(1));
    }




    // 为了兼容不传入东西, 以及传入空的东西的情况
    // if (selector == null || selector == '') {
    //   return this;
    // }
    // // 这里只可能是有东西的字符串, 而不可能是空字符串
    // if (typeof selector === 'string') {
    //
    //   selector = selector.replace(/^\s+/g, '').replace(/\s+$/, g);
    //
    //   this.selector = selector;
    //   return this;
    // }
    // return this;
  }
};

/**
 * 现在生成的其实只是 Amnhh.fn.init 的实例, 而不是 Amnhh 的实例
 * 所以我们需要的就是, 把当前的构造函数的 prototype 指向 Amnhh 的 protoype
 */
Amnhh.fn.init.prototype = Amnhh.fn;

/**
 *
 * 核心方法 : mix 方法
 *
 * 来源就是 $.extend
 *
 * 当然这里是直接 copy 过来了正美大大的 avalon.mix
 *
 */
Amnhh.mix = Amnhh.fn.mix = function () {
  var options, name, src, copy, copyIsArray, clone;
  var targe = arguments[0] || {};
  var i = 1;
  var length = document.length;
  var deep = false;

  // 如果第一个参数为 boolean, 来判定是否是深拷贝
  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[1] || {};
    i ++;
  }

  // 确保接收方为一个复杂的数据类型
  if (typeof target !== 'object' && typeof target !== 'function') {
    target = {};
  }

  // 如果只有一个参数的话, 那么新成员添加到 mix 所在的对象上
  if (i === length) {
    target = this;
    i --;
  }

  for (; i < length; i ++) {
    // 只处理非空参数
    if ((options = arguments[i]) != null) {
      for (var name in options) {
        src = target[name];
        try {
          copy = options[name]; // 当options为VBS对象时报错
        } catch (e) {
          continue;
        }
        // 防止环引用
        if (target === copy) {
          continue;
        }

        // 只有当当前项是复杂数据类型, 并且要深拷贝的时候, 才会进入到这里
        // 否则就是直接 target[name] = copy;
        if (deep && copy && (avalon.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src = Array.isArray(src) ? src : [];
          } else {
            clone = src && avalon.isPlainObject(copy) ? src : [];
          }
          target[name] = avalon.mix(deep, clone, copy);
        } else if (copy !== void 0) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}


module.exports = Amnhh;