/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/exmaples/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/raindrop.css":
/*!****************************************************!*\
  !*** ./node_modules/css-loader!./src/raindrop.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  text-align: center;\n}\n\n.container {\n  position: relative;\n  display: inline-block;\n  width: 300px;\n  height: 300px;\n}\n\n.raindrop {\n  position: absolute;\n  width: 300px;\n  height: 300px;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  border: 100px solid black;\n  border-radius: 50%;\n  box-sizing: border-box;\n  transform: scale(0);\n}\n\n.test {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background: #333;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/scenejs/dist/scene.esm.js":
/*!************************************************!*\
  !*** ./node_modules/scenejs/dist/scene.esm.js ***!
  \************************************************/
/*! exports provided: default, VERSION, SceneItem, Frame, Animator, Keyframes, PropertyObject, bezier, EASE_IN_OUT, EASE_IN, EASE_OUT, EASE, LINEAR, steps, STEP_START, STEP_END, set, transition, wipeIn, wipeOut, fadeIn, fadeOut, blink, zoomIn, zoomOut, OPTIONS, EVENTS, setRole, setAlias */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneItem", function() { return SceneItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frame", function() { return Frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animator", function() { return Animator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyframes", function() { return Keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyObject", function() { return PropertyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bezier", function() { return bezier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EASE_IN_OUT", function() { return EASE_IN_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EASE_IN", function() { return EASE_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EASE_OUT", function() { return EASE_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EASE", function() { return EASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINEAR", function() { return LINEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_START", function() { return STEP_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_END", function() { return STEP_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wipeIn", function() { return wipeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wipeOut", function() { return wipeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blink", function() { return blink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomIn", function() { return zoomIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOut", function() { return zoomOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONS", function() { return OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS", function() { return EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRole", function() { return setRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAlias", function() { return setAlias; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var PREFIX = "__SCENEJS_";
var timingFunction = "animation-timing-function";
var ROLES = { transform: {}, filter: {}, attribute: {} };
var ALIAS = { easing: ["animation-timing-function"] };
var FIXED = { "animation-timing-function": true, "contents": true };
var MAXIMUM = 1000000;
var THRESHOLD = 0.000001;
/**
* option name list
* @name Scene.OPTIONS
* @memberof Scene
* @static
* @type {string[]}
* @example
* Scene.OPTIONS // ["duration", "fillMode", "direction", "iterationCount", "delay", "easing", "playSpeed"]
*/
var OPTIONS = ["duration", "fillMode", "direction", "iterationCount", "delay", "easing", "playSpeed"];
/**
* Event name list
* @name Scene.EVENTS
* @memberof Scene
* @static
* @type {string[]}
* @example
* Scene.EVENTS // ["paused", "ended", "timeupdate", "animate", "play"];
*/
var EVENTS = ["paused", "ended", "timeupdate", "animate", "play"];
var prefixes = ["webkit", "ms", "moz", "o"];
var checkProperties = function (property) {
    var styles = (document.body || document.documentElement).style;
    var length = prefixes.length;
    if (typeof styles[property] !== "undefined") {
        return property;
    }
    for (var i = 0; i < length; ++i) {
        var name = "-" + prefixes[i] + "-" + property;
        if (typeof styles[name] !== "undefined") {
            return name;
        }
    }
    return "";
};
var TRANSFORM = checkProperties("transform");
var FILTER = checkProperties("filter");
var ANIMATION = checkProperties("animation");
var KEYFRAMES = ANIMATION.replace("animation", "keyframes");
var START_ANIMATION = "startAnimation";

/**
* attach and trigger event handlers.
* @memberof Scene
*/
var EventTrigger = /*#__PURE__*/ (function () {
    /**
      * @example
  const et = new Scene.EventTrigger();
  const scene = new Scene();
  
  scene.on("call", e => {
      console.log(e.param);
  });
  et.on("call", e => {
      console.log(e.param);
  });
  scene.trigger("call", {param: 1});
  et.trigger("call", {param: 1});
       */
    function EventTrigger() {
        this.events = {};
    }
    /**
      * Attach an event handler function for one or more events to target
      * @param {String} name - event's name
      * @param {Function} callback -  function to execute when the event is triggered.
      * @return {EventTrigger} An Instance itself.
      * @example
  target.on("animate", function() {
      console.log("animate");
  });
  
  target.trigger("animate");
  
      */
    EventTrigger.prototype.on = function (name, callback) {
        var _this = this;
        var events = this.events;
        if (typeof name === "object") {
            for (var i in name) {
                this.on(i, name[i]);
            }
            return this;
        }
        if (!(name in events)) {
            events[name] = [];
        }
        if (!callback) {
            return this;
        }
        if (typeof callback === "object") {
            callback.forEach(function (func) { return _this.on(name, func); });
            return this;
        }
        var event = events[name];
        event.push(callback);
        return this;
    };
    /**
      * Dettach an event handler function for one or more events to target
      * @param {String} name - event's name
      * @param {Function} callback -  function to execute when the event is triggered.
      * @return {EventTrigger} An Instance itself.
      * @example
  const callback = function() {
      console.log("animate");
  };
  target.on("animate", callback);
  
  target.off("animate", callback);
  target.off("animate");
  
      */
    EventTrigger.prototype.off = function (name, callback) {
        if (!name) {
            this.events = {};
        }
        else if (!callback) {
            this.events[name] = [];
        }
        else {
            var callbacks = this.events[name];
            if (!callbacks) {
                return this;
            }
            var index = callbacks.indexOf(callback);
            if (index !== -1) {
                callbacks.splice(index, 1);
            }
        }
        return this;
    };
    /**
      * execute event handler
      * @param {String} name - event's name
      * @param {Function} [...data] - event handler's additional parameter
      * @return {EventTrigger} An Instance itself.
      * @example
  target.on("animate", function(a1, a2) {
      console.log("animate", a1, a2);
  });
  
  target.trigger("animate", [1, 2]); // log => "animate", 1, 2
  
      */
    EventTrigger.prototype.trigger = function (name) {
        var _this = this;
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var events = this.events;
        if (!(name in events)) {
            return this;
        }
        var event = events[name];
        if (data.length) {
            var target = data[0];
            target.type = name;
            target.currentTarget = this;
            !target.target && (target.target = this);
        }
        event.forEach(function (callback) {
            callback.apply(_this, data);
        });
        return this;
    };
    return EventTrigger;
}());

function cubic(y1, y2, t) {
    var t2 = 1 - t;
    // Bezier Curve Formula
    return t * t * t + 3 * t * t * t2 * y2 + 3 * t * t2 * t2 * y1;
}
function solveFromX(x1, x2, x) {
    // x  0 ~ 1
    // t 0 ~ 1
    var t = x;
    var solveX = x;
    var dx = 1;
    while (Math.abs(dx) > 1 / 1000) {
        // 예상 t초에 의한 _x값
        solveX = cubic(x1, x2, t);
        dx = solveX - x;
        // 차이가 미세하면 그 값을 t로 지정
        if (Math.abs(dx) < 1 / 1000) {
            return t;
        }
        t -= dx / 2;
    }
    return t;
}
/**
 * @namespace easing
 */
/**
* Cubic Bezier curve.
* @memberof easing
* @func bezier
* @param {number} [x1] - point1's x
* @param {number} [y1] - point1's y
* @param {number} [x2] - point2's x
* @param {number} [y2] - point2's y
* @return {function} the curve function
* @example
import {bezier} from "scenejs";
Scene.bezier(0, 0, 1, 1) // LINEAR
Scene.bezier(0.25, 0.1, 0.25, 1) // EASE
*/
function bezier(x1, y1, x2, y2) {
    /*
          x = f(t)
          calculate inverse function by x
          t = f-1(x)
      */
    var func = function (x) {
        var t = solveFromX(x1, x2, Math.max(Math.min(1, x), 0));
        return cubic(y1, y2, t);
    };
    func.easingName = "cubic-bezier(" + x1 + ", " + y1 + ", " + x2 + ", " + y2 + ")";
    return func;
}
/**
* Specifies a stepping function
* @see {@link https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp|CSS3 Timing Function}
* @memberof easing
* @func steps
* @param {number} count - point1's x
* @param {"start" | "end"} postion - point1's y
* @return {function} the curve function
* @example
import {steps} from "scenejs";
Scene.steps(1, "start") // Scene.STEP_START
Scene.steps(1, "end") // Scene.STEP_END
*/
function steps(count, position) {
    var func = function (time) {
        var level = 1 / count;
        return (position === "end" ? level : 0) + Math.floor(time / level) * level;
    };
    func.easingName = "steps(" + count + ", " + position + ")";
    return func;
}
/**
* Equivalent to steps(1, start)
* @memberof easing
* @name STEP_START
* @static
* @type {function}
* @example
import {STEP_START} from "scenejs";
Scene.STEP_START // steps(1, start)
*/
var STEP_START = /*#__PURE__#*/ steps(1, "start");
/**
* Equivalent to steps(1, end)
* @memberof easing
* @name STEP_END
* @static
* @type {function}
* @example
import {STEP_END} from "scenejs";
Scene.STEP_END // steps(1, end)
*/
var STEP_END = /*#__PURE__#*/ steps(1, "end");
/**
* Linear Speed (0, 0, 1, 1)
* @memberof easing
* @name LINEAR
* @static
* @type {function}
* @example
import {LINEAR} from "scenejs";
Scene.LINEAR
*/
var LINEAR = /*#__PURE__#*/ bezier(0, 0, 1, 1);
/**
* Ease Speed (0.25, 0.1, 0.25, 1)
* @memberof easing
* @name EASE
* @static
* @type {function}
* @example
import {EASE} from "scenejs";
Scene.EASE
*/
var EASE = /*#__PURE__#*/ bezier(0.25, 0.1, 0.25, 1);
/**
* Ease In Speed (0.42, 0, 1, 1)
* @memberof easing
* @name EASE_IN
* @static
* @type {function}
* @example
import {EASE_IN} from "scenejs";
Scene.EASE_IN
*/
var EASE_IN = /*#__PURE__#*/ bezier(0.42, 0, 1, 1);
/**
* Ease Out Speed (0, 0, 0.58, 1)
* @memberof easing
* @name EASE_OUT
* @static
* @type {function}
* @example
import {EASE_OUT} from "scenejs";
Scene.EASE_OUT
*/
var EASE_OUT = /*#__PURE__#*/ bezier(0, 0, 0.58, 1);
/**
* Ease In Out Speed (0.42, 0, 0.58, 1)
* @memberof easing
* @name EASE_IN_OUT
* @static
* @type {function}
* @example
import {EASE_IN_OUT} from "scenejs";
Scene.EASE_IN_OUT
*/
var EASE_IN_OUT = /*#__PURE__#*/ bezier(0.42, 0, 0.58, 1);

/**
* Make string, array to PropertyObject for the dot product
* @memberof Scene
*/
var PropertyObject = /*#__PURE__*/ (function () {
    /**
      * @param {String|Array} value - This value is in the array format ..
      * @param {String} separator - Array separator.
      * @example
  var obj1 = new PropertyObject("1,2,3", ",");
  var obj2 = new PropertyObject([1,2,3], " ");
  var obj3 = new PropertyObject("1$2$3", "$");
  
  // rgba(100, 100, 100, 0.5)
  var obj4 = new PropertyObject([100,100,100,0.5], {
      "separator" : ",",
      "prefix" : "rgba(",
      "suffix" : ")"
  });
       */
    function PropertyObject(value, options) {
        if (options === void 0) { options = {}; }
        this.options = {
            prefix: "",
            suffix: "",
            model: "",
            type: "",
            separator: ","
        };
        this.setOptions(options);
        this.init(value);
    }
    PropertyObject.prototype.setOptions = function (options) {
        Object.assign(this.options, options);
        return this;
    };
    PropertyObject.prototype.getOption = function (name) {
        return this.options[name];
    };
    /**
      * the number of values.
      * @example
  const obj1 = new PropertyObject("1,2,3", ",");
  
  console.log(obj1.length);
  // 3
       */
    PropertyObject.prototype.size = function () {
        return this.value.length;
    };
    /**
      * retrieve one of values at the index
      * @param {Number} index - index
      * @return {Object} one of values at the index
      * @example
  const obj1 = new PropertyObject("1,2,3", ",");
  
  console.log(obj1.get(0));
  // 1
       */
    PropertyObject.prototype.get = function (index) {
        return this.value[index];
    };
    /**
      * Set the value at that index
      * @param {Number} index - index
      * @param {Object} value - text, a number, object to set
      * @return {PropertyObject} An instance itself
      * @example
  const obj1 = new PropertyObject("1,2,3", ",");
  obj1.set(0, 2);
  console.log(obj1.toValue());
  // 2,2,3
       */
    PropertyObject.prototype.set = function (index, value) {
        this.value[index] = value;
        return this;
    };
    /**
      * create a copy of an instance itself.
      * @return {PropertyObject} clone
      * @example
  const obj1 = new PropertyObject("1,2,3", ",");
  const obj2 = obj1.clone();
       */
    PropertyObject.prototype.clone = function () {
        var arr = this.value.map(function (v) { return ((v instanceof PropertyObject) ? v.clone() : v); });
        return new PropertyObject(arr, {
            separator: this.options.separator,
            prefix: this.options.prefix,
            suffix: this.options.suffix,
            model: this.options.model,
            type: this.options.type
        });
    };
    /**
      * Make Property Object to String
      * @return {String} Make Property Object to String
      * @example
  //rgba(100, 100, 100, 0.5)
  const obj4 = new PropertyObject([100,100,100,0.5], {
      "separator" : ",",
      "prefix" : "rgba(",
      "suffix" : ")",
  });
  console.log(obj4.toValue());
  // "rgba(100,100,100,0.5)"
      */
    PropertyObject.prototype.toValue = function () {
        return this.options.prefix + this.join() + this.options.suffix;
    };
    /**
      * Make Property Object's array to String
      * @return {String} Join the elements of an array into a string
      * @example
      //rgba(100, 100, 100, 0.5)
      var obj4 = new PropertyObject([100,100,100,0.5], {
          "separator" : ",",
          "prefix" : "rgba(",
          "suffix" : ")"
      });
      obj4.join();  // =>   "100,100,100,0.5"
       */
    PropertyObject.prototype.join = function () {
        return this.value.map(function (v) { return ((v instanceof PropertyObject) ? v.toValue() : v); }).join(this.options.separator);
    };
    /**
      * executes a provided function once per array element.
      * @param {Function} callback - Function to execute for each element, taking three arguments
      * @param {All} [callback.currentValue] The current element being processed in the array.
      * @param {Number} [callback.index] The index of the current element being processed in the array.
      * @param {Array} [callback.array] the array.
      * @return {PropertyObject} An instance itself
      * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach|MDN Array.forEach()} reference to MDN document.
      * @example
  //rgba(100, 100, 100, 0.5)
  var obj4 = new PropertyObject([100,100,100,0.5], {
      "separator" : ",",
      "prefix" : "rgba(",
      "suffix" : ")"
  });
  
  obj4.forEach(t => {
      console.log(t);
  });  // =>   "100,100,100,0.5"
      */
    PropertyObject.prototype.forEach = function (func) {
        this.value.forEach(func);
        return this;
    };
    PropertyObject.prototype.init = function (value) {
        var type = typeof value;
        if (type === "string") {
            this.value = value.split(this.options.separator);
        }
        else if (type === "object") {
            this.value = value;
        }
        else {
            this.value = [value];
        }
        return this;
    };
    return PropertyObject;
}());

function setAlias(name, alias) {
    ALIAS[name] = alias;
}
function setRole(names, isProperty, isFixedProperty) {
    var length = names.length;
    var roles = ROLES;
    var fixed = FIXED;
    for (var i = 0; i < length - 1; ++i) {
        !roles[names[i]] && (roles[names[i]] = {});
        roles = roles[names[i]];
        if (isFixedProperty) {
            !fixed[names[i]] && (fixed[names[i]] = {});
            fixed = fixed[names[i]];
        }
    }
    isFixedProperty && (fixed[names[length - 1]] = true);
    roles[names[length - 1]] = isProperty ? true : {};
}
function getType(value) {
    var type = typeof value;
    if (type === "object") {
        if (isArray(value)) {
            return "array";
        }
        else if (value instanceof PropertyObject) {
            return "property";
        }
    }
    else if (type === "string" || type === "number") {
        return "value";
    }
    return type;
}
function toFixed(num) {
    return Math.round(num * MAXIMUM) / MAXIMUM;
}
function isInProperties(roles, args, isCheckTrue) {
    var length = args.length;
    var role = roles;
    if (length === 0) {
        return false;
    }
    for (var i = 0; i < length; ++i) {
        if (role === true) {
            return false;
        }
        role = role[args[i]];
        if (!role || (!isCheckTrue && role === true)) {
            return false;
        }
    }
    return true;
}
function isRole(args, isCheckTrue) {
    return isInProperties(ROLES, args, isCheckTrue);
}
function isFixed(args) {
    return isInProperties(FIXED, args, true);
}
function isUndefined(value) {
    return (typeof value === "undefined");
}
function isObject(value) {
    return value && (typeof value === "object");
}
function isArray(value) {
    return Array.isArray(value);
}
function isString(value) {
    return typeof value === "string";
}
function has(object, name) {
    return Object.prototype.hasOwnProperty.call(object, name);
}
function splitUnit(text) {
    var matches = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(text);
    if (!matches) {
        return { prefix: "", unit: "", value: NaN };
    }
    var prefix = matches[1];
    var value = matches[2];
    var unit = matches[3];
    return { prefix: prefix, unit: unit, value: parseFloat(value) };
}
// export function camelize(str: string) {
// 	return str.replace(/[\s-_]([a-z])/g, (all, letter) => letter.toUpperCase());
// }
function decamelize(str) {
    return str.replace(/([a-z])([A-Z])/g, function (all, letter, letter2) { return letter + "-" + letter2.toLowerCase(); });
}

var lastTime = 0;
var requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        (function (callback) {
            var currTime = Date.now();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            }, 1000 / 60);
            lastTime = currTime + timeToCall;
            return id;
        });
})();
function isDirectionReverse(iterationCount, direction) {
    return direction === "reverse" ||
        direction === (iterationCount % 2 >= 1 ? "alternate" : "alternate-reverse");
}
/**
* @typedef {Object} AnimatorOptions The Animator options. Properties used in css animation.
* @property {number} [duration] The duration property defines how long an animation should take to complete one cycle.
* @property {"none"|"forwards"|"backwards"|"both"} [fillMode] The fillMode property specifies a style for the element when the animation is not playing (before it starts, after it ends, or both).
* @property {"infinite"|number} [iterationCount] The iterationCount property specifies the number of times an animation should be played.
* @property {array|function} [easing] The easing(timing-function) specifies the speed curve of an animation.
* @property {number} [delay] The delay property specifies a delay for the start of an animation.
* @property {"normal"|"reverse"|"alternate"|"alternate-reverse"} [direction] The direction property defines whether an animation should be played forwards, backwards or in alternate cycles.
*/
/**
* play video, animation, the others
* @memberof Scene
* @class Animator
* @extends Scene.EventTrigger
* @see {@link https://www.w3schools.com/css/css3_animations.asp|CSS3 Animation}
* @param {AnimatorOptions} [options] - animator's options
* @example
const animator = new Animator({
    delay: 2,
    diretion: "alternate",
    duration: 2,
    fillMode: "forwards",
    iterationCount: 3,
    easing: Scene.eaasing.EASE,
});
*/
var Animator = /*#__PURE__*/ (function (_super) {
    __extends(Animator, _super);
    function Animator(options) {
        var _this = _super.call(this) || this;
        _this.options = {};
        _this.state = {
            id: "",
            easing: 0,
            easingName: "linear",
            iterationCount: 1,
            delay: 0,
            fillMode: "forwards",
            direction: "normal",
            playSpeed: 1,
            currentTime: 0,
            currentIterationTime: -1,
            currentIterationCount: 0,
            tickTime: 0,
            prevTime: 0,
            playState: "paused",
            duration: 0
        };
        _this.setOptions(options);
        return _this;
    }
    /**
      * set animator's easing.
      * @method Scene.Animator#setEasing
      * @param {array| function} curverArray - The speed curve of an animation.
      * @return {Scene.Animator} An instance itself.
      * @example
  animator.({
      delay: 2,
      diretion: "alternate",
      duration: 2,
      fillMode: "forwards",
      iterationCount: 3,
      easing: Scene.easing.EASE,
  });
      */
    Animator.prototype.setEasing = function (curveArray) {
        this.setState(Array.isArray(curveArray) ? {
            easingName: "cubic-bezier(" + curveArray.join(",") + ")",
            easing: bezier(curveArray[0], curveArray[1], curveArray[2], curveArray[3])
        } : {
            easing: curveArray,
            easingName: curveArray.easingName || "linear"
        });
        return this;
    };
    /**
      * set animator's options.
      * @method Scene.Animator#setOptions
      * @see {@link https://www.w3schools.com/css/css3_animations.asp|CSS3 Animation}
      * @param {Object} [AnimatorOptions] - animator's options
      * @return {Scene.Animator} An instance itself.
      * @example
  animator.({
      delay: 2,
      diretion: "alternate",
      duration: 2,
      fillMode: "forwards",
      iterationCount: 3,
      easing: Scene.eaasing.EASE,
  });
      */
    Animator.prototype.setOptions = function (options) {
        if (!options) {
            return this;
        }
        for (var name in options) {
            var value = options[name];
            if (name === "easing") {
                this.setEasing(value);
                continue;
            }
            else if (name === "duration") {
                value && this.setDuration(value);
                continue;
            }
            (name in this.state ? this.state : this.options)[name] = value;
        }
        return this;
    };
    /**
      * Get the animator's total duration including delay
      * @method Scene.Animator#getTotalDuration
      * @return {number} Total duration
      * @example
  animator.getTotalDuration();
      */
    Animator.prototype.getTotalDuration = function () {
        if (this.state.iterationCount === "infinite") {
            return Infinity;
        }
        return this.state.delay + this.getActiveDuration();
    };
    /**
      * Get the animator's total duration excluding delay
      * @method Scene.Animator#getActiveDuration
      * @return {number} Total duration excluding delay
      * @example
  animator.getTotalDuration();
      */
    Animator.prototype.getActiveDuration = function () {
        if (this.state.iterationCount === "infinite") {
            return Infinity;
        }
        return this.getDuration() * this.state.iterationCount;
    };
    /**
      * Check if the animator has reached the end.
      * @method Scene.Animator#isEnded
      * @return {boolean} ended
      * @example
  animator.isEnded(); // true or false
      */
    Animator.prototype.isEnded = function () {
        if (this.state.tickTime === 0 && this.state.playState === "paused") {
            return true;
        }
        else if (this.getTime() < this.getActiveDuration()) {
            return false;
        }
        return true;
    };
    /**
      *Check if the animator is paused:
      * @method Scene.Animator#isPaused
      * @return {boolean} paused
      * @example
  animator.isPaused(); // true or false
      */
    Animator.prototype.isPaused = function () {
        return this.state.playState === "paused";
    };
    Animator.prototype.setNext = function (animator) {
        this.on("ended", function () {
            animator.play();
        });
        return this;
    };
    /**
      * play animator
      * @method Scene.Animator#play
      * @return {Scene.Animator} An instance itself.
      */
    Animator.prototype.play = function () {
        var _this = this;
        this.state.playState = "running";
        if (this.isEnded()) {
            this.setTickTime(0);
        }
        this.state.tickTime = this.getTime();
        requestAnimFrame(function (time) {
            _this.state.prevTime = time;
            _this.tick(time);
        });
        /**
             * This event is fired when play animator.
             * @event Scene.Animator#play
             */
        this.trigger("play");
        return this;
    };
    /**
      * pause animator
      * @method Scene.Animator#pause
      * @return {Scene.Animator} An instance itself.
      */
    Animator.prototype.pause = function () {
        this.state.playState = "paused";
        /**
             * This event is fired when animator is paused.
             * @event Scene.Animator#paused
             */
        this.trigger("paused");
        return this;
    };
    /**
       * end animator
       * @method Scene.Animator#end
       * @return {Scene.Animator} An instance itself.
      */
    Animator.prototype.end = function () {
        this.pause();
        /**
             * This event is fired when animator is ended.
             * @event Scene.Animator#ended
             */
        this.trigger("ended");
        return this;
    };
    /**
      * reset animator
      * @method Scene.Animator#reset
      * @return {Scene.Animator} An instance itself.
      */
    Animator.prototype.reset = function () {
        this.state.tickTime = 0;
        this.setTime(0);
        this.pause();
        return this;
    };
    /**
      * set currentTime
      * @method Scene.Animator#setTime
      * @param {Number|String} time - currentTime
      * @return {Scene.Animator} An instance itself.
      * @example
  
  animator.setTime("from"); // 0
  animator.setTime("to"); // 100%
  animator.setTime("50%");
  animator.setTime(10);
  animator.getTime() // 10
      */
    Animator.prototype.setTime = function (time, isTick) {
        var activeDuration = this.getActiveDuration();
        var currentTime = isTick ? time : this.getUnitTime(time);
        this.state.tickTime = this.state.delay + currentTime;
        if (currentTime < 0) {
            currentTime = 0;
        }
        else if (currentTime > activeDuration) {
            currentTime = activeDuration;
        }
        this.state.currentTime = currentTime;
        this.calculateIterationTime();
        if (this.isDelay()) {
            return this;
        }
        /**
             * This event is fired when the animator updates the time.
             * @event Scene.Animator#timeupdate
             * @param {Object} param The object of data to be sent to an event.
             * @param {Number} param.currentTime The total time that the animator is running.
             * @param {Number} param.time The iteration time during duration that the animator is running.
             * @param {Number} param.iterationCount The iteration count that the animator is running.
             */
        this.trigger("timeupdate", {
            currentTime: currentTime,
            time: this.getIterationTime(),
            iterationCount: this.getIterationCount()
        });
        return this;
    };
    Animator.prototype.getState = function (name) {
        return this.state[name];
    };
    Animator.prototype.setState = function (object) {
        for (var name in object) {
            this.state[name] = object[name];
        }
        return this;
    };
    /**
      * Get the animator's current time
      * @method Scene.Animator#getTime
      * @return {number} current time
      * @example
  animator.getTime();
      */
    Animator.prototype.getTime = function () {
        return this.state.currentTime;
    };
    Animator.prototype.getUnitTime = function (time) {
        if (isString(time)) {
            var duration = this.getDuration() || 100;
            if (time === "from") {
                return 0;
            }
            else if (time === "to") {
                return duration;
            }
            var _a = splitUnit(time), unit = _a.unit, value = _a.value;
            if (unit === "%") {
                !this.getDuration() && (this.state.duration = duration);
                return parseFloat(time) / 100 * duration;
            }
            else if (unit === ">") {
                return value + THRESHOLD;
            }
            else {
                return value;
            }
        }
        else {
            return toFixed(time);
        }
    };
    /**
      * Get the animator's current iteration time
      * @method Scene.Animator#getIterationTime
      * @return {number} current iteration time
      * @example
  animator.getIterationTime();
      */
    Animator.prototype.getIterationTime = function () {
        return this.state.currentIterationTime;
    };
    /**
       * Get a delay for the start of an animation.
       * @method Scene.Animator#getDelay
       * @return {number} delay
       */
    Animator.prototype.getDelay = function () {
        return this.state.delay;
    };
    /**
       * Set a delay for the start of an animation.
       * @method Scene.Animator#setDelay
       * @param {number} delay - delay
       * @return {Scene.Animator} An instance itself.
       */
    Animator.prototype.setDelay = function (delay) {
        this.state.delay = delay;
        return this;
    };
    /**
       * Check if the current state of animator is delayed.
       * @method Scene.Animator#isDelay
       * @return {boolean} check delay state
       */
    Animator.prototype.isDelay = function () {
        var _a = this.state, delay = _a.delay, tickTime = _a.tickTime;
        return delay > 0 && (tickTime < delay);
    };
    /**
       * Get fill mode for the item when the animation is not playing (before it starts, after it ends, or both)
       * @method Scene.Animator#getFillMode
       * @return {"none"|"forwards"|"backwards"|"both"} fillMode
       */
    Animator.prototype.getFillMode = function () {
        return this.state.fillMode;
    };
    /**
       * Set fill mode for the item when the animation is not playing (before it starts, after it ends, or both)
       * @method Scene.Animator#setFillMode
       * @param {"none"|"forwards"|"backwards"|"both"} fillMode - fillMode
       * @return {Scene.Animator} An instance itself.
       */
    Animator.prototype.setFillMode = function (fillMode) {
        this.state.fillMode = fillMode;
        return this;
    };
    /**
       * Get the number of times an animation should be played.
       * @method Scene.Animator#getIterationCount
       * @return {"inifnite"|number} iterationCount
       */
    Animator.prototype.getIterationCount = function () {
        return this.state.iterationCount;
    };
    /**
       * Set the number of times an animation should be played.
       * @method Scene.Animator#setIterationCount
       * @param {"inifnite"|number} iterationCount - iterationCount
       * @return {Scene.Animator} An instance itself.
       */
    Animator.prototype.setIterationCount = function (iterationCount) {
        this.state.iterationCount = iterationCount;
        return this;
    };
    /**
       * Get whether an animation should be played forwards, backwards or in alternate cycles.
       * @method Scene.Animator#getDirection
       * @return {"normal"|"reverse"|"alternate"|"alternate-reverse"} direction
       */
    Animator.prototype.getDirection = function () {
        return this.state.direction;
    };
    /**
       * Set whether an animation should be played forwards, backwards or in alternate cycles.
       * @method Scene.Animator#setDirection
       * @param {"normal"|"reverse"|"alternate"|"alternate-reverse"} direction - direction
       * @return {Scene.Animator} An instance itself.
       */
    Animator.prototype.setDirection = function (direction) {
        this.state.direction = direction;
        return this;
    };
    /**
       * Get whether the animation is running or paused.
       * @method Scene.Animator#getPlayState
       * @return {"paused"|"running"} playState
       */
    Animator.prototype.getPlayState = function () {
        return this.state.playState;
    };
    /**
       * Set whether the animation is running or paused.
       * @method Scene.Animator#setPlayState
       * @param {"paused"|"running"} playState - playState
       * @return {Scene.Animator} An instance itself.
       */
    Animator.prototype.setPlayState = function (playState) {
        this.state.playState = playState;
        return this;
    };
    /**
       * Get the animator's play speed
       * @method Scene.Animator#getPlaySpeed
       * @return {number} playSpeed
       */
    Animator.prototype.getPlaySpeed = function () {
        return this.state.playSpeed;
    };
    /**
       * Set the animator's play speed
       * @method Scene.Animator#setPlaySpeed
       * @param {number} playSpeed - playSpeed
       * @return {Scene.Animator} An instance itself.
       */
    Animator.prototype.setPlaySpeed = function (playSpeed) {
        this.state.playSpeed = playSpeed;
        return this;
    };
    /**
       * Get how long an animation should take to complete one cycle.
       * @method Scene.Animator#getDuration
       * @return {number} duration
       */
    Animator.prototype.getDuration = function () {
        return this.state.duration;
    };
    /**
       * Set how long an animation should take to complete one cycle.
       * @method Scene.Animator#setDuration
       * @param {number} duration - duration
       * @return {Scene.Animator} An instance itself.
       */
    Animator.prototype.setDuration = function (duration) {
        this.state.duration = duration;
        return this;
    };
    /**
       * Get the speed curve of an animation.
       * @method Scene.Animator#getEasing
       * @return {0|function} easing
       */
    Animator.prototype.getEasing = function () {
        return this.state.easing;
    };
    /**
       * Get the speed curve's name
       * @method Scene.Animator#getEasingName
       * @return {string} the curve's name.
       */
    Animator.prototype.getEasingName = function () {
        return this.state.easingName;
    };
    Animator.prototype.setCurrentIterationCount = function (iterationCount) {
        var state = this.state;
        var passIterationCount = Math.floor(iterationCount);
        if (state.currentIterationCount < passIterationCount) {
            /**
                  * The event is fired when an iteration of an animation ends.
                  * @event Scene.Animator#iteration
                  * @param {Object} param The object of data to be sent to an event.
                  * @param {Number} param.currentTime The total time that the animator is running.
                  * @param {Number} param.iterationCount The iteration count that the animator is running.
                  */
            this.trigger("iteration", {
                currentTime: state.currentTime,
                iterationCount: passIterationCount
            });
        }
        state.currentIterationCount = iterationCount;
        return this;
    };
    Animator.prototype.setIterationTime = function (time) {
        this.state.currentIterationTime = time;
        return this;
    };
    Animator.prototype.calculateIterationTime = function () {
        var _a = this.state, iterationCount = _a.iterationCount, fillMode = _a.fillMode, direction = _a.direction;
        var duration = this.getDuration();
        var time = this.getTime();
        var currentIterationCount = duration === 0 ? 0 : time / duration;
        var currentIterationTime = duration ? time % duration : 0;
        if (!duration) {
            this.setIterationTime(0);
            return this;
        }
        this.setCurrentIterationCount(currentIterationCount);
        // direction : normal, reverse, alternate, alternate-reverse
        // fillMode : forwards, backwards, both, none
        var isReverse = isDirectionReverse(currentIterationCount, direction);
        if (isReverse) {
            currentIterationTime = duration - currentIterationTime;
        }
        if (iterationCount !== "infinite") {
            var isForwards = fillMode === "both" || fillMode === "forwards";
            // fill forwards
            if (currentIterationCount >= iterationCount) {
                currentIterationTime = duration * (isForwards ? (iterationCount % 1) || 1 : 0);
                isReverse && (currentIterationTime = duration - currentIterationTime);
            }
        }
        this.setIterationTime(currentIterationTime);
        return this;
    };
    Animator.prototype.caculateEasing = function (time) {
        if (!this.state.easing) {
            return time;
        }
        var duration = this.getDuration();
        var easing = this.state.easing;
        var ratio = duration === 0 ? 0 : time / duration;
        var easingTime = easing(ratio) * time;
        return easingTime;
    };
    Animator.prototype.tick = function (now) {
        var _this = this;
        var state = this.state;
        var playSpeed = state.playSpeed, prevTime = state.prevTime;
        var currentTime = this.state.tickTime + Math.min(1000, now - prevTime) / 1000 * playSpeed;
        state.prevTime = now;
        this.setTickTime(currentTime);
        if (this.isEnded()) {
            this.end();
            return;
        }
        if (state.playState === "paused") {
            return;
        }
        requestAnimFrame(function (time) {
            _this.tick(time);
        });
    };
    Animator.prototype.setTickTime = function (time) {
        this.setTime(time - this.state.delay, true);
    };
    return Animator;
}(EventTrigger));

/**
* @namespace
* @name Color
*/
var COLOR_MODELS = ["rgb", "rgba", "hsl", "hsla"];
/**
* Remove the # from the hex color.
* @memberof Color
* @param {String} hex - hex color
* @return {String} hex color
* @example
console.log(cutHex("#000000"))
// "000000"
*/
function cutHex(hex) {
    return (hex.charAt(0) === "#") ? hex.substring(1) : hex;
}
/**
* convert hex color to rgb color.
* @memberof Color
* @param {String} hex - hex color
* @return {Array} rgb color
* @example
console.log(hexToRGB("#000000"));
// [0, 0, 0]
console.log(hexToRGB("#201045"));
// [32, 16, 69]
*/
function hexToRGB(hex) {
    var h = cutHex(hex);
    var r = parseInt(h.substring(0, 2), 16);
    var g = parseInt(h.substring(2, 4), 16);
    var b = parseInt(h.substring(4, 6), 16);
    var a = parseInt(h.substring(6, 8), 16) / 255;
    if (isNaN(a)) {
        a = 1;
    }
    return [r, g, b, a];
}
/**
* convert 3-digit hex color to 6-digit hex color.
* @memberof Color
* @param {String} hex - 3-digit hex color
* @return {String} 6-digit hex color
* @example
console.log(hex3to6("#123"));
// "#112233"
*/
function hex3to6(h) {
    var r = h.charAt(1);
    var g = h.charAt(2);
    var b = h.charAt(3);
    var arr = ["#", r, r, g, g, b, b];
    return arr.join("");
}
/**
* convert hsl color to rgb color.
* @memberof Color
* @param {Array} hsl - hsl color(hue: 0 ~ 360, saturation: 0 ~ 1, lightness: 0 ~ 1)
* @return {Array} rgb color
* @example
console.log(hslToRGB([150, 0.5, 0.4]));
// [51, 153, 102]
*/
function hslToRGB(hsl) {
    var h = hsl[0];
    var s = hsl[1];
    var l = hsl[2];
    if (h < 0) {
        h += Math.floor((Math.abs(h) + 360) / 360) * 360;
    }
    h %= 360;
    var c = (1 - Math.abs(2 * l - 1)) * s;
    var x = c * (1 - Math.abs((h / 60) % 2 - 1));
    var m = l - c / 2;
    var rgb;
    if (h < 60) {
        rgb = [c, x, 0];
    }
    else if (h < 120) {
        rgb = [x, c, 0];
    }
    else if (h < 180) {
        rgb = [0, c, x];
    }
    else if (h < 240) {
        rgb = [0, x, c];
    }
    else if (h < 300) {
        rgb = [x, 0, c];
    }
    else if (h < 360) {
        rgb = [c, 0, x];
    }
    var result = [
        Math.round((rgb[0] + m) * 255),
        Math.round((rgb[1] + m) * 255),
        Math.round((rgb[2] + m) * 255),
    ];
    if (hsl.length > 3) {
        result[3] = hsl[3];
    }
    return result;
}

/**
* @namespace
* @name Property
*/
/**
* divide text by space.
* @memberof Property
* @function splitSpace
* @param {String} text - text to divide
* @return {Array} divided texts
* @example
console.log(splitSpace("a b c d e f g"));
// ["a", "b", "c", "d", "e", "f", "g"]
console.log(splitSpace("'a,b' c 'd,e' f g"));
// ["'a,b'", "c", "'d,e'", "f", "g"]
*/
function splitSpace(text) {
    // divide comma(,)
    var matches = text.match(/("[^"]*")|('[^']*')|([^\s()]*(?:\((?:[^()]*|\([^()]*\))*\))[^\s()]*)|\S+/g);
    return matches || [];
}
/**
* divide text by comma.
* @memberof Property
* @function splitComma
* @param {String} text - text to divide
* @return {Array} divided texts
* @example
console.log(splitComma("a,b,c,d,e,f,g"));
// ["a", "b", "c", "d", "e", "f", "g"]
console.log(splitComma("'a,b',c,'d,e',f,g"));
// ["'a,b'", "c", "'d,e'", "f", "g"]
*/
function splitComma(text) {
    // divide comma(,)
    // "[^"]*"|'[^']*'
    var matches = text.match(/("[^"]*"|'[^']*'|[^,\s()]*\((?:[^()]*|\([^()]*\))*\)[^,\s()]*|[^,])+/g);
    return matches ? matches.map(function (str) { return str.trim(); }) : [];
}
function splitStyle(str) {
    var _a;
    var properties = str.split(";");
    var length = properties.length;
    var obj = [];
    for (var i = 0; i < length; ++i) {
        var matches = /([^:]*):([\S\s]*)/g.exec(properties[i]);
        if (!matches || matches.length < 3 || !matches[1]) {
            continue;
        }
        obj.push((_a = {}, _a[matches[1].trim()] = toPropertyObject(matches[2].trim()), _a));
    }
    return obj;
}
/**
* convert array to PropertyObject[type=color].
* default model "rgba"
* @memberof Property
* @function arrayToColorObject
* @param {Array|PropertyObject} value ex) [0, 0, 0, 1]
* @return {PropertyObject} PropertyObject[type=color]
* @example
arrayToColorObject([0, 0, 0])
// => PropertyObject(type="color", model="rgba", value=[0, 0, 0, 1], separator=",")
*/
function arrayToColorObject(arr) {
    var model = "rgba";
    if (arr.length === 3) {
        arr[3] = 1;
    }
    return new PropertyObject(arr, {
        model: model,
        separator: ",",
        type: "color",
        prefix: model + "(",
        suffix: ")"
    });
}
/**
    * convert text with parentheses to PropertyObject[type=color].
    * If the values are not RGBA model, change them RGBA mdoel.
    * @memberof Property
    * @function toColorObject
    * @param {String|PropertyObject} value - color value "rgba(0,0,0,1)"
    * @return {PropertyObject} PropertyObject[type=color]
    * @example
toColorObject("rgba(0, 0, 0,1)")
// => PropertyObject(type="color", model="rgba", value=[0, 0, 0,1], separator=",")
*/
function toColorObject(value) {
    var colorObject;
    if (value instanceof PropertyObject) {
        colorObject = value;
    }
    else if (isArray(value)) {
        colorObject = arrayToColorObject(value);
    }
    else if (isString(value)) {
        return stringToColorObject(value);
    }
    var colorArray = colorObject.value;
    var length = colorArray.length;
    if (length === 4) {
        colorArray[3] = parseFloat(colorArray[3]);
    }
    else if (length === 3) {
        colorArray[3] = 1;
    }
    colorObject.setOptions({ type: "color" });
    var colorModel = colorObject.getOption("model").toLowerCase();
    // rgb hsl model to CHANGE rgba hsla
    // string -> number
    if (colorModel === "rgb") {
        colorObject.setOptions({
            type: "color",
            model: "rgba",
            prefix: "rgba(",
            suffix: ")"
        });
    }
    switch (colorModel) {
        case "rgb":
        case "rgba":
            for (var i = 0; i < 3; ++i) {
                colorArray[i] = parseInt(colorArray[i], 10);
            }
            break;
        case "hsl":
        case "hsla":
            for (var i = 1; i < 3; ++i) {
                if (colorArray[i].indexOf("%") !== -1) {
                    colorArray[i] = parseFloat(colorArray[i]) / 100;
                }
            }
            // hsl, hsla to rgba
            colorArray = hslToRGB(colorArray);
            return arrayToColorObject(colorArray);
        default:
    }
    return colorObject;
}
/**
* convert text with parentheses to object.
* @memberof Property
* @function stringToBracketObject
* @param {String} value ex) "rgba(0,0,0,1)"
* @return {PropertyObject} PropertyObject
* @example
stringToBracketObject("abcde(0, 0, 0,1)")
// => PropertyObject(model="abcde", value=[0, 0, 0,1], separator=",")
*/
function stringToBracketObject(value) {
    // [prefix, value, other]
    var matches = (/([^(]*)\(([\s\S]*)\)([\s\S]*)/g).exec(value);
    if (!matches || matches.length < 4) {
        return value;
    }
    var model = matches[1] || "";
    var text = matches[2];
    var prefix = model + "(";
    var suffix = ")" + matches[3];
    var separator = ",";
    var values;
    // divide comma(,)
    var obj = toPropertyObject(text);
    if (obj instanceof PropertyObject) {
        separator = obj.getOption("separator");
        values = obj.value;
        prefix += obj.getOption("prefix");
        suffix = obj.getOption("suffix") + suffix;
    }
    else {
        values = [text];
    }
    var result = new PropertyObject(values, {
        separator: separator,
        model: model,
        prefix: prefix,
        suffix: suffix
    });
    if (COLOR_MODELS.indexOf(model) !== -1) {
        return toColorObject(result);
    }
    else {
        return result;
    }
}
function arrayToPropertyObject(arr, separator) {
    return new PropertyObject(arr, {
        type: "array",
        separator: separator
    });
}
/**
* convert text with parentheses to PropertyObject[type=color].
* If the values are not RGBA model, change them RGBA mdoel.
* @memberof Property
* @function stringToColorObject
* @param {String|PropertyObject} value ex) "rgba(0,0,0,1)"
* @return {PropertyObject} PropertyObject[type=color]
* @example
stringToColorObject("rgba(0, 0, 0,1)")
// => PropertyObject(type="color", model="rgba", value=[0, 0, 0,1], separator=",")
*/
function stringToColorObject(value) {
    var colorArray;
    if (value.charAt(0) === "#") {
        if (value.length === 4) {
            colorArray = hexToRGB(hex3to6(value));
        }
        else {
            colorArray = hexToRGB(value);
        }
        return arrayToColorObject(colorArray);
    }
    else if (value.indexOf("(") !== -1) {
        // in bracket.
        return stringToBracketObject(value);
    }
    else {
        throw new Error("Invalid Format : Not a Color - " + value);
    }
}
/**
* convert CSS Value to PropertyObject
* @memberof Property
* @function toPropertyObject
* @param {String} value it's text contains the array.
* @return {String} Not Array, Not Separator, Only Number & Unit
* @return {PropertyObject} Array with Separator.
* @see referenced regular expression {@link http://stackoverflow.com/questions/20215440/parse-css-gradient-rule-with-javascript-regex}
* @example
toPropertyObject("1px solid #000");
// => PropertyObject(["1px", "solid", rgba(0, 0, 0, 1)])
*/
function toPropertyObject(value) {
    if (!isString(value)) {
        if (Array.isArray(value)) {
            return arrayToPropertyObject(value, ",");
        }
        return value;
    }
    var values = splitComma(value);
    if (values.length > 1) {
        return arrayToPropertyObject(values.map(function (v) { return toPropertyObject(v); }), ",");
    }
    values = splitSpace(value);
    if (values.length > 1) {
        return arrayToPropertyObject(values.map(function (v) { return toPropertyObject(v); }), " ");
    }
    values = /^(['"])([^'"]*)(['"])$/g.exec(value);
    if (values && values[1] === values[3]) {
        // Quotes
        return new PropertyObject([toPropertyObject(values[2])], {
            prefix: values[1],
            suffix: values[1]
        });
    }
    else if (value.indexOf("(") !== -1) {
        // color
        return stringToBracketObject(value);
    }
    else if (value.charAt(0) === "#") {
        return stringToColorObject(value);
    }
    return value;
}
function toObject(object, result) {
    if (result === void 0) { result = {}; }
    var model = object.getOption("model");
    if (model) {
        object.setOptions({
            model: "",
            suffix: "",
            prefix: ""
        });
        var value = object.size() > 1 ? object : object.get(0);
        result[model] = value;
    }
    else {
        object.forEach(function (obj) { return toObject(obj, result); });
    }
    return result;
}

function toInnerProperties(obj) {
    if (!obj) {
        return "";
    }
    var arrObj = [];
    for (var name in obj) {
        arrObj.push(name + "(" + obj[name] + ")");
    }
    return arrObj.join(" ");
}
function isPropertyObject(value) {
    return value instanceof PropertyObject;
}
/* eslint-disable */
function clone(target, toValue) {
    if (toValue === void 0) { toValue = false; }
    return merge({}, target, toValue);
}
function merge(to, from, toValue) {
    if (toValue === void 0) { toValue = false; }
    for (var name in from) {
        var value = from[name];
        var type = getType(value);
        if (type === "property") {
            to[name] = toValue ? value.toValue() : value.clone();
        }
        else if (type === "array") {
            to[name] = value.slice();
        }
        else if (type === "object") {
            if (isObject(to[name]) && !(to[name] instanceof PropertyObject)) {
                merge(to[name], value, toValue);
            }
            else {
                to[name] = clone(value, toValue);
            }
        }
        else {
            to[name] = from[name];
        }
    }
    return to;
}
/* eslint-enable */
/**
* Animation's Frame
* @class Scene.Frame
* @param {Object} properties - properties
* @example
const frame = new Scene.Frame({
    display: "none"
    transform: {
        translate: "50px",
        scale: "5, 5",
    }
});
 */
var Frame = /*#__PURE__*/ (function () {
    function Frame(properties) {
        if (properties === void 0) { properties = {}; }
        this.properties = {};
        this.set(properties);
    }
    /**
      * get property value
      * @method Scene.Frame#get
      * @param {...Number|String|Scene.PropertyObject} args - property name or value
      * @example
      frame.get("display") // => "none", "block", ....
      frame.get("transform", "translate") // => "10px,10px"
      */
    Frame.prototype.get = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var value = this.raw.apply(this, args);
        var type = getType(value);
        if (type === "property") {
            return value.toValue();
        }
        else if (type === "object") {
            return clone(value, true);
        }
        else {
            return value;
        }
    };
    Frame.prototype.raw = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var properties = this.properties;
        var params = args[0] in ALIAS ? ALIAS[args[0]] : args;
        var length = params.length;
        for (var i = 0; i < length; ++i) {
            if (!isObject(properties)) {
                return undefined;
            }
            properties = properties[params[i]];
        }
        return properties;
    };
    /**
      * remove property value
      * @method Scene.Frame#remove
      * @param {...String} args - property name
      * @return {Scene.Frame} An instance itself
      * @example
      frame.remove("display")
      */
    Frame.prototype.remove = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var properties = this.properties;
        var params = args[0] in ALIAS ? ALIAS[args[0]] : args;
        var length = params.length;
        if (!length) {
            return this;
        }
        for (var i = 0; i < length - 1; ++i) {
            if (!isObject(properties)) {
                return this;
            }
            properties = properties[params[i]];
        }
        delete properties[params[length - 1]];
        return this;
    };
    /**
      * set property
      * @method Scene.Frame#set
      * @param {...Number|String|Scene.PropertyObject} args - property names or values
      * @return {Scene.Frame} An instance itself
      * @example
  // one parameter
  frame.set({
      display: "none",
      transform: {
          translate: "10px, 10px",
          scale: "1",
      },
      filter: {
          brightness: "50%",
          grayscale: "100%"
      }
  });
  
  // two parameters
  frame.set("transform", {
      translate: "10px, 10px",
      scale: "1",
  });
  
  // three parameters
  frame.set("transform", "translate", "50px");
      */
    Frame.prototype.set = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var length = args.length;
        var params = args.slice(0, -1);
        var value = args[length - 1];
        if (params[0] in ALIAS) {
            this._set(ALIAS[params[0]], value);
        }
        else if (length === 2 && isArray(params[0])) {
            this._set(params[0], value);
        }
        else if (isObject(value)) {
            if (isArray(value)) {
                this._set(params, value);
            }
            else if (isPropertyObject(value)) {
                if (isRole(params)) {
                    this.set.apply(this, params.concat([toObject(value)]));
                }
                else {
                    this._set(params, value);
                }
            }
            else if (value instanceof Frame) {
                this.merge(value);
            }
            else {
                for (var name in value) {
                    this.set.apply(this, params.concat([name, value[name]]));
                }
            }
        }
        else if (isString(value)) {
            if (isRole(params)) {
                var obj = toPropertyObject(value);
                if (isObject(obj)) {
                    this.set.apply(this, params.concat([obj]));
                }
                return this;
            }
            else {
                var styles = splitStyle(value);
                styles.forEach(function (style) {
                    _this.set.apply(_this, params.concat([style]));
                });
                if (styles.length) {
                    return this;
                }
            }
            this._set(params, value);
        }
        else {
            this._set(params, value);
        }
        return this;
    };
    /**
      * check that has property.
      * @method Scene.Frame#has
      * @param {...String} args - property name
      * @example
      frame.has("property", "display") // => true or false
      */
    Frame.prototype.has = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var properties = this.properties;
        var params = args[0] in ALIAS ? ALIAS[args[0]] : args;
        var length = params.length;
        if (!length) {
            return false;
        }
        for (var i = 0; i < length; ++i) {
            if (!isObject(properties) || !(params[i] in properties)) {
                return false;
            }
            properties = properties[params[i]];
        }
        return true;
    };
    /**
      * clone frame.
      * @method Scene.Frame#clone
      * @return {Scene.Frame} An instance of clone
      * @example
      frame.clone();
      */
    Frame.prototype.clone = function () {
        var frame = new Frame();
        frame.merge(this);
        return frame;
    };
    /**
      * merge one frame to other frame.
      * @method Scene.Frame#merge
      * @param {Scene.Frame} frame - target frame.
      * @return {Scene.Frame} An instance itself
      * @example
      frame.merge(frame2);
      */
    Frame.prototype.merge = function (frame) {
        var properties = this.properties;
        var frameProperties = frame.properties;
        if (!frameProperties) {
            return this;
        }
        merge(properties, frameProperties);
        return this;
    };
    Frame.prototype.toObject = function () {
        return clone(this.properties, true);
    };
    /**
      * Specifies an css object that coverted the frame.
      * @method Scene.Frame#toCSSObject
      * @return {object} cssObject
      */
    Frame.prototype.toCSSObject = function () {
        var properties = this.toObject();
        var cssObject = {};
        for (var name in properties) {
            if (isRole([name], true)) {
                continue;
            }
            var value = properties[name];
            if (name === timingFunction) {
                cssObject[timingFunction.replace("animation", ANIMATION)] =
                    (isString(value) ? value : value.easingName) || "initial";
                continue;
            }
            cssObject[name] = value;
        }
        var transform = toInnerProperties(properties.transform);
        var filter = toInnerProperties(properties.filter);
        TRANSFORM && transform && (cssObject[TRANSFORM] = transform);
        FILTER && filter && (cssObject[FILTER] = filter);
        return cssObject;
    };
    /**
      * Specifies an css text that coverted the frame.
      * @method Scene.Frame#toCSS
      * @return {string} cssText
      */
    Frame.prototype.toCSS = function () {
        var cssObject = this.toCSSObject();
        var cssArray = [];
        for (var name in cssObject) {
            cssArray.push(name + ":" + cssObject[name] + ";");
        }
        return cssArray.join("");
    };
    Frame.prototype._set = function (args, value) {
        var properties = this.properties;
        var length = args.length;
        for (var i = 0; i < length - 1; ++i) {
            var name = args[i];
            !(name in properties) && (properties[name] = {});
            properties = properties[name];
        }
        if (!length) {
            return;
        }
        properties[args[length - 1]] = isString(value) ? toPropertyObject(value) : value;
    };
    return Frame;
}());

function getNames(names, stack) {
    var arr = [];
    for (var name in names) {
        stack.push(name);
        if (isObject(names[name])) {
            arr = arr.concat(getNames(names[name], stack));
        }
        else {
            arr.push(stack.slice());
        }
        stack.pop();
    }
    return arr;
}
function updateFrame(names, properties) {
    for (var name in properties) {
        var value = properties[name];
        if (!isObject(value) || isArray(value) || value instanceof PropertyObject) {
            names[name] = true;
            continue;
        }
        if (!isObject(names[name])) {
            names[name] = {};
        }
        updateFrame(names[name], properties[name]);
    }
}
/**
* a list of objects in chronological order.
* @memberof Scene
*/
var Keyframes = /*#__PURE__*/ (function () {
    /**
       */
    function Keyframes() {
        this.times = [];
        this.items = {};
        this.names = {};
    }
    /**
      * A list of names
      * @return {string[][]} names
      * @example
  keyframes.getNames(); // [["a"], ["transform", "translate"], ["transform", "scale"]]
      */
    Keyframes.prototype.getNames = function () {
        var names = this.names;
        return getNames(names, []);
    };
    /**
      * Check if keyframes has propery's name
      * @param {...string[]} name - property's time
      * @return {Boolean} true: if has property, false: not
      * @example
  keyframes.hasName("transform", "translate"); // true or not
      */
    Keyframes.prototype.hasName = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return isInProperties(this.names, args, true);
    };
    /**
       * update property names used in frames.
       * @return {Scene.Keyframes} An instance itself
       */
    Keyframes.prototype.update = function () {
        var items = this.items;
        for (var time in items) {
            this.updateFrame(items[time]);
        }
        return this;
    };
    /**
       * executes a provided function once for each scene item.
       * @param {Function} callback Function to execute for each element, taking three arguments
       * @param {Scene.Frame} [callback.item] The value of the item being processed in the keyframes.
       * @param {string} [callback.time] The time of the item being processed in the keyframes.
       * @param {object} [callback.items] The object that forEach() is being applied to.
       * @return {Scene.Keyframes} An instance itself
       */
    Keyframes.prototype.forEach = function (callback) {
        var times = this.times;
        var items = this.items;
        times.forEach(function (time) {
            callback(items[time], time, items);
        });
    };
    /**
      * update property names used in frame.
      * @param {Scene.Frame} [frame] - frame of that time.
      * @return {Scene.Keyframes} An instance itself
      * @example
  keyframes.updateFrame(frame);
      */
    Keyframes.prototype.updateFrame = function (frame) {
        if (!frame) {
            return this;
        }
        var properties = frame.properties;
        var names = this.names;
        updateFrame(names, properties);
        return this;
    };
    /**
       * Get how long an animation should take to complete one cycle.
       * @return {number} duration
       */
    Keyframes.prototype.getDuration = function () {
        var times = this.times;
        return times.length === 0 ? 0 : times[times.length - 1];
    };
    /**
       * Set how long an animation should take to complete one cycle.
       * @param {number} duration - duration
       * @return {Scene.Keyframes} An instance itself.
       */
    Keyframes.prototype.setDuration = function (duration, originalDuration) {
        if (originalDuration === void 0) { originalDuration = this.getDuration(); }
        var ratio = duration / originalDuration;
        var _a = this, times = _a.times, items = _a.items;
        var obj = {};
        this.times = times.map(function (time) {
            var time2 = toFixed(time * ratio);
            obj[time2] = items[time];
            return time2;
        });
        this.items = obj;
    };
    /**
       * Set how much time you want to push ahead.
       * @param {number} time - time
       * @return {Scene.Keyframes} An instance itself.
       */
    Keyframes.prototype.unshift = function (time) {
        var _a = this, times = _a.times, items = _a.items;
        var obj = {};
        this.times = times.map(function (t) {
            var time2 = toFixed(time + t);
            obj[time2] = items[t];
            return time2;
        });
        this.items = obj;
        return this;
    };
    /**
      * get size of list
      * @return {Number} length of list
      */
    Keyframes.prototype.size = function () {
        return this.times.length;
    };
    /**
      * add object in list
      * @param {Number} time - frame's time
      * @param {Object} object - target
      * @return {Scene.Keyframes} An instance itself
      */
    Keyframes.prototype.add = function (time, object) {
        this.items[time] = object;
        this.addTime(time);
        return this;
    };
    /**
      * Check if keyframes has object at that time.
      * @param {Number} time - object's time
      * @return {Boolean} true: if has time, false: not
      */
    Keyframes.prototype.has = function (time) {
        return time in this.items;
    };
    /**
      * get object at that time.
      * @param {Number} time - object's time
      * @return {Object} object at that time
      */
    Keyframes.prototype.get = function (time) {
        return this.items[time];
    };
    /**
      * remove object at that time.
      * @param {Number} time - object's time
      * @return {Keyframes} An instance itself
      */
    Keyframes.prototype.remove = function (time) {
        var items = this.items;
        delete items[time];
        this.removeTime(time);
        return this;
    };
    Keyframes.prototype.addTime = function (time) {
        var times = this.times;
        var length = times.length;
        var pushIndex = length;
        for (var i = 0; i < length; ++i) {
            // if time is smaller than times[i], add time to index
            if (time === times[i]) {
                return this;
            }
            else if (time < times[i]) {
                pushIndex = i;
                break;
            }
        }
        this.times.splice(pushIndex, 0, time);
        return this;
    };
    Keyframes.prototype.removeTime = function (time) {
        var index = this.times.indexOf(time);
        if (index > -1) {
            this.times.splice(index, 1);
        }
        return this;
    };
    return Keyframes;
}());

/**
* @namespace
* @name Dot
*/
/**
* The dot product of Arrays
* @memberof Dot
* @function dotArray
* @param {Array} a1 value1
* @param {Array} a2 value2
* @param {Number} b1 b1 ratio
* @param {Number} b2 b2 ratio
* @return {Array|Object} Array.
* @example
dotArray([0, 0, 0, 1],[50, 50, 50, 1],0.5, 0.5);
// => [25, 25, 25, 1]
*/
function dotArray(a1, a2, b1, b2) {
    if (b2 === 0) {
        return a2;
    }
    if (!isArray(a2)) {
        return a1;
    }
    var length = a2.length;
    return a1.map(function (v1, i) {
        if (i >= length) {
            return v1;
        }
        else {
            return dot(v1, a2[i], b1, b2);
        }
    });
}
/**
* The dot product of PropertyObject(type=color)
* If the values are not RGBA model, change them RGBA mdoel.
* @memberof Dot
* @function dotColor
* @param {PropertyObject} a1 value1
* @param {PropertyObject} a2 value2
* @param {Number} b1 b1 ratio
* @param {Number} b2 b2 ratio
* @return {PropertyObject} PropertyObject(type=color).
* @example
var colorObject = ......; //PropertyObject(type=color, model="rgba", value=[254, 254, 254, 1]);
dotColor("#000",  colorObject, 0.5, 0.5);
// "#000" => PropertyObject(type=color, model="rgba", value=[0, 0, 0, 1]);
// return => PropertyObject(type=color, model="rgba", value=[127, 127, 127, 1]);
*/
function dotColor(color1, color2, b1, b2) {
    if (b2 === 0) {
        return color2;
    }
    // convert array to PropertyObject(type=color)
    var value1 = color1.value;
    var value2 = color2.value;
    // If the model name is not same, the inner product is impossible.
    var model1 = color1.getOption("model");
    var model2 = color2.getOption("model");
    if (model1 !== model2) {
        // It is recognized as a string.
        return dot(color1.toValue(), color2.toValue(), b1, b2);
    }
    if (value1.length === 3) {
        value1[3] = 1;
    }
    if (value2.length === 3) {
        value2[3] = 1;
    }
    var v = dotArray(value1, value2, b1, b2);
    var colorModel = model1;
    for (var i = 0; i < 3; ++i) {
        v[i] = parseInt(v[i], 10);
    }
    var object = new PropertyObject(v, {
        type: "color",
        model: colorModel,
        prefix: colorModel + "(",
        suffix: ")"
    });
    return object;
}
/**
* The dot product of Objects
* @memberof Dot
* @function dotObject
* @param {PropertyObject} a1 value1
* @param {PropertyObject} a2 value2
* @param {Number} b1 b1 ratio
* @param {Number} b2 b2 ratio
* @return {PropertyObject} Array with Separator.
* @example
dotObject(PropertyObject(["1px", "solid", rgba(0, 0, 0, 1)]),
PropertyObject(["9px", "solid", rgba(50, 50, 50, 1)]),
0.5, 0.5);
// => PropertyObject(["5px", "solid", rgba(25, 25, 25, 1)])
*/
function dotObject(a1, a2, b1, b2) {
    var a1Type = a1.getOption("type");
    if (a1Type === "color") {
        return dotColor(a1, a2, b1, b2);
    }
    var value1 = a1.value;
    var value2 = a2.value;
    var arr = dotArray(value1, value2, b1, b2);
    return new PropertyObject(arr, {
        type: a1Type,
        separator: a1.getOption("separator") || a2.getOption("separator"),
        prefix: a1.getOption("prefix") || a2.getOption("prefix"),
        suffix: a1.getOption("suffix") || a2.getOption("suffix"),
        model: a1.getOption("model") || a2.getOption("model")
    });
}
/**
* The dot product of a1 and a2 for the b1 and b2.
* @memberof Dot
* @function dot
* @param {String|Number|PropertyObject} a1 value1
* @param {String|Number|PropertyObject} a2 value2
* @param {Number} b1 b1 ratio
* @param {Number} b2 b2 ratio
* @return {String} Not Array, Not Separator, Only Number & Unit
* @return {PropertyObject} Array with Separator.
* @example
dot(1, 3, 0.3, 0.7);
// => 1.6
*/
function dot(a1, a2, b1, b2) {
    if (b2 === 0) {
        return a2;
    }
    else if (b1 === 0 || b1 + b2 === 0) {
        // prevent division by zero.
        return a1;
    }
    // dot Object
    var type1 = getType(a1);
    var type2 = getType(a2);
    if (type1 === type2) {
        if (type1 === "property") {
            return dotObject(a1, a2, b1, b2);
        }
        else if (type1 === "array") {
            return dotArray(a1, a2, b1, b2);
        }
        else if (type1 !== "value") {
            return a1;
        }
    }
    else {
        return a1;
    }
    // split number and unit of the value.
    var r1 = b1 / (b1 + b2);
    var r2 = 1 - r1;
    var v1 = splitUnit("" + a1);
    var v2 = splitUnit("" + a2);
    var v;
    // 숫자가 아닐경우 첫번째 값을 반환 b2가 0일경우 두번째 값을 반환
    if (isNaN(v1.value) || isNaN(v2.value)) {
        return a1;
    }
    else {
        v = v1.value * r2 + v2.value * r1;
    }
    var prefix = v1.prefix || v2.prefix;
    var unit = v1.unit || v2.unit;
    if (!prefix && !unit) {
        return v;
    }
    return prefix + v + unit;
}
function dotValue(time, prevTime, nextTime, prevValue, nextValue, easing) {
    if (time === prevTime) {
        return prevValue;
    }
    else if (time === nextTime) {
        return nextValue;
    }
    else if (!easing) {
        return dot(prevValue, nextValue, time - prevTime, nextTime - time);
    }
    var ratio = easing((time - prevTime) / (nextTime - prevTime));
    var value = dot(prevValue, nextValue, ratio, 1 - ratio);
    return value;
}

function hasClass(element, className) {
    if (element.classList) {
        return element.classList.contains(className);
    }
    return !!element.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
}
function addClass(element, className) {
    if (element.classList) {
        element.classList.add(className);
    }
    else {
        element.className += " " + className;
    }
}
function removeClass(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    }
    else {
        var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
        element.className = element.className.replace(reg, " ");
    }
}
function fromCSS(elements, properties) {
    if (!elements || !properties || !properties.length) {
        return {};
    }
    var element;
    if (elements instanceof Element) {
        element = elements;
    }
    else if (elements.length) {
        element = elements[0];
    }
    else {
        return {};
    }
    var cssObject = {};
    var styles = window.getComputedStyle(element);
    var length = properties.length;
    for (var i = 0; i < length; ++i) {
        cssObject[properties[i]] = styles[properties[i]];
    }
    return cssObject;
}

function toId(text) {
    return text.match(/[0-9a-zA-Z]+/g).join("");
}
function makeId(selector) {
    for (;;) {
        var id = "" + Math.floor(Math.random() * 100000);
        if (!selector) {
            return id;
        }
        var checkElement = document.querySelector("[data-scene-id=\"" + id + "\"]");
        if (!checkElement) {
            return id;
        }
    }
}
function makeAnimationProperties(properties) {
    var cssArray = [];
    for (var name in properties) {
        cssArray.push(ANIMATION + "-" + decamelize(name) + " : " + properties[name] + ";");
    }
    return cssArray.join("");
}
/**
* manage Frame Keyframes and play keyframes.
* @memberof Scene
* @extends Scene.Animator
* @example
const item = new Scene.SceneItem({
    0: {
        display: "none",
    },
    1: {
        display: "block",
        opacity: 0,
    },
    2: {
        opacity: 1,
    }
});
*/
var SceneItem = /*#__PURE__*/ (function (_super) {
    __extends(SceneItem, _super);
    /**
      * @param {Object} [properties] - properties
      * @param {AnimatorOptions} [options] - options
      * @example
      const item = new Scene.SceneItem({
          0: {
              display: "none",
          },
          1: {
              display: "block",
              opacity: 0,
          },
          2: {
              opacity: 1,
          }
      });
       */
    function SceneItem(properties, options) {
        var _this = _super.call(this) || this;
        _this.keyframes = new Keyframes();
        _this.elements = [];
        _this.load(properties, options);
        return _this;
    }
    SceneItem.prototype.getDuration = function () {
        return Math.max(this.state.duration, this.keyframes.getDuration());
    };
    SceneItem.prototype.setDuration = function (duration) {
        if (duration === 0) {
            return this;
        }
        var originalDuration = this.getDuration();
        if (originalDuration > 0) {
            this.keyframes.setDuration(duration, originalDuration);
        }
        _super.prototype.setDuration.call(this, toFixed(duration));
        return this;
    };
    /**
      * set the unique indicator of the item.
      * @method Scene.SceneItem#setId
      * @param {String} [id] - the indicator of the item.
      * @return {Scene.SceneItem} An instance itself
      * @example
  const item = new SceneItem();
  
  item.setId("item");
  console.log(item.getId()); // item
      */
    SceneItem.prototype.setId = function (id) {
        var elements = this.elements;
        var length = elements.length;
        this.setState({ id: id || makeId(!!length) });
        var sceneId = toId(this.getId());
        this.options.selector || (this.options.selector = "[data-scene-id=\"" + sceneId + "\"]");
        if (!length) {
            return this;
        }
        for (var i = 0; i < length; ++i) {
            elements[i].setAttribute("data-scene-id", sceneId);
        }
        return this;
    };
    /**
      * Specifies the unique indicator of the item.
      * @method Scene.SceneItem#getId
      * @return {String} the indicator of the item.
      * @example
  const item = scene.newItem("item");
  console.log(item.getId()); // item
      */
    SceneItem.prototype.getId = function () {
        return this.state.id;
    };
    /**
      * Set properties to the sceneItem at that time
      * @method Scene.SceneItem#set
      * @param {Number} time - time
      * @param {...String|Object} [properties] - property names or values
      * @return {Scene.SceneItem} An instance itself
      * @example
  item.set(0, "a", "b") // item.getFrame(0).set("a", "b")
  console.log(item.get(0, "a")); // "b"
      */
    SceneItem.prototype.set = function (time) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (isObject(time)) {
            this.load(time);
            return this;
        }
        else if (args[0]) {
            if (args[0] instanceof SceneItem) {
                var item = args[0];
                var delay = item.getDelay();
                var realTime_1 = this.getUnitTime(time) + delay;
                var _a = item.getAllTimes(!!delay || !this.hasFrame(time)), keys = _a.keys, values_1 = _a.values, frames_1 = _a.frames;
                var easing = this.getEasingName() !== item.getEasingName() ? item.getEasing() : 0;
                keys.forEach(function (t) {
                    _this.set(realTime_1 + t, frames_1[values_1[t]]);
                });
                if (easing) {
                    this.set(realTime_1 + keys[0], "easing", easing);
                    this.set(realTime_1 + keys[keys.length - 1], "easing", "initial");
                }
                return this;
            }
            else if (args.length === 1 && isArray(args[0])) {
                args[0].forEach(function (item) {
                    _this.set(time, item);
                });
                return this;
            }
        }
        var frame = this.newFrame(time);
        frame.set.apply(frame, args);
        this.updateFrame(frame);
        return this;
    };
    /**
      * Get properties of the sceneItem at that time
      * @param {Number} time - time
      * @param {...String|Object} args property's name or properties
      * @return {Number|String|Scene.PropertyObejct} property value
      * @example
  item.get(0, "a"); // item.getFrame(0).get("a");
  item.get(0, "transform", "translate"); // item.getFrame(0).get("transform", "translate");
      */
    SceneItem.prototype.get = function (time) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var frame = this.getFrame(time);
        return frame && frame.get.apply(frame, args);
    };
    /**
      * remove properties to the sceneItem at that time
      * @param {Number} time - time
      * @param {...String|Object} [properties] - property names or values
      * @return {Scene.SceneItem} An instance itself
      * @example
  item.remove(0, "a");
      */
    SceneItem.prototype.remove = function (time) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var frame = this.getFrame(time);
        frame && frame.remove.apply(frame, args);
        this.update();
        return this;
    };
    /**
      * Append the item or object at the last time.
      * @param {SceneItem | object} item - the scene item or item object
      * @return {Scene.SceneItem} An instance itself
      * @example
  item.append(new SceneItem({
      0: {
          opacity: 0,
      },
      1: {
          opacity: 1,
      }
  }));
  item.append({
      0: {
          opacity: 0,
      },
      1: {
          opacity: 1,
      }
  });
  item.set(item.getDuration(), {
      0: {
          opacity: 0,
      },
      1: {
          opacity: 1,
      }
  });
      */
    SceneItem.prototype.append = function (item) {
        this.set(this.getDuration(), item);
        return this;
    };
    /**
      * Push the front frames for the time and prepend the scene item or item object.
      * @param {SceneItem | object} item - the scene item or item object
      * @return {Scene.SceneItem} An instance itself
      */
    SceneItem.prototype.prepend = function (item) {
        if (item instanceof SceneItem) {
            var delay = item.getDelay();
            var duration = item.getIterationCount() === "infinite" ? item.getDuration() : item.getActiveDuration();
            var unshiftTime = duration + delay;
            var firstFrame = this.keyframes.get(0);
            if (firstFrame) {
                this.keyframes.remove(0);
            }
            this.keyframes.unshift(unshiftTime);
            this.set(0, item);
            this.set(unshiftTime + THRESHOLD, firstFrame);
        }
        else {
            this.prepend(new SceneItem(item));
        }
        return this;
    };
    /**
      * Specifies an element to synchronize items' keyframes.
      * @method Scene.SceneItem#setSelector
      * @param {string} selectors - Selectors to find elements in items.
      * @return {Scene.SceneItem} An instance itself
      * @example
  item.setSelector("#id.class");
      */
    SceneItem.prototype.setSelector = function (selector) {
        this.options.selector = selector === true ? this.state.id :
            (selector || "[data-scene-id=\"" + this.state.id + "\"]");
        this.setElement(document.querySelectorAll(this.options.selector));
        return this;
    };
    /**
      * Specifies an element to synchronize item's keyframes.
      * @method Scene.SceneItem#setElement
      * @param {Element|Array|string} elements - elements to synchronize item's keyframes.
      * @return {Scene.SceneItem} An instance itself
      * @example
  item.setElement(document.querySelector("#id.class"));
  item.setElement(document.querySelectorAll(".class"));
      */
    SceneItem.prototype.setElement = function (elements) {
        if (!elements) {
            return this;
        }
        this.elements = (elements instanceof Element) ? [elements] : elements;
        this.setId();
        return this;
    };
    /**
      * add css styles of items's element to the frame at that time.
      * @method Scene.SceneItem#setCSS
      * @param {Array} properties - elements to synchronize item's keyframes.
      * @return {Scene.SceneItem} An instance itself
      * @example
  item.setElement(document.querySelector("#id.class"));
  item.setCSS(0, ["opacity"]);
  item.setCSS(0, ["opacity", "width", "height"]);
      */
    SceneItem.prototype.setCSS = function (time, properties) {
        this.set(time, fromCSS(this.elements, properties));
        return this;
    };
    SceneItem.prototype.animate = function (time, parentEasing) {
        _super.prototype.setTime.call(this, time, true);
        return this._animate(parentEasing);
    };
    SceneItem.prototype.setTime = function (time, isNumber, parentEasing) {
        _super.prototype.setTime.call(this, time, isNumber);
        this._animate(parentEasing);
        return this;
    };
    /**
      * update property names used in frames.
      * @method Scene.SceneItem#update
      * @return {Scene.SceneItem} An instance itself
      * @example
  item.update();
      */
    SceneItem.prototype.update = function () {
        this.keyframes.update();
        return this;
    };
    /**
      * update property names used in frame.
      * @method Scene.SceneItem#updateFrame
      * @param {Scene.Frame} [frame] - frame of that time.
      * @return {Scene.SceneItem} An instance itself
      * @example
  item.updateFrame(time, this.get(time));
      */
    SceneItem.prototype.updateFrame = function (frame) {
        this.keyframes.updateFrame(frame);
        return this;
    };
    /**
      * Create and add a frame to the sceneItem at that time
      * @method Scene.SceneItem#newFrame
      * @param {Number} time - frame's time
      * @return {Scene.Frame} Created frame.
      * @example
  item.newFrame(time);
      */
    SceneItem.prototype.newFrame = function (time) {
        var frame = this.getFrame(time);
        if (frame) {
            return frame;
        }
        frame = new Frame();
        this.setFrame(time, frame);
        return frame;
    };
    /**
      * Add a frame to the sceneItem at that time
      * @method Scene.SceneItem#setFrame
      * @param {Number} time - frame's time
      * @return {Scene.SceneItem} An instance itself
      * @example
  item.setFrame(time, frame);
      */
    SceneItem.prototype.setFrame = function (time, frame) {
        this.keyframes.add(this.getUnitTime(time), frame);
        this.keyframes.update();
        return this;
    };
    /**
      * get sceneItem's frame at that time
      * @method Scene.SceneItem#getFrame
      * @param {Number} time - frame's time
      * @return {Scene.Frame} sceneItem's frame at that time
      * @example
  const frame = item.getFrame(time);
      */
    SceneItem.prototype.getFrame = function (time) {
        return this.keyframes.get(this.getUnitTime(time));
    };
    /**
      * check if the item has a frame at that time
      * @method Scene.SceneItem#hasFrame
      * @param {Number} time - frame's time
      * @return {Boolean} true: the item has a frame // false: not
      * @example
  if (item.hasFrame(10)) {
      // has
  } else {
      // not
  }
      */
    SceneItem.prototype.hasFrame = function (time) {
        return this.keyframes.has(this.getUnitTime(time));
    };
    /**
      * remove sceneItem's frame at that time
      * @method Scene.SceneItem#removeFrame
      * @param {Number} time - frame's time
      * @return {Scene.SceneItem} An instance itself
      * @example
  item.removeFrame(time);
      */
    SceneItem.prototype.removeFrame = function (time) {
        var keyframes = this.keyframes;
        keyframes.remove(time);
        keyframes.update();
        return this;
    };
    /**
      * Copy frame of the previous time at the next time.
      * @method Scene.SceneItem#copyFrame
      * @param {number|string|object} fromTime - the previous time
      * @param {number} toTime - the next time
      * @return {Scene.SceneItem} An instance itself
      * @example
  // getFrame(0) equal getFrame(1)
  item.copyFrame(0, 1);
      */
    SceneItem.prototype.copyFrame = function (fromTime, toTime) {
        if (isObject(fromTime)) {
            for (var time in fromTime) {
                this.copyFrame(time, fromTime[time]);
            }
            return this;
        }
        var frame = this.getFrame(fromTime);
        if (!frame) {
            return this;
        }
        var copyFrame = frame.clone();
        this.setFrame(toTime, copyFrame);
        return this;
    };
    /**
      * merge frame of the previous time at the next time.
      * @method Scene.SceneItem#mergeFrame
      * @param {number|string|object} fromTime - the previous time
      * @param {number|string} toTime - the next time
      * @return {Scene.SceneItem} An instance itself
      * @example
  // getFrame(1) contains getFrame(0)
  item.merge(0, 1);
      */
    SceneItem.prototype.mergeFrame = function (fromTime, toTime) {
        if (isObject(fromTime)) {
            for (var time in fromTime) {
                this.mergeFrame(time, fromTime[time]);
            }
            return this;
        }
        var frame = this.getFrame(fromTime);
        if (!frame) {
            return this;
        }
        var toFrame = this.newFrame(toTime);
        toFrame.merge(frame);
        return this;
    };
    /**
      * Get frame of the current time
      * @method Scene.SceneItem#getNowFrame
      * @param {Number} time - the current time
      * @param {function} easing - the speed curve of an animation
      * @return {Scene.Frame} frame of the current time
      * @example
  let item = new Scene.SceneItem({
      0: {
          display: "none",
      },
      1: {
          display: "block",
          opacity: 0,
      },
      2: {
          opacity: 1,
      }
  });
  // opacity: 0.7; display:"block";
  const frame = item.getNowFrame(1.7);
      */
    SceneItem.prototype.getNowFrame = function (time, easing) {
        var _this = this;
        var frame = new Frame();
        var names = this.keyframes.getNames();
        var _a = this._getNearTimeIndex(time), left = _a.left, right = _a.right;
        var realEasing = this._getEasing(time, left, right, this.state.easing || easing);
        names.forEach(function (properties) {
            var value = _this._getNowValue(time, left, right, properties, realEasing);
            if (isUndefined(value)) {
                return;
            }
            frame.set(properties, value);
        });
        return frame;
    };
    SceneItem.prototype.load = function (properties, options) {
        if (properties === void 0) { properties = {}; }
        if (options === void 0) { options = properties.options; }
        if (isArray(properties)) {
            var length = properties.length;
            for (var i = 0; i < length; ++i) {
                var time = length === 1 ? 0 : this.getUnitTime(i / (length - 1) * 100 + "%");
                this.set(time, properties[i]);
            }
        }
        else if (properties.keyframes) {
            this.set(properties.keyframes);
        }
        else {
            for (var time in properties) {
                if (time === "options" || time === "keyframes") {
                    continue;
                }
                var value = properties[time];
                var realTime = this.getUnitTime(time);
                if (typeof value === "number") {
                    this.mergeFrame(value, realTime);
                    continue;
                }
                this.set(realTime, value);
            }
        }
        options && this.setOptions(options);
        return this;
    };
    /**
       * clone SceneItem.
       * @method Scene.SceneItem#clone
       * @param {AnimatorOptions} [options] animator options
       * @return {Scene.SceneItem} An instance of clone
       * @example
       * item.clone();
       */
    SceneItem.prototype.clone = function (options) {
        if (options === void 0) { options = {}; }
        var item = new SceneItem();
        item.setOptions(this.state);
        item.setOptions(options);
        this.keyframes.forEach(function (frame, time) { return item.setFrame(time, frame.clone()); });
        return item;
    };
    SceneItem.prototype.setOptions = function (options) {
        if (options === void 0) { options = {}; }
        _super.prototype.setOptions.call(this, options);
        var id = options.id, selector = options.selector, duration = options.duration, elements = options.elements;
        duration && this.setDuration(duration);
        id && this.setId(id);
        if (elements) {
            this.setElement(elements);
        }
        else if (selector) {
            this.setSelector(selector === true ? this.state.id : selector);
        }
        return this;
    };
    SceneItem.prototype.getAllTimes = function (isStartZero, options) {
        if (isStartZero === void 0) { isStartZero = true; }
        if (options === void 0) { options = {}; }
        var times = this.keyframes.times.slice();
        var length = times.length;
        var keys = [];
        var values = {};
        if (!length) {
            return { keys: [], values: {}, frames: {} };
        }
        var frames = {};
        var duration = this.getDuration();
        var direction = options.direction || this.state.direction;
        var isShuffle = direction === "alternate" || direction === "alternate-reverse";
        (!this.getFrame(0)) && times.unshift(0);
        (!this.getFrame(duration)) && times.push(duration);
        length = times.length;
        var iterationCount = options.iterationCount || this.state.iterationCount;
        iterationCount = iterationCount !== "infinite" ? iterationCount : 1;
        var totalDuration = iterationCount * duration;
        for (var i = 0; i < iterationCount; ++i) {
            var isReverse = isDirectionReverse(i, direction);
            var start = i * duration;
            for (var j = 0; j < length; ++j) {
                if (isShuffle && i !== 0 && j === 0) {
                    // pass duplicate
                    continue;
                }
                // isStartZero is keytimes[0] is 0 (i === 0 & j === 0)
                var threshold = j === 0 && (i === 0 ? !isStartZero : !isShuffle) ? THRESHOLD : 0;
                var keyvalue = toFixed(isReverse ? times[length - 1 - j] : times[j]);
                var time = toFixed(isReverse ? duration - keyvalue : keyvalue);
                var keytime = toFixed(start + time + threshold);
                if (totalDuration < keytime) {
                    break;
                }
                keys.push(keytime);
                values[keytime] = keyvalue;
                if (!frames[keyvalue]) {
                    var frame = this.getFrame(keyvalue);
                    if (!frame) {
                        frames[keyvalue] = this.getNowFrame(keyvalue);
                        continue;
                    }
                    if (j === 0 || j === length - 1 || frame.has("transform") || frame.has("filter")) {
                        frames[keyvalue] = this.getNowFrame(keyvalue);
                    }
                    else {
                        frames[keyvalue] = frame;
                    }
                }
            }
        }
        if (keys[keys.length - 1] < totalDuration) {
            // last time === totalDuration
            var isReverse = isDirectionReverse(iterationCount, direction);
            var keyvalue = toFixed(duration * (isReverse ? 1 - iterationCount % 1 : iterationCount % 1));
            keys.push(totalDuration);
            values[totalDuration] = keyvalue;
            !frames[keyvalue] && (frames[keyvalue] = this.getNowFrame(keyvalue));
        }
        return { keys: keys, values: values, frames: frames };
    };
    /**
      * Specifies an css text that coverted the keyframes of the item.
      * @param {Array} [duration=this.getDuration()] - elements to synchronize item's keyframes.
      * @param {Array} [options={}] - parent options to unify options of items.
      * @example
  item.setCSS(0, ["opacity"]);
  item.setCSS(0, ["opacity", "width", "height"]);
      */
    SceneItem.prototype.toCSS = function (duration, options) {
        if (duration === void 0) { duration = this.getDuration(); }
        if (options === void 0) { options = {}; }
        var state = this.state;
        var selector = state.selector || this.options.selector;
        if (!selector) {
            return "";
        }
        var id = this._getId();
        var isZeroDuration = duration === 0;
        var playSpeed = (options.playSpeed || 1);
        var delay = ((typeof options.delay === "undefined" ? state.delay : options.delay) || 0) / playSpeed;
        var easingName = (!isZeroDuration && options.easing && options.easingName) || state.easingName;
        var count = (!isZeroDuration && options.iterationCount) || state.iterationCount;
        var fillMode = (options.fillMode !== "forwards" && options.fillMode) || state.fillMode;
        var direction = (options.direction !== "normal" && options.direction) || state.direction;
        var cssText = makeAnimationProperties({
            fillMode: fillMode,
            direction: direction,
            delay: delay + "s",
            name: PREFIX + "KEYFRAMES_" + toId(id),
            duration: duration / playSpeed + "s",
            timingFunction: easingName,
            iterationCount: count
        });
        var css = selector + "." + START_ANIMATION + " {\n\t\t\t" + cssText + "\n\t\t}\n\t\t" + this._toKeyframes(duration, options);
        return css;
    };
    SceneItem.prototype.exportCSS = function (duration, options) {
        if (duration === void 0) { duration = this.getDuration(); }
        if (options === void 0) { options = {}; }
        if (!this.elements.length) {
            return;
        }
        var id = this._getId();
        var styleElement = document.querySelector("#" + PREFIX + id);
        var css = this.toCSS(duration, options);
        if (styleElement) {
            styleElement.innerText = css;
        }
        else {
            document.body.insertAdjacentHTML("beforeend", "<style id=\"" + PREFIX + "STYLE_" + id + "\">" + css + "</style>");
        }
    };
    /**
      * Play using the css animation and keyframes.
      * @param {boolean} [exportCSS=true] Check if you want to export css.
      * @param {Object} [properties={}] The shorthand properties for six of the animation properties.
      * @param {Object} [properties.duration] The duration property defines how long an animation should take to complete one cycle.
      * @param {Object} [properties.fillMode] The fillMode property specifies a style for the element when the animation is not playing (before it starts, after it ends, or both).
      * @param {Object} [properties.iterationCount] The iterationCount property specifies the number of times an animation should be played.
      * @param {String} [properties.easing] The easing(timing-function) specifies the speed curve of an animation.
      * @param {Object} [properties.delay] The delay property specifies a delay for the start of an animation.
      * @param {Object} [properties.direction] The direction property defines whether an animation should be played forwards, backwards or in alternate cycles.
      * @see {@link https://www.w3schools.com/cssref/css3_pr_animation.asp}
      * @example
  item.playCSS();
  item.playCSS(false, {
      direction: "reverse",
      fillMode: "forwards",
  });
      */
    SceneItem.prototype.playCSS = function (exportCSS, properties) {
        var _this = this;
        if (exportCSS === void 0) { exportCSS = true; }
        if (properties === void 0) { properties = {}; }
        if (!ANIMATION || this.getPlayState() === "running") {
            return this;
        }
        var elements = this.elements;
        var length = elements.length;
        if (!length) {
            return this;
        }
        if (this.isEnded()) {
            this.setTime(0);
        }
        exportCSS && this.exportCSS();
        var cssText = makeAnimationProperties(properties);
        for (var i = 0; i < length; ++i) {
            var element = elements[i];
            element.style.cssText += cssText;
            if (hasClass(element, START_ANIMATION)) {
                removeClass(element, START_ANIMATION);
                (function (el) {
                    requestAnimationFrame(function () {
                        requestAnimationFrame(function () {
                            addClass(el, START_ANIMATION);
                        });
                    });
                })(element);
            }
            else {
                addClass(element, START_ANIMATION);
            }
        }
        this.setState({ playCSS: true });
        this.setPlayState("running");
        this.trigger("play");
        var duration = this.getDuration();
        var animatedElement = elements[0];
        var animationend = function () {
            _this.end();
            if (!animatedElement) {
                return;
            }
            animatedElement.removeEventListener("animationend", animationend);
            animatedElement.removeEventListener("animationiteration", animationiteration);
        };
        var animationiteration = function (_a) {
            var elapsedTime = _a.elapsedTime;
            var currentTime = elapsedTime;
            var iterationCount = currentTime / duration;
            _this.state.currentTime = currentTime;
            _this.setCurrentIterationCount(iterationCount);
        };
        animatedElement.addEventListener("animationend", animationend);
        animatedElement.addEventListener("animationiteration", animationiteration);
        return this;
    };
    SceneItem.prototype._getId = function () {
        return this.state.id || this.setId().getId();
    };
    SceneItem.prototype._getEasing = function (time, left, right, easing) {
        if (this.keyframes.hasName(timingFunction)) {
            var nowEasing = this._getNowValue(time, left, right, [timingFunction], 0, true);
            return typeof nowEasing === "function" ? nowEasing : easing;
        }
        return easing;
    };
    SceneItem.prototype._toKeyframes = function (duration, options) {
        if (duration === void 0) { duration = this.getDuration(); }
        if (options === void 0) { options = {}; }
        var id = this._getId();
        var state = this.state;
        var playSpeed = state.playSpeed;
        var isParent = typeof options.iterationCount !== "undefined";
        var iterationCount = state.iterationCount;
        var delay = isParent ? state.delay : 0;
        var direction = isParent ? state.direction : "normal";
        var _a = this.getAllTimes(true, {
            duration: duration,
            delay: delay,
            direction: direction,
            iterationCount: isParent && iterationCount !== "infinite" ? iterationCount : 1,
            isCSS: true
        }), keys = _a.keys, values = _a.values, frames = _a.frames;
        var length = keys.length;
        var css = {};
        var keyframes = [];
        for (var time in frames) {
            css[time] = frames[time].toCSS();
        }
        if (!keys.length) {
            return "";
        }
        if (delay) {
            keyframes.push("0%{" + frames[0] + "}");
            if (direction === "reverse" || direction === "alternate-reverse") {
                keyframes.push(delay / playSpeed / duration * 100 - 0.00001 + "%{" + css[0] + "}");
            }
        }
        keys.forEach(function (time) {
            keyframes.push((delay + time) / playSpeed / duration * 100 + "%{" + css[values[time]] + "}");
        });
        var lastTime = keys[length - 1];
        if ((delay + lastTime) / playSpeed < duration) {
            // not 100%
            keyframes.push("100%{" + css[values[lastTime]]);
        }
        return "@" + KEYFRAMES + " " + PREFIX + "KEYFRAMES_" + toId(id) + "{\n\t\t\t" + keyframes.join("\n") + "\n\t\t}";
    };
    SceneItem.prototype._getNowValue = function (time, left, right, properties, easing, usePrevValue) {
        if (easing === void 0) { easing = this.state.easing; }
        if (usePrevValue === void 0) { usePrevValue = isFixed(properties); }
        var keyframes = this.keyframes;
        var times = keyframes.times;
        var length = times.length;
        var prevTime;
        var nextTime;
        var prevFrame;
        var nextFrame;
        for (var i = left; i >= 0; --i) {
            var frame = keyframes.get(times[i]);
            if (frame.has.apply(frame, properties)) {
                prevTime = times[i];
                prevFrame = frame;
                break;
            }
        }
        var prevValue = prevFrame && prevFrame.raw.apply(prevFrame, properties);
        if (usePrevValue) {
            return prevValue;
        }
        for (var i = right; i < length; ++i) {
            var frame = keyframes.get(times[i]);
            if (frame.has.apply(frame, properties)) {
                nextTime = times[i];
                nextFrame = frame;
                break;
            }
        }
        var nextValue = nextFrame && nextFrame.raw.apply(nextFrame, properties);
        if (!prevFrame || isUndefined(prevValue)) {
            return nextValue;
        }
        if (!nextFrame || isUndefined(nextValue) || prevValue === nextValue) {
            return prevValue;
        }
        if (prevTime < 0) {
            prevTime = 0;
        }
        return dotValue(time, prevTime, nextTime, prevValue, nextValue, easing);
    };
    SceneItem.prototype._getNearTimeIndex = function (time) {
        var keyframes = this.keyframes;
        var times = keyframes.times;
        var length = times.length;
        for (var i = 0; i < length; ++i) {
            if (times[i] === time) {
                return { left: i, right: i };
            }
            else if (times[i] > time) {
                return { left: i === 0 ? 0 : i - 1, right: i };
            }
        }
        return { left: length - 1, right: length - 1 };
    };
    SceneItem.prototype._animate = function (parentEasing) {
        var iterationTime = this.getIterationTime();
        var easing = this.getEasing() || parentEasing;
        var frame = this.getNowFrame(iterationTime, easing);
        var currentTime = this.getTime();
        /**
             * This event is fired when timeupdate and animate.
             * @event Scene.SceneItem#animate
             * @param {Number} param.currentTime The total time that the animator is running.
             * @param {Number} param.time The iteration time during duration that the animator is running.
             * @param {Scene.Frame} param.frame frame of that time.
             */
        this.trigger("animate", {
            frame: frame,
            currentTime: currentTime,
            time: iterationTime
        });
        var elements = this.elements;
        var length = elements.length;
        if (!length) {
            return frame;
        }
        var attributes = frame.get("attribute");
        if (attributes) {
            for (var name in attributes) {
                for (var i = 0; i < length; ++i) {
                    elements[i].setAttribute(name, attributes[name]);
                }
            }
        }
        var cssText = frame.toCSS();
        if (this.state.cssText !== cssText) {
            this.state.cssText = cssText;
            for (var i = 0; i < length; ++i) {
                elements[i].style.cssText += cssText;
            }
            return frame;
        }
    };
    return SceneItem;
}(Animator));

