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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/restrict-js.js":
/*!****************************!*\
  !*** ./src/restrict-js.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RestrictJS =
/*#__PURE__*/
function () {
  function RestrictJS() {
    _classCallCheck(this, RestrictJS);

    this.elements = null;
    this.keyCodes = {
      "0": [48, 96],
      "1": [49, 97],
      "2": [50, 98],
      "3": [51, 99],
      "4": [52, 100],
      "5": [53, 101],
      "6": [54, 102],
      "7": [55, 103],
      "8": [56, 104],
      "9": [57, 105],
      "a": 65,
      "b": 66,
      "c": 67,
      "d": 68,
      "e": 69,
      "f": 70,
      "g": 71,
      "h": 72,
      "i": 73,
      "j": 74,
      "k": 75,
      "l": 76,
      "m": 77,
      "n": 78,
      "o": 79,
      "p": 80,
      "q": 81,
      "r": 82,
      "s": 83,
      "t": 84,
      "u": 85,
      "v": 86,
      "w": 87,
      "x": 88,
      "y": 89,
      "z": 90,
      "`": 192,
      "=": 187,
      "\\": 220,
      "]": 221,
      "[": 219,
      "'": 222,
      ";": [186, 59],
      "/": [191, 111],
      ".": [190, 110],
      ",": 188,
      "*": 106,
      "-": [109, 173, 189],
      "+": [107, 61],
      " ": 32
    };
    this.shiftKeyCodes = {
      "~": 192,
      "!": 49,
      "@": 50,
      "#": 51,
      "$": 52,
      "%": 53,
      "^": 54,
      "&": 55,
      "*": 56,
      "(": 57,
      ")": 48,
      "_": [189, 173],
      "+": [187, 61],
      "{": 221,
      "}": 219,
      "\"": 222,
      ":": [186, 59],
      "?": 191,
      ">": 190,
      "<": 188
    };
    this.grabElements();
  }
  /**
   * Grab all elements contain 'data-restrict-js' attribute.
   */


  _createClass(RestrictJS, [{
    key: "grabElements",
    value: function grabElements() {
      var _this = this;

      var pastedText = '';
      var elements = document.querySelectorAll('[data-restrict-js]');
      [].forEach.call(elements, function (element) {
        var rules = element.getAttribute('data-restrict-js').trim(); // Skip if rules is empty.

        if (rules.length <= 0) {
          return;
        } // Handle copy and paste event.


        element.addEventListener('paste', function (event) {
          // console.log(!event.clipboardData);
          var clipboard = !event.clipboardData ? window.clipboardData : event.clipboardData; // console.log(window.clipboardData.getData('Text'));
          // let data = clipboard.getData('Text');
          // console.log(this.getAttribute('data-restrict-js'));

          return false;
        });
        element.addEventListener('keydown', function (event) {
          var keyCode = _this.grabKeyCode(event);

          if (_this.isSpecialKeyCode(keyCode)) {
            return true;
          }

          var splitRules = rules.split('|');
          var characterAllow = false;
          var usingShift = event.shiftKey;
          splitRules.forEach(function (rule) {
            console.log(event.shiftKey, keyCode, _this.keyCodes[rule], rule);
            _this.allowAlphaOnly(rule, keyCode, usingShift) ? characterAllow = true : '';
            _this.allowNumericOnly(rule, keyCode, usingShift) ? characterAllow = true : '';
            _this.allowAlphaNumericOnly(rule, keyCode, usingShift) ? characterAllow = true : '';
            _this.allowAlphaDashOnly(rule, keyCode, usingShift) ? characterAllow = true : '';
            _this.allowAlphaSpaceOnly(rule, keyCode, usingShift) ? characterAllow = true : '';
            _this.allowNumericDashOnly(rule, keyCode, usingShift) ? characterAllow = true : '';

            if (!event.shiftKey && _this.keyCodes[rule] !== undefined) {
              if (Array.isArray(_this.keyCodes[rule]) && _this.keyCodes[rule].indexOf(keyCode) >= 0) {
                characterAllow = true;
              } else {
                if (_this.keyCodes[rule] == keyCode) {
                  characterAllow = true;
                }
              }
            }

            if (event.shiftKey && _this.shiftKeyCodes[rule] !== undefined) {
              if (Array.isArray(_this.shiftKeyCodes[rule]) && _this.shiftKeyCodes[rule].indexOf(keyCode) >= 0) {
                characterAllow = true;
              } else {
                if (_this.shiftKeyCodes[rule] == keyCode) {
                  characterAllow = true;
                }
              }
            }
          });

          if (!characterAllow) {
            event.preventDefault();
          }
        });
      });
    }
    /**
     * Rule to allow letter only. a-z and A-Z
     *
     * @param rule
     * @param keyCode
     * @param usingShift
     * @returns {boolean}
     */

  }, {
    key: "allowAlphaOnly",
    value: function allowAlphaOnly(rule, keyCode, usingShift) {
      if (usingShift) {
        return false;
      }

      return rule == 'alpha' && keyCode >= 65 && keyCode <= 90;
    }
    /**
     * Rule to allow numeric only. 0-9
     *
     * @param rule
     * @param keyCode
     * @param usingShift
     * @returns {boolean}
     */

  }, {
    key: "allowNumericOnly",
    value: function allowNumericOnly(rule, keyCode, usingShift) {
      if (usingShift) {
        return false;
      }

      return rule == 'numeric' && (keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105);
    }
    /**
     * Rule to allow alpha numeric only. A-Z,a-z,0-9
     *
     * @param rule
     * @param keyCode
     * @param usingShift
     * @returns {boolean}
     */

  }, {
    key: "allowAlphaNumericOnly",
    value: function allowAlphaNumericOnly(rule, keyCode, usingShift) {
      if (usingShift) {
        return false;
      }

      return rule == 'alphanumeric' && (keyCode >= 48 && keyCode <= 90 || keyCode >= 96 && keyCode <= 105);
    }
    /**
     * Rule to allow alpha space only. A-Z,a-z and space.
     *
     * @param rule
     * @param keyCode
     * @param usingShift
     * @returns {boolean}
     */

  }, {
    key: "allowAlphaSpaceOnly",
    value: function allowAlphaSpaceOnly(rule, keyCode, usingShift) {
      if (usingShift) {
        return false;
      }

      return rule == 'alphaspace' && (keyCode >= 48 && keyCode <= 90 || keyCode == 32);
    }
    /**
     * Rule to allow alpha dash only. A-Z,a-z,-
     *
     * @param rule
     * @param keyCode
     * @param usingShift
     * @returns {boolean}
     */

  }, {
    key: "allowAlphaDashOnly",
    value: function allowAlphaDashOnly(rule, keyCode, usingShift) {
      if (usingShift) {
        return false;
      }

      return rule == 'alphadash' && (keyCode >= 65 && keyCode <= 90 || keyCode == 189 || keyCode == 173);
    }
    /**
     * Rule to allow numeric dash only. 0-9,-
     *
     * @param rule
     * @param keyCode
     * @param usingShift
     * @returns {boolean}
     */

  }, {
    key: "allowNumericDashOnly",
    value: function allowNumericDashOnly(rule, keyCode, usingShift) {
      if (usingShift) {
        return false;
      }

      return rule == 'numericdash' && (keyCode >= 48 && keyCode <= 57 || keyCode == 189);
    }
    /**
     * By default allow key code like enter,backspace,delete and arrow button.
     *
     * @param keyCode
     * @returns {boolean}
     */

  }, {
    key: "isSpecialKeyCode",
    value: function isSpecialKeyCode(keyCode) {
      return keyCode == 46 || keyCode == 13 || keyCode == 8 || keyCode == 16 || keyCode >= 37 && keyCode <= 40;
    }
    /**
     * Grab keyboard code.
     *
     * @param event
     * @returns {number|*}
     */

  }, {
    key: "grabKeyCode",
    value: function grabKeyCode(event) {
      //console.log(event.which, event.keyCode);
      if (event.which !== undefined) {
        return event.which;
      }

      if (event.keyIdentifier !== undefined) {
        return event.keyIdentifier;
      } else if (event.keyCode !== undefined) {
        return event.keyCode;
      }
    }
  }]);

  return RestrictJS;
}();

module.exports = RestrictJS;
window.RestrictJS = new RestrictJS();

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/restrict-js.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/restrict-js.js */"./src/restrict-js.js");


/***/ })

/******/ });
//# sourceMappingURL=restrict-js.js.map