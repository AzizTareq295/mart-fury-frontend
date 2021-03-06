module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "0wdU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCartError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return increaseItemQty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return decreaseItemQty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return updateCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return updateCartError; });
const actionTypes = {
  GET_CART: 'GET_CART',
  GET_CART_SUCCESS: 'GET_CART_SUCCESS',
  GET_CART_ERROR: 'GET_CART_ERROR',
  GET_CART_TOTAL_QUANTITY: 'GET_CART_TOTAL_QUANTITY',
  GET_CART_TOTAL_QUANTITY_SUCCESS: 'GET_CART_TOTAL_QUANTITY_SUCCESS',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
  CLEAR_CART_SUCCESS: 'CLEAR_CART_SUCCESS',
  CLEAR_CART_ERROR: 'CLEAR_CART_ERROR',
  INCREASE_QTY: 'INCREASE_QTY',
  INCREASE_QTY_SUCCESS: 'INCREASE_QTY_SUCCESS',
  INCREASE_QTY_ERROR: 'INCREASE_QTY_ERROR',
  DECREASE_QTY: 'DECREASE_QTY',
  UPDATE_CART: 'UPDATE_CART',
  UPDATE_CART_SUCCESS: 'UPDATE_CART_SUCCESS',
  UPDATE_CART_ERROR: 'UPDATE_CART_ERROR'
};
function getCart() {
  return {
    type: actionTypes.GET_CART
  };
}
function getCartSuccess() {
  return {
    type: actionTypes.GET_CART_SUCCESS
  };
}
function getCartError(error) {
  return {
    type: actionTypes.GET_CART_ERROR,
    error
  };
}
function addItem(product) {
  return {
    type: actionTypes.ADD_ITEM,
    product
  };
}
function removeItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM,
    product
  };
}
function increaseItemQty(product) {
  return {
    type: actionTypes.INCREASE_QTY,
    product
  };
}
function decreaseItemQty(product) {
  return {
    type: actionTypes.DECREASE_QTY,
    product
  };
}
function updateCartSuccess(payload) {
  return {
    type: actionTypes.UPDATE_CART_SUCCESS,
    payload
  };
}
function updateCartError(payload) {
  return {
    type: actionTypes.UPDATE_CART_ERROR,
    payload
  };
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YNMu");


/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "689t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* unused harmony export getCollections */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCollectionsSuccess; });
/* unused harmony export getCategories */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCategoriesSuccess; });
/* unused harmony export getCollection */
/* unused harmony export getCollectionSuccess */
const actionTypes = {
  GET_COLLECTIONS: 'GET_COLLECTIONS',
  GET_COLLECTIONS_SUCCESS: 'GET_COLLECTIONS_SUCCESS',
  GET_COLLECTION: 'GET_COLLECTION',
  GET_COLLECTION_SUCCESS: 'GET_COLLECTION_SUCCESS',
  GET_CATEGORIES: 'GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS'
};
function getCollections(payload) {
  return {
    type: actionTypes.GET_COLLECTIONS,
    payload
  };
}
function getCollectionsSuccess(payload) {
  return {
    type: actionTypes.GET_COLLECTIONS_SUCCESS,
    payload
  };
}
function getCategories(payload) {
  return {
    type: actionTypes.GET_CATEGORIES,
    payload
  };
}
function getCategoriesSuccess(payload) {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload
  };
}
function getCollection(payload) {
  return {
    type: actionTypes.GET_COLLECTIONS,
    payload
  };
}
function getCollectionSuccess(payload) {
  return {
    type: actionTypes.GET_COLLECTIONS_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6XsT":
/***/ (function(module, exports) {



/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "AmNh":
/***/ (function(module, exports) {



/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Crg1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pU5j");


class CollectionRepository {
  async getCollections(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/collections?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getCategoriesBySlug(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/product-categories?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByCollectionSlug(slug) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* localUrl */ "f"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* localBaseUrl */ "e"]}/api/product/all`).then(response => {
      if (response.data && response.data.length > 0) {
        return {
          items: response.data
        };
      } else {
        return null;
      }

      return response.data;
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async getProductsByCategorySlug(slug) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/product-categories?slug_in=${slug}`).then(response => {
      if (response.data && response.data.length > 0) {
        return {
          items: response.data[0].products
        };
      } else {
        return null;
      }

      return response.data;
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new CollectionRepository());

/***/ }),

/***/ "E4SY":
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "Gq6B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pU5j");


class ProductRepository {
  async getRecords(params) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/products?${Object(_Repository__WEBPACK_IMPORTED_MODULE_0__[/* serializeQuery */ "g"])(params)}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProducts(params) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/products?${Object(_Repository__WEBPACK_IMPORTED_MODULE_0__[/* serializeQuery */ "g"])(params)}`).then(response => {
      return {
        items: response.data,
        totalItems: response.data.length
      };
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getBrands() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/brands`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductCategories() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/product-categories`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getTotalRecords() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/products/count`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsById(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* localUrl */ "f"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* localBaseUrl */ "e"]}/api/product/${payload}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByCategory(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/product-categories?slug=${payload}`).then(response => {
      if (response.data) {
        if (response.data.length > 0) {
          return response.data[0];
        }
      } else {
        return null;
      }
    }).catch(() => {
      return null;
    });
    return reponse;
  }

  async getProductsByBrand(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/brands?slug=${payload}`).then(response => {
      if (response.data) {
        if (response.data.length > 0) {
          return response.data[0];
        }
      } else {
        return null;
      }
    }).catch(() => {
      return null;
    });
    return reponse;
  }

  async getProductsByBrands(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `id_in=${item}`;
      } else {
        query = query + `&id_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/brands?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByBrands(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `id_in=${item}`;
      } else {
        query = query + `&id_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/brands?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByPriceRange(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/products?${Object(_Repository__WEBPACK_IMPORTED_MODULE_0__[/* serializeQuery */ "g"])(payload)}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new ProductRepository());

/***/ }),

/***/ "Gska":
/***/ (function(module, exports) {



/***/ }),

/***/ "Het6":
/***/ (function(module, exports) {



/***/ }),

/***/ "IvGD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pU5j");
/* harmony import */ var _utilities_product_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OqP1");



class MediaRespository {
  async getBannersBySlugs(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/banners?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getBannersBySlug(payload) {
    const endPoint = `banners?slug_in=${payload}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/${endPoint}`).then(response => {
      if (response.data) {
        return response.data[0].items;
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async getPromotionsBySlug(payload) {
    const endPoint = `promotions?slug_in=${payload}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/${endPoint}`).then(response => {
      if (response.data) {
        return response.data[0].items;
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async getPromotionsBySlugs(payload) {
    const query = Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_1__[/* convertSlugsQueryString */ "f"])(payload);
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "c"]}/promotions?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["a"] = (new MediaRespository());

/***/ }),

/***/ "JHtx":
/***/ (function(module, exports) {



/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "JPPj":
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "NOMj":
/***/ (function(module, exports) {



/***/ }),

/***/ "NZ7S":
/***/ (function(module, exports) {



/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "OqP1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return formatCurrency; });
/* unused harmony export getColletionBySlug */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getItemBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return convertSlugsQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrapiProductBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StrapiProductPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return StrapiProductPriceExpanded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return StrapiProductThumbnail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StrapiProductCartThumbnail; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("E4SY");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("pU5j");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);



/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */




function formatCurrency(num) {
  if (num !== undefined) {
    return parseFloat(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {}
}
function getColletionBySlug(collections, slug) {
  if (collections.length > 0) {
    const result = collections.find(item => item.slug === slug.toString());

    if (result !== undefined) {
      return result.products;
    } else {
      return [];
    }
  } else {
    return [];
  }
}
function getItemBySlug(banners, slug) {
  if (banners.length > 0) {
    const banner = banners.find(item => item.slug === slug.toString());

    if (banner !== undefined) {
      return banner;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function convertSlugsQueryString(payload) {
  let query = '';

  if (payload.length > 0) {
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
  }

  return query;
}
function StrapiProductBadge(product) {
  let view;

  if (product.badge && product.badge !== null) {
    view = product.badge.map(badge => {
      if (badge.type === 'sale') {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "ps-product__badge",
          children: badge.value
        });
      } else if (badge.type === 'outStock') {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "ps-product__badge out-stock",
          children: badge.value
        });
      } else {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "ps-product__badge hot",
          children: badge.value
        });
      }
    });
  }

  return view;
}
function StrapiProductPrice(product) {
  let view;

  if (product) {
    view = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
      className: "ps-product__price sale",
      children: ["$", formatCurrency(product.sku[0].sell_price), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("del", {
        className: "ml-2",
        children: ["$", formatCurrency(product.sku[0].regular_price)]
      })]
    });
  } else {
    view = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
      className: "ps-product__price",
      children: ["$", formatCurrency(product.price)]
    });
  }

  return view;
}
function StrapiProductPriceExpanded(product) {
  let view;

  if (product) {
    view = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
      className: "ps-product__price sale",
      children: ["$", formatCurrency(product.sku[0].sell_price), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("del", {
        className: "ml-2",
        children: ["$", formatCurrency(product.sku[0].regular_price)]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
        children: "18% off"
      })]
    });
  } else {
    view = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
      className: "ps-product__price",
      children: ["$", formatCurrency(product.price)]
    });
  }

  return view;
}
function StrapiProductThumbnail(product) {
  let view;

  if (product.product_media) {
    view = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: `${_repositories_Repository__WEBPACK_IMPORTED_MODULE_3__[/* localBaseUrl */ "e"]}/${product.product_media.feature_img}`,
            alt: product.title
          })
        })
      })
    });
  } else {
    view = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/static/img/not-found.jpg",
            alt: "martfury"
          })
        })
      })
    });
  }

  return view;
}
function StrapiProductCartThumbnail(product) {
  let view;

  if (product) {
    view = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/product/[pid]",
      as: `/product/${product.slug}`,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: `${_repositories_Repository__WEBPACK_IMPORTED_MODULE_3__[/* localBaseUrl */ "e"]}/${product.thumbnail}`,
            alt: product.name
          })
        })
      })
    });
  } else {
    view = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/static/img/not-found.jpg",
            alt: "martfury"
          })
        })
      })
    });
  }

  return view;
}

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "SqlY":
/***/ (function(module, exports) {



/***/ }),