/**
* manage sceneItems and play Scene.
* @extends Scene.Animator
*/
var Scene = /*#__PURE__*/ (function (_super) {
    __extends(Scene, _super);
    /**
      * @param {Object} [properties] - properties
      * @param {AnimatorOptions} [options] - options
      * @example
      const scene = new Scene({
          item1: {
              0: {
                  display: "none",
              },
              1: {
                  display: "block",
                  opacity: 0,
              },
              2: {
                  opacity: 1,
              },
          },
          item2: {
              2: {
                  opacity: 1,
              },
          }
      });
       */
    function Scene(properties, options) {
        var _this = _super.call(this) || this;
        _this.items = {};
        _this.load(properties, options);
        return _this;
    }
    Scene.prototype.setId = function (id) {
        if (id === void 0) { id = "scene" + Math.floor(Math.random() * 100000); }
        this.state.id = id;
        return this;
    };
    Scene.prototype.getId = function () {
        return this.state.id;
    };
    Scene.prototype.getDuration = function () {
        var items = this.items;
        var time = 0;
        for (var id in items) {
            var item = items[id];
            time = Math.max(time, item.getTotalDuration() / item.getPlaySpeed());
        }
        return time;
    };
    Scene.prototype.setDuration = function (duration) {
        var items = this.items;
        var sceneDuration = this.getDuration();
        if (duration === 0 || !isFinite(sceneDuration)) {
            return this;
        }
        if (sceneDuration === 0) {
            for (var id in items) {
                var item = items[id];
                item.setDuration(duration);
            }
        }
        else {
            var ratio = duration / sceneDuration;
            for (var id in items) {
                var item = items[id];
                item.setDelay(item.getDelay() * ratio);
                item.setDuration(item.getDuration() * ratio);
            }
        }
        return this;
    };
    /**
      * get item in scene by name
      * @method Scene#getItem
      * @param {string} name - item's name
      * @return {Scene.SceneItem} item
      * @example
  const item = scene.getItem("item1")
      */
    Scene.prototype.getItem = function (name) {
        return this.items[name];
    };
    /**
      * create item in scene
      * @method Scene#newItem
      * @param {String} name - name of item to create
      * @param {StateOptions} options - The option object of SceneItem
      * @return {Sceme.SceneItem} Newly created item
      * @example
  const item = scene.newItem("item1")
      */
    Scene.prototype.newItem = function (name, options) {
        if (options === void 0) { options = {}; }
        if (has(this.items, name)) {
            return this.items[name];
        }
        var item = new SceneItem();
        this.setItem(name, item);
        item.setOptions(options);
        return item;
    };
    /**
      * add a sceneItem to the scene
      * @param {String} name - name of item to create
      * @param {Scene.SceneItem} item - sceneItem
      * @example
  const item = scene.newItem("item1")
      */
    Scene.prototype.setItem = function (name, item) {
        if (item instanceof Animator) {
            item.setId(name);
        }
        this.items[name] = item;
        return this;
    };
    Scene.prototype.animate = function (time, parentEasing) {
        _super.prototype.setTime.call(this, time, true);
        return this._animate(parentEasing);
    };
    Scene.prototype.setTime = function (time, isNumber, parentEasing) {
        _super.prototype.setTime.call(this, time, isNumber);
        this._animate(parentEasing);
        return this;
    };
    /**
       * executes a provided function once for each scene item.
       * @param {Function} func Function to execute for each element, taking three arguments
       * @param {Scene | Scene.SceneItem} [func.item] The value of the item being processed in the scene.
       * @param {string} [func.name] The name of the item being processed in the scene.
       * @param {object} [func.items] The object that forEach() is being applied to.
       * @return {Scene} An instance itself
       */
    Scene.prototype.forEach = function (func) {
        var items = this.items;
        for (var name in items) {
            func(items[name], name, items);
        }
        return this;
    };
    /**
       * Export the CSS of the items to the style.
       * @return {Scene} An instance itself
       */
    Scene.prototype.exportCSS = function (duration, state) {
        if (duration === void 0) { duration = this.getDuration(); }
        var items = this.items;
        var totalDuration = duration;
        if (!totalDuration || !isFinite(totalDuration)) {
            totalDuration = 0;
        }
        for (var id in items) {
            var item = items[id];
            item.exportCSS(totalDuration, this.state);
        }
        return this;
    };
    Scene.prototype.append = function (item) {
        item.setDelay(item.getDelay() + this.getDuration());
        this.setItem(item.getId() || item.setId().getId(), item);
    };
    /**
      * Play using the css animation and keyframes.
      * @param {boolean} [exportCSS=true] Check if you want to export css.
      * @param {Object} [properties={}] The shorthand properties for six of the animation properties.
      * @param {Object} [properties.duration] The duration property defines how long an animation should take to complete one cycle.
      * @param {Object} [properties.fillMode] The fillMode property specifies a style for the element when the animation is not playing (before it starts, after it ends, or both).
      * @param {Object} [properties.iterationCount] The iterationCount property specifies the number of times an animation should be played.
      * @param {String} [properties.easing] The easing(timing-function) specifies the speed curve of an animation.
      * @param {Object} [properties.delay] The delay property specifies a delay for the start of an animation.
      * @param {Object} [properties.direction] The direction property defines whether an animation should be played forwards, backwards or in alternate cycles.
      * @return {Scene} An instance itself
      * @see {@link https://www.w3schools.com/cssref/css3_pr_animation.asp}
      * @example
  scene.playCSS();
  scene.playCSS(false, {
      direction: "reverse",
      fillMode: "forwards",
  });
      */
    Scene.prototype.playCSS = function (exportCSS, properties) {
        var _this = this;
        if (exportCSS === void 0) { exportCSS = true; }
        if (properties === void 0) { properties = {}; }
        if (!ANIMATION || this.getPlayState() === "running") {
            return this;
        }
        exportCSS && this.exportCSS();
        var items = this.items;
        var animationItem;
        for (var id in items) {
            var item = items[id];
            item.playCSS(false, properties);
            if (item.getState("playCSS")) {
                animationItem = item;
            }
        }
        if (!animationItem) {
            return this;
        }
        var animationiteration = function (_a) {
            var currentTime = _a.currentTime, iterationCount = _a.iterationCount;
            _this.state.currentTime = currentTime;
            _this.setCurrentIterationCount(iterationCount);
        };
        var animationend = function () {
            _this.end();
            _this.setState({ playCSS: false });
            animationItem.off("ended", animationend);
            animationItem.off("iteration", animationiteration);
        };
        animationItem.on("ended", animationend);
        animationItem.on("iteration", animationiteration);
        this.setState({ playCSS: true });
        this.setPlayState("running");
        this.trigger("play");
        return this;
    };
    Scene.prototype.load = function (properties, options) {
        if (properties === void 0) { properties = {}; }
        if (options === void 0) { options = properties.options; }
        if (!properties) {
            return this;
        }
        var isSelector = options && options.selector;
        for (var name in properties) {
            if (name === "options") {
                continue;
            }
            var object = properties[name];
            var item = void 0;
            if (object instanceof Scene || object instanceof SceneItem) {
                this.setItem(name, object);
                item = object;
            }
            else {
                item = this.newItem(name);
                item.load(object);
            }
            isSelector && item.setSelector(name);
        }
        this.setOptions(options);
    };
    Scene.prototype.setSelector = function (_) {
        var isSelector = this.options.selector;
        this.forEach(function (item, name) {
            item.setSelector(isSelector ? name : false);
        });
    };
    Scene.prototype._animate = function (parentEasing) {
        var iterationTime = this.getIterationTime();
        var items = this.items;
        var easing = this.getEasing() || parentEasing;
        var frames = {};
        for (var id in items) {
            var item = items[id];
            frames[id] = item.animate(Math.max(iterationTime * item.getPlaySpeed() - item.getDelay(), 0), easing);
        }
        /**
             * This event is fired when timeupdate and animate.
             * @param {Number} param.currentTime The total time that the animator is running.
             * @param {Number} param.time The iteration time during duration that the animator is running.
             * @param {Frame} param.frames frame of that time.
             */
        this.trigger("animate", {
            currentTime: this.getTime(),
            time: iterationTime,
            frames: frames
        });
        return frames;
    };
    return Scene;
}(Animator));

