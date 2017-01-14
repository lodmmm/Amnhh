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
	module.exports = __webpack_require__(5);


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

	    // 如果可以用 querySelectorAll 的话, 就是用 querySelectorAll
	    if (typeof document.querySelectorAll === 'function' && !/^\s+$/.test(selector) && selector !== '') {
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
	    }

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

	// 拿到 prototype 的引用
	var proto = Amnhh.fn;




/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Author : anning
	 * Date : 17/1/13
	 * Mail : amnhhlod@gmail.com
	 */

	var Amnhh = __webpack_require__(1);

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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Author : anning
	 * Date : 17/1/13
	 * Mail : amnhhlod@gmail.com
	 */

	var Amnhh = __webpack_require__(1);

	__webpack_require__(4);
	__webpack_require__(3);


	/**
	 * 现在生成的其实只是 Amnhh.fn.init 的实例, 而不是 Amnhh 的实例
	 * 所以我们需要的就是, 把当前的构造函数的 prototype 指向 Amnhh 的 protoype
	 */
	Amnhh.fn.init.prototype = Amnhh.fn;
	// console.log(Amnhh.mix)

	module.exports = Amnhh;

/***/ }
/******/ ]);