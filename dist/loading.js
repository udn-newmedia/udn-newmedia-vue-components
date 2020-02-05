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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/utils/loading.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/utils/loading.js":
/*!******************************!*\
  !*** ./src/utils/loading.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  function handleLoagin() {\n    var loadingContainer = document.createElement('div');\n    loadingContainer.id = 'init-loading-container';\n    loadingContainer.className = 'init-loading__container';\n    var logoContainer = document.createElement('div');\n    logoContainer.id = 'init-loading-logo-conainer';\n    logoContainer.className = 'init-loading__logo-conainer';\n    var shadowContainer = document.createElement('div');\n    shadowContainer.id = 'init-loading-shaow-conainer';\n    shadowContainer.className = 'init-loading__shaow-conainer';\n    var udnLogo = document.createElement('i');\n    udnLogo.id = 'init-loading-udn-logo';\n    udnLogo.className = 'udn-icon udn-icon-logo';\n    document.getElementsByTagName('body')[0].appendChild(loadingContainer);\n    document.getElementById('init-loading-container').appendChild(logoContainer);\n    document.getElementById('init-loading-container').appendChild(shadowContainer);\n    document.getElementById('init-loading-logo-conainer').appendChild(udnLogo);\n    console.log('loading');\n  }\n\n  function handeInteractive() {\n    document.getElementById('init-loading-container').className = 'init-loading__container init-loading__container--disabled';\n    document.getElementById('app').style.opacity = 1;\n    console.log('interactive');\n  }\n\n  function handeComplete() {\n    console.log('complete');\n  }\n\n  handleLoagin();\n\n  document.onreadystatechange = function () {\n    // if (document.readyState === 'loading') handleLoagin();\n    if (document.readyState === 'interactive') handeInteractive();\n    if (document.readyState === 'complete') handeComplete();\n  };\n})();\n\n//# sourceURL=webpack:///./src/utils/loading.js?");

/***/ })

/******/ });