/**
 * @namespace presets
 */
/**
 * Use the property to create an effect.
 * @memberof presets
 * @func set
 * @param {string | string[]} property - property to set effect
 * @param {any[]} values - values of 100%
 * @param {AnimatorOptions} [options]
 * @example
// import {set, blink} from "scenejs";
// set("opacity", [0, 1, 0], {duration: 2});
Scene.set("opacity", [0, 1, 0], {duration: 2});

// Same
Scene.blink({duration: 2});

// Same
new SceneItem({
    "0%": {
        opacity: 0,
    },
    "50%": {
        opacity: 1,
    }
    "100%": {
        opacity: 0,
    }
}, {
    duration: 2,
});
 */
function set(property, values, options) {
    var item = new SceneItem({}, options);
    var length = values.length;
    for (var i = 0; i < length; ++i) {
        item.set(i / (length - 1) * 100 + "%", property, values[i]);
    }
    return item;
}
/**
 * Make a zoom in effect.
 * @memberof presets
 * @func zoomIn
 * @param {AnimatorOptions} options
 * @param {number} [options.from = 0] start zoom
 * @param {number}[options.to = 1] end zoom
 * @param {number} options.duration animation's duration
 * @example
// import {set, zoomIn} from "scenejs";
// zoomIn({duration: 2});
Scene.zoomIn({duration: 2});
// Same
new SceneItem({
    "0%": {
        "transform": "scale(0)",
    },
    "100%": {
        "transform": "scale(1)",
    }
}, {
    duration: 2,
});
 */
