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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ContributeForm = (param)=>{\n    let { address  } = param;\n    _s();\n    const router = next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorMsg, setErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [Loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onSubmit = async (e)=>{\n        e.preventDefault();\n        const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(address);\n        setLoading(true);\n        setErrorMsg(\"\");\n        try {\n            const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].eth.getAccounts();\n            await campaign.methods.contribute().send({\n                from: accounts[0],\n                value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].utils.toWei(value, \"ether\")\n            });\n            router.reload();\n        } catch (err) {\n            setErrorMsg(err.message);\n            console.log(err);\n        }\n        ;\n        setLoading(false);\n        setValue(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {\n        onSubmit: onSubmit,\n        error: !!errorMsg,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Field, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Amount to contribute\"\n                    }, void 0, false, {\n                        fileName: \"/home/marie-lou/Desktop/web3/campaign/components/ContributeForm.js\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        label: \"ETH\",\n                        labelPosition: \"right\",\n                        value: value,\n                        onChange: (e)=>setValue(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/marie-lou/Desktop/web3/campaign/components/ContributeForm.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marie-lou/Desktop/web3/campaign/components/ContributeForm.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message, {\n                error: true,\n                header: \"Oops\",\n                content: errorMsg\n            }, void 0, false, {\n                fileName: \"/home/marie-lou/Desktop/web3/campaign/components/ContributeForm.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                primary: true,\n                children: \"Contibute !\"\n            }, void 0, false, {\n                fileName: \"/home/marie-lou/Desktop/web3/campaign/components/ContributeForm.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/marie-lou/Desktop/web3/campaign/components/ContributeForm.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContributeForm, \"uQPXnQrGt1ixcPKy0WFI4HnOTFU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ContributeForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContributeForm);\nvar _c;\n$RefreshReg$(_c, \"ContributeForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQUNhO0FBQ3BCO0FBQ1I7QUFDSjtBQUdoQyxNQUFNVSxpQkFBaUIsU0FBaUI7UUFBaEIsRUFBRUMsUUFBTyxFQUFFOztJQUUvQixNQUFNQyxTQUFTSCxrREFBZ0I7SUFFL0IsTUFBTSxDQUFFSyxPQUFPQyxTQUFVLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBRWMsVUFBVUMsWUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUVnQixTQUFTQyxXQUFZLEdBQUdqQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRzlDLE1BQU1rQixXQUFXLE9BQU9DLElBQU07UUFDMUJBLEVBQUVDLGNBQWM7UUFFaEIsTUFBTUMsV0FBV2hCLDhEQUFRQSxDQUFDSTtRQUMxQlEsV0FBVyxJQUFJO1FBQ2ZGLFlBQVk7UUFFWixJQUFJO1lBQ0EsTUFBTU8sV0FBVyxNQUFNaEIsc0VBQW9CO1lBQzNDLE1BQU1lLFNBQVNJLE9BQU8sQ0FBQ0MsVUFBVSxHQUFHQyxJQUFJLENBQUM7Z0JBQ3JDQyxNQUFNTixRQUFRLENBQUMsRUFBRTtnQkFDakJWLE9BQU9OLGtFQUFnQixDQUFDTSxPQUFPO1lBQ25DO1lBQ0FGLE9BQU9xQixNQUFNO1FBQ2pCLEVBQUUsT0FBT0MsS0FBSztZQUNWakIsWUFBWWlCLElBQUlDLE9BQU87WUFDdkJDLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDaEI7O1FBQ0FmLFdBQVcsS0FBSztRQUNoQkosU0FBUztJQUNiO0lBRUYscUJBQ0UsOERBQUNaLG1EQUFJQTtRQUFDaUIsVUFBVUE7UUFBVWtCLE9BQU8sQ0FBQyxDQUFDdEI7OzBCQUMvQiw4REFBQ2IseURBQVU7O2tDQUNQLDhEQUFDcUM7a0NBQU07Ozs7OztrQ0FFUCw4REFBQ3BDLG9EQUFLQTt3QkFDRm9DLE9BQU07d0JBQ05DLGVBQWM7d0JBQ2QzQixPQUFPQTt3QkFDUDRCLFVBQVVyQixDQUFBQSxJQUFLTixTQUFTTSxFQUFFc0IsTUFBTSxDQUFDN0IsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUs5Qyw4REFBQ1Qsc0RBQU9BO2dCQUFDaUMsS0FBSztnQkFBQ00sUUFBTztnQkFBT0MsU0FBUzdCOzs7Ozs7MEJBQ3RDLDhEQUFDVixxREFBTUE7Z0JBQUN3QyxPQUFPOzBCQUFDOzs7Ozs7Ozs7Ozs7QUFLeEI7R0FuRE1wQzs7UUFFYUQsa0RBQWdCSTs7O0tBRjdCSDtBQXFETiwrREFBZUEsY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzP2UwNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIElucHV0LCBNZXNzYWdlLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbmNvbnN0IENvbnRyaWJ1dGVGb3JtID0gKHsgYWRkcmVzcyB9KSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSBSb3V0ZXIudXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBbIHZhbHVlLCBzZXRWYWx1ZSBdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFsgZXJyb3JNc2csIHNldEVycm9yTXNnIF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgWyBMb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICBzZXRFcnJvck1zZygnJylcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jb250cmlidXRlKCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IHdlYjMudXRpbHMudG9XZWkodmFsdWUsICdldGhlcicpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcm91dGVyLnJlbG9hZCgpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc2V0RXJyb3JNc2coZXJyLm1lc3NhZ2UpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH07XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIHNldFZhbHVlKCcnKVxuICAgIH0gICBcblxuICByZXR1cm4gKFxuICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gZXJyb3I9eyEhZXJyb3JNc2d9PlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgIDxsYWJlbD5BbW91bnQgdG8gY29udHJpYnV0ZTwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICBsYWJlbD0nRVRIJ1xuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj0nT29wcycgY29udGVudD17ZXJyb3JNc2d9Lz5cbiAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PlxuICAgICAgICAgICAgICAgIENvbnRpYnV0ZSAhXG4gICAgICAgIDwvQnV0dG9uPiBcbiAgICA8L0Zvcm0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJpYnV0ZUZvcm1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInVzZVN0YXRlIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkNhbXBhaWduIiwid2ViMyIsIlJvdXRlciIsIkNvbnRyaWJ1dGVGb3JtIiwiYWRkcmVzcyIsInJvdXRlciIsInVzZVJvdXRlciIsInZhbHVlIiwic2V0VmFsdWUiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiTG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwiYWNjb3VudHMiLCJldGgiLCJnZXRBY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVsb2FkIiwiZXJyIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkZpZWxkIiwibGFiZWwiLCJsYWJlbFBvc2l0aW9uIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJoZWFkZXIiLCJjb250ZW50IiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContributeForm.js\n"));

/***/ })

});