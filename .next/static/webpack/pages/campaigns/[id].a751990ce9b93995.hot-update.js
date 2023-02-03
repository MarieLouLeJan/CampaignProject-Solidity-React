"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[id]",{

/***/ "./components/ContributeForm.js":
/*!**************************************!*\
  !*** ./components/ContributeForm.js ***!
  \**************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ContributeForm = (param)=>{\n    let { address  } = param;\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorMsg, setErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [Loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onSubmit = async (e)=>{\n        e.preventDefault();\n        const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(address);\n        console.log(address);\n        setLoading(true);\n        setErrorMsg(\"\");\n        // console.log('contributor', accounts[0])\n        console.log(address);\n        console.log(\"value\", _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].utils.toWei(value, \"ether\"));\n        // try {\n        //     const accounts = await web3.eth.getAccounts();\n        //     await campaign.methods.contribute().send({\n        //         from: accounts[0],\n        //         value: web3.utils.toWei(value, 'ether')\n        //     })\n        //     Router.replaceRoute(`/campaigns/${address}`);\n        // } catch (err) {\n        //     setErrorMsg(err.message)\n        //     console.log(err)\n        // };\n        setLoading(false);\n        setValue(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form, {\n        onSubmit: onSubmit,\n        error: !!errorMsg,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Amount to contribute\"\n                    }, void 0, false, {\n                        fileName: \"/home/marie-lou/Desktop/web3/campaign/components/ContributeForm.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                        label: \"ETH\",\n                        labelPosition: \"right\",\n                        value: value,\n                        onChange: (e)=>setValue(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/marie-lou/Desktop/web3/campaign/components/ContributeForm.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marie-lou/Desktop/web3/campaign/components/ContributeForm.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Message, {\n                error: true,\n                header: \"Oops\",\n                content: errorMsg\n            }, void 0, false, {\n                fileName: \"/home/marie-lou/Desktop/web3/campaign/components/ContributeForm.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                primary: true,\n                children: \"Contibute !\"\n            }, void 0, false, {\n                fileName: \"/home/marie-lou/Desktop/web3/campaign/components/ContributeForm.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/marie-lou/Desktop/web3/campaign/components/ContributeForm.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContributeForm, \"5lkhhbQhLbxlWcKXP148MiJg7oo=\");\n_c = ContributeForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContributeForm);\nvar _c;\n$RefreshReg$(_c, \"ContributeForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1EO0FBQ2E7QUFDcEI7QUFDUjtBQUVwQyxNQUFNUyxpQkFBaUIsU0FBaUI7UUFBaEIsRUFBRUMsUUFBTyxFQUFFOztJQUUvQixNQUFNLENBQUVDLE9BQU9DLFNBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFFVyxVQUFVQyxZQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBRWEsU0FBU0MsV0FBWSxHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRzlDLE1BQU1lLFdBQVcsT0FBT0MsSUFBTTtRQUMxQkEsRUFBRUMsY0FBYztRQUVoQixNQUFNQyxXQUFXYiw4REFBUUEsQ0FBQ0c7UUFDMUJXLFFBQVFDLEdBQUcsQ0FBQ1o7UUFDWk0sV0FBVyxJQUFJO1FBQ2ZGLFlBQVk7UUFFWiwwQ0FBMEM7UUFDMUNPLFFBQVFDLEdBQUcsQ0FBQ1o7UUFDWlcsUUFBUUMsR0FBRyxDQUFDLFNBQVNkLGtFQUFnQixDQUFDRyxPQUFPO1FBQzdDLFFBQVE7UUFDUixxREFBcUQ7UUFFckQsaURBQWlEO1FBQ2pELDZCQUE2QjtRQUM3QixrREFBa0Q7UUFDbEQsU0FBUztRQUNULG9EQUFvRDtRQUNwRCxrQkFBa0I7UUFDbEIsK0JBQStCO1FBQy9CLHVCQUF1QjtRQUN2QixLQUFLO1FBQ0xLLFdBQVcsS0FBSztRQUNoQkosU0FBUztJQUNiO0lBRUYscUJBQ0UsOERBQUNULG1EQUFJQTtRQUFDYyxVQUFVQTtRQUFVUSxPQUFPLENBQUMsQ0FBQ1o7OzBCQUMvQiw4REFBQ1YseURBQVU7O2tDQUNQLDhEQUFDd0I7a0NBQU07Ozs7OztrQ0FFUCw4REFBQ3ZCLG9EQUFLQTt3QkFDRnVCLE9BQU07d0JBQ05DLGVBQWM7d0JBQ2RqQixPQUFPQTt3QkFDUGtCLFVBQVVYLENBQUFBLElBQUtOLFNBQVNNLEVBQUVZLE1BQU0sQ0FBQ25CLEtBQUs7Ozs7Ozs7Ozs7OzswQkFLOUMsOERBQUNOLHNEQUFPQTtnQkFBQ29CLEtBQUs7Z0JBQUNNLFFBQU87Z0JBQU9DLFNBQVNuQjs7Ozs7OzBCQUN0Qyw4REFBQ1AscURBQU1BO2dCQUFDMkIsT0FBTzswQkFBQzs7Ozs7Ozs7Ozs7O0FBS3hCO0dBdERNeEI7S0FBQUE7QUF3RE4sK0RBQWVBLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcz9lMDU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgTWVzc2FnZSwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xuXG5jb25zdCBDb250cmlidXRlRm9ybSA9ICh7IGFkZHJlc3MgfSkgPT4ge1xuXG4gICAgY29uc3QgWyB2YWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbIGVycm9yTXNnLCBzZXRFcnJvck1zZyBdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFsgTG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFkZHJlc3MpXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgc2V0RXJyb3JNc2coJycpXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvbnRyaWJ1dG9yJywgYWNjb3VudHNbMF0pXG4gICAgICAgIGNvbnNvbGUubG9nKGFkZHJlc3MpXG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZScsIHdlYjMudXRpbHMudG9XZWkodmFsdWUsICdldGhlcicpKVxuICAgICAgICAvLyB0cnkge1xuICAgICAgICAvLyAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgIC8vICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmNvbnRyaWJ1dGUoKS5zZW5kKHtcbiAgICAgICAgLy8gICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgLy8gICAgICAgICB2YWx1ZTogd2ViMy51dGlscy50b1dlaSh2YWx1ZSwgJ2V0aGVyJylcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7YWRkcmVzc31gKTtcbiAgICAgICAgLy8gfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vICAgICBzZXRFcnJvck1zZyhlcnIubWVzc2FnZSlcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgLy8gfTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgc2V0VmFsdWUoJycpXG4gICAgfSAgIFxuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBlcnJvcj17ISFlcnJvck1zZ30+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgPGxhYmVsPkFtb3VudCB0byBjb250cmlidXRlPC9sYWJlbD5cblxuICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgIGxhYmVsPSdFVEgnXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG5cbiAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPSdPb3BzJyBjb250ZW50PXtlcnJvck1zZ30vPlxuICAgICAgICA8QnV0dG9uIHByaW1hcnk+XG4gICAgICAgICAgICAgICAgQ29udGlidXRlICFcbiAgICAgICAgPC9CdXR0b24+IFxuICAgIDwvRm9ybT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cmlidXRlRm9ybVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlU3RhdGUiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJhZGRyZXNzIiwidmFsdWUiLCJzZXRWYWx1ZSIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJMb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJjb25zb2xlIiwibG9nIiwidXRpbHMiLCJ0b1dlaSIsImVycm9yIiwiRmllbGQiLCJsYWJlbCIsImxhYmVsUG9zaXRpb24iLCJvbkNoYW5nZSIsInRhcmdldCIsImhlYWRlciIsImNvbnRlbnQiLCJwcmltYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ContributeForm.js\n"));

/***/ })

});