function zoomIn(_a) {
    var _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.to, to = _c === void 0 ? 1 : _c;
    return set(["transform", "scale"], [from, to], arguments[0]);
}
/**
 * Make a zoom out effect.
 * @memberof presets
 * @func zoomOut
 * @param {AnimatorOptions} options
 * @param {number} [options.from = 1] start zoom
 * @param {number}[options.to = 0] end zoom
 * @param {number} options.duration animation's duration
 * @example
// import {zoomOut} from "scenejs";
// zoomOut({duration: 2});
Scene.zoomOut({duration: 2});
// Same
new SceneItem({
    "0%": {
        "transform": "scale(1)",
    },
    "100%": {
        "transform": "scale(0)",
    }
}, {
    duration: 2,
});
 */
function zoomOut(_a) {
    var _b = _a.from, from = _b === void 0 ? 1 : _b, _c = _a.to, to = _c === void 0 ? 0 : _c;
    return set(["transform", "scale"], [from, to], arguments[0]);
}
/**
 * Make a wipe in effect.
 * @memberof presets
 * @func wipeIn
 * @param {AnimatorOptions} options
 * @param {string|string[]} [options.property = "left"] position property
 * @param {number|string} [options.from = "-100%"] start position
 * @param {number|string}[options.to = "0%"] end position
 * @param {number} options.duration animation's duration
 * @example
// import {wipeIn} from "scenejs";
// wipeIn({property: "left", duration: 2});
Scene.wipeIn({property: "left", duration: 2});
// Same
new SceneItem({
    "0%": {
        "left": "-100%",
    },
    "100%": {
        "left": "0%",
    }
}, {
    duration: 2,
});
 */
