webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ModalMap.js":
/*!************************************!*\
  !*** ./src/components/ModalMap.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _commons_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commons/const */ "./src/commons/const.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
var _jsxFileName = "/Users/david/dev/self/tssearchdata/src/components/ModalMap.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var id = props.id,
      onClose = props.onClose;
  if (!id) return null;
  return __jsx(Wrapper, {
    bg: props.bg || 'white',
    borderRadius: "8px",
    borderColor: "rgba(0,0,0,.1)",
    border: "1px solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Close"), __jsx(Image, {
    src: _commons_const__WEBPACK_IMPORTED_MODULE_2__["backendURL"] + '/static/images/' + id + '.jpg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ModalMap__Wrapper",
  componentId: "sc-18kquho-0"
})(["left:5%;padding:20px;position:fixed;top:0;height:80%;width:80%;z-index:99999999;background:#222;border:1px solid #eee;overflow:auto;color:#fff;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "ModalMap__Image",
  componentId: "sc-18kquho-1"
})(["display:block;width:100%;height:auto;"]);

/***/ })

})
//# sourceMappingURL=index.js.013ab82fabff92eeb3c8.hot-update.js.map