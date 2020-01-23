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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_toCssUnits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/toCssUnits */ \"./src/utils/toCssUnits.js\");\n\r\n\r\nclass AnimatedAdding {\r\n  constructor(\r\n    cart,\r\n    imagesSelector,\r\n    buttons,\r\n    transitionTime = 0.7,\r\n    onComplete = () => { }\r\n  ) {\r\n    this.imagesSelector = imagesSelector;\r\n\r\n    //Z-INDEX FOR CART ICON\r\n    this.MAX_Z_INDEX = 999;\r\n\r\n    this.cart = cart;\r\n    this.buttons = buttons;\r\n    this.images = document.querySelectorAll(imagesSelector);\r\n\r\n    this.transitionTime = transitionTime;\r\n\r\n    this.CART_PARAMETERS = this.cart.getBoundingClientRect();\r\n    this.onComplete = onComplete;\r\n\r\n    this.initialization();\r\n  }\r\n\r\n  initialization() {\r\n    this.setup();\r\n    this.addListeners();\r\n    this.onComplete();\r\n  }\r\n\r\n  setup() {\r\n    this.images.forEach((image, i) => {\r\n      const { style } = image;\r\n      //Add unique data-id to manage images\r\n      image.setAttribute('data-id', i);\r\n      style.transitionDuration = Object(_utils_toCssUnits__WEBPACK_IMPORTED_MODULE_0__[\"toCss\"])(this.transitionTime, 's');\r\n      style.left = Object(_utils_toCssUnits__WEBPACK_IMPORTED_MODULE_0__[\"toCss\"])(image.getBoundingClientRect().x);\r\n      style.top = Object(_utils_toCssUnits__WEBPACK_IMPORTED_MODULE_0__[\"toCss\"])(image.getBoundingClientRect().y);\r\n    });\r\n\r\n    this.cart.style.zIndex = this.MAX_Z_INDEX;\r\n  }\r\n\r\n  setStyles(image) {\r\n    const { x, y } = this.CART_PARAMETERS;\r\n    const { style } = image;\r\n    style.position = 'fixed';\r\n    style.left = Object(_utils_toCssUnits__WEBPACK_IMPORTED_MODULE_0__[\"toCss\"])(x);\r\n    style.top = Object(_utils_toCssUnits__WEBPACK_IMPORTED_MODULE_0__[\"toCss\"])(y);\r\n    style.width = Object(_utils_toCssUnits__WEBPACK_IMPORTED_MODULE_0__[\"toCss\"])(0);\r\n    style.height = Object(_utils_toCssUnits__WEBPACK_IMPORTED_MODULE_0__[\"toCss\"])(0);\r\n  };\r\n\r\n  addListeners() {\r\n    this.buttons.forEach((button, i) => {\r\n      button.addEventListener('click', () => {\r\n        const image = document.querySelector(`[data-id='${i}']`);\r\n        const cloned = image.cloneNode();\r\n\r\n        //Insert clone of image after image which is animated\r\n        image.parentNode.insertBefore(cloned, image);\r\n\r\n        this.setStyles(image);\r\n\r\n        image.addEventListener('transitionend', () => {\r\n          image.remove();\r\n        });\r\n\r\n        this.images = document.querySelectorAll(this.imagesSelector);\r\n      });\r\n    })\r\n  }\r\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/toCssUnits.js":
/*!*********************************!*\
  !*** ./src/utils/toCssUnits.js ***!
  \*********************************/
/*! exports provided: toCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toCss\", function() { return toCss; });\n//default return value in px\r\nconst toCss = (value, unit = 'px') => {\r\n  return `${value}${unit}`;\r\n};\n\n//# sourceURL=webpack:///./src/utils/toCssUnits.js?");

/***/ })

/******/ });