function wipeIn(_a) {
    var _b = _a.from, from = _b === void 0 ? "-100%" : _b, _c = _a.to, to = _c === void 0 ? "0%" : _c, _d = _a.property, property = _d === void 0 ? "left" : _d;
    return set(property, [from, to], arguments[0]);
}
/**
 * Make a wipe out effect.
 * @memberof presets
 * @func wipeOut
 * @param {AnimatorOptions} options
 * @param {string|string[]} [options.property = "left"] position property
 * @param {number|string} [options.from = "0%"] start position
 * @param {number|string}[options.to = "100%"] end position
 * @param {number} options.duration animation's duration
 * @example
// import {wipeOut} from "scenejs";
// wipeOut({property: "left", duration: 2});
Scene.wipeOut({property: "left", duration: 2});
// Same
new SceneItem({
    "0%": {
        "left": "0%",
    },
    "100%": {
        "left": "100%",
    }
}, {
    duration: 2,
});
 */
function wipeOut(_a) {
    var _b = _a.from, from = _b === void 0 ? "0%" : _b, _c = _a.to, to = _c === void 0 ? "100%" : _c, _d = _a.property, property = _d === void 0 ? "left" : _d;
    return set(property, [from, to], arguments[0]);
}
/**
 * Use the property to create an effect.
 * @memberof presets
 * @func transition
 * @param {Scene.SceneItem} item1 - Item that end effect
 * @param {Scene.SceneItem} item2 - Item that start effect
 * @param {AnimatorOptions} options
 * @param {object} options.from The starting properties of item1 and end properties of item2
 * @param {object} options.to The starting properties of item2 and end properties of item1
 * @param {number} options.duration animation's duration
 * @param {number} [options.time] start time of item1 <br/> <strong>default: item1.getDuration() - duration</strong>
 * @example
// import {transition} from "scenejs";
transition(item1, item2, {
    from: {
        opacity: 1,
    },
    to: {
        opacity: 0,
    },
    duration: 0.1,
});

// Same
item1.set({
    [item1.getDuration() - 0.1]: {
        opacity: 1,
    },
    [item1.getDuration()]: {
        opacity: 0,
    }
});
item2.set({
    0: {
        opacity: 0,
    },
    0.1: {
        opacity: 1,
    }
});
 */
