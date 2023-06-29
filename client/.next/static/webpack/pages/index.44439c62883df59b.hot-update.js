"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var src_layouts_dashboard_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/layouts/dashboard/layout */ \"./src/layouts/dashboard/layout.js\");\n/* harmony import */ var src_sections_settings_settings_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/sections/settings/settings-autocomplete */ \"./src/sections/settings/settings-autocomplete.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var src_hooks_use_get_device_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/hooks/use-get-device-info */ \"./src/hooks/use-get-device-info.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst now = new Date();\nconst Page = ()=>{\n    _s();\n    const deviceInfo = (0,src_hooks_use_get_device_info__WEBPACK_IMPORTED_MODULE_5__.useGetDeviceInfo)();\n    const [cartInfo, setCartInfo] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});\n    const domain = window.location.hostname;\n    const port = 3001;\n    const url = \"http://\".concat(domain, \":\").concat(port, \"/config\");\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (deviceInfo === null || deviceInfo === void 0 ? void 0 : deviceInfo.length) {\n            if (cartInfo == null) setCartInfo(cartInfo);\n            else if (Object.keys(cartInfo).length === 0) setCartInfo(deviceInfo[0]);\n        }\n    }, [\n        deviceInfo\n    ]);\n    const handleBtnWriteClick = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((event)=>{\n        if (cartInfo == null) {\n            console.error(\"cartInfo shall not be empty, before writing to SD card.\");\n            return;\n        }\n        const body = {\n            cmd: \"write\",\n            msg: cartInfo\n        };\n        fetch(url, {\n            method: \"POST\",\n            body: body\n        });\n    }, []);\n    const handleBtnPoweroffClick = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((event)=>{}, []);\n    const handleCartIDChange = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((event, value)=>{\n        setCartInfo(value);\n    }, [\n        cartInfo\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"SFC | GARMIN\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                component: \"main\",\n                sx: {\n                    flexGrow: 1,\n                    py: 8\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                    maxWidth: \"lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                        spacing: 3,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                                direction: \"row\",\n                                justifyContent: \"space-between\",\n                                spacing: 4,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                        variant: \"h4\",\n                                        children: \"SD Card Config\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                                        direction: \"row\",\n                                        spacing: 2,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                variant: \"contained\",\n                                                onClick: handleBtnWriteClick,\n                                                children: \"Write\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                                lineNumber: 79,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                variant: \"contained\",\n                                                onClick: handleBtnPoweroffClick,\n                                                children: \"Power off\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                                lineNumber: 82,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CardHeader, {\n                                        title: \"Cart ID\",\n                                        subheader: \"[ Org. ] - sfc - [ Cart ID ] [ Up/Down ]\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Divider, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CardContent, {\n                                        sx: {\n                                            display: \"flex\",\n                                            justifyContent: \"center\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                                            direction: \"column\",\n                                            justifyContent: \"center\",\n                                            spacing: 3,\n                                            sx: {\n                                                minWidth: 600\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_sections_settings_settings_autocomplete__WEBPACK_IMPORTED_MODULE_3__.SettingsAutocomplete, {\n                                                required: true,\n                                                id: \"input_cart_id\",\n                                                value: cartInfo,\n                                                onChange: handleCartIDChange,\n                                                options: deviceInfo,\n                                                optionKeys: [\n                                                    \"cartID\",\n                                                    \"position\"\n                                                ],\n                                                textFieldLabel: \"Cart ID\",\n                                                groupBy: (option)=>option.org\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                                lineNumber: 98,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CardHeader, {\n                                        title: \"Device Info.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Divider, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CardContent, {\n                                        sx: {\n                                            display: \"flex\",\n                                            justifyContent: \"center\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Table, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableBody, {\n                                                children: cartInfo && Object.entries(cartInfo).map((param)=>{\n                                                    let [key, value] = param;\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableRow, {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableCell, {\n                                                                children: key\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                                                lineNumber: 122,\n                                                                columnNumber: 29\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.TableCell, {\n                                                                children: value.toString()\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                                                lineNumber: 123,\n                                                                columnNumber: 29\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                                        lineNumber: 121,\n                                                        columnNumber: 27\n                                                    }, undefined);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                                lineNumber: 117,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                            lineNumber: 116,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Page, \"E8yqkNOWJWZlFm/esCB2XH40Uqk=\", false, function() {\n    return [\n        src_hooks_use_get_device_info__WEBPACK_IMPORTED_MODULE_5__.useGetDeviceInfo\n    ];\n});\n_c = Page;\nPage.getLayout = (page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_layouts_dashboard_layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        children: page\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\chanhayman\\\\Documents\\\\_Hayman files\\\\1_Project\\\\IoT\\\\sfc-config-sd\\\\client\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 138,\n        columnNumber: 28\n    }, undefined);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBZTtnREFDZkMsU0FBUyxDQUFDQyxTQUFXQSxPQUFPQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQU16Qyw4REFBQ3JFLCtDQUFJQTs7a0RBQ0gsOERBQUNFLHFEQUFVQTt3Q0FBQzZDLE9BQU07Ozs7OztrREFDbEIsOERBQUMzQyxrREFBT0E7Ozs7O2tEQUNSLDhEQUFDSCxzREFBV0E7d0NBQUNnRCxJQUFJOzRDQUFFVSxTQUFTOzRDQUFRSixnQkFBZ0I7d0NBQVM7a0RBQzNELDRFQUFDL0MsZ0RBQUtBO3NEQUNKLDRFQUFDQyxvREFBU0E7MERBQ1BlLFlBQ0NTLE9BQU9xQyxPQUFPLENBQUM5QyxVQUFVK0MsR0FBRyxDQUFDLFNBQWtCO3dEQUFqQixDQUFDQyxLQUFLMUIsTUFBTTtvREFDeEMscUJBQ0UsOERBQUNuQyxtREFBUUE7OzBFQUNQLDhEQUFDRCxvREFBU0E7MEVBQUU4RDs7Ozs7OzBFQUNaLDhEQUFDOUQsb0RBQVNBOzBFQUFFb0MsTUFBTTJCLFFBQVE7Ozs7Ozs7Ozs7OztnREFHaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVdEI7R0EvR01uRDs7UUFDZUgsMkVBQWdCQTs7O0tBRC9CRztBQWlITkEsS0FBS29ELFNBQVMsR0FBRyxDQUFDQyxxQkFBUyw4REFBQzdELGdFQUFlQTtrQkFBRTZEOzs7Ozs7QUFFN0MsK0RBQWVyRCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDb250YWluZXIsXHJcbiAgRGl2aWRlcixcclxuICBVbnN0YWJsZV9HcmlkMiBhcyBHcmlkLFxyXG4gIFN0YWNrLFxyXG4gIFRhYmxlLFxyXG4gIFRhYmxlQm9keSxcclxuICBUYWJsZUNlbGwsXHJcbiAgVGFibGVSb3csXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQgYXMgRGFzaGJvYXJkTGF5b3V0IH0gZnJvbSBcInNyYy9sYXlvdXRzL2Rhc2hib2FyZC9sYXlvdXRcIjtcclxuaW1wb3J0IHsgU2V0dGluZ3NBdXRvY29tcGxldGUgfSBmcm9tIFwic3JjL3NlY3Rpb25zL3NldHRpbmdzL3NldHRpbmdzLWF1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VHZXREZXZpY2VJbmZvIH0gZnJvbSBcInNyYy9ob29rcy91c2UtZ2V0LWRldmljZS1pbmZvXCI7XHJcblxyXG5jb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBkZXZpY2VJbmZvID0gdXNlR2V0RGV2aWNlSW5mbygpO1xyXG4gIGNvbnN0IFtjYXJ0SW5mbywgc2V0Q2FydEluZm9dID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IGRvbWFpbiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcclxuICBjb25zdCBwb3J0ID0gMzAwMTtcclxuICBjb25zdCB1cmwgPSBgaHR0cDovLyR7ZG9tYWlufToke3BvcnR9L2NvbmZpZ2A7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGV2aWNlSW5mbz8ubGVuZ3RoKSB7XHJcbiAgICAgIGlmIChjYXJ0SW5mbyA9PSBudWxsKSBzZXRDYXJ0SW5mbyhjYXJ0SW5mbyk7XHJcbiAgICAgIGVsc2UgaWYgKE9iamVjdC5rZXlzKGNhcnRJbmZvKS5sZW5ndGggPT09IDApIHNldENhcnRJbmZvKGRldmljZUluZm9bMF0pO1xyXG4gICAgfVxyXG4gIH0sIFtkZXZpY2VJbmZvXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ0bldyaXRlQ2xpY2sgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcclxuICAgIGlmIChjYXJ0SW5mbyA9PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJjYXJ0SW5mbyBzaGFsbCBub3QgYmUgZW1wdHksIGJlZm9yZSB3cml0aW5nIHRvIFNEIGNhcmQuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICBjbWQ6IFwid3JpdGVcIixcclxuICAgICAgbXNnOiBjYXJ0SW5mbyxcclxuICAgIH07XHJcbiAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogYm9keSxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBoYW5kbGVCdG5Qb3dlcm9mZkNsaWNrID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7fSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDYXJ0SURDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChldmVudCwgdmFsdWUpID0+IHtcclxuICAgICAgc2V0Q2FydEluZm8odmFsdWUpO1xyXG4gICAgfSxcclxuICAgIFtjYXJ0SW5mb11cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNGQyB8IEdBUk1JTjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgIHB5OiA4LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cclxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlNEIENhcmQgQ29uZmlnPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUJ0bldyaXRlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICBXcml0ZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVCdG5Qb3dlcm9mZkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgUG93ZXIgb2ZmXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciB0aXRsZT1cIkNhcnQgSURcIiBzdWJoZWFkZXI9XCJbIE9yZy4gXSAtIHNmYyAtIFsgQ2FydCBJRCBdICAgWyBVcC9Eb3duIF1cIiAvPlxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPENhcmRDb250ZW50IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxTdGFja1xyXG4gICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIHNwYWNpbmc9ezN9XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IG1pbldpZHRoOiA2MDAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW5wdXRfY2FydF9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2FydEluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2FydElEQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZGV2aWNlSW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbktleXM9e1tcImNhcnRJRFwiLCBcInBvc2l0aW9uXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEZpZWxkTGFiZWw9XCJDYXJ0IElEXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGdyb3VwQnk9eyhvcHRpb24pID0+IG9wdGlvbi5vcmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyIHRpdGxlPVwiRGV2aWNlIEluZm8uXCIgLz5cclxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhcnRJbmZvICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhjYXJ0SW5mbykubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntrZXl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPnt2YWx1ZS50b1N0cmluZygpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblBhZ2UuZ2V0TGF5b3V0ID0gKHBhZ2UpID0+IDxEYXNoYm9hcmRMYXlvdXQ+e3BhZ2V9PC9EYXNoYm9hcmRMYXlvdXQ+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJCb3giLCJCdXR0b24iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ29udGFpbmVyIiwiRGl2aWRlciIsIlVuc3RhYmxlX0dyaWQyIiwiR3JpZCIsIlN0YWNrIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZVJvdyIsIlR5cG9ncmFwaHkiLCJMYXlvdXQiLCJEYXNoYm9hcmRMYXlvdXQiLCJTZXR0aW5nc0F1dG9jb21wbGV0ZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VHZXREZXZpY2VJbmZvIiwibm93IiwiRGF0ZSIsIlBhZ2UiLCJkZXZpY2VJbmZvIiwiY2FydEluZm8iLCJzZXRDYXJ0SW5mbyIsImRvbWFpbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJwb3J0IiwidXJsIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsImhhbmRsZUJ0bldyaXRlQ2xpY2siLCJldmVudCIsImNvbnNvbGUiLCJlcnJvciIsImJvZHkiLCJjbWQiLCJtc2ciLCJmZXRjaCIsIm1ldGhvZCIsImhhbmRsZUJ0blBvd2Vyb2ZmQ2xpY2siLCJoYW5kbGVDYXJ0SURDaGFuZ2UiLCJ2YWx1ZSIsInRpdGxlIiwiY29tcG9uZW50Iiwic3giLCJmbGV4R3JvdyIsInB5IiwibWF4V2lkdGgiLCJzcGFjaW5nIiwiZGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJ2YXJpYW50Iiwib25DbGljayIsInN1YmhlYWRlciIsImRpc3BsYXkiLCJtaW5XaWR0aCIsInJlcXVpcmVkIiwiaWQiLCJvbkNoYW5nZSIsIm9wdGlvbnMiLCJvcHRpb25LZXlzIiwidGV4dEZpZWxkTGFiZWwiLCJncm91cEJ5Iiwib3B0aW9uIiwib3JnIiwiZW50cmllcyIsIm1hcCIsImtleSIsInRvU3RyaW5nIiwiZ2V0TGF5b3V0IiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});