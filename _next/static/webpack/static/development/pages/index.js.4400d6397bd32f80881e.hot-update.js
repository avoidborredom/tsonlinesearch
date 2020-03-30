webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _commons_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commons/list */ "./src/commons/list.js");
/* harmony import */ var _static_datas_npcmap_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/datas/npcmap.json */ "./static/datas/npcmap.json");
var _static_datas_npcmap_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/datas/npcmap.json */ "./static/datas/npcmap.json", 1);
/* harmony import */ var _static_datas_npc_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/datas/npc.json */ "./static/datas/npc.json");
var _static_datas_npc_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/datas/npc.json */ "./static/datas/npc.json", 1);
/* harmony import */ var _commons_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commons/query */ "./src/commons/query.js");
/* harmony import */ var _pages_components_NpcMapTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/components/NpcMapTable */ "./src/pages/components/NpcMapTable.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
var _jsxFileName = "/Users/david/dev/self/tssearchdata/src/components/Modal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















var columnsKey = Object.keys(_commons_list__WEBPACK_IMPORTED_MODULE_2__["npcColumns"]);
var npcMapColumnsKey = Object.keys(_commons_list__WEBPACK_IMPORTED_MODULE_2__["npcMapColumns"]);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var classes = useStyles();
  var id = props.id,
      onClose = props.onClose;
  if (!id) return null;
  var npc = Object(_commons_query__WEBPACK_IMPORTED_MODULE_5__["getDataById"])(id, {
    data: _static_datas_npc_json__WEBPACK_IMPORTED_MODULE_4__
  });
  var npcMap = Object(_commons_query__WEBPACK_IMPORTED_MODULE_5__["getDataById"])(id, {
    data: _static_datas_npcmap_json__WEBPACK_IMPORTED_MODULE_3__
  }, 'id_npc');
  return __jsx(Wrapper, {
    bg: props.bg || 'white',
    borderRadius: "8px",
    borderColor: "rgba(0,0,0,.1)",
    border: "1px solid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    c: true,
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Close"), __jsx(Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(H4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Npc Info"), __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, columnsKey.map(function (item, key) {
    return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, _commons_list__WEBPACK_IMPORTED_MODULE_2__["npcColumns"][item].label);
  }))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, !npc.length ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "...") : npc.map(function (item, key) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: classes['element' + item.element],
      key: key,
      borderTop: "1px solid",
      borderColor: "gray2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, columnsKey.map(function (object, key2) {
      return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: key2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, item[object]);
    }));
  })))), __jsx(H4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Map Locations:"), __jsx(_pages_components_NpcMapTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
    columns: _commons_list__WEBPACK_IMPORTED_MODULE_2__["npcMapColumns"],
    columnsKey: npcMapColumnsKey,
    items: npcMap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })));
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Modal__Wrapper",
  componentId: "sc-10fn7bn-0"
})(["left:5%;padding:20px;position:fixed;top:0;height:100%;width:90%;z-index:99999999;background:#222;border:1px solid #eee;overflow:auto;color:#fff;"]);
var Column = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Modal__Column",
  componentId: "sc-10fn7bn-1"
})([""]);
var H4 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4.withConfig({
  displayName: "Modal__H4",
  componentId: "sc-10fn7bn-2"
})(["margin:10px 0;border-top:1px solid #eee;padding-top:20px;"]);
var bgRed = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_15__["red"][900];
var bgGreen = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_15__["green"][900];
var bgBlue = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_15__["blue"][900];
var bgBrown = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_15__["brown"][900];
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
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
//# sourceMappingURL=index.js.4400d6397bd32f80881e.hot-update.js.map