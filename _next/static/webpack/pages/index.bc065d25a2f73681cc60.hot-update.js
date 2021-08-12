webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/logo */ \"./src/components/logo.js\");\n/* harmony import */ var assets_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var assets_logo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_logo_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mobile_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mobile-drawer */ \"./src/components/header/mobile-drawer.js\");\n/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header.data */ \"./src/components/header/header.data.js\");\n\n\nvar _jsxFileName = \"/Users/shissam/Desktop/dermi next/src/components/header/header.js\",\n    _templateObject;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\n\nfunction Header(_ref) {\n  var _this = this;\n\n  var className = _ref.className;\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"header\", {\n    sx: styles.header,\n    className: className,\n    id: \"header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    sx: styles.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(components_logo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    src: assets_logo_png__WEBPACK_IMPORTED_MODULE_6___default.a,\n    style: {\n      width: \"60px\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }), \" \", Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"h1\", {\n    sx: {\n      fontSize: \"20px\",\n      padding: \"0\",\n      fontStylE: fontStylE\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, \"Dermi Beauty\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    as: \"nav\",\n    sx: styles.nav,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, _header_data__WEBPACK_IMPORTED_MODULE_8__[\"default\"].map(function (menuItem, i) {\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n      activeClass: \"active\",\n      to: menuItem.path,\n      spy: true,\n      smooth: true,\n      offset: -70,\n      duration: 500,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }\n    }, menuItem.label);\n  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    variant: \"primary\",\n    style: {\n      backgroundColor: \"orange\",\n      padding: \"9px\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, \"Termin \\uD83D\\uDD1C\")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  })));\n}\n_c = Header;\nvar positionAnim = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"keyframes\"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  from {\\n    position: fixed;\\n    opacity: 1;\\n  }\\n\\n  to {\\n    position: absolute;\\n    opacity: 1;\\n    transition: all 0.4s ease;\\n  }\\n\"])));\nvar styles = {\n  header: {\n    color: \"text\",\n    fontWeight: \"body\",\n    py: \"2px\",\n    px: \"0px\",\n    width: \"100%\",\n    position: \"absolute\",\n    top: 0,\n    left: 0,\n    backgroundColor: \"transparent\",\n    transition: \"all 0.4s ease\",\n    animation: \"\".concat(positionAnim, \" 0.4s ease\"),\n    \".donate__btn\": {\n      flexShrink: 0,\n      mr: [15, 20, null, null, 0],\n      ml: [\"auto\", null, null, null, 0]\n    },\n    \"&.sticky\": {\n      position: \"fixed\",\n      backgroundColor: \"background\",\n      color: \"#000000\",\n      boxShadow: \"0 1px 2px rgba(0, 0, 0, 0.06)\",\n      py: \"2px\",\n      \"nev > a\": {\n        color: \"text\"\n      }\n    }\n  },\n  container: {\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"space-between\"\n  },\n  nav: {\n    mx: \"auto\",\n    display: \"none\",\n    \"@media screen and (min-width: 1024px)\": {\n      display: \"block\"\n    },\n    a: {\n      fontSize: 2,\n      fontWeight: \"body\",\n      px: 5,\n      cursor: \"pointer\",\n      lineHeight: \"1.2\",\n      transition: \"all 0.15s\",\n      \"&:hover\": {\n        color: \"primary\"\n      },\n      \"&.active\": {\n        color: \"primary\"\n      }\n    }\n  },\n  buttons: {\n    primary: {\n      color: \"orange\",\n      bg: \"\",\n      borderColor: \"gold\",\n      \"&:hover\": {\n        bg: \"text\"\n      }\n    },\n    secondary: {\n      color: \"background\",\n      bg: \"secondary\"\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcz8xMjBlIl0sIm5hbWVzIjpbIkhlYWRlciIsImNsYXNzTmFtZSIsInN0eWxlcyIsImhlYWRlciIsImNvbnRhaW5lciIsIkxvZ29EYXJrIiwid2lkdGgiLCJmb250U2l6ZSIsInBhZGRpbmciLCJmb250U3R5bEUiLCJuYXYiLCJtZW51SXRlbXMiLCJtYXAiLCJtZW51SXRlbSIsImkiLCJwYXRoIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbkFuaW0iLCJrZXlmcmFtZXMiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJweSIsInB4IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNpdGlvbiIsImFuaW1hdGlvbiIsImZsZXhTaHJpbmsiLCJtciIsIm1sIiwiYm94U2hhZG93IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm14IiwiYSIsImN1cnNvciIsImxpbmVIZWlnaHQiLCJidXR0b25zIiwicHJpbWFyeSIsImJnIiwiYm9yZGVyQ29sb3IiLCJzZWNvbmRhcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUErQjtBQUFBOztBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUM1QyxTQUNFO0FBQVEsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQW5CO0FBQTJCLGFBQVMsRUFBRUYsU0FBdEM7QUFBaUQsTUFBRSxFQUFDLFFBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFXLE1BQUUsRUFBRUMsTUFBTSxDQUFDRSxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsdURBQUQ7QUFBTSxPQUFHLEVBQUVDLHNEQUFYO0FBQXFCLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFDb0QsR0FEcEQsRUFFRTtBQUFJLE1BQUUsRUFBRTtBQUFFQyxjQUFRLEVBQUUsTUFBWjtBQUFvQkMsYUFBTyxFQUFFLEdBQTdCO0FBQWtDQyxlQUFTLEVBQVRBO0FBQWxDLEtBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixFQUdFLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFDLEtBQVQ7QUFBZSxNQUFFLEVBQUVQLE1BQU0sQ0FBQ1EsR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxvREFBUyxDQUFDQyxHQUFWLENBQWMsVUFBQ0MsUUFBRCxFQUFXQyxDQUFYO0FBQUEsV0FDYixxREFBQyxpREFBRDtBQUNFLGlCQUFXLEVBQUMsUUFEZDtBQUVFLFFBQUUsRUFBRUQsUUFBUSxDQUFDRSxJQUZmO0FBR0UsU0FBRyxFQUFFLElBSFA7QUFJRSxZQUFNLEVBQUUsSUFKVjtBQUtFLFlBQU0sRUFBRSxDQUFDLEVBTFg7QUFNRSxjQUFRLEVBQUUsR0FOWjtBQU9FLFNBQUcsRUFBRUQsQ0FQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BU0dELFFBQVEsQ0FBQ0csS0FUWixDQURhO0FBQUEsR0FBZCxDQURILENBSEYsRUFrQkUscURBQUMsNkNBQUQ7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsK0NBQUQ7QUFDRSxXQUFPLEVBQUMsU0FEVjtBQUVFLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxFQUFFLFFBQW5CO0FBQTZCVCxhQUFPLEVBQUU7QUFBdEMsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBbEJGLEVBMEJFLHFEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQkYsQ0FERixDQURGO0FBZ0NEO0tBakN1QlIsTTtBQW1DeEIsSUFBTWtCLFlBQVksR0FBR0MsK0RBQUgsZ1NBQWxCO0FBYUEsSUFBTWpCLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUU7QUFDTmlCLFNBQUssRUFBRSxNQUREO0FBRU5DLGNBQVUsRUFBRSxNQUZOO0FBR05DLE1BQUUsRUFBRSxLQUhFO0FBSU5DLE1BQUUsRUFBRSxLQUpFO0FBS05qQixTQUFLLEVBQUUsTUFMRDtBQU1Oa0IsWUFBUSxFQUFFLFVBTko7QUFPTkMsT0FBRyxFQUFFLENBUEM7QUFRTkMsUUFBSSxFQUFFLENBUkE7QUFTTlQsbUJBQWUsRUFBRSxhQVRYO0FBVU5VLGNBQVUsRUFBRSxlQVZOO0FBV05DLGFBQVMsWUFBS1YsWUFBTCxlQVhIO0FBWU4sb0JBQWdCO0FBQ2RXLGdCQUFVLEVBQUUsQ0FERTtBQUVkQyxRQUFFLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLENBQXJCLENBRlU7QUFHZEMsUUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLENBQTNCO0FBSFUsS0FaVjtBQWlCTixnQkFBWTtBQUNWUCxjQUFRLEVBQUUsT0FEQTtBQUVWUCxxQkFBZSxFQUFFLFlBRlA7QUFHVkcsV0FBSyxFQUFFLFNBSEc7QUFJVlksZUFBUyxFQUFFLCtCQUpEO0FBS1ZWLFFBQUUsRUFBRSxLQUxNO0FBTVYsaUJBQVc7QUFDVEYsYUFBSyxFQUFFO0FBREU7QUFORDtBQWpCTixHQURLO0FBNkJiaEIsV0FBUyxFQUFFO0FBQ1Q2QixXQUFPLEVBQUUsTUFEQTtBQUVUQyxjQUFVLEVBQUUsUUFGSDtBQUdUQyxrQkFBYyxFQUFFO0FBSFAsR0E3QkU7QUFrQ2J6QixLQUFHLEVBQUU7QUFDSDBCLE1BQUUsRUFBRSxNQUREO0FBRUhILFdBQU8sRUFBRSxNQUZOO0FBR0gsNkNBQXlDO0FBQ3ZDQSxhQUFPLEVBQUU7QUFEOEIsS0FIdEM7QUFNSEksS0FBQyxFQUFFO0FBQ0Q5QixjQUFRLEVBQUUsQ0FEVDtBQUVEYyxnQkFBVSxFQUFFLE1BRlg7QUFHREUsUUFBRSxFQUFFLENBSEg7QUFJRGUsWUFBTSxFQUFFLFNBSlA7QUFLREMsZ0JBQVUsRUFBRSxLQUxYO0FBTURaLGdCQUFVLEVBQUUsV0FOWDtBQU9ELGlCQUFXO0FBQ1RQLGFBQUssRUFBRTtBQURFLE9BUFY7QUFVRCxrQkFBWTtBQUNWQSxhQUFLLEVBQUU7QUFERztBQVZYO0FBTkEsR0FsQ1E7QUF1RGJvQixTQUFPLEVBQUU7QUFDUEMsV0FBTyxFQUFFO0FBQ1ByQixXQUFLLEVBQUUsUUFEQTtBQUVQc0IsUUFBRSxFQUFFLEVBRkc7QUFHUEMsaUJBQVcsRUFBRSxNQUhOO0FBSVAsaUJBQVc7QUFDVEQsVUFBRSxFQUFFO0FBREs7QUFKSixLQURGO0FBU1BFLGFBQVMsRUFBRTtBQUNUeEIsV0FBSyxFQUFFLFlBREU7QUFFVHNCLFFBQUUsRUFBRTtBQUZLO0FBVEo7QUF2REksQ0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBGbGV4LCBCdXR0b24sIFN0eWxlZCwgTGluayBhcyBBIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvbG9nbyc7XG5pbXBvcnQgTG9nb0RhcmsgZnJvbSAnYXNzZXRzL2xvZ28ucG5nJztcbmltcG9ydCBNb2JpbGVEcmF3ZXIgZnJvbSAnLi9tb2JpbGUtZHJhd2VyJztcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IGNsYXNzTmFtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBzeD17c3R5bGVzLmhlYWRlcn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPVwiaGVhZGVyXCI+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPExvZ28gc3JjPXtMb2dvRGFya30gc3R5bGU9e3sgd2lkdGg6IFwiNjBweFwiIH19IC8+e1wiIFwifVxuICAgICAgICA8aDEgc3g9e3sgZm9udFNpemU6IFwiMjBweFwiLCBwYWRkaW5nOiBcIjBcIiwgZm9udFN0eWxFfX0+RGVybWkgQmVhdXR5PC9oMT5cbiAgICAgICAgPEZsZXggYXM9XCJuYXZcIiBzeD17c3R5bGVzLm5hdn0+XG4gICAgICAgICAge21lbnVJdGVtcy5tYXAoKG1lbnVJdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXG4gICAgICAgICAgICAgIHRvPXttZW51SXRlbS5wYXRofVxuICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge21lbnVJdGVtLmxhYmVsfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDxBIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIm9yYW5nZVwiLCBwYWRkaW5nOiBcIjlweFwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVGVybWluIPCflJxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9BPlxuICAgICAgICA8TW9iaWxlRHJhd2VyIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cblxuY29uc3QgcG9zaXRpb25BbmltID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICB9XG5gO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGhlYWRlcjoge1xuICAgIGNvbG9yOiBcInRleHRcIixcbiAgICBmb250V2VpZ2h0OiBcImJvZHlcIixcbiAgICBweTogXCIycHhcIixcbiAgICBweDogXCIwcHhcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjRzIGVhc2VcIixcbiAgICBhbmltYXRpb246IGAke3Bvc2l0aW9uQW5pbX0gMC40cyBlYXNlYCxcbiAgICBcIi5kb25hdGVfX2J0blwiOiB7XG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgbXI6IFsxNSwgMjAsIG51bGwsIG51bGwsIDBdLFxuICAgICAgbWw6IFtcImF1dG9cIiwgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgfSxcbiAgICBcIiYuc3RpY2t5XCI6IHtcbiAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmFja2dyb3VuZFwiLFxuICAgICAgY29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgYm94U2hhZG93OiBcIjAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpXCIsXG4gICAgICBweTogXCIycHhcIixcbiAgICAgIFwibmV2ID4gYVwiOiB7XG4gICAgICAgIGNvbG9yOiBcInRleHRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gIH0sXG4gIG5hdjoge1xuICAgIG14OiBcImF1dG9cIixcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICBcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweClcIjoge1xuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIH0sXG4gICAgYToge1xuICAgICAgZm9udFNpemU6IDIsXG4gICAgICBmb250V2VpZ2h0OiBcImJvZHlcIixcbiAgICAgIHB4OiA1LFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMS4yXCIsXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjE1c1wiLFxuICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgfSxcbiAgICAgIFwiJi5hY3RpdmVcIjoge1xuICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbnM6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBjb2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIGJnOiBcIlwiLFxuICAgICAgYm9yZGVyQ29sb3I6IFwiZ29sZFwiLFxuICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgYmc6IFwidGV4dFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgY29sb3I6IFwiYmFja2dyb3VuZFwiLFxuICAgICAgYmc6IFwic2Vjb25kYXJ5XCIsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header/header.js\n");

/***/ })

})