webpackHotUpdate_N_E("pages/index",{

/***/ "./repositories/Repository.js":
/*!************************************!*\
  !*** ./repositories/Repository.js ***!
  \************************************/
/*! exports provided: basePostUrl, baseStoreURL, customHeaders, baseUrl, localBaseUrl, default, localUrl, serializeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basePostUrl", function() { return basePostUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseStoreURL", function() { return baseStoreURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customHeaders", function() { return customHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localBaseUrl", function() { return localBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localUrl", function() { return localUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeQuery", function() { return serializeQuery; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var localDomain = 'http://ec2-175-41-175-65.ap-southeast-1.compute.amazonaws.com'; // API for products

var baseDomain = 'https://beta.apinouthemes.com'; // API for products

var basePostUrl = 'https://beta.apinouthemes.com'; // API for post

var baseStoreURL = 'https://beta.apinouthemes.com'; // API for vendor(store)

var customHeaders = {
  Accept: 'application/json'
};
var baseUrl = "".concat(baseDomain);
var localBaseUrl = "".concat(localDomain);
/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseUrl: baseUrl,
  headers: customHeaders
}));
var localUrl = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  localBaseUrl: localBaseUrl,
  headers: customHeaders
});
var serializeQuery = function serializeQuery(query) {
  return Object.keys(query).map(function (key) {
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(query[key]));
  }).join('&');
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVwb3NpdG9yaWVzL1JlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsibG9jYWxEb21haW4iLCJiYXNlRG9tYWluIiwiYmFzZVBvc3RVcmwiLCJiYXNlU3RvcmVVUkwiLCJjdXN0b21IZWFkZXJzIiwiQWNjZXB0IiwiYmFzZVVybCIsImxvY2FsQmFzZVVybCIsImF4aW9zIiwiY3JlYXRlIiwiaGVhZGVycyIsImxvY2FsVXJsIiwic2VyaWFsaXplUXVlcnkiLCJxdWVyeSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLElBQU1BLFdBQVcsR0FBRywrREFBcEIsQyxDQUFxRjs7QUFDckYsSUFBTUMsVUFBVSxHQUFHLCtCQUFuQixDLENBQW9EOztBQUM3QyxJQUFNQyxXQUFXLEdBQUcsK0JBQXBCLEMsQ0FBcUQ7O0FBQ3JELElBQU1DLFlBQVksR0FBRywrQkFBckIsQyxDQUFzRDs7QUFFdEQsSUFBTUMsYUFBYSxHQUFHO0FBQ3pCQyxRQUFNLEVBQUU7QUFEaUIsQ0FBdEI7QUFJQSxJQUFNQyxPQUFPLGFBQU1MLFVBQU4sQ0FBYjtBQUVBLElBQU1NLFlBQVksYUFBTVAsV0FBTixDQUFsQjtBQUVRUSwyR0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDeEJILFNBQU8sRUFBUEEsT0FEd0I7QUFFeEJJLFNBQU8sRUFBRU47QUFGZSxDQUFiLENBQWY7QUFLTyxJQUFNTyxRQUFRLEdBQUlILDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUNsQ0YsY0FBWSxFQUFaQSxZQURrQztBQUVsQ0csU0FBTyxFQUFFTjtBQUZ5QixDQUFiLENBQWxCO0FBS0EsSUFBTVEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDckMsU0FBT0MsTUFBTSxDQUFDQyxJQUFQLENBQVlGLEtBQVosRUFDRkcsR0FERSxDQUVDLFVBQUNDLEdBQUQ7QUFBQSxxQkFDT0Msa0JBQWtCLENBQUNELEdBQUQsQ0FEekIsY0FDa0NDLGtCQUFrQixDQUFDTCxLQUFLLENBQUNJLEdBQUQsQ0FBTixDQURwRDtBQUFBLEdBRkQsRUFLRkUsSUFMRSxDQUtHLEdBTEgsQ0FBUDtBQU1ILENBUE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWYwZWRkYWI2YjJkYjc3NDNiMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5jb25zdCBsb2NhbERvbWFpbiA9ICdodHRwOi8vZWMyLTE3NS00MS0xNzUtNjUuYXAtc291dGhlYXN0LTEuY29tcHV0ZS5hbWF6b25hd3MuY29tJzsgLy8gQVBJIGZvciBwcm9kdWN0c1xuY29uc3QgYmFzZURvbWFpbiA9ICdodHRwczovL2JldGEuYXBpbm91dGhlbWVzLmNvbSc7IC8vIEFQSSBmb3IgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBiYXNlUG9zdFVybCA9ICdodHRwczovL2JldGEuYXBpbm91dGhlbWVzLmNvbSc7IC8vIEFQSSBmb3IgcG9zdFxuZXhwb3J0IGNvbnN0IGJhc2VTdG9yZVVSTCA9ICdodHRwczovL2JldGEuYXBpbm91dGhlbWVzLmNvbSc7IC8vIEFQSSBmb3IgdmVuZG9yKHN0b3JlKVxuXG5leHBvcnQgY29uc3QgY3VzdG9tSGVhZGVycyA9IHtcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbn07XG5cbmV4cG9ydCBjb25zdCBiYXNlVXJsID0gYCR7YmFzZURvbWFpbn1gO1xuXG5leHBvcnQgY29uc3QgbG9jYWxCYXNlVXJsID0gYCR7bG9jYWxEb21haW59YFxuXG5leHBvcnQgZGVmYXVsdCBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVcmwsXG4gICAgaGVhZGVyczogY3VzdG9tSGVhZGVycyxcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9jYWxVcmwgPSAgYXhpb3MuY3JlYXRlKHtcbiAgICBsb2NhbEJhc2VVcmwsXG4gICAgaGVhZGVyczogY3VzdG9tSGVhZGVyc1xufSlcblxuZXhwb3J0IGNvbnN0IHNlcmlhbGl6ZVF1ZXJ5ID0gKHF1ZXJ5KSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHF1ZXJ5KVxuICAgICAgICAubWFwKFxuICAgICAgICAgICAgKGtleSkgPT5cbiAgICAgICAgICAgICAgICBgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX09JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnlba2V5XSl9YFxuICAgICAgICApXG4gICAgICAgIC5qb2luKCcmJyk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==