/***/ "T/WE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* unused harmony export getWishlistList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getWishlistListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addItemToWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeWishlistItem; });
/* unused harmony export clearWishlist */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateWishlistListSuccess; });
const actionTypes = {
  GET_WISHLIST_LIST: 'GET_WISHLIST_LIST',
  GET_WISHLIST_LIST_SUCCESS: 'GET_WISHLIST_LIST_SUCCESS',
  GET_WISHLIST_LIST_ERROR: 'GET_WISHLIST_LIST_ERROR',
  ADD_ITEM_WISHLISH: 'ADD_ITEM_WISHLISH',
  REMOVE_ITEM_WISHLISH: 'REMOVE_ITEM_WISHLISH',
  UPDATE_WISHLISH_LIST: 'UPDATE_WISHLISH_LIST',
  UPDATE_WISHLISH_LIST_SUCCESS: 'UPDATE_WISHLISH_LIST_SUCCESS',
  UPDATE_WISHLISH_LIST_ERROR: 'UPDATE_WISHLISH_LIST_ERROR',
  CLEAR_WISHLISH_LIST: 'CLEAR_WISHLISH_LIST'
};
function getWishlistList() {
  return {
    type: actionTypes.GET_WISHLIST_LIST
  };
}
function getWishlistListSuccess(data) {
  return {
    type: actionTypes.GET_WISHLIST_LIST_SUCCESS,
    data
  };
}
function addItemToWishlist(product) {
  return {
    type: actionTypes.ADD_ITEM_WISHLISH,
    product
  };
}
function removeWishlistItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM_WISHLISH,
    product
  };
}
function clearWishlist() {
  return {
    type: actionTypes.CLEAR_CART
  };
}
function updateWishlistListSuccess(payload) {
  return {
    type: actionTypes.UPDATE_WISHLISH_LIST_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "T8f9":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "VNb8":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "VtRA":
/***/ (function(module, exports) {



/***/ }),

/***/ "W80I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return registerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logOutSuccess; });
const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION'
};
function login(payload) {
  return {
    type: actionTypes.LOGIN_REQUEST,
    payload
  };
}
function register(payload) {
  return {
    type: actionTypes.REGISTER_REQUEST,
    payload
  };
}
function loginSuccess(data) {
  console.log(data);
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: data
  };
}
function registerSuccess(data) {
  console.log(data);
  return {
    type: actionTypes.REGISTER_SUCCESS,
    payload: data
  };
}
function logOut() {
  return {
    type: actionTypes.LOGOUT
  };
}
function logOutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
}

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YNMu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "next-redux-saga"
var external_next_redux_saga_ = __webpack_require__("pEZS");
var external_next_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_saga_);

// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__("VNb8");

// EXTERNAL MODULE: external "redux-persist/integration/react"
var react_ = __webpack_require__("JPPj");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__("T8f9");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);

// CONCATENATED MODULE: ./store/post/action.js
const actionTypes = {
  GET_POSTS: 'GET_POSTS',
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_POSTS_ERROR: 'GET_POSTS_ERROR',
  GET_FEATURED_POST: 'GET_FEATURED_POST',
  GET_FEATURED_POST_SUCCESS: 'GET_FEATURED_POST_SUCCESS',
  GET_FEATURED_POST_ERROR: 'GET_FEATURED_POST_ERROR',
  GET_RECENT_POSTS: 'GET_RECENT_POSTS',
  GET_RECENT_POSTS_SUCCESS: 'GET_RECENT_POSTS_SUCCESS',
  GET_RECENT_POSTS_ERROR: 'GET_RECENT_POSTS_ERROR',
  GET_POST_CATEGORIES: 'GET_POST_CATEGORIES',
  GET_POST_CATEGORIES_SUCCESS: 'GET_POST_CATEGORIES_SUCCESS',
  GET_POST_CATEGORIES_ERROR: 'GET_POST_CATEGORIES_ERROR'
};
function getPosts() {
  return {
    type: actionTypes.GET_POSTS
  };
}
function getPostsSuccess(data) {
  return {
    type: actionTypes.GET_POSTS_SUCCESS,
    data
  };
}
function getPostsError(error) {
  return {
    type: actionTypes.GET_POSTS_ERROR,
    error
  };
}
function getFeaturedPost() {
  return {
    type: actionTypes.GET_FEATURED_POST
  };
}
function getFeaturedPostSuccess(data) {
  return {
    type: actionTypes.GET_FEATURED_POST_SUCCESS,
    data
  };
}
function getFeaturedPostError(error) {
  return {
    type: actionTypes.GET_FEATURED_POST_ERROR,
    error
  };
}
function getRecentPosts() {
  return {
    type: actionTypes.GET_RECENT_POSTS
  };
}
function getRecentPostsSuccess(data) {
  return {
    type: actionTypes.GET_RECENT_POSTS_SUCCESS,
    data
  };
}
function getRecentPostsError(error) {
  return {
    type: actionTypes.GET_RECENT_POSTS_ERROR,
    error
  };
}
function getPostCategories() {
  return {
    type: actionTypes.GET_POST_CATEGORIES
  };
}
function getPostCategoriesSuccess(data) {
  return {
    type: actionTypes.GET_POST_CATEGORIES_SUCCESS,
    data
  };
}
function getPostCategoriesError(error) {
  return {
    type: actionTypes.GET_POST_CATEGORIES_ERROR,
    error
  };
}
// CONCATENATED MODULE: ./store/post/reducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reducer_initialState = {
  posts: [],
  featuredPost: null,
  recentPost: [],
  categories: [],
  error: false
};

function reducer(state = reducer_initialState, action) {
  switch (action.type) {
    case actionTypes.GET_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        posts: action.data
      });

    case actionTypes.GET_FEATURED_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        featuredPost: action.data
      });

    case actionTypes.GET_RECENT_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        recentPost: action.data
      });

    case actionTypes.GET_POST_CATEGORIES_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        categories: action.data
      });

    case actionTypes.GET_POSTS_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    case actionTypes.GET_FEATURED_POST_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    case actionTypes.GET_RECENT_POSTS_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    case actionTypes.GET_POST_CATEGORIES_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ var post_reducer = (reducer);
