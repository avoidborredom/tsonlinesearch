webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/components/NpcMapTable.js":
/*!*********************************************!*\
  !*** ./src/pages/components/NpcMapTable.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Modal */ "./src/components/Modal.js");
var _jsxFileName = "/Users/david/dev/self/tssearchdata/src/pages/components/NpcMapTable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var columns = props.columns,
      columnSort = props.columnSort,
      onSort = props.onSort,
      columnsKey = props.columnsKey,
      items = props.items;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modalDisplay = _useState[0],
      showModal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      miniModalDisplay = _useState2[0],
      showMiniModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      mapImage = _useState3[0],
      setMapImage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      modalInfo = _useState4[0],
      setModalInfo = _useState4[1];

  var processLink = function processLink(processData, object) {
    if (object == 'id_npc') {
      showModal(true);
      setModalInfo(processData[object]);
    } else if (object == 'id_map') {
      var mapId = processData[object].substr(-3, "000");
      showMiniModal(true);
      setMapImage(mapId);
    }
  };

  var onClose = function onClose() {
    showModal(false);
  };

  var SortColumn = function SortColumn(_ref) {
    var item = _ref.item;
    if (onSort) return __jsx(Sort, {
      onClick: function onClick() {
        return onSort(item);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, columns[item].label, columnSort[item].reverse ? "⬇" : "⬆︎");
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, columns[item].label);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    stickyHeader: true,
    "aria-label": "sticky table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, columnsKey.map(function (item, key) {
    return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx(SortColumn, {
      item: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }));
  }))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, !items.length ? __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    colSpan: columnsKey.length,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "...")) : items.map(function (item, key) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes['element' + item['element']],
      hover: true,
      key: key,
      tabIndex: -1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, columnsKey.map(function (object, key2) {
      return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: key2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, columns[object].link ? __jsx(Link, {
        onClick: function onClick() {
          return processLink(item, object);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, item[object]) : item[object]);
    }));
  })))), modalDisplay && __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: modalInfo.title,
    id: modalInfo,
    onClose: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), modalDisplay && __jsx(MapModal, {
    title: modalInfo.title,
    id: mapImage,
    onClose: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }));
});
var Link = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "NpcMapTable__Link",
  componentId: "iz9php-0"
})(["cursor:pointer;color:#fff;text-decoration:underline;"]);
var Sort = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "NpcMapTable__Sort",
  componentId: "iz9php-1"
})(["display:block;cursor:pointer;"]);
var bgRed = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__["red"][900];
var bgGreen = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__["green"][900];
var bgBlue = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__["blue"][900];
var bgBrown = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__["brown"][900];
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  container: {
    maxHeight: 'calc(100vh - 170px)'
  },
  pagination: {
    justifyContent: 'flex-end',
    display: 'flex'
  },
  element1: {
    background: bgBrown
  },
  element2: {
    background: bgBlue
  },
  element3: {
    background: bgRed
  },
  element4: {
    background: bgGreen
  }
});

/***/ })

})
//# sourceMappingURL=index.js.e97bc70959b51215e05c.hot-update.js.map