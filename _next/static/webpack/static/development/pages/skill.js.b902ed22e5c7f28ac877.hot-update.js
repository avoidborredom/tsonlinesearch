webpackHotUpdate("static/development/pages/skill.js",{

/***/ "./src/pages/Skill.js":
/*!****************************!*\
  !*** ./src/pages/Skill.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var paginate_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! paginate-array */ "./node_modules/paginate-array/lib/paginate-array.js");
/* harmony import */ var paginate_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(paginate_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var array_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! array-sort */ "./node_modules/array-sort/index.js");
/* harmony import */ var array_sort__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(array_sort__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _commons_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../commons/list */ "./src/commons/list.js");
/* harmony import */ var _commons_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../commons/const */ "./src/commons/const.js");
/* harmony import */ var _commons_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../commons/query */ "./src/commons/query.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/lab/Pagination */ "./node_modules/@material-ui/lab/esm/Pagination/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _components_NpcTable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/NpcTable */ "./src/pages/components/NpcTable.js");


var _jsxFileName = "/Users/david/dev/self/tssearchdata/src/pages/Skill.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
















var columns = _commons_list__WEBPACK_IMPORTED_MODULE_6__["skillColumns"];
var defaultFilter = ['eng_name', "viet_name", "id", "drop_1", "drop_2", "drop_3", "drop_4", "drop_5", "drop_6"];
var display = 100;
var columnsKey = Object.keys(columns);
var field = {
  search: ""
};
var selectingFilter = false;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      data = _React$useState2[0],
      setData = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      filteredData = _React$useState4[0],
      setFilteredData = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(defaultFilter),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      filter = _React$useState6[0],
      setFilter = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    currentPage: 1,
    perPage: 100,
    total: 100,
    totalPages: 1,
    data: []
  }),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      items = _React$useState8[0],
      setItems = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(columns),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 2),
      columnSort = _React$useState10[0],
      setColumnSort = _React$useState10[1];

  var nextPage = function nextPage(page, paginateData) {
    var paginateItems;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function nextPage$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            paginateItems = paginate_array__WEBPACK_IMPORTED_MODULE_4___default()(paginateData, page, display);
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(setItems(paginateItems));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handlePaginationChange = function handlePaginationChange(value, filteredData) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handlePaginationChange$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(nextPage(value, filteredData));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var fetchData = function fetchData() {
    fetch(_commons_const__WEBPACK_IMPORTED_MODULE_7__["backendURL"] + '/static/datas/skill.json').then(function (res) {
      return res.json();
    }).then(function _callee(res) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(setData(res));

            case 2:
              nextPage(1, res);
              setFilteredData(res);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    });
  };

  var onSearch = function onSearch(e) {
    if (e.key == 'Enter') {
      var searchValue = field.search;

      if (!searchValue) {
        nextPage(1, data);
        return true;
      }

      var query = Object(_commons_query__WEBPACK_IMPORTED_MODULE_8__["getDataContains"])(searchValue, {
        data: data
      }, filter);
      nextPage(1, query);
      setFilteredData(query);
    }
  };

  var updateField = function updateField(e, key) {
    field[key] = e.target.value;
  };

  var onSort = function onSort(key) {
    var sorted;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function onSort$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            columns[key].reverse = !columns[key].reverse;
            sorted = array_sort__WEBPACK_IMPORTED_MODULE_5___default()(filteredData, key, {
              reverse: columns[key].reverse
            });
            _context4.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(setColumnSort(columns));

          case 4:
            _context4.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(nextPage(1, sorted));

          case 6:
            return _context4.abrupt("return", true);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var onSelectFilter = function onSelectFilter(event) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function onSelectFilter$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!selectingFilter) {
              _context5.next = 2;
              break;
            }

            return _context5.abrupt("return", false);

          case 2:
            selectingFilter = true;
            _context5.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(setFilter(event.target.value));

          case 5:
            selectingFilter = false;

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var renderFilter = function renderFilter() {
    return "Filter";
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchData();
  }, []);
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(StickContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    spacing: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(Search, {
    type: "text",
    placeholder: "Search",
    onChange: function onChange(e) {
      return updateField(e, 'search');
    },
    onKeyDown: onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__["default"], {
    multiple: true,
    value: filter,
    onChange: onSelectFilter,
    renderValue: renderFilter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, columnsKey.map(function (item, key) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: key,
      value: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__["default"], {
      checked: filter.indexOf(item) > -1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_13__["default"], {
      primary: columns[item].label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }));
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.pagination,
    count: items.totalPages,
    page: items.currentPage,
    onChange: function onChange(event, value) {
      return handlePaginationChange(value, filteredData);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })))), __jsx(_components_NpcTable__WEBPACK_IMPORTED_MODULE_17__["default"], {
    columns: columns,
    columnSort: columnSort,
    onSort: onSort,
    columnsKey: columnsKey,
    items: items,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }));
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Skill__Wrapper",
  componentId: "sc-114n6zp-0"
})(["padding:20px 10px;"]);
var Search = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "Skill__Search",
  componentId: "sc-114n6zp-1"
})(["width:100%;"]);
var StickContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Skill__StickContainer",
  componentId: "sc-114n6zp-2"
})(["background:#222;padding:10px;border-top:1px solid #eee;position:fixed;width:100%;top:auto;bottom:0;left:0;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "Skill__Button",
  componentId: "sc-114n6zp-3"
})(["margin:0 10px;"]);
var Link = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a.withConfig({
  displayName: "Skill__Link",
  componentId: "sc-114n6zp-4"
})(["cursor:pointer;color:#fff;text-decoration:underline;"]);
var Sort = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "Skill__Sort",
  componentId: "sc-114n6zp-5"
})(["display:block;cursor:pointer;"]);
var bgRed = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["red"][900];
var bgGreen = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["green"][900];
var bgBlue = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["blue"][900];
var bgBrown = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["brown"][900];
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])({
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
//# sourceMappingURL=skill.js.b902ed22e5c7f28ac877.hot-update.js.map