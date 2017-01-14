var Amnhh =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	module.exports = __webpack_require__(7);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Author : anning
	 * Date : 17/1/13
	 * Mail : amnhhlod@gmail.com
	 */

	// require list

	var constant = __webpack_require__(2);


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
	        var ret = [];
	        var reg = new RegExp(name);
	        // 筛选出来一个 nodeList
	        var allElement = document.getElementsByTagName('*');
	        for (var i = 0, len = allElement.length; i < len; i ++) {
	          var className = allElement[i].className;
	          if (reg.test(className)) {
	            ret.push(allElement[i]);
	          }
	        }
	        return ret;
	      })(name);
	  },

	  init: function (selector) {

	    // 之前是通过 typeof document.querySelectorAll() && /^\s+$/.test(selector) && selector !== '' 来做
	    // 现在的想法就是, 使用 try/catch 语句, 如果一个抛错误, 就用另一个, 可以增强代码的可读性
	    try {
	      var ret = document.querySelectorAll(selector);
	      var len = ret.length;

	      // 如果没有的话, 说明没有筛选到
	      if (len === 0) return this;
	      if (len === 1) {
	        this.selector = selector;
	        this.length = 1;
	        this[0] = this._dom = ret[0];
	        return this;
	      }
	      for (var i = 0; i < len; i ++) {
	        this[i] = ret[i];
	        this.length = len;
	        this.selector = selector;
	      }
	      return this;
	    } catch (e) {
	      // 不能用的话就只能靠自己了...

	      // 处理传入 undefined, null 的情况
	      if (selector == null) {
	        return this;
	      }

	      // 处理传入一个 dom
	      if (selector.nodeType) {
	        this[0] = this._dom = selector;
	        this.length = 1;
	        return this;
	      }

	      // 处理不为 string 的情况
	      if (typeof selector !== 'string') {
	        throw new Error('Amnhh 入参必须是 String / Dom');
	      }

	      // string 去除前后空格
	      selector = selector.replace(/^\s+/, '').replace(/\s+$/, '');



	      // 传入的为 #xxx => Id 选择器
	      if (selector[0] === '#') {
	        // 这样就取到了一个 dom, 就直接在调用一次 init 就好了
	        // var dom = document.getElementById(selector.slice(1));
	        // return new Amnhh.fn.init(dom);

	        // 更新 : 在能挂上 selector 的时候, 最好还是在 selector 上挂上东西
	        this[0] = this._dom = document.getElementById(selector.slice(1));
	        this.selector = selector;
	        return this;
	      }

	      // 传入的为 .xxx => class 选择器
	      if (selector[0] === '.') {
	        // 先把 class 为 selector 的 nodeList 选出来
	        var ret = Amnhh.fn.getElementsByClassName(selector.slice(1));
	        var len = ret.length;
	        for (var i = 0; i < len; i ++) {
	          this[i] = ret[i];
	        }
	        this.length = len;
	        this.selector = selector;
	        return this;
	      }



	      // 最后支持的一种是 tag 选择器
	      var ret = document.getElementsByTagName(selector);
	      var len = ret.length;
	      if (ret.length === 0) return this;
	      if (ret.length === 1) {
	        this.length = 1;
	        this[0] = this._dom = ret[0];
	        this.selector = selector;
	        return this;
	      }
	      // 最后就是一个 init list
	      for (var i = 0; i < len; i ++) {
	        this[i] = ret[i];
	      }
	      this.length = len;
	      this.selector = selector;
	      return this;

	    }
	  }
	};



	module.exports = Amnhh;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Author : anning
	 * Date : 17/1/13
	 * Mail : amnhhlod@gmail.com
	 */

	module.exports = {
	  ARRAY_RANGE : Math.pow(2, 53) - 1
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Author : anning
	 * Date : 17/1/14
	 * Mail : amnhhlod@gmail.com
	 */

	/**
	 * 对 dom 的扩展
	 */


	var Amnhh = __webpack_require__(1);
	__webpack_require__(4);

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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Author : anning
	 * Date : 17/1/13
	 * Mail : amnhhlod@gmail.com
	 */

	var Amnhh = __webpack_require__(1);
	__webpack_require__(5);
	var proto = Amnhh.fn;

	// 初始化 uitl
	proto.util = {};
	var protoUtil = Amnhh.fn.util;

	var constant = __webpack_require__(2);

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








/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Author : anning
	 * Date : 17/1/14
	 * Mail : amnhhlod@gmail.com
	 */

	/**
	 * Array 扩展
	 */

	var Amnhh = __webpack_require__(1);
	var constant = __webpack_require__(2);
	var proto = Amnhh.fn;

	__webpack_require__(6);

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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Author : anning
	 * Date : 17/1/14
	 * Mail : amnhhlod@gmail.com
	 */

	/**
	 * 对 object 的扩展
	 */

	var Amnhh = __webpack_require__(1);
	__webpack_require__(4);
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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Author : anning
	 * Date : 17/1/13
	 * Mail : amnhhlod@gmail.com
	 */

	var Amnhh = __webpack_require__(1);

	__webpack_require__(4);
	__webpack_require__(3);
	__webpack_require__(5);
	__webpack_require__(6);


	/**
	 * 现在生成的其实只是 Amnhh.fn.init 的实例, 而不是 Amnhh 的实例
	 * 所以我们需要的就是, 把当前的构造函数的 prototype 指向 Amnhh 的 protoype
	 */
	Amnhh.fn.init.prototype = Amnhh.fn;
	// console.log(Amnhh.mix)

	module.exports = Amnhh;

/***/ }
/******/ ]);