function transition(item1, item2, _a) {
    var from = _a.from, to = _a.to, _b = _a.duration, duration = _b === void 0 ? item1.getDuration() : _b, _c = _a.time, time = _c === void 0 ? Math.max(item1.getDuration() - duration, 0) : _c;
    var _d, _e;
    item1.set((_d = {},
        _d[time] = from,
        _d[time + duration] = to,
        _d));
    item2.set((_e = {
            0: to
        },
        _e[duration] = from,
        _e));
}
/**
 * Make a fade in effect.
 * @memberof presets
 * @func fadeIn
 * @param {AnimatorOptions} options
 * @param {number} [options.from = 0] start opacity
 * @param {number}[options.to = 1] end opacity
 * @param {number} options.duration animation's duration
 * @example
// import {fadeIn} from "scenejs";
// fadeIn({duration: 2});
Scene.fadeIn({duration: 2});
// Same
new SceneItem({
    "0%": {
        opacity: 0,
    },
    "100%": {
        opacity: 1,
    }
}, {
    duration: 2,
});
 */
function fadeIn(_a) {
    var _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.to, to = _c === void 0 ? 1 : _c;
    return set("opacity", [from, to], arguments[0]);
}
/**
 * Make a fade out effect.
 * @memberof presets
 * @func fadeOut
 * @param {AnimatorOptions} options
 * @param {number} [options.from = 1] start opacity
 * @param {number}[options.to = 0] end opacity
 * @param {number} options.duration animation's duration
 * @example
// import {fadeOut} from "scenejs";
// fadeOut({duration: 2});
Scene.fadeOut({duration: 2});
// Same
new SceneItem({
    "0%": {
        opacity: 1,
    },
    "100%": {
        opacity: 0,
    }
}, {
    duration: 2,
});
 */
