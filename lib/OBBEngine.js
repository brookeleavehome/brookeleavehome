(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["OBBEngine"] = factory();
	else
		root["OBBEngine"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 135);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var core = __webpack_require__(18);
var hide = __webpack_require__(11);
var redefine = __webpack_require__(12);
var ctx = __webpack_require__(19);
var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
// eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = __webpack_require__(51)('wks');
var uid = __webpack_require__(33);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Thank's IE8 for his funny defineProperty


module.exports = !__webpack_require__(3)(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(1);
var IE8_DOM_DEFINE = __webpack_require__(97);
var toPrimitive = __webpack_require__(22);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 7.1.15 ToLength


var toInteger = __webpack_require__(24);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 7.1.13 ToObject(argument)


var defined = __webpack_require__(23);
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(7);
var createDesc = __webpack_require__(32);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var hide = __webpack_require__(11);
var has = __webpack_require__(14);
var SRC = __webpack_require__(33)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(18).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var fails = __webpack_require__(3);
var defined = __webpack_require__(23);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function createHTML(string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwnProperty = ({}).hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// to indexed object, toObject with fallback for non-array-like ES3 strings


var IObject = __webpack_require__(47);
var defined = __webpack_require__(23);
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pIE = __webpack_require__(48);
var createDesc = __webpack_require__(32);
var toIObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(22);
var has = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(97);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {/* empty */}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var has = __webpack_require__(14);
var toObject = __webpack_require__(9);
var IE_PROTO = __webpack_require__(69)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// optional / simple context binding


var aFunction = __webpack_require__(10);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = ({}).toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(3);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () {/* empty */}, 1) : method.call(null);
  });
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 7.1.1 ToPrimitive(input [, PreferredType])


var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 7.2.1 RequireObjectCoercible(argument)


module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 7.1.4 ToInteger


var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// most Object methods by ES6 should accept primitives


var $export = __webpack_require__(0);
var core = __webpack_require__(18);
var fails = __webpack_require__(3);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex


var ctx = __webpack_require__(19);
var IObject = __webpack_require__(47);
var toObject = __webpack_require__(9);
var toLength = __webpack_require__(8);
var asc = __webpack_require__(86);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (; length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res; // map
        else if (res) switch (TYPE) {
            case 3:
              return true; // some
            case 5:
              return val; // find
            case 6:
              return index; // findIndex
            case 2:
              result.push(val); // filter
          } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(6)) {
  var LIBRARY = __webpack_require__(30);
  var global = __webpack_require__(2);
  var fails = __webpack_require__(3);
  var $export = __webpack_require__(0);
  var $typed = __webpack_require__(62);
  var $buffer = __webpack_require__(92);
  var ctx = __webpack_require__(19);
  var anInstance = __webpack_require__(39);
  var propertyDesc = __webpack_require__(32);
  var hide = __webpack_require__(11);
  var redefineAll = __webpack_require__(41);
  var toInteger = __webpack_require__(24);
  var toLength = __webpack_require__(8);
  var toIndex = __webpack_require__(123);
  var toAbsoluteIndex = __webpack_require__(35);
  var toPrimitive = __webpack_require__(22);
  var has = __webpack_require__(14);
  var classof = __webpack_require__(49);
  var isObject = __webpack_require__(4);
  var toObject = __webpack_require__(9);
  var isArrayIter = __webpack_require__(83);
  var create = __webpack_require__(36);
  var getPrototypeOf = __webpack_require__(17);
  var gOPN = __webpack_require__(37).f;
  var getIterFn = __webpack_require__(85);
  var uid = __webpack_require__(33);
  var wks = __webpack_require__(5);
  var createArrayMethod = __webpack_require__(26);
  var createArrayIncludes = __webpack_require__(52);
  var speciesConstructor = __webpack_require__(59);
  var ArrayIterators = __webpack_require__(88);
  var Iterators = __webpack_require__(45);
  var $iterDetect = __webpack_require__(56);
  var setSpecies = __webpack_require__(38);
  var arrayFill = __webpack_require__(87);
  var arrayCopyWithin = __webpack_require__(113);
  var $DP = __webpack_require__(7);
  var $GOPD = __webpack_require__(16);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function toOffset(it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function validate(it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function allocate(C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    }return new C(length);
  };

  var speciesFromList = function speciesFromList(O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function fromList(C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function addGetter(it, key, internal) {
    dP(it, key, { get: function get() {
        return this._d[internal];
      } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      }O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of() /* ...items */{
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
    arrayToLocaleString.call(new Uint8Array(1));
  });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) {
      // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) {
      // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) {
      // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) {
      // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) {
      // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      }return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function isTAIndex(target, key) {
    return isObject(target) && target[TYPED_ARRAY] && typeof key != 'symbol' && key in target && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')
    // TODO: add validation descriptor w/o calling accessors
     && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
      target[key] = desc.value;
      return target;
    }return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () {
    arrayToString.call({});
  })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function constructor() {/* noop */},
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function get() {
      return this[TYPED_ARRAY];
    }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function getter(that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function setter(that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function addElement(that, index) {
      dP(that, index, {
        get: function get() {
          return getter(this, index);
        },
        set: function set(value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function get() {
          return NAME;
        }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () {
      Base.of.call(TypedArray, 1);
    }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () {/* empty */};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Map = __webpack_require__(118);
var $export = __webpack_require__(0);
var shared = __webpack_require__(51)('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(121))());

var getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  }return keyMetadata;
};
var ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) {
    keys.push(key);
  });
  return keys;
};
var toMetaKey = function toMetaKey(it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function exp(O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var META = __webpack_require__(33)('meta');
var isObject = __webpack_require__(4);
var has = __webpack_require__(14);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(3)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function setMeta(it) {
  setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {} // weak collections IDs
    } });
};
var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
    // return object ID
  }return it[META].i;
};
var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
    // return hash weak collections IDs
  }return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = false;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.31 Array.prototype[@@unscopables]


var UNSCOPABLES = __webpack_require__(5)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(11)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.2.14 / 15.2.3.14 Object.keys(O)


var $keys = __webpack_require__(99);
var enumBugKeys = __webpack_require__(70);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(24);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


var anObject = __webpack_require__(1);
var dPs = __webpack_require__(100);
var enumBugKeys = __webpack_require__(70);
var IE_PROTO = __webpack_require__(69)('IE_PROTO');
var Empty = function Empty() {/* empty */};
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(67)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(71).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) delete _createDict[PROTOTYPE][enumBugKeys[i]];
  return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)


var $keys = __webpack_require__(99);
var hiddenKeys = __webpack_require__(70).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var dP = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(6);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }return it;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(19);
var call = __webpack_require__(111);
var isArrayIter = __webpack_require__(83);
var anObject = __webpack_require__(1);
var toLength = __webpack_require__(8);
var getIterFn = __webpack_require__(85);
var BREAK = {};
var RETURN = {};
var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
_exports.BREAK = BREAK;
_exports.RETURN = RETURN;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var redefine = __webpack_require__(12);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {//import {FunctionTypes} from "./WorldContext.js";

/**
 * Enum to declare the types of Narrative Objects.
 * @readonly
 * @enum {string}
 * @property {string}  NARRATIVE_OBJECT An (abstract) Narrative Object 
 * @property {string}  ATOM An {@link Atom}
 * @property {string}  GROUP A {@link Group}
 * @property {string}  LAYERED A {@link Layered}
 */


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NarrativeObjectTypes = {
	NARRATIVE_OBJECT: "NarrativeObject",
	ATOM: "Atom",
	GROUP: "Group",
	LAYERED: "Layered"
};

exports.NarrativeObjectTypes = NarrativeObjectTypes;
// TODO: Importing this from WorldContext.js causes engine to crash.
//		 Duplicating seems to work but is obviously a crap thing to do.
var FunctionTypes = {
	OUTPUT_SELECTION: "Output Selection",
	GROUP_SELECTION: "Group Selection",
	LAYER_SELECTION: "Layer Selection",
	INTERACTION: "Interaction"
};

exports.FunctionTypes = FunctionTypes;
/**
 * An abstract Narrative Object.
 * @constructor
 * @param {object=} data - Data associated with the Narrative Object.
 */

var NarrativeObject = (function () {
	function NarrativeObject() {
		var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		_classCallCheck(this, NarrativeObject);

		this.id = this.generateId();
		this.type = NarrativeObjectTypes.NARRATIVE_OBJECT;
		this.annotations = {};
		// inputs and outputs contain the ids of narrative objects, not the narrative objects themselves.
		this.inputs = [];
		this.outputs = [];
		this.data = data;
		// Default output is an id.
		this.defaultOutput = undefined;
		// Set default output to default value.
		this.setDefaultOutput();
		this.hasPlayed = false;

		this.outputSelectionFunction = undefined;

		this.sequencerTimes = [];

		NarrativeObject.instances.push(this);
	}

	_createClass(NarrativeObject, [{
		key: "destroy",
		value: function destroy() {
			var removeIndex = NarrativeObject.instances.indexOf(this);

			if (removeIndex != -1) {
				NarrativeObject.instances.splice(removeIndex, 1);
			}
		}
	}, {
		key: "setId",
		value: function setId(id) {
			this.id = id;
		}
	}, {
		key: "generateId",
		value: function generateId() {
			// Start highest at -1 as 1 is added during return to increment. So 0 is the first returned value.
			var highestId = -1;

			for (var i = 0; i < NarrativeObject.instances.length; i++) {
				var splitString = NarrativeObject.instances[i].id.split(NarrativeObject.idPrefix);
				// Id should be the last part of the split string.
				var id = Number.parseInt(splitString[splitString.length - 1]);

				if (id > highestId) {
					highestId = id;
				}
			}

			return NarrativeObject.idPrefix + (highestId + 1);
		}
	}, {
		key: "addInput",
		value: function addInput(narrative_object) {
			// Ensure we dont have duplicate inputs.
			if (this.inputs.indexOf(narrative_object.id) == -1) {
				this.inputs.push(narrative_object.id);
			}
		}
	}, {
		key: "removeInput",
		value: function removeInput(narrative_object) {
			var removeIndex = this.inputs.indexOf(narrative_object.id);

			if (removeIndex != -1) {
				this.inputs.splice(removeIndex, 1);
				narrative_object.removeOutput(this);
			}
		}

		/**
   * Add an output to a Narrative Object. The First output added is set as the Default Output.
   *
   * @param  {NarrativeObject} no A Narrative Object to add as an output to this Narrative Object.
   */
	}, {
		key: "addOutput",
		value: function addOutput(narrative_object) {
			// Check for the output already being in the list. Dont want duplicate outputs.
			if (this.outputs.indexOf(narrative_object.id) == -1) {
				this.outputs.push(narrative_object.id);
				this.setDefaultOutput();
				narrative_object.addInput(this);
			}
		}

		/**
   * Remove an output from a Narrative Object.
   * If the Narrative Object removed is the default output and there are other outputs assigned, then the one which was added earliest is set to the Default Output. Otherwise, the terminate output is used to stop processing.
   * @param {NarrativeObject} narrativeObject - The Narrative Object to remove as an output.
   */
	}, {
		key: "removeOutput",
		value: function removeOutput(narrative_object) {
			var removeIndex = this.outputs.indexOf(narrative_object.id);

			if (removeIndex != -1) {
				this.outputs.splice(removeIndex, 1);
				narrative_object.removeInput(this);
			}

			this.setDefaultOutput();
		}

		/**
   * Get the ids of all outputs of this narrative object.
   */
	}, {
		key: "getOutputIds",
		value: function getOutputIds() {
			return this.outputs;
		}

		/**
   * Sets the default output of this Narrative Object.
  * @param {NarrativeObject} [narrativeObject=undefined] 
  * @memberof NarrativeObject
  */
	}, {
		key: "setDefaultOutput",
		value: function setDefaultOutput() {
			var narrativeObject = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

			// If there is an output specified explicitly.
			if (narrativeObject != undefined) {
				// Ensure it is an output for this narrative object.
				var index = this.outputs.indexOf(narrativeObject.id);

				// If the index exists, we know its a valid output.
				if (index != -1) {
					// Set the default output to the id of the specified narrative object.
					this.defaultOutput = narrativeObject.id;

					return;
				}
			}

			if (this.outputs.length > 0) {
				// Set the default output to the "oldest" atom added to outputs.
				this.defaultOutput = this.outputs[0];
			} else {
				this.defaultOutput = NarrativeObject.terminate;
			}
		}

		/**
   * Return the default output for this narrative object.
   */
	}, {
		key: "getDefaultOutput",
		value: function getDefaultOutput() {
			return this.defaultOutput;
		}

		/**
   * Return the non default outputs for this narrative object.
   */
	}, {
		key: "getNonDefaultOutputs",
		value: function getNonDefaultOutputs() {
			var _this = this;

			if (this.outputs.length > 1) {
				return this.outputs.filter(function (output) {
					return output != _this.defaultOutput;
				});
			}

			return [NarrativeObject.terminate];
		}

		/**
   * Assign an Output Selection Function to select from the assigned outputs.
   * @param {OutputSelectionFunction} oFunc - The function for selecting an output.
  * @param {string} name for the function.
   */
	}, {
		key: "setOutputSelectionFunction",
		value: function setOutputSelectionFunction(selectionFunction, functionName) {
			if (selectionFunction != undefined) {
				this.outputSelectionFunction = selectionFunction.bind(this);
			}

			this.data[FunctionTypes.OUTPUT_SELECTION] = functionName;
		}
	}, {
		key: "resetOutputSelectionFunction",
		value: function resetOutputSelectionFunction() {
			this.outputSelectionFunction = undefined;
			this.data[FunctionTypes.OUTPUT_SELECTION] = undefined;
		}

		/**
   * Selects an output based on the output selection function of this Narrative Object.
   * @param  {WorldContext} worldContext the World Context.
   */
	}, {
		key: "selectOutput",
		value: function selectOutput(worldContext) {
			var selected = this.defaultOutput;
			if (this.outputSelectionFunction != undefined) {
				var selectedFromFunction = this.outputSelectionFunction(worldContext, this, this.defaultOutput, this.outputs);
				var isValidNO = worldContext.getNarrativeObject(selectedFromFunction);
				if (isValidNO != undefined) {
					selected = selectedFromFunction;
				}
			}
			return selected;
		}

		/**
   * Add an ontology annotation.
  * @param {string} className The name of the ontology class to add.
  * @param {string} instanceName The name of the instance to add.
  * @param {object=} value The value to assign to this instance. 
  * @memberof NarrativeObject
  */
	}, {
		key: "addAnnotation",
		value: function addAnnotation(class_name, instance_name, value) {
			if (!this.annotations.hasOwnProperty(class_name)) {
				this.annotations[class_name] = {};
			}

			this.annotations[class_name][instance_name] = value;
		}

		/**
   * Remove an ontology annotation.
  * @param {string} className The name of the ontology class to remove.
  * @param {string} instanceName The name of the instance to remove.
   */
	}, {
		key: "removeAnnotation",
		value: function removeAnnotation(class_name, instance_name) {
			if (this.annotations.hasOwnProperty(class_name)) {
				if (this.annotations[class_name].hasOwnProperty(instance_name)) {
					delete this.annotations[class_name][instance_name];
				}

				if (Object.keys(this.annotations[class_name]).length == 0) {
					delete this.annotations[class_name];
				}
			}
		}

		/**
   * Check for the existance of an annotation
   * 
   * @param {string} className The name of the ontology class to check.
   * @param {string} instanceName The name of the instance to check.
   * @returns {boolean} Indicates existence of the annotation.
   * @memberof NarrativeObject
   */
	}, {
		key: "hasAnnotation",
		value: function hasAnnotation(class_name, instance_name) {
			if (this.annotations.hasOwnProperty(class_name)) {
				if (this.annotations[class_name].hasOwnProperty(instance_name)) {
					return true;
				}
			}

			return false;
		}

		/**
   * 
   * Returns the value of an annotation.
   * @param {string} className The name of the ontology class to check.
   * @param {string} instanceName The name of the instance to check.
   * @returns {object|undefined} The value of the annotation.
   * @memberof NarrativeObject
   */
	}, {
		key: "getAnnotationValue",
		value: function getAnnotationValue(class_name, instance_name) {
			if (this.hasAnnotation(class_name, instance_name)) {
				return this.annotations[class_name][instance_name];
			}

			// TODO Should return undefined??
			// Return zero if this has no instance of the class.
			// In theory if its not tagged with that, then its 100% not that class/instance.
			return 0;
		}

		/**
   * 
   * Returns the values of a number of instance annotation within a class.
   * @param {string} className The name of the ontology class to check.
   * @param {string[]} instanceNames A list of the names of instance to check.
   * @returns {object[]} A list of values for the annotations.
   * @memberof NarrativeObject
   */
	}, {
		key: "getAnnotationValues",
		value: function getAnnotationValues(className, instanceNames) {
			var annotationValues = [];

			for (var i = 0; i < instanceNames.length; i++) {
				annotationValues.push(this.getAnnotationValue(className, instanceNames[i]));
			}

			return annotationValues;
		}
	}, {
		key: "initialise",
		value: function initialise(worldContext) {
			alert("Not Implemented");
		}
	}, {
		key: "process",
		value: regeneratorRuntime.mark(function process(world_context) {
			return regeneratorRuntime.wrap(function process$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						return context$2$0.abrupt("return", new Promise(function (resolve) {
							alert("Not Implemented");

							resolve();
						}));

					case 1:
					case "end":
						return context$2$0.stop();
				}
			}, process, this);
		})
	}, {
		key: "wait",
		value: function wait(stepIterator) {
			return new Promise(function (resolve) {
				setTimeout(function () {
					stepIterator();
					resolve();
				}, 0);
			});
		}
	}]);

	return NarrativeObject;
})();

exports["default"] = NarrativeObject;

NarrativeObject.terminate = "terminate";
NarrativeObject.instances = [];
NarrativeObject.idPrefix = "no:";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var def = __webpack_require__(7).f;
var has = __webpack_require__(14);
var TAG = __webpack_require__(5)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var defined = __webpack_require__(23);
var fails = __webpack_require__(3);
var spaces = __webpack_require__(73);
var space = '[' + spaces + ']';
var non = '​';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function exporter(KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(4);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// fallback for non-array-like ES3 and non-enumerable old V8 strings


var cof = __webpack_require__(20);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = ({}).propertyIsEnumerable;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// getting tag from 19.1.3.6 Object.prototype.toString()


var cof = __webpack_require__(20);
var TAG = __webpack_require__(5)('toStringTag');
// ES3 wrong here
var ARG = cof((function () {
  return arguments;
})()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {/* empty */}
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
  // builtinTag case
  : ARG ? cof(O)
  // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x5, _x6, _x7) { var _again = true; _function: while (_again) { var object = _x5, property = _x6, receiver = _x7; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x5 = parent; _x6 = property; _x7 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _NarrativeObjectJs = __webpack_require__(42);

var _NarrativeObjectJs2 = _interopRequireDefault(_NarrativeObjectJs);

var _InteractionJs = __webpack_require__(93);

var _InteractionJs2 = _interopRequireDefault(_InteractionJs);

// This is a rough guess at how long it takes a video to buffer. Interactions are prevented from occurring within (videoDuration - videoBufferTime)
// on the timeline. This means the decision is made and there is enough time to buffer the results.
var videoBufferTime = 1;

/**
 * An Atom Narrative Object stturcture.
 * @tutorial 3_atom
 * @extends {NarrativeObject}
 * @constructor
 * @param {FlowPackage} flowPackage A media flow package.
 * @param {number=} inPoint The starting time in seconds with relation to the FlowPackage.
 * @param {number=} outPoint The ending time in seconds with relation to the FlowPackage.
 * @param {Object=} data Data associated with the atom.
 */

var Atom = (function (_NarrativeObject) {
	_inherits(Atom, _NarrativeObject);

	function Atom(flowPackage) {
		var startTime = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		var endTime = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];
		var data = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

		_classCallCheck(this, Atom);

		_get(Object.getPrototypeOf(Atom.prototype), "constructor", this).call(this, data);
		this.type = _NarrativeObjectJs.NarrativeObjectTypes.ATOM;
		this.flowPackage = flowPackage;
		this.interactions = [];
		// Start time defaults to 0 rather than undefined so that image fps can have
		// a "duration" on a GUI rather than having to force it elsewhere.	
		this.startTime = startTime;
		this.endTime = endTime;
		this.duration = undefined;
		this.waitBeforeStartDuration = 0;
		this.isComplete = false;
	}

	_createClass(Atom, [{
		key: "initialise",
		value: function initialise(worldContext) {
			if (this.flowPackage != undefined) {
				this.startTime = Math.min(this.startTime, this.flowPackage.duration);
				this.endTime = this.endTime != undefined ? Math.min(this.endTime, this.flowPackage.duration) : this.flowPackage.duration;
				this.duration = this.endTime - this.startTime;
			} else {
				console.log("Flow Package is undefined. All atoms must have a flow package.");
			}
		}
	}, {
		key: "process",
		value: regeneratorRuntime.mark(function process(stepIterator, stopIterator, worldContext, sendToSequencer, sequencerThreadId) {
			var waitForInteractions = arguments.length <= 5 || arguments[5] === undefined ? true : arguments[5];
			var i, finalInteractionId, outputId, outputNarrativeObject;
			return regeneratorRuntime.wrap(function process$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						console.log("Process Atom Started");

						this.hasPlayed = true;

						this.isComplete = false;

						sendToSequencer(this, sequencerThreadId);

						for (i = 0; i < this.interactions.length; i++) {
							if (this.interactions[i].resetOutcomeOnStart) {
								this.interactions[i].resetOutcome();
							}
						}

						if (!(waitForInteractions && this.hasInteractions())) {
							context$2$0.next = 19;
							break;
						}

						console.log("Atom Wait For Interaction Start");

						finalInteractionId = this.getFinalInteractionId();

					case 8:
						if (worldContext.getInteraction(finalInteractionId).isComplete()) {
							context$2$0.next = 18;
							break;
						}

						if (worldContext.isProcessing()) {
							context$2$0.next = 14;
							break;
						}

						stopIterator();

						return context$2$0.abrupt("break", 18);

					case 14:
						context$2$0.next = 16;
						return this.wait(stepIterator);

					case 16:
						context$2$0.next = 8;
						break;

					case 18:

						console.log("Atom Wait For Interaction Finish");

					case 19:

						this.isComplete = true;

						// Check to see if we should wait a frame (allowing sequencer to process passed data to this point).

						if (!worldContext.graph.processedMaxNarrativeObjects()) {
							context$2$0.next = 24;
							break;
						}

						worldContext.graph.resetProcessCount();
						context$2$0.next = 24;
						return this.wait(stepIterator);

					case 24:
						outputId = this.selectOutput(worldContext);

						if (!(outputId != _NarrativeObjectJs2["default"].terminate)) {
							context$2$0.next = 29;
							break;
						}

						outputNarrativeObject = worldContext.getNarrativeObject(outputId);

						if (!(outputNarrativeObject != undefined)) {
							context$2$0.next = 29;
							break;
						}

						return context$2$0.delegateYield(outputNarrativeObject.process(stepIterator, stopIterator, worldContext, sendToSequencer, sequencerThreadId), "t0", 29);

					case 29:

						console.log("Process Atom Finished");

					case 30:
					case "end":
						return context$2$0.stop();
				}
			}, process, this);
		})

		/**
   * Get the flow package attached to this atom.
   */
	}, {
		key: "getFlowPackage",
		value: function getFlowPackage() {
			return this.flowPackage;
		}

		/**
   * Set the start time for this atom.
   * @param {Number} inPointTime 
   */
	}, {
		key: "setInPointTime",
		value: function setInPointTime(inPointTime) {
			if (inPointTime > this.endTime) {
				inPointTime = this.endTime;
			}

			this.startTime = inPointTime;
		}

		/**
   * Set the end time for this atom.
   * @param {Number} outPointTime 
   */
	}, {
		key: "setOutPointTime",
		value: function setOutPointTime(outPointTime) {
			if (outPointTime < this.startTime) {
				outPointTime = this.startTime;
			}

			this.endTime = outPointTime;
		}

		/**
   * 
   * @tutorial 6_interactions
   * @param {number} inPoint The start time in seconds of the interaction from the start of the atom.
   * @param {number} outPoint The end time in seconds of the interaction from the start of the atom.
   * @param {boolean} resetOutcomeOnStart Should the outcome of this interaction reset each time the interaction is called?
   * @returns {Interaction}
   * @memberof Atom
   */
	}, {
		key: "addInteraction",
		value: function addInteraction(start_time, end_time, resetOutcomeOnStart, data) {
			// Clamp off the end of the interaction to ensure there is some buffering time available.
			if (end_time > this.duration - videoBufferTime) {
				end_time = this.duration - videoBufferTime;
			}

			// Clamp the value for end time to ensure it isnt before the start time.
			var clamped_end_time = Math.max(start_time, end_time);
			var interaction = new _InteractionJs2["default"](start_time, clamped_end_time - start_time, resetOutcomeOnStart, data);
			this.interactions.push(interaction);
			this.interactions.sort(function (a, b) {
				if (a.endTime() > b.endTime()) {
					return 1;
				} else if (a.endTime() < b.endTime()) {
					return -1;
				}

				return 0;
			});
			return interaction;
		}

		/**
   * 
   * Removes an interaction from an Atom.
   * @tutorial 6_interactions
   * @param {Interaction} interaction The Interaction to remove.
   * @returns {boolean} Indicates if removal was successful. 
   * @memberof Atom
   */
	}, {
		key: "removeInteraction",
		value: function removeInteraction(interaction) {
			var removeIndex = this.interactions.indexOf(interaction);

			if (removeIndex != -1) {
				this.interactions.splice(removeIndex, 1);
				return true;
			} else {
				return false;
			}
		}

		/**
   * Get an interaction by its id.
   * @param {Number} interactionId 
   */
	}, {
		key: "getInteraction",
		value: function getInteraction(interactionId) {
			for (var i = 0; i < this.interactions.length; i++) {
				if (this.interactions[i].id == interactionId) {
					return this.interactions[i];
				}
			}

			return undefined;
		}

		/**
   * Checks for interactions on the Atom.
   * @tutorial 6_interactions
   * @returns {boolean} returns TRUE if interactions exist 
   * @memberof Atom
   */
	}, {
		key: "hasInteractions",
		value: function hasInteractions() {
			return this.interactions.length > 0;
		}

		/**
   * Return the interactions on this atom.
   */
	}, {
		key: "getInteractions",
		value: function getInteractions() {
			return this.interactions;
		}

		/**
   * Get the id of the final interaction on this atom.
   */
	}, {
		key: "getFinalInteractionId",
		value: function getFinalInteractionId() {
			if (this.hasInteractions()) {
				return this.interactions[this.interactions.length - 1].id;
			}

			return -1;
		}

		/**
   * Sets the time which should be waited before playing this atom.
   * @param {Number} waitBeforeStartDuration 
   */
	}, {
		key: "setWaitBeforeStartDuration",
		value: function setWaitBeforeStartDuration(waitBeforeStartDuration) {
			// Ensure this never goes negative by returning the largest value of param and zero.
			this.waitBeforeStartDuration = Math.max(0, waitBeforeStartDuration);
		}
	}, {
		key: "canBeSequenced",
		value: function canBeSequenced() {
			if (this.flowPackage != undefined) {
				return !this.flowPackage.isBlank();
			}

			// Return false as no flow package exists?
			return false;
		}
	}]);

	return Atom;
})(_NarrativeObjectJs2["default"]);

exports["default"] = Atom;
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var core = __webpack_require__(18);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(30) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// false -> Array#indexOf
// true  -> Array#includes


var toIObject = __webpack_require__(15);
var toLength = __webpack_require__(8);
var toAbsoluteIndex = __webpack_require__(35);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 7.2.2 IsArray(argument)


var cof = __webpack_require__(20);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 7.2.8 IsRegExp(argument)


var isObject = __webpack_require__(4);
var cof = __webpack_require__(20);
var MATCH = __webpack_require__(5)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ITERATOR = __webpack_require__(5)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () {
    SAFE_CLOSING = true;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {/* empty */}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () {
      return { done: safe = true };
    };
    arr[ITERATOR] = function () {
      return iter;
    };
    exec(arr);
  } catch (e) {/* empty */}
  return safe;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(1);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(11);
var redefine = __webpack_require__(12);
var fails = __webpack_require__(3);
var defined = __webpack_require__(23);
var wks = __webpack_require__(5);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () {
      return 7;
    };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    }
    // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return rxfn.call(string, this);
    });
  }
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 7.3.20 SpeciesConstructor(O, defaultConstructor)


var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(10);
var SPECIES = __webpack_require__(5)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(12);
var redefineAll = __webpack_require__(41);
var meta = __webpack_require__(29);
var forOf = __webpack_require__(40);
var anInstance = __webpack_require__(39);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var $iterDetect = __webpack_require__(56);
var setToStringTag = __webpack_require__(43);
var inheritIfRequired = __webpack_require__(74);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);return this;
    });
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var hide = __webpack_require__(11);
var uid = __webpack_require__(33);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(30) || !__webpack_require__(3)(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () {/* empty */});
  delete __webpack_require__(2)[K];
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(0);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
      var length = arguments.length;
      var A = new Array(length);
      while (length--) A[length] = arguments[length];
      return new this(A);
    } });
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(0);
var aFunction = __webpack_require__(10);
var ctx = __webpack_require__(19);
var forOf = __webpack_require__(40);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
      var mapFn = arguments[1];
      var mapping, A, n, cb;
      aFunction(this);
      mapping = mapFn !== undefined;
      if (mapping) aFunction(mapFn);
      if (source == undefined) return new this();
      A = [];
      if (mapping) {
        n = 0;
        cb = ctx(mapFn, arguments[2], 2);
        forOf(source, false, function (nextItem) {
          A.push(cb(nextItem, n++));
        });
      } else {
        forOf(source, false, A.push, A);
      }
      return new this(A);
    } });
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// shim for using process in browser


var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(4);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var core = __webpack_require__(18);
var LIBRARY = __webpack_require__(30);
var wksExt = __webpack_require__(98);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var shared = __webpack_require__(51)('keys');
var uid = __webpack_require__(33);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// IE 8- don't enum bug keys


module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */


var isObject = __webpack_require__(4);
var anObject = __webpack_require__(1);
var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  (function (test, buggy, set) {
    try {
      set = __webpack_require__(19)(Function.call, __webpack_require__(16).f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  })({}, false) : undefined),
  check: check
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = '\t\n\u000b\f\r   ᠎    ' + '         　\u2028\u2029﻿';

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(4);
var setPrototypeOf = __webpack_require__(72).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }return that;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(24);
var defined = __webpack_require__(23);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.28 Math.sign(x)


module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.14 Math.expm1(x)


var $expm1 = Math.expm1;
module.exports = !$expm1
// Old FF bug
 || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
// Tor Browser bug
 || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(24);
var defined = __webpack_require__(23);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(12);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(45);
var $iterCreate = __webpack_require__(80);
var setToStringTag = __webpack_require__(43);
var getPrototypeOf = __webpack_require__(17);
var ITERATOR = __webpack_require__(5)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(36);
var descriptor = __webpack_require__(32);
var setToStringTag = __webpack_require__(43);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(5)('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// helper for String#{startsWith, endsWith, includes}


var isRegExp = __webpack_require__(55);
var defined = __webpack_require__(23);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MATCH = __webpack_require__(5)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) {/* empty */}
  }return true;
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// check on default Array iterator


var Iterators = __webpack_require__(45);
var ITERATOR = __webpack_require__(5)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7);
var createDesc = __webpack_require__(32);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(49);
var ITERATOR = __webpack_require__(5)('iterator');
var Iterators = __webpack_require__(45);
module.exports = __webpack_require__(18).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


var speciesConstructor = __webpack_require__(228);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(9);
var toAbsoluteIndex = __webpack_require__(35);
var toLength = __webpack_require__(8);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(31);
var step = __webpack_require__(114);
var Iterators = __webpack_require__(45);
var toIObject = __webpack_require__(15);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(79)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(19);
var invoke = __webpack_require__(104);
var html = __webpack_require__(71);
var cel = __webpack_require__(67);
var global = __webpack_require__(2);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function run() {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function listener(event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(20)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
    // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(ctx(run, id, 1));
      };
      // Browsers with MessageChannel, includes WebWorkers
    } else if (MessageChannel) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = ctx(port.postMessage, port, 1);
        // Browsers with postMessage, skip WebWorkers
        // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
          defer = function (id) {
            global.postMessage(id + '', '*');
          };
          global.addEventListener('message', listener, false);
          // IE8-
        } else if (ONREADYSTATECHANGE in cel('script')) {
            defer = function (id) {
              html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
                html.removeChild(this);
                run.call(id);
              };
            };
            // Rest old browsers
          } else {
              defer = function (id) {
                setTimeout(ctx(run, id, 1), 0);
              };
            }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var macrotask = __webpack_require__(89).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(20)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function flush() {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
      var toggle = true;
      var node = document.createTextNode('');
      new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
      notify = function () {
        node.data = toggle = !toggle;
      };
      // environments with maybe non-completely correct, but existent Promise
    } else if (Promise && Promise.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        var promise = Promise.resolve(undefined);
        notify = function () {
          promise.then(flush);
        };
        // for other environments - macrotask based on:
        // - setImmediate
        // - MessageChannel
        // - window.postMessag
        // - onreadystatechange
        // - setTimeout
      } else {
          notify = function () {
            // strange IE + webpack dev server bug - use .call(global)
            macrotask.call(global, flush);
          };
        }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    }last = task;
  };
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(10);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(6);
var LIBRARY = __webpack_require__(30);
var $typed = __webpack_require__(62);
var hide = __webpack_require__(11);
var redefineAll = __webpack_require__(41);
var fails = __webpack_require__(3);
var anInstance = __webpack_require__(39);
var toInteger = __webpack_require__(24);
var toLength = __webpack_require__(8);
var toIndex = __webpack_require__(123);
var gOPN = __webpack_require__(37).f;
var dP = __webpack_require__(7).f;
var arrayFill = __webpack_require__(87);
var setToStringTag = __webpack_require__(43);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  }return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function get() {
      return this[internal];
    } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * An Interaction which is assigned to a Narrative Object (normally used to update UI).
 * @constructor
 * @param {number} start - time in seconds from the begining of the Narrative Object to start interaction.
 * @param {number} duration - duration of the interaction.
 * @param {boolean} resetOutcomeOnStart Should the outcome of this interaction reset each time the interaction is called?
 * @param {object=} data - data associated with the interaction.
 */


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Interaction = (function () {
	function Interaction(start, duration) {
		var resetOutcomeOnStart = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
		var data = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

		_classCallCheck(this, Interaction);

		this.start = start;
		this.end = start + duration;
		this.duration = duration;
		this.data = data;
		this.id = this.generateId();
		this.outcome = undefined;
		this.complete = false;
		// Flag to show whether the outcome for this interaction
		// should reset when this interaction starts.
		this.resetOutcomeOnStart = resetOutcomeOnStart;

		Interaction.instances.push(this);
	}

	_createClass(Interaction, [{
		key: "destroy",
		value: function destroy() {
			var removeIndex = Interaction.instances.indexOf(this);

			if (removeIndex != -1) {
				Interaction.instances.splice(removeIndex, 1);
			}
		}
	}, {
		key: "generateId",
		value: function generateId() {
			// Start highest at -1 as 1 is added during return to increment. So 0 is the first returned value.
			var highestId = -1;

			for (var i = 0; i < Interaction.instances.length; i++) {
				if (Interaction.instances[i].id > highestId) {
					highestId = Interaction.instances[i].id;
				}
			}

			return highestId + 1;
		}
	}, {
		key: "setId",
		value: function setId(id) {
			this.id = id;
		}
	}, {
		key: "isActive",
		value: function isActive(atomStartTime, atomEndTime) {
			if (this.start >= atomStartTime && this.start + this.duration <= atomEndTime) {
				return true;
			}

			return false;
		}
	}, {
		key: "endTime",
		value: function endTime() {
			return this.start + this.duration;
		}
	}, {
		key: "isComplete",
		value: function isComplete() {
			return this.complete;
		}
	}, {
		key: "setOutcome",
		value: function setOutcome(outcome) {
			this.complete = true;
			this.outcome = outcome;
		}
	}, {
		key: "resetOutcome",
		value: function resetOutcome() {
			this.complete = false;
			this.outcome = undefined;
		}
	}, {
		key: "setStartTime",
		value: function setStartTime(startTime) {
			this.start = Math.min(startTime, this.end);
			this._setDuration();
		}
	}, {
		key: "setEndTime",
		value: function setEndTime(endTime) {
			this.end = Math.max(endTime, this.start);
			this._setDuration();
		}
	}, {
		key: "_setDuration",
		value: function _setDuration() {
			this.duration = Math.max(0, this.end - this.start);
		}
	}]);

	return Interaction;
})();

exports["default"] = Interaction;

Interaction.instances = [];
module.exports = exports["default"];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
	value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Ontology = __webpack_require__(339);

var _Ontology2 = _interopRequireDefault(_Ontology);

var _GraphJs = __webpack_require__(340);

var _GraphJs2 = _interopRequireDefault(_GraphJs);

var _FlowPackageJs = __webpack_require__(341);

var _FlowPackageJs2 = _interopRequireDefault(_FlowPackageJs);

var _NarrativeObjectJs = __webpack_require__(42);

var _NarrativeObjectJs2 = _interopRequireDefault(_NarrativeObjectJs);

var _AtomJs = __webpack_require__(50);

var _AtomJs2 = _interopRequireDefault(_AtomJs);

var _GroupJs = __webpack_require__(133);

var _GroupJs2 = _interopRequireDefault(_GroupJs);

var _LayerJs = __webpack_require__(95);

var _LayerJs2 = _interopRequireDefault(_LayerJs);

var _LayeredJs = __webpack_require__(342);

var _LayeredJs2 = _interopRequireDefault(_LayeredJs);

var _InteractionJs = __webpack_require__(93);

var _InteractionJs2 = _interopRequireDefault(_InteractionJs);

var MediaTypes = {
	UNDEFINED: "undefined",
	VIDEO: "video",
	IMAGE: "image",
	UNSUPPORTED: "unsupported"
};

exports.MediaTypes = MediaTypes;
/**
 * Enum to declare the types of functions pre-defined in the WorldContext.
 * @readonly
 * @enum {string}
 * @property {string}  GROUP_SELECTION A {@link GroupSelectionFunction}.
 * @property {string}  OUTPUT_SELECTION An {@link OutputSelectionFunction}.
 * @property {string}  LAYER_SELECTION An {@link LayerSelectionFunction}.
 */

var FunctionTypes = {
	OUTPUT_SELECTION: "Output Selection",
	GROUP_SELECTION: "Group Selection",
	LAYER_SELECTION: "Layer Selection",
	INTERACTION: "Interaction"
};

exports.FunctionTypes = FunctionTypes;
/**
 * Enum to declare the types of termination functions available in Narrative Objects.
 * @readonly
 * @enum {string}
 * @property {string}  ALL_PLAYED The all played termination condition.
 * @property {string}  PLAY_COUNT The play count termination condition.
 * @property {string}  LOOPING The looping condition.
 */
var TerminationFunctionTypes = {
	ALL_PLAYED: "allPlayed",
	PLAY_COUNT: "playCount",
	IMMEDIATELY: "immediately"
};

exports.TerminationFunctionTypes = TerminationFunctionTypes;
/**
 * The (global) World Context. Used for storing, querying and retriveing data about Narrative Objects, Interactions, Ontologies and Context Variables.
 * @constructor
 */

var WorldContext = (function () {
	function WorldContext() {
		_classCallCheck(this, WorldContext);

		this.reset();
	}

	_createClass(WorldContext, [{
		key: 'reset',
		value: function reset() {
			this.anos_played = [];
			this.data = {};
			this.ontology = new _Ontology2['default']();
			this.graph = new _GraphJs2['default']();
			// This set contains flow packages which are being initialised after creation.
			this.initialisingFlowPackages = {};
			// This set contains initialised flow packages.
			this.flowPackages = {};
			this.interactions = {};
			this.contextVariables = {};
			this.processingStarted = false;
			this.onProcessingStartedCallback = function () {};
			// Functions are defined and stored in this dictionary.
			this.functions = {};

			// Iterate the function types and add a sub-dictionary for each type we know will exist.
			for (var key in FunctionTypes) {
				this.functions[FunctionTypes[key]] = {};
			}

			// TODO: Add any built in functions to this.functions here.
		}

		/**
   * reset the graph (remove narrative graph)
   */
	}, {
		key: 'resetGraph',
		value: function resetGraph() {
			this.graph.reset();
		}

		/**
   * Reset the sequencer for the graph.
   */
	}, {
		key: 'resetSequencer',
		value: function resetSequencer() {
			this.graph.resetSequencer();
		}

		/**
   * Set the root narrative object of the graph.
   * @param {NarrativeObject} rootNarrativeObject
   */
	}, {
		key: 'setRootNarrativeObject',
		value: function setRootNarrativeObject(rootNarrativeObject) {
			this.graph.setRoot(rootNarrativeObject);
		}

		/**
   * Set the root narrative object of the graph from a narrative object id.
   * @param {number} rootId 
   */
	}, {
		key: 'setRootNarrativeObjectFromId',
		value: function setRootNarrativeObjectFromId(rootId) {
			this.graph.setRootFromId(rootId);
		}

		/**
   * Get the root narrative object of the graph.
   */
	}, {
		key: 'getRootNarrativeObject',
		value: function getRootNarrativeObject() {
			return this.graph.getRoot();
		}

		/**
   * Clears the root narrative object of the graph.
   */
	}, {
		key: 'resetRootNarrativeObject',
		value: function resetRootNarrativeObject() {
			this.graph.resetRoot();
		}

		/**
   * Get a specific narrative object in the graph.
   * @param {any} narrativeObjectID
   */
	}, {
		key: 'getNarrativeObject',
		value: function getNarrativeObject(narrativeObjectID) {
			return this.graph.getNarrativeObject(narrativeObjectID);
		}

		/**
   * Get a series of specific narrative objects in the graph.
   * @param {any} narrativeObjectIDs
   */
	}, {
		key: 'getNarrativeObjects',
		value: function getNarrativeObjects(narrativeObjectIDs) {
			var narrativeObjects = [];

			for (var i = 0; i < narrativeObjectIDs.length; i++) {
				narrativeObjects.push(this.graph.getNarrativeObject(narrativeObjectIDs[i]));
			}

			return narrativeObjects;
		}

		/**
   * Get all narrative objects in the graph.
   */
	}, {
		key: 'getAllNarrativeObjects',
		value: function getAllNarrativeObjects() {
			return this.graph.getAllNarrativeObjects();
		}
	}, {
		key: 'setNarrativeObjectId',
		value: function setNarrativeObjectId(narrativeObject, id) {
			return this.graph.setNarrativeObjectId(narrativeObject, id);
		}

		/**
   * Initialise a flow package by getting it's duration.
   * @param {FlowPackage} flowPackage
   */
	}, {
		key: 'initialiseFlowPackage',
		value: function initialiseFlowPackage(flowPackage) {
			var worldContext = this;

			// Copy out the url in case the media is reinitialised before callback happens
			// where flowPackage.url might be a different value from what initially comes in.
			var url = flowPackage.url;

			if (url == undefined) {
				flowPackage.duration = 0;

				worldContext.onFlowPackageLoadedSuccess(flowPackage, url);

				return;
			}

			worldContext.initialisingFlowPackages[flowPackage.url] = flowPackage;

			// This creates an html element named "video".
			var video = document.createElement("video");
			video.src = flowPackage.url;

			// This is a success event.
			video.addEventListener("loadedmetadata", function () {
				// Only set the duration if the urls match, meaning it hasnt been reloaded from elsewhere
				// between starting the init process and the callback happening!
				if (flowPackage.url == url) {
					flowPackage.duration = video.duration;
				}

				worldContext.onFlowPackageLoadedSuccess(flowPackage, url);
			});

			// This is a failure event.
			video.addEventListener("error", function () {
				worldContext.onFlowPackageLoadedFailure(url);
			});

			video.remove();
		}

		/**
   * Create a flow package on the world context.
   * @param {string} url
   * @param {number} duration
   */
	}, {
		key: 'createFlowPackage',
		value: function createFlowPackage(url) {
			var duration = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];
			var mediaType = arguments.length <= 2 || arguments[2] === undefined ? MediaTypes.UNDEFINED : arguments[2];
			var data = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

			if (!this.hasFlowPackage(url)) {
				var flowPackage = new _FlowPackageJs2['default'](url, duration, mediaType, data);

				if (duration == undefined) {
					this.initialiseFlowPackage(flowPackage);

					// Return fp here as it will not be in this.flowPackages yet!
					return flowPackage;
				} else {
					this.flowPackages[url] = flowPackage;
				}
			}

			return this.flowPackages[url];
		}

		/**
   * Set the id of the passed flow package.
   * @param {FlowPackage} flowPackage 
   * @param {number} id 
   */
	}, {
		key: 'setFlowPackageId',
		value: function setFlowPackageId(flowPackage, id) {
			if (this.hasFlowPackage(flowPackage.url)) {
				this.flowPackages[flowPackage.url].id = id;

				return true;
			}

			return false;
		}

		/**
   * Set the media attached to a flow package.
   * @param {FlowPackage} flowPackage - The flow package which should have its media set.
   * @param {string} url - URL of the media to be used.
   * @param {number} duration - Duration of the media to be used. This can be left undefined and will be calculated for video media.
   * @param {MediaTypes} mediaType - Type of media associated with this flow package.
   */
	}, {
		key: 'setFlowPackageMedia',
		value: function setFlowPackageMedia(flowPackage, url) {
			var duration = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];
			var mediaType = arguments.length <= 3 || arguments[3] === undefined ? MediaTypes.UNDEFINED : arguments[3];

			if (flowPackage != undefined) {
				if (this.hasFlowPackage(flowPackage.url)) {
					// Remove the old reference to the flow package with the original url.
					delete this.flowPackages[flowPackage.url];
				}

				// Set the media of flow package and reinit.
				flowPackage.setMedia(url, duration, mediaType);

				if (duration == undefined) {
					this.initialiseFlowPackage(flowPackage);
				}

				this.flowPackages[url] = flowPackage;
			}
		}

		/**
   * Remove a flow package from the world context.
   * @param {FlowPackage} flowPackage - The flow package to remove.
   */
	}, {
		key: 'removeFlowPackage',
		value: function removeFlowPackage(flowPackage) {
			if (this.hasFlowPackage(flowPackage.url)) {
				delete this.flowPackages[flowPackage.url];

				return true;
			}

			return false;
		}

		/**
   * Query whether the world context has a flow package with the url passed.
   * @param {string} url
   */
	}, {
		key: 'hasFlowPackage',
		value: function hasFlowPackage(url) {
			return this.flowPackages.hasOwnProperty(url);
		}
	}, {
		key: 'getFlowPackage',
		value: function getFlowPackage(id) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.entries(this.flowPackages)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _step$value = _slicedToArray(_step.value, 2);

					var url = _step$value[0];
					var flowPackage = _step$value[1];

					if (flowPackage.id == id) {
						return flowPackage;
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator['return']) {
						_iterator['return']();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return undefined;
		}

		/**
   * Returns a flow package with the passed url if it exists.
   * @param {string} url
   */
	}, {
		key: 'getFlowPackageByUrl',
		value: function getFlowPackageByUrl(url) {
			if (this.hasFlowPackage(url)) {
				return this.flowPackages[url];
			}

			return undefined;
		}

		/**
   * Returns all flow packages which currently exist in the world context.
   */
	}, {
		key: 'getAllFlowPackages',
		value: function getAllFlowPackages() {
			return this.flowPackages;
		}

		/**
   * Create an atom on the world context.
   * @param {FlowPackage} flowPackage - Flow package the atom should use.
   * @param {number} startTime - The start time of the segment to be used from the flow package passed.
   * @param {number} endTime - The end time of the segment to be used from the flow package passed.
   * @param {any} data
   */
	}, {
		key: 'createAtom',
		value: function createAtom(flowPackage, startTime, endTime, data) {
			var atom = new _AtomJs2['default'](flowPackage, startTime, endTime, data);
			this.graph.addNarrativeObject(atom);
			return atom;
		}

		/**
   * Removes an atom from the world context.
   * @param {Atom} atom
   */
	}, {
		key: 'removeAtom',
		value: function removeAtom(atom) {
			if (atom != undefined) {
				return this.graph.removeNarrativeObject(atom);
			}

			return false;
		}

		/**
   * Set the in point for an atom (this is where on its flow package it begins). 
   * @param {NarrativeObject} atomId 
   * @param {Number} inPointTime 
   */
	}, {
		key: 'setAtomInPoint',
		value: function setAtomInPoint(atomId, inPointTime) {
			var atom = this.getNarrativeObject(atomId);

			atom.setInPointTime(inPointTime);
		}

		/**
   * Set the out point for an atom (this is where on its flow package it ends).
   * @param {NarrativeObject} atomId 
   * @param {Number} outPointTime 
   */
	}, {
		key: 'setAtomOutPoint',
		value: function setAtomOutPoint(atomId, outPointTime) {
			var atom = this.getNarrativeObject(atomId);

			atom.setOutPointTime(outPointTime);
		}

		/**
      * Create a new group in the graph manager.
      * @param {any} data
      */
	}, {
		key: 'createGroup',
		value: function createGroup(data) {

			var group = new _GroupJs2['default'](data);
			this.graph.addNarrativeObject(group);
			return group;
		}

		/**
   * Remove a group from the graph manager.
   * @param {any} group - The group to remove.
   */
	}, {
		key: 'removeGroup',
		value: function removeGroup(group) {
			if (group != undefined) {
				// Remove the group Narrative Object from the graph.
				return this.graph.removeNarrativeObject(group);
			}

			return false;
		}

		/**
   * Create a layered narrative object on the world context.
   * @param {any} data
   */
	}, {
		key: 'createLayered',
		value: function createLayered(data) {
			var addMaster = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

			var layered = new _LayeredJs2['default'](data, addMaster);
			this.graph.addNarrativeObject(layered);
			return layered;
		}

		/**
   * Remove a layered narrative object from the world context.
   * @param {any} layered
   */
	}, {
		key: 'removeLayered',
		value: function removeLayered(layered) {
			if (layered != undefined) {
				return this.graph.removeNarrativeObject(layered);
			}

			return false;
		}

		/**
   * Adds an interaction to an atom.
   * @param {any} atom
   * @param {any} startTime
   * @param {any} endTime
   * @param {boolean} resetOutcomeOnStart Should the outcome of this interaction reset each time the interaction is called?
   */
	}, {
		key: 'addInteraction',
		value: function addInteraction(atom, startTime, endTime, resetOutcomeOnStart, data) {
			var interaction = atom.addInteraction(startTime, endTime, resetOutcomeOnStart, data);
			this.interactions[interaction.id] = interaction;
			return interaction.id;
		}
	}, {
		key: 'addInteractionAndSetId',
		value: function addInteractionAndSetId(atom, interactionId, startTime, endTime, resetOutcomeOnStart, data) {
			var interaction = atom.addInteraction(startTime, endTime, resetOutcomeOnStart, data);
			interaction.setId(interactionId);
			this.interactions[interactionId] = interaction;
			return interaction.id;
		}

		/**
   * Removes an interaction from an atom.
   * @param {any} atom
   * @param {any} interactionId
   */
	}, {
		key: 'removeInteraction',
		value: function removeInteraction(atom, interactionId) {
			if (this.hasInteraction(interactionId)) {
				atom.removeInteraction(this.interactions[interactionId]);
				this.interactions[interactionId].destroy();
				delete this.interactions[interactionId];

				return true;
			}

			return false;
		}

		/**
   * Query whether an interaction exists with the specified interaction id.
   * @param {number} interactionId 
   */
	}, {
		key: 'hasInteraction',
		value: function hasInteraction(interactionId) {
			return this.interactions.hasOwnProperty(interactionId);
		}

		/**
   * Get the interaction with the specified id.
   * @param {number} interactionId 
   */
	}, {
		key: 'getInteraction',
		value: function getInteraction(interactionId) {
			if (this.hasInteraction(interactionId)) {
				return this.interactions[interactionId];
			}

			return undefined;
		}

		/**
   * Get the outcome of an interaction from an interaction id.
   * @param {any} interactionId
   */
	}, {
		key: 'getInteractionOutcome',
		value: function getInteractionOutcome(interactionId) {
			if (this.interactions.hasOwnProperty(interactionId)) {
				return this.interactions[interactionId].outcome;
			}

			return undefined;
		}

		/**
   * Set the outcome of an interaction.
   * @param {any} interactionId
   * @param {any} outcome
   */
	}, {
		key: 'setInteractionComplete',
		value: function setInteractionComplete(interactionId) {
			var outcome = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];

			if (this.interactions.hasOwnProperty(interactionId)) {
				this.interactions[interactionId].setOutcome(outcome);

				return true;
			}

			return false;
		}

		/**
   * Reset the outcome of a specified interaction.
   * @param {number} interactionId 
   */
	}, {
		key: 'resetInteractionComplete',
		value: function resetInteractionComplete(interactionId) {
			if (this.interactions.hasOwnProperty(interactionId)) {
				this.interactions[interactionId].resetOutcome();
			}
		}

		/**
   * Add a function to the functions dictionary.
   * @param {any} function_type - Type of function, defined in FunctionTypes.
   * @param {any} function_name - Name of the function, which is used as the key of the function in the functions dictionary.
   * @param {any} function_body - The body of the function.
   */
	}, {
		key: 'addFunction',
		value: function addFunction(function_type, function_name, function_body) {
			// This is a sanity check against people deleting a pre-defined function type.
			// Re-add it if this has happened for some reason.
			if (!this.functions.hasOwnProperty(function_type)) {
				this.functions[function_type] = {};
			}

			this.functions[function_type][function_name] = function_body;
		}

		/**
   * Get a function defined in the functions dictionary.
   * @param {any} function_type - Type of function, defined in FunctionTypes.
   * @param {any} function_name - Name of the function defined in the functions dictionary.
   */
	}, {
		key: 'getFunction',
		value: function getFunction(function_type, function_name) {
			if (this.functions.hasOwnProperty(function_type)) {
				if (this.functions[function_type].hasOwnProperty(function_name)) {
					return this.functions[function_type][function_name];
				}
			}

			return undefined;
		}

		/**
   * Remove a function defined in the functions dictionary.
   * @param {any} function_type - Type of function, defined in FunctionTypes.
   * @param {any} function_name - Name of the function defined in the functions dictionary.
   */
	}, {
		key: 'removeFunction',
		value: function removeFunction(function_type, function_name) {
			if (this.functions.hasOwnProperty(function_type)) {
				if (this.functions[function_type].hasOwnProperty(function_name)) {
					delete this.functions[function_type][function_name];

					return true;
				}
			}

			return false;
		}

		/**
   * Get the matches inside an ontology which match the dictionary of possibilities passed.
   * @param {any} ontologyMatchDictionary
   * @param {any} possibleMatchAtoms
   */
	}, {
		key: 'getOntologyMatches',
		value: function getOntologyMatches(ontologyMatchDictionary, possibleMatchAtomIDs) {
			var matches = [];

			// For each ontology class name.
			for (var key in ontologyMatchDictionary) {
				// For each instance name.
				for (var i = 0; i < ontologyMatchDictionary[key].length; i++) {
					// Get the matching atoms of that class and instance.
					var narrativeObjectsInClassInstance = this.ontology.getNarrativeObjectsInClassInstance(key, ontologyMatchDictionary[key][i]);

					// For the returned values, find the ones which match.
					for (var j = 0; j < narrativeObjectsInClassInstance.length; j++) {
						for (var k = 0; k < possibleMatchAtomIDs.length; k++) {
							// Check if any of the returned atoms from the ontology
							// class instance are in the array of possible matches.
							if (possibleMatchAtomIDs[k] == narrativeObjectsInClassInstance[j].id) {
								matches.push(possibleMatchAtomIDs[k]);
							}
						}
					}
				}
			}

			return matches;
		}

		/**
      * Load default ontology classes to the ontology in the world context.
      */
	}, {
		key: 'loadDefaultOntologyClasses',
		value: function loadDefaultOntologyClasses() {
			this.ontology.loadDefaultClasses();

			var ontologyClassNames = this.ontology.getClassNames();
			for (var i = 0; i < ontologyClassNames.length; i++) {
				this.addOntologyClass(ontologyClassNames[i]);
			}
		}

		/**
   * Add an ontology class to the ontology in the world context.
   * @param {any} class_name
   */
	}, {
		key: 'addOntologyClass',
		value: function addOntologyClass(className) {
			this.ontology.addClass(className);
		}

		/**
   * Remove an ontology class from the ontology in the world context.
   * @param {any} class_name
   */
	}, {
		key: 'removeOntologyClass',
		value: function removeOntologyClass(className) {
			this.ontology.removeClass(className);
		}

		/**
   * Add an instance to an existing ontology class in the ontology in the world context.
   * @param {any} class_name
   * @param {any} instance_name
   */
	}, {
		key: 'addInstanceToOntologyClass',
		value: function addInstanceToOntologyClass(className, instanceName) {
			this.ontology.addInstanceToClass(className, instanceName);

			this.addContextVariable(className, instanceName);
		}

		/**
   * Remove an instance from an existing ontology class in the ontology in the world context.
   * @param {any} class_name
   * @param {any} instance_name
   */
	}, {
		key: 'removeInstanceFromOntologyClass',
		value: function removeInstanceFromOntologyClass(className, instanceName) {
			this.ontology.removeInstanceFromClass(className, instanceName);

			this.removeContextVariable(className, instanceName);
		}

		/**
   * Add a Narrative Object to an existing instance of an ontology class in the ontology in the world context.
   * @param {any} class_name
   * @param {any} instance_name
   * @param {any} narrative_object
   */
	}, {
		key: 'addNarrativeObjectToOntologyClassInstance',
		value: function addNarrativeObjectToOntologyClassInstance(className, instanceName, value, narrativeObject) {
			this.ontology.addNarrativeObjectToInstance(className, instanceName, value, narrativeObject);
		}

		/**
   * Remove a Narrative Object from an existing instance of an ontology class in the ontology in the world context.
   * @param {any} class_name
   * @param {any} instance_name
   * @param {any} narrative_object
   */
	}, {
		key: 'removeNarrativeObjectFromOntologyClassInstance',
		value: function removeNarrativeObjectFromOntologyClassInstance(className, instanceName, narrativeObject) {
			this.ontology.removeNarrativeObjectFromInstance(className, instanceName, narrativeObject);
		}

		/**
   * Add a context variable to the world context.
   * @param {any} className
   * @param {any} instanceName
   */
	}, {
		key: 'addContextVariable',
		value: function addContextVariable(className, instanceName) {
			if (!this.contextVariables.hasOwnProperty(className)) {
				this.contextVariables[className] = {};
			}

			if (!this.contextVariables[className].hasOwnProperty(instanceName)) {
				this.contextVariables[className][instanceName] = 0;
			}
		}

		/**
   * Remove a context variable from the world context.
   * @param {any} className
   * @param {any} instanceName
   */
	}, {
		key: 'removeContextVariable',
		value: function removeContextVariable(className, instanceName) {
			if (this.contextVariables.hasOwnProperty(className)) {
				if (this.contextVariables[className].hasOwnProperty(instanceName)) {
					delete this.contextVariables[className][instanceName];
				}

				if (Object.keys(this.contextVariables[className]).length == 0) {
					delete this.contextVariables[className];
				}
			}
		}

		/**
   * Get the value of a context variable on the world context.
   * @param {any} className
   * @param {any} instanceName
   */
	}, {
		key: 'getContextVariable',
		value: function getContextVariable(className, instanceName) {
			if (this.hasContextVariable(className, instanceName)) {
				return this.contextVariables[className][instanceName];
			}

			return undefined;
		}

		/**
   * Set the value of a context variable on the world context.
   * @param {any} className
   * @param {any} instanceName
   * @param {any} value
   */
	}, {
		key: 'setContextVariable',
		value: function setContextVariable(className, instanceName, value) {
			if (this.hasContextVariable(className, instanceName)) {
				this.contextVariables[className][instanceName] = value;
			}
		}

		/**
   * Returns whether the world context has a context variable matching the parameters passed.
   * @param {any} className
   * @param {any} instanceName
   */
	}, {
		key: 'hasContextVariable',
		value: function hasContextVariable(className, instanceName) {
			if (this.contextVariables.hasOwnProperty(className)) {
				if (this.contextVariables[className].hasOwnProperty(instanceName)) {
					return true;
				}
			}

			return false;
		}
	}, {
		key: 'callRenderUpdate',
		value: function callRenderUpdate() {
			this.graph.callRenderUpdate();
		}
	}, {
		key: 'setRenderUpdate',
		value: function setRenderUpdate(callback) {
			// Pass the callback through to the graph manager.
			// The graph manager then sets each graph to use it.
			this.graph.setRenderUpdate(callback);
		}
	}, {
		key: 'updateClock',
		value: function updateClock(clock_time) {
			this.graph.sequencer.playhead_clock = clock_time;
		}

		/**
   * Called when a flow package is loaded successfully.
   * @param {any} flowPackage
   */
	}, {
		key: 'onFlowPackageLoadedSuccess',
		value: function onFlowPackageLoadedSuccess(flowPackage, url) {
			delete this.initialisingFlowPackages[url];
			this.flowPackages[flowPackage.url] = flowPackage;
			this.checkStartProcessing();
		}

		/**
   * Called when a flow package is loaded unsuccessfully.
   * @param {any} flowPackage
   */
	}, {
		key: 'onFlowPackageLoadedFailure',
		value: function onFlowPackageLoadedFailure(url) {
			delete this.initialisingFlowPackages[url];
			this.checkStartProcessing();
		}

		/**
   * Check whether it is possible to start processing the graph on the world context.
   * This will return false if the flag has no been set to start processing or there
   * are flow packages which are currently initialising.
   */
	}, {
		key: 'checkStartProcessing',
		value: function checkStartProcessing() {
			// Check for the flag to show processing can start and check there is nothing initialising.
			if (this.processingStarted && Object.keys(this.initialisingFlowPackages).length == 0) {
				// This sets up the durations of all items in the graph.
				this.graph.initialise(this);

				if (this.onProcessingStartedCallback != undefined) {
					this.onProcessingStartedCallback();
				}

				this.graph.currentNarrativeObject = this.graph.getRoot();

				var graphOutput = [];

				this.graph.startProcessing(this);
			}
		}
	}, {
		key: 'isProcessing',
		value: function isProcessing() {
			return this.graph.isProcessing();
		}

		/**
   * Signals that the user is ready to start processing.
   * After calling this the only thing which will delay the start
   * of processing is the engine having flow packages initialising.
   * @param {any} callback
   */
	}, {
		key: 'startProcessing',
		value: function startProcessing(callback) {
			this.processingStarted = true;
			this.onProcessingStartedCallback = callback;
			this.checkStartProcessing();
		}

		/**
   * Creates and returns the id for a new sequencer thread.
   */
	}, {
		key: 'createSequencerThread',
		value: function createSequencerThread() {
			var duration = arguments.length <= 0 || arguments[0] === undefined ? Number.MAX_VALUE : arguments[0];

			return this.graph.sequencer.createThread(duration);
		}
	}]);

	return WorldContext;
})();

exports['default'] = WorldContext;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _NarrativeObjectJs = __webpack_require__(42);

var _NarrativeObjectJs2 = _interopRequireDefault(_NarrativeObjectJs);

var _AtomJs = __webpack_require__(50);

var _AtomJs2 = _interopRequireDefault(_AtomJs);

var _GroupJs = __webpack_require__(133);

var _GroupJs2 = _interopRequireDefault(_GroupJs);

var LayerType = {
	DEFAULT: "Default",
	MASTER: "Master"
};

exports.LayerType = LayerType;
/**
 * A layer within a {@link Layered} Narrative Object.
 * @constructor
 * @param {LayerType=} type - the type of layer (default is LayerType.DEFAULT).
 */

var Layer = (function () {
	function Layer() {
		var layerType = arguments.length <= 0 || arguments[0] === undefined ? LayerType.DEFAULT : arguments[0];

		_classCallCheck(this, Layer);

		this.id = this.generateId();

		this.layerType = layerType;
		this.narrativeObjects = {};
		this.rootNarrativeObjectID = undefined;

		Layer.instances.push(this);
	}

	_createClass(Layer, [{
		key: 'destroy',
		value: function destroy() {
			var removeIndex = Layer.instances.indexOf(this);

			if (removeIndex != -1) {
				Layer.instances.splice(removeIndex, 1);
			}
		}
	}, {
		key: 'generateId',
		value: function generateId() {
			// Start highest at -1 as 1 is added during return to increment. So 0 is the first returned value.
			var highestId = -1;

			for (var i = 0; i < Layer.instances.length; i++) {
				if (Layer.instances[i].id > highestId) {
					highestId = Layer.instances[i].id;
				}
			}

			return highestId + 1;
		}
	}, {
		key: 'setId',
		value: function setId(id) {
			this.id = id;
		}
	}, {
		key: 'isEmpty',
		value: function isEmpty() {
			return Object.keys(this.narrativeObjects).length == 0;
		}

		/**
   * 
   * Set the layer type
   * @param {LayerType} layerType 
   * @memberof Layer
   */
	}, {
		key: 'setLayerType',
		value: function setLayerType(layerType) {
			this.layerType = layerType;
		}

		/**
   * reset LayerType to LayerType.DEFAULT
   * 
   * @memberof Layer
   */
	}, {
		key: 'resetLayerType',
		value: function resetLayerType() {
			this.layerType = LayerType.DEFAULT;
		}

		/**
   * 
   * 
   * @returns {LayerType} 
   * @memberof Layer
   */
	}, {
		key: 'getLayerType',
		value: function getLayerType() {
			return this.layerType;
		}

		/**
   * Return whether this layer is the master layer.
   */
	}, {
		key: 'isMasterLayer',
		value: function isMasterLayer() {
			return this.layerType == LayerType.MASTER;
		}

		/**
   * Returns array containing the ids of all narrative objects in this layer.
   */
	}, {
		key: 'getAllNarrativeObjectIds',
		value: function getAllNarrativeObjectIds() {
			var ids = Object.keys(this.narrativeObjects);
			return ids;
		}

		/**
   * Adds an Atom to the Layer
   * 
   * @param {Atom} atom 
   * @memberof Layer
   */
	}, {
		key: 'addAtom',
		value: function addAtom(atom) {
			this._addNarrativeObject(atom);
		}

		/**
   * 
   * Removes an Atom from the Layer
   * @param {Atom} atom 
   * @returns {boolean} Indicates if Atom successfully removed.
   * @memberof Layer
   */
	}, {
		key: 'removeAtom',
		value: function removeAtom(atom) {
			return this.removeNarrativeObject(atom);
		}

		/**
   * Adds a Group to the Layer
   * 
   * @param {Group} group 
   * @memberof Layer
   */
	}, {
		key: 'addGroup',
		value: function addGroup(group) {
			this._addNarrativeObject(group);
		}

		/**
   * 
   * Removes a Group from the Layer
   * @param {Group} group 
   * @returns {boolean} Indicates if Group successfully removed.
   * @memberof Layer
   */
	}, {
		key: 'removeGroup',
		value: function removeGroup(group) {
			return this.removeNarrativeObject(group);
		}

		/**
   * @private
   * 
   * Add a narrative object to this layer.
   */
	}, {
		key: '_addNarrativeObject',
		value: function _addNarrativeObject(narrativeObject) {
			if (!this.narrativeObjects.hasOwnProperty(narrativeObject.id)) {
				this.narrativeObjects[narrativeObject.id] = narrativeObject.id;
			}
		}

		/**
   * @private
   * 
   * Remove a narrative object from this layer.
   */
	}, {
		key: 'removeNarrativeObject',
		value: function removeNarrativeObject(narrativeObject) {
			if (this.narrativeObjects.hasOwnProperty(narrativeObject.id)) {
				delete this.narrativeObjects[narrativeObject.id];

				return true;
			}

			return false;
		}

		/**
   * 
   * Gets a Narrative Object by its ID
   * @param {string} id 
   * @returns {NarrativeObject}
   * @memberof Layer
   */
	}, {
		key: 'getNarrativeObject',
		value: function getNarrativeObject(id) {
			if (this.narrativeObjects.hasOwnProperty(id)) {
				return this.narrativeObjects[id];
			}

			return undefined;
		}
	}, {
		key: 'hasNarrativeObject',
		value: function hasNarrativeObject(narrativeObject) {
			if (this.narrativeObjects.hasOwnProperty(narrativeObject.id)) {
				return true;
			}

			return false;
		}

		/**
   * 
   * Sets the root Narrative Object for the Layer
   * @param {NarrativeObject} rootNarrativeObject 
   * @returns {boolean} Indicates if root successfully set to the Narrative Object.
   * @memberof Layer
   */
	}, {
		key: 'setRootNarrativeObject',
		value: function setRootNarrativeObject(rootNarrativeObject) {
			if (rootNarrativeObject != undefined) {
				if (this.narrativeObjects.hasOwnProperty(rootNarrativeObject.id)) {
					this.rootNarrativeObjectID = this.narrativeObjects[rootNarrativeObject.id];

					return true;
				}
			}

			return false;
		}

		/**
   * 
   * returns the root Narrative Object ID for the Layer
   * @returns {NarrativeObject|undefined} 
   * @memberof Layer
   */
	}, {
		key: 'getRootNarrativeObjectId',
		value: function getRootNarrativeObjectId() {
			return this.rootNarrativeObjectID;
		}

		/**
   * Resets the root Narrative Object
   * 
   * @memberof Layer
   */
	}, {
		key: 'resetRootNarrativeObject',
		value: function resetRootNarrativeObject() {
			this.rootNarrativeObjectID = undefined;
		}

		/**
   * Return whether this layer has a root narrative object.
   */
	}, {
		key: 'hasRootNarrativeObject',
		value: function hasRootNarrativeObject() {
			return this.rootNarrativeObjectID != undefined;
		}
	}, {
		key: 'initialise',
		value: function initialise(worldContext) {
			for (var key in this.narrativeObjects) {
				var narrativeObject = worldContext.getNarrativeObject(key);

				if (narrativeObject != undefined) {
					narrativeObject.initialise(worldContext);
				}
			}
		}
	}]);

	return Layer;
})();

exports['default'] = Layer;

Layer.instances = [];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var g;

// This works in non-strict mode
g = (function () {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = !__webpack_require__(6) && !__webpack_require__(3)(function () {
  return Object.defineProperty(__webpack_require__(67)('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = __webpack_require__(5);

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(14);
var toIObject = __webpack_require__(15);
var arrayIndexOf = __webpack_require__(52)(false);
var IE_PROTO = __webpack_require__(69)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(7);
var anObject = __webpack_require__(1);
var getKeys = __webpack_require__(34);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


var toIObject = __webpack_require__(15);
var gOPN = __webpack_require__(37).f;
var toString = ({}).toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(34);
var gOPS = __webpack_require__(53);
var pIE = __webpack_require__(48);
var toObject = __webpack_require__(9);
var IObject = __webpack_require__(47);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(3)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  }return T;
} : $assign;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(10);
var isObject = __webpack_require__(4);
var invoke = __webpack_require__(104);
var arraySlice = [].slice;
var factories = {};

var construct = function construct(F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  }return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function bound() /* args... */{
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// fast apply, http://jsperf.lnkit.com/fast-apply/5


module.exports = function (fn, args, that) {
                  var un = that === undefined;
                  switch (args.length) {
                                    case 0:
                                                      return un ? fn() : fn.call(that);
                                    case 1:
                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
                                    case 2:
                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                                    case 3:
                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                                    case 4:
                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                  }return fn.apply(that, args);
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $parseInt = __webpack_require__(2).parseInt;
var $trim = __webpack_require__(44).trim;
var ws = __webpack_require__(73);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
} : $parseInt;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $parseFloat = __webpack_require__(2).parseFloat;
var $trim = __webpack_require__(44).trim;

module.exports = 1 / $parseFloat(__webpack_require__(73) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cof = __webpack_require__(20);
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.1.2.3 Number.isInteger(number)


var isObject = __webpack_require__(4);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.20 Math.log1p(x)


module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.16 Math.fround(x)


var sign = __webpack_require__(76);
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function roundTiesToEven(n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// call something on iterator step with safe closing on error


var anObject = __webpack_require__(1);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFunction = __webpack_require__(10);
var toObject = __webpack_require__(9);
var IObject = __webpack_require__(47);
var toLength = __webpack_require__(8);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (; isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(9);
var toAbsoluteIndex = __webpack_require__(35);
var toLength = __webpack_require__(8);

module.exports = [].copyWithin || function copyWithin(target, /* = 0 */start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];else delete O[to];
    to += inc;
    from += inc;
  }return O;
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (done, value) {
  return { value: value, done: !!done };
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.2.5.3 get RegExp.prototype.flags()


if (__webpack_require__(6) && /./g.flags != 'g') __webpack_require__(7).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(57)
});

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(91);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(119);
var validate = __webpack_require__(46);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(61)(MAP, function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(7).f;
var create = __webpack_require__(36);
var redefineAll = __webpack_require__(41);
var ctx = __webpack_require__(19);
var anInstance = __webpack_require__(39);
var forOf = __webpack_require__(40);
var $iterDefine = __webpack_require__(79);
var step = __webpack_require__(114);
var setSpecies = __webpack_require__(38);
var DESCRIPTORS = __webpack_require__(6);
var fastKey = __webpack_require__(29).fastKey;
var validate = __webpack_require__(46);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function getEntry(that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type
      that._i = create(null); // index
      that._f = undefined; // first entry
      that._l = undefined; // last entry
      that[SIZE] = 0; // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function _delete(key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function get() {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
      // create new entry
    } else {
        that._l = entry = {
          i: index = fastKey(key, true), // <- index
          k: key, // <- key
          v: value, // <- value
          p: prev = that._l, // <- previous entry
          n: undefined, // <- next entry
          r: false // <- removed
        };
        if (!that._f) that._f = entry;
        if (prev) prev.n = entry;
        that[SIZE]++;
        // add to index
        if (index !== 'F') that._i[index] = entry;
      }return that;
  },
  getEntry: getEntry,
  setStrong: function setStrong(C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind; // kind
      this._l = undefined; // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(119);
var validate = __webpack_require__(46);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(61)(SET, function (get) {
  return function Set() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(26)(0);
var redefine = __webpack_require__(12);
var meta = __webpack_require__(29);
var assign = __webpack_require__(102);
var weak = __webpack_require__(122);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var validate = __webpack_require__(46);
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function wrapper(get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(61)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () {
  return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7;
})) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
        // store all the rest on native weakmap
      }return method.call(this, a, b);
    });
  });
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(41);
var getWeak = __webpack_require__(29).getWeak;
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var anInstance = __webpack_require__(39);
var forOf = __webpack_require__(40);
var createArrayMethod = __webpack_require__(26);
var $has = __webpack_require__(14);
var validate = __webpack_require__(46);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function UncaughtFrozenStore() {
  this.a = [];
};
var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function get(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function has(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function set(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;else this.a.push([key, value]);
  },
  'delete': function _delete(key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !! ~index;
  }
};

module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type
      that._i = id++; // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function _delete(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://tc39.github.io/ecma262/#sec-toindex


var toInteger = __webpack_require__(24);
var toLength = __webpack_require__(8);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// all object keys, includes non-enumerable and symbols


var gOPN = __webpack_require__(37);
var gOPS = __webpack_require__(53);
var anObject = __webpack_require__(1);
var Reflect = __webpack_require__(2).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(54);
var isObject = __webpack_require__(4);
var toLength = __webpack_require__(8);
var ctx = __webpack_require__(19);
var IS_CONCAT_SPREADABLE = __webpack_require__(5)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-string-pad-start-end


var toLength = __webpack_require__(8);
var repeat = __webpack_require__(75);
var defined = __webpack_require__(23);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getKeys = __webpack_require__(34);
var toIObject = __webpack_require__(15);
var isEnum = __webpack_require__(48).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    }return result;
  };
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/DavidBruant/Map-Set.prototype.toJSON


var classof = __webpack_require__(49);
var from = __webpack_require__(129);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forOf = __webpack_require__(40);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://rwaldron.github.io/proposal-math-extensions/


module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (arguments.length === 0
  // eslint-disable-next-line no-self-compare
   || x != x
  // eslint-disable-next-line no-self-compare
   || inLow != inLow
  // eslint-disable-next-line no-self-compare
   || inHigh != inHigh
  // eslint-disable-next-line no-self-compare
   || outLow != outLow
  // eslint-disable-next-line no-self-compare
   || outHigh != outHigh) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _AtomJs = __webpack_require__(50);

var _AtomJs2 = _interopRequireDefault(_AtomJs);

var global_Thread_ID = 0;

var Sequencer = (function () {
	function Sequencer() {
		_classCallCheck(this, Sequencer);

		this.currently_processing = false;
		this.playhead_clock = 0;
		this.next_sequence_time = 0;
		this.sequence = [];
		this.threads = {};
		this.mainThreadId = this._createMainThread();
		this.startNewSequence();
	}

	_createClass(Sequencer, [{
		key: "startNewSequence",
		value: function startNewSequence() {
			this.current_sequence = {
				videos: [],
				interactions: []
			};
		}
	}, {
		key: "endCurrentSequence",
		value: function endCurrentSequence() {
			this.sequence.push(this.current_sequence);
			this.startNewSequence();
		}
	}, {
		key: "processAtom",
		value: function processAtom(atom, threadId) {
			// Get the sequencer thread to be pushed to.
			var thread = this.threads[threadId];

			// Add on the wait time. This is clamped to maxTime for the thread.
			thread.addTime(atom.waitBeforeStartDuration);

			if (!thread.atMaxTime()) {
				this.startNewSequence();

				// Start time is the current thread time.
				var startTime = thread.time;

				// End time is the current thread time plus the duration.
				var endTime = Math.min(startTime + atom.duration, thread.maxTime);

				this.current_sequence.videos.push({
					id: atom.id,
					url: atom.flowPackage.url,
					type: atom.flowPackage.mediaType,
					data: atom.data,
					start: startTime,
					end: endTime,
					offset: atom.startTime
				});

				if (atom.hasInteractions()) {
					this.processInteractions(atom, threadId);
				}

				// Step the sequencer clock forward by the duration of the atom.
				thread.addTime(atom.duration);

				this.endCurrentSequence();

				return true;
			}

			return false;
		}
	}, {
		key: "processInteractions",
		value: function processInteractions(atom, threadId) {
			for (var i = 0; i < atom.interactions.length; i++) {
				var interaction = atom.interactions[i];
				// Ensure that the interaction is within the bounds of the atoms clipped flow package timeline.
				if (interaction.isActive(atom.startTime, atom.endTime)) {
					var startTime = this.threads[threadId].time + interaction.start;
					var endTime = this.threads[threadId].time + interaction.start + interaction.duration;
					this.current_sequence.interactions.push({
						type: "start",
						time: startTime,
						data: interaction.data,
						id: interaction.id
					});
					this.current_sequence.interactions.push({
						type: "end",
						time: endTime,
						data: interaction.data,
						id: interaction.id
					});
				}
			}
		}
	}, {
		key: "mostRecentSequence",
		value: function mostRecentSequence() {
			return this.sequence.length > 0 ? this.sequence[this.sequence.length - 1] : "";
		}
	}, {
		key: "_createMainThread",
		value: function _createMainThread() {
			// Create thread with start time of zero and maximum possible length.
			return this._createThreadInternal(0, Number.MAX_VALUE);
		}
	}, {
		key: "_createThreadInternal",
		value: function _createThreadInternal(threadStartTime, duration) {
			var threadId = global_Thread_ID++;

			this.threads[threadId] = { time: threadStartTime, maxTime: threadStartTime + duration,
				addTime: function addTime(time) {
					this.time = Math.min(this.maxTime, this.time + time);
				},
				atMaxTime: function atMaxTime() {
					return this.time >= this.maxTime;
				},
				getRemainingTime: function getRemainingTime() {
					return this.maxTime - this.time;
				}
			};

			return threadId;
		}
	}, {
		key: "createThread",
		value: function createThread() {
			var duration = arguments.length <= 0 || arguments[0] === undefined ? Number.MAX_VALUE : arguments[0];

			// Create and return a new thread with start time of the current point of the main thread and duration.
			return this._createThreadInternal(this.threads[this.mainThreadId].time, duration);
		}
	}, {
		key: "sendToThread",
		value: function sendToThread(atom, threadId) {
			if (this.threads.hasOwnProperty(threadId)) {
				return this.processAtom(atom, threadId);
			}

			return false;
		}
	}, {
		key: "getMainThreadId",
		value: function getMainThreadId() {
			return this.mainThreadId;
		}
	}, {
		key: "lockProcessing",
		value: function lockProcessing() {
			this.currently_processing = true;
		}
	}, {
		key: "unlockProcessing",
		value: function unlockProcessing() {
			this.currently_processing = false;
		}
	}, {
		key: "isUnlocked",
		value: function isUnlocked() {
			return !this.currently_processing;
		}
	}]);

	return Sequencer;
})();

exports["default"] = Sequencer;
module.exports = exports["default"];

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logTypeOn = {
	error: true,
	warning: true,
	info: true,
	alert: true
};

/**
 * Enum describing the Logging levels for the meesenger.
 * @readonly
 * @enum {string}
 * @property {string} ERROR error
 * @property {string} WARNING warning
 * @property {string} INFO info
 * @property {string} ALERT alert
 */
var LogType = {
	ERROR: "error",
	WARNING: "warning",
	INFO: "info",
	ALERT: "alert"
};

exports.LogType = LogType;
/**
 * A (Static) logging class for generating error/info messgaes
 */

var Messenger = (function () {
	function Messenger() {
		_classCallCheck(this, Messenger);
	}

	_createClass(Messenger, null, [{
		key: "Log",

		/**
   *
   * @param {LogType} logtype - type of log to output.
   * @param {Object} data - the data to log.
   */
		value: function Log(logtype, data) {
			if (logTypeOn[logtype] == true) {
				console.log(_defineProperty({}, logtype, data));
			}
		}

		/**
   *
   * @param {LogType} logtype - type of log to (de)activate.
   * @param {boolen} isOn - set log type active or not.
   */
	}, {
		key: "SetLogType",
		value: function SetLogType(logtype, isOn) {
			logTypeOn[logtype] = isOn;
		}

		/**
   * Add an event handler callback.
   * @param {LogType} logType - The type of event which should trigger this event handler callback.
   * @param {function} eventHandlerFunctionBody - A function body which is called when the associated log type is called.
   */
	}, {
		key: "addEventHandler",
		value: function addEventHandler(logType, eventHandlerFunctionBody) {
			if (!_hasEventHandler(logType)) {
				Messenger.prototype.eventHandlers[logType] = [];
			}

			Messenger.prototype.eventHandlers[logType].push(eventHandlerFunctionBody);
		}

		/**
   * Remove a previously added event handler callback.
   * @param {LogType} logType - The type of event the existing event handler callback was registered to.
   * @param {function} eventHandlerFunction - The function body which was registered to the existing event handler callback.
   */
	}, {
		key: "removeEventHandler",
		value: function removeEventHandler(logType, eventHandlerFunction) {
			if (_hasEventHandler(logType)) {
				var removeIndex = Messenger.prototype.eventHandlers[logType].indexOf(eventHandlerFunction);

				if (removeIndex != -1) {
					Messenger.prototype.eventHandlers[logType].splice(removeIndex, 1);

					return true;
				}
			}

			return false;
		}

		/**
   * @private
   * Invokes the event handler callbacks registered to the passed log type.
   */
	}, {
		key: "_invokeEventHandler",
		value: function _invokeEventHandler(logType) {
			if (_hasEventHandler(logType)) {
				for (var i = 0; i < Messenger.prototype.eventHandlers[logType]; i++) {
					Messenger.prototype.eventHandlers[logType][i]();
				}
			}
		}

		/**
   * @private
   * Check if the passed log type exists in the event handler dictionary.
   */
	}, {
		key: "_hasEventHandler",
		value: function _hasEventHandler(logType) {
			if (Messenger.prototype.eventHandlers.hasOwnProperty(logType)) {
				return true;
			}

			return false;
		}
	}]);

	return Messenger;
})();

exports["default"] = Messenger;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _NarrativeObjectJs = __webpack_require__(42);

var _NarrativeObjectJs2 = _interopRequireDefault(_NarrativeObjectJs);

var _AtomJs = __webpack_require__(50);

var _AtomJs2 = _interopRequireDefault(_AtomJs);

var _SelectionRulesJs = __webpack_require__(134);

var _SelectionRulesJs2 = _interopRequireDefault(_SelectionRulesJs);

var _WorldContextJs = __webpack_require__(94);

/**
 * @global
 * @description A custom defined function for selecting an {@link Atom} from a {@link Group}.
 * @function GroupSelectionFunction
 * @param {Atom[]} atoms - The atoms present in the group.
 * @param {WorldContext} worldContext - The world context.
 * @returns {Atom} The Atom selected to play next in the sequence.
 */

/**
 * A Group Narrative Object structue. 
 * @tutorial 4_group
 * @extends {NarrativeObject}
 * @constructor
 * @param {object=} data - Data associated with the group.
 */

var Group = (function (_NarrativeObject) {
	_inherits(Group, _NarrativeObject);

	function Group() {
		var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		_classCallCheck(this, Group);

		_get(Object.getPrototypeOf(Group.prototype), 'constructor', this).call(this, data);
		this.narrativeObjects = [];
		this.type = _NarrativeObjectJs.NarrativeObjectTypes.GROUP;
		// This object stores played group members and is only used for termination functions.
		this.playedNarrativeObjects = {};
		this.terminate_condition = _WorldContextJs.TerminationFunctionTypes.ALL_PLAYED;
		this.playCount = 0;
		this.terminationPlayCount = 0;
		// Selection candidates contains all narrative objects eligible for selection by selection function.
		this.selectionFunctionCandidates = [];
		this.selectionFunction = undefined;
		// Call resetSelectionFunction to set to default value.
		this.resetSelectionFunction();
		this.selectionRules = new _SelectionRulesJs2['default']();
	}

	/**
  * Add an atom to the group.
  * @param {Atom} atom The atom to be added.
  * @returns {boolean} Indicates whether the operation was successful.
  */

	_createClass(Group, [{
		key: 'addAtom',
		value: function addAtom(atom) {
			return this._addNarrativeObject(atom);
		}

		/**
   * Remove an atom from the group.
   * @param {Atom} atom The atom to be removed.
   * @returns {boolean} Indicates whether the operation was successful.
   */
	}, {
		key: 'removeAtom',
		value: function removeAtom(atom) {
			return this.removeNarrativeObject(atom);
		}

		/**
   * Add a group the group.
   * @param {Group} group The group to be added.
   * @returns {boolean} Indicates whether the operation was successful.
   */
	}, {
		key: 'addGroup',
		value: function addGroup(group) {
			return this._addNarrativeObject(group);
		}

		/**
   * Remove a group from the group.
   * @param {Group} group The group to be removed.
   * @returns {boolean} Indicates whether the operation was successful.
   */
	}, {
		key: 'removeGroup',
		value: function removeGroup(group) {
			return this.removeNarrativeObject(group);
		}

		/**
   * Add a layered object to the group.
   * @param {Layered} layered 
   */
	}, {
		key: 'addLayered',
		value: function addLayered(layered) {
			return this._addNarrativeObject(layered);
		}

		/**
   * Remove a layered object from the group.
   * @param {Layered} layered 
   */
	}, {
		key: 'removeLayered',
		value: function removeLayered(layered) {
			return this.removeNarrativeObject(layered);
		}

		/**
  * @private
  * Adds a narrative object to the group.
  */
	}, {
		key: '_addNarrativeObject',
		value: function _addNarrativeObject(narrativeObject) {
			var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			if (!this.hasNarrativeObject(narrativeObject)) {
				this.narrativeObjects.push(narrativeObject.id);

				return true;
			}

			return false;
		}

		/**
  * Removes a narrative object from the Group.
   * @param {NarrativeObject} narrativeObject Narrative object to be removed.
  * @returns {boolean} Indicates if narrative object was successfully removed from the Group.
  */
	}, {
		key: 'removeNarrativeObject',
		value: function removeNarrativeObject(narrativeObject) {
			// Check to see if the atom is in the array.
			var removeIndex = this.narrativeObjects.indexOf(narrativeObject.id);

			// If the atom is in the array, remove it.
			if (removeIndex != -1) {
				// Remove it as a selection candidate if removing.
				if (this.hasSelectionFunctionCandidate(narrativeObject)) {
					this.removeSelectionFunctionCandidate(narrativeObject);
				}

				this.narrativeObjects.splice(removeIndex, 1);

				return true;
			}

			return false;
		}

		/**
   * Checks if a narrative object exists within a Group.
   * @param {NarrativeObject} narrativeObject Narrative object to check.
   * @returns {boolean}  Indicates if narrative object exists within the group.
   * @memberof Group
   */
	}, {
		key: 'hasNarrativeObject',
		value: function hasNarrativeObject(narrativeObject) {
			return this.narrativeObjects.indexOf(narrativeObject.id) != -1;
		}

		/**
   * Get the id of all atoms contained within this group.
   */
	}, {
		key: 'getAllNarrativeObjectIds',
		value: function getAllNarrativeObjectIds() {
			return this.narrativeObjects;
		}

		/**
   * Sets the {@link GroupSelectionFunction} to use when processing.
   * @param  {GroupSelectionFunction} gFunc A selection function to be called during processing.
  * @param {string} name for the function.
   */
	}, {
		key: 'setSelectionFunction',
		value: function setSelectionFunction(selectionFunction, functionName) {
			if (selectionFunction != undefined) {
				this.selectionFunction = selectionFunction;
			}

			this.data[_NarrativeObjectJs.FunctionTypes.GROUP_SELECTION] = functionName;
		}

		/**
   * Resets the{@link GroupSelectionFunction} back to the default (select random Narrative Objects).
   */
	}, {
		key: 'resetSelectionFunction',
		value: function resetSelectionFunction() {
			this.selectionFunction = function (atomIDs, world_context) {
				return this.selectionRules.randomAtom(atomIDs);
			};

			this.data[_NarrativeObjectJs.FunctionTypes.GROUP_SELECTION] = undefined;
		}

		/**
   * Add a narrative object as a selection candidate for this group.
   * @param {NarrativeObject} narrativeObject 
   */
	}, {
		key: 'addSelectionFunctionCandidate',
		value: function addSelectionFunctionCandidate(narrativeObject) {
			if (!this.hasSelectionFunctionCandidate(narrativeObject)) {
				this.selectionFunctionCandidates.push(narrativeObject.id);
			}
		}

		/**
   * Remove a narrative object as a selection candidate for this group.
   * @param {NarrativeObject} narrativeObject 
   */
	}, {
		key: 'removeSelectionFunctionCandidate',
		value: function removeSelectionFunctionCandidate(narrativeObject) {
			if (this.hasSelectionFunctionCandidate(narrativeObject)) {
				var removeIndex = this.selectionFunctionCandidates.indexOf(narrativeObject.id);

				this.selectionFunctionCandidates.splice(removeIndex, 1);
			}
		}

		/**
   * Check if a narrative object is already eligible for selection in this group.
   * @param {NarrativeObject} narrativeObject 
   */
	}, {
		key: 'hasSelectionFunctionCandidate',
		value: function hasSelectionFunctionCandidate(narrativeObject) {
			return this.selectionFunctionCandidates.indexOf(narrativeObject.id) != -1;
		}

		/**
   * Get all the selection function candidates for this group.
   */
	}, {
		key: 'getAllSelectionFunctionCandidateIds',
		value: function getAllSelectionFunctionCandidateIds() {
			return this.selectionFunctionCandidates;
		}

		/**
   * Toggles a narrative object to either become, or be removed as, a selection function candidate.
   * @param {NarrativeObject} narrativeObject 
   */
	}, {
		key: 'toggleSelectionFunctionCandidate',
		value: function toggleSelectionFunctionCandidate(narrativeObject) {
			if (this.hasSelectionFunctionCandidate(narrativeObject)) {
				this.removeSelectionFunctionCandidate(narrativeObject);
			} else {
				this.addSelectionFunctionCandidate(narrativeObject);
			}
		}

		// Set the termination condition of the group.
	}, {
		key: 'setTerminationCondition',
		value: function setTerminationCondition(terminationCondition) {
			for (var key in _WorldContextJs.TerminationFunctionTypes) {
				if (_WorldContextJs.TerminationFunctionTypes[key] == terminationCondition) {
					this.terminate_condition = terminationCondition;

					break;
				}
			}
		}

		/**
   * Sets the Group's Termination Condition to be TerminationFunctionTypes.PLAY_COUNT
   * 
   * @param {number} count The number of Narrative Objects to play before termination
   * @memberof Group
   */
	}, {
		key: 'setTerminationPlaycount',
		value: function setTerminationPlaycount(count) {
			this.terminationPlayCount = count;
		}
	}, {
		key: 'terminate',
		value: function terminate() {
			switch (this.terminate_condition) {
				case _WorldContextJs.TerminationFunctionTypes.ALL_PLAYED:

					//return (this.playedNarrativeObjects.length == this.narrativeObjects.length);

					return Object.keys(this.playedNarrativeObjects).length == this.selectionFunctionCandidates.length;

				case _WorldContextJs.TerminationFunctionTypes.PLAY_COUNT:

					return this.playCount >= this.terminationPlayCount;

				case _WorldContextJs.TerminationFunctionTypes.IMMEDIATELY:
				default:

					return true;
			}
		}
	}, {
		key: 'initialise',
		value: function initialise(worldContext) {
			for (var i = 0; i < this.narrativeObjects.length; i++) {
				worldContext.getNarrativeObject(this.narrativeObjects[i]).initialise(worldContext);
			}
		}
	}, {
		key: 'process',
		value: regeneratorRuntime.mark(function process(stepIterator, stopIterator, worldContext, sendToSequencer, sequencerThreadId) {
			var selectedNarrativeObject, outputId, outputNarrativeObject;
			return regeneratorRuntime.wrap(function process$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						console.log("Process Group Started");

						console.log("Group Selection Started");

						this.hasPlayed = true;

						this.playCount = 0;

						// Reset played narrative objects list as reprocessing this.
						this.playedNarrativeObjects = {};

					case 5:
						if (this.terminate()) {
							context$2$0.next = 17;
							break;
						}

						selectedNarrativeObject = this.selectionFunction(worldContext.getNarrativeObjects(this.selectionFunctionCandidates), worldContext);

						if (!(selectedNarrativeObject != undefined)) {
							context$2$0.next = 14;
							break;
						}

						this.playCount++;

						console.log("Group Selected id: " + selectedNarrativeObject.id);
						return context$2$0.delegateYield(selectedNarrativeObject.process(stepIterator, stopIterator, worldContext, sendToSequencer, sequencerThreadId), 't0', 11);

					case 11:

						if (!this.playedNarrativeObjects.hasOwnProperty(selectedNarrativeObject.id)) {
							this.playedNarrativeObjects[selectedNarrativeObject.id] = selectedNarrativeObject;
						}
						context$2$0.next = 15;
						break;

					case 14:
						// Invalid selection, terminate.
						this.terminate_condition = _WorldContextJs.TerminationFunctionTypes.IMMEDIATELY;

					case 15:
						context$2$0.next = 5;
						break;

					case 17:

						console.log("Group Selection Finished");

						// Check to see if we should wait a frame (allowing sequencer to process passed data to this point).

						if (!worldContext.graph.processedMaxNarrativeObjects()) {
							context$2$0.next = 22;
							break;
						}

						worldContext.graph.resetProcessCount();
						context$2$0.next = 22;
						return this.wait(stepIterator);

					case 22:
						outputId = this.selectOutput(worldContext);

						if (!(outputId != _NarrativeObjectJs2['default'].terminate)) {
							context$2$0.next = 27;
							break;
						}

						outputNarrativeObject = worldContext.getNarrativeObject(outputId);

						if (!(outputNarrativeObject != undefined)) {
							context$2$0.next = 27;
							break;
						}

						return context$2$0.delegateYield(outputNarrativeObject.process(stepIterator, stopIterator, worldContext, sendToSequencer, sequencerThreadId), 't1', 27);

					case 27:

						console.log("Process Group Finished");

					case 28:
					case 'end':
						return context$2$0.stop();
				}
			}, process, this);
		})
	}]);

	return Group;
})(_NarrativeObjectJs2['default']);

exports['default'] = Group;
module.exports = exports['default'];

// If the selection returns nothing valid.
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)))

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SelectionRule = (function () {
    function SelectionRule() {
        _classCallCheck(this, SelectionRule);
    }

    _createClass(SelectionRule, [{
        key: "notPlayed",
        value: function notPlayed(atoms) {
            return atoms.filter(function (atom) {
                return atom.hasPlayed == false;
            });
        }
    }, {
        key: "randomAtom",
        value: function randomAtom(atoms) {
            var random = Math.floor(Math.random() * atoms.length);
            console.log("randomAtom selection : " + random);
            return atoms[random];
        }
    }]);

    return SelectionRule;
})();

exports["default"] = SelectionRule;
module.exports = exports["default"];

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(136);
module.exports = __webpack_require__(338);


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(137);

__webpack_require__(334);

__webpack_require__(335);

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(96)))

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(138);
__webpack_require__(140);
__webpack_require__(141);
__webpack_require__(142);
__webpack_require__(143);
__webpack_require__(144);
__webpack_require__(145);
__webpack_require__(146);
__webpack_require__(147);
__webpack_require__(148);
__webpack_require__(149);
__webpack_require__(150);
__webpack_require__(151);
__webpack_require__(152);
__webpack_require__(153);
__webpack_require__(154);
__webpack_require__(156);
__webpack_require__(157);
__webpack_require__(158);
__webpack_require__(159);
__webpack_require__(160);
__webpack_require__(161);
__webpack_require__(162);
__webpack_require__(163);
__webpack_require__(164);
__webpack_require__(165);
__webpack_require__(166);
__webpack_require__(167);
__webpack_require__(168);
__webpack_require__(169);
__webpack_require__(170);
__webpack_require__(171);
__webpack_require__(172);
__webpack_require__(173);
__webpack_require__(174);
__webpack_require__(175);
__webpack_require__(176);
__webpack_require__(177);
__webpack_require__(178);
__webpack_require__(179);
__webpack_require__(180);
__webpack_require__(181);
__webpack_require__(182);
__webpack_require__(183);
__webpack_require__(184);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(187);
__webpack_require__(188);
__webpack_require__(189);
__webpack_require__(190);
__webpack_require__(191);
__webpack_require__(192);
__webpack_require__(193);
__webpack_require__(194);
__webpack_require__(195);
__webpack_require__(196);
__webpack_require__(197);
__webpack_require__(198);
__webpack_require__(199);
__webpack_require__(200);
__webpack_require__(201);
__webpack_require__(202);
__webpack_require__(203);
__webpack_require__(204);
__webpack_require__(205);
__webpack_require__(206);
__webpack_require__(207);
__webpack_require__(208);
__webpack_require__(209);
__webpack_require__(210);
__webpack_require__(211);
__webpack_require__(212);
__webpack_require__(213);
__webpack_require__(214);
__webpack_require__(215);
__webpack_require__(216);
__webpack_require__(218);
__webpack_require__(219);
__webpack_require__(221);
__webpack_require__(222);
__webpack_require__(223);
__webpack_require__(224);
__webpack_require__(225);
__webpack_require__(226);
__webpack_require__(227);
__webpack_require__(229);
__webpack_require__(230);
__webpack_require__(231);
__webpack_require__(232);
__webpack_require__(233);
__webpack_require__(234);
__webpack_require__(235);
__webpack_require__(236);
__webpack_require__(237);
__webpack_require__(238);
__webpack_require__(239);
__webpack_require__(240);
__webpack_require__(241);
__webpack_require__(88);
__webpack_require__(242);
__webpack_require__(243);
__webpack_require__(115);
__webpack_require__(244);
__webpack_require__(245);
__webpack_require__(246);
__webpack_require__(247);
__webpack_require__(248);
__webpack_require__(118);
__webpack_require__(120);
__webpack_require__(121);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(251);
__webpack_require__(252);
__webpack_require__(253);
__webpack_require__(254);
__webpack_require__(255);
__webpack_require__(256);
__webpack_require__(257);
__webpack_require__(258);
__webpack_require__(259);
__webpack_require__(260);
__webpack_require__(261);
__webpack_require__(262);
__webpack_require__(263);
__webpack_require__(264);
__webpack_require__(265);
__webpack_require__(266);
__webpack_require__(267);
__webpack_require__(268);
__webpack_require__(269);
__webpack_require__(270);
__webpack_require__(271);
__webpack_require__(272);
__webpack_require__(273);
__webpack_require__(274);
__webpack_require__(275);
__webpack_require__(276);
__webpack_require__(277);
__webpack_require__(278);
__webpack_require__(279);
__webpack_require__(280);
__webpack_require__(281);
__webpack_require__(282);
__webpack_require__(283);
__webpack_require__(284);
__webpack_require__(285);
__webpack_require__(286);
__webpack_require__(287);
__webpack_require__(288);
__webpack_require__(289);
__webpack_require__(290);
__webpack_require__(291);
__webpack_require__(292);
__webpack_require__(293);
__webpack_require__(294);
__webpack_require__(295);
__webpack_require__(296);
__webpack_require__(297);
__webpack_require__(298);
__webpack_require__(299);
__webpack_require__(300);
__webpack_require__(301);
__webpack_require__(302);
__webpack_require__(303);
__webpack_require__(304);
__webpack_require__(305);
__webpack_require__(306);
__webpack_require__(307);
__webpack_require__(308);
__webpack_require__(309);
__webpack_require__(310);
__webpack_require__(311);
__webpack_require__(312);
__webpack_require__(313);
__webpack_require__(314);
__webpack_require__(315);
__webpack_require__(316);
__webpack_require__(317);
__webpack_require__(318);
__webpack_require__(319);
__webpack_require__(320);
__webpack_require__(321);
__webpack_require__(322);
__webpack_require__(323);
__webpack_require__(324);
__webpack_require__(325);
__webpack_require__(326);
__webpack_require__(327);
__webpack_require__(328);
__webpack_require__(329);
__webpack_require__(330);
__webpack_require__(331);
__webpack_require__(332);
__webpack_require__(333);
module.exports = __webpack_require__(18);

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(12);
var META = __webpack_require__(29).KEY;
var $fails = __webpack_require__(3);
var shared = __webpack_require__(51);
var setToStringTag = __webpack_require__(43);
var uid = __webpack_require__(33);
var wks = __webpack_require__(5);
var wksExt = __webpack_require__(98);
var wksDefine = __webpack_require__(68);
var enumKeys = __webpack_require__(139);
var isArray = __webpack_require__(54);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var toIObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(22);
var createDesc = __webpack_require__(32);
var _create = __webpack_require__(36);
var gOPNExt = __webpack_require__(101);
var $GOPD = __webpack_require__(16);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(34);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = ({}).propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', { value: 7 }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    }return setSymbolDesc(it, key, D);
  }return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(37).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(48).f = $propertyIsEnumerable;
  __webpack_require__(53).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(30)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols =
// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// all enumerable object keys, includes symbols


var getKeys = __webpack_require__(34);
var gOPS = __webpack_require__(53);
var pIE = __webpack_require__(48);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  }return result;
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(36) });

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(7).f });

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperties: __webpack_require__(100) });

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)


var toIObject = __webpack_require__(15);
var $getOwnPropertyDescriptor = __webpack_require__(16).f;

__webpack_require__(25)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.2.9 Object.getPrototypeOf(O)


var toObject = __webpack_require__(9);
var $getPrototypeOf = __webpack_require__(17);

__webpack_require__(25)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.2.14 Object.keys(O)


var toObject = __webpack_require__(9);
var $keys = __webpack_require__(34);

__webpack_require__(25)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.2.7 Object.getOwnPropertyNames(O)


__webpack_require__(25)('getOwnPropertyNames', function () {
  return __webpack_require__(101).f;
});

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.2.5 Object.freeze(O)


var isObject = __webpack_require__(4);
var meta = __webpack_require__(29).onFreeze;

__webpack_require__(25)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.2.17 Object.seal(O)


var isObject = __webpack_require__(4);
var meta = __webpack_require__(29).onFreeze;

__webpack_require__(25)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.2.15 Object.preventExtensions(O)


var isObject = __webpack_require__(4);
var meta = __webpack_require__(29).onFreeze;

__webpack_require__(25)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.2.12 Object.isFrozen(O)


var isObject = __webpack_require__(4);

__webpack_require__(25)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.2.13 Object.isSealed(O)


var isObject = __webpack_require__(4);

__webpack_require__(25)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.2.11 Object.isExtensible(O)


var isObject = __webpack_require__(4);

__webpack_require__(25)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.3.1 Object.assign(target, source)


var $export = __webpack_require__(0);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(102) });

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.3.10 Object.is(value1, value2)


var $export = __webpack_require__(0);
$export($export.S, 'Object', { is: __webpack_require__(155) });

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 7.2.9 SameValue(x, y)


module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.3.19 Object.setPrototypeOf(O, proto)


var $export = __webpack_require__(0);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(72).set });

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(49);
var test = {};
test[__webpack_require__(5)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(12)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)


var $export = __webpack_require__(0);

$export($export.P, 'Function', { bind: __webpack_require__(103) });

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(7).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
  configurable: true,
  get: function get() {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(4);
var getPrototypeOf = __webpack_require__(17);
var HAS_INSTANCE = __webpack_require__(5)('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(7).f(FunctionProto, HAS_INSTANCE, { value: function value(O) {
    if (typeof this != 'function' || !isObject(O)) return false;
    if (!isObject(this.prototype)) return O instanceof this;
    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
    while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
    return false;
  } });

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(105);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(106);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var has = __webpack_require__(14);
var cof = __webpack_require__(20);
var inheritIfRequired = __webpack_require__(74);
var toPrimitive = __webpack_require__(22);
var fails = __webpack_require__(3);
var gOPN = __webpack_require__(37).f;
var gOPD = __webpack_require__(16).f;
var dP = __webpack_require__(7).f;
var $trim = __webpack_require__(44).trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(36)(proto)) == NUMBER;
var TRIM = ('trim' in String.prototype);

// 7.1.3 ToNumber(argument)
var toNumber = function toNumber(argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66:case 98:
            radix = 2;maxCode = 49;break; // fast equal /^0b[01]+$/i
          case 79:case 111:
            radix = 8;maxCode = 55;break; // fast equal /^0o[0-7]+$/i
          default:
            return +it;
        }
        for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
          code = digits.charCodeAt(i);
          // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols
          if (code < 48 || code > maxCode) return NaN;
        }return parseInt(digits, radix);
      }
  }return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
    // check on 1..constructor(foo) case
     && (BROKEN_COF ? fails(function () {
      proto.valueOf.call(that);
    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(6) ? gOPN(Base) : (
  // ES3:
  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
  // ES6 (in case, if modules with ES6 Number statics required before):
  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(12)(global, NUMBER, $Number);
}

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toInteger = __webpack_require__(24);
var aNumberValue = __webpack_require__(107);
var repeat = __webpack_require__(75);
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function multiply(n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function divide(n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = c % n * 1e7;
  }
};
var numToString = function numToString() {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  }return s;
};
var pow = function pow(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var x = _x,
        n = _x2,
        acc = _x3;
    _again = false;
    if (n === 0) {
      return acc;
    } else {
      if (n % 2 === 1) {
        _x = x;
        _x2 = n - 1;
        _x3 = acc * x;
        _again = true;
        continue _function;
      } else {
        _x = x * x;
        _x2 = n / 2;
        _x3 = acc;
        _again = true;
        continue _function;
      }
    }
  }
};
var log = function log(x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  }return n;
};

$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !__webpack_require__(3)(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    }return m;
  }
});

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $fails = __webpack_require__(3);
var aNumberValue = __webpack_require__(107);
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.1.2.1 Number.EPSILON


var $export = __webpack_require__(0);

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.1.2.2 Number.isFinite(number)


var $export = __webpack_require__(0);
var _isFinite = __webpack_require__(2).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.1.2.3 Number.isInteger(number)


var $export = __webpack_require__(0);

$export($export.S, 'Number', { isInteger: __webpack_require__(108) });

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.1.2.4 Number.isNaN(number)


var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.1.2.5 Number.isSafeInteger(number)


var $export = __webpack_require__(0);
var isInteger = __webpack_require__(108);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.1.2.6 Number.MAX_SAFE_INTEGER


var $export = __webpack_require__(0);

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.1.2.10 Number.MIN_SAFE_INTEGER


var $export = __webpack_require__(0);

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(106);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(105);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.3 Math.acosh(x)


var $export = __webpack_require__(0);
var log1p = __webpack_require__(109);
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
 && Math.floor($acosh(Number.MAX_VALUE)) == 710
// Tor Browser bug: Math.acosh(Infinity) -> NaN
 && $acosh(Infinity) == Infinity), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.5 Math.asinh(x)


var $export = __webpack_require__(0);
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.7 Math.atanh(x)


var $export = __webpack_require__(0);
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.9 Math.cbrt(x)


var $export = __webpack_require__(0);
var sign = __webpack_require__(76);

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.11 Math.clz32(x)


var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.12 Math.cosh(x)


var $export = __webpack_require__(0);
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.14 Math.expm1(x)


var $export = __webpack_require__(0);
var $expm1 = __webpack_require__(77);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.16 Math.fround(x)


var $export = __webpack_require__(0);

$export($export.S, 'Math', { fround: __webpack_require__(110) });

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])


var $export = __webpack_require__(0);
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) {
    // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.18 Math.imul(x, y)


var $export = __webpack_require__(0);
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(3)(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.21 Math.log10(x)


var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.20 Math.log1p(x)


var $export = __webpack_require__(0);

$export($export.S, 'Math', { log1p: __webpack_require__(109) });

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.22 Math.log2(x)


var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.28 Math.sign(x)


var $export = __webpack_require__(0);

$export($export.S, 'Math', { sign: __webpack_require__(76) });

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.30 Math.sinh(x)


var $export = __webpack_require__(0);
var expm1 = __webpack_require__(77);
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(3)(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.33 Math.tanh(x)


var $export = __webpack_require__(0);
var expm1 = __webpack_require__(77);
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.2.2.34 Math.trunc(x)


var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var toAbsoluteIndex = __webpack_require__(35);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) {
    // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
    }return res.join('');
  }
});

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var toIObject = __webpack_require__(15);
var toLength = __webpack_require__(8);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    }return res.join('');
  }
});

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(44)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(78)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(79)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $at = __webpack_require__(78)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(8);
var context = __webpack_require__(81);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(82)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(0);
var context = __webpack_require__(81);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(82)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !! ~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(75)
});

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(8);
var context = __webpack_require__(81);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(82)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
  }
});

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(13)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(13)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(13)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(13)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(13)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(13)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(13)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(13)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(13)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(13)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(13)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(13)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(13)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.3.3.1 / 15.9.4.4 Date.now()


var $export = __webpack_require__(0);

$export($export.S, 'Date', { now: function now() {
    return new Date().getTime();
  } });

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(22);

$export($export.P + $export.F * __webpack_require__(3)(function () {
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function toISOString() {
      return 1;
    } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()


var $export = __webpack_require__(0);
var toISOString = __webpack_require__(217);

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(3);
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function lz(num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
}) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(12)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TO_PRIMITIVE = __webpack_require__(5)('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(11)(proto, TO_PRIMITIVE, __webpack_require__(220));

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(22);
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)


var $export = __webpack_require__(0);

$export($export.S, 'Array', { isArray: __webpack_require__(54) });

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(19);
var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var call = __webpack_require__(111);
var isArrayIter = __webpack_require__(83);
var toLength = __webpack_require__(8);
var createProperty = __webpack_require__(84);
var getIterFn = __webpack_require__(85);

$export($export.S + $export.F * !__webpack_require__(56)(function (iter) {
  Array.from(iter);
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var createProperty = __webpack_require__(84);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(3)(function () {
  function F() {/* empty */}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of() /* ...args */{
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(0);
var toIObject = __webpack_require__(15);
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(47) != Object || !__webpack_require__(21)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var html = __webpack_require__(71);
var cof = __webpack_require__(20);
var toAbsoluteIndex = __webpack_require__(35);
var toLength = __webpack_require__(8);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(3)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
    return cloned;
  }
});

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var aFunction = __webpack_require__(10);
var toObject = __webpack_require__(9);
var fails = __webpack_require__(3);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(21)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
  }
});

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $forEach = __webpack_require__(26)(0);
var STRICT = __webpack_require__(21)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(4);
var isArray = __webpack_require__(54);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }return C === undefined ? Array : C;
};

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $map = __webpack_require__(26)(1);

$export($export.P + $export.F * !__webpack_require__(21)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $filter = __webpack_require__(26)(2);

$export($export.P + $export.F * !__webpack_require__(21)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $some = __webpack_require__(26)(3);

$export($export.P + $export.F * !__webpack_require__(21)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $every = __webpack_require__(26)(4);

$export($export.P + $export.F * !__webpack_require__(21)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $reduce = __webpack_require__(112);

$export($export.P + $export.F * !__webpack_require__(21)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $reduce = __webpack_require__(112);

$export($export.P + $export.F * !__webpack_require__(21)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $indexOf = __webpack_require__(52)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(21)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
    // convert -0 to +0
    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
  }
});

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toIObject = __webpack_require__(15);
var toInteger = __webpack_require__(24);
var toLength = __webpack_require__(8);
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(21)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (; index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)


var $export = __webpack_require__(0);

$export($export.P, 'Array', { copyWithin: __webpack_require__(113) });

__webpack_require__(31)('copyWithin');

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


var $export = __webpack_require__(0);

$export($export.P, 'Array', { fill: __webpack_require__(87) });

__webpack_require__(31)('fill');

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(0);
var $find = __webpack_require__(26)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(31)(KEY);

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(0);
var $find = __webpack_require__(26)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(31)(KEY);

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(38)('Array');

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var inheritIfRequired = __webpack_require__(74);
var dP = __webpack_require__(7).f;
var gOPN = __webpack_require__(37).f;
var isRegExp = __webpack_require__(55);
var $flags = __webpack_require__(57);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(3)(function () {
  re2[__webpack_require__(5)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
  };
  var proxy = function proxy(key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function get() {
        return Base[key];
      },
      set: function set(it) {
        Base[key] = it;
      }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(12)(global, 'RegExp', $RegExp);
}

__webpack_require__(38)('RegExp');

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(115);
var anObject = __webpack_require__(1);
var $flags = __webpack_require__(57);
var DESCRIPTORS = __webpack_require__(6);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function define(fn) {
  __webpack_require__(12)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(3)(function () {
  return $toString.call({ source: 'a', flags: 'b' }) != '/a/b';
})) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
  // FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
    define(function toString() {
      return $toString.call(this);
    });
  }

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @@match logic


__webpack_require__(58)('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @@replace logic


__webpack_require__(58)('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @@search logic


__webpack_require__(58)('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @@split logic


__webpack_require__(58)('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__(55);
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
    // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
      $split = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
      };
    }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var global = __webpack_require__(2);
var ctx = __webpack_require__(19);
var classof = __webpack_require__(49);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(4);
var aFunction = __webpack_require__(10);
var anInstance = __webpack_require__(39);
var forOf = __webpack_require__(40);
var speciesConstructor = __webpack_require__(59);
var task = __webpack_require__(89).set;
var microtask = __webpack_require__(90)();
var newPromiseCapabilityModule = __webpack_require__(91);
var perform = __webpack_require__(116);
var userAgent = __webpack_require__(60);
var promiseResolve = __webpack_require__(117);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function empty() {/* empty */};
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!(function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(5)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise
    // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
     && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) {/* empty */}
})();

// helpers
var isThenable = function isThenable(it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function onUnhandled(promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function isUnhandled(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions
    this._a = undefined; // <- checked in isUnhandled reactions
    this._s = 0; // <- state
    this._d = false; // <- done
    this._v = undefined; // <- value
    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false; // <- notify
  };
  Internal.prototype = __webpack_require__(41)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(43)($Promise, PROMISE);
__webpack_require__(38)(PROMISE);
Wrapper = __webpack_require__(18)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(56)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(122);
var validate = __webpack_require__(46);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(61)(WEAK_SET, function (get) {
  return function WeakSet() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $typed = __webpack_require__(62);
var buffer = __webpack_require__(92);
var anObject = __webpack_require__(1);
var toAbsoluteIndex = __webpack_require__(35);
var toLength = __webpack_require__(8);
var isObject = __webpack_require__(4);
var ArrayBuffer = __webpack_require__(2).ArrayBuffer;
var speciesConstructor = __webpack_require__(59);
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(3)(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    }return result;
  }
});

__webpack_require__(38)(ARRAY_BUFFER);

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
$export($export.G + $export.W + $export.F * !__webpack_require__(62).ABV, {
  DataView: __webpack_require__(92).DataView
});

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(27)('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(27)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(27)('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(27)('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(27)('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(27)('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(27)('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(27)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(27)('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)


var $export = __webpack_require__(0);
var aFunction = __webpack_require__(10);
var anObject = __webpack_require__(1);
var rApply = (__webpack_require__(2).Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(3)(function () {
  rApply(function () {/* empty */});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])


var $export = __webpack_require__(0);
var create = __webpack_require__(36);
var aFunction = __webpack_require__(10);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var bind = __webpack_require__(103);
var rConstruct = (__webpack_require__(2).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() {/* empty */}
  return !(rConstruct(function () {/* empty */}, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () {/* empty */});
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();
        case 1:
          return new Target(args[0]);
        case 2:
          return new Target(args[0], args[1]);
        case 3:
          return new Target(args[0], args[1], args[2]);
        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)


var dP = __webpack_require__(7);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(22);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(3)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 26.1.4 Reflect.deleteProperty(target, propertyKey)


var $export = __webpack_require__(0);
var gOPD = __webpack_require__(16).f;
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var Enumerate = function Enumerate(iterated) {
  this._t = anObject(iterated); // target
  this._i = 0; // next index
  var keys = this._k = []; // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(80)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 26.1.6 Reflect.get(target, propertyKey [, receiver])


var gOPD = __webpack_require__(16);
var getPrototypeOf = __webpack_require__(17);
var has = __webpack_require__(14);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(1);

function get(_x, _x2) {
  var _arguments = arguments;
  var _again = true;

  _function: while (_again) /* , receiver */{
    var target = _x,
        propertyKey = _x2;
    _again = false;

    var receiver = _arguments.length < 3 ? target : _arguments[2];
    var desc, proto;
    if (anObject(target) === receiver) return target[propertyKey];
    if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
    if (isObject(proto = getPrototypeOf(target))) {
      _arguments = [_x = proto, _x2 = propertyKey, receiver];
      _again = true;
      receiver = desc = proto = undefined;
      continue _function;
    }
  }
}

$export($export.S, 'Reflect', { get: get });

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)


var gOPD = __webpack_require__(16);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 26.1.8 Reflect.getPrototypeOf(target)


var $export = __webpack_require__(0);
var getProto = __webpack_require__(17);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 26.1.9 Reflect.has(target, propertyKey)


var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 26.1.10 Reflect.isExtensible(target)


var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 26.1.11 Reflect.ownKeys(target)


var $export = __webpack_require__(0);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(124) });

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 26.1.12 Reflect.preventExtensions(target)


var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])


var dP = __webpack_require__(7);
var gOPD = __webpack_require__(16);
var getPrototypeOf = __webpack_require__(17);
var has = __webpack_require__(14);
var $export = __webpack_require__(0);
var createDesc = __webpack_require__(32);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);

function set(_x, _x2, _x3) {
  var _arguments = arguments;
  var _again = true;

  _function: while (_again) /* , receiver */{
    var target = _x,
        propertyKey = _x2,
        V = _x3;
    _again = false;

    var receiver = _arguments.length < 4 ? target : _arguments[3];
    var ownDesc = gOPD.f(anObject(target), propertyKey);
    var existingDescriptor, proto;
    if (!ownDesc) {
      if (isObject(proto = getPrototypeOf(target))) {
        _arguments = [_x = proto, _x2 = propertyKey, _x3 = V, receiver];
        _again = true;
        receiver = ownDesc = existingDescriptor = proto = undefined;
        continue _function;
      }
      ownDesc = createDesc(0);
    }
    if (has(ownDesc, 'value')) {
      if (ownDesc.writable === false || !isObject(receiver)) return false;
      if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
        if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
        existingDescriptor.value = V;
        dP.f(receiver, propertyKey, existingDescriptor);
      } else dP.f(receiver, propertyKey, createDesc(0, V));
      return true;
    }
    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
  }
}

$export($export.S, 'Reflect', { set: set });

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 26.1.14 Reflect.setPrototypeOf(target, proto)


var $export = __webpack_require__(0);
var setProto = __webpack_require__(72);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(0);
var $includes = __webpack_require__(52)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(31)('includes');

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(0);
var flattenIntoArray = __webpack_require__(125);
var toObject = __webpack_require__(9);
var toLength = __webpack_require__(8);
var aFunction = __webpack_require__(10);
var arraySpeciesCreate = __webpack_require__(86);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(31)('flatMap');

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = __webpack_require__(0);
var flattenIntoArray = __webpack_require__(125);
var toObject = __webpack_require__(9);
var toLength = __webpack_require__(8);
var toInteger = __webpack_require__(24);
var arraySpeciesCreate = __webpack_require__(86);

$export($export.P, 'Array', {
  flatten: function flatten() /* depthArg = 1 */{
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__(31)('flatten');

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(0);
var $at = __webpack_require__(78)(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(126);
var userAgent = __webpack_require__(60);

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(126);
var userAgent = __webpack_require__(60);

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(44)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(44)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export = __webpack_require__(0);
var defined = __webpack_require__(23);
var toLength = __webpack_require__(8);
var isRegExp = __webpack_require__(55);
var getFlags = __webpack_require__(57);
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__(80)($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(68)('asyncIterator');

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(68)('observable');

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-object-getownpropertydescriptors


var $export = __webpack_require__(0);
var ownKeys = __webpack_require__(124);
var toIObject = __webpack_require__(15);
var gOPD = __webpack_require__(16);
var createProperty = __webpack_require__(84);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-object-values-entries


var $export = __webpack_require__(0);
var $values = __webpack_require__(127)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-object-values-entries


var $export = __webpack_require__(0);
var $entries = __webpack_require__(127)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var aFunction = __webpack_require__(10);
var $defineProperty = __webpack_require__(7);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(6) && $export($export.P + __webpack_require__(63), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var aFunction = __webpack_require__(10);
var $defineProperty = __webpack_require__(7);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(6) && $export($export.P + __webpack_require__(63), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(22);
var getPrototypeOf = __webpack_require__(17);
var getOwnPropertyDescriptor = __webpack_require__(16).f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(6) && $export($export.P + __webpack_require__(63), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(22);
var getPrototypeOf = __webpack_require__(17);
var getOwnPropertyDescriptor = __webpack_require__(16).f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(6) && $export($export.P + __webpack_require__(63), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/DavidBruant/Map-Set.prototype.toJSON


var $export = __webpack_require__(0);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(128)('Map') });

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/DavidBruant/Map-Set.prototype.toJSON


var $export = __webpack_require__(0);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(128)('Set') });

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of


__webpack_require__(64)('Map');

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of


__webpack_require__(64)('Set');

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of


__webpack_require__(64)('WeakMap');

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of


__webpack_require__(64)('WeakSet');

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from


__webpack_require__(65)('Map');

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from


__webpack_require__(65)('Set');

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from


__webpack_require__(65)('WeakMap');

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from


__webpack_require__(65)('WeakSet');

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-global


var $export = __webpack_require__(0);

$export($export.G, { global: __webpack_require__(2) });

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-global


var $export = __webpack_require__(0);

$export($export.S, 'System', { global: __webpack_require__(2) });

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/ljharb/proposal-is-error


var $export = __webpack_require__(0);
var cof = __webpack_require__(20);

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://rwaldron.github.io/proposal-math-extensions/


var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://rwaldron.github.io/proposal-math-extensions/


var $export = __webpack_require__(0);

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://rwaldron.github.io/proposal-math-extensions/


var $export = __webpack_require__(0);
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://rwaldron.github.io/proposal-math-extensions/


var $export = __webpack_require__(0);
var scale = __webpack_require__(130);
var fround = __webpack_require__(110);

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703


var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703


var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703


var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://rwaldron.github.io/proposal-math-extensions/


var $export = __webpack_require__(0);

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://rwaldron.github.io/proposal-math-extensions/


var $export = __webpack_require__(0);
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://rwaldron.github.io/proposal-math-extensions/


var $export = __webpack_require__(0);

$export($export.S, 'Math', { scale: __webpack_require__(130) });

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703


var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// http://jfbastien.github.io/papers/Math.signbit.html


var $export = __webpack_require__(0);

$export($export.S, 'Math', { signbit: function signbit(x) {
    // eslint-disable-next-line no-self-compare
    return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
  } });

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(0);
var core = __webpack_require__(18);
var global = __webpack_require__(2);
var speciesConstructor = __webpack_require__(59);
var promiseResolve = __webpack_require__(117);

$export($export.P + $export.R, 'Promise', { 'finally': function _finally(onFinally) {
    var C = speciesConstructor(this, core.Promise || global.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  } });

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(0);
var newPromiseCapability = __webpack_require__(91);
var perform = __webpack_require__(116);

$export($export.S, 'Promise', { 'try': function _try(callbackfn) {
    var promiseCapability = newPromiseCapability.f(this);
    var result = perform(callbackfn);
    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
    return promiseCapability.promise;
  } });

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
  } });

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
    var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
    if (metadataMap.size) return true;
    var targetMetadata = store.get(target);
    targetMetadata['delete'](targetKey);
    return !!targetMetadata.size || store['delete'](target);
  } });

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(17);
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function ordinaryGetMetadata(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var MetadataKey = _x,
        O = _x2,
        P = _x3;
    _again = false;

    var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
    if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
    var parent = getPrototypeOf(O);
    if (parent !== null) {
      _x = MetadataKey;
      _x2 = parent;
      _x3 = P;
      _again = true;
      hasOwn = parent = undefined;
      continue _function;
    } else {
      return undefined;
    }
  }
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
    return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  } });

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Set = __webpack_require__(120);
var from = __webpack_require__(129);
var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(17);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
    return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
  } });

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
    return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  } });

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
    return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
  } });

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(17);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function ordinaryHasMetadata(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var MetadataKey = _x,
        O = _x2,
        P = _x3;
    _again = false;

    var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
    if (hasOwn) return true;
    var parent = getPrototypeOf(O);
    if (parent !== null) {
      _x = MetadataKey;
      _x2 = parent;
      _x3 = P;
      _again = true;
      hasOwn = parent = undefined;
      continue _function;
    } else {
      return false;
    }
  }
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
    return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  } });

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
    return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  } });

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(10);
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
    return function decorator(target, targetKey) {
      ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
    };
  } });

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask


var $export = __webpack_require__(0);
var microtask = __webpack_require__(90)();
var process = __webpack_require__(2).process;
var isNode = __webpack_require__(20)(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export = __webpack_require__(0);
var global = __webpack_require__(2);
var core = __webpack_require__(18);
var microtask = __webpack_require__(90)();
var OBSERVABLE = __webpack_require__(5)('observable');
var aFunction = __webpack_require__(10);
var anObject = __webpack_require__(1);
var anInstance = __webpack_require__(39);
var redefineAll = __webpack_require__(41);
var hide = __webpack_require__(11);
var forOf = __webpack_require__(40);
var RETURN = forOf.RETURN;

var getMethod = function getMethod(fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function cleanupSubscription(subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function subscriptionClosed(subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function closeSubscription(subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function Subscription(observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () {
        subscription.unsubscribe();
      };else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  }if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() {
    closeSubscription(this);
  }
});

var SubscriptionObserver = function SubscriptionObserver(subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    }cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      }cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function next(value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          }observer.complete();
        }
      });
      return function () {
        done = true;
      };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          }observer.complete();
        }
      });
      return function () {
        done = true;
      };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () {
  return this;
});

$export($export.G, { Observable: $Observable });

__webpack_require__(38)('Observable');

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ie9- setTimeout & setInterval additional parameters fix


var global = __webpack_require__(2);
var $export = __webpack_require__(0);
var userAgent = __webpack_require__(60);
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function wrap(set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $task = __webpack_require__(89);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $iterators = __webpack_require__(88);
var getKeys = __webpack_require__(34);
var redefine = __webpack_require__(12);
var global = __webpack_require__(2);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(45);
var wks = __webpack_require__(5);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */



!(function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(96)))

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(336);
module.exports = __webpack_require__(18).RegExp.escape;

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/benjamingr/RexExp.escape


var $export = __webpack_require__(0);
var $re = __webpack_require__(337)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) {
    return $re(it);
  } });

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _InteractionJs = __webpack_require__(93);

var _InteractionJs2 = _interopRequireDefault(_InteractionJs);

var _SequencerJs = __webpack_require__(131);

var _SequencerJs2 = _interopRequireDefault(_SequencerJs);

var _WorldContextJs = __webpack_require__(94);

var _WorldContextJs2 = _interopRequireDefault(_WorldContextJs);

var _MessengerJs = __webpack_require__(132);

var _MessengerJs2 = _interopRequireDefault(_MessengerJs);

var _SelectionRulesJs = __webpack_require__(134);

var _SelectionRulesJs2 = _interopRequireDefault(_SelectionRulesJs);

var _LayerJs = __webpack_require__(95);

var _RendererJs = __webpack_require__(343);

var _RendererJs2 = _interopRequireDefault(_RendererJs);

var _NarrativeObjectJs = __webpack_require__(42);

var RestoreEngineKeys = {
	FLOW_PACKAGES: "flowPackages",
	NARRATIVE_OBJECTS: "narrativeObjects",
	ROOT_NARRATIVE_OBJECT_ID: "rootNarrativeObjectId"
};

/**
 * 
 * The main interface to the engine
 * @export
 * @class OBBEngine
 */

var OBBEngine = (function () {
	function OBBEngine() {
		_classCallCheck(this, OBBEngine);

		this.worldContext = new _WorldContextJs2['default']();
		this.selectionRules = new _SelectionRulesJs2['default']();
	}

	/**
  * The main renderer - uses video context library to render sequences into a HTML canvas element
  * 
  * @param {HTMLElement} canvas 
  * @memberof OBBEngine
  */

	_createClass(OBBEngine, [{
		key: 'initRendererWithCanvas',
		value: function initRendererWithCanvas(canvas) {
			this.renderer = new _RendererJs2['default'](this, canvas);
		}

		/**
   * Returns the renderer (needs to be initialised with initRendererWithCanvas)
   * 
   * @memberof OBBEngine
   */
	}, {
		key: 'getRenderer',
		value: function getRenderer() {
			if (this.renderer != undefined) {
				return this.renderer;
			} else {
				Messagenger.Log(_MessengerJs.LogType.WARNING, "renderer not initialised");
				return undefined;
			}
		}
	}, {
		key: 'GetSelectionRules',

		/**
   * Returns an instance of SelectionRules.
   */
		value: function GetSelectionRules() {
			return this.selectionRules;
		}
	}, {
		key: 'resetGraph',

		/**
   * Removes all Narrative Objects from the narrative graph.
   */
		value: function resetGraph() {
			this.worldContext.resetGraph();
		}

		/**
   * Set the root narrative object of the narrative graph.
   * @param {NarrativeObject} rootNarrartiveObject
   */
	}, {
		key: 'setRootNarrativeObject',
		value: function setRootNarrativeObject(rootNarrartiveObject) {
			this.worldContext.setRootNarrativeObject(rootNarrartiveObject);
		}

		/**
   * Set the root narrative object of the graph from a narrative object id.
   * @param {number} rootId 
   */
	}, {
		key: 'setRootNarrativeObjectFromId',
		value: function setRootNarrativeObjectFromId(rootId) {
			this.worldContext.setRootNarrativeObjectFromId(rootId);
		}

		/**
   * Get the root narrative object of the narrative graph.
   */
	}, {
		key: 'getRootNarrativeObject',
		value: function getRootNarrativeObject() {
			return this.worldContext.getRootNarrativeObject();
		}

		/**
   * Get a specific narrative object from the world contexts graph.
   * @param {string} narrativeObjectID
   */
	}, {
		key: 'getNarrativeObject',
		value: function getNarrativeObject(narrativeObjectID) {
			return this.worldContext.getNarrativeObject(narrativeObjectID);
		}

		/**
   * Get a series of specific narrative objects from the world contexts graph.
   * @param {string[]} narrativeObjectIDs
   */
	}, {
		key: 'getNarrativeObjects',
		value: function getNarrativeObjects(narrativeObjectIDs) {
			return this.worldContext.getNarrativeObjects(narrativeObjectIDs);
		}

		/**
   * Get all narrative objects which exist in the world contexts graph.
   */
	}, {
		key: 'getAllNarrativeObjects',
		value: function getAllNarrativeObjects() {
			return this.worldContext.getAllNarrativeObjects();
		}
	}, {
		key: 'setNarrativeObjectId',
		value: function setNarrativeObjectId(narrativeObject, id) {
			return this.worldContext.setNarrativeObjectId(narrativeObject, id);
		}

		/**
   * Reset the root narrative object of the narrative graph.
   */
	}, {
		key: 'resetRootNarrativeObject',
		value: function resetRootNarrativeObject() {
			this.worldContext.resetRootNarrativeObject();
		}

		/**
   * Create a flow package.
   * @param {string} url - Any URL which references an asset.
   * @param {number} duration - The duration of the asset selected via the url property. If no duration is passed, the maximum duration of the asset is automatically calculated.
   * @param {MediaTypes} mediaType - The type of media associated with the flow package to be created.
   * @param {object} data - Data associated with the flow package to be created.
   */
	}, {
		key: 'createFlowPackage',
		value: function createFlowPackage(url) {
			var duration = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];
			var mediaType = arguments.length <= 2 || arguments[2] === undefined ? _WorldContextJs.MediaTypes.UNDEFINED : arguments[2];
			var data = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

			return this.worldContext.createFlowPackage(url, duration, mediaType, data);
		}

		/**
   * Set the media for a flow package.
   * @param {*} flowPackage 
   * @param {*} url 
   * @param {*} duration 
   * @param {*} mediaType 
   */
	}, {
		key: 'setFlowPackageMedia',
		value: function setFlowPackageMedia(flowPackage, url) {
			var duration = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];
			var mediaType = arguments.length <= 3 || arguments[3] === undefined ? _WorldContextJs.MediaTypes.UNDEFINED : arguments[3];

			return this.worldContext.setFlowPackageMedia(flowPackage, url, duration, mediaType);
		}

		/**
   * Remove a previously created flow package.
   * @param {FlowPackage} flowPackage - The flow package to be removed.
   */
	}, {
		key: 'removeFlowPackage',
		value: function removeFlowPackage(flowPackage) {
			return this.worldContext.removeFlowPackage(flowPackage);
		}

		/**
   * Get a flow package by specifying its id.
   * @param {number} id 
   */
	}, {
		key: 'getFlowPackage',
		value: function getFlowPackage(id) {
			return this.worldContext.getFlowPackage(id);
		}

		/**
   * Get a flow package by specifiying its url.
   * @param {string} url
   */
	}, {
		key: 'getFlowPackageByUrl',
		value: function getFlowPackageByUrl(url) {
			return this.worldContext.getFlowPackageByUrl(url);
		}

		/**
   * Get all flow packages which currently exist in the world context.
   */
	}, {
		key: 'getAllFlowPackages',
		value: function getAllFlowPackages() {
			return this.worldContext.getAllFlowPackages();
		}

		/**
   * Set the id of the passed FlowPackage.
   * @param {FlowPackage} flowPackage 
   * @param {number} id 
   */
	}, {
		key: 'setFlowPackageId',
		value: function setFlowPackageId(flowPackage, id) {
			return this.worldContext.setFlowPackageId(flowPackage, id);
		}

		/**
   * Create an atom in the narrative graph.
   * @param {FlowPackage} flowPackage - The flow package which should be attached to this atom. This contains media assets.
   * @param {number} startTime - The starting point within the flow packages media asset. Example: The flow package contains a video clip which has a timeline of 0 to 10 seconds. The start time specifies where within this timeline playback should commence.
   * @param {number} endTime - The end point within the flow packages media asset. Example: The flow package contains a video clip which has a timeline of 0 to 10 seconds. The end time specifies where within this timeline playback should terminate.
   * @param {Object} data - This is a dictionary used to store any required data specific to the atom.
   */
	}, {
		key: 'createAtom',
		value: function createAtom(flowPackage) {
			var startTime = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];
			var endTime = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];
			var data = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

			return this.worldContext.createAtom(flowPackage, startTime, endTime, data);
		}

		/**
   * Remove a previously created atom.
   * @param {Atom} atom - The atom to be removed.
   */
	}, {
		key: 'removeAtom',
		value: function removeAtom(atom) {
			return this.worldContext.removeAtom(atom);
		}

		/**
   * Remove a previous created atom with its id.
   * @param {string} atomId
   */
	}, {
		key: 'removeAtomById',
		value: function removeAtomById(atomId) {
			var atom = this.worldContext.getNarrativeObject(atomId);

			if (atom != undefined) {
				return this.removeAtom(atom);
			}

			return false;
		}

		/**
   * Set the in point for an atom (this is where on its flow package it begins). 
   * @param {NarrativeObject} atomId 
   * @param {Number} inPointTime 
   */
	}, {
		key: 'setAtomInPoint',
		value: function setAtomInPoint(atomId, inPointTime) {
			this.worldContext.setAtomInPoint(atomId, inPointTime);
		}

		/**
   * Set the out point for an atom (this is where on its flow package it ends).
   * @param {NarrativeObject} atomId 
   * @param {Number} outPointTime 
   */
	}, {
		key: 'setAtomOutPoint',
		value: function setAtomOutPoint(atomId, outPointTime) {
			this.worldContext.setAtomOutPoint(atomId, outPointTime);
		}

		/**
   * Create a group in the narrative graph.
   * @param {Object} data - This is a dictionary used to store any required data specific to the group.
   */
	}, {
		key: 'createGroup',
		value: function createGroup() {
			var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

			return this.worldContext.createGroup(data);
		}

		/**
   * Remove a previously created group.
   * @param {Group} group - The group to be removed.
   */
	}, {
		key: 'removeGroup',
		value: function removeGroup(group) {
			return this.worldContext.removeGroup(group);
		}

		/**
   * Remove a previous created group with its id.
   * @param {string} groupId
   */
	}, {
		key: 'removeGroupById',
		value: function removeGroupById(groupId) {
			var group = this.worldContext.getNarrativeObject(groupId);

			if (group != undefined) {
				return this.removeGroup(group);
			}

			return false;
		}

		/**
   * Create a layered object in the narrative graph.
   * @param {Object} data - This is a dictionary used to store any required data specific to the layered object.
   */
	}, {
		key: 'createLayered',
		value: function createLayered() {
			var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
			var addMaster = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

			return this.worldContext.createLayered(data, addMaster);
		}

		/**
   * Remove a previously created layered object.
   * @param {Layered} layered - The layered object to remove.
   */
	}, {
		key: 'removeLayered',
		value: function removeLayered(layered) {
			return this.worldContext.removeLayered(layered);
		}

		/**
   * Remove a previous created layered object with its id.
   * @param {string} layeredId
   */
	}, {
		key: 'removeLayeredById',
		value: function removeLayeredById(layeredId) {
			var layered = this.worldContext.getNarrativeObject(layeredId);

			if (layered != undefined) {
				return this.removeLayered(layered);
			}

			return false;
		}

		// TODO: DOCS: Find out what start time and end time are relative to.
		/**
   * Add an interaction to an existing atom.
   * @param {Atom} atom - The atom which will have the interaction applied to it.
   * @param {number} startTime - The start time of the interaction.
   * @param {duration} endTime - The end time of the interaction.
   * @param {boolean} resetOutcomeOnStart Should the outcome of this interaction reset each time the interaction is called?
   */
	}, {
		key: 'addInteraction',
		value: function addInteraction(atom, startTime, endTime, resetOutcomeOnStart, data) {
			// Return the interaction ID.
			return this.worldContext.addInteraction(atom, startTime, endTime, resetOutcomeOnStart, data);
		}

		/**
   * Remove a previous created interaction from an atom.
   * @param {Atom} atom - The atom which will have an interaction removed from it.
   * @param {string} interactionID - The ID of the interaction to remove.
   */
	}, {
		key: 'removeInteraction',
		value: function removeInteraction(atom, interactionID) {
			return this.worldContext.removeInteraction(atom, interactionID);
		}

		/**
   * Return whether an interaction with the passed id exists.
   * @param {string} interactionId
   */
	}, {
		key: 'hasInteraction',
		value: function hasInteraction(interactionId) {
			return this.worldContext.hasInteraction(interactionId);
		}

		/**
   * Get an interaction from an interaction id.
   * @param {string} interactionId
   */
	}, {
		key: 'getInteraction',
		value: function getInteraction(interactionId) {
			return this.worldContext.getInteraction(interactionId);
		}

		/**
   * Add a defined function to the world contexts function dictionary.
   * @param {FunctionType} functionType - The type of the function. These are defined in the FunctionTypes inside WorldContext.js.
   * @param {string} functionName - The name of the function.
   * @param {function} functionBody - The body of the function.
   */
	}, {
		key: 'addFunction',
		value: function addFunction(functionType, functionName, functionBody) {
			this.worldContext.addFunction(functionType, functionName, functionBody);
		}

		/**
   * Get a previous added function from the world contexts function dictionary.
   * @param {FunctionTypes} functionType - The type of the function. These are defined in the FunctionTypes inside WorldContext.js.
   * @param {string} functionName - The name of the function.
   */
	}, {
		key: 'getFunction',
		value: function getFunction(functionType, functionName) {
			return this.worldContext.getFunction(functionType, functionName);
		}

		/**
   * Remove a previously added function from the world contexts function dictionary.
   * @param {any} functionType - The type of the function. These are defined in the FunctionTypes inside WorldContext.js.
   * @param {any} functionName - The name of the function.
   */
	}, {
		key: 'removeFunction',
		value: function removeFunction(functionType, functionName) {
			return this.worldContext.removeFunction(functionType, functionName);
		}

		/**
   * Load the default ontology classes into the world contexts ontology.
   */
	}, {
		key: 'loadDefaultOntologyClasses',
		value: function loadDefaultOntologyClasses() {
			this.worldContext.loadDefaultOntologyClasses();
		}

		/**
   * Add a class to the world contexts ontology.
   * @param {any} className - The name of the class to be added.
   */
	}, {
		key: 'addOntologyClass',
		value: function addOntologyClass(className) {
			this.worldContext.addOntologyClass(className);
		}

		/**
   * Remove a previously added class to the world contexts ontology.
   * @param {any} className - The name of the class to be removed.
   */
	}, {
		key: 'removeOntologyClass',
		value: function removeOntologyClass(className) {
			this.worldContext.removeOntologyClass(className);
		}

		/**
   * Add an instance to an existing class in the world contexts ontology.
   * @param {any} className - The name of an existing class which should have the instance added to it.
   * @param {any} instanceName - The name of the instance to be added.
   */
	}, {
		key: 'addInstanceToOntologyClass',
		value: function addInstanceToOntologyClass(className, instanceName) {
			this.worldContext.addInstanceToOntologyClass(className, instanceName);
		}

		/**
   * Remove an instance from an existing class in the world contexts ontology.
   * @param {any} className - The name of an existing class which should have the instance removed from it.
   * @param {any} instanceName - The name of the instance to be removed.
   */
	}, {
		key: 'removeInstanceFromOntologyClass',
		value: function removeInstanceFromOntologyClass(className, instanceName) {
			this.worldContext.removeInstanceFromOntologyClass(className, instanceName);
		}

		/**
   * Add a narrative object to an existing class instance in the world contexts ontology.
   * @param {any} className - The name of an existing class which contains the instance which should have the narrative object added to it.
   * @param {any} instanceName - The name of an existing instance within the class which should have the narrative object added to it.
   * @param {any} value - The associated value to be added associated to the narrative object.
   * @param {any} narrativeObject - The narrative object to be added to the existing class instance.
   */
	}, {
		key: 'addNarrativeObjectToOntologyClassInstance',
		value: function addNarrativeObjectToOntologyClassInstance(className, instanceName, value, narrativeObject) {
			this.worldContext.addNarrativeObjectToOntologyClassInstance(className, instanceName, value, narrativeObject);
		}

		/**
   * Remove a Narrative Object from an existing instance of an ontology class in the ontology in the world context.
   * @param {any} class_name
   * @param {any} instance_name
   * @param {any} narrative_object
   */
	}, {
		key: 'removeNarrativeObjectFromOntologyClassInstance',
		value: function removeNarrativeObjectFromOntologyClassInstance(class_name, instance_name, narrative_object) {
			this.worldContext.removeNarrativeObjectFromOntologyClassInstance(class_name, instance_name, narrative_object);
		}

		/**
   * Add a context variable to the world context.
   * @param {any} className - The name of the context variable to add.
   * @param {any} instanceName - The name of the instance to add a context variable for.
   */
	}, {
		key: 'addContextVariable',
		value: function addContextVariable(className, instanceName) {
			this.worldContext.addContextVariable(className, instanceName);
		}

		/**
   * Remove a previously added context variable from the world context.
   * @param {any} className - The name of the class the context variable was added to.
   * @param {any} instanceName - The name of the instance the context variable was added for.
   */
	}, {
		key: 'removeContextVariable',
		value: function removeContextVariable(className, instanceName) {
			this.worldContext.removeContextVariable(className, instanceName);
		}

		/**
   * Get the value of a context variable from the world context.
   * @param {any} className - The name of an existing context variable class.
   * @param {any} instanceName - The name of the instance that the context variable was added to.
   */
	}, {
		key: 'getContextVariable',
		value: function getContextVariable(className, instanceName) {
			return this.worldContext.getContextVariable(className, instanceName);
		}

		/**
   * Set the value of a context variable in the world context.
   * @param {any} className - The name of an existing context variable class.
   * @param {any} instanceName - The name of the instance that the context variable was added to.
   * @param {any} value - The value to be associated with the context variable.
   */
	}, {
		key: 'setContextVariable',
		value: function setContextVariable(className, instanceName, value) {
			this.worldContext.setContextVariable(className, instanceName, value);
		}
	}, {
		key: 'restoreEngine',
		value: function restoreEngine(engineData) {
			this.restoreFlowPackages(engineData[RestoreEngineKeys.FLOW_PACKAGES]);

			this.restoreNarrativeObjects(engineData[RestoreEngineKeys.NARRATIVE_OBJECTS]);

			this.setRootNarrativeObjectFromId(engineData[RestoreEngineKeys.ROOT_NARRATIVE_OBJECT_ID]);
		}
	}, {
		key: 'restoreFunctions',
		value: function restoreFunctions(module) {
			//delete require.cache[require.resolve(module)];
			//let functionModule = require(module);

			console.log("");

			var narrativeObjects = this.getAllNarrativeObjects();

			for (var key in narrativeObjects) {
				var narrativeObject = narrativeObjects[key];

				var functionName = narrativeObject.data[_WorldContextJs.FunctionTypes.OUTPUT_SELECTION];
				if (functionName != undefined) {
					if (module.hasOwnProperty(_WorldContextJs.FunctionTypes.OUTPUT_SELECTION)) {
						if (module[_WorldContextJs.FunctionTypes.OUTPUT_SELECTION].hasOwnProperty(functionName)) {
							// Restore output selection here.
							narrativeObject.setOutputSelectionFunction(module[_WorldContextJs.FunctionTypes.OUTPUT_SELECTION][functionName], functionName);
						}
					}
				}

				switch (narrativeObject.type) {
					case _NarrativeObjectJs.NarrativeObjectTypes.GROUP:

						var groupSelectionFunctionName = narrativeObject.data[_WorldContextJs.FunctionTypes.GROUP_SELECTION];

						if (groupSelectionFunctionName != undefined) {
							if (module.hasOwnProperty(_WorldContextJs.FunctionTypes.GROUP_SELECTION)) {
								if (module[_WorldContextJs.FunctionTypes.GROUP_SELECTION].hasOwnProperty(groupSelectionFunctionName)) {
									// Restore output selection here.
									narrativeObject.setSelectionFunction(module[_WorldContextJs.FunctionTypes.GROUP_SELECTION][groupSelectionFunctionName], groupSelectionFunctionName);
								}
							}
						}

						break;

					case _NarrativeObjectJs.NarrativeObjectTypes.LAYERED:

						var layerSelectionFunctionName = narrativeObject.data[_WorldContextJs.FunctionTypes.LAYER_SELECTION];

						if (layerSelectionFunctionName != undefined) {
							if (module.hasOwnProperty(_WorldContextJs.FunctionTypes.LAYER_SELECTION)) {
								if (module[_WorldContextJs.FunctionTypes.LAYER_SELECTION].hasOwnProperty(layerSelectionFunctionName)) {
									// Restore output selection here.
									narrativeObject.setSelectionFunction(module[_WorldContextJs.FunctionTypes.LAYER_SELECTION][layerSelectionFunctionName], layerSelectionFunctionName);
								}
							}
						}

						break;
				}
			}
		}
	}, {
		key: 'restoreFlowPackages',
		value: function restoreFlowPackages(flowPackageData) {
			for (var key in flowPackageData) {
				// Create the flow package.
				var flowPackage = this.createFlowPackage(flowPackageData[key].url, flowPackageData[key].duration, flowPackageData[key].mediaType, flowPackageData[key].data);

				// Set its id.
				this.setFlowPackageId(flowPackage, flowPackageData.id);
			}
		}
	}, {
		key: 'restoreNarrativeObjects',
		value: function restoreNarrativeObjects(narrativeObjectDatas) {
			// Store the NOs here as created.
			var narrativeObjects = {};

			// Iterate objects to be restored.
			for (var key in narrativeObjectDatas) {
				var narrativeObjectData = narrativeObjectDatas[key];

				// Atoms are needed first.
				if (narrativeObjectData.type == _NarrativeObjectJs.NarrativeObjectTypes.ATOM) {
					// Get the flow package for this atom.
					var flowPackage = this.getFlowPackageByUrl(narrativeObjectData.flowPackage.url);

					// Creare the atom.
					var narrativeObject = this.createAtom(flowPackage, narrativeObjectData.startTime, narrativeObjectData.endTime, narrativeObjectData.data);

					// Force the id to be whatever was saved.
					//narrativeObject.setId(narrativeObjectData.id);
					this.setNarrativeObjectId(narrativeObject, narrativeObjectData.id);

					// Add interactions found in the save data.
					for (var i = 0; i < narrativeObjectData.interactions.length; i++) {
						var interactionData = narrativeObjectData.interactions[i];

						this.worldContext.addInteractionAndSetId(narrativeObject, interactionData.id, interactionData.start, interactionData.end, interactionData.resetOutcomeOnStart, interactionData.data);
					}

					// Store out the narrative object.
					narrativeObjects[narrativeObject.id] = narrativeObject;
				}
			}

			for (var key in narrativeObjectDatas) {
				var narrativeObjectData = narrativeObjectDatas[key];

				// Get layereds.
				if (narrativeObjectData.type == _NarrativeObjectJs.NarrativeObjectTypes.LAYERED) {
					// Create layered with second param false so master is not created by default.
					var narrativeObject = this.createLayered(narrativeObjectData.data, false);

					// Force id to match save data.
					this.setNarrativeObjectId(narrativeObject, narrativeObjectData.id);

					for (var _key in narrativeObjectData.layers) {
						var layerData = narrativeObjectData.layers[_key];

						var layer = narrativeObject.addLayer(layerData.layerType);

						layer.setId(layerData.id);

						for (var narrativeObjectKey in layerData.narrativeObjects) {
							layer.addAtom(narrativeObjects[narrativeObjectKey]);
						}

						layer.setRootNarrativeObject(narrativeObjects[layerData.rootNarrativeObjectID]);
					}

					// Store out narrative object.
					narrativeObjects[narrativeObject.id] = narrativeObject;
				}
			}

			// Iterate objects to be restored.
			for (var key in narrativeObjectDatas) {
				var narrativeObjectData = narrativeObjectDatas[key];

				// Get groups.
				if (narrativeObjectData.type == _NarrativeObjectJs.NarrativeObjectTypes.GROUP) {
					// Create group.
					var narrativeObject = this.createGroup(narrativeObjectData.data);

					// Force id to match save data.
					this.setNarrativeObjectId(narrativeObject, narrativeObjectData.id);

					// Restore the termination condition of the group.
					narrativeObject.terminate_condition = narrativeObjectData.terminate_condition;
					narrativeObject.terminationPlayCount = narrativeObjectData.terminationPlayCount;

					// Store out narrative object.
					narrativeObjects[narrativeObject.id] = narrativeObject;
				}
			}

			// Second step of group restoration. Groups can contain other groups, so all must exist before doing this.
			for (var key in narrativeObjectDatas) {
				var narrativeObjectData = narrativeObjectDatas[key];

				// Get groups.
				if (narrativeObjectData.type == _NarrativeObjectJs.NarrativeObjectTypes.GROUP) {
					// Get created group.
					var narrativeObject = narrativeObjects[narrativeObjectData.id];

					for (var i = 0; i < narrativeObjectData.narrativeObjects.length; i++) {
						var memberNarrativeObject = narrativeObjects[narrativeObjectData.narrativeObjects[i]];

						switch (memberNarrativeObject.type) {
							case _NarrativeObjectJs.NarrativeObjectTypes.ATOM:
								narrativeObject.addAtom(memberNarrativeObject);
								break;

							case _NarrativeObjectJs.NarrativeObjectTypes.GROUP:
								narrativeObject.addGroup(memberNarrativeObject);
								break;

							case _NarrativeObjectJs.NarrativeObjectTypes.LAYERED:
								narrativeObject.addLayered(memberNarrativeObject);
								break;
						}
					}
				}
			}

			// Third step of group restoration. Groups need all members before setting selection candidates.
			for (var key in narrativeObjectDatas) {
				var narrativeObjectData = narrativeObjectDatas[key];

				// Get groups.
				if (narrativeObjectData.type == _NarrativeObjectJs.NarrativeObjectTypes.GROUP) {
					// Get created group.
					var narrativeObject = narrativeObjects[narrativeObjectData.id];

					for (var i = 0; i < narrativeObjectData.selectionFunctionCandidates.length; i++) {
						var selectionFunctionCandidateId = narrativeObjectData.selectionFunctionCandidates[i];

						narrativeObject.addSelectionFunctionCandidate(narrativeObjects[selectionFunctionCandidateId]);
					}
				}
			}

			// Set outputs (this requires all NOs to exist).
			for (var key in narrativeObjectDatas) {
				var narrativeObjectData = narrativeObjectDatas[key];

				var narrativeObject = narrativeObjects[narrativeObjectData.id];

				// Restore the outputs for every narrative object (this will set inputs on others).
				for (var i = 0; i < narrativeObjectData.outputs.length; i++) {
					narrativeObject.addOutput(this.worldContext.getNarrativeObject(narrativeObjectData.outputs[i]));
				}

				// Set the default output.
				narrativeObject.setDefaultOutput(narrativeObjects[narrativeObjectData.defaultOutput]);

				// Set the annotations on the narrative objects.
				for (var classKey in narrativeObjectData.annotations) {
					for (var instanceKey in narrativeObjectData.annotations[classKey]) {
						this.addNarrativeObjectToOntologyClassInstance(classKey, instanceKey, narrativeObjectData.annotations[classKey][instanceKey], narrativeObject);
					}
				}
			}
		}

		/**
   * Reset the entire world context.
   */
	}, {
		key: 'resetWorldContext',
		value: function resetWorldContext() {
			this.worldContext.reset();
		}

		/**
   * Reset the sequencer to allow the graph to sequence again.
   */
	}, {
		key: 'resetSequencer',
		value: function resetSequencer() {
			this.worldContext.resetSequencer();
		}
	}, {
		key: 'updateClock',
		value: function updateClock(clock_time) {
			this.worldContext.updateClock(clock_time);
		}
	}, {
		key: 'setRenderUpdate',
		value: function setRenderUpdate(callback) {
			this.worldContext.setRenderUpdate(callback);
		}
	}, {
		key: 'callRenderUpdate',
		value: function callRenderUpdate() {
			this.worldContext.callRenderUpdate();
		}
	}, {
		key: 'initialise',
		value: function initialise(callback) {
			this.worldContext.startProcessing(callback);
		}
	}], [{
		key: 'GetFunctionTypes',
		get: function get() {
			return _WorldContextJs.FunctionTypes;
		}
	}, {
		key: 'LayerTypes',
		get: function get() {
			return _LayerJs.LayerType;
		}
	}, {
		key: 'MediaTypes',
		get: function get() {
			return _WorldContextJs.MediaTypes;
		}
	}]);

	return OBBEngine;
})();

exports['default'] = OBBEngine;
module.exports = exports['default'];

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * A Logical Entity instance construct for use with matching/ filtering.
 * @constructor
 * @param  {type} class_name    name of the logical entity class
 * @param  {type} instance_name name of the instance
 */


Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var LogicalEntity = function LogicalEntity(class_name, instance_name) {
	_classCallCheck(this, LogicalEntity);

	this['class'] = class_name;
	this.instance = instance_name;
}

/**
 * An ontology to store logical entity classes for annotating NOs.
 *
 */
;

exports.LogicalEntity = LogicalEntity;

var Ontology = (function () {
	function Ontology() {
		_classCallCheck(this, Ontology);

		this.reset();
	}

	_createClass(Ontology, [{
		key: 'reset',
		value: function reset() {
			this.root = {};
		}

		/**
   * loadDefaultClasses - loads the default logical entity classes: Action, Genre, Location, Prop, Subject, Time, Topic
   *
   */
	}, {
		key: 'loadDefaultClasses',
		value: function loadDefaultClasses() {
			this.addClass('Action');
			this.addClass('Genre');
			this.addClass('Location');
			this.addClass('Prop');
			this.addClass('Subject');
			this.addClass('Time');
			this.addClass('Topic');
		}

		/**
   * addClass - Add a new logical entity class
   *
   * @param  {string} name the name for the new class
   */
	}, {
		key: 'addClass',
		value: function addClass(className) {
			if (!this.hasClass(className)) {
				this.root[className] = {};

				return true;
			}

			return false;
		}

		/**
   * removeClass - Remove an existing logical entity class.
   * @param {string} name
   */
	}, {
		key: 'removeClass',
		value: function removeClass(className) {
			if (this.hasClass(className)) {
				// For each instance in the class.
				for (var key in this.root[className]) {
					var instance = this.root[className][key];

					this.removeInstanceFromClass(className, key);
				}

				delete this.root[className];

				return true;
			}

			return false;
		}
	}, {
		key: 'hasClass',
		value: function hasClass(name) {
			return this.root.hasOwnProperty(name);
		}
	}, {
		key: 'getClassNames',
		value: function getClassNames() {
			var classNames = [];

			for (var key in this.root) {
				classNames.push(key);
			}

			return classNames;
		}

		/**
   * addInstanceToClass - Add an instance to an existing logical entity class or create a new class with this instance
   *
   * @param  {type} class_name    name of the (existing) logical entity class
   * @param  {type} instance_name name of the instance to create
   */
	}, {
		key: 'addInstanceToClass',
		value: function addInstanceToClass(className, instanceName) {
			if (this.hasClass(className)) {
				if (!this.hasInstanceOfClass(className, instanceName)) {
					this.root[className][instanceName] = [];

					return true;
				}
			}

			return false;
		}

		/**
   * removeInstanceFromClass - Removes an existing instance from an existing logical entity class.
   * @param {string} class_name      Name of an existing logical entity class.
   * @param {string} instance_name   Name of an existing instance of the logical entity class.
   */
	}, {
		key: 'removeInstanceFromClass',
		value: function removeInstanceFromClass(className, instanceName) {
			if (this.hasClass(className)) {
				if (this.hasInstanceOfClass(className, instanceName)) {
					var instance = this.root[className][instanceName];

					// For each atom in the instance.
					for (var i = 0; i < instance.length; i++) {
						var narrativeObject = instance[i];

						narrativeObject.removeAnnotation(className, instanceName);
					}

					delete this.root[className][instanceName];

					return true;
				}
			}

			return false;
		}
	}, {
		key: 'hasInstanceOfClass',
		value: function hasInstanceOfClass(className, instanceName) {
			return this.root[className].hasOwnProperty(instanceName);
		}

		/**
   * addNarrativeObjectToInstance - Annotate an NO with the class type
   *
   * @param  {type} class_name    name of the existing logical entity class
   * @param  {type} instance_name name of the existing instance
   * @param  {NarrativeObject} no the Narrative Object to annotate
   */
	}, {
		key: 'addNarrativeObjectToInstance',
		value: function addNarrativeObjectToInstance(className, instanceName, value, narrativeObject) {
			if (this.hasClass(className)) {
				if (this.hasInstanceOfClass(className, instanceName)) {
					this.root[className][instanceName].push(narrativeObject);
					narrativeObject.addAnnotation(className, instanceName, value);

					return true;
				}
			}

			return false;
		}

		/**
   * removeNarrativeObjectFromInstance - Remove a narrative object from a class instance.
   * @param {string} class_name      Name of an existing logical entity class.
   * @param {string} instance_name   Name of an existing instance of the logical entity class.
   * @param {NarrativeObject} no              The Narrative Object to remove.
   */
	}, {
		key: 'removeNarrativeObjectFromInstance',
		value: function removeNarrativeObjectFromInstance(className, instanceName, narrativeObject) {
			if (this.hasClass(className)) {
				if (this.hasInstanceOfClass(className, instanceName)) {
					var removeIndex = this.root[className][instanceName].indexOf(narrativeObject);

					if (removeIndex != -1) {
						this.root[className][instanceName].splice(removeIndex, 1);
						narrativeObject.removeAnnotation(className, instanceName);

						return true;
					}
				}
			}

			return false;
		}

		/**
      * getNarrativeObjectsInClassInstance - Returns an array of NOs which are annotated with the instance
      *
      * @param  {string} class_name    logical entity class name
      * @param  {string} instance_name instance name
      * @return {Array<NarrativeObject>}               a (possibly empty) array of NOs
      */
	}, {
		key: 'getNarrativeObjectsInClassInstance',
		value: function getNarrativeObjectsInClassInstance(className, instanceName) {
			if (this.hasClass(className)) {
				if (this.hasInstanceOfClass(className, instanceName)) {
					return this.root[className][instanceName];
				}
			}

			return [];
		}

		/**
   * matchesOR - Filters a list of NOs which match ANY of the provided instances
   *
   * @param  {Array<LogicalEntity>} logical_entity_list An array of LogicalEntity instances
   * @param  {Array<NarrativeObject>} nos               An array of NarrativeObjects
   * @return {Array<NarrativeObject>}               a (possibly empty) array of NOs
   */
	}, {
		key: 'matchesOR',
		value: function matchesOR(logicalEntityList, narrativeObjects) {
			var that = this;
			return narrativeObjects.filter(function (atom) {
				var found = false;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = logicalEntityList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var instance = _step.value;

						var atoms_in = that.getNarrativeObjectsInClassInstance(instance['class'], instance.instance);
						if (atoms_in.indexOf(atom) != -1) {
							found = true;
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator['return']) {
							_iterator['return']();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				return found;
			});
		}

		/**
   * matches - Filters a list of NOs which match the LogicalEntity instance
   *
   * @param  {LogicalEntity} logical_entity         A LogicalEntity instance
   * @param  {Array<NarrativeObject>} atoms         description
   * @return {Array<NarrativeObject>}               a (possibly empty) array of NOs
  */
	}, {
		key: 'matches',
		value: function matches(logicalEntity, narrativeObjects) {
			var that = this;
			return narrativeObjects.filter(function (atom) {
				var atoms_in = that.getNarrativeObjectsInClassInstance(logicalEntity['class'], logicalEntity.instance);
				return atoms_in.indexOf(atom) != -1;
			});
		}
	}]);

	return Ontology;
})();

exports['default'] = Ontology;

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
	value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _MessengerJs = __webpack_require__(132);

var _MessengerJs2 = _interopRequireDefault(_MessengerJs);

var _SequencerJs = __webpack_require__(131);

var _SequencerJs2 = _interopRequireDefault(_SequencerJs);

var _NarrativeObjectJs = __webpack_require__(42);

/**
 * 
 * The main graph structure for an interactive narrative
 * @export
 * @class Graph
 */

var Graph = (function () {
	function Graph() {
		_classCallCheck(this, Graph);

		this.narrativeObjects = {};
		this.rootNO = Graph.noRoot;
		this.sequencer = new _SequencerJs2['default']();
		this.stop = true;
		this.renderUpdate = undefined;
		this.currentNarrativeObject = undefined;
		// How many iterations have been taken in the current processing loop.
		this.processStepCount = 0;
		// The maximum number of iterations allowed before a sequence is pushed.
		this.maxProcessingSteps = 20;

		this.reset();
	}

	/**
  * 
  * @param {NarrativeObject} root - Set the root Narrative Object (first Narrative Object to be processed). 
  * @returns {boolean} - indicates if setting root was successful.
  * @memberof Graph
  */

	_createClass(Graph, [{
		key: 'setRoot',
		value: function setRoot(root_no) {
			if (root_no != undefined) {
				return this.setRootFromId(root_no.id);
			}

			return false;
		}

		/**
   * Set the root narrative object of the graph from an Id.
   * @param {number} rootId 
   */
	}, {
		key: 'setRootFromId',
		value: function setRootFromId(rootId) {
			if (this.hasNarrativeObject(rootId)) {
				this.rootNO = rootId;

				return true;
			}

			return false;
		}

		/**
   * 
   * Return the root Narrative Object
   * @returns {NarrativeObject|undefined}
   * @memberof Graph
   */
	}, {
		key: 'getRoot',
		value: function getRoot() {
			if (this.hasRoot()) {
				return this.narrativeObjects[this.rootNO];
			}

			return undefined;
		}

		/**
   * 
   * Checks if a root Narrative Object has been assigned.
   * @returns {boolean} 
   * @memberof Graph
   */
	}, {
		key: 'hasRoot',
		value: function hasRoot() {
			return this.rootNO != Graph.noRoot;
		}

		/**
   * Resets the root Narrative Object.
   * 
   * @memberof Graph
   */
	}, {
		key: 'resetRoot',
		value: function resetRoot() {
			this.rootNO = Graph.noRoot;
		}

		/**
   * Sets the default root to the next oldest narrative object or resets it if no other narrative objects exist.
   */
	}, {
		key: 'setRootToDefault',
		value: function setRootToDefault() {
			var narrativeObjectKeys = Object.keys(this.narrativeObjects);

			if (narrativeObjectKeys.length > 0) {
				this.setRoot(this.narrativeObjects[narrativeObjectKeys[0]]);
			} else {
				this.resetRoot();
			}
		}

		/**
   * 
   * Adds a narrative Object to the graph.
   * @param {NarrativeObject} narrativeObject 
   * @returns {boolean} Indicates if successfully added.
   * @memberof Graph
   */
	}, {
		key: 'addNarrativeObject',
		value: function addNarrativeObject(narrative_object) {
			if (!this.hasNarrativeObject(narrative_object.id)) {
				this.narrativeObjects[narrative_object.id] = narrative_object;

				return true;
			}

			return false;
		}

		/**
   * 
   * Removes a Narrative Object from the graph.
   * @param {NarrativeObject} narrativeObject 
   * @returns {boolean} Indicates if successfully removed.
   * @memberof Graph
   */
	}, {
		key: 'removeNarrativeObject',
		value: function removeNarrativeObject(narrative_object) {
			// Check the associative array for a matching key.
			if (this.hasNarrativeObject(narrative_object.id)) {
				// Get the narrative object to be deleted.
				var narrativeObject = this.narrativeObjects[narrative_object.id];

				// Iterate all narrative objects in graph.
				for (var key in this.narrativeObjects) {
					// If not the one being deleted.
					if (this.narrativeObjects[key] != narrativeObject) {
						// If a group or a layered, remove from that
						// narrative object if contained within.
						switch (this.narrativeObjects[key].type) {
							case _NarrativeObjectJs.NarrativeObjectTypes.GROUP:

								var group = this.narrativeObjects[key];

								group.removeNarrativeObject(narrativeObject);

								break;

							case _NarrativeObjectJs.NarrativeObjectTypes.LAYERED:

								var layered = this.narrativeObjects[key];

								layered.removeNarrativeObjectFromLayers(narrativeObject);

								break;
						}
					}
				}

				// Get inputs for the object being deleted and remove it as an output for the linked NOs.
				for (var i = narrativeObject.outputs.length - 1; i >= 0; i--) {
					if (this.hasNarrativeObject(narrativeObject.outputs[i])) {
						narrativeObject.removeOutput(this.narrativeObjects[narrativeObject.outputs[i]]);
					}
				}

				for (var i = narrativeObject.inputs.length - 1; i >= 0; i--) {
					if (this.hasNarrativeObject(narrativeObject.inputs[i])) {
						narrativeObject.removeInput(this.narrativeObjects[narrativeObject.inputs[i]]);
					}
				}

				// This is the destructor for the narrative object base class.
				narrativeObject.destroy();

				// If key exists, delete the value.
				delete this.narrativeObjects[narrative_object.id];

				// If the root was deleted, then set a new root.
				if (this.rootNO == narrative_object.id) {
					this.setRootToDefault();
				}

				return true;
			}

			return false;
		}

		/**
   * 
   * Returns a Narrative Object in the graph from its ID
   * @param {string} id A Narrative Object ID 
   * @returns {NarrativeObject|undefined}
   * @memberof Graph
   */
	}, {
		key: 'getNarrativeObject',
		value: function getNarrativeObject(no_id) {
			if (this.hasNarrativeObject(no_id)) {
				return this.narrativeObjects[no_id];
			}

			return undefined;
		}

		/**
   * Checks if a Narrative Object exists within the graph by its ID
   * 
   * @param {string} id 
   * @returns {boolean} Indicates whether the Narrative Object exists.
   * @memberof Graph
   */
	}, {
		key: 'hasNarrativeObject',
		value: function hasNarrativeObject(no_id) {
			if (this.narrativeObjects.hasOwnProperty(no_id)) {
				return true;
			}

			return false;
		}

		/**
   * Get all narrative objects in this graph.
   */
	}, {
		key: 'getAllNarrativeObjects',
		value: function getAllNarrativeObjects() {
			return this.narrativeObjects;
		}
	}, {
		key: 'setNarrativeObjectId',
		value: function setNarrativeObjectId(narrativeObject, id) {
			if (this.hasNarrativeObject(id)) {
				// Cant throw away a different NO with same key.
				return false;
			}

			if (this.hasNarrativeObject(narrativeObject.id)) {
				this.narrativeObjects[id] = narrativeObject;
				delete this.narrativeObjects[narrativeObject.id];
			}

			narrativeObject.setId(id);

			return true;
		}

		/**
   * Resets the graph
   * 
   * @memberof Graph
   */
	}, {
		key: 'reset',
		value: function reset() {
			this.narrativeObjects = {};
			this.resetRoot();
			this.resetProcessingVariables();
		}
	}, {
		key: 'resetSequencer',
		value: function resetSequencer() {
			this.processCount = 0;
			this.sequencer = new _SequencerJs2['default']();
			this.resetProcessingVariables();
		}
	}, {
		key: '_resetPlayed',
		value: function _resetPlayed() {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.entries(this.narrativeObjects)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _step$value = _slicedToArray(_step.value, 2);

					var key = _step$value[0];
					var no = _step$value[1];

					no.hasPlayed = false;
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator['return']) {
						_iterator['return']();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}, {
		key: 'initialise',
		value: function initialise(worldContext) {
			for (var key in this.narrativeObjects) {
				var narrativeObject = this.narrativeObjects[key];

				narrativeObject.initialise(worldContext);
			}
		}
	}, {
		key: 'startProcessing',
		value: function startProcessing(worldContext) {
			this.stop = false;

			this._resetPlayed();

			function stepIterator() {
				iterator.next();
			}

			function stopIterator() {
				iterator['return']();
			}

			var iterator = this.startProcessingGenerator(stepIterator, stopIterator, worldContext);
			console.log("Iterator Started");
			iterator.next();
			console.log("Iterator Finished");
		}
	}, {
		key: 'startProcessingGenerator',
		value: regeneratorRuntime.mark(function startProcessingGenerator(stepIterator, stopIterator, worldContext) {
			return regeneratorRuntime.wrap(function startProcessingGenerator$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						console.log("Processing Started");

						if (!(this.currentNarrativeObject != undefined)) {
							context$2$0.next = 3;
							break;
						}

						return context$2$0.delegateYield(this.currentNarrativeObject.process(stepIterator, stopIterator, worldContext, this.sendToSequencer.bind(this), this.sequencer.getMainThreadId()), 't0', 3);

					case 3:

						console.log("Processing Complete");

					case 4:
					case 'end':
						return context$2$0.stop();
				}
			}, startProcessingGenerator, this);
		})
	}, {
		key: 'sendToSequencer',
		value: function sendToSequencer(atom, sequencerThreadId) {
			// Increment the process count.
			this.processCount++;

			if (atom.canBeSequenced()) {
				console.log("Pushing to sequencer: " + atom.flowPackage.url);

        logAtom(atom);
				// If something new was pushed.
				if (this.sequencer.sendToThread(atom, sequencerThreadId)) {
					this.callRenderUpdate();
				}
			} else {
				console.log("Atom could not be sequenced. The sequencer has skipped this atom.");
			}
		}
	}, {
		key: 'resetProcessCount',
		value: function resetProcessCount() {
			this.processCount = 0;
		}
	}, {
		key: 'processedMaxNarrativeObjects',
		value: function processedMaxNarrativeObjects() {
			return this.processCount >= this.maxProcessingSteps;
		}
	}, {
		key: 'stopProcessing',
		value: function stopProcessing() {
			this.sequencer.endCurrentSequence();
			this.callRenderUpdate();
			this.stop = true;
			this.resetProcessingVariables();
		}
	}, {
		key: 'isProcessing',
		value: function isProcessing() {
			return !this.stop;
		}
	}, {
		key: 'resetProcessingVariables',
		value: function resetProcessingVariables() {
			this.stop = true;
			this.processCount = 0;
			this.narrativeObjectsWithNoProcessOutput = [];
		}
	}, {
		key: 'setRenderUpdate',
		value: function setRenderUpdate(renderUpdate) {
			this.renderUpdate = renderUpdate;
		}
	}, {
		key: 'callRenderUpdate',
		value: function callRenderUpdate() {
			this.renderUpdate(this.sequencer.playhead_clock, this.sequencer.mostRecentSequence());
		}
	}]);

	return Graph;
})();

exports['default'] = Graph;

Graph.noRoot = "none";
module.exports = exports['default'];

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _WorldContextJs = __webpack_require__(94);

/**
 * A media flow package.
 * @constructor
 * @param {string} url - A media URL.
 * @param {number=} duration - Duration of the clip (If not defined, then the duration will be auto detected).
 * @param {MediaTypes} mediaType - The type of media associated with this flow package.
 * @param {object} data - Data storage object for this flow package.
 */

var FlowPackage = (function () {
	function FlowPackage(media_url) {
		var duration = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];
		var mediaType = arguments.length <= 2 || arguments[2] === undefined ? _WorldContextJs.MediaTypes.UNDEFINED : arguments[2];
		var data = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

		_classCallCheck(this, FlowPackage);

		/**
  * The URL of the media clip / image
  * @readonly
  * @member {string}
  * */
		this.url = media_url;

		/**
  * The duration in seconds of the media clip
  * @readonly
  * @member {number}
  * */
		this.duration = duration;

		/**
   * The type of media assigned to this flow package.
   */
		this.mediaType = mediaType;

		/**
   * Data storage for this flow package.
   * This can be used to store any neccessary data.
   */
		this.data = data;

		/**
   * UID for this flow package.
   */
		this.id = this.generateId();

		FlowPackage.instances.push(this);
	}

	_createClass(FlowPackage, [{
		key: "destroy",
		value: function destroy() {
			var removeIndex = FlowPackage.instances.indexOf(this);

			if (removeIndex != -1) {
				FlowPackage.instances.splice(removeIndex, 1);
			}
		}
	}, {
		key: "setMedia",
		value: function setMedia(url) {
			var duration = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];
			var mediaType = arguments.length <= 2 || arguments[2] === undefined ? _WorldContextJs.MediaTypes.UNDEFINED : arguments[2];

			this.url = url;
			this.duration = duration;
			this.mediaType = mediaType;
		}
	}, {
		key: "isImage",
		value: function isImage() {
			return this.mediaType == _WorldContextJs.MediaTypes.IMAGE;
		}
	}, {
		key: "isVideo",
		value: function isVideo() {
			return this.mediaType == _WorldContextJs.MediaTypes.VIDEO;
		}
	}, {
		key: "isBlank",
		value: function isBlank() {
			return this.url == undefined;
		}
	}, {
		key: "generateId",
		value: function generateId() {
			// Start highest at -1 as 1 is added during return to increment. So 0 is the first returned value.
			var highestId = -1;

			for (var i = 0; i < FlowPackage.instances.length; i++) {
				if (FlowPackage.instances[i].id > highestId) {
					highestId = Number(FlowPackage.instances[i].id);
				}
			}

			return (highestId + 1).toString();
		}
	}]);

	return FlowPackage;
})();

exports["default"] = FlowPackage;

FlowPackage.instances = [];
module.exports = exports["default"];

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _NarrativeObjectJs = __webpack_require__(42);

var _NarrativeObjectJs2 = _interopRequireDefault(_NarrativeObjectJs);

var _AtomJs = __webpack_require__(50);

var _AtomJs2 = _interopRequireDefault(_AtomJs);

var _LayerJs = __webpack_require__(95);

var _LayerJs2 = _interopRequireDefault(_LayerJs);

/**
 * @global
 * @description A custom defined function for selecting which {@link Layer} objects are processed in a {@link Layered} object.
 * @function LayerSelectionFunction
 * @param {Layer} master - The Master layer.
 * @param {Layer[]} slaves - The other layers in the Layered Object.
 * @returns {Layer[]} The selected layers to process.
 */

/**
 * A Layered Narrative Object structure.
 * @tutorial 5_layered
 * @extends {NarrativeObject}
 * @constructor
 * @param {object=} data - Data associated with the layered object.
 */

var Layered = (function (_NarrativeObject) {
	_inherits(Layered, _NarrativeObject);

	function Layered() {
		var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		var addMaster = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

		_classCallCheck(this, Layered);

		_get(Object.getPrototypeOf(Layered.prototype), "constructor", this).call(this, data);

		this.type = _NarrativeObjectJs.NarrativeObjectTypes.LAYERED;

		this.layers = {};

		// Selection function prototype (masterLayer, slaveLayers, worldContext).
		// Returns array of selected layers.
		this.selectionFunction = undefined;

		this.resetSelectionFunction();

		// This holds the layers selected by the layer selection function.
		// These are only selected once and then stored.
		this.selectedLayers = [];

		if (addMaster) {
			// Create a default master layer.
			this.addLayer(_LayerJs.LayerType.MASTER);
		}
	}

	/**
  * Return whether this layered object has a layer with the passed id.
  * @param {Number} layerId 
  */

	_createClass(Layered, [{
		key: "hasLayer",
		value: function hasLayer(layerId) {
			return this.layers.hasOwnProperty(layerId);
		}

		/**
   * Query whether any layer in this layered contains the passed narrative object.
   * @param {NarrativeObject} narrativeObject 
   */
	}, {
		key: "hasNarrativeObjectInLayers",
		value: function hasNarrativeObjectInLayers(narrativeObject) {
			for (var key in this.layers) {
				if (this.layers[key].hasNarrativeObject(narrativeObject)) {
					return true;
				}
			}

			return false;
		}

		/**
   * Remove a narrative object from any layers which contain it.
   * @param {NarrativeObject} narrativeObject 
   */
	}, {
		key: "removeNarrativeObjectFromLayers",
		value: function removeNarrativeObjectFromLayers(narrativeObject) {
			for (var key in this.layers) {
				this.layers[key].removeNarrativeObject(narrativeObject);
			}
		}

		/**
   * Return a list of all narrative objects in all layers within this layered object.
   */
	}, {
		key: "getAllNarrativeObjectIds",
		value: function getAllNarrativeObjectIds() {
			var narrativeObjectIds = [];

			for (var key in this.layers) {
				var ids = this.layers[key].getAllNarrativeObjectIds();

				for (var i = 0; i < ids.length; i++) {
					narrativeObjectIds.push(ids[i]);
				}
			}

			return narrativeObjectIds;
		}

		/**
   * 
   * Adds a Layer.
   * @param {LayerType} [layerType=LayerType.DEFAULT] 
   * @returns {Layer} The Layer added.
   * @memberof Layered
   */
	}, {
		key: "addLayer",
		value: function addLayer() {
			var layerType = arguments.length <= 0 || arguments[0] === undefined ? _LayerJs.LayerType.DEFAULT : arguments[0];

			if (layerType == _LayerJs.LayerType.masterLayer) {
				if (this.hasMasterLayer()) {
					var masterLayer = this.getMasterLayer();

					masterLayer.setLayerType(_LayerJs.LayerType.DEFAULT);
				}
			}

			var layer = new _LayerJs2["default"](layerType);

			this.layers[layer.id] = layer;

			return layer;
		}

		/**
   * Returns a Layer by its Layer ID.
   * 
   * @param {number} id The Layer ID. 
   * @returns {Layer|undefined} 
   * @memberof Layered
   */
	}, {
		key: "getLayer",
		value: function getLayer(layerID) {
			if (this.layers.hasOwnProperty(layerID)) {
				return this.layers[layerID];
			}

			return undefined;
		}

		/**
   * Removes a Layer.
   * 
   * @param {Layer} layer 
   * @returns {boolean} Indicates successfuly removed.
   * @memberof Layered
   */
	}, {
		key: "removeLayer",
		value: function removeLayer(layer) {
			if (this.layers.hasOwnProperty(layer.id)) {
				this.layers[layer.id].destroy();

				delete this.layers[layer.id];

				// Ensure that there is always a master layer if no other layers exist.
				if (Object.keys(this.layers).length == 0) {
					this.addLayer(_LayerJs.LayerType.MASTER);
				}

				return true;
			}

			return false;
		}

		/**
   * Checks if the Layered structure has a Master Layer.
   * 
   * @returns {boolean}
   * @memberof Layered
   */
	}, {
		key: "hasMasterLayer",
		value: function hasMasterLayer() {
			return this.getMasterLayer() != undefined;
		}

		// TODO: Optimisation: Possibly keep reference to current master layer and slave layers rather than cycling through and generating these each time.

		/**
   * 
   * Returns the Master Layer if one exists.
   * @returns {Layer|undefined} 
   * @memberof Layered
   */
	}, {
		key: "getMasterLayer",
		value: function getMasterLayer() {
			for (var key in this.layers) {
				if (this.layers[key].getLayerType() == _LayerJs.LayerType.MASTER) {
					return this.layers[key];
				}
			}

			return undefined;
		}

		/**
   * Set the master layer for this layered object.
   * @param {Number} layerId 
   */
	}, {
		key: "setMasterLayer",
		value: function setMasterLayer(layerId) {
			if (this.hasLayer(layerId)) {
				for (var key in this.layers) {
					if (this.layers[key].isMasterLayer()) {
						this.layers[key].setLayerType(_LayerJs.LayerType.DEFAULT);
					}
				}

				this.layers[layerId].setLayerType(_LayerJs.LayerType.MASTER);
			}
		}
	}, {
		key: "toggleMasterLayer",
		value: function toggleMasterLayer(layerId) {
			// If layer exists.
			if (this.hasLayer(layerId)) {
				// If master layer exists.
				if (this.hasMasterLayer()) {
					var masterLayer = this.getMasterLayer();

					// If the layer being toggled is the current master
					// then disable it as the master layer.
					if (masterLayer.id == layerId) {
						masterLayer.setLayerType(_LayerJs.LayerType.DEFAULT);

						// Return as we have now done the required action.
						return;
					}
				}

				// No master or different master so set it to the passed layer Id.
				this.setMasterLayer(layerId);
			}
		}

		/**
   * 
   * Returns a List of Slave Layers.
   * @returns {Layer[]} 
   * @memberof Layered
   */
	}, {
		key: "getSlaveLayers",
		value: function getSlaveLayers() {
			var slaves = [];

			for (var key in this.layers) {
				if (this.layers[key].getLayerType() != _LayerJs.LayerType.MASTER) {
					slaves.push(this.layers[key]);
				}
			}

			return slaves;
		}

		/**
   * 
   * Assigns a {@link LayerSelectionFunction}.
   * @param {LayerSelectonFunction} lFunc 
   * @param {string} Name of the function.
   * @memberof Layered
   */
	}, {
		key: "setSelectionFunction",
		value: function setSelectionFunction(selectionFunction, functionName) {
			if (selectionFunction != undefined) {
				this.selectionFunction = selectionFunction;
			}

			this.data[_NarrativeObjectJs.FunctionTypes.LAYER_SELECTION] = functionName;
		}

		/**
   * Resets the {@link LayerSelectionFunction} to default (Select all layers).
   * 
   * @memberof Layered
   */
	}, {
		key: "resetSelectionFunction",
		value: function resetSelectionFunction() {
			// Default returns all layers.
			this.selectionFunction = function (masterLayer, slaveLayers, worldContext) {
				var selectedLayers = [];

				if (masterLayer != undefined) {
					selectedLayers.push(masterLayer);
				}

				for (var key in slaveLayers) {
					selectedLayers.push(slaveLayers[key]);
				}

				return selectedLayers;
			};

			this.data[_NarrativeObjectJs.FunctionTypes.LAYER_SELECTION] = undefined;
		}
	}, {
		key: "initialise",
		value: function initialise(worldContext) {
			for (var key in this.layers) {
				this.layers[key].initialise(worldContext);
			}
		}
	}, {
		key: "_sortLayers",
		value: function _sortLayers() {
			// Move the master layer to be processed first.
			if (this.masterLayerSelected) {
				var selectedLayersSorted = [];

				for (var i = 0; i < this.selectedLayers.length; i++) {
					// Ensure master layer is in array index 0 so its processed first.
					if (i == masterLayerIndex) {
						selectedLayersSorted.splice(0, 0, this.selectedLayers[i]);
					} else {
						selectedLayersSorted.push(this.selectedLayers[i]);
					}
				}

				this.selectedLayers = selectedLayersSorted;
			}
		}
	}, {
		key: "process",
		value: regeneratorRuntime.mark(function process(stepIterator, stopIterator, worldContext, sendToSequencer, sequencerThreadId) {
			var masterLayer, selectedLayers, i, masterLayerSelected, layerInfos, processIdCounter, key, _loop, longestTimelineKey, longestTimelineDuration, finalInteractionId, currentAtom, outputId, outputNarrativeObject;

			return regeneratorRuntime.wrap(function process$(context$2$0) {
				var _this = this;

				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						this.hasPlayed = true;

						// Get the master layer if one exists.
						masterLayer = this.getMasterLayer();
						selectedLayers = this.selectionFunction(masterLayer, this.getSlaveLayers(), worldContext);

						// Remove any layers which are selected but empty.
						for (i = selectedLayers.length - 1; i >= 0; i--) {
							if (selectedLayers[i].isEmpty()) {
								selectedLayers.splice(i, 1);
							}
						}

						// Check if the master layer has been selected.
						masterLayerSelected = selectedLayers.indexOf(masterLayer) != -1;
						layerInfos = {};
						processIdCounter = sequencerThreadId + 1;

						// For all layers to be processed, set up the new threads.
						for (key in selectedLayers) {
							if (selectedLayers[key] == masterLayer) {
								layerInfos[key] = { processId: sequencerThreadId, processedAtoms: [], processedDuration: 0, sequencerThreadId: -1, isMasterLayer: true };
							} else {
								layerInfos[key] = { processId: processIdCounter++, processedAtoms: [], processedDuration: 0, sequencerThreadId: -1, isMasterLayer: false };
							}
						}

						_loop = regeneratorRuntime.mark(function callee$2$0(key) {
							var layerRootNarrativeObject;
							return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
								while (1) switch (context$3$0.prev = context$3$0.next) {
									case 0:
										if (!selectedLayers[key].hasRootNarrativeObject()) {
											context$3$0.next = 3;
											break;
										}

										layerRootNarrativeObject = worldContext.getNarrativeObject(selectedLayers[key].getRootNarrativeObjectId());
										return context$3$0.delegateYield(layerRootNarrativeObject.process(stepIterator, stopIterator, worldContext, function (atom, processId) {
											layerInfos[key].processedAtoms.push(atom);
										}, layerInfos[key].processId, false), "t0", 3);

									case 3:
									case "end":
										return context$3$0.stop();
								}
							}, callee$2$0, _this);
						});
						context$2$0.t0 = regeneratorRuntime.keys(selectedLayers);

					case 10:
						if ((context$2$0.t1 = context$2$0.t0()).done) {
							context$2$0.next = 15;
							break;
						}

						key = context$2$0.t1.value;
						return context$2$0.delegateYield(_loop(key), "t2", 13);

					case 13:
						context$2$0.next = 10;
						break;

					case 15:

						for (key in layerInfos) {
							for (i = 0; i < layerInfos[key].processedAtoms.length; i++) {
								layerInfos[key].processedDuration += layerInfos[key].processedAtoms[i].waitBeforeStartDuration + layerInfos[key].processedAtoms[i].duration;
							}
						}

						// Sequencer thread of the longest thread.
						longestTimelineKey = undefined;
						longestTimelineDuration = 0;

						if (!masterLayerSelected) {
							context$2$0.next = 30;
							break;
						}

						context$2$0.t3 = regeneratorRuntime.keys(layerInfos);

					case 20:
						if ((context$2$0.t4 = context$2$0.t3()).done) {
							context$2$0.next = 28;
							break;
						}

						key = context$2$0.t4.value;

						if (!layerInfos[key].isMasterLayer) {
							context$2$0.next = 26;
							break;
						}

						longestTimelineKey = key;
						longestTimelineDuration = layerInfos[key].processedDuration;

						return context$2$0.abrupt("break", 28);

					case 26:
						context$2$0.next = 20;
						break;

					case 28:
						context$2$0.next = 31;
						break;

					case 30:
						for (key in layerInfos) {
							if (layerInfos[key].processedDuration > longestTimelineDuration) {
								longestTimelineKey = key;
								longestTimelineDuration = layerInfos[key].processedDuration;
							}
						}

					case 31:

						for (key in layerInfos) {
							// If the key is the longest, then it uses the main thread.
							if (key == longestTimelineKey) {
								layerInfos[key].sequencerThreadId = sequencerThreadId;
							}
							// Else a new thread is created.
							else {
									layerInfos[key].sequencerThreadId = worldContext.createSequencerThread(longestTimelineDuration);
								}
						}

						// Id of the final interaction.
						// This is only used for the master layer.
						finalInteractionId = -1;

						for (key in layerInfos) {
							for (i = 0; i < layerInfos[key].processedAtoms.length; i++) {
								currentAtom = layerInfos[key].processedAtoms[i];

								if (layerInfos[key].isMasterLayer) {
									if (currentAtom.hasInteractions()) {
										finalInteractionId = currentAtom.getFinalInteractionId();
									}
								}

								sendToSequencer(currentAtom, layerInfos[key].sequencerThreadId);
							}
						}

						// Slave layers shouldnt have interactions, so only check this if master layer.

						if (!masterLayerSelected) {
							context$2$0.next = 46;
							break;
						}

						if (!(finalInteractionId != -1)) {
							context$2$0.next = 46;
							break;
						}

					case 36:
						if (worldContext.getInteraction(finalInteractionId).isComplete()) {
							context$2$0.next = 46;
							break;
						}

						if (worldContext.isProcessing()) {
							context$2$0.next = 42;
							break;
						}

						stopIterator();

						return context$2$0.abrupt("break", 46);

					case 42:
						context$2$0.next = 44;
						return this.wait(stepIterator);

					case 44:
						context$2$0.next = 36;
						break;

					case 46:
						if (!worldContext.graph.processedMaxNarrativeObjects()) {
							context$2$0.next = 50;
							break;
						}

						worldContext.graph.resetProcessCount();
						context$2$0.next = 50;
						return this.wait(stepIterator);

					case 50:
						outputId = this.selectOutput(worldContext);

						if (!(outputId != _NarrativeObjectJs2["default"].terminate)) {
							context$2$0.next = 55;
							break;
						}

						outputNarrativeObject = worldContext.getNarrativeObject(outputId);

						if (!(outputNarrativeObject != undefined)) {
							context$2$0.next = 55;
							break;
						}

						return context$2$0.delegateYield(outputNarrativeObject.process(stepIterator, stopIterator, worldContext, sendToSequencer, sequencerThreadId), "t5", 55);

					case 55:
					case "end":
						return context$2$0.stop();
				}
			}, process, this);
		})
	}]);

	return Layered;
})(_NarrativeObjectJs2["default"]);

exports["default"] = Layered;
module.exports = exports["default"];

// Do layer selection.

// Use dummy ids for initial process, these will be pushed to actual thread after process.

// Process the root narrative object atom in each layer (which will recurse down).
// Set the final flag to false as we do not want to break processing for interactions.

// Wait for the final interaction to complete before processing output.

// Check to see if we should wait a frame (allowing sequencer to process passed data to this point).
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)))

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _videocontext = __webpack_require__(344);

var _videocontext2 = _interopRequireDefault(_videocontext);

/**
 * The renderer (uses Video Context).
 * @constructor
 * @param {OBBEngine} - the main engine.
 * @param {HTMLElement} - a HTML canvas element to assign to VideoContext for rendering playback
 */

var Renderer = (function () {
	function Renderer(engine, canvas) {
		_classCallCheck(this, Renderer);

		this.videoContext = new _videocontext2['default'](canvas);
		this.timeline_active = false;
		this.engine = engine;
		this.engine.setRenderUpdate(this.renderCallback.bind(this));

		this.interactionFunctions = undefined;
	}

	/**
  * 
  * return the VideoContext
  * @returns {VideoContext} 
  * @memberof Renderer
  */

	_createClass(Renderer, [{
		key: 'getVideoContext',
		value: function getVideoContext() {
			return this.videoContext;
		}
	}, {
		key: 'addTimeline',
		value: function addTimeline(t_canvas) {
			this.timeline_active = true;
			var box = t_canvas.getBoundingClientRect();
			var left = box.left + window.pageXOffset - document.documentElement.clientLeft;
			var width = t_canvas.clientWidth;
			this.timeline_canvas = t_canvas;
			this.timeline_canvas.addEventListener('click', (function (e) {
				if (this.videoContext != undefined && e != undefined) {
					var seconds_per_pixel = this.videoContext.duration / width;
					this.videoContext.currentTime = seconds_per_pixel * (e.x - left);
					this.videoContext.pause();
				}
			}).bind(this));
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.timeline_active) {
				_videocontext2['default'].visualiseVideoContextTimeline(this.videoContext, this.timeline_canvas, this.videoContext.currentTime);
			}
			requestAnimationFrame(this.render.bind(this));
			this.engine.updateClock(this.videoContext.currentTime);
		}
	}, {
		key: 'start',
		value: function start() {
			this.videoContext.play();
			requestAnimationFrame(this.render.bind(this));
		}
	}, {
		key: 'renderCallback',
		value: function renderCallback(clock_time, new_thread) {
			var _this = this;

			console.log(new_thread);

			// For each video which should be rendered.
			for (var i = 0; i < new_thread["videos"].length; ++i) {
				var video = new_thread["videos"][i];
				var source = video["url"];
				// Get file extension of the source media.
				var ext = source.substr(source.lastIndexOf('.') + 1);
				if (ext == 'jpg' || ext == 'png') {
					var image_node = this.videoContext.image(source);
					image_node.startAt(video["start"]);
					image_node.stopAt(video["end"]);
					image_node.connect(this.videoContext.destination);
				} else {
					var video_node = this.videoContext.video(source, video["offset"]);
					video_node.startAt(video["start"]);
					video_node.stopAt(video["end"]);
					video_node.connect(this.videoContext.destination);
				}
			}

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				var _loop = function () {
					var interaction = _step.value;

					if (_this.interactionFunctions != undefined) {
						(function () {
							var functionKey = interaction.data.hasOwnProperty('function') ? interaction.data['function'] : "Default";
							var interactionFunction = _this.interactionFunctions[functionKey];
							_this.videoContext.registerTimelineCallback(interaction.time, (function () {
								interactionFunction(this.engine.worldContext, interaction, interaction.data);
							}).bind(_this));
						})();
					} else {
						console.log("interaction functions not loaded!");
					}
				};

				for (var _iterator = new_thread.interactions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					_loop();
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator['return']) {
						_iterator['return']();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}, {
		key: 'setInteractionFunctions',
		value: function setInteractionFunctions(functions) {
			this.interactionFunctions = functions;
		}
	}, {
		key: 'interactionUpdate',
		value: function interactionUpdate() {
			console.log("interaction not implemented");
		}
	}, {
		key: 'getTime',
		value: function getTime() {
			return this.videoContext.currentTime;
		}
	}]);

	return Renderer;
})();

exports['default'] = Renderer;
module.exports = exports['default'];

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports = factory();else if(typeof define === 'function' && define.amd)define([],factory);else if(typeof exports === 'object')exports["VideoContext"] = factory();else root["VideoContext"] = factory();})(undefined,function(){return  (/******/(function(modules){ // webpackBootstrap
/******/ // The module cache
/******/var installedModules={}; /******/ /******/ // The require function
/******/function __webpack_require__(moduleId){ /******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]) /******/return installedModules[moduleId].exports; /******/ /******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId] = { /******/exports:{}, /******/id:moduleId, /******/loaded:false /******/}; /******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__); /******/ /******/ // Flag the module as loaded
/******/module.loaded = true; /******/ /******/ // Return the exports of the module
/******/return module.exports; /******/} /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m = modules; /******/ /******/ // expose the module cache
/******/__webpack_require__.c = installedModules; /******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p = ""; /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(0); /******/})( /************************************************************************/ /******/[ /* 0 */function(module,exports,__webpack_require__){ //Matthew Shotton, R&D User Experience,© BBC 2015
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var _SourceNodesVideonodeJs=__webpack_require__(1);var _SourceNodesVideonodeJs2=_interopRequireDefault(_SourceNodesVideonodeJs);var _SourceNodesImagenodeJs=__webpack_require__(27);var _SourceNodesImagenodeJs2=_interopRequireDefault(_SourceNodesImagenodeJs);var _SourceNodesCanvasnodeJs=__webpack_require__(28);var _SourceNodesCanvasnodeJs2=_interopRequireDefault(_SourceNodesCanvasnodeJs);var _SourceNodesSourcenodeJs=__webpack_require__(2);var _ProcessingNodesCompositingnodeJs=__webpack_require__(29);var _ProcessingNodesCompositingnodeJs2=_interopRequireDefault(_ProcessingNodesCompositingnodeJs);var _DestinationNodeDestinationnodeJs=__webpack_require__(32);var _DestinationNodeDestinationnodeJs2=_interopRequireDefault(_DestinationNodeDestinationnodeJs);var _ProcessingNodesEffectnodeJs=__webpack_require__(33);var _ProcessingNodesEffectnodeJs2=_interopRequireDefault(_ProcessingNodesEffectnodeJs);var _ProcessingNodesTransitionnodeJs=__webpack_require__(34);var _ProcessingNodesTransitionnodeJs2=_interopRequireDefault(_ProcessingNodesTransitionnodeJs);var _rendergraphJs=__webpack_require__(35);var _rendergraphJs2=_interopRequireDefault(_rendergraphJs);var _videoelementcacheJs=__webpack_require__(36);var _videoelementcacheJs2=_interopRequireDefault(_videoelementcacheJs);var _utilsJs=__webpack_require__(3);var _DefinitionsDefinitionsJs=__webpack_require__(4);var _DefinitionsDefinitionsJs2=_interopRequireDefault(_DefinitionsDefinitionsJs);var updateablesManager=new _utilsJs.UpdateablesManager(); /**
	 * VideoContext.
	 * @module VideoContext
	 */var VideoContext=(function(){ /**
	    * Initialise the VideoContext and render to the specific canvas. A 2nd parameter can be passed to the constructor which is a function that get's called if the VideoContext fails to initialise.
	    *
	    * @param {Canvas} canvas - the canvas element to render the output to.
	    * @param {function} initErrorCallback - a callback for if initialising the canvas failed.
	    * @param {Object} options - a nuber of custom options which can be set on the VideoContext, generally best left as default.
	    *
	    * @example
	    * var canvasElement = document.getElementById("canvas");
	    * var ctx = new VideoContext(canvasElement, function(){console.error("Sorry, your browser dosen\'t support WebGL");});
	    * var videoNode = ctx.video("video.mp4");
	    * videoNode.connect(ctx.destination);
	    * videoNode.start(0);
	    * videoNode.stop(10);
	    * ctx.play();
	    *
	    */function VideoContext(canvas,initErrorCallback){var options=arguments.length <= 2 || arguments[2] === undefined?{"preserveDrawingBuffer":true,"manualUpdate":false,"endOnLastSourceEnd":true,useVideoElementCache:true,videoElementCacheSize:6,webglContextAttributes:{preserveDrawingBuffer:true,alpha:false}}:arguments[2];_classCallCheck(this,VideoContext);this._canvas = canvas;var manualUpdate=false;this.endOnLastSourceEnd = true;var webglContextAttributes={preserveDrawingBuffer:true,alpha:false};if("manualUpdate" in options)manualUpdate = options.manualUpdate;if("endOnLastSourceEnd" in options)this._endOnLastSourceEnd = options.endOnLastSourceEnd;if("webglContextAttributes" in options)webglContextAttributes = options.webglContextAttributes;if(webglContextAttributes.alpha === undefined)webglContextAttributes.alpha = false;if(webglContextAttributes.alpha === true){console.error("webglContextAttributes.alpha must be false for correct opeation");}this._gl = canvas.getContext("experimental-webgl",webglContextAttributes);if(this._gl === null){console.error("Failed to intialise WebGL.");if(initErrorCallback)initErrorCallback();return;} // Initialise the video element cache
if(options.useVideoElementCache === undefined)options.useVideoElementCache = true;this._useVideoElementCache = options.useVideoElementCache;if(this._useVideoElementCache){if(!options.videoElementCacheSize)options.videoElementCacheSize = 5;this._videoElementCache = new _videoelementcacheJs2["default"](options.videoElementCacheSize);} // Create a unique ID for this VideoContext which can be used in the debugger.
if(this._canvas.id){if(typeof this._canvas.id === "string" || this._canvas.id instanceof String){this._id = canvas.id;}}if(this._id === undefined)this._id = (0,_utilsJs.generateRandomId)();if(window.__VIDEOCONTEXT_REFS__ === undefined)window.__VIDEOCONTEXT_REFS__ = {};window.__VIDEOCONTEXT_REFS__[this._id] = this;this._renderGraph = new _rendergraphJs2["default"]();this._sourceNodes = [];this._processingNodes = [];this._timeline = [];this._currentTime = 0;this._state = VideoContext.STATE.PAUSED;this._playbackRate = 1.0;this._volume = 1.0;this._sourcesPlaying = undefined;this._destinationNode = new _DestinationNodeDestinationnodeJs2["default"](this._gl,this._renderGraph);this._callbacks = new Map();this._callbacks.set("stalled",[]);this._callbacks.set("update",[]);this._callbacks.set("ended",[]);this._callbacks.set("content",[]);this._callbacks.set("nocontent",[]);this._timelineCallbacks = [];if(!manualUpdate){updateablesManager.register(this);}} //playing - all sources are active
//paused - all sources are paused
//stalled - one or more sources is unable to play
//ended - all sources have finished playing
//broken - the render graph is in a broken state
/**
	     * Reurns an ID assigned to the VideoContext instance. This will either be the same id as the underlying canvas element,
	     * or a uniquley generated one.
	     */_createClass(VideoContext,[{key:"registerTimelineCallback", /**
	        * Register a callback to happen at a specific point in time.
	        * @param {number} time - the time at which to trigger the callback.
	        * @param {Function} func - the callback to register.
	        * @param {number} ordering - the order in which to call the callback if more than one is registered for the same time.
	        */value:function registerTimelineCallback(time,func){var ordering=arguments.length <= 2 || arguments[2] === undefined?0:arguments[2];this._timelineCallbacks.push({"time":time,"func":func,"ordering":ordering});} /**
	        * Unregister a callback which happens at a specific point in time.
	        * @param {Function} func - the callback to unregister.
	        */},{key:"unregisterTimelineCallback",value:function unregisterTimelineCallback(func){var toRemove=[];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=this._timelineCallbacks[Symbol.iterator](),_step;!(_iteratorNormalCompletion = (_step = _iterator.next()).done);_iteratorNormalCompletion = true) {var callback=_step.value;if(callback.func === func){toRemove.push(callback);}}}catch(err) {_didIteratorError = true;_iteratorError = err;}finally {try{if(!_iteratorNormalCompletion && _iterator["return"]){_iterator["return"]();}}finally {if(_didIteratorError){throw _iteratorError;}}}var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=toRemove[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);_iteratorNormalCompletion2 = true) {var callback=_step2.value;var index=this._timelineCallbacks.indexOf(callback);this._timelineCallbacks.splice(index,1);}}catch(err) {_didIteratorError2 = true;_iteratorError2 = err;}finally {try{if(!_iteratorNormalCompletion2 && _iterator2["return"]){_iterator2["return"]();}}finally {if(_didIteratorError2){throw _iteratorError2;}}}} /**
	        * Regsiter a callback to listen to one of the following events: "stalled", "update", "ended", "content", "nocontent"
	        *
	        * "stalled" happend anytime playback is stopped due to unavailbale data for playing assets (i.e video still loading)
	        * . "update" is called any time a frame is rendered to the screen. "ended" is called once plackback has finished
	        * (i.e ctx.currentTime == ctx.duration). "content" is called a the start of a time region where there is content
	        * playing out of one or more sourceNodes. "nocontent" is called at the start of any time region where the
	        * VideoContext is still playing, but there are currently no activly playing soureces.
	        *
	        * @param {String} type - the event to register against ("stalled", "update", or "ended").
	        * @param {Function} func - the callback to register.
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * ctx.registerCallback("stalled", function(){console.log("Playback stalled");});
	        * ctx.registerCallback("update", function(){console.log("new frame");});
	        * ctx.registerCallback("ended", function(){console.log("Playback ended");});
	        */},{key:"registerCallback",value:function registerCallback(type,func){if(!this._callbacks.has(type))return false;this._callbacks.get(type).push(func);} /**
	        * Remove a previously registed callback
	        *
	        * @param {Function} func - the callback to remove.
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        *
	        * //the callback
	        * var updateCallback = function(){console.log("new frame")};
	        *
	        * //register the callback
	        * ctx.registerCallback("update", updateCallback);
	        * //then unregister it
	        * ctx.unregisterCallback(updateCallback);
	        *
	        */},{key:"unregisterCallback",value:function unregisterCallback(func){var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=this._callbacks.values()[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);_iteratorNormalCompletion3 = true) {var funcArray=_step3.value;var index=funcArray.indexOf(func);if(index !== -1){funcArray.splice(index,1);return true;}}}catch(err) {_didIteratorError3 = true;_iteratorError3 = err;}finally {try{if(!_iteratorNormalCompletion3 && _iterator3["return"]){_iterator3["return"]();}}finally {if(_didIteratorError3){throw _iteratorError3;}}}return false;}},{key:"_callCallbacks",value:function _callCallbacks(type){var funcArray=this._callbacks.get(type);var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=funcArray[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done);_iteratorNormalCompletion4 = true) {var func=_step4.value;func(this._currentTime);}}catch(err) {_didIteratorError4 = true;_iteratorError4 = err;}finally {try{if(!_iteratorNormalCompletion4 && _iterator4["return"]){_iterator4["return"]();}}finally {if(_didIteratorError4){throw _iteratorError4;}}}} /**
	        * Get the canvas that the VideoContext is using.
	        *
	        * @return {HTMLElement} The canvas that the VideoContext is using.
	        *
	        */},{key:"play", /**
	        * Start the VideoContext playing
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * var videoNode = ctx.video("video.mp4");
	        * videoNode.connect(ctx.destination);
	        * videoNode.start(0);
	        * videoNode.stop(10);
	        * ctx.play();
	        */value:function play(){console.debug("VideoContext - playing"); //Initialise the video elemnt cache
if(this._videoElementCache)this._videoElementCache.init(); // set the state.
this._state = VideoContext.STATE.PLAYING;return true;} /**
	        * Pause playback of the VideoContext
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * var videoNode = ctx.video("video.mp4");
	        * videoNode.connect(ctx.destination);
	        * videoNode.start(0);
	        * videoNode.stop(20);
	        * ctx.currentTime = 10; // seek 10 seconds in
	        * ctx.play();
	        * setTimeout(function(){ctx.pause();}, 1000); //pause playback after roughly one second.
	        */},{key:"pause",value:function pause(){console.debug("VideoContext - pausing");this._state = VideoContext.STATE.PAUSED;return true;} /**
	        * Create a new node representing a video source
	        *
	        * @param {string|Video} - The URL or video element to create the video from.
	        * @sourceOffset {number} - Offset into the start of the source video to start playing from.
	        * @preloadTime {number} - How many seconds before the video is to be played to start loading it.
	        * @videoElementAttributes {Object} - A dictionary of attributes to map onto the underlying video element.
	        * @return {VideoNode} A new video node.
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * var videoNode = ctx.video("video.mp4");
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var videoElement = document.getElementById("video");
	        * var ctx = new VideoContext(canvasElement);
	        * var videoNode = ctx.video(videoElement);
	        */},{key:"video",value:function video(src){var sourceOffset=arguments.length <= 1 || arguments[1] === undefined?0:arguments[1];var preloadTime=arguments.length <= 2 || arguments[2] === undefined?4:arguments[2];var videoElementAttributes=arguments.length <= 3 || arguments[3] === undefined?{}:arguments[3];var videoNode=new _SourceNodesVideonodeJs2["default"](src,this._gl,this._renderGraph,this._currentTime,this._playbackRate,sourceOffset,preloadTime,this._videoElementCache,videoElementAttributes);this._sourceNodes.push(videoNode);return videoNode;} /**
	        * @depricated
	        */},{key:"createVideoSourceNode",value:function createVideoSourceNode(src){var sourceOffset=arguments.length <= 1 || arguments[1] === undefined?0:arguments[1];var preloadTime=arguments.length <= 2 || arguments[2] === undefined?4:arguments[2];var videoElementAttributes=arguments.length <= 3 || arguments[3] === undefined?{}:arguments[3];this._depricate("Warning: createVideoSourceNode will be depricated in v1.0, please switch to using VideoContext.video()");return this.video(src,sourceOffset,preloadTime,videoElementAttributes);} /**
	        * Create a new node representing an image source
	        * @param {string|Image} src - The url or image element to create the image node from.
	        * @param {number} [preloadTime] - How long before a node is to be displayed to attmept to load it.
	        * @param {Object} [imageElementAttributes] - Any attributes to be given to the underlying image element.
	        * @return {ImageNode} A new image node.
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * var imageNode = ctx.image("image.png");
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var imageElement = document.getElementById("image");
	        * var ctx = new VideoContext(canvasElement);
	        * var imageNode = ctx.image(imageElement);
	        */},{key:"image",value:function image(src){var preloadTime=arguments.length <= 1 || arguments[1] === undefined?4:arguments[1];var imageElementAttributes=arguments.length <= 2 || arguments[2] === undefined?{}:arguments[2];var imageNode=new _SourceNodesImagenodeJs2["default"](src,this._gl,this._renderGraph,this._currentTime,preloadTime,imageElementAttributes);this._sourceNodes.push(imageNode);return imageNode;} /**
	        * @depricated
	        */},{key:"createImageSourceNode",value:function createImageSourceNode(src){var sourceOffset=arguments.length <= 1 || arguments[1] === undefined?0:arguments[1];var preloadTime=arguments.length <= 2 || arguments[2] === undefined?4:arguments[2];var imageElementAttributes=arguments.length <= 3 || arguments[3] === undefined?{}:arguments[3];this._depricate("Warning: createImageSourceNode will be depricated in v1.0, please switch to using VideoContext.image()");return this.image(src,sourceOffset,preloadTime,imageElementAttributes);} /**
	        * Create a new node representing a canvas source
	        * @param {Canvas} src - The canvas element to create the canvas node from.
	        * @return {CanvasNode} A new canvas node.
	        */},{key:"canvas",value:function canvas(_canvas){var canvasNode=new _SourceNodesCanvasnodeJs2["default"](_canvas,this._gl,this._renderGraph,this._currentTime);this._sourceNodes.push(canvasNode);return canvasNode;} /**
	        * @depricated
	        */},{key:"createCanvasSourceNode",value:function createCanvasSourceNode(canvas){var sourceOffset=arguments.length <= 1 || arguments[1] === undefined?0:arguments[1];var preloadTime=arguments.length <= 2 || arguments[2] === undefined?4:arguments[2];this._depricate("Warning: createCanvasSourceNode will be depricated in v1.0, please switch to using VideoContext.canvas()");return this.canvas(canvas,sourceOffset,preloadTime);} /**
	        * Create a new effect node.
	        * @param {Object} definition - this is an object defining the shaders, inputs, and properties of the compositing node to create. Builtin definitions can be found by accessing VideoContext.DEFINITIONS.
	        * @return {EffectNode} A new effect node created from the passed definition
	        */},{key:"effect",value:function effect(definition){var effectNode=new _ProcessingNodesEffectnodeJs2["default"](this._gl,this._renderGraph,definition);this._processingNodes.push(effectNode);return effectNode;} /**
	        * @depricated
	        */},{key:"createEffectNode",value:function createEffectNode(definition){this._depricate("Warning: createEffectNode will be depricated in v1.0, please switch to using VideoContext.effect()");return this.effect(definition);} /**
	        * Create a new compositiing node.
	        *
	        * Compositing nodes are used for operations such as combining multiple video sources into a single track/connection for further processing in the graph.
	        *
	        * A compositing node is slightly different to other processing nodes in that it only has one input in it's definition but can have unlimited connections made to it.
	        * The shader in the definition is run for each input in turn, drawing them to the output buffer. This means there can be no interaction between the spearte inputs to a compositing node, as they are individually processed in seperate shader passes.
	        *
	        * @param {Object} definition - this is an object defining the shaders, inputs, and properties of the compositing node to create. Builtin definitions can be found by accessing VideoContext.DEFINITIONS
	        *
	        * @return {CompositingNode} A new compositing node created from the passed definition.
	        *
	        * @example
	        *
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        *
	        * //A simple compositing node definition which just renders all the inputs to the output buffer.
	        * var combineDefinition = {
	        *     vertexShader : "\
	        *         attribute vec2 a_position;\
	        *         attribute vec2 a_texCoord;\
	        *         varying vec2 v_texCoord;\
	        *         void main() {\
	        *             gl_Position = vec4(vec2(2.0,2.0)*vec2(1.0, 1.0), 0.0, 1.0);\
	        *             v_texCoord = a_texCoord;\
	        *         }",
	        *     fragmentShader : "\
	        *         precision mediump float;\
	        *         uniform sampler2D u_image;\
	        *         uniform float a;\
	        *         varying vec2 v_texCoord;\
	        *         varying float v_progress;\
	        *         void main(){\
	        *             vec4 color = texture2D(u_image, v_texCoord);\
	        *             gl_FragColor = color;\
	        *         }",
	        *     properties:{
	        *         "a":{type:"uniform", value:0.0},
	        *     },
	        *     inputs:["u_image"]
	        * };
	        * //Create the node, passing in the definition.
	        * var trackNode = videoCtx.compositor(combineDefinition);
	        *
	        * //create two videos which will play at back to back
	        * var videoNode1 = ctx.video("video1.mp4");
	        * videoNode1.play(0);
	        * videoNode1.stop(10);
	        * var videoNode2 = ctx.video("video2.mp4");
	        * videoNode2.play(10);
	        * videoNode2.stop(20);
	        *
	        * //Connect the nodes to the combine node. This will give a single connection representing the two videos which can
	        * //be connected to other effects such as LUTs, chromakeyers, etc.
	        * videoNode1.connect(trackNode);
	        * videoNode2.connect(trackNode);
	        *
	        * //Don't do anything exciting, just connect it to the output.
	        * trackNode.connect(ctx.destination);
	        *
	        */},{key:"compositor",value:function compositor(definition){var compositingNode=new _ProcessingNodesCompositingnodeJs2["default"](this._gl,this._renderGraph,definition);this._processingNodes.push(compositingNode);return compositingNode;} /**
	        * @depricated
	        */},{key:"createCompositingNode",value:function createCompositingNode(definition){this._depricate("Warning: createCompositingNode will be depricated in v1.0, please switch to using VideoContext.compositor()");return this.compositor(definition);} /**
	        * Create a new transition node.
	        *
	        * Transistion nodes are a type of effect node which have parameters which can be changed as events on the timeline.
	        *
	        * For example a transition node which cross-fades between two videos could have a "mix" property which sets the
	        * progress through the transistion. Rather than having to write your own code to adjust this property at specfic
	        * points in time a transition node has a "transition" function which takes a startTime, stopTime, targetValue, and a
	        * propertyName (which will be "mix"). This will linearly interpolate the property from the curernt value to
	        * tragetValue between the startTime and stopTime.
	        *
	        * @param {Object} definition - this is an object defining the shaders, inputs, and properties of the transition node to create.
	        * @return {TransitionNode} A new transition node created from the passed definition.
	        * @example
	        *
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        *
	        * //A simple cross-fade node definition which cross-fades between two videos based on the mix property.
	        * var crossfadeDefinition = {
	        *     vertexShader : "\
	        *        attribute vec2 a_position;\
	        *        attribute vec2 a_texCoord;\
	        *        varying vec2 v_texCoord;\
	        *        void main() {\
	        *            gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        *            v_texCoord = a_texCoord;\
	        *         }",
	        *     fragmentShader : "\
	        *         precision mediump float;\
	        *         uniform sampler2D u_image_a;\
	        *         uniform sampler2D u_image_b;\
	        *         uniform float mix;\
	        *         varying vec2 v_texCoord;\
	        *         varying float v_mix;\
	        *         void main(){\
	        *             vec4 color_a = texture2D(u_image_a, v_texCoord);\
	        *             vec4 color_b = texture2D(u_image_b, v_texCoord);\
	        *             color_a[0] *= mix;\
	        *             color_a[1] *= mix;\
	        *             color_a[2] *= mix;\
	        *             color_a[3] *= mix;\
	        *             color_b[0] *= (1.0 - mix);\
	        *             color_b[1] *= (1.0 - mix);\
	        *             color_b[2] *= (1.0 - mix);\
	        *             color_b[3] *= (1.0 - mix);\
	        *             gl_FragColor = color_a + color_b;\
	        *         }",
	        *     properties:{
	        *         "mix":{type:"uniform", value:0.0},
	        *     },
	        *     inputs:["u_image_a","u_image_b"]
	        * };
	        *
	        * //Create the node, passing in the definition.
	        * var transitionNode = videoCtx.transition(crossfadeDefinition);
	        *
	        * //create two videos which will overlap by two seconds
	        * var videoNode1 = ctx.video("video1.mp4");
	        * videoNode1.play(0);
	        * videoNode1.stop(10);
	        * var videoNode2 = ctx.video("video2.mp4");
	        * videoNode2.play(8);
	        * videoNode2.stop(18);
	        *
	        * //Connect the nodes to the transistion node.
	        * videoNode1.connect(transitionNode);
	        * videoNode2.connect(transitionNode);
	        *
	        * //Set-up a transition which happens at the crossover point of the playback of the two videos
	        * transitionNode.transition(8,10,1.0,"mix");
	        *
	        * //Connect the transition node to the output
	        * transitionNode.connect(ctx.destination);
	        *
	        * //start playback
	        * ctx.play();
	        */},{key:"transition",value:function transition(definition){var transitionNode=new _ProcessingNodesTransitionnodeJs2["default"](this._gl,this._renderGraph,definition);this._processingNodes.push(transitionNode);return transitionNode;} /**
	        * @depricated
	        */},{key:"createTransitionNode",value:function createTransitionNode(definition){this._depricate("Warning: createTransitionNode will be depricated in v1.0, please switch to using VideoContext.transition()");return this.transition(definition);}},{key:"_isStalled",value:function _isStalled(){for(var i=0;i < this._sourceNodes.length;i++) {var sourceNode=this._sourceNodes[i];if(!sourceNode._isReady()){return true;}}return false;} /**
	        * This allows manual calling of the update loop of the videoContext.
	        *
	        * @param {Number} dt - The difference in seconds between this and the previous calling of update.
	        * @example
	        *
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement, undefined, {"manualUpdate" : true});
	        *
	        * var previousTime;
	        * function update(time){
	        *     if (previousTime === undefined) previousTime = time;
	        *     var dt = (time - previousTime)/1000;
	        *     ctx.update(dt);
	        *     previousTime = time;
	        *     requestAnimationFrame(update);
	        * }
	        * update();
	        *
	        */},{key:"update",value:function update(dt){this._update(dt);}},{key:"_update",value:function _update(dt){ //Remove any destroyed nodes
this._sourceNodes = this._sourceNodes.filter(function(sourceNode){if(!sourceNode.destroyed)return sourceNode;});this._processingNodes = this._processingNodes.filter(function(processingNode){if(!processingNode.destroyed)return processingNode;});if(this._state === VideoContext.STATE.PLAYING || this._state === VideoContext.STATE.STALLED || this._state === VideoContext.STATE.PAUSED){this._callCallbacks("update");if(this._state !== VideoContext.STATE.PAUSED){if(this._isStalled()){this._callCallbacks("stalled");this._state = VideoContext.STATE.STALLED;}else {this._state = VideoContext.STATE.PLAYING;}}if(this._state === VideoContext.STATE.PLAYING){ //Handle timeline callbacks.
var activeCallbacks=new Map();var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=this._timelineCallbacks[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done);_iteratorNormalCompletion5 = true) {var callback=_step5.value;if(callback.time >= this.currentTime && callback.time < this._currentTime + dt * this._playbackRate){ //group the callbacks by time
if(!activeCallbacks.has(callback.time))activeCallbacks.set(callback.time,[]);activeCallbacks.get(callback.time).push(callback);}} //Sort the groups of callbacks by the times of the groups
}catch(err) {_didIteratorError5 = true;_iteratorError5 = err;}finally {try{if(!_iteratorNormalCompletion5 && _iterator5["return"]){_iterator5["return"]();}}finally {if(_didIteratorError5){throw _iteratorError5;}}}var timeIntervals=Array.from(activeCallbacks.keys());timeIntervals.sort(function(a,b){return a - b;});var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=timeIntervals[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done);_iteratorNormalCompletion6 = true) {var t=_step6.value;var callbacks=activeCallbacks.get(t);callbacks.sort(function(a,b){return a.ordering - b.ordering;});var _iteratorNormalCompletion7=true;var _didIteratorError7=false;var _iteratorError7=undefined;try{for(var _iterator7=callbacks[Symbol.iterator](),_step7;!(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done);_iteratorNormalCompletion7 = true) {var callback=_step7.value;callback.func();}}catch(err) {_didIteratorError7 = true;_iteratorError7 = err;}finally {try{if(!_iteratorNormalCompletion7 && _iterator7["return"]){_iterator7["return"]();}}finally {if(_didIteratorError7){throw _iteratorError7;}}}}}catch(err) {_didIteratorError6 = true;_iteratorError6 = err;}finally {try{if(!_iteratorNormalCompletion6 && _iterator6["return"]){_iterator6["return"]();}}finally {if(_didIteratorError6){throw _iteratorError6;}}}this._currentTime += dt * this._playbackRate;if(this._currentTime > this.duration && this._endOnLastSourceEnd){ //Do an update od the sourcenodes in case anything in the "ended" callbacks modifes currentTime and sources haven't had a chance to stop.
for(var i=0;i < this._sourceNodes.length;i++) {this._sourceNodes[i]._update(this._currentTime);}this._state = VideoContext.STATE.ENDED;this._callCallbacks("ended");}}var sourcesPlaying=false;for(var i=0;i < this._sourceNodes.length;i++) {var sourceNode=this._sourceNodes[i];if(this._state === VideoContext.STATE.STALLED){if(sourceNode._isReady() && sourceNode._state === _SourceNodesSourcenodeJs.SOURCENODESTATE.playing)sourceNode._pause();}if(this._state === VideoContext.STATE.PAUSED){sourceNode._pause();}if(this._state === VideoContext.STATE.PLAYING){sourceNode._play();}sourceNode._update(this._currentTime);if(sourceNode._state === _SourceNodesSourcenodeJs.SOURCENODESTATE.paused || sourceNode._state === _SourceNodesSourcenodeJs.SOURCENODESTATE.playing){sourcesPlaying = true;}}if(sourcesPlaying !== this._sourcesPlaying && this._state === VideoContext.STATE.PLAYING){if(sourcesPlaying === true){this._callCallbacks("content");}else {this._callCallbacks("nocontent");}this._sourcesPlaying = sourcesPlaying;} /*
	                * Itterate the directed acyclic graph using Khan's algorithm (KHAAAAAN!).
	                *
	                * This has highlighted a bunch of ineffencies in the rendergraph class about how its stores connections.
	                * Mainly the fact that to get inputs for a node you have to iterate the full list of connections rather than
	                * a node owning it's connections.
	                * The trade off with changing this is making/removing connections becomes more costly performance wise, but
	                * this is deffinately worth while because getting the connnections is a much more common operation.
	                *
	                * TL;DR Future matt - refactor this.
	                *
	                */var sortedNodes=[];var connections=this._renderGraph.connections.slice();var nodes=_rendergraphJs2["default"].getInputlessNodes(connections);while(nodes.length > 0) {var node=nodes.pop();sortedNodes.push(node);var _iteratorNormalCompletion8=true;var _didIteratorError8=false;var _iteratorError8=undefined;try{for(var _iterator8=_rendergraphJs2["default"].outputEdgesFor(node,connections)[Symbol.iterator](),_step8;!(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done);_iteratorNormalCompletion8 = true) {var edge=_step8.value;var index=connections.indexOf(edge);if(index > -1)connections.splice(index,1);if(_rendergraphJs2["default"].inputEdgesFor(edge.destination,connections).length === 0){nodes.push(edge.destination);}}}catch(err) {_didIteratorError8 = true;_iteratorError8 = err;}finally {try{if(!_iteratorNormalCompletion8 && _iterator8["return"]){_iterator8["return"]();}}finally {if(_didIteratorError8){throw _iteratorError8;}}}}var _iteratorNormalCompletion9=true;var _didIteratorError9=false;var _iteratorError9=undefined;try{for(var _iterator9=sortedNodes[Symbol.iterator](),_step9;!(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done);_iteratorNormalCompletion9 = true) {var node=_step9.value;if(this._sourceNodes.indexOf(node) === -1){node._update(this._currentTime);node._render();}}}catch(err) {_didIteratorError9 = true;_iteratorError9 = err;}finally {try{if(!_iteratorNormalCompletion9 && _iterator9["return"]){_iterator9["return"]();}}finally {if(_didIteratorError9){throw _iteratorError9;}}}}} /**
	        * Destroy all nodes in the graph and reset the timeline. After calling this any created nodes will be unusable.
	        */},{key:"reset",value:function reset(){var _iteratorNormalCompletion10=true;var _didIteratorError10=false;var _iteratorError10=undefined;try{for(var _iterator10=this._callbacks[Symbol.iterator](),_step10;!(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done);_iteratorNormalCompletion10 = true) {var callback=_step10.value;this.unregisterCallback(callback);}}catch(err) {_didIteratorError10 = true;_iteratorError10 = err;}finally {try{if(!_iteratorNormalCompletion10 && _iterator10["return"]){_iterator10["return"]();}}finally {if(_didIteratorError10){throw _iteratorError10;}}}var _iteratorNormalCompletion11=true;var _didIteratorError11=false;var _iteratorError11=undefined;try{for(var _iterator11=this._sourceNodes[Symbol.iterator](),_step11;!(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done);_iteratorNormalCompletion11 = true) {var node=_step11.value;node.destroy();}}catch(err) {_didIteratorError11 = true;_iteratorError11 = err;}finally {try{if(!_iteratorNormalCompletion11 && _iterator11["return"]){_iterator11["return"]();}}finally {if(_didIteratorError11){throw _iteratorError11;}}}var _iteratorNormalCompletion12=true;var _didIteratorError12=false;var _iteratorError12=undefined;try{for(var _iterator12=this._processingNodes[Symbol.iterator](),_step12;!(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done);_iteratorNormalCompletion12 = true) {var node=_step12.value;node.destroy();}}catch(err) {_didIteratorError12 = true;_iteratorError12 = err;}finally {try{if(!_iteratorNormalCompletion12 && _iterator12["return"]){_iterator12["return"]();}}finally {if(_didIteratorError12){throw _iteratorError12;}}}this._update(0);this._sourceNodes = [];this._processingNodes = [];this._timeline = [];this._currentTime = 0;this._state = VideoContext.STATE.PAUSED;this._playbackRate = 1.0;this._sourcesPlaying = undefined;this._callbacks.set("stalled",[]);this._callbacks.set("update",[]);this._callbacks.set("ended",[]);this._callbacks.set("content",[]);this._callbacks.set("nocontent",[]);this._timelineCallbacks = [];}},{key:"_depricate",value:function _depricate(msg){console.log(msg);}},{key:"snapshot", /**
	         * Get a JS Object containing the state of the VideoContext instance and all the created nodes.
	         */value:function snapshot(){return (0,_utilsJs.snapshot)(this);}},{key:"id",get:function get(){return this._id;}, /**
	         * Set the ID of the VideoContext instance. This should be unique.
	         */set:function set(newID){delete window.__VIDEOCONTEXT_REFS__[this._id];if(window.__VIDEOCONTEXT_REFS__[newID] !== undefined)console.warn("Warning; setting id to that of an existing VideoContext instance.");window.__VIDEOCONTEXT_REFS__[newID] = this;this._id = newID;}},{key:"element",get:function get(){return this._canvas;} /**
	        * Get the current state.
	        *
	        * This will be either
	        *  - VideoContext.STATE.PLAYING: current sources on timeline are active
	        *  - VideoContext.STATE.PAUSED: all sources are paused
	        *  - VideoContext.STATE.STALLED: one or more sources is unable to play
	        *  - VideoContext.STATE.ENDED: all sources have finished playing
	        *  - VideoContext.STATE.BROKEN: the render graph is in a broken state
	        * @return {number} The number representing the state.
	        *
	        */},{key:"state",get:function get(){return this._state;} /**
	        * Set the progress through the internal timeline.
	        * Setting this can be used as a way to implement a scrubaable timeline.
	        *
	        * @param {number} currentTime - this is the currentTime to set the context to.
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * var videoNode = ctx.video("video.mp4");
	        * videoNode.connect(ctx.destination);
	        * videoNode.start(0);
	        * videoNode.stop(20);
	        * ctx.currentTime = 10; // seek 10 seconds in
	        * ctx.play();
	        *
	        */},{key:"currentTime",set:function set(currentTime){if(currentTime < this.duration && this._state === VideoContext.STATE.ENDED)this._state = VideoContext.STATE.PAUSED;if(typeof currentTime === "string" || currentTime instanceof String){currentTime = parseFloat(currentTime);}for(var i=0;i < this._sourceNodes.length;i++) {this._sourceNodes[i]._seek(currentTime);}for(var i=0;i < this._processingNodes.length;i++) {this._processingNodes[i]._seek(currentTime);}this._currentTime = currentTime;}, /**
	        * Get how far through the internal timeline has been played.
	        *
	        * Getting this value will give the current playhead position. Can be used for updating timelines.
	        * @return {number} The time in seconds through the current playlist.
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * var videoNode = ctx.video("video.mp4");
	        * videoNode.connect(ctx.destination);
	        * videoNode.start(0);
	        * videoNode.stop(10);
	        * ctx.play();
	        * setTimeout(function(){console.log(ctx.currentTime);},1000); //should print roughly 1.0
	        *
	        */get:function get(){return this._currentTime;} /**
	        * Get the time at which the last node in the current internal timeline finishes playing.
	        *
	        * @return {number} The end time in seconds of the last video node to finish playing.
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * console.log(ctx.duration); //prints 0
	        *
	        * var videoNode = ctx.video("video.mp4");
	        * videoNode.connect(ctx.destination);
	        * videoNode.start(0);
	        * videoNode.stop(10);
	        *
	        * console.log(ctx.duration); //prints 10
	        *
	        * ctx.play();
	        */},{key:"duration",get:function get(){var maxTime=0;for(var i=0;i < this._sourceNodes.length;i++) {if(this._sourceNodes[i].state !== _SourceNodesSourcenodeJs.SOURCENODESTATE.waiting && this._sourceNodes[i]._stopTime > maxTime){maxTime = this._sourceNodes[i]._stopTime;}}return maxTime;} /**
	        * Get the final node in the render graph which represents the canvas to display content on to.
	        *
	        * This proprety is read-only and there can only ever be one destination node. Other nodes can connect to this but you cannot connect this node to anything.
	        *
	        * @return {DestinationNode} A graph node represnting the canvas to display the content on.
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * var videoNode = ctx.video("video.mp4");
	        * videoNode.start(0);
	        * videoNode.stop(10);
	        * videoNode.connect(ctx.destination);
	        *
	        */},{key:"destination",get:function get(){return this._destinationNode;} /**
	        * Set the playback rate of the VideoContext instance.
	        * This will alter the playback speed of all media elements played through the VideoContext.
	        *
	        * @param {number} rate - this is the playback rate.
	        *
	        * @example
	        * var canvasElement = document.getElementById("canvas");
	        * var ctx = new VideoContext(canvasElement);
	        * var videoNode = ctx.video("video.mp4");
	        * videoNode.start(0);
	        * videoNode.stop(10);
	        * videoNode.connect(ctx.destination);
	        * ctx.playbackRate = 2;
	        * ctx.play(); // Double playback rate means this will finish playing in 5 seconds.
	        */},{key:"playbackRate",set:function set(rate){if(rate <= 0){throw new RangeError("playbackRate must be greater than 0");}var _iteratorNormalCompletion13=true;var _didIteratorError13=false;var _iteratorError13=undefined;try{for(var _iterator13=this._sourceNodes[Symbol.iterator](),_step13;!(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done);_iteratorNormalCompletion13 = true) {var node=_step13.value;if(node.constructor.name === "VideoNode"){node._globalPlaybackRate = rate;node._playbackRateUpdated = true;}}}catch(err) {_didIteratorError13 = true;_iteratorError13 = err;}finally {try{if(!_iteratorNormalCompletion13 && _iterator13["return"]){_iterator13["return"]();}}finally {if(_didIteratorError13){throw _iteratorError13;}}}this._playbackRate = rate;}, /**
	        *  Return the current playbackRate of the video context.
	        * @return {number} A value representing the playbackRate. 1.0 by default.
	        */get:function get(){return this._playbackRate;} /**
	         * Set the volume of all VideoNode's created in the VideoContext.
	         * @param {number} volume - the volume to apply to the video nodes.
	         */},{key:"volume",set:function set(vol){var _iteratorNormalCompletion14=true;var _didIteratorError14=false;var _iteratorError14=undefined;try{for(var _iterator14=this._sourceNodes[Symbol.iterator](),_step14;!(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done);_iteratorNormalCompletion14 = true) {var node=_step14.value;if(node instanceof _SourceNodesVideonodeJs2["default"]){node.volume = vol;}}}catch(err) {_didIteratorError14 = true;_iteratorError14 = err;}finally {try{if(!_iteratorNormalCompletion14 && _iterator14["return"]){_iterator14["return"]();}}finally {if(_didIteratorError14){throw _iteratorError14;}}}this._volume = vol;}, /**
	        *  Return the current volume of the video context.
	        * @return {number} A value representing the volume. 1.0 by default.
	        */get:function get(){return this._volume;}}],[{key:"DEFINITIONS",get:function get(){return _DefinitionsDefinitionsJs2["default"];}}]);return VideoContext;})();exports["default"] = VideoContext;VideoContext.STATE = {};VideoContext.STATE.PLAYING = 0;VideoContext.STATE.PAUSED = 1;VideoContext.STATE.STALLED = 2;VideoContext.STATE.ENDED = 3;VideoContext.STATE.BROKEN = 4;VideoContext.visualiseVideoContextTimeline = _utilsJs.visualiseVideoContextTimeline;VideoContext.visualiseVideoContextGraph = _utilsJs.visualiseVideoContextGraph;VideoContext.createControlFormForNode = _utilsJs.createControlFormForNode;VideoContext.createSigmaGraphDataFromRenderGraph = _utilsJs.createSigmaGraphDataFromRenderGraph;VideoContext.exportToJSON = _utilsJs.exportToJSON;VideoContext.updateablesManager = updateablesManager;VideoContext.importSimpleEDL = _utilsJs.importSimpleEDL;module.exports = exports["default"]; /***/}, /* 1 */function(module,exports,__webpack_require__){ //Matthew Shotton, R&D User Experience,© BBC 2015
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _set=function set(object,property,value,receiver){var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent !== null){set(parent,property,value,receiver);}}else if("value" in desc && desc.writable){desc.value = value;}else {var setter=desc.set;if(setter !== undefined){setter.call(receiver,value);}}return value;};var _get=function get(_x6,_x7,_x8){var _again=true;_function: while(_again) {var object=_x6,property=_x7,receiver=_x8;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x6 = parent;_x7 = property;_x8 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if("value" in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass !== "function" && superClass !== null){throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var _sourcenode=__webpack_require__(2);var _sourcenode2=_interopRequireDefault(_sourcenode);var VideoNode=(function(_SourceNode){_inherits(VideoNode,_SourceNode); /**
	    * Initialise an instance of a VideoNode.
	    * This should not be called directly, but created through a call to videoContext.createVideoNode();
	    */function VideoNode(src,gl,renderGraph,currentTime){var globalPlaybackRate=arguments.length <= 4 || arguments[4] === undefined?1.0:arguments[4];var sourceOffset=arguments.length <= 5 || arguments[5] === undefined?0:arguments[5];var preloadTime=arguments.length <= 6 || arguments[6] === undefined?4:arguments[6];var videoElementCache=arguments.length <= 7 || arguments[7] === undefined?undefined:arguments[7];var attributes=arguments.length <= 8 || arguments[8] === undefined?{}:arguments[8];_classCallCheck(this,VideoNode);_get(Object.getPrototypeOf(VideoNode.prototype),"constructor",this).call(this,src,gl,renderGraph,currentTime);this._preloadTime = preloadTime;this._sourceOffset = sourceOffset;this._globalPlaybackRate = globalPlaybackRate;this._videoElementCache = videoElementCache;this._playbackRate = 1.0;this._volume = 1.0;this._playbackRateUpdated = true;this._attributes = attributes;this._loopElement = false;this._isElementPlaying = false;if(this._attributes.loop){this._loopElement = this._attributes.loop;}this._displayName = "VideoNode";}_createClass(VideoNode,[{key:"_load",value:function _load(){var _this=this;_get(Object.getPrototypeOf(VideoNode.prototype),"_load",this).call(this);if(this._element !== undefined){for(var key in this._attributes) {this._element[key] = this._attributes[key];}if(this._element.readyState > 3 && !this._element.seeking){if(this._loopElement === false){if(this._stopTime === Infinity || this._stopTime == undefined){this._stopTime = this._startTime + this._element.duration;this._triggerCallbacks("durationchange",this.duration);}}if(this._ready !== true){this._triggerCallbacks("loaded");this._playbackRateUpdated = true;}this._ready = true;}else {if(this._state !== _sourcenode.SOURCENODESTATE.error){this._ready = false;}}return;}if(this._isResponsibleForElementLifeCycle){if(this._videoElementCache){this._element = this._videoElementCache.get();}else {this._element = document.createElement("video");this._element.setAttribute("crossorigin","anonymous");this._element.setAttribute("webkit-playsinline","");this._element.setAttribute("playsinline","");this._playbackRateUpdated = true;}this._element.volume = this._volume;if(window.MediaStream !== undefined && this._elementURL instanceof MediaStream){this._element.srcObject = this._elementURL;}else {this._element.src = this._elementURL;}for(var _key in this._attributes) {this._element[_key] = this._attributes[_key];}}if(this._element){var currentTimeOffset=0;if(this._currentTime > this._startTime)currentTimeOffset = this._currentTime - this._startTime;this._element.currentTime = this._sourceOffset + currentTimeOffset;this._element.onerror = function(){if(_this._element === undefined)return;console.debug("Error with element",_this._element);_this._state = _sourcenode.SOURCENODESTATE.error; //Event though there's an error ready should be set to true so the node can output transparenn
_this._ready = true;_this._triggerCallbacks("error");};}else { //If the element doesn't exist for whatever reason enter the error state.
this._state = _sourcenode.SOURCENODESTATE.error;this._ready = true;this._triggerCallbacks("error");}}},{key:"_unload",value:function _unload(){_get(Object.getPrototypeOf(VideoNode.prototype),"_unload",this).call(this);if(this._isResponsibleForElementLifeCycle && this._element !== undefined){this._element.src = "";this._element.srcObject = undefined;for(var key in this._attributes) {this._element.removeAttribute(key);}this._element = undefined;if(!this._videoElementCache)delete this._element;}this._ready = false;this._isElementPlaying = false;}},{key:"_seek",value:function _seek(time){_get(Object.getPrototypeOf(VideoNode.prototype),"_seek",this).call(this,time);if(this.state === _sourcenode.SOURCENODESTATE.playing || this.state === _sourcenode.SOURCENODESTATE.paused){if(this._element === undefined)this._load();var relativeTime=this._currentTime - this._startTime + this._sourceOffset;this._element.currentTime = relativeTime;this._ready = false;}if((this._state === _sourcenode.SOURCENODESTATE.sequenced || this._state === _sourcenode.SOURCENODESTATE.ended) && this._element !== undefined){this._unload();}}},{key:"_update",value:function _update(currentTime){ //if (!super._update(currentTime)) return false;
_get(Object.getPrototypeOf(VideoNode.prototype),"_update",this).call(this,currentTime); //check if the video has ended
if(this._element !== undefined){if(this._element.ended){this._state = _sourcenode.SOURCENODESTATE.ended;this._triggerCallbacks("ended");}}if(this._startTime - this._currentTime <= this._preloadTime && this._state !== _sourcenode.SOURCENODESTATE.waiting && this._state !== _sourcenode.SOURCENODESTATE.ended)this._load();if(this._state === _sourcenode.SOURCENODESTATE.playing){if(this._playbackRateUpdated){this._element.playbackRate = this._globalPlaybackRate * this._playbackRate;this._playbackRateUpdated = false;}if(!this._isElementPlaying){this._element.play();if(this._stretchPaused){this._element.pause();}this._isElementPlaying = true;}return true;}else if(this._state === _sourcenode.SOURCENODESTATE.paused){this._element.pause();this._isElementPlaying = false;return true;}else if(this._state === _sourcenode.SOURCENODESTATE.ended && this._element !== undefined){this._element.pause();if(this._isElementPlaying){this._unload();}return false;}}},{key:"clearTimelineState",value:function clearTimelineState(){_get(Object.getPrototypeOf(VideoNode.prototype),"clearTimelineState",this).call(this);if(this._element !== undefined){this._element.pause();this._isElementPlaying = false;}this._unload();}},{key:"destroy",value:function destroy(){if(this._element)this._element.pause();_get(Object.getPrototypeOf(VideoNode.prototype),"destroy",this).call(this);}},{key:"playbackRate",set:function set(playbackRate){this._playbackRate = playbackRate;this._playbackRateUpdated = true;},get:function get(){return this._playbackRate;}},{key:"stretchPaused",set:function set(stretchPaused){_set(Object.getPrototypeOf(VideoNode.prototype),"stretchPaused",stretchPaused,this);if(this._element){if(this._stretchPaused){this._element.pause();}else {if(this._state === _sourcenode.SOURCENODESTATE.playing){this._element.play();}}}},get:function get(){return this._stretchPaused;}},{key:"elementURL",get:function get(){return this._elementURL;}},{key:"volume",set:function set(volume){this._volume = volume;if(this._element !== undefined)this._element.volume = this._volume;}}]);return VideoNode;})(_sourcenode2["default"]);exports["default"] = VideoNode;module.exports = exports["default"]; /***/}, /* 2 */function(module,exports,__webpack_require__){ //Matthew Shotton, R&D User Experience,© BBC 2015
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _get=function get(_x2,_x3,_x4){var _again=true;_function: while(_again) {var object=_x2,property=_x3,receiver=_x4;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x2 = parent;_x3 = property;_x4 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if("value" in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass !== "function" && superClass !== null){throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var _utilsJs=__webpack_require__(3);var _graphnode=__webpack_require__(26);var _graphnode2=_interopRequireDefault(_graphnode);var STATE={"waiting":0,"sequenced":1,"playing":2,"paused":3,"ended":4,"error":5};var SourceNode=(function(_GraphNode){_inherits(SourceNode,_GraphNode); /**
	    * Initialise an instance of a SourceNode.
	    * This is the base class for other Nodes which generate media to be passed into the processing pipeline.
	    */function SourceNode(src,gl,renderGraph,currentTime){_classCallCheck(this,SourceNode);_get(Object.getPrototypeOf(SourceNode.prototype),"constructor",this).call(this,gl,renderGraph,[],true);this._element = undefined;this._elementURL = undefined;this._isResponsibleForElementLifeCycle = true;if(typeof src === "string" || window.MediaStream !== undefined && src instanceof MediaStream){ //create the node from the passed URL or MediaStream
this._elementURL = src;}else { //use the passed element to create the SourceNode
this._element = src;this._isResponsibleForElementLifeCycle = false;}this._state = STATE.waiting;this._currentTime = currentTime;this._startTime = NaN;this._stopTime = Infinity;this._ready = false;this._loadCalled = false;this._stretchPaused = false;this._texture = (0,_utilsJs.createElementTexutre)(gl);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([0,0,0,0]));this._callbacks = [];this._renderPaused = false;this._displayName = "SourceNode";} /**
	    * Returns the state of the node.
	    * 0 - Waiting, start() has not been called on it yet.
	    * 1 - Sequenced, start() has been called but it is not playing yet.
	    * 2 - Playing, the node is playing.
	    * 3 - Paused, the node is paused.
	    * 4 - Ended, playback of the node has finished.
	    *
	    * @example
	    * var ctx = new VideoContext();
	    * var videoNode = ctx.createVideoSourceNode('video.mp4');
	    * console.log(videoNode.state); //will output 0 (for waiting)
	    * videoNode.start(5);
	    * console.log(videoNode.state); //will output 1 (for sequenced)
	    * videoNode.stop(10);
	    * ctx.play();
	    * console.log(videoNode.state); //will output 2 (for playing)
	    * ctx.paused();
	    * console.log(videoNode.state); //will output 3 (for paused)
	    */_createClass(SourceNode,[{key:"_load",value:function _load(){if(!this._loadCalled){this._triggerCallbacks("load");this._loadCalled = true;}}},{key:"_unload",value:function _unload(){this._triggerCallbacks("destroy");this._loadCalled = false;} /**
	        * Register callbacks against one of these events: "load", "destroy", "seek", "pause", "play", "ended", "durationchange", "loaded", "error"
	        *
	        * @param {String} type - the type of event to register the callback against.
	        * @param {function} func - the function to call.
	        *
	        * @example
	        * var ctx = new VideoContext();
	        * var videoNode = ctx.createVideoSourceNode('video.mp4');
	        *
	        * videoNode.registerCallback("load", function(){"video is loading"});
	        * videoNode.registerCallback("play", function(){"video is playing"});
	        * videoNode.registerCallback("ended", function(){"video has eneded"});
	        *
	        */},{key:"registerCallback",value:function registerCallback(type,func){this._callbacks.push({type:type,func:func});} /**
	        * Remove callback.
	        *
	        * @param {function} [func] - the callback to remove, if undefined will remove all callbacks for this node.
	        *
	        * @example
	        * var ctx = new VideoContext();
	        * var videoNode = ctx.createVideoSourceNode('video.mp4');
	        *
	        * videoNode.registerCallback("load", function(){"video is loading"});
	        * videoNode.registerCallback("play", function(){"video is playing"});
	        * videoNode.registerCallback("ended", function(){"video has eneded"});
	        * videoNode.unregisterCallback(); //remove all of the three callbacks.
	        *
	        */},{key:"unregisterCallback",value:function unregisterCallback(func){var toRemove=[];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=this._callbacks[Symbol.iterator](),_step;!(_iteratorNormalCompletion = (_step = _iterator.next()).done);_iteratorNormalCompletion = true) {var callback=_step.value;if(func === undefined){toRemove.push(callback);}else if(callback.func === func){toRemove.push(callback);}}}catch(err) {_didIteratorError = true;_iteratorError = err;}finally {try{if(!_iteratorNormalCompletion && _iterator["return"]){_iterator["return"]();}}finally {if(_didIteratorError){throw _iteratorError;}}}var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=toRemove[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);_iteratorNormalCompletion2 = true) {var callback=_step2.value;var index=this._callbacks.indexOf(callback);this._callbacks.splice(index,1);}}catch(err) {_didIteratorError2 = true;_iteratorError2 = err;}finally {try{if(!_iteratorNormalCompletion2 && _iterator2["return"]){_iterator2["return"]();}}finally {if(_didIteratorError2){throw _iteratorError2;}}}}},{key:"_triggerCallbacks",value:function _triggerCallbacks(type,data){var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=this._callbacks[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);_iteratorNormalCompletion3 = true) {var callback=_step3.value;if(callback.type === type){if(data !== undefined){callback.func(this,data);}else {callback.func(this);}}}}catch(err) {_didIteratorError3 = true;_iteratorError3 = err;}finally {try{if(!_iteratorNormalCompletion3 && _iterator3["return"]){_iterator3["return"]();}}finally {if(_didIteratorError3){throw _iteratorError3;}}}} /**
	        * Start playback at VideoContext.currentTime plus passed time. If passed time is negative, will play as soon as possible.
	        *
	        * @param {number} time - the time from the currentTime of the VideoContext which to start playing, if negative will play as soon as possible.
	        * @return {boolean} Will return true is seqeuncing has succeded, or false if it is already sequenced.
	        */},{key:"start",value:function start(time){if(this._state !== STATE.waiting){console.debug("SourceNode is has already been sequenced. Can't sequence twice.");return false;}this._startTime = this._currentTime + time;this._state = STATE.sequenced;return true;} /**
	        * Start playback at an absolute time ont the VideoContext's timeline.
	        *
	        * @param {number} time - the time on the VideoContexts timeline to start playing.
	        * @return {boolean} Will return true is seqeuncing has succeded, or false if it is already sequenced.
	        */},{key:"startAt",value:function startAt(time){if(this._state !== STATE.waiting){console.debug("SourceNode is has already been sequenced. Can't sequence twice.");return false;}this._startTime = time;this._state = STATE.sequenced;return true;}},{key:"stop", /**
	        * Stop playback at VideoContext.currentTime plus passed time. If passed time is negative, will play as soon as possible.
	        *
	        * @param {number} time - the time from the currentTime of the video context which to stop playback.
	        * @return {boolean} Will return true is seqeuncing has succeded, or false if the playback has already ended or if start hasn't been called yet, or if time is less than the start time.
	        */value:function stop(time){if(this._state === STATE.ended){console.debug("SourceNode has already ended. Cannot call stop.");return false;}else if(this._state === STATE.waiting){console.debug("SourceNode must have start called before stop is called");return false;}if(this._currentTime + time <= this._startTime){console.debug("SourceNode must have a stop time after it's start time, not before.");return false;}this._stopTime = this._currentTime + time;this._stretchPaused = false;this._triggerCallbacks("durationchange",this.duration);return true;} /**
	        * Stop playback at an absolute time ont the VideoContext's timeline.
	        *
	        * @param {number} time - the time on the VideoContexts timeline to stop playing.
	        * @return {boolean} Will return true is seqeuncing has succeded, or false if the playback has already ended or if start hasn't been called yet, or if time is less than the start time.
	        */},{key:"stopAt",value:function stopAt(time){if(this._state === STATE.ended){console.debug("SourceNode has already ended. Cannot call stop.");return false;}else if(this._state === STATE.waiting){console.debug("SourceNode must have start called before stop is called");return false;}if(time <= this._startTime){console.debug("SourceNode must have a stop time after it's start time, not before.");return false;}this._stopTime = time;this._stretchPaused = false;this._triggerCallbacks("durationchange",this.duration);return true;}},{key:"_seek",value:function _seek(time){this._renderPaused = false;this._triggerCallbacks("seek",time);if(this._state === STATE.waiting)return;if(time < this._startTime){(0,_utilsJs.clearTexture)(this._gl,this._texture);this._state = STATE.sequenced;}if(time >= this._startTime && this._state !== STATE.paused){this._state = STATE.playing;}if(time >= this._stopTime){(0,_utilsJs.clearTexture)(this._gl,this._texture);this._triggerCallbacks("ended");this._state = STATE.ended;} //update the current time
this._currentTime = time;}},{key:"_pause",value:function _pause(){if(this._state === STATE.playing || this._currentTime === 0 && this._startTime === 0){this._triggerCallbacks("pause");this._state = STATE.paused;this._renderPaused = false;}}},{key:"_play",value:function _play(){if(this._state === STATE.paused){this._triggerCallbacks("play");this._state = STATE.playing;}}},{key:"_isReady",value:function _isReady(){if(this._state === STATE.playing || this._state === STATE.paused || this._state === STATE.error){return this._ready;}return true;}},{key:"_update",value:function _update(currentTime){var triggerTextureUpdate=arguments.length <= 1 || arguments[1] === undefined?true:arguments[1];this._rendered = true;var timeDelta=currentTime - this._currentTime; //update the current time
this._currentTime = currentTime; //update the state
if(this._state === STATE.waiting || this._state === STATE.ended || this._state === STATE.error)return false;this._triggerCallbacks("render",currentTime);if(currentTime < this._startTime){(0,_utilsJs.clearTexture)(this._gl,this._texture);this._state = STATE.sequenced;}if(currentTime >= this._startTime && this._state !== STATE.paused && this._state !== STATE.error){if(this._state !== STATE.playing)this._triggerCallbacks("play");this._state = STATE.playing;}if(currentTime >= this._stopTime){(0,_utilsJs.clearTexture)(this._gl,this._texture);this._triggerCallbacks("ended");this._state = STATE.ended;} //update this source nodes texture
if(this._element === undefined || this._ready === false)return true;if(!this._renderPaused && this._state === STATE.paused){if(triggerTextureUpdate)(0,_utilsJs.updateTexture)(this._gl,this._texture,this._element);this._renderPaused = true;}if(this._state === STATE.playing){if(triggerTextureUpdate)(0,_utilsJs.updateTexture)(this._gl,this._texture,this._element);if(this._stretchPaused){this._stopTime += timeDelta;}}return true;} /**
	        * Clear any timeline state the node currently has, this puts the node in the "waiting" state, as if neither start nor stop had been called.
	        */},{key:"clearTimelineState",value:function clearTimelineState(){this._startTime = NaN;this._stopTime = Infinity;this._state = STATE.waiting;} /**
	        * Destroy and clean-up the node.
	        */},{key:"destroy",value:function destroy(){this._unload();_get(Object.getPrototypeOf(SourceNode.prototype),"destroy",this).call(this);this.unregisterCallback();delete this._element;this._elementURL = undefined;this._state = STATE.waiting;this._currentTime = 0;this._startTime = NaN;this._stopTime = Infinity;this._ready = false;this._loadCalled = false;this._gl.deleteTexture(this._texture);this._texture = undefined;}},{key:"state",get:function get(){return this._state;} /**
	        * Returns the underlying DOM element which represents this source node.
	        * Note: If a source node is created with a url rather than passing in an existing element then this will return undefined until the source node preloads the element.
	        *
	        * @return {Element} The underlying DOM element representing the media for the node. If the lifecycle of the video is owned UNSIGNED_BYTE the node itself, this can return undefined if the element hasn't been loaded yet.
	        *
	        * @example
	        * //Accessing the Element on a VideoNode created via a URL
	        * var ctx = new VideoContext();
	        * var videoNode = ctx.createVideoSourceNode('video.mp4');
	        * videoNode.start(0);
	        * videoNode.stop(5);
	        * //When the node starts playing the element should exist so set it's volume to 0
	        * videoNode.regsiterCallback("play", function(){videoNode.element.volume = 0;});
	        *
	        *
	        * @example
	        * //Accessing the Element on a VideoNode created via an already existing element
	        * var ctx = new VideoContext();
	        * var videoElement = document.createElement("video");
	        * var videoNode = ctx.createVideoSourceNode(videoElement);
	        * videoNode.start(0);
	        * videoNode.stop(5);
	        * //The elemnt can be accessed any time because it's lifecycle is managed outside of the VideoContext
	        * videoNode.element.volume = 0;
	        *
	        */},{key:"element",get:function get(){return this._element;} /**
	        * Returns the duration of the node on a timeline. If no start time is set will return undefiend, if no stop time is set will return Infinity.
	        *
	        * @return {number} The duration of the node in seconds.
	        *
	        * @example
	        * var ctx = new VideoContext();
	        * var videoNode = ctx.createVideoSourceNode('video.mp4');
	        * videoNode.start(5);
	        * videoNode.stop(10);
	        * console.log(videoNode.duration); //will output 10
	        */},{key:"duration",get:function get(){if(isNaN(this._startTime))return undefined;if(this._stopTime === Infinity)return Infinity;return this._stopTime - this._startTime;}},{key:"stretchPaused",set:function set(stretchPaused){this._stretchPaused = stretchPaused;},get:function get(){return this._stretchPaused;}},{key:"startTime",get:function get(){return this._startTime;}},{key:"stopTime",get:function get(){return this._stopTime;}}]);return SourceNode;})(_graphnode2["default"]);exports.SOURCENODESTATE = STATE;exports["default"] = SourceNode; /***/}, /* 3 */function(module,exports,__webpack_require__){ //Matthew Shotton, R&D User Experience,© BBC 2015
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();exports.compileShader = compileShader;exports.createShaderProgram = createShaderProgram;exports.createElementTexutre = createElementTexutre;exports.updateTexture = updateTexture;exports.clearTexture = clearTexture;exports.generateRandomId = generateRandomId;exports.exportToJSON = exportToJSON;exports.snapshot = snapshot;exports.createControlFormForNode = createControlFormForNode;exports.visualiseVideoContextGraph = visualiseVideoContextGraph;exports.createSigmaGraphDataFromRenderGraph = createSigmaGraphDataFromRenderGraph;exports.importSimpleEDL = importSimpleEDL;exports.visualiseVideoContextTimeline = visualiseVideoContextTimeline;function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var _DefinitionsDefinitionsJs=__webpack_require__(4);var _DefinitionsDefinitionsJs2=_interopRequireDefault(_DefinitionsDefinitionsJs);var _SourceNodesSourcenodeJs=__webpack_require__(2); /*
	* Utility function to compile a WebGL Vertex or Fragment shader.
	*
	* @param {WebGLRenderingContext} gl - the webgl context fo which to build the shader.
	* @param {String} shaderSource - A string of shader code to compile.
	* @param {number} shaderType - Shader type, either WebGLRenderingContext.VERTEX_SHADER or WebGLRenderingContext.FRAGMENT_SHADER.
	*
	* @return {WebGLShader} A compiled shader.
	*
	*/function compileShader(gl,shaderSource,shaderType){var shader=gl.createShader(shaderType);gl.shaderSource(shader,shaderSource);gl.compileShader(shader);var success=gl.getShaderParameter(shader,gl.COMPILE_STATUS);if(!success){throw "could not compile shader:" + gl.getShaderInfoLog(shader);}return shader;} /*
	* Create a shader program from a passed vertex and fragment shader source string.
	*
	* @param {WebGLRenderingContext} gl - the webgl context fo which to build the shader.
	* @param {WebGLShader} vertexShader - A compiled vertex shader.
	* @param {WebGLShader} fragmentShader - A compiled fragment shader.
	*
	* @return {WebGLProgram} A compiled & linkde shader program.
	*/function createShaderProgram(gl,vertexShader,fragmentShader){var program=gl.createProgram();gl.attachShader(program,vertexShader);gl.attachShader(program,fragmentShader);gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS)){throw {"error":4,"msg":"Can't link shader program for track",toString:function toString(){return this.msg;}};}return program;}function createElementTexutre(gl){var texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true); // Set the parameters so we can render any size image.
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST); //Initialise the texture untit to clear.
//gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, type);
return texture;}function updateTexture(gl,texture,element){if(element.readyState !== undefined && element.readyState === 0)return;gl.bindTexture(gl.TEXTURE_2D,texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,element);}function clearTexture(gl,texture){gl.bindTexture(gl.TEXTURE_2D,texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([0,0,0,0]));}function generateRandomId(){var appearanceAdjective=["adorable","alert","average","beautiful","blonde","bloody","blushing","bright","clean","clear","cloudy","colourful","concerned","crowded","curious","cute","dark","dirty","drab","distinct","dull","elegant","fancy","filthy","glamorous","gleaming","graceful","grotesque","homely","light","misty","motionless","muddy","plain","poised","quaint","scary","shiny","smoggy","sparkling","spotless","stormy","strange","ugly","unsightly","unusual"];var conditionAdjective=["alive","brainy","broken","busy","careful","cautious","clever","crazy","damaged","dead","difficult","easy","fake","false","famous","forward","fragile","guilty","helpful","helpless","important","impossible","infamous","innocent","inquisitive","mad","modern","open","outgoing","outstanding","poor","powerful","puzzled","real","rich","right","robust","sane","scary","shy","sleepy","stupid","super","tame","thick","tired","wild","wrong"];var nounAnimal=["manatee","gila monster","nematode","seahorse","slug","koala bear","giant tortoise","garden snail","starfish","sloth","american woodcock","coral","swallowtail butterfly","house sparrow","sea anemone"];function randomChoice(array){return array[Math.floor(Math.random() * array.length)];}function capitalize(word){word = word.replace(/\b\w/g,function(l){return l.toUpperCase();});return word;}var name=randomChoice(appearanceAdjective) + " " + randomChoice(conditionAdjective) + " " + randomChoice(nounAnimal);name = capitalize(name);name = name.replace(/ /g,"-");return name;}function exportToJSON(vc){console.warn("VideoContext.exportToJSON has been deprecated. Please use VideoContext.snapshot instead.");return JSON.stringify(snapshotNodes(vc));}function snapshot(vc){return {nodes:snapshotNodes(vc),videoContext:snapshotVideoContext(vc)};}function snapshotVideoContext(vc){return {currentTime:vc.currentTime,duration:vc.duration,state:vc.state,playbackRate:vc.playbackRate};}var warningExportSourceLogged=false;function snapshotNodes(vc){function qualifyURL(url){var a=document.createElement("a");a.href = url;return a.href;}function getInputIDs(node,vc){var inputs=[];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=node.inputs[Symbol.iterator](),_step;!(_iteratorNormalCompletion = (_step = _iterator.next()).done);_iteratorNormalCompletion = true) {var input=_step.value;if(input === undefined)continue;var inputID=undefined;var inputIndex=node.inputs.indexOf(input);var index=vc._processingNodes.indexOf(input);if(index > -1){inputID = "processor" + index;}else {var _index=vc._sourceNodes.indexOf(input);if(_index > -1){inputID = "source" + _index;}else {console.log("Warning, can't find input",input);}}inputs.push({id:inputID,index:inputIndex});}}catch(err) {_didIteratorError = true;_iteratorError = err;}finally {try{if(!_iteratorNormalCompletion && _iterator["return"]){_iterator["return"]();}}finally {if(_didIteratorError){throw _iteratorError;}}}return inputs;}var result={};var sourceNodeStateMapping=[];for(var state in _SourceNodesSourcenodeJs.SOURCENODESTATE) {sourceNodeStateMapping[_SourceNodesSourcenodeJs.SOURCENODESTATE[state]] = state;}for(var index in vc._sourceNodes) {var source=vc._sourceNodes[index];var id="source" + index;var node_url="";if(!source._isResponsibleForElementLifeCycle){if(!warningExportSourceLogged){console.debug("Warning - Trying to export source created from an element not a URL. URL of export will be set to the elements src attribute and may be incorrect",source);warningExportSourceLogged = true;}node_url = source.element.src;}else {node_url = qualifyURL(source._elementURL);}var node={type:source.displayName,url:node_url,start:source.startTime,stop:source.stopTime,state:sourceNodeStateMapping[source.state]};if(node.type === "VideoNode"){node.currentTime = null;if(source.element && source.element.currentTime){node.currentTime = source.element.currentTime;}}if(source._sourceOffset){node.sourceOffset = source._sourceOffset;}result[id] = node;}for(var index in vc._processingNodes) {var processor=vc._processingNodes[index];var id="processor" + index;var node={type:processor.displayName,definition:processor._definition,inputs:getInputIDs(processor,vc),properties:{}};for(var property in node.definition.properties) {node.properties[property] = processor[property];}if(node.type === "TransitionNode"){node.transitions = processor._transitions;}result[id] = node;}result["destination"] = {type:"Destination",inputs:getInputIDs(vc.destination,vc)};return result;}function createControlFormForNode(node,nodeName){var rootDiv=document.createElement("div");if(nodeName !== undefined){var title=document.createElement("h2");title.innerHTML = nodeName;rootDiv.appendChild(title);}var _loop=function _loop(propertyName){var propertyParagraph=document.createElement("p");var propertyTitleHeader=document.createElement("h3");propertyTitleHeader.innerHTML = propertyName;propertyParagraph.appendChild(propertyTitleHeader);var propertyValue=node._properties[propertyName].value;if(typeof propertyValue === "number"){(function(){var range=document.createElement("input");range.setAttribute("type","range");range.setAttribute("min","0");range.setAttribute("max","1");range.setAttribute("step","0.01");range.setAttribute("value",propertyValue,toString());var number=document.createElement("input");number.setAttribute("type","number");number.setAttribute("min","0");number.setAttribute("max","1");number.setAttribute("step","0.01");number.setAttribute("value",propertyValue,toString());var mouseDown=false;range.onmousedown = function(){mouseDown = true;};range.onmouseup = function(){mouseDown = false;};range.onmousemove = function(){if(mouseDown){node[propertyName] = parseFloat(range.value);number.value = range.value;}};range.onchange = function(){node[propertyName] = parseFloat(range.value);number.value = range.value;};number.onchange = function(){node[propertyName] = parseFloat(number.value);range.value = number.value;};propertyParagraph.appendChild(range);propertyParagraph.appendChild(number);})();}else if(Object.prototype.toString.call(propertyValue) === "[object Array]"){var _loop2=function _loop2(){var range=document.createElement("input");range.setAttribute("type","range");range.setAttribute("min","0");range.setAttribute("max","1");range.setAttribute("step","0.01");range.setAttribute("value",propertyValue[i],toString());var number=document.createElement("input");number.setAttribute("type","number");number.setAttribute("min","0");number.setAttribute("max","1");number.setAttribute("step","0.01");number.setAttribute("value",propertyValue,toString());var index=i;var mouseDown=false;range.onmousedown = function(){mouseDown = true;};range.onmouseup = function(){mouseDown = false;};range.onmousemove = function(){if(mouseDown){node[propertyName][index] = parseFloat(range.value);number.value = range.value;}};range.onchange = function(){node[propertyName][index] = parseFloat(range.value);number.value = range.value;};number.onchange = function(){node[propertyName][index] = parseFloat(number.value);range.value = number.value;};propertyParagraph.appendChild(range);propertyParagraph.appendChild(number);};for(i = 0;i < propertyValue.length;i++) {_loop2();}}rootDiv.appendChild(propertyParagraph);};for(var propertyName in node._properties) {var i;_loop(propertyName);}return rootDiv;}function calculateNodeDepthFromDestination(videoContext){var destination=videoContext.destination;var depthMap=new Map();depthMap.set(destination,0);function itterateBackwards(node){var depth=arguments.length <= 1 || arguments[1] === undefined?0:arguments[1];var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=node.inputs[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);_iteratorNormalCompletion2 = true) {var n=_step2.value;var d=depth + 1;if(depthMap.has(n)){if(d > depthMap.get(n)){depthMap.set(n,d);}}else {depthMap.set(n,d);}itterateBackwards(n,depthMap.get(n));}}catch(err) {_didIteratorError2 = true;_iteratorError2 = err;}finally {try{if(!_iteratorNormalCompletion2 && _iterator2["return"]){_iterator2["return"]();}}finally {if(_didIteratorError2){throw _iteratorError2;}}}}itterateBackwards(destination);return depthMap;}function visualiseVideoContextGraph(videoContext,canvas){var ctx=canvas.getContext("2d");var w=canvas.width;var h=canvas.height;ctx.clearRect(0,0,w,h);var nodeDepths=calculateNodeDepthFromDestination(videoContext);var depths=nodeDepths.values();depths = Array.from(depths).sort(function(a,b){return b - a;});var maxDepth=depths[0];var xStep=w / (maxDepth + 1);var nodeHeight=h / videoContext._sourceNodes.length / 3;var nodeWidth=nodeHeight * 1.618;function calculateNodePos(node,nodeDepths,xStep,nodeHeight){var depth=nodeDepths.get(node);nodeDepths.values();var count=0;var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=nodeDepths[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);_iteratorNormalCompletion3 = true) {var nodeDepth=_step3.value;if(nodeDepth[0] === node)break;if(nodeDepth[1] === depth)count += 1;}}catch(err) {_didIteratorError3 = true;_iteratorError3 = err;}finally {try{if(!_iteratorNormalCompletion3 && _iterator3["return"]){_iterator3["return"]();}}finally {if(_didIteratorError3){throw _iteratorError3;}}}return {x:xStep * nodeDepths.get(node),y:nodeHeight * 1.5 * count + 50};} // "video":["#572A72", "#3C1255"],
// "image":["#7D9F35", "#577714"],
// "canvas":["#AA9639", "#806D15"]
for(var i=0;i < videoContext._renderGraph.connections.length;i++) {var conn=videoContext._renderGraph.connections[i];var source=calculateNodePos(conn.source,nodeDepths,xStep,nodeHeight);var destination=calculateNodePos(conn.destination,nodeDepths,xStep,nodeHeight);if(source !== undefined && destination !== undefined){ctx.beginPath(); //ctx.moveTo(source.x + nodeWidth/2, source.y + nodeHeight/2);
var x1=source.x + nodeWidth / 2;var y1=source.y + nodeHeight / 2;var x2=destination.x + nodeWidth / 2;var y2=destination.y + nodeHeight / 2;var dx=x2 - x1;var dy=y2 - y1;var angle=Math.PI / 2 - Math.atan2(dx,dy);var distance=Math.sqrt(Math.pow(x1 - x2,2) + Math.pow(y1 - y2,2));var midX=Math.min(x1,x2) + (Math.max(x1,x2) - Math.min(x1,x2)) / 2;var midY=Math.min(y1,y2) + (Math.max(y1,y2) - Math.min(y1,y2)) / 2;var testX=Math.cos(angle + Math.PI / 2) * distance / 1.5 + midX;var testY=Math.sin(angle + Math.PI / 2) * distance / 1.5 + midY; // console.log(testX, testY);
ctx.arc(testX,testY,distance / 1.2,angle - Math.PI + 0.95,angle - 0.95); //ctx.arcTo(source.x + nodeWidth/2 ,source.y + nodeHeight/2,destination.x + nodeWidth/2,destination.y + nodeHeight/2,100);
//ctx.lineTo(midX, midY);
ctx.stroke(); //ctx.endPath();
}}var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=nodeDepths.keys()[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done);_iteratorNormalCompletion4 = true) {var node=_step4.value;var pos=calculateNodePos(node,nodeDepths,xStep,nodeHeight);var color="#AA9639";var text="";if(node.displayName === "CompositingNode"){color = "#000000";}if(node.displayName === "DestinationNode"){color = "#7D9F35";text = "Output";}if(node.displayName === "VideoNode"){color = "#572A72";text = "Video";}if(node.displayName === "CanvasNode"){color = "#572A72";text = "Canvas";}if(node.displayName === "ImageNode"){color = "#572A72";text = "Image";}ctx.beginPath();ctx.fillStyle = color;ctx.fillRect(pos.x,pos.y,nodeWidth,nodeHeight);ctx.fill();ctx.fillStyle = "#000";ctx.textAlign = "center";ctx.font = "10px Arial";ctx.fillText(text,pos.x + nodeWidth / 2,pos.y + nodeHeight / 2 + 2.5);ctx.fill();}}catch(err) {_didIteratorError4 = true;_iteratorError4 = err;}finally {try{if(!_iteratorNormalCompletion4 && _iterator4["return"]){_iterator4["return"]();}}finally {if(_didIteratorError4){throw _iteratorError4;}}}return;}function createSigmaGraphDataFromRenderGraph(videoContext){function idForNode(node){if(videoContext._sourceNodes.indexOf(node) !== -1){var _id="source " + node.displayName + " " + videoContext._sourceNodes.indexOf(node);return _id;}var id="processor " + node.displayName + " " + videoContext._processingNodes.indexOf(node);return id;}var graph={nodes:[{id:idForNode(videoContext.destination),label:"Destination Node",x:2.5,y:0.5,size:2,node:videoContext.destination}],edges:[]};for(var i=0;i < videoContext._sourceNodes.length;i++) {var sourceNode=videoContext._sourceNodes[i];var y=i * (1.0 / videoContext._sourceNodes.length);graph.nodes.push({id:idForNode(sourceNode),label:"Source " + i.toString(),x:0,y:y,size:2,color:"#572A72",node:sourceNode});}for(var i=0;i < videoContext._processingNodes.length;i++) {var processingNode=videoContext._processingNodes[i];graph.nodes.push({id:idForNode(processingNode),x:Math.random() * 2.5,y:Math.random(),size:2,node:processingNode});}for(var i=0;i < videoContext._renderGraph.connections.length;i++) {var conn=videoContext._renderGraph.connections[i];graph.edges.push({"id":"e" + i.toString(),"source":idForNode(conn.source),"target":idForNode(conn.destination)});}return graph;}function importSimpleEDL(ctx,playlist){ // Create a "track" node to connect all the clips to.
var trackNode=ctx.compositor(_DefinitionsDefinitionsJs2["default"].COMBINE); // Create a source node for each of the clips.
var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=playlist[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done);_iteratorNormalCompletion5 = true) {var clip=_step5.value;var node=undefined;if(clip.type === "video"){node = ctx.video(clip.src,clip.sourceStart);}else if(clip.type === "image"){node = ctx.image(clip.src,clip.sourceStart);}else {console.debug("Clip type \"" + clip.type + "\" not recognised, skipping.");continue;}node.startAt(clip.start);node.stopAt(clip.start + clip.duration);node.connect(trackNode);}}catch(err) {_didIteratorError5 = true;_iteratorError5 = err;}finally {try{if(!_iteratorNormalCompletion5 && _iterator5["return"]){_iterator5["return"]();}}finally {if(_didIteratorError5){throw _iteratorError5;}}}return trackNode;}function visualiseVideoContextTimeline(videoContext,canvas,currentTime){var ctx=canvas.getContext("2d");var w=canvas.width;var h=canvas.height;var trackHeight=h / videoContext._sourceNodes.length;var playlistDuration=videoContext.duration;if(currentTime > playlistDuration && !videoContext.endOnLastSourceEnd)playlistDuration = currentTime;if(videoContext.duration === Infinity){var total=0;for(var i=0;i < videoContext._sourceNodes.length;i++) {var sourceNode=videoContext._sourceNodes[i];if(sourceNode._stopTime !== Infinity)total += sourceNode._stopTime;}if(total > videoContext.currentTime){playlistDuration = total + 5;}else {playlistDuration = videoContext.currentTime + 5;}}var pixelsPerSecond=w / playlistDuration;var mediaSourceStyle={"video":["#572A72","#3C1255"],"image":["#7D9F35","#577714"],"canvas":["#AA9639","#806D15"]};ctx.clearRect(0,0,w,h);ctx.fillStyle = "#999";var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=videoContext._processingNodes[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done);_iteratorNormalCompletion6 = true) {var node=_step6.value;if(node.displayName !== "TransitionNode")continue;for(var propertyName in node._transitions) {var _iteratorNormalCompletion7=true;var _didIteratorError7=false;var _iteratorError7=undefined;try{for(var _iterator7=node._transitions[propertyName][Symbol.iterator](),_step7;!(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done);_iteratorNormalCompletion7 = true) {var transition=_step7.value;var tW=(transition.end - transition.start) * pixelsPerSecond;var tH=h;var tX=transition.start * pixelsPerSecond;var tY=0;ctx.fillStyle = "rgba(0,0,0, 0.3)";ctx.fillRect(tX,tY,tW,tH);ctx.fill();}}catch(err) {_didIteratorError7 = true;_iteratorError7 = err;}finally {try{if(!_iteratorNormalCompletion7 && _iterator7["return"]){_iterator7["return"]();}}finally {if(_didIteratorError7){throw _iteratorError7;}}}}}}catch(err) {_didIteratorError6 = true;_iteratorError6 = err;}finally {try{if(!_iteratorNormalCompletion6 && _iterator6["return"]){_iterator6["return"]();}}finally {if(_didIteratorError6){throw _iteratorError6;}}}for(var i=0;i < videoContext._sourceNodes.length;i++) {var sourceNode=videoContext._sourceNodes[i];var duration=sourceNode._stopTime - sourceNode._startTime;if(duration === Infinity)duration = videoContext.currentTime;var start=sourceNode._startTime;var msW=duration * pixelsPerSecond;var msH=trackHeight;var msX=start * pixelsPerSecond;var msY=trackHeight * i;ctx.fillStyle = mediaSourceStyle.video[i % mediaSourceStyle.video.length];ctx.fillRect(msX,msY,msW,msH);ctx.fill();}if(currentTime !== undefined){ctx.fillStyle = "#000";ctx.fillRect(currentTime * pixelsPerSecond,0,1,h);}}var UpdateablesManager=(function(){function UpdateablesManager(){_classCallCheck(this,UpdateablesManager);this._updateables = [];this._useWebworker = false;this._active = false;this._previousRAFTime = undefined;this._previousWorkerTime = undefined;this._webWorkerString = "\
	            var running = false;\
	            function tick(){\
	                postMessage(Date.now());\
	                if (running){\
	                    setTimeout(tick, 1000/20);\
	                }\
	            }\
	            self.addEventListener('message',function(msg){\
	                var data = msg.data;\
	                if (data === 'start'){\
	                    running = true;\
	                    tick();\
	                }\
	                if (data === 'stop') running = false;\
	            });";this._webWorker = undefined;}_createClass(UpdateablesManager,[{key:"_initWebWorker",value:function _initWebWorker(){var _this=this;window.URL = window.URL || window.webkitURL;var blob=new Blob([this._webWorkerString],{type:"application/javascript"});this._webWorker = new Worker(URL.createObjectURL(blob));this._webWorker.onmessage = function(msg){var time=msg.data;_this._updateWorkerTime(time);};}},{key:"_lostVisibility",value:function _lostVisibility(){this._previousWorkerTime = Date.now();this._useWebworker = true;if(!this._webWorker){this._initWebWorker();}this._webWorker.postMessage("start");}},{key:"_gainedVisibility",value:function _gainedVisibility(){this._useWebworker = false;this._previousRAFTime = undefined;if(this._webWorker)this._webWorker.postMessage("stop");requestAnimationFrame(this._updateRAFTime.bind(this));}},{key:"_init",value:function _init(){var _this2=this;if(!window.Worker)return; //If page visibility API not present fallback to using "focus" and "blur" event listeners.
if(typeof document.hidden === "undefined"){window.addEventListener("focus",this._gainedVisibility.bind(this));window.addEventListener("blur",this._lostVisibility.bind(this));return;} //Otherwise we can use the visibility API to do the loose/gain focus properly
document.addEventListener("visibilitychange",function(){if(document.hidden === true){_this2._lostVisibility();}else {_this2._gainedVisibility();}},false);requestAnimationFrame(this._updateRAFTime.bind(this));}},{key:"_updateWorkerTime",value:function _updateWorkerTime(time){var dt=(time - this._previousWorkerTime) / 1000;if(dt !== 0)this._update(dt);this._previousWorkerTime = time;}},{key:"_updateRAFTime",value:function _updateRAFTime(time){if(this._previousRAFTime === undefined)this._previousRAFTime = time;var dt=(time - this._previousRAFTime) / 1000;if(dt !== 0)this._update(dt);this._previousRAFTime = time;if(!this._useWebworker)requestAnimationFrame(this._updateRAFTime.bind(this));}},{key:"_update",value:function _update(dt){for(var i=0;i < this._updateables.length;i++) {this._updateables[i]._update(parseFloat(dt));}}},{key:"register",value:function register(updateable){this._updateables.push(updateable);if(this._active === false){this._active = true;this._init();}}}]);return UpdateablesManager;})();exports.UpdateablesManager = UpdateablesManager; /***/}, /* 4 */function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{"default":obj};}var _aaf_video_scaleJs=__webpack_require__(5);var _aaf_video_scaleJs2=_interopRequireDefault(_aaf_video_scaleJs);var _crossfadeJs=__webpack_require__(6);var _crossfadeJs2=_interopRequireDefault(_crossfadeJs);var _horizontalWipeJs=__webpack_require__(7);var _horizontalWipeJs2=_interopRequireDefault(_horizontalWipeJs);var _verticalWipeJs=__webpack_require__(8);var _verticalWipeJs2=_interopRequireDefault(_verticalWipeJs);var _randomDissolveJs=__webpack_require__(9);var _randomDissolveJs2=_interopRequireDefault(_randomDissolveJs);var _toColorAndBackFadeJs=__webpack_require__(10);var _toColorAndBackFadeJs2=_interopRequireDefault(_toColorAndBackFadeJs);var _starWipeJs=__webpack_require__(11);var _starWipeJs2=_interopRequireDefault(_starWipeJs);var _combineJs=__webpack_require__(12);var _combineJs2=_interopRequireDefault(_combineJs);var _colorThresholdJs=__webpack_require__(13);var _colorThresholdJs2=_interopRequireDefault(_colorThresholdJs);var _monochromeJs=__webpack_require__(14);var _monochromeJs2=_interopRequireDefault(_monochromeJs);var _horizontalBlurJs=__webpack_require__(15);var _horizontalBlurJs2=_interopRequireDefault(_horizontalBlurJs);var _verticalBlurJs=__webpack_require__(16);var _verticalBlurJs2=_interopRequireDefault(_verticalBlurJs);var _aaf_video_flopJs=__webpack_require__(17);var _aaf_video_flopJs2=_interopRequireDefault(_aaf_video_flopJs);var _aaf_video_flipJs=__webpack_require__(18);var _aaf_video_flipJs2=_interopRequireDefault(_aaf_video_flipJs);var _aaf_video_positionJs=__webpack_require__(19);var _aaf_video_positionJs2=_interopRequireDefault(_aaf_video_positionJs);var _aaf_video_cropJs=__webpack_require__(20);var _aaf_video_cropJs2=_interopRequireDefault(_aaf_video_cropJs);var _staticDissolveJs=__webpack_require__(21);var _staticDissolveJs2=_interopRequireDefault(_staticDissolveJs);var _staticEffectJs=__webpack_require__(22);var _staticEffectJs2=_interopRequireDefault(_staticEffectJs);var _dreamfadeJs=__webpack_require__(23);var _dreamfadeJs2=_interopRequireDefault(_dreamfadeJs);var _opacityJs=__webpack_require__(24);var _opacityJs2=_interopRequireDefault(_opacityJs);var _cropJs=__webpack_require__(25);var _cropJs2=_interopRequireDefault(_cropJs);var DEFINITIONS={AAF_VIDEO_SCALE:_aaf_video_scaleJs2["default"],CROSSFADE:_crossfadeJs2["default"],DREAMFADE:_dreamfadeJs2["default"],HORIZONTAL_WIPE:_horizontalWipeJs2["default"],VERTICAL_WIPE:_verticalWipeJs2["default"],RANDOM_DISSOLVE:_randomDissolveJs2["default"],STATIC_DISSOLVE:_staticDissolveJs2["default"],STATIC_EFFECT:_staticEffectJs2["default"],TO_COLOR_AND_BACK:_toColorAndBackFadeJs2["default"],STAR_WIPE:_starWipeJs2["default"],COMBINE:_combineJs2["default"],COLORTHRESHOLD:_colorThresholdJs2["default"],MONOCHROME:_monochromeJs2["default"],HORIZONTAL_BLUR:_horizontalBlurJs2["default"],VERTICAL_BLUR:_verticalBlurJs2["default"],AAF_VIDEO_CROP:_aaf_video_cropJs2["default"],AAF_VIDEO_POSITION:_aaf_video_positionJs2["default"],AAF_VIDEO_FLIP:_aaf_video_flipJs2["default"],AAF_VIDEO_FLOP:_aaf_video_flopJs2["default"],OPACITY:_opacityJs2["default"],CROP:_cropJs2["default"]};exports["default"] = DEFINITIONS;module.exports = exports["default"]; /***/}, /* 5 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var aaf_video_scale={"title":"AAF Video Scale Effect","description":"A scale effect based on the AAF spec.","vertexShader":"\
	        attribute vec2 a_position;\
	        attribute vec2 a_texCoord;\
	        varying vec2 v_texCoord;\
	        void main() {\
	            gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	            v_texCoord = a_texCoord;\
	        }","fragmentShader":"\
	        precision mediump float;\
	        uniform sampler2D u_image;\
	        uniform float scaleX;\
	        uniform float scaleY;\
	        varying vec2 v_texCoord;\
	        varying float v_progress;\
	        void main(){\
	            vec2 pos = vec2(v_texCoord[0]*1.0/scaleX - (1.0/scaleX/2.0 -0.5), v_texCoord[1]*1.0/scaleY - (1.0/scaleY/2.0 -0.5));\
	                vec4 color = texture2D(u_image, pos);\
	                if (pos[0] < 0.0 || pos[0] > 1.0 || pos[1] < 0.0 || pos[1] > 1.0){\
	                    color = vec4(0.0,0.0,0.0,0.0);\
	                }\
	                gl_FragColor = color;\
	            }","properties":{"scaleX":{"type":"uniform","value":1.0},"scaleY":{"type":"uniform","value":1.0}},"inputs":["u_image"]};exports["default"] = aaf_video_scale;module.exports = exports["default"]; /***/}, /* 6 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var crossfade={"title":"Cross-Fade","description":"A cross-fade effect. Typically used as a transistion.","vertexShader":"\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }","fragmentShader":"\
	    precision mediump float;\
	    uniform sampler2D u_image_a;\
	    uniform sampler2D u_image_b;\
	    uniform float mix;\
	    varying vec2 v_texCoord;\
	    varying float v_mix;\
	    void main(){\
	        vec4 color_a = texture2D(u_image_a, v_texCoord);\
	        vec4 color_b = texture2D(u_image_b, v_texCoord);\
	        color_a[0] *= (1.0 - mix);\
	        color_a[1] *= (1.0 - mix);\
	        color_a[2] *= (1.0 - mix);\
	        color_a[3] *= (1.0 - mix);\
	        color_b[0] *= mix;\
	        color_b[1] *= mix;\
	        color_b[2] *= mix;\
	        color_b[3] *= mix;\
	        gl_FragColor = color_a + color_b;\
	    }","properties":{"mix":{"type":"uniform","value":0.0}},"inputs":["u_image_a","u_image_b"]};exports["default"] = crossfade;module.exports = exports["default"]; /***/}, /* 7 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var horizontal_wipe={"title":"Horizontal Wipe","description":"A horizontal wipe effect. Typically used as a transistion.","vertexShader":"\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }","fragmentShader":"\
	            precision mediump float;\
	            uniform sampler2D u_image_a;\
	            uniform sampler2D u_image_b;\
	            uniform float mix;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            void main(){\
	                vec4 color_a = texture2D(u_image_a, v_texCoord);\
	                vec4 color_b = texture2D(u_image_b, v_texCoord);\
	                if (v_texCoord[0] > mix){\
	                    gl_FragColor = color_a;\
	                } else {\
	                    gl_FragColor = color_b;\
	                }\
	            }","properties":{"mix":{"type":"uniform","value":0.0}},"inputs":["u_image_a","u_image_b"]};exports["default"] = horizontal_wipe;module.exports = exports["default"]; /***/}, /* 8 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var verticalWipe={"title":"vertical Wipe","description":"A vertical wipe effect. Typically used as a transistion.","vertexShader":"\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }","fragmentShader":"\
	            precision mediump float;\
	            uniform sampler2D u_image_a;\
	            uniform sampler2D u_image_b;\
	            uniform float mix;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            void main(){\
	                vec4 color_a = texture2D(u_image_a, v_texCoord);\
	                vec4 color_b = texture2D(u_image_b, v_texCoord);\
	                if (v_texCoord[1] > mix){\
	                    gl_FragColor = color_a;\
	                } else {\
	                    gl_FragColor = color_b;\
	                }\
	            }","properties":{"mix":{"type":"uniform","value":0.0}},"inputs":["u_image_a","u_image_b"]};exports["default"] = verticalWipe;module.exports = exports["default"]; /***/}, /* 9 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var randomDissolve={"title":"Random Dissolve","description":"A random dissolve effect. Typically used as a transistion.","vertexShader":"\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }","fragmentShader":"\
	            precision mediump float;\
	            uniform sampler2D u_image_a;\
	            uniform sampler2D u_image_b;\
	            uniform float mix;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            float rand(vec2 co){\
	               return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\
	            }\
	            void main(){\
	                vec4 color_a = texture2D(u_image_a, v_texCoord);\
	                vec4 color_b = texture2D(u_image_b, v_texCoord);\
	                if (clamp(rand(v_texCoord),  0.01, 1.001) > mix){\
	                    gl_FragColor = color_a;\
	                } else {\
	                    gl_FragColor = color_b;\
	                }\
	            }","properties":{"mix":{"type":"uniform","value":0.0}},"inputs":["u_image_a","u_image_b"]};exports["default"] = randomDissolve;module.exports = exports["default"]; /***/}, /* 10 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var toColorAndBackFade={"title":"To Color And Back Fade","description":"A fade to black and back effect. Setting mix to 0.5 is a fully solid color frame. Typically used as a transistion.","vertexShader":"\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }","fragmentShader":"\
	            precision mediump float;\
	            uniform sampler2D u_image_a;\
	            uniform sampler2D u_image_b;\
	            uniform float mix;\
	            uniform vec4 color;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            void main(){\
	                vec4 color_a = texture2D(u_image_a, v_texCoord);\
	                vec4 color_b = texture2D(u_image_b, v_texCoord);\
	                float mix_amount = (mix *2.0) - 1.0;\
	                if(mix_amount < 0.0){\
	                    gl_FragColor = abs(mix_amount) * color_a + (1.0 - abs(mix_amount)) * color;\
	                } else {\
	                    gl_FragColor = mix_amount * color_b + (1.0 - mix_amount) * color;\
	                }\
	            }","properties":{"mix":{"type":"uniform","value":0.0},"color":{"type":"uniform","value":[0.0,0.0,0.0,0.0]}},"inputs":["u_image_a","u_image_b"]};exports["default"] = toColorAndBackFade;module.exports = exports["default"]; /***/}, /* 11 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var starWipe={"title":"Star Wipe Fade","description":"A classic star wipe transistion. Typically used as a transistion.","vertexShader":"\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }","fragmentShader":"\
	            precision mediump float;\
	            uniform sampler2D u_image_a;\
	            uniform sampler2D u_image_b;\
	            uniform float mix;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            float sign (vec2 p1, vec2 p2, vec2 p3){\
	                return (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1]);\
	            }\
	            bool pointInTriangle(vec2 pt, vec2 v1, vec2 v2, vec2 v3){\
	                bool b1, b2, b3;\
	                b1 = sign(pt, v1, v2) < 0.0;\
	                b2 = sign(pt, v2, v3) < 0.0;\
	                b3 = sign(pt, v3, v1) < 0.0;\
	                return ((b1 == b2) && (b2 == b3));\
	            }\
	            vec2 rotatePointAboutPoint(vec2 point, vec2 pivot, float angle){\
	                float s = sin(angle);\
	                float c = cos(angle);\
	                float x = point[0] - pivot[0];\
	                float y = point[1] - pivot[1];\
	                float new_x = x * c - y * s;\
	                float new_y = x * s + y * c;\
	                return vec2(new_x + pivot[0], new_y+pivot[1]);\
	            }\
	            \
	            void main(){\
	                vec4 color_a = texture2D(u_image_b, v_texCoord);\
	                vec4 color_b = texture2D(u_image_a, v_texCoord);\
	                vec2 t0_p0,t0_p1,t0_p2,t1_p0,t1_p1,t1_p2,t2_p0,t2_p1,t2_p2,t3_p0,t3_p1,t3_p2;\
	                vec2 t4_p0,t4_p1,t4_p2,t5_p0,t5_p1,t5_p2,t6_p0,t6_p1,t6_p2,t7_p0,t7_p1,t7_p2;\
	                \
	                \
	                t0_p0 = vec2(0.0, 0.25) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\
	                t0_p1 = vec2(0.0, -0.25) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\
	                t0_p2 = vec2(1.0, 0.0) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\
	                \
	                t1_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854);\
	                t1_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854);\
	                t1_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854);\
	                \
	                t2_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 2.0);\
	                t2_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 2.0);\
	                t2_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 2.0);\
	                \
	                t3_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 3.0);\
	                t3_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 3.0);\
	                t3_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 3.0);\
	                \
	                t4_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 4.0);\
	                t4_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 4.0);\
	                t4_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 4.0);\
	                \
	                t5_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 5.0);\
	                t5_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 5.0);\
	                t5_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 5.0);\
	                \
	                t6_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 6.0);\
	                t6_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 6.0);\
	                t6_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 6.0);\
	                \
	                t7_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 7.0);\
	                t7_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 7.0);\
	                t7_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 7.0);\
	                \
	                if(mix > 0.99){\
	                    gl_FragColor = color_a;\
	                    return;\
	                }\
	                if(mix < 0.01){\
	                    gl_FragColor = color_b;\
	                    return;\
	                }\
	                if(pointInTriangle(v_texCoord, t0_p0, t0_p1, t0_p2) || pointInTriangle(v_texCoord, t1_p0, t1_p1, t1_p2) || pointInTriangle(v_texCoord, t2_p0, t2_p1, t2_p2) || pointInTriangle(v_texCoord, t3_p0, t3_p1, t3_p2) || pointInTriangle(v_texCoord, t4_p0, t4_p1, t4_p2) || pointInTriangle(v_texCoord, t5_p0, t5_p1, t5_p2) || pointInTriangle(v_texCoord, t6_p0, t6_p1, t6_p2) || pointInTriangle(v_texCoord, t7_p0, t7_p1, t7_p2)){\
	                    gl_FragColor = color_a;\
	                } else {\
	                    gl_FragColor = color_b;\
	                }\
	            }","properties":{"mix":{"type":"uniform","value":1.0}},"inputs":["u_image_a","u_image_b"]};exports["default"] = starWipe;module.exports = exports["default"]; /***/}, /* 12 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var combine={"title":"Combine","description":"A basic effect which renders the input to the output, Typically used as a combine node for layering up media with alpha transparency.","vertexShader":"\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }","fragmentShader":"\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            uniform float a;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            void main(){\
	                vec4 color = texture2D(u_image, v_texCoord);\
	                gl_FragColor = color;\
	            }","properties":{"a":{"type":"uniform","value":0.0}},"inputs":["u_image"]};exports["default"] = combine;module.exports = exports["default"]; /***/}, /* 13 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var colorThreshold={"title":"Color Threshold","description":"Turns all pixels with a greater value than the specified threshold transparent.","vertexShader":"\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }","fragmentShader":"\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            uniform float a;\
	            uniform vec3 colorAlphaThreshold;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            void main(){\
	                vec4 color = texture2D(u_image, v_texCoord);\
	                if (color[0] > colorAlphaThreshold[0] && color[1]> colorAlphaThreshold[1] && color[2]> colorAlphaThreshold[2]){\
	                    color = vec4(0.0,0.0,0.0,0.0);\
	                }\
	                gl_FragColor = color;\
	            }","properties":{"a":{"type":"uniform","value":0.0},"colorAlphaThreshold":{"type":"uniform","value":[0.0,0.55,0.0]}},"inputs":["u_image"]};exports["default"] = colorThreshold;module.exports = exports["default"]; /***/}, /* 14 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var monochrome={"title":"Monochrome","description":"Change images to a single chroma (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.","vertexShader":"\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }","fragmentShader":"\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            uniform vec3 inputMix;\
	            uniform vec3 outputMix;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            void main(){\
	                vec4 color = texture2D(u_image, v_texCoord);\
	                float mono = color[0]*inputMix[0] + color[1]*inputMix[1] + color[2]*inputMix[2];\
	                color[0] = mono * outputMix[0];\
	                color[1] = mono * outputMix[1];\
	                color[2] = mono * outputMix[2];\
	                gl_FragColor = color;\
	            }","properties":{"inputMix":{"type":"uniform","value":[0.4,0.6,0.2]},"outputMix":{"type":"uniform","value":[1.0,1.0,1.0]}},"inputs":["u_image"]};exports["default"] = monochrome;module.exports = exports["default"]; /***/}, /* 15 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var horizontal_blur={"title":"Horizontal Blur","description":"A horizontal blur effect. Adpated from http://xissburg.com/faster-gaussian-blur-in-glsl/","vertexShader":"\
	        attribute vec2 a_position;\
	        attribute vec2 a_texCoord;\
	        uniform float blurAmount;\
	        varying vec2 v_texCoord;\
	        varying vec2 v_blurTexCoords[14];\
	        void main() {\
	            gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	            v_texCoord = a_texCoord;\
	            v_blurTexCoords[ 0] = v_texCoord + vec2(-0.028 * blurAmount, 0.0);\
	            v_blurTexCoords[ 1] = v_texCoord + vec2(-0.024 * blurAmount, 0.0);\
	            v_blurTexCoords[ 2] = v_texCoord + vec2(-0.020 * blurAmount, 0.0);\
	            v_blurTexCoords[ 3] = v_texCoord + vec2(-0.016 * blurAmount, 0.0);\
	            v_blurTexCoords[ 4] = v_texCoord + vec2(-0.012 * blurAmount, 0.0);\
	            v_blurTexCoords[ 5] = v_texCoord + vec2(-0.008 * blurAmount, 0.0);\
	            v_blurTexCoords[ 6] = v_texCoord + vec2(-0.004 * blurAmount, 0.0);\
	            v_blurTexCoords[ 7] = v_texCoord + vec2( 0.004 * blurAmount, 0.0);\
	            v_blurTexCoords[ 8] = v_texCoord + vec2( 0.008 * blurAmount, 0.0);\
	            v_blurTexCoords[ 9] = v_texCoord + vec2( 0.012 * blurAmount, 0.0);\
	            v_blurTexCoords[10] = v_texCoord + vec2( 0.016 * blurAmount, 0.0);\
	            v_blurTexCoords[11] = v_texCoord + vec2( 0.020 * blurAmount, 0.0);\
	            v_blurTexCoords[12] = v_texCoord + vec2( 0.024 * blurAmount, 0.0);\
	            v_blurTexCoords[13] = v_texCoord + vec2( 0.028 * blurAmount, 0.0);\
	        }","fragmentShader":"\
	        precision mediump float;\
	        uniform sampler2D u_image;\
	        varying vec2 v_texCoord;\
	        varying vec2 v_blurTexCoords[14];\
	        void main(){\
	            gl_FragColor = vec4(0.0);\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 0])*0.0044299121055113265;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 1])*0.00895781211794;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 2])*0.0215963866053;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 3])*0.0443683338718;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 4])*0.0776744219933;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 5])*0.115876621105;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 6])*0.147308056121;\
	            gl_FragColor += texture2D(u_image, v_texCoord         )*0.159576912161;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 7])*0.147308056121;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 8])*0.115876621105;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 9])*0.0776744219933;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[10])*0.0443683338718;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[11])*0.0215963866053;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[12])*0.00895781211794;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[13])*0.0044299121055113265;\
	        }","properties":{"blurAmount":{"type":"uniform","value":1.0}},"inputs":["u_image"]};exports["default"] = horizontal_blur;module.exports = exports["default"]; /***/}, /* 16 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var verticalBlur={"title":"Vertical Blur","description":"A vertical blur effect. Adpated from http://xissburg.com/faster-gaussian-blur-in-glsl/","vertexShader":"\
	        attribute vec2 a_position;\
	        attribute vec2 a_texCoord;\
	        varying vec2 v_texCoord;\
	        uniform float blurAmount;\
	        varying vec2 v_blurTexCoords[14];\
	        void main() {\
	            gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	            v_texCoord = a_texCoord;\
	            v_blurTexCoords[ 0] = v_texCoord + vec2(0.0,-0.028 * blurAmount);\
	            v_blurTexCoords[ 1] = v_texCoord + vec2(0.0,-0.024 * blurAmount);\
	            v_blurTexCoords[ 2] = v_texCoord + vec2(0.0,-0.020 * blurAmount);\
	            v_blurTexCoords[ 3] = v_texCoord + vec2(0.0,-0.016 * blurAmount);\
	            v_blurTexCoords[ 4] = v_texCoord + vec2(0.0,-0.012 * blurAmount);\
	            v_blurTexCoords[ 5] = v_texCoord + vec2(0.0,-0.008 * blurAmount);\
	            v_blurTexCoords[ 6] = v_texCoord + vec2(0.0,-0.004 * blurAmount);\
	            v_blurTexCoords[ 7] = v_texCoord + vec2(0.0, 0.004 * blurAmount);\
	            v_blurTexCoords[ 8] = v_texCoord + vec2(0.0, 0.008 * blurAmount);\
	            v_blurTexCoords[ 9] = v_texCoord + vec2(0.0, 0.012 * blurAmount);\
	            v_blurTexCoords[10] = v_texCoord + vec2(0.0, 0.016 * blurAmount);\
	            v_blurTexCoords[11] = v_texCoord + vec2(0.0, 0.020 * blurAmount);\
	            v_blurTexCoords[12] = v_texCoord + vec2(0.0, 0.024 * blurAmount);\
	            v_blurTexCoords[13] = v_texCoord + vec2(0.0, 0.028 * blurAmount);\
	        }","fragmentShader":"\
	        precision mediump float;\
	        uniform sampler2D u_image;\
	        varying vec2 v_texCoord;\
	        varying vec2 v_blurTexCoords[14];\
	        void main(){\
	            gl_FragColor = vec4(0.0);\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 0])*0.0044299121055113265;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 1])*0.00895781211794;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 2])*0.0215963866053;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 3])*0.0443683338718;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 4])*0.0776744219933;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 5])*0.115876621105;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 6])*0.147308056121;\
	            gl_FragColor += texture2D(u_image, v_texCoord         )*0.159576912161;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 7])*0.147308056121;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 8])*0.115876621105;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[ 9])*0.0776744219933;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[10])*0.0443683338718;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[11])*0.0215963866053;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[12])*0.00895781211794;\
	            gl_FragColor += texture2D(u_image, v_blurTexCoords[13])*0.0044299121055113265;\
	        }","properties":{"blurAmount":{"type":"uniform","value":1.0}},"inputs":["u_image"]};exports["default"] = verticalBlur;module.exports = exports["default"]; /***/}, /* 17 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var aaf_video_flop={"title":"AAF Video Flop Effect","description":"A flop effect based on the AAF spec. Mirrors the image in the y-axis","vertexShader":"\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }","fragmentShader":"\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            varying vec2 v_texCoord;\
	            void main(){\
	                vec2 coord = vec2(1.0 - v_texCoord[0] ,v_texCoord[1]);\
	                vec4 color = texture2D(u_image, coord);\
	                gl_FragColor = color;\
	            }","properties":{},"inputs":["u_image"]};exports["default"] = aaf_video_flop;module.exports = exports["default"]; /***/}, /* 18 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var aaf_video_flip={"title":"AAF Video Scale Effect","description":"A flip effect based on the AAF spec. Mirrors the image in the x-axis","vertexShader":"\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }","fragmentShader":"\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            varying vec2 v_texCoord;\
	            void main(){\
	                vec2 coord = vec2(v_texCoord[0] ,1.0 - v_texCoord[1]);\
	                vec4 color = texture2D(u_image, coord);\
	                gl_FragColor = color;\
	            }","properties":{},"inputs":["u_image"]};exports["default"] = aaf_video_flip;module.exports = exports["default"]; /***/}, /* 19 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var aaf_video_position={"title":"AAF Video Position Effect","description":"A position effect based on the AAF spec.","vertexShader":"\
	        attribute vec2 a_position;\
	        attribute vec2 a_texCoord;\
	        varying vec2 v_texCoord;\
	        void main() {\
	            gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	            v_texCoord = a_texCoord;\
	        }","fragmentShader":"\
	        precision mediump float;\
	        uniform sampler2D u_image;\
	        uniform float positionOffsetX;\
	        uniform float positionOffsetY;\
	        varying vec2 v_texCoord;\
	        varying float v_progress;\
	        void main(){\
	            vec2 pos = vec2(v_texCoord[0] - positionOffsetX/2.0, v_texCoord[1] -  positionOffsetY/2.0);\
	            vec4 color = texture2D(u_image, pos);\
	            if (pos[0] < 0.0 || pos[0] > 1.0 || pos[1] < 0.0 || pos[1] > 1.0){\
	                color = vec4(0.0,0.0,0.0,0.0);\
	            }\
	            gl_FragColor = color;\
	        }","properties":{"positionOffsetX":{"type":"uniform","value":0.0},"positionOffsetY":{"type":"uniform","value":0.0}},"inputs":["u_image"]};exports["default"] = aaf_video_position;module.exports = exports["default"]; /***/}, /* 20 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var aaf_video_crop={"title":"AAF Video Crop Effect","description":"A crop effect based on the AAF spec.","vertexShader":"\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }","fragmentShader":"\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            uniform float cropLeft;\
	            uniform float cropRight;\
	            uniform float cropTop;\
	            uniform float cropBottom;\
	            varying vec2 v_texCoord;\
	            void main(){\
	                vec4 color = texture2D(u_image, v_texCoord);\
	                if (v_texCoord[0] < (cropLeft+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\
	                if (v_texCoord[0] > (cropRight+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\
	                if (v_texCoord[1] < (-cropBottom+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\
	                if (v_texCoord[1] > (-cropTop+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\
	                gl_FragColor = color;\
	            }","properties":{"cropLeft":{"type":"uniform","value":-1.0},"cropRight":{"type":"uniform","value":1.0},"cropTop":{"type":"uniform","value":-1.0},"cropBottom":{"type":"uniform","value":1.0}},"inputs":["u_image"]};exports["default"] = aaf_video_crop;module.exports = exports["default"]; /***/}, /* 21 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var staticDissolve={"title":"Static Dissolve","description":"A static dissolve effect. Typically used as a transistion.","vertexShader":"\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }","fragmentShader":"\
	            precision mediump float;\
	            uniform sampler2D u_image_a;\
	            uniform sampler2D u_image_b;\
	            uniform float mix;\
	            uniform float currentTime;\
	            varying vec2 v_texCoord;\
	            varying float v_mix;\
	            float rand(vec2 co, float currentTime){\
	               return fract(sin(dot(co.xy,vec2(12.9898,78.233))+currentTime) * 43758.5453);\
	            }\
	            void main(){\
	                vec4 color_a = texture2D(u_image_a, v_texCoord);\
	                vec4 color_b = texture2D(u_image_b, v_texCoord);\
	                if (clamp(rand(v_texCoord, currentTime),  0.01, 1.001) > mix){\
	                    gl_FragColor = color_a;\
	                } else {\
	                    gl_FragColor = color_b;\
	                }\
	            }","properties":{"mix":{"type":"uniform","value":0.0}},"inputs":["u_image_a","u_image_b"]};exports["default"] = staticDissolve;module.exports = exports["default"]; /***/}, /* 22 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var staticEffect={"title":"Static","description":"A static effect to add pseudo random noise to a video","vertexShader":"\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }","fragmentShader":"\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            uniform float currentTime;\
	            uniform float amount;\
	            varying vec2 v_texCoord;\
	            uniform vec3 weight;\
	            float rand(vec2 co, float currentTime){\
	               return fract(sin(dot(co.xy,vec2(12.9898,78.233))+currentTime) * 43758.5453);\
	            }\
	            void main(){\
	                vec4 color = texture2D(u_image, v_texCoord);\
	                color[0] = color[0] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[0] * amount;\
	                color[1] = color[1] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[1] * amount;\
	                color[2] = color[2] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[2] *amount;\
	                gl_FragColor = color;\
	            }","properties":{"weight":{"type":"uniform","value":[1.0,1.0,1.0]},"amount":{"type":"uniform","value":1.0}},"inputs":["u_image"]};exports["default"] = staticEffect;module.exports = exports["default"]; /***/}, /* 23 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var dreamfade={"title":"Dream-Fade","description":"A wobbly dream effect. Typically used as a transistion.","vertexShader":"\
	    attribute vec2 a_position;\
	    attribute vec2 a_texCoord;\
	    varying vec2 v_texCoord;\
	    void main() {\
	        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	        v_texCoord = a_texCoord;\
	    }","fragmentShader":"\
	    precision mediump float;\
	    uniform sampler2D u_image_a;\
	    uniform sampler2D u_image_b;\
	    uniform float mix;\
	    varying vec2 v_texCoord;\
	    varying float v_mix;\
	    void main(){\
	        float wobble = 1.0 - abs((mix*2.0)-1.0);\
	        vec2 pos = vec2(v_texCoord[0] + ((sin(v_texCoord[1]*(10.0*wobble*3.14) + wobble*10.0)/13.0)), v_texCoord[1]);\
	        vec4 color_a = texture2D(u_image_a, pos);\
	        vec4 color_b = texture2D(u_image_b, pos);\
	        color_a[0] *= (1.0 - mix);\
	        color_a[1] *= (1.0 - mix);\
	        color_a[2] *= (1.0 - mix);\
	        color_a[3] *= (1.0 - mix);\
	        color_b[0] *= mix;\
	        color_b[1] *= mix;\
	        color_b[2] *= mix;\
	        color_b[3] *= mix;\
	        gl_FragColor = color_a + color_b;\
	    }","properties":{"mix":{"type":"uniform","value":0.0}},"inputs":["u_image_a","u_image_b"]};exports["default"] = dreamfade;module.exports = exports["default"]; /***/}, /* 24 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var opacity={"title":"Opacity","description":"Sets the opacity of an input.","vertexShader":"\n    attribute vec2 a_position;\n    attribute vec2 a_texCoord;\n    varying vec2 v_texCoord;\n    void main() {\n        gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n        v_texCoord = a_texCoord;\n    }","fragmentShader":"\n    precision mediump float;\n    uniform sampler2D u_image;\n    uniform float opacity;\n    varying vec2 v_texCoord;\n    varying float v_opacity;\n    void main(){\n        vec4 color = texture2D(u_image, v_texCoord);\n        color[3] *= opacity;\n        gl_FragColor = color;\n    }","properties":{"opacity":{"type":"uniform","value":0.7}},"inputs":["u_image"]};exports["default"] = opacity;module.exports = exports["default"]; /***/}, /* 25 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var crop={"title":"Primer Simple Crop","description":"A simple crop processors for primer","vertexShader":"\
	        attribute vec2 a_position;\
	        attribute vec2 a_texCoord;\
	        varying vec2 v_texCoord;\
	        void main() {\
	            gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	            v_texCoord = a_texCoord;\
	        }","fragmentShader":"\
	        precision mediump float;\
	        uniform sampler2D u_image;\
	        uniform float x;\
	        uniform float y;\
	        uniform float width;\
	        uniform float height;\
	        varying vec2 v_texCoord;\
	        varying float v_progress;\
	        void main(){\
	            vec2 pos = (((v_texCoord)*vec2(width, height)) + vec2(0, 1.0-height)) +vec2(x,-y);\
	            vec4 color = texture2D(u_image, pos);\
	            if (pos[0] < 0.0 || pos[0] > 1.0 || pos[1] < 0.0 || pos[1] > 1.0){\
	                color = vec4(0.0,0.0,0.0,0.0);\
	            }\
	            gl_FragColor = color;\
	        }","properties":{"x":{type:"uniform",value:0.0},"y":{type:"uniform",value:0.0},"width":{type:"uniform",value:1.0},"height":{type:"uniform",value:1.0}},"inputs":["u_image"]};exports["default"] = crop;module.exports = exports["default"]; /***/}, /* 26 */function(module,exports){ //Matthew Shotton, R&D User Experience,© BBC 2015
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var GraphNode=(function(){ /**
	    * Base class from which all processing and source nodes are derrived.
	    */function GraphNode(gl,renderGraph,inputNames){var limitConnections=arguments.length <= 3 || arguments[3] === undefined?false:arguments[3];_classCallCheck(this,GraphNode);this._renderGraph = renderGraph;this._limitConnections = limitConnections;this._inputNames = inputNames;this._destroyed = false; //Setup WebGL output texture
this._gl = gl;this._renderGraph = renderGraph;this._rendered = false;this._displayName = "GraphNode";} /**
	    * Get a string representation of the class name.
	    *
	    * @return String A string of the class name.
	    */_createClass(GraphNode,[{key:"connect", /**
	        * Connect this node to the targetNode
	        * 
	        * @param {GraphNode} targetNode - the node to connect.
	        * @param {(number| String)} [targetPort] - the port on the targetNode to connect to, this can be an index, a string identifier, or undefined (in which case the next available port will be connected to).
	        * 
	        */value:function connect(targetNode,targetPort){return this._renderGraph.registerConnection(this,targetNode,targetPort);} /**
	        * Disconnect this node from the targetNode. If targetNode is undefind remove all out-bound connections.
	        *
	        * @param {GraphNode} [targetNode] - the node to disconnect from. If undefined, disconnect from all nodes.
	        *
	        */},{key:"disconnect",value:function disconnect(targetNode){var _this=this;if(targetNode === undefined){var toRemove=this._renderGraph.getOutputsForNode(this);toRemove.forEach(function(target){return _this._renderGraph.unregisterConnection(_this,target);});if(toRemove.length > 0)return true;return false;}return this._renderGraph.unregisterConnection(this,targetNode);} /**
	        * Destory this node, removing it from the graph.
	        */},{key:"destroy",value:function destroy(){this.disconnect();var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=this.inputs[Symbol.iterator](),_step;!(_iteratorNormalCompletion = (_step = _iterator.next()).done);_iteratorNormalCompletion = true) {var input=_step.value;input.disconnect(this);}}catch(err) {_didIteratorError = true;_iteratorError = err;}finally {try{if(!_iteratorNormalCompletion && _iterator["return"]){_iterator["return"]();}}finally {if(_didIteratorError){throw _iteratorError;}}}this._destroyed = true;}},{key:"displayName",get:function get(){return this._displayName;} /**
	        * Get the names of the inputs to this node.
	        *
	        * @return {String[]} An array of the names of the inputs ot the node.
	        */},{key:"inputNames",get:function get(){return this._inputNames.slice();} /**
	        * The maximum number of connections that can be made to this node. If there is not limit this will return Infinity.
	        *
	        * @return {number} The number of connections which can be made to this node.
	        */},{key:"maximumConnections",get:function get(){if(this._limitConnections === false)return Infinity;return this._inputNames.length;} /**
	        * Get an array of all the nodes which connect to this node.
	        *
	        * @return {GraphNode[]} An array of nodes which connect to this node.
	        */},{key:"inputs",get:function get(){var result=this._renderGraph.getInputsForNode(this);result = result.filter(function(n){return n !== undefined;});return result;} /**
	        * Get an array of all the nodes which this node outputs to.
	        *
	        * @return {GraphNode[]} An array of nodes which this node connects to.
	        */},{key:"outputs",get:function get(){return this._renderGraph.getOutputsForNode(this);} /**
	        * Get whether the node has been destroyed or not.
	        *
	        * @return {boolean} A true/false value of whather the node has been destoryed or not.
	        */},{key:"destroyed",get:function get(){return this._destroyed;}}]);return GraphNode;})();exports["default"] = GraphNode;module.exports = exports["default"]; /***/}, /* 27 */function(module,exports,__webpack_require__){ //Matthew Shotton, R&D User Experience,© BBC 2015
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _get=function get(_x3,_x4,_x5){var _again=true;_function: while(_again) {var object=_x3,property=_x4,receiver=_x5;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x3 = parent;_x4 = property;_x5 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if("value" in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass !== "function" && superClass !== null){throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var _sourcenode=__webpack_require__(2);var _sourcenode2=_interopRequireDefault(_sourcenode);var ImageNode=(function(_SourceNode){_inherits(ImageNode,_SourceNode); /**
	    * Initialise an instance of an ImageNode.
	    * This should not be called directly, but created through a call to videoContext.createImageNode();
	    */function ImageNode(src,gl,renderGraph,currentTime){var preloadTime=arguments.length <= 4 || arguments[4] === undefined?4:arguments[4];var attributes=arguments.length <= 5 || arguments[5] === undefined?{}:arguments[5];_classCallCheck(this,ImageNode);_get(Object.getPrototypeOf(ImageNode.prototype),"constructor",this).call(this,src,gl,renderGraph,currentTime);this._preloadTime = preloadTime;this._attributes = attributes;this._textureUploaded = false;this._displayName = "ImageNode";}_createClass(ImageNode,[{key:"_load",value:function _load(){var _this=this;if(this._element !== undefined){for(var key in this._attributes) {this._element[key] = this._attributes[key];}return;}if(this._isResponsibleForElementLifeCycle){_get(Object.getPrototypeOf(ImageNode.prototype),"_load",this).call(this);this._element = new Image();this._element.setAttribute("crossorigin","anonymous");this._element.src = this._elementURL;this._element.onload = function(){_this._ready = true;_this._triggerCallbacks("loaded");};this._element.onerror = function(){console.error("ImageNode failed to load. url:",_this._elementURL);};for(var _key in this._attributes) {this._element[_key] = this._attributes[_key];}}this._element.onerror = function(){console.debug("Error with element",_this._element);_this._state = _sourcenode.SOURCENODESTATE.error; //Event though there's an error ready should be set to true so the node can output transparenn
_this._ready = true;_this._triggerCallbacks("error");};}},{key:"_unload",value:function _unload(){_get(Object.getPrototypeOf(ImageNode.prototype),"_unload",this).call(this);if(this._isResponsibleForElementLifeCycle){this._element.src = "";this._element.onerror = undefined;this._element = undefined;delete this._element;}this._ready = false;}},{key:"_seek",value:function _seek(time){_get(Object.getPrototypeOf(ImageNode.prototype),"_seek",this).call(this,time);if(this.state === _sourcenode.SOURCENODESTATE.playing || this.state === _sourcenode.SOURCENODESTATE.paused){if(this._element === undefined)this._load();}if((this._state === _sourcenode.SOURCENODESTATE.sequenced || this._state === _sourcenode.SOURCENODESTATE.ended) && this._element !== undefined){this._unload();}}},{key:"_update",value:function _update(currentTime){ //if (!super._update(currentTime)) return false;
if(this._textureUploaded){_get(Object.getPrototypeOf(ImageNode.prototype),"_update",this).call(this,currentTime,false);}else {_get(Object.getPrototypeOf(ImageNode.prototype),"_update",this).call(this,currentTime);}if(this._startTime - this._currentTime <= this._preloadTime && this._state !== _sourcenode.SOURCENODESTATE.waiting && this._state !== _sourcenode.SOURCENODESTATE.ended)this._load();if(this._state === _sourcenode.SOURCENODESTATE.playing){return true;}else if(this._state === _sourcenode.SOURCENODESTATE.paused){return true;}else if(this._state === _sourcenode.SOURCENODESTATE.ended && this._element !== undefined){this._unload();return false;}}},{key:"elementURL",get:function get(){return this._elementURL;}}]);return ImageNode;})(_sourcenode2["default"]);exports["default"] = ImageNode;module.exports = exports["default"]; /***/}, /* 28 */function(module,exports,__webpack_require__){ //Matthew Shotton, R&D User Experience,© BBC 2015
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _get=function get(_x2,_x3,_x4){var _again=true;_function: while(_again) {var object=_x2,property=_x3,receiver=_x4;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x2 = parent;_x3 = property;_x4 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if("value" in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass !== "function" && superClass !== null){throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var _sourcenode=__webpack_require__(2);var _sourcenode2=_interopRequireDefault(_sourcenode);var CanvasNode=(function(_SourceNode){_inherits(CanvasNode,_SourceNode); /**
	    * Initialise an instance of a CanvasNode.
	    * This should not be called directly, but created through a call to videoContext.createCanvasNode();
	    */function CanvasNode(canvas,gl,renderGraph,currentTime){var preloadTime=arguments.length <= 4 || arguments[4] === undefined?4:arguments[4];_classCallCheck(this,CanvasNode);_get(Object.getPrototypeOf(CanvasNode.prototype),"constructor",this).call(this,canvas,gl,renderGraph,currentTime);this._preloadTime = preloadTime;this._displayName = "CanvasNode";}_createClass(CanvasNode,[{key:"_load",value:function _load(){_get(Object.getPrototypeOf(CanvasNode.prototype),"_load",this).call(this);this._ready = true;this._triggerCallbacks("loaded");}},{key:"_unload",value:function _unload(){_get(Object.getPrototypeOf(CanvasNode.prototype),"_unload",this).call(this);this._ready = false;}},{key:"_seek",value:function _seek(time){_get(Object.getPrototypeOf(CanvasNode.prototype),"_seek",this).call(this,time);if(this.state === _sourcenode.SOURCENODESTATE.playing || this.state === _sourcenode.SOURCENODESTATE.paused){if(this._element === undefined)this._load();this._ready = false;}if((this._state === _sourcenode.SOURCENODESTATE.sequenced || this._state === _sourcenode.SOURCENODESTATE.ended) && this._element !== undefined){this._unload();}}},{key:"_update",value:function _update(currentTime){ //if (!super._update(currentTime)) return false;
_get(Object.getPrototypeOf(CanvasNode.prototype),"_update",this).call(this,currentTime);if(this._startTime - this._currentTime <= this._preloadTime && this._state !== _sourcenode.SOURCENODESTATE.waiting && this._state !== _sourcenode.SOURCENODESTATE.ended)this._load();if(this._state === _sourcenode.SOURCENODESTATE.playing){return true;}else if(this._state === _sourcenode.SOURCENODESTATE.paused){return true;}else if(this._state === _sourcenode.SOURCENODESTATE.ended && this._element !== undefined){this._unload();return false;}}}]);return CanvasNode;})(_sourcenode2["default"]);exports["default"] = CanvasNode;module.exports = exports["default"]; /***/}, /* 29 */function(module,exports,__webpack_require__){ //Matthew Shotton, R&D User Experience,© BBC 2015
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _get=function get(_x,_x2,_x3){var _again=true;_function: while(_again) {var object=_x,property=_x2,receiver=_x3;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if("value" in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass !== "function" && superClass !== null){throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var _processingnode=__webpack_require__(30);var _processingnode2=_interopRequireDefault(_processingnode);var _utilsJs=__webpack_require__(3);var CompositingNode=(function(_ProcessingNode){_inherits(CompositingNode,_ProcessingNode); /**
	    * Initialise an instance of a Compositing Node. You should not instantiate this directly, but use VideoContest.createCompositingNode().
	    */function CompositingNode(gl,renderGraph,definition){_classCallCheck(this,CompositingNode);var placeholderTexture=(0,_utilsJs.createElementTexutre)(gl);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([0,0,0,0]));_get(Object.getPrototypeOf(CompositingNode.prototype),"constructor",this).call(this,gl,renderGraph,definition,definition.inputs,false);this._placeholderTexture = placeholderTexture;this._displayName = "CompositingNode";}_createClass(CompositingNode,[{key:"_render",value:function _render(){var _this=this;var gl=this._gl;gl.bindFramebuffer(gl.FRAMEBUFFER,this._framebuffer);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this._texture,0);gl.clearColor(0,0,0,0); // green;
gl.clear(gl.COLOR_BUFFER_BIT);gl.blendFuncSeparate(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA,gl.ONE,gl.ONE_MINUS_SRC_ALPHA);this.inputs.forEach(function(node){if(node === undefined)return;_get(Object.getPrototypeOf(CompositingNode.prototype),"_render",_this).call(_this); //map the input textures input the node
var texture=node._texture;var textureOffset=0;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=_this._inputTextureUnitMapping[Symbol.iterator](),_step;!(_iteratorNormalCompletion = (_step = _iterator.next()).done);_iteratorNormalCompletion = true) {var mapping=_step.value;gl.activeTexture(mapping.textureUnit);var textureLocation=gl.getUniformLocation(_this._program,mapping.name);gl.uniform1i(textureLocation,_this._parameterTextureCount + textureOffset);textureOffset += 1;gl.bindTexture(gl.TEXTURE_2D,texture);}}catch(err) {_didIteratorError = true;_iteratorError = err;}finally {try{if(!_iteratorNormalCompletion && _iterator["return"]){_iterator["return"]();}}finally {if(_didIteratorError){throw _iteratorError;}}}gl.drawArrays(gl.TRIANGLES,0,6);});gl.bindFramebuffer(gl.FRAMEBUFFER,null);}}]);return CompositingNode;})(_processingnode2["default"]);exports["default"] = CompositingNode;module.exports = exports["default"]; /***/}, /* 30 */function(module,exports,__webpack_require__){ //Matthew Shotton, R&D User Experience,© BBC 2015
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _get=function get(_x,_x2,_x3){var _again=true;_function: while(_again) {var object=_x,property=_x2,receiver=_x3;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if("value" in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass !== "function" && superClass !== null){throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var _graphnode=__webpack_require__(26);var _graphnode2=_interopRequireDefault(_graphnode);var _utilsJs=__webpack_require__(3);var _exceptionsJs=__webpack_require__(31);var ProcessingNode=(function(_GraphNode){_inherits(ProcessingNode,_GraphNode); /**
	    * Initialise an instance of a ProcessingNode.
	    *
	    * This class is not used directly, but is extended to create CompositingNodes, TransitionNodes, and EffectNodes.
	    */function ProcessingNode(gl,renderGraph,definition,inputNames,limitConnections){var _this=this;_classCallCheck(this,ProcessingNode);_get(Object.getPrototypeOf(ProcessingNode.prototype),"constructor",this).call(this,gl,renderGraph,inputNames,limitConnections);this._vertexShader = (0,_utilsJs.compileShader)(gl,definition.vertexShader,gl.VERTEX_SHADER);this._fragmentShader = (0,_utilsJs.compileShader)(gl,definition.fragmentShader,gl.FRAGMENT_SHADER);this._definition = definition;this._properties = {}; //definition.properties;
//copy definition properties
for(var propertyName in definition.properties) {var propertyValue=definition.properties[propertyName].value; //if an array then shallow copy it
if(Object.prototype.toString.call(propertyValue) === "[object Array]"){propertyValue = definition.properties[propertyName].value.slice();}var propertyType=definition.properties[propertyName].type;this._properties[propertyName] = {type:propertyType,value:propertyValue};}this._inputTextureUnitMapping = [];this._maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);this._boundTextureUnits = 0;this._parameterTextureCount = 0;this._inputTextureCount = 0;this._texture = (0,_utilsJs.createElementTexutre)(gl);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.canvas.width,gl.canvas.height,0,gl.RGBA,gl.UNSIGNED_BYTE,null); //compile the shader
this._program = (0,_utilsJs.createShaderProgram)(gl,this._vertexShader,this._fragmentShader); //create and setup the framebuffer
this._framebuffer = gl.createFramebuffer();gl.bindFramebuffer(gl.FRAMEBUFFER,this._framebuffer);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this._texture,0);gl.bindFramebuffer(gl.FRAMEBUFFER,null); //create properties on this object for the passed properties
var _loop=function _loop(propertyName){Object.defineProperty(_this,propertyName,{get:function get(){return this._properties[propertyName].value;},set:function set(passedValue){this._properties[propertyName].value = passedValue;}});};for(var propertyName in this._properties) {_loop(propertyName);} //create texutres for any texture properties
for(var propertyName in this._properties) {var propertyValue=this._properties[propertyName].value;if(propertyValue instanceof Image){this._properties[propertyName].texture = (0,_utilsJs.createElementTexutre)(gl);this._properties[propertyName].texutreUnit = gl.TEXTURE0 + this._boundTextureUnits;this._boundTextureUnits += 1;this._parameterTextureCount += 1;if(this._boundTextureUnits > this._maxTextureUnits){throw new _exceptionsJs.RenderException("Trying to bind more than available textures units to shader");}}} //calculate texutre units for input textures
var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=definition.inputs[Symbol.iterator](),_step;!(_iteratorNormalCompletion = (_step = _iterator.next()).done);_iteratorNormalCompletion = true) {var inputName=_step.value;this._inputTextureUnitMapping.push({name:inputName,textureUnit:gl.TEXTURE0 + this._boundTextureUnits});this._boundTextureUnits += 1;this._inputTextureCount += 1;if(this._boundTextureUnits > this._maxTextureUnits){throw new _exceptionsJs.RenderException("Trying to bind more than available textures units to shader");}} //find the locations of the properties in the compiled shader
}catch(err) {_didIteratorError = true;_iteratorError = err;}finally {try{if(!_iteratorNormalCompletion && _iterator["return"]){_iterator["return"]();}}finally {if(_didIteratorError){throw _iteratorError;}}}for(var propertyName in this._properties) {if(this._properties[propertyName].type === "uniform"){this._properties[propertyName].location = this._gl.getUniformLocation(this._program,propertyName);}}this._currentTimeLocation = this._gl.getUniformLocation(this._program,"currentTime");this._currentTime = 0; //Other setup
var positionLocation=gl.getAttribLocation(this._program,"a_position");var buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.enableVertexAttribArray(positionLocation);gl.vertexAttribPointer(positionLocation,2,gl.FLOAT,false,0,0);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([1.0,1.0,0.0,1.0,1.0,0.0,1.0,0.0,0.0,1.0,0.0,0.0]),gl.STATIC_DRAW);var texCoordLocation=gl.getAttribLocation(this._program,"a_texCoord");gl.enableVertexAttribArray(texCoordLocation);gl.vertexAttribPointer(texCoordLocation,2,gl.FLOAT,false,0,0);this._displayName = "ProcessingNode";} /**
	    * Sets the passed processing node property to the passed value.
	    * @param {string} name - The name of the processing node parameter to modify.
	    * @param {Object} value - The value to set it to.
	    *
	    * @example 
	    * var ctx = new VideoContext();
	    * var monoNode = ctx.effect(VideoContext.DEFINITIONS.MONOCHROME);
	    * monoNode.setProperty("inputMix", [1.0,0.0,0.0]); //Just use red channel
	    */_createClass(ProcessingNode,[{key:"setProperty",value:function setProperty(name,value){this._properties[name].value = value;} /**
	        * Sets the passed processing node property to the passed value.
	        * @param {string} name - The name of the processing node parameter to get.
	        *
	        * @example 
	        * var ctx = new VideoContext();
	        * var monoNode = ctx.effect(VideoContext.DEFINITIONS.MONOCHROME);
	        * console.log(monoNode.getProperty("inputMix")); //Will output [0.4,0.6,0.2], the default value from the effect definition.
	        * 
	        */},{key:"getProperty",value:function getProperty(name){return this._properties[name].value;} /**
	        * Destroy and clean-up the node.
	        */},{key:"destroy",value:function destroy(){_get(Object.getPrototypeOf(ProcessingNode.prototype),"destroy",this).call(this); //destrpy texutres for any texture properties
for(var propertyName in this._properties) {var propertyValue=this._properties[propertyName].value;if(propertyValue instanceof Image){this._gl.deleteTexture(this._properties[propertyName].texture);this._texture = undefined;}} //Destroy main
this._gl.deleteTexture(this._texture);this._texture = undefined; //Detach shaders
this._gl.detachShader(this._program,this._vertexShader);this._gl.detachShader(this._program,this._fragmentShader); //Delete shaders
this._gl.deleteShader(this._vertexShader);this._gl.deleteShader(this._fragmentShader); //Delete program
this._gl.deleteProgram(this._program); //Delete Framebuffer
this._gl.deleteFramebuffer(this._framebuffer);}},{key:"_update",value:function _update(currentTime){this._currentTime = currentTime;}},{key:"_seek",value:function _seek(currentTime){this._currentTime = currentTime;}},{key:"_render",value:function _render(){this._rendered = true;var gl=this._gl;gl.viewport(0,0,gl.canvas.width,gl.canvas.height);gl.useProgram(this._program); //upload the default uniforms
gl.uniform1f(this._currentTimeLocation,parseFloat(this._currentTime)); //upload/update the custom uniforms
var textureOffset=0;for(var propertyName in this._properties) {var propertyValue=this._properties[propertyName].value;var propertyType=this._properties[propertyName].type;var propertyLocation=this._properties[propertyName].location;if(propertyType !== "uniform")continue;if(typeof propertyValue === "number"){gl.uniform1f(propertyLocation,propertyValue);}else if(Object.prototype.toString.call(propertyValue) === "[object Array]"){if(propertyValue.length === 1){gl.uniform1fv(propertyLocation,propertyValue);}else if(propertyValue.length === 2){gl.uniform2fv(propertyLocation,propertyValue);}else if(propertyValue.length === 3){gl.uniform3fv(propertyLocation,propertyValue);}else if(propertyValue.length === 4){gl.uniform4fv(propertyLocation,propertyValue);}else {console.debug("Shader parameter",propertyName,"is too long an array:",propertyValue);}}else if(propertyValue instanceof Image){var texture=this._properties[propertyName].texture;var textureUnit=this._properties[propertyName].texutreUnit;(0,_utilsJs.updateTexture)(gl,texture,propertyValue);gl.activeTexture(textureUnit);gl.uniform1i(propertyLocation,textureOffset);textureOffset += 1;gl.bindTexture(gl.TEXTURE_2D,texture);}else { //TODO - add tests for textures
/*gl.activeTexture(gl.TEXTURE0 + textureOffset);
	                    gl.uniform1i(parameterLoctation, textureOffset);
	                    gl.bindTexture(gl.TEXTURE_2D, textures[textureOffset-1]);*/}}}}]);return ProcessingNode;})(_graphnode2["default"]);exports["default"] = ProcessingNode;module.exports = exports["default"]; /***/}, /* 31 */function(module,exports){ //Matthew Shotton, R&D User Experience,© BBC 2015
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.ConnectException = ConnectException;exports.RenderException = RenderException;function ConnectException(message){this.message = message;this.name = "ConnectionException";}function RenderException(message){this.message = message;this.name = "RenderException";} /***/}, /* 32 */function(module,exports,__webpack_require__){ //Matthew Shotton, R&D User Experience,© BBC 2015
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _get=function get(_x,_x2,_x3){var _again=true;_function: while(_again) {var object=_x,property=_x2,receiver=_x3;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if("value" in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass !== "function" && superClass !== null){throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var _ProcessingNodesProcessingnode=__webpack_require__(30);var _ProcessingNodesProcessingnode2=_interopRequireDefault(_ProcessingNodesProcessingnode);var DestinationNode=(function(_ProcessingNode){_inherits(DestinationNode,_ProcessingNode); /**
	    * Initialise an instance of a DestinationNode. 
	    *
	    * There should only be a single instance of a DestinationNode per VideoContext instance. An VideoContext's destination can be accessed like so: videoContext.desitnation.
	    * 
	    * You should not instantiate this directly.
	    */function DestinationNode(gl,renderGraph){_classCallCheck(this,DestinationNode);var vertexShader="\
	            attribute vec2 a_position;\
	            attribute vec2 a_texCoord;\
	            varying vec2 v_texCoord;\
	            void main() {\
	                gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
	                v_texCoord = a_texCoord;\
	            }";var fragmentShader="\
	            precision mediump float;\
	            uniform sampler2D u_image;\
	            varying vec2 v_texCoord;\
	            varying float v_progress;\
	            void main(){\
	                gl_FragColor = texture2D(u_image, v_texCoord);\
	            }";var deffinition={fragmentShader:fragmentShader,vertexShader:vertexShader,properties:{},inputs:["u_image"]};_get(Object.getPrototypeOf(DestinationNode.prototype),"constructor",this).call(this,gl,renderGraph,deffinition,deffinition.inputs,false);this._displayName = "DestinationNode";}_createClass(DestinationNode,[{key:"_render",value:function _render(){var _this=this;var gl=this._gl;gl.bindFramebuffer(gl.FRAMEBUFFER,null);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);gl.enable(gl.BLEND);gl.clearColor(0,0,0,0.0); // green;
gl.clear(gl.COLOR_BUFFER_BIT);this.inputs.forEach(function(node){_get(Object.getPrototypeOf(DestinationNode.prototype),"_render",_this).call(_this); //map the input textures input the node
var texture=node._texture;var textureOffset=0;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=_this._inputTextureUnitMapping[Symbol.iterator](),_step;!(_iteratorNormalCompletion = (_step = _iterator.next()).done);_iteratorNormalCompletion = true) {var mapping=_step.value;gl.activeTexture(mapping.textureUnit);var textureLocation=gl.getUniformLocation(_this._program,mapping.name);gl.uniform1i(textureLocation,_this._parameterTextureCount + textureOffset);textureOffset += 1;gl.bindTexture(gl.TEXTURE_2D,texture);}}catch(err) {_didIteratorError = true;_iteratorError = err;}finally {try{if(!_iteratorNormalCompletion && _iterator["return"]){_iterator["return"]();}}finally {if(_didIteratorError){throw _iteratorError;}}}gl.drawArrays(gl.TRIANGLES,0,6);});}}]);return DestinationNode;})(_ProcessingNodesProcessingnode2["default"]);exports["default"] = DestinationNode;module.exports = exports["default"]; /***/}, /* 33 */function(module,exports,__webpack_require__){ //Matthew Shotton, R&D User Experience,© BBC 2015
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _get=function get(_x,_x2,_x3){var _again=true;_function: while(_again) {var object=_x,property=_x2,receiver=_x3;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if("value" in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass !== "function" && superClass !== null){throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var _processingnode=__webpack_require__(30);var _processingnode2=_interopRequireDefault(_processingnode);var _utilsJs=__webpack_require__(3);var EffectNode=(function(_ProcessingNode){_inherits(EffectNode,_ProcessingNode); /**
	    * Initialise an instance of an EffectNode. You should not instantiate this directly, but use VideoContest.createEffectNode().
	    */function EffectNode(gl,renderGraph,definition){_classCallCheck(this,EffectNode);var placeholderTexture=(0,_utilsJs.createElementTexutre)(gl);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([0,0,0,0]));_get(Object.getPrototypeOf(EffectNode.prototype),"constructor",this).call(this,gl,renderGraph,definition,definition.inputs,true);this._placeholderTexture = placeholderTexture;this._displayName = "EffectNode";}_createClass(EffectNode,[{key:"_render",value:function _render(){var gl=this._gl;gl.bindFramebuffer(gl.FRAMEBUFFER,this._framebuffer);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this._texture,0);gl.clearColor(0,0,0,0); // green;
gl.clear(gl.COLOR_BUFFER_BIT);_get(Object.getPrototypeOf(EffectNode.prototype),"_render",this).call(this);var inputs=this._renderGraph.getInputsForNode(this);var textureOffset=0;for(var i=0;i < this._inputTextureUnitMapping.length;i++) {var inputTexture=this._placeholderTexture;var textureUnit=this._inputTextureUnitMapping[i].textureUnit;var textureName=this._inputTextureUnitMapping[i].name;if(i < inputs.length && inputs[i] !== undefined){inputTexture = inputs[i]._texture;}gl.activeTexture(textureUnit);var textureLocation=gl.getUniformLocation(this._program,textureName);gl.uniform1i(textureLocation,this._parameterTextureCount + textureOffset);textureOffset += 1;gl.bindTexture(gl.TEXTURE_2D,inputTexture);}gl.drawArrays(gl.TRIANGLES,0,6);gl.bindFramebuffer(gl.FRAMEBUFFER,null);}}]);return EffectNode;})(_processingnode2["default"]);exports["default"] = EffectNode;module.exports = exports["default"]; /***/}, /* 34 */function(module,exports,__webpack_require__){ //Matthew Shotton, R&D User Experience,© BBC 2015
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _get=function get(_x3,_x4,_x5){var _again=true;_function: while(_again) {var object=_x3,property=_x4,receiver=_x5;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x3 = parent;_x4 = property;_x5 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if("value" in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass !== "function" && superClass !== null){throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var _effectnode=__webpack_require__(33);var _effectnode2=_interopRequireDefault(_effectnode);var TransitionNode=(function(_EffectNode){_inherits(TransitionNode,_EffectNode); /**
	    * Initialise an instance of a TransitionNode. You should not instantiate this directly, but use VideoContest.createTransitonNode().
	    */function TransitionNode(gl,renderGraph,definition){_classCallCheck(this,TransitionNode);_get(Object.getPrototypeOf(TransitionNode.prototype),"constructor",this).call(this,gl,renderGraph,definition);this._transitions = {}; //save a version of the original property values
this._initialPropertyValues = {};for(var propertyName in this._properties) {this._initialPropertyValues[propertyName] = this._properties[propertyName].value;}this._displayName = "TransitionNode";}_createClass(TransitionNode,[{key:"_doesTransitionFitOnTimeline",value:function _doesTransitionFitOnTimeline(testTransition){if(this._transitions[testTransition.property] === undefined)return true;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=this._transitions[testTransition.property][Symbol.iterator](),_step;!(_iteratorNormalCompletion = (_step = _iterator.next()).done);_iteratorNormalCompletion = true) {var transition=_step.value;if(testTransition.start > transition.start && testTransition.start < transition.end)return false;if(testTransition.end > transition.start && testTransition.end < transition.end)return false;if(transition.start > testTransition.start && transition.start < testTransition.end)return false;if(transition.end > testTransition.start && transition.end < testTransition.end)return false;}}catch(err) {_didIteratorError = true;_iteratorError = err;}finally {try{if(!_iteratorNormalCompletion && _iterator["return"]){_iterator["return"]();}}finally {if(_didIteratorError){throw _iteratorError;}}}return true;}},{key:"_insertTransitionInTimeline",value:function _insertTransitionInTimeline(transition){if(this._transitions[transition.property] === undefined)this._transitions[transition.property] = [];this._transitions[transition.property].push(transition);this._transitions[transition.property].sort(function(a,b){return a.start - b.start;});} /**
	        * Create a transition on the timeline.
	        * 
	        * @param {number} startTime - The time at which the transition should start (relative to currentTime of video context).
	        * @param {number} endTime - The time at which the transition should be completed by (relative to currentTime of video context).
	        * @param {number} currentValue - The value to start the transition at.
	        * @param {number} targetValue - The value to transition to by endTime.
	        * @param {String} propertyName - The name of the property to clear transitions on, if undefined default to "mix".
	        * 
	        * @return {Boolean} returns True if a transition is successfully added, false otherwise.
	        */},{key:"transition",value:function transition(startTime,endTime,currentValue,targetValue){var propertyName=arguments.length <= 4 || arguments[4] === undefined?"mix":arguments[4];var transition={start:startTime + this._currentTime,end:endTime + this._currentTime,current:currentValue,target:targetValue,property:propertyName};if(!this._doesTransitionFitOnTimeline(transition))return false;this._insertTransitionInTimeline(transition);return true;} /**
	        * Create a transition on the timeline at an absolute time.
	        * 
	        * @param {number} startTime - The time at which the transition should start (relative to time 0).
	        * @param {number} endTime - The time at which the transition should be completed by (relative to time 0).
	        * @param {number} currentValue - The value to start the transition at.
	        * @param {number} targetValue - The value to transition to by endTime.
	        * @param {String} propertyName - The name of the property to clear transitions on, if undefined default to "mix".
	        * 
	        * @return {Boolean} returns True if a transition is successfully added, false otherwise.
	        */},{key:"transitionAt",value:function transitionAt(startTime,endTime,currentValue,targetValue){var propertyName=arguments.length <= 4 || arguments[4] === undefined?"mix":arguments[4];var transition={start:startTime,end:endTime,current:currentValue,target:targetValue,property:propertyName};if(!this._doesTransitionFitOnTimeline(transition))return false;this._insertTransitionInTimeline(transition);return true;} /**
	        * Clear all transistions on the passed property. If no property is defined clear all transitions on the node.
	        * 
	        * @param {String} propertyName - The name of the property to clear transitions on, if undefined clear all transitions on the node.
	        */},{key:"clearTransitions",value:function clearTransitions(propertyName){if(propertyName === undefined){this._transitions = {};}else {this._transitions[propertyName] = [];}} /**
	        * Clear a transistion on the passed property that the specified time lies within.
	        * 
	        * @param {String} propertyName - The name of the property to clear a transition on.
	        * @param {number} time - A time which lies within the property you're trying to clear.
	        *
	        * @return {Boolean} returns True if a transition is removed, false otherwise.
	        */},{key:"clearTransition",value:function clearTransition(propertyName,time){var transitionIndex=undefined;for(var i=0;i < this._transitions[propertyName].length;i++) {var transition=this._transitions[propertyName][i];if(time > transition.start && time < transition.end){transitionIndex = i;}}if(transitionIndex !== undefined){this._transitions[propertyName].splice(transitionIndex,1);return true;}return false;}},{key:"_update",value:function _update(currentTime){_get(Object.getPrototypeOf(TransitionNode.prototype),"_update",this).call(this,currentTime);for(var propertyName in this._transitions) {var value=this[propertyName];if(this._transitions[propertyName].length > 0){value = this._transitions[propertyName][0].current;}var transitionActive=false;for(var i=0;i < this._transitions[propertyName].length;i++) {var transition=this._transitions[propertyName][i];if(currentTime > transition.end){value = transition.target;continue;}if(currentTime > transition.start && currentTime < transition.end){var difference=transition.target - transition.current;var progress=(this._currentTime - transition.start) / (transition.end - transition.start);transitionActive = true;this[propertyName] = transition.current + difference * progress;break;}}if(!transitionActive)this[propertyName] = value;}}}]);return TransitionNode;})(_effectnode2["default"]);exports["default"] = TransitionNode;module.exports = exports["default"]; /***/}, /* 35 */function(module,exports,__webpack_require__){ //Matthew Shotton, R&D User Experience,© BBC 2015
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var _exceptionsJs=__webpack_require__(31);var RenderGraph=(function(){ /**
	    * Manages the rendering graph.
	    */function RenderGraph(){_classCallCheck(this,RenderGraph);this.connections = [];} /**
	    * Get a list of nodes which are connected to the output of the passed node.
	    * 
	    * @param {GraphNode} node - the node to get the outputs for.
	    * @return {GraphNode[]} An array of the nodes which are connected to the output.
	    */_createClass(RenderGraph,[{key:"getOutputsForNode",value:function getOutputsForNode(node){var results=[];this.connections.forEach(function(connection){if(connection.source === node){results.push(connection.destination);}});return results;} /**
	        * Get a list of nodes which are connected, by input name, to the given node. Array contains objects of the form: {"source":sourceNode, "type":"name", "name":inputName, "destination":destinationNode}.
	        *
	        * @param {GraphNode} node - the node to get the named inputs for.
	        * @return {Object[]} An array of objects representing the nodes and connection type, which are connected to the named inputs for the node.
	        */},{key:"getNamedInputsForNode",value:function getNamedInputsForNode(node){var results=[];this.connections.forEach(function(connection){if(connection.destination === node && connection.type === "name"){results.push(connection);}});return results;} /**
	        * Get a list of nodes which are connected, by z-index name, to the given node. Array contains objects of the form: {"source":sourceNode, "type":"zIndex", "zIndex":0, "destination":destinationNode}.
	        * 
	        * @param {GraphNode} node - the node to get the z-index refernced inputs for.
	        * @return {Object[]} An array of objects representing the nodes and connection type, which are connected by z-Index for the node.
	        */},{key:"getZIndexInputsForNode",value:function getZIndexInputsForNode(node){var results=[];this.connections.forEach(function(connection){if(connection.destination === node && connection.type === "zIndex"){results.push(connection);}});results.sort(function(a,b){return a.zIndex - b.zIndex;});return results;} /**
	        * Get a list of nodes which are connected as inputs to the given node. The length of the return array is always equal to the number of inputs for the node, with undefined taking the place of any inputs not connected.
	        * 
	        * @param {GraphNode} node - the node to get the inputs for.
	        * @return {GraphNode[]} An array of GraphNodes which are connected to the node.
	        */},{key:"getInputsForNode",value:function getInputsForNode(node){var inputNames=node.inputNames;var results=[];var namedInputs=this.getNamedInputsForNode(node);var indexedInputs=this.getZIndexInputsForNode(node);if(node._limitConnections === true){for(var i=0;i < inputNames.length;i++) {results[i] = undefined;}var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=namedInputs[Symbol.iterator](),_step;!(_iteratorNormalCompletion = (_step = _iterator.next()).done);_iteratorNormalCompletion = true) {var connection=_step.value;var index=inputNames.indexOf(connection.name);results[index] = connection.source;}}catch(err) {_didIteratorError = true;_iteratorError = err;}finally {try{if(!_iteratorNormalCompletion && _iterator["return"]){_iterator["return"]();}}finally {if(_didIteratorError){throw _iteratorError;}}}var indexedInputsIndex=0;for(var i=0;i < results.length;i++) {if(results[i] === undefined && indexedInputs[indexedInputsIndex] !== undefined){results[i] = indexedInputs[indexedInputsIndex].source;indexedInputsIndex += 1;}}}else {var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=namedInputs[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);_iteratorNormalCompletion2 = true) {var connection=_step2.value;results.push(connection.source);}}catch(err) {_didIteratorError2 = true;_iteratorError2 = err;}finally {try{if(!_iteratorNormalCompletion2 && _iterator2["return"]){_iterator2["return"]();}}finally {if(_didIteratorError2){throw _iteratorError2;}}}var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=indexedInputs[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);_iteratorNormalCompletion3 = true) {var connection=_step3.value;results.push(connection.source);}}catch(err) {_didIteratorError3 = true;_iteratorError3 = err;}finally {try{if(!_iteratorNormalCompletion3 && _iterator3["return"]){_iterator3["return"]();}}finally {if(_didIteratorError3){throw _iteratorError3;}}}}return results;} /**
	        * Check if a named input on a node is available to connect too.
	        * @param {GraphNode} node - the node to check.
	        * @param {String} inputName - the named input to check.
	        */},{key:"isInputAvailable",value:function isInputAvailable(node,inputName){if(node._inputNames.indexOf(inputName) === -1)return false;var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=this.connections[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done);_iteratorNormalCompletion4 = true) {var connection=_step4.value;if(connection.type === "name"){if(connection.destination === node && connection.name === inputName){return false;}}}}catch(err) {_didIteratorError4 = true;_iteratorError4 = err;}finally {try{if(!_iteratorNormalCompletion4 && _iterator4["return"]){_iterator4["return"]();}}finally {if(_didIteratorError4){throw _iteratorError4;}}}return true;} /**
	        * Register a connection between two nodes.
	        * 
	        * @param {GraphNode} sourceNode - the node to connect from.
	        * @param {GraphNode} destinationNode - the node to connect to.
	        * @param {(String | number)} [target] - the target port of the conenction, this could be a string to specfiy a specific named port, a number to specify a port by index, or undefined, in which case the next available port will be connected to.
	        * @return {boolean} Will return true if connection succeeds otherwise will throw a ConnectException.
	        */},{key:"registerConnection",value:function registerConnection(sourceNode,destinationNode,target){if(destinationNode.inputs.length >= destinationNode.inputNames.length && destinationNode._limitConnections === true){throw new _exceptionsJs.ConnectException("Node has reached max number of inputs, can't connect");}if(destinationNode._limitConnections === false){ //check if connection is already made, if so raise a warning
var inputs=this.getInputsForNode(destinationNode);if(inputs.includes(sourceNode)){console.debug("WARNING - node connected mutliple times, removing previous connection");this.unregisterConnection(sourceNode,destinationNode);}}if(typeof target === "number"){ //target is a specific
this.connections.push({"source":sourceNode,"type":"zIndex","zIndex":target,"destination":destinationNode});}else if(typeof target === "string" && destinationNode._limitConnections){ //target is a named port
//make sure named port is free
if(this.isInputAvailable(destinationNode,target)){this.connections.push({"source":sourceNode,"type":"name","name":target,"destination":destinationNode});}else {throw new _exceptionsJs.ConnectException("Port " + target + " is already connected to");}}else { //target is undefined so just make it a high zIndex
var indexedConns=this.getZIndexInputsForNode(destinationNode);var index=0;if(indexedConns.length > 0)index = indexedConns[indexedConns.length - 1].zIndex + 1;this.connections.push({"source":sourceNode,"type":"zIndex","zIndex":index,"destination":destinationNode});}return true;} /**
	        * Remove a connection between two nodes.
	        * @param {GraphNode} sourceNode - the node to unregsiter connection from.
	        * @param {GraphNode} destinationNode - the node to register connection to.
	        * @return {boolean} Will return true if removing connection succeeds, or false if there was no connectionsction to remove.
	        */},{key:"unregisterConnection",value:function unregisterConnection(sourceNode,destinationNode){var _this=this;var toRemove=[];this.connections.forEach(function(connection){if(connection.source === sourceNode && connection.destination === destinationNode){toRemove.push(connection);}});if(toRemove.length === 0)return false;toRemove.forEach(function(removeNode){var index=_this.connections.indexOf(removeNode);_this.connections.splice(index,1);});return true;}}],[{key:"outputEdgesFor",value:function outputEdgesFor(node,connections){var results=[];var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=connections[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done);_iteratorNormalCompletion5 = true) {var conn=_step5.value;if(conn.source === node){results.push(conn);}}}catch(err) {_didIteratorError5 = true;_iteratorError5 = err;}finally {try{if(!_iteratorNormalCompletion5 && _iterator5["return"]){_iterator5["return"]();}}finally {if(_didIteratorError5){throw _iteratorError5;}}}return results;}},{key:"inputEdgesFor",value:function inputEdgesFor(node,connections){var results=[];var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=connections[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done);_iteratorNormalCompletion6 = true) {var conn=_step6.value;if(conn.destination === node){results.push(conn);}}}catch(err) {_didIteratorError6 = true;_iteratorError6 = err;}finally {try{if(!_iteratorNormalCompletion6 && _iterator6["return"]){_iterator6["return"]();}}finally {if(_didIteratorError6){throw _iteratorError6;}}}return results;}},{key:"getInputlessNodes",value:function getInputlessNodes(connections){var inputLess=[];var _iteratorNormalCompletion7=true;var _didIteratorError7=false;var _iteratorError7=undefined;try{for(var _iterator7=connections[Symbol.iterator](),_step7;!(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done);_iteratorNormalCompletion7 = true) {var conn=_step7.value;inputLess.push(conn.source);}}catch(err) {_didIteratorError7 = true;_iteratorError7 = err;}finally {try{if(!_iteratorNormalCompletion7 && _iterator7["return"]){_iterator7["return"]();}}finally {if(_didIteratorError7){throw _iteratorError7;}}}var _iteratorNormalCompletion8=true;var _didIteratorError8=false;var _iteratorError8=undefined;try{for(var _iterator8=connections[Symbol.iterator](),_step8;!(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done);_iteratorNormalCompletion8 = true) {var conn=_step8.value;var index=inputLess.indexOf(conn.destination);if(index !== -1){inputLess.splice(index,1);}}}catch(err) {_didIteratorError8 = true;_iteratorError8 = err;}finally {try{if(!_iteratorNormalCompletion8 && _iterator8["return"]){_iterator8["return"]();}}finally {if(_didIteratorError8){throw _iteratorError8;}}}return inputLess;}}]);return RenderGraph;})();exports["default"] = RenderGraph;module.exports = exports["default"]; /***/}, /* 36 */function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function stripHash(url){if(url.port === "" || url.port === undefined){return url.protocol + "//" + url.hostname + url.pathname;}else {return url.protocol + "//" + url.hostname + ":" + url.port + url.pathname;}}var VideoElementCache=(function(){function VideoElementCache(){var cache_size=arguments.length <= 0 || arguments[0] === undefined?3:arguments[0];_classCallCheck(this,VideoElementCache);this._elements = [];this._elementsInitialised = false;for(var i=0;i < cache_size;i++) {var element=this._createElement();this._elements.push(element);}}_createClass(VideoElementCache,[{key:"_createElement",value:function _createElement(){var videoElement=document.createElement("video");videoElement.setAttribute("crossorigin","anonymous");videoElement.setAttribute("webkit-playsinline","");videoElement.setAttribute("playsinline","");videoElement.src = "";return videoElement;}},{key:"init",value:function init(){if(!this._elementsInitialised){var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=this._elements[Symbol.iterator](),_step;!(_iteratorNormalCompletion = (_step = _iterator.next()).done);_iteratorNormalCompletion = true) {var element=_step.value;try{element.play().then(function(){},function(e){if(e.name !== "NotSupportedError")throw e;});}catch(e) { //console.log(e.name);
}}}catch(err) {_didIteratorError = true;_iteratorError = err;}finally {try{if(!_iteratorNormalCompletion && _iterator["return"]){_iterator["return"]();}}finally {if(_didIteratorError){throw _iteratorError;}}}}this._elementsInitialised = true;}},{key:"get",value:function get(){ //Try and get an already intialised element.
var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=this._elements[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);_iteratorNormalCompletion2 = true) {var _element=_step2.value; // For some reason an uninitialised videoElement has its sr attribute set to the windows href. Hence the below check.
if((_element.src === "" || _element.src === undefined || _element.src === stripHash(window.location)) && _element.srcObject == null)return _element;} //Fallback to creating a new element if non exists.
}catch(err) {_didIteratorError2 = true;_iteratorError2 = err;}finally {try{if(!_iteratorNormalCompletion2 && _iterator2["return"]){_iterator2["return"]();}}finally {if(_didIteratorError2){throw _iteratorError2;}}}console.debug("No available video element in the cache, creating a new one. This may break mobile, make your initial cache larger.");var element=this._createElement();this._elements.push(element);this._elementsInitialised = false;return element;}},{key:"length",get:function get(){return this._elements.length;}},{key:"unused",get:function get(){var count=0;var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=this._elements[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);_iteratorNormalCompletion3 = true) {var element=_step3.value; // For some reason an uninitialised videoElement has its sr attribute set to the windows href. Hence the below check.
if((element.src === "" || element.src === undefined || element.src === stripHash(window.location)) && element.srcObject == null)count += 1;}}catch(err) {_didIteratorError3 = true;_iteratorError3 = err;}finally {try{if(!_iteratorNormalCompletion3 && _iterator3["return"]){_iterator3["return"]();}}finally {if(_didIteratorError3){throw _iteratorError3;}}}return count;}}]);return VideoElementCache;})();exports["default"] = VideoElementCache;module.exports = exports["default"]; /***/}]));}); /******/; //# sourceMappingURL=videocontext.js.map
/***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/ /***/

/***/ })
/******/ ]);
});
//# sourceMappingURL=OBBEngine.js.map