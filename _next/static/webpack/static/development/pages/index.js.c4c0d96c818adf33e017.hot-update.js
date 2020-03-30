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
/* harmony import */ var _commons_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commons/list */ "./src/commons/list.js");
/* harmony import */ var _commons_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commons/const */ "./src/commons/const.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
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
      lineNumber: 16
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Close"), __jsx(Image, {
    src: _commons_const__WEBPACK_IMPORTED_MODULE_3__["backendURL"] + '/static/images/' + id + '.jpg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ModalMap__Wrapper",
  componentId: "sc-18kquho-0"
})(["left:5%;padding:20px;position:fixed;top:0;height:50%;width:50%;z-index:99999999;background:#222;border:1px solid #eee;overflow:auto;color:#fff;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "ModalMap__Image",
  componentId: "sc-18kquho-1"
})(["left:5%;padding:20px;position:fixed;top:0;height:50%;width:50%;z-index:99999999;background:#222;border:1px solid #eee;overflow:auto;color:#fff;"]);

/***/ })

})
//# sourceMappingURL=index.js.c4c0d96c818adf33e017.hot-update.js.map