function fadeOut(_a) {
    var _b = _a.from, from = _b === void 0 ? 1 : _b, _c = _a.to, to = _c === void 0 ? 0 : _c;
    return set("opacity", [from, to], arguments[0]);
}
/**
 * Make a blinking effect.
 * @memberof presets
 * @func blink
 * @param {AnimatorOptions} options
 * @param {number} [options.from = 0] start opacity
 * @param {number}[options.to = 1] end opacity
 * @param {number} options.duration animation's duration
 * @example
// import {blink} from "scenejs";
// blink({duration: 2});
Scene.blink({duration: 2});
// Same
new SceneItem({
    "0%": {
        opacity: 0,
    },
    "50%": {
        opacity: 1,
    },
    "100%": {
        opacity: 0,
    }
}, {
    duration: 2,
});
 */
function blink(_a) {
    var _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.to, to = _c === void 0 ? 1 : _c;
    return set("opacity", [from, to, from], arguments[0]);
}

/**
* version info
* @name Scene.VERSION
* @memberof Scene
* @static
* @type {string}
* @example
* Scene.VERSION // 1.0.0-beta8
*/
var VERSION = "1.0.0-beta8";

/* harmony default export */ __webpack_exports__["default"] = (Scene);



/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var react_scenejs_1 = __webpack_require__(/*! ./react-scenejs */ "./src/react-scenejs/index.ts");
__webpack_require__(/*! ./raindrop.css */ "./src/raindrop.css");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            time: 0,
        };
        return _this;
    }
    App.prototype.render = function () {
        var _this = this;
        var time = this.state.time;
        var keyframes = {
            0: { 'border-width': '150px', 'opacity': 1, 'transform': 'scale(0)' },
            1: { 'border-width': '0px', 'opacity': 0.3, 'transform': 'scale(0.7)' }
        };
        return React.createElement("div", { className: 'wrapper' },
            React.createElement(react_scenejs_1.Scene, { easing: react_scenejs_1.EASE_IN_OUT, keyframes: {
                    raindrop1: { keyframes: keyframes, options: { delay: 0 } },
                    raindrop2: { keyframes: keyframes, options: { delay: 0.4 } },
                    raindrop3: { keyframes: keyframes, options: { delay: 0.8 } },
                }, iterationCount: 'infinite', css: true, autoplay: true },
                React.createElement("div", { className: 'container' },
                    React.createElement("div", { className: 'raindrop', "data-scene-id": 'raindrop1' }),
                    React.createElement("div", { className: 'raindrop', "data-scene-id": 'raindrop2' }),
                    React.createElement("div", { className: 'raindrop', "data-scene-id": 'raindrop3' }))),
            React.createElement("br", null),
            React.createElement("input", { type: 'range', value: time, onInput: function (e) {
                    _this.setState({ time: e.target.value });
                } }),
            React.createElement("br", null),
            React.createElement(react_scenejs_1.Scene, { easing: react_scenejs_1.EASE_IN_OUT, time: time + "%", keyframes: {
                    raindrop1: { keyframes: keyframes, options: { delay: 0 } },
                    raindrop2: { keyframes: keyframes, options: { delay: 0.4 } },
                    raindrop3: { keyframes: keyframes, options: { delay: 0.8 } },
                } },
                React.createElement("div", { className: 'container' },
                    React.createElement("div", { className: 'raindrop', "data-scene-id": 'raindrop1' }),
                    React.createElement("div", { className: 'raindrop', "data-scene-id": 'raindrop2' }),
                    React.createElement("div", { className: 'raindrop', "data-scene-id": 'raindrop3' }))),
            React.createElement("div", { className: 'container' },
                React.createElement(react_scenejs_1.SceneItem, { time: time + "%", duration: 1, from: { 'border-width': '150px', 'opacity': 1, 'transform': 'scale(0)' }, to: { 'border-width': '0px', 'opacity': 0, 'transform': 'scale(1)' }, iterationCount: 'infinite' },
                    React.createElement("div", { className: 'raindrop' }))));
    };
    return App;
}(React.Component));
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));


/***/ }),

/***/ "./src/raindrop.css":
/*!**************************!*\
  !*** ./src/raindrop.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./raindrop.css */ "./node_modules/css-loader/index.js!./src/raindrop.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/react-scenejs/Scene.tsx":
/*!*************************************!*\
  !*** ./src/react-scenejs/Scene.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var scenejs_1 = __webpack_require__(/*! scenejs */ "./node_modules/scenejs/dist/scene.esm.js");
var react_dom_1 = __webpack_require__(/*! react-dom */ "react-dom");
var SceneInterface_1 = __webpack_require__(/*! ./SceneInterface */ "./src/react-scenejs/SceneInterface.tsx");
var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    function Scene(props) {
        var _this = _super.call(this, props) || this;
        _this.item = new scenejs_1.default({}, {});
        return _this;
    }
    Scene.prototype.render = function () {
        return this.props.children;
    };
    Scene.prototype.componentDidMount = function () {
        var element = react_dom_1.findDOMNode(this);
        if (this.props.keyframes) {
            var keyframes = this.props.keyframes;
            this.item.load(this.props.keyframes);
        }
        this.item.forEach(function (item) {
            var id = item.getId();
            item.setElement(element.querySelector("[data-scene-id=\"" + id + "\"]"));
            item.setId(id);
        });
        this.init();
    };
    return Scene;
}(SceneInterface_1.SceneInterface));
exports.Scene = Scene;


/***/ }),

/***/ "./src/react-scenejs/SceneInterface.tsx":
/*!**********************************************!*\
  !*** ./src/react-scenejs/SceneInterface.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var scenejs_1 = __webpack_require__(/*! scenejs */ "./node_modules/scenejs/dist/scene.esm.js");
var SceneInterface = /** @class */ (function (_super) {
    __extends(SceneInterface, _super);
    function SceneInterface() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.events = {
            play: function (e) { return _this.props.onPlay(e); },
            paused: function (e) { return _this.props.onPaused(e); },
            ended: function (e) { return _this.props.onEnded(e); },
            timeupdate: function (e) { return _this.props.onTimeUpdate(e); },
            iteration: function (e) { return _this.props.onIteration(e); },
            animate: function (e) { return _this.props.onAnimate(e); },
        };
        return _this;
    }
    SceneInterface.prototype.render = function () {
        return this.props.children;
    };
    SceneInterface.prototype.componentDidUpdate = function () {
        if (this.props.time !== -1 && (this.props.autoplay === false || this.item.getPlayState() === 'paused')) {
            this.item.setTime(this.props.time);
        }
    };
    SceneInterface.prototype.componentWillUnmount = function () {
        this.item.off();
    };
    SceneInterface.prototype.setTime = function (time) {
        this.item.setTime(time);
    };
    SceneInterface.prototype.getTime = function () {
        return this.item.getTime();
    };
    SceneInterface.prototype.play = function () {
        this.props.css !== false ? this.item.playCSS() : this.item.play();
    };
    SceneInterface.prototype.pause = function () {
        this.item.pause();
    };
    SceneInterface.prototype.getItem = function () {
        return this.item;
    };
    SceneInterface.prototype.getDuration = function () {
        return this.item.getDuration();
    };
    SceneInterface.prototype.init = function () {
        var _this = this;
        var item = this.item;
        var events = this.events;
        var sceneOptions = {};
        scenejs_1.OPTIONS.forEach(function (name) {
            sceneOptions[name] = _this.props[name];
        });
        item.setOptions(sceneOptions);
        scenejs_1.EVENTS.forEach(function (name) {
            _this.item.on(name, events[name]);
        });
        if (this.props.autoplay !== false) {
            this.play();
        }
        else if (this.props.time !== -1) {
            this.setTime(this.props.time);
        }
    };
    SceneInterface.defaultProps = {
        duration: 0,
        fillMode: 'forwards',
        direction: 'normal',
        playSpeed: 1,
        iterationCount: 1,
        delay: 0,
        easing: 0,
        time: -1,
        css: false,
        autoplay: false,
        onPlay: function () { return undefined; },
        onPaused: function () { return undefined; },
        onEnded: function () { return undefined; },
        onTimeUpdate: function () { return undefined; },
        onIteration: function () { return undefined; },
        onAnimate: function () { return undefined; },
    };
    return SceneInterface;
}(react_1.Component));
exports.SceneInterface = SceneInterface;


/***/ }),

/***/ "./src/react-scenejs/SceneItem.tsx":
/*!*****************************************!*\
  !*** ./src/react-scenejs/SceneItem.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var scenejs_1 = __webpack_require__(/*! scenejs */ "./node_modules/scenejs/dist/scene.esm.js");
var react_dom_1 = __webpack_require__(/*! react-dom */ "react-dom");
var SceneInterface_1 = __webpack_require__(/*! ./SceneInterface */ "./src/react-scenejs/SceneInterface.tsx");
var SceneItem = /** @class */ (function (_super) {
    __extends(SceneItem, _super);
    function SceneItem(props) {
        var _this = _super.call(this, props) || this;
        _this.item = new scenejs_1.SceneItem();
        return _this;
    }
    SceneItem.prototype.render = function () {
        return this.props.children;
    };
    SceneItem.prototype.componentDidMount = function () {
        this.item.setElement(react_dom_1.findDOMNode(this));
        if (this.props.keyframes) {
            this.item.set(this.props.keyframes);
        }
        else {
            this.item.set('0%', this.props.from);
            this.item.set('100%', this.props.to);
        }
        this.init();
    };
    return SceneItem;
}(SceneInterface_1.SceneInterface));
exports.SceneItem = SceneItem;


/***/ }),

/***/ "./src/react-scenejs/index.ts":
/*!************************************!*\
  !*** ./src/react-scenejs/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var scenejs_1 = __webpack_require__(/*! scenejs */ "./node_modules/scenejs/dist/scene.esm.js");
exports.EASE = scenejs_1.EASE;
exports.EASE_IN = scenejs_1.EASE_IN;
exports.EASE_IN_OUT = scenejs_1.EASE_IN_OUT;
exports.bezier = scenejs_1.bezier;
exports.steps = scenejs_1.steps;
exports.STEP_START = scenejs_1.STEP_START;
exports.STEP_END = scenejs_1.STEP_END;
var SceneItem_1 = __webpack_require__(/*! ./SceneItem */ "./src/react-scenejs/SceneItem.tsx");
exports.SceneItem = SceneItem_1.SceneItem;
var Scene_1 = __webpack_require__(/*! ./Scene */ "./src/react-scenejs/Scene.tsx");
exports.Scene = Scene_1.Scene;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map