// EXTERNAL MODULE: ./store/product/action.js
var product_action = __webpack_require__("ypqY");

// CONCATENATED MODULE: ./store/product/reducer.js
function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const product_reducer_initialState = {
  allProducts: null,
  singleProduct: null,
  error: false,
  totalProducts: 0,
  categories: null,
  brands: [],
  productsLoading: true,
  productLoading: true,
  searchResults: null
};

function reducer_reducer(state = product_reducer_initialState, action) {
  switch (action.type) {
    case product_action["a" /* actionTypes */].GET_PRODUCTS_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        allProducts: action.data,
        productsLoading: false
      });

    case product_action["a" /* actionTypes */].GET_TOTAL_OF_PRODUCTS_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        totalProducts: action.payload
      });

    case product_action["a" /* actionTypes */].GET_BRANDS_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        brands: action.payload
      });

    case product_action["a" /* actionTypes */].GET_PRODUCT_CATEGORIES_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        categories: action.payload
      });

    case product_action["a" /* actionTypes */].GET_PRODUCT_BY_ID_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        singleProduct: action.data,
        productLoading: false
      });

    case product_action["a" /* actionTypes */].GET_PRODUCTS_BY_KEYWORD_SUCCESS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        searchResults: action.payload
      });

    case product_action["a" /* actionTypes */].GET_PRODUCTS_ERROR:
      return reducer_objectSpread(reducer_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ var product_reducer = (reducer_reducer);
// EXTERNAL MODULE: ./store/setting/action.js
var setting_action = __webpack_require__("ZzbE");

// CONCATENATED MODULE: ./store/setting/reducer.js
function setting_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function setting_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { setting_reducer_ownKeys(Object(source), true).forEach(function (key) { setting_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { setting_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function setting_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const setting_reducer_initialState = {
  currency: {
    symbol: '$',
    text: 'USD'
  }
};

function setting_reducer_reducer(state = setting_reducer_initialState, action) {
  switch (action.type) {
    case setting_action["a" /* actionTypes */].CHANGE_CURRENCY_SUCCESS:
      return setting_reducer_objectSpread(setting_reducer_objectSpread({}, state), {
        currency: action.currency
      });

    default:
      return state;
  }
}

/* harmony default export */ var setting_reducer = (setting_reducer_reducer);
// EXTERNAL MODULE: ./store/cart/action.js
var cart_action = __webpack_require__("0wdU");

// CONCATENATED MODULE: ./store/cart/reducer.js
function cart_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cart_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cart_reducer_ownKeys(Object(source), true).forEach(function (key) { cart_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cart_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cart_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initCart = {
  cartItems: [],
  amount: 0,
  cartTotal: 0
};

function cart_reducer_reducer(state = initCart, action) {
  switch (action.type) {
    case cart_action["a" /* actionTypes */].GET_CART_SUCCESS:
      return cart_reducer_objectSpread({}, state);

    case cart_action["a" /* actionTypes */].UPDATE_CART_SUCCESS:
      console.log(action);
      return cart_reducer_objectSpread(cart_reducer_objectSpread(cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {
        cartItems: action.payload.cartItems
      }), {
        amount: action.payload.amount
      }), {
        cartTotal: action.payload.cartTotal
      });

    case cart_action["a" /* actionTypes */].CLEAR_CART_SUCCESS:
      return cart_reducer_objectSpread(cart_reducer_objectSpread(cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {
        cartItems: action.payload.cartItems
      }), {
        amount: action.payload.amount
      }), {
        cartTotal: action.payload.cartTotal
      });

    case cart_action["a" /* actionTypes */].GET_CART_ERROR:
      return cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {
        error: action.error
      });

    case cart_action["a" /* actionTypes */].UPDATE_CART_ERROR:
      return cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ var cart_reducer = (cart_reducer_reducer);
// EXTERNAL MODULE: ./store/compare/action.js
var compare_action = __webpack_require__("q8Yi");

// CONCATENATED MODULE: ./store/compare/reducer.js
function compare_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function compare_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { compare_reducer_ownKeys(Object(source), true).forEach(function (key) { compare_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { compare_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function compare_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reducer_initCart = {
  compareItems: [],
  compareTotal: 0
};

function compare_reducer_reducer(state = reducer_initCart, action) {
  switch (action.type) {
    case compare_action["a" /* actionTypes */].GET_COMPARE_LIST_SUCCESS:
      return compare_reducer_objectSpread(compare_reducer_objectSpread({}, state), {
        cart: action.data
      });

    case compare_action["a" /* actionTypes */].UPDATE_COMPARE_LIST_SUCCESS:
      return compare_reducer_objectSpread(compare_reducer_objectSpread({}, state), {
        compareItems: action.payload.compareItems,
        compareTotal: action.payload.compareTotal
      });

    case compare_action["a" /* actionTypes */].GET_COMPARE_LIST_ERROR:
      return compare_reducer_objectSpread(compare_reducer_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ var compare_reducer = (compare_reducer_reducer);
// EXTERNAL MODULE: ./store/auth/action.js
var auth_action = __webpack_require__("W80I");

// CONCATENATED MODULE: ./store/auth/reducer.js
function auth_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function auth_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auth_reducer_ownKeys(Object(source), true).forEach(function (key) { auth_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { auth_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function auth_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  isLoggedIn: false,
  user: '',
  token: ''
};

function auth_reducer_reducer(state = initState, action) {
  switch (action.type) {
    case auth_action["a" /* actionTypes */].LOGIN_SUCCESS:
      return auth_reducer_objectSpread(auth_reducer_objectSpread({}, state), {
        isLoggedIn: true,
        user: action.payload.items.data.user,
        token: action.payload.items.data.token
      });

    case auth_action["a" /* actionTypes */].REGISTER_SUCCESS:
      return auth_reducer_objectSpread(auth_reducer_objectSpread({}, state), {
        isLoggedIn: true,
        user: action.payload.items.data.user,
        token: action.payload.items.data.token
      });

    case auth_action["a" /* actionTypes */].LOGOUT_SUCCESS:
      return auth_reducer_objectSpread(auth_reducer_objectSpread({}, state), {
        isLoggedIn: false,
        user: '',
        token: ''
      });

    default:
      return state;
  }
}

/* harmony default export */ var auth_reducer = (auth_reducer_reducer);
// EXTERNAL MODULE: ./store/wishlist/action.js
var wishlist_action = __webpack_require__("T/WE");

// CONCATENATED MODULE: ./store/wishlist/reducer.js
function wishlist_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function wishlist_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { wishlist_reducer_ownKeys(Object(source), true).forEach(function (key) { wishlist_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { wishlist_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function wishlist_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reducer_initState = {
  wishlistItems: [],
  wishlistTotal: 0
};

function wishlist_reducer_reducer(state = reducer_initState, action) {
  switch (action.type) {
    case wishlist_action["a" /* actionTypes */].GET_WISHLIST_LIST_SUCCESS:
      return wishlist_reducer_objectSpread({}, state);

    case wishlist_action["a" /* actionTypes */].UPDATE_WISHLISH_LIST_SUCCESS:
      return wishlist_reducer_objectSpread(wishlist_reducer_objectSpread({}, state), {
        wishlistItems: action.payload.wishlistItems,
        wishlistTotal: action.payload.wishlistTotal
      });

    case wishlist_action["a" /* actionTypes */].GET_WISHLIST_LIST_ERROR:
      return wishlist_reducer_objectSpread(wishlist_reducer_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ var wishlist_reducer = (wishlist_reducer_reducer);
// EXTERNAL MODULE: ./store/collection/action.js
var collection_action = __webpack_require__("689t");

// CONCATENATED MODULE: ./store/collection/reducer.js
function collection_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function collection_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { collection_reducer_ownKeys(Object(source), true).forEach(function (key) { collection_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { collection_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function collection_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const collection_reducer_initialState = {
  collections: [],
  categories: [],
  collection: {}
};

function collection_reducer_reducer(state = collection_reducer_initialState, action) {
  switch (action.type) {
    case collection_action["a" /* actionTypes */].GET_COLLECTIONS_SUCCESS:
      return collection_reducer_objectSpread(collection_reducer_objectSpread({}, state), {
        collections: action.payload
      });

    case collection_action["a" /* actionTypes */].GET_COLLECTION_SUCCESS:
      return collection_reducer_objectSpread(collection_reducer_objectSpread({}, state), {
        collection: action.payload
      });

    case collection_action["a" /* actionTypes */].GET_CATEGORIES_SUCCESS:
      return collection_reducer_objectSpread(collection_reducer_objectSpread({}, state), {
        categories: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ var collection_reducer = (collection_reducer_reducer);
// CONCATENATED MODULE: ./store/media/action.js
const action_actionTypes = {
  GET_BANNERS: 'GET_BANNERS',
  GET_BANNERS_SUCCESS: 'GET_BANNERS_SUCCESS',
  GET_PROMOTIONS: 'GET_PROMOTIONS',
  GET_PROMOTIONS_SUCCESS: 'GET_PROMOTIONS_SUCCESS'
};
function getBannersBySlugs(payload) {
  return {
    type: action_actionTypes.GET_BANNERS,
    payload
  };
}
function getBannersSuccess(payload) {
  return {
    type: action_actionTypes.GET_BANNERS_SUCCESS,
    payload
  };
}
function getPromotionsBySlugs(payload) {
  return {
    type: action_actionTypes.GET_PROMOTIONS,
    payload
  };
}
function getPromotionsSuccess(payload) {
  return {
    type: action_actionTypes.GET_PROMOTIONS_SUCCESS,
    payload
  };
}
// CONCATENATED MODULE: ./store/media/reducer.js
function media_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function media_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { media_reducer_ownKeys(Object(source), true).forEach(function (key) { media_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { media_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function media_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const media_reducer_initialState = {
  banners: [],
  promotions: []
};

function media_reducer_reducer(state = media_reducer_initialState, action) {
  switch (action.type) {
    case action_actionTypes.GET_BANNERS_SUCCESS:
      return media_reducer_objectSpread(media_reducer_objectSpread({}, state), {
        banners: action.payload
      });

    case action_actionTypes.GET_PROMOTIONS_SUCCESS:
      return media_reducer_objectSpread(media_reducer_objectSpread({}, state), {
        promotions: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ var media_reducer = (media_reducer_reducer);
// CONCATENATED MODULE: ./store/app/action.js
const app_action_actionTypes = {
  SWITCH_DEMO_PANEL: 'SWITCH_DEMO_PANEL',
  SWITCH_DEMO_PANEL_SUCCESS: 'SWITCH_DEMO_PANEL_SUCCESS'
};
function switchDemoPanel(payload) {
  return {
    type: app_action_actionTypes.SWITCH_DEMO_PANEL,
    payload
  };
}
function switchDemoPanelSuccess(payload) {
  return {
    type: app_action_actionTypes.SWITCH_DEMO_PANEL_SUCCESS,
    payload
  };
}
// CONCATENATED MODULE: ./store/app/reducer.js
function app_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function app_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { app_reducer_ownKeys(Object(source), true).forEach(function (key) { app_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { app_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function app_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const app_reducer_initState = {
  isShowDemoPanel: false
};

function app_reducer_reducer(state = app_reducer_initState, action) {
  switch (action.type) {
    case app_action_actionTypes.SWITCH_DEMO_PANEL_SUCCESS:
      return app_reducer_objectSpread(app_reducer_objectSpread({}, state), {
        isShowDemoPanel: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ var app_reducer = (app_reducer_reducer);
// CONCATENATED MODULE: ./store/rootReducer.js











/* harmony default export */ var rootReducer = (Object(external_redux_["combineReducers"])({
  auth: auth_reducer,
  post: post_reducer,
  product: product_reducer,
  setting: setting_reducer,
  cart: cart_reducer,
  compare: compare_reducer,
  wishlist: wishlist_reducer,
  collection: collection_reducer,
  media: media_reducer,
  app: app_reducer
}));
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "es6-promise"
var external_es6_promise_ = __webpack_require__("pv/X");

// EXTERNAL MODULE: ./public/static/data/blog-grid.json
var blog_grid = __webpack_require__("fg/j");

// CONCATENATED MODULE: ./store/post/saga.js




Object(external_es6_promise_["polyfill"])();

function* getPostsSaga() {
  try {
    const data = blog_grid.posts;
    yield Object(effects_["put"])(getPostsSuccess(data));
  } catch (err) {
    yield Object(effects_["put"])(getPostsError(err));
  }
}

function* getFeaturedPostSaga() {
  try {
    const data = blog_grid.postFeatures;
    yield Object(effects_["put"])(getFeaturedPostSuccess(data));
  } catch (err) {
    yield Object(effects_["put"])(getFeaturedPostError(err));
  }
}

function* getRecentPostSaga() {
  try {
    const data = blog_grid.recentPosts;
    yield Object(effects_["put"])(getRecentPostsSuccess(data));
  } catch (err) {
    yield Object(effects_["put"])(getRecentPostsError(err));
  }
}

function* saga_getPostCategories() {
  try {
    const data = blog_grid.blogCategories;
    yield Object(effects_["put"])(getPostCategoriesSuccess(data));
  } catch (err) {
    yield Object(effects_["put"])(getPostCategoriesError(err));
  }
}

function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(actionTypes.GET_POSTS, getPostsSaga), Object(effects_["takeEvery"])(actionTypes.GET_FEATURED_POST, getFeaturedPostSaga), Object(effects_["takeEvery"])(actionTypes.GET_RECENT_POSTS, getRecentPostSaga), Object(effects_["takeEvery"])(actionTypes.GET_POST_CATEGORIES, saga_getPostCategories)]);
}
// EXTERNAL MODULE: ./repositories/ProductRepository.js
var ProductRepository = __webpack_require__("Gq6B");

// CONCATENATED MODULE: ./store/product/saga.js




Object(external_es6_promise_["polyfill"])();

function* getProducts({
  payload
}) {
  try {
    const data = yield Object(effects_["call"])(ProductRepository["a" /* default */].getRecords, payload);
    yield Object(effects_["put"])(Object(product_action["g" /* getProductsSuccess */])(data));
  } catch (err) {
    yield Object(effects_["put"])(Object(product_action["f" /* getProductsError */])(err));
  }
}

function* getTotalOfProducts() {
  try {
    const result = yield Object(effects_["call"])(ProductRepository["a" /* default */].getTotalRecords);
    yield Object(effects_["put"])(Object(product_action["i" /* getTotalProductsSuccess */])(result));
  } catch (err) {
    console.log(err);
  }
}

function* getBrands() {
  try {
    const result = yield Object(effects_["call"])(ProductRepository["a" /* default */].getBrands);
    yield Object(effects_["put"])(Object(product_action["b" /* getBrandsSuccess */])(result));
  } catch (err) {
    console.log(err);
  }
}

function* getProductCategories() {
  try {
    const result = yield Object(effects_["call"])(ProductRepository["a" /* default */].getProductCategories);
    yield Object(effects_["put"])(Object(product_action["d" /* getProductCategoriesSuccess */])(result));
  } catch (err) {
    console.log(err);
  }
}

function* getProductById({
  id
}) {
  try {
    const product = yield Object(effects_["call"])(ProductRepository["a" /* default */].getProductsById, id);
    yield Object(effects_["put"])(Object(product_action["h" /* getSingleProductsSuccess */])(product));
  } catch (err) {
    yield Object(effects_["put"])(Object(product_action["f" /* getProductsError */])(err));
  }
}

function* getProductByCategory({
  category
}) {
  try {
    const result = yield Object(effects_["call"])(ProductRepository["a" /* default */].getProductsByCategory, category);
    yield Object(effects_["put"])(Object(product_action["g" /* getProductsSuccess */])(result));
    yield Object(effects_["put"])(Object(product_action["i" /* getTotalProductsSuccess */])(result.length));
  } catch (err) {
    yield Object(effects_["put"])(Object(product_action["f" /* getProductsError */])(err));
  }
}

function* getProductByPriceRange({
  payload
}) {
  try {
    const products = yield Object(effects_["call"])(ProductRepository["a" /* default */].getProductsByPriceRange, payload);
    yield Object(effects_["put"])(Object(product_action["g" /* getProductsSuccess */])(products));
    yield Object(effects_["put"])(Object(product_action["i" /* getTotalProductsSuccess */])(products.length));
  } catch (err) {
    yield Object(effects_["put"])(Object(product_action["f" /* getProductsError */])(err));
  }
}

function* getProductByBrand({
  payload
}) {
  try {
    const brands = yield Object(effects_["call"])(ProductRepository["a" /* default */].getProductsByBrands, payload);
    const products = [];
    brands.forEach(brand => {
      brand.products.forEach(product => {
        products.push(product);
      });
    });
    yield Object(effects_["put"])(Object(product_action["g" /* getProductsSuccess */])(products));
    yield Object(effects_["put"])(Object(product_action["i" /* getTotalProductsSuccess */])(products.length));
  } catch (err) {
    yield Object(effects_["put"])(Object(product_action["f" /* getProductsError */])(err));
  }
}

function* getProductByKeyword({
  keyword
}) {
  try {
    const searchParams = {
      title_contains: keyword
    };
    const result = yield Object(effects_["call"])(ProductRepository["a" /* default */].getRecords, searchParams);
    yield Object(effects_["put"])(Object(product_action["c" /* getProductByKeywordsSuccess */])(result));
  } catch (err) {
    yield Object(effects_["put"])(Object(product_action["f" /* getProductsError */])(err));
  }
}

function* saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_PRODUCTS, getProducts)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_TOTAL_OF_PRODUCTS, getTotalOfProducts)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_BRANDS, getBrands)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_PRODUCT_CATEGORIES, getProductCategories)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_PRODUCTS_BY_CATEGORY, getProductByCategory)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_PRODUCTS_BY_PRICE_RANGE, getProductByPriceRange)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_PRODUCTS_BY_BRAND, getProductByBrand)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_PRODUCTS_BY_KEYWORD, getProductByKeyword)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(product_action["a" /* actionTypes */].GET_PRODUCT_BY_ID, getProductById)]);
}
// CONCATENATED MODULE: ./store/setting/saga.js



function* changeCurrencySaga({
  currency
}) {
  try {
    yield Object(effects_["put"])(Object(setting_action["c" /* changeCurrencySuccess */])(currency));
  } catch (err) {
    console.error(err);
  }
}

function* setting_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(setting_action["a" /* actionTypes */].CHANGE_CURRENCY, changeCurrencySaga)]);
}
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./store/cart/saga.js




const modalSuccess = type => {
  external_antd_["notification"][type]({
    message: 'Success',
    description: 'This product has been added to your cart!',
    duration: 1
  });
};

const modalWarning = type => {
  external_antd_["notification"][type]({
    message: 'Remove A Item',
    description: 'This product has been removed from your cart!',
    duration: 1
  });
};

const calculateAmount = obj => Object.values(obj).reduce((acc, product) => acc + product.quantity * product.price, 0).toFixed(2);

function* getCartSaga() {
  try {
    yield Object(effects_["put"])(Object(cart_action["f" /* getCartSuccess */])());
  } catch (err) {
    yield Object(effects_["put"])(Object(cart_action["e" /* getCartError */])(err));
  }
}

function* addItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    const item = {
      id: product.id,
      name: product.name,
      slug: product.slug,
      sku: product.sku[0].sku,
      sku_id: product.sku[0].id,
      regular_price: product.sku[0].regular_price,
      sell_price: product.sku[0].sell_price,
      price: product.sku[0].sell_price > 0 ? product.sku[0].sell_price : product.sku[0].regular_price,
      product_stock: product.sku[0].stock,
      thumbnail: product.product_media.feature_img,
      quantity: 1
    };
    const localCart = JSON.parse(localStorage.getItem('persist:martfury')).cart;
    let currentCart = JSON.parse(localCart);
    let existItem = currentCart.cartItems.find(p => parseInt(p.id) === parseInt(item.id));

    if (existItem) {
      existItem.quantity += item.quantity;
    } else {
      if (!item.quantity) {
        item.quantity = 1;
      }

      currentCart.cartItems.push(item);
    }

    currentCart.amount = calculateAmount(currentCart.cartItems);
    currentCart.cartTotal++;
    yield Object(effects_["put"])(Object(cart_action["j" /* updateCartSuccess */])(currentCart));
    modalSuccess('success');
  } catch (err) {
    yield Object(effects_["put"])(Object(cart_action["e" /* getCartError */])(err));
  }
}

function* removeItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCart = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).cart);
    let index = localCart.cartItems.findIndex(p => parseInt(p.id) === parseInt(product.id));
    localCart.cartTotal = localCart.cartTotal - product.quantity;
    localCart.cartItems.splice(index, 1);
    localCart.amount = calculateAmount(localCart.cartItems);

    if (localCart.cartItems.length === 0) {
      localCart.cartItems = [];
      localCart.amount = 0;
      localCart.cartTotal = 0;
    }

    yield Object(effects_["put"])(Object(cart_action["j" /* updateCartSuccess */])(localCart));
    modalWarning('warning');
  } catch (err) {
    yield Object(effects_["put"])(Object(cart_action["e" /* getCartError */])(err));
  }
}

function* increaseQtySaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCart = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).cart);
    let selectedItem = localCart.cartItems.find(p => parseInt(p.id) === parseInt(product.id));
    console.log(selectedItem);

    if (selectedItem) {
      selectedItem.quantity++;
      localCart.cartTotal++;
      localCart.amount = calculateAmount(localCart.cartItems);
    }

    yield Object(effects_["put"])(Object(cart_action["j" /* updateCartSuccess */])(localCart));
  } catch (err) {
    yield Object(effects_["put"])(Object(cart_action["e" /* getCartError */])(err));
  }
}

function* decreaseItemQtySaga(payload) {
  try {
    const {
      product
    } = payload;
    const localCart = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).cart);
    let selectedItem = localCart.cartItems.find(p => parseInt(p.id) === parseInt(product.id));

    if (selectedItem) {
      selectedItem.quantity--;
      localCart.cartTotal--;
      localCart.amount = calculateAmount(localCart.cartItems);
    }

    yield Object(effects_["put"])(Object(cart_action["j" /* updateCartSuccess */])(localCart));
  } catch (err) {
    yield Object(effects_["put"])(Object(cart_action["e" /* getCartError */])(err));
  }
}

function* clearCartSaga() {
  try {
    const emptyCart = {
      cartItems: [],
      amount: 0,
      cartTotal: 0
    };
    yield Object(effects_["put"])(Object(cart_action["j" /* updateCartSuccess */])(emptyCart));
  } catch (err) {
    yield Object(effects_["put"])(Object(cart_action["i" /* updateCartError */])(err));
  }
}

function* cart_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(cart_action["a" /* actionTypes */].GET_CART, getCartSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(cart_action["a" /* actionTypes */].ADD_ITEM, addItemSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(cart_action["a" /* actionTypes */].REMOVE_ITEM, removeItemSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(cart_action["a" /* actionTypes */].INCREASE_QTY, increaseQtySaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(cart_action["a" /* actionTypes */].DECREASE_QTY, decreaseItemQtySaga)]);
}
// EXTERNAL MODULE: ./repositories/Repository.js
var Repository = __webpack_require__("pU5j");

// CONCATENATED MODULE: ./repositories/UserRepository.js


class UserRepository_UserRepository {
  async loginInfo(data) {
    const reponse = await Repository["f" /* localUrl */].post(`${Repository["e" /* localBaseUrl */]}/api/login`, data).then(response => {
      if (response.data) {
        return {
          items: response.data
        };
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async registerInfo(data) {
    const reponse = await Repository["f" /* localUrl */].post(`${Repository["e" /* localBaseUrl */]}/api/register`, data).then(response => {
      if (response.data) {
        return {
          items: response.data
        };
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

}

/* harmony default export */ var repositories_UserRepository = (new UserRepository_UserRepository());
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");

// CONCATENATED MODULE: ./store/auth/saga.js






const saga_modalSuccess = type => {
  external_antd_["notification"][type]({
    message: 'Wellcome back',
    description: 'You are login successful!'
  });
};

const saga_modalWarning = type => {
  external_antd_["notification"][type]({
    message: 'Good bye!',
    description: 'Your account has been logged out!'
  });
};

function* loginSaga(payload) {
  const data = payload.payload.data;

  try {
    const res = yield Object(effects_["call"])(repositories_UserRepository.loginInfo, data);
    yield Object(effects_["put"])(Object(auth_action["e" /* loginSuccess */])(res));
  } catch (err) {
    console.log(err);
  }
}

function* registerSaga(payload) {
  const data = payload.payload.data;

  try {
    const res = yield Object(effects_["call"])(repositories_UserRepository.registerInfo, data);
    yield Object(effects_["put"])(Object(auth_action["g" /* registerSuccess */])(res));
  } catch (err) {
    console.log(err);
  }
}

function* logOutSaga() {
  try {
    yield Object(effects_["put"])(Object(auth_action["c" /* logOutSuccess */])());
    saga_modalWarning('warning');
  } catch (err) {
    console.log(err);
  }
}

function* auth_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(auth_action["a" /* actionTypes */].LOGIN_REQUEST, loginSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(auth_action["a" /* actionTypes */].REGISTER_REQUEST, registerSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(auth_action["a" /* actionTypes */].LOGOUT, logOutSaga)]);
}
// CONCATENATED MODULE: ./store/compare/saga.js




const compare_saga_modalSuccess = type => {
  external_antd_["notification"][type]({
    message: 'Added to compare list!',
    description: 'This product has been added to compare list!'
  });
};

const compare_saga_modalWarning = type => {
  external_antd_["notification"][type]({
    message: 'Removed to compare list',
    description: 'This product has been removed from compare list!'
  });
};

function* getCompareListSaga() {
  try {
    const localCompareList = JSON.parse(localStorage.getItem('persist:martfury')).cart;
    yield Object(effects_["put"])(Object(compare_action["c" /* getCompareListSuccess */])(localCompareList));
  } catch (err) {
    console.log(err);
  }
}

function* saga_addItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCompare = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).compare);
    let existItem = localCompare.compareItems.find(item => item.id === product.id);

    if (!existItem) {
      product.quantity = 1;
      localCompare.compareItems.push(product);
      localCompare.compareTotal++;
      yield Object(effects_["put"])(Object(compare_action["e" /* updateCompareListSuccess */])(localCompare));
    }
  } catch (err) {
    console.log(err);
  }
}

function* saga_removeItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCompare = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).compare);
    let index = localCompare.compareItems.indexOf(product);
    localCompare.compareTotal = localCompare.compareTotal - 1;
    localCompare.compareItems.splice(index, 1);
    yield Object(effects_["put"])(Object(compare_action["e" /* updateCompareListSuccess */])(localCompare));
    compare_saga_modalWarning('warning');
  } catch (err) {
    console.log(err);
  }
}

function* clearCompareListSaga() {
  try {
    const emptyCart = {
      compareItems: [],
      compareTotal: 0
    };
    yield Object(effects_["put"])(Object(compare_action["e" /* updateCompareListSuccess */])(emptyCart));
  } catch (err) {
    console.log(err);
  }
}

function* compare_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(compare_action["a" /* actionTypes */].GET_COMPARE_LIST, getCompareListSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(compare_action["a" /* actionTypes */].ADD_ITEM_COMPARE, saga_addItemSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(compare_action["a" /* actionTypes */].REMOVE_ITEM_COMPARE, saga_removeItemSaga)]);
}
// CONCATENATED MODULE: ./store/wishlist/saga.js




const wishlist_saga_modalSuccess = type => {
  external_antd_["notification"][type]({
    message: 'Added to wishlisht!',
    description: 'This product has been added to wishlist!'
  });
};

const wishlist_saga_modalWarning = type => {
  external_antd_["notification"][type]({
    message: 'Removed from wishlist',
    description: 'This product has been removed from wishlist!'
  });
};

function* getWishlistListSaga() {
  try {
    const localWishlistList = JSON.parse(localStorage.getItem('persist:martfury')).wishlist;
    yield Object(effects_["put"])(Object(wishlist_action["c" /* getWishlistListSuccess */])(localWishlistList));
  } catch (err) {
    console.log(err);
  }
}

function* addItemToWishlistSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localWishlist = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).wishlist);
    let existItem = localWishlist.wishlistItems.find(item => item.id === product.id);

    if (!existItem) {
      localWishlist.wishlistItems.push(product);
      localWishlist.wishlistTotal++;
      yield Object(effects_["put"])(Object(wishlist_action["e" /* updateWishlistListSuccess */])(localWishlist));
      wishlist_saga_modalSuccess('success');
    }
  } catch (err) {
    console.log(err);
  }
}

function* removeItemWishlistSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localWishlist = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).wishlist);
    let index = localWishlist.wishlistItems.indexOf(product);
    localWishlist.wishlistTotal = localWishlist.wishlistTotal - 1;
    localWishlist.wishlistItems.splice(index, 1);
    yield Object(effects_["put"])(Object(wishlist_action["e" /* updateWishlistListSuccess */])(localWishlist));
    wishlist_saga_modalWarning('warning');
  } catch (err) {
    console.log(err);
  }
}

function* clearWishlistListSaga() {
  try {
    const emptyCart = {
      wishlistItems: [],
      wishlistTotal: 0
    };
    yield Object(effects_["put"])(Object(wishlist_action["e" /* updateWishlistListSuccess */])(emptyCart));
  } catch (err) {
    console.log(err);
  }
}

function* wishlist_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(wishlist_action["a" /* actionTypes */].GET_WISHLIST_LIST, getWishlistListSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(wishlist_action["a" /* actionTypes */].ADD_ITEM_WISHLISH, addItemToWishlistSaga)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(wishlist_action["a" /* actionTypes */].REMOVE_ITEM_WISHLISH, removeItemWishlistSaga)]);
}
// EXTERNAL MODULE: ./repositories/CollectionRepository.js
var CollectionRepository = __webpack_require__("Crg1");

// CONCATENATED MODULE: ./store/collection/saga.js




Object(external_es6_promise_["polyfill"])();

function* getCollections({
  payload
}) {
  try {
    const data = yield Object(effects_["call"])(CollectionRepository["a" /* default */].getCollections, payload);
    yield Object(effects_["put"])(Object(collection_action["c" /* getCollectionsSuccess */])(data));
  } catch (err) {
    console.log(err);
  }
}

function* getCollectionByCategories({
  payload
}) {
  try {
    const data = yield Object(effects_["call"])(CollectionRepository["a" /* default */].getCategoriesBySlug, payload);
    yield Object(effects_["put"])(Object(collection_action["b" /* getCategoriesSuccess */])(data));
  } catch (err) {
    console.log(err);
  }
}

function* collection_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(collection_action["a" /* actionTypes */].GET_COLLECTIONS, getCollections)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(collection_action["a" /* actionTypes */].GET_CATEGORIES, getCollectionByCategories)]);
}
// EXTERNAL MODULE: ./repositories/MediaRepository.js
var MediaRepository = __webpack_require__("IvGD");

// CONCATENATED MODULE: ./store/media/saga.js




Object(external_es6_promise_["polyfill"])();

function* saga_getBannersBySlugs({
  payload
}) {
  try {
    const data = yield Object(effects_["call"])(MediaRepository["a" /* default */].getBannersBySlugs, payload);
    yield Object(effects_["put"])(getBannersSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

function* saga_getPromotionsBySlugs({
  payload
}) {
  try {
    const data = yield Object(effects_["call"])(MediaRepository["a" /* default */].getPromotionsBySlugs, payload);
    yield Object(effects_["put"])(getPromotionsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

function* media_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(action_actionTypes.GET_BANNERS, saga_getBannersBySlugs)]);
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(action_actionTypes.GET_PROMOTIONS, saga_getPromotionsBySlugs)]);
}
// CONCATENATED MODULE: ./store/app/saga.js



function* saga_switchDemoPanel({
  payload
}) {
  try {
    console.log(payload.payload);
    yield Object(effects_["put"])(switchDemoPanelSuccess(payload));
  } catch (err) {
    console.log(err);
  }
}

function* app_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["takeEvery"])(app_action_actionTypes.SWITCH_DEMO_PANEL, saga_switchDemoPanel)]);
}
// CONCATENATED MODULE: ./store/rootSaga.js











function* rootSaga_rootSaga() {
  yield Object(effects_["all"])([rootSaga(), saga_rootSaga(), setting_saga_rootSaga(), cart_saga_rootSaga(), auth_saga_rootSaga(), compare_saga_rootSaga(), wishlist_saga_rootSaga(), collection_saga_rootSaga(), media_saga_rootSaga(), app_saga_rootSaga()]);
}
// CONCATENATED MODULE: ./store/store.js







const bindMiddleware = middleware => {
  if (false) {}

  return Object(external_redux_["applyMiddleware"])(...middleware);
};

const persistConfig = {
  key: 'martfury',
  storage: storage_default.a,
  whitelist: ['cart', 'compare', 'auth', 'wishlist']
};
const persistedReducer = Object(external_redux_persist_["persistReducer"])(persistConfig, rootReducer);

function configureStore(initialState) {
  const sagaMiddleware = external_redux_saga_default()();
  const store = Object(external_redux_["createStore"])(persistedReducer, initialState, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(rootSaga_rootSaga);
  return store;
}

/* harmony default export */ var store_store = (configureStore);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/layouts/modules/Head.jsx





const StyleSheets = () => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
    children: "Martfury - React eCommerce Template"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
    rel: "shortcut icon",
    href: "/static/img/favi.png"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
    rel: "icon",
    href: "/static/img/favi.png",
    sizes: "32x32"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
    rel: "icon",
    href: "/static/img/favi.png",
    sizes: "192x192"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
    rel: "apple-touch-icon-precomposed",
    href: "/static/img/favi.png"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    name: "format-detection",
    content: "telephone=no"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    name: "author",
    content: "nouthemes"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    name: "keywords",
    content: "Martfury, React, eCommerce, Template"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    name: "description",
    content: "Martfury - React eCommerce Template"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
    href: "https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;subset=latin-ext",
    rel: "stylesheet"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
    rel: "stylesheet",
    href: "/static/fonts/Linearicons/Font/demo-files/demo.css"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
    rel: "stylesheet",
    href: "/static/fonts/font-awesome/css/font-awesome.min.css"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/bootstrap.min.css"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/slick.min.css"
  })]
});

/* harmony default export */ var Head = (StyleSheets);
// CONCATENATED MODULE: ./components/layouts/DefaultLayout.jsx







const DefaultLayout = ({
  children
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
  className: "layout--default",
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Head, {}), children, /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    id: "loader-wrapper",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "loader-section section-left"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "loader-section section-right"
    })]
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["BackTop"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: "ps-btn--backtop",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
        className: "icon-arrow-up"
      })
    })
  })]
});

/* harmony default export */ var layouts_DefaultLayout = (DefaultLayout);
// EXTERNAL MODULE: ./scss/style.scss
var style = __webpack_require__("AmNh");

// EXTERNAL MODULE: ./scss/home-default.scss
var home_default = __webpack_require__("SqlY");

// EXTERNAL MODULE: ./scss/market-place-1.scss
var market_place_1 = __webpack_require__("Gska");

// EXTERNAL MODULE: ./scss/market-place-2.scss
var market_place_2 = __webpack_require__("Het6");

// EXTERNAL MODULE: ./scss/market-place-3.scss
var market_place_3 = __webpack_require__("eDIf");

// EXTERNAL MODULE: ./scss/market-place-4.scss
var market_place_4 = __webpack_require__("tf9W");

// EXTERNAL MODULE: ./scss/electronic.scss
var electronic = __webpack_require__("NOMj");

// EXTERNAL MODULE: ./scss/furniture.scss
var furniture = __webpack_require__("NZ7S");

// EXTERNAL MODULE: ./scss/organic.scss
var organic = __webpack_require__("cqNT");

// EXTERNAL MODULE: ./scss/technology.scss
var technology = __webpack_require__("JHtx");

// EXTERNAL MODULE: ./scss/autopart.scss
var autopart = __webpack_require__("6XsT");

// EXTERNAL MODULE: ./scss/custom.scss
var custom = __webpack_require__("VtRA");

// CONCATENATED MODULE: ./pages/_app.jsx


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























class _app_MyApp extends app_default.a {
  constructor(props) {
    super(props);
    this.persistor = Object(external_redux_persist_["persistStore"])(props.store);
  }

  componentDidMount() {
    setTimeout(function () {
      document.getElementById('__next').classList.add('loaded');
    }, 100);
    this.setState({
      open: true
    });
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;

    const getLayout = Component.getLayout || (page => /*#__PURE__*/Object(jsx_runtime_["jsx"])(layouts_DefaultLayout, {
      children: page
    }));

    return getLayout( /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_redux_["Provider"], {
      store: store,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["PersistGate"], {
        loading: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps)),
        persistor: this.persistor,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))
      })
    }));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(store_store)(external_next_redux_saga_default()(_app_MyApp)));

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZzbE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return changeCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return changeCurrencySuccess; });
const actionTypes = {
  CHANGE_CURRENCY: 'CHANGE_CURRENCY',
  CHANGE_CURRENCY_SUCCESS: 'CHANGE_CURRENCY_SUCCESS'
};
function changeCurrency(currency) {
  return {
    type: actionTypes.CHANGE_CURRENCY,
    currency
  };
}
function changeCurrencySuccess(currency) {
  return {
    type: actionTypes.CHANGE_CURRENCY_SUCCESS,
    currency
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser???s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cqNT":
/***/ (function(module, exports) {



/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eDIf":
/***/ (function(module, exports) {



/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won???t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fg/j":
/***/ (function(module) {

module.exports = JSON.parse("{\"blogCategories\":[{\"id\":\"1\",\"text\":\"Business\"},{\"id\":\"2\",\"text\":\"Entertaiment\"},{\"id\":\"3\",\"text\":\"Fashion\"},{\"id\":\"4\",\"text\":\"Life style\"},{\"id\":\"5\",\"text\":\"Others\"},{\"id\":\"6\",\"text\":\"Technology\"},{\"id\":\"7\",\"text\":\"Others\"}],\"postFeatures\":{\"id\":\"1\",\"title\":\"Harman Kadon Onyx Studio Mini, Reviews & Experiences\",\"thumbnail\":\"/static/img/blog/grid/large.jpg\",\"type\":\"large\",\"categories\":[\"Technology\"]},\"posts\":[{\"id\":\"2\",\"title\":\"Experience Great Sound With Beats???s Headphone\",\"thumbnail\":\"/static/img/blog/grid/1.jpg\",\"type\":\"normal\",\"badge\":\"icon-volume-high\",\"categories\":[{\"id\":\"2\",\"text\":\"Entertaiment\"},{\"id\":\"6\",\"text\":\"Technology\"}]},{\"id\":\"3\",\"title\":\"Products Necessery For Mom\",\"thumbnail\":\"/static/img/blog/grid/2.jpg\",\"type\":\"normal\",\"categories\":[{\"id\":\"4\",\"text\":\"Life style\"}]},{\"id\":\"4\",\"title\":\"Home Interior: Modern Style 2017\",\"thumbnail\":\"/static/img/blog/grid/3.jpg\",\"type\":\"normal\",\"categories\":[{\"id\":\"4\",\"text\":\"Life style\"}]},{\"id\":\"5\",\"title\":\"DeerCo ??? A New Look About Startup In Product Manufacture Field7\",\"thumbnail\":\"/static/img/blog/grid/4.jpg\",\"type\":\"normal\",\"badge\":\"icon-picture\",\"categories\":[{\"id\":\"2\",\"text\":\"Entertaiment\"}]},{\"id\":\"6\",\"title\":\"B&O Play ??? Best Headphone For You\",\"thumbnail\":\"/static/img/blog/grid/5.jpg\",\"type\":\"normal\",\"badge\":\"icon-camera-play\",\"categories\":[{\"id\":\"6\",\"text\":\"Technology\"}]},{\"id\":\"7\",\"title\":\"Unique Products For Your Kitchen From IKEA Design\",\"thumbnail\":\"/static/img/blog/grid/6.jpg\",\"type\":\"normal\",\"categories\":[{\"id\":\"1\",\"text\":\"Business\"},{\"id\":\"6\",\"text\":\"Technology\"}]}],\"recentPosts\":[{\"id\":\"3\",\"title\":\"Products Necessery For Mom\",\"thumbnail\":\"/static/img/blog/grid/2.jpg\",\"type\":\"normal\",\"categories\":[{\"id\":\"4\",\"text\":\"Life style\"}]},{\"id\":\"4\",\"title\":\"Home Interior: Modern Style 2017\",\"thumbnail\":\"/static/img/blog/grid/3.jpg\",\"type\":\"normal\",\"categories\":[{\"id\":\"4\",\"text\":\"Life style\"}]},{\"id\":\"5\",\"title\":\"DeerCo ??? A New Look About Startup In Product Manufacture Field7\",\"thumbnail\":\"/static/img/blog/grid/4.jpg\",\"type\":\"normal\",\"badge\":\"icon-picture\",\"categories\":[{\"id\":\"2\",\"text\":\"Entertaiment\"}]},{\"id\":\"6\",\"title\":\"B&O Play ??? Best Headphone For You\",\"thumbnail\":\"/static/img/blog/grid/5.jpg\",\"type\":\"normal\",\"badge\":\"icon-camera-play\",\"categories\":[{\"id\":\"6\",\"text\":\"Technology\"}]}]}");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "pEZS":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "pU5j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basePostUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return baseStoreURL; });
/* unused harmony export customHeaders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return localBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return localUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return serializeQuery; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const localDomain = 'http://ec2-175-41-175-65.ap-southeast-1.compute.amazonaws.com'; // API for products

const baseDomain = 'https://beta.apinouthemes.com'; // API for products

const basePostUrl = 'https://beta.apinouthemes.com'; // API for post

const baseStoreURL = 'https://beta.apinouthemes.com'; // API for vendor(store)

const customHeaders = {
  Accept: 'application/json'
};
const baseUrl = `${baseDomain}`;
const localBaseUrl = `${localDomain}`;
/* harmony default export */ __webpack_exports__["d"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseUrl,
  headers: customHeaders
}));
const localUrl = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  localBaseUrl,
  headers: customHeaders
});
const serializeQuery = query => {
  return Object.keys(query).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`).join('&');
};

/***/ }),

/***/ "pv/X":
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),

/***/ "q8Yi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* unused harmony export getCompareList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCompareListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addItemToCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeCompareItem; });
/* unused harmony export clearCompare */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateCompareListSuccess; });
const actionTypes = {
  GET_COMPARE_LIST: 'GET_COMPARE_LIST',
  GET_COMPARE_LIST_SUCCESS: 'GET_COMPARE_LIST_SUCCESS',
  GET_COMPARE_LIST_ERROR: 'GET_COMPARE_LIST_ERROR',
  ADD_ITEM_COMPARE: 'ADD_ITEM_COMPARE',
  REMOVE_ITEM_COMPARE: 'REMOVE_ITEM_COMPARE',
  UPDATE_COMPARE_LIST: 'UPDATE_COMPARE_LIST',
  UPDATE_COMPARE_LIST_SUCCESS: 'UPDATE_COMPARE_LIST_SUCCESS',
  UPDATE_COMPARE_LIST_ERROR: 'UPDATE_COMPARE_LIST_ERROR',
  CLEAR_COMPARE_LIST: 'CLEAR_COMPARE_LIST'
};
function getCompareList() {
  return {
    type: actionTypes.GET_COMPARE_LIST
  };
}
function getCompareListSuccess(data) {
  return {
    type: actionTypes.GET_COMPARE_LIST_SUCCESS,
    data
  };
}
function addItemToCompare(product) {
  return {
    type: actionTypes.ADD_ITEM_COMPARE,
    product
  };
}
function removeCompareItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM_COMPARE,
    product
  };
}
function clearCompare() {
  return {
    type: actionTypes.CLEAR_CART
  };
}
function updateCompareListSuccess(payload) {
  return {
    type: actionTypes.UPDATE_COMPARE_LIST_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "tf9W":
/***/ (function(module, exports) {



/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ypqY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* unused harmony export getProducts */
/* unused harmony export getTotalProducts */
/* unused harmony export getBrands */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBrandsSuccess; });
/* unused harmony export getProductCategories */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductCategoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getTotalProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProductByKeywordsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getSingleProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getProductsError; });
/* unused harmony export getProductsByCategory */
/* unused harmony export getProductsByBrand */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getProductsByKeyword; });
/* unused harmony export getProductsById */
/* unused harmony export getProductsByPrice */
const actionTypes = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR',
  GET_PRODUCTS_BY_CATEGORY: 'GET_PRODUCTS_BY_CATEGORY',
  GET_PRODUCTS_BY_PRICE_RANGE: 'GET_PRODUCTS_BY_PRICE_RANGE',
  GET_PRODUCTS_BY_BRAND: 'GET_PRODUCTS_BY_BRAND',
  GET_PRODUCTS_BY_KEYWORD: 'GET_PRODUCTS_BY_KEYWORD',
  GET_PRODUCTS_BY_KEYWORD_SUCCESS: 'GET_PRODUCTS_BY_KEYWORD_SUCCESS',
  GET_PRODUCT_BY_ID: 'GET_PRODUCT_BY_ID',
  GET_PRODUCT_BY_ID_SUCCESS: 'GET_PRODUCT_BY_ID_SUCCESS',
  GET_TOTAL_OF_PRODUCTS: 'GET_TOTAL_OF_PRODUCTS',
  GET_TOTAL_OF_PRODUCTS_SUCCESS: 'GET_TOTAL_OF_PRODUCTS_SUCCESS',
  GET_BRANDS: 'GET_BRANDS',
  GET_BRANDS_SUCCESS: 'GET_BRANDS_SUCCESS',
  GET_PRODUCT_CATEGORIES: 'GET_PRODUCT_CATEGORIES',
  GET_PRODUCT_CATEGORIES_SUCCESS: 'GET_PRODUCT_CATEGORIES_SUCCESS'
};
function getProducts(payload) {
  return {
    type: actionTypes.GET_PRODUCTS,
    payload
  };
}
function getTotalProducts() {
  return {
    type: actionTypes.GET_TOTAL_OF_PRODUCTS
  };
}
function getBrands() {
  return {
    type: actionTypes.GET_BRANDS
  };
}
function getBrandsSuccess(payload) {
  return {
    type: actionTypes.GET_BRANDS_SUCCESS,
    payload
  };
}
function getProductCategories() {
  return {
    type: actionTypes.GET_PRODUCT_CATEGORIES
  };
}
function getProductCategoriesSuccess(payload) {
  return {
    type: actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS,
    payload
  };
}
function getTotalProductsSuccess(payload) {
  return {
    type: actionTypes.GET_TOTAL_OF_PRODUCTS_SUCCESS,
    payload
  };
}
function getProductsSuccess(data) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    data
  };
}
function getProductByKeywordsSuccess(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS,
    payload
  };
}
function getSingleProductsSuccess(data) {
  return {
    type: actionTypes.GET_PRODUCT_BY_ID_SUCCESS,
    data
  };
}
function getProductsError(error) {
  return {
    type: actionTypes.GET_PRODUCTS_ERROR,
    error
  };
}
function getProductsByCategory(category) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_CATEGORY,
    category
  };
}
function getProductsByBrand(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_BRAND,
    payload
  };
}
function getProductsByKeyword(keyword) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_KEYWORD,
    keyword
  };
}
function getProductsById(id) {
  return {
    type: actionTypes.GET_PRODUCT_BY_ID,
    id
  };
}
function getProductsByPrice(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_PRICE_RANGE,
    payload
  };
}

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });