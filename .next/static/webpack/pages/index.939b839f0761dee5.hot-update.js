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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaPlay_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FaPlay!=!react-icons/fa */ \"__barrel_optimize__?names=FaPlay!=!./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_CiPause1_react_icons_ci__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=CiPause1!=!react-icons/ci */ \"__barrel_optimize__?names=CiPause1!=!./node_modules/react-icons/ci/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_GrPowerReset_react_icons_gr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=GrPowerReset!=!react-icons/gr */ \"__barrel_optimize__?names=GrPowerReset!=!./node_modules/react-icons/gr/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const intervalref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const startimeref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (open) {\n            intervalref.current = setInterval(()=>{\n                setTime(Date.now() - startimeref.current);\n            }, 10);\n        }\n        return ()=>{\n            clearInterval(intervalref.current);\n        };\n    }, [\n        open\n    ]);\n    function startTime() {\n        setOpen(true);\n        startimeref.current = Date.now() - time;\n    }\n    let hours = Math.floor(time / (1000 * 60 * 60));\n    let minutes = Math.floor(time / (1000 * 60) % 60);\n    let seconds = Math.floor(time / 1000 % 60);\n    hours = String(hours).padStart(2, \"0\");\n    minutes = String(minutes).padStart(2, \"0\");\n    seconds = String(seconds).padStart(2, \"0\");\n    // console.log((\"0\" + Math.floor((time / 60000) % 60)).slice(-2))\n    // console.log((\"0\" + Math.floor((time / 1000) % 60)).slice(-2))\n    // console.log((\"0\" + Math.floor((time / 1000) % 60)).slice(-2))\n    function Rest() {\n        setTime(0);\n        setOpen(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"h-screen w-screen border border-black flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-[70%]  max-sm:w-[80%] border border-gray-500 min-md:w-[80%] min-md:w-[60%] rounded-xl shadow-2xl  shadow-blue-500 grid grid-row-7\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-full w-full  row-span-3 flex justify-center items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-white text-2xl max-sm:text-4xl\",\n                        children: \"\".concat(hours, \":\").concat(minutes, \":\").concat(seconds)\n                    }, void 0, false, {\n                        fileName: \"/home/lenovo/Desktop/git/timeout/src/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/lenovo/Desktop/git/timeout/src/pages/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-full w-full  flex justify-center  gap-6 items-center max-sm:gap-4 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"p-4 text-white text-2xl max-sm:text-sm text-center border border-gray-400 rounded-full\",\n                            onClick: ()=>setOpen(false),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CiPause1_react_icons_ci__WEBPACK_IMPORTED_MODULE_3__.CiPause1, {}, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/git/timeout/src/pages/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/lenovo/Desktop/git/timeout/src/pages/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"p-4 text-white text-2xl max-sm:text-sm  text-center border border-gray-400 rounded-full shadow-xl\",\n                            onClick: ()=>startTime(),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaPlay_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaPlay, {}, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/git/timeout/src/pages/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/lenovo/Desktop/git/timeout/src/pages/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border border-gray-400 max-sm:text-sm  rounded-full text-white text-xl p-4 text-center\",\n                            onClick: ()=>Rest(),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GrPowerReset_react_icons_gr__WEBPACK_IMPORTED_MODULE_5__.GrPowerReset, {}, void 0, false, {\n                                fileName: \"/home/lenovo/Desktop/git/timeout/src/pages/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/lenovo/Desktop/git/timeout/src/pages/index.js\",\n                            lineNumber: 68,\n                            columnNumber: 19\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/lenovo/Desktop/git/timeout/src/pages/index.js\",\n                    lineNumber: 61,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lenovo/Desktop/git/timeout/src/pages/index.js\",\n            lineNumber: 56,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/lenovo/Desktop/git/timeout/src/pages/index.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"49CW9PtpQR4EBnNEgnP4PYFGZSQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBTU1BO0FBTnlCO0FBQ1M7QUFFRTtBQUNJO0FBQ007QUFHckMsU0FBU1E7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBS0MsUUFBUSxHQUFDSCwrQ0FBUUEsQ0FBQztJQUM5QixNQUFNLENBQUNJLE1BQUtDLFFBQVEsR0FBQ0wsK0NBQVFBLENBQUM7SUFDOUIsTUFBTU0sY0FBYVAsNkNBQU1BLENBQUM7SUFDMUIsTUFBTVEsY0FBWVIsNkNBQU1BLENBQUM7SUFDekJELGdEQUFTQSxDQUFDO1FBRVIsSUFBR0ksTUFBSztZQUNOSSxZQUFZRSxPQUFPLEdBQUlDLFlBQVk7Z0JBQ2pDSixRQUFRSyxLQUFLQyxHQUFHLEtBQUdKLFlBQVlDLE9BQU87WUFDeEMsR0FBRTtRQUVKO1FBRUEsT0FBTztZQUNMSSxjQUFjTixZQUFZRSxPQUFPO1FBQ25DO0lBS0YsR0FBRTtRQUFDTjtLQUFLO0lBRVIsU0FBU1c7UUFDUFYsUUFBUTtRQUNSSSxZQUFZQyxPQUFPLEdBQUdFLEtBQUtDLEdBQUcsS0FBS1A7SUFDckM7SUFHSSxJQUFJVSxRQUFRQyxLQUFLQyxLQUFLLENBQUNaLE9BQVEsUUFBSyxLQUFHLEVBQUM7SUFDeEMsSUFBSWEsVUFBV0YsS0FBS0MsS0FBSyxDQUFDWixPQUFRLFFBQUssRUFBQyxJQUFLO0lBQzdDLElBQUljLFVBQVVILEtBQUtDLEtBQUssQ0FBQ1osT0FBUSxPQUFRO0lBRXpDVSxRQUFRSyxPQUFPTCxPQUFPTSxRQUFRLENBQUMsR0FBRTtJQUNqQ0gsVUFBU0UsT0FBT0YsU0FBU0csUUFBUSxDQUFDLEdBQUU7SUFDcENGLFVBQVVDLE9BQU9ELFNBQVNFLFFBQVEsQ0FBQyxHQUFFO0lBRXpDLGlFQUFpRTtJQUNqRSxnRUFBZ0U7SUFDaEUsZ0VBQWdFO0lBQ2hFLFNBQVNDO1FBQ1BoQixRQUFRO1FBQ1JGLFFBQVE7SUFDVjtJQUVBLHFCQUNFLDhEQUFDbUI7UUFBS0MsV0FBVTtrQkFDWiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDRTt3QkFBR0YsV0FBVTtrQ0FBdUMsR0FBWU4sT0FBVEgsT0FBTSxLQUFjSSxPQUFYRCxTQUFRLEtBQVcsT0FBUkM7Ozs7Ozs7Ozs7OzhCQUc5RSw4REFBQ007b0JBQUlELFdBQVU7O3NDQUNULDhEQUFDRzs0QkFBT0gsV0FBVTs0QkFBeUZJLFNBQVMsSUFBSXhCLFFBQVE7c0NBQzlILDRFQUFDUCxvRkFBUUE7Ozs7Ozs7Ozs7c0NBRVgsOERBQUM4Qjs0QkFBT0gsV0FBVTs0QkFBb0dJLFNBQVMsSUFBSWQ7c0NBQzdILDRFQUFDbEIsZ0ZBQU1BOzs7Ozs7Ozs7O3NDQUViLDhEQUFDK0I7NEJBQU9ILFdBQVU7NEJBQXlGSSxTQUFTLElBQUlOO3NDQUN0SCw0RUFBQ3hCLDRGQUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpDO0dBbEV3Qkk7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBGYVBsYXkgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCB7IENpUGF1c2UxIH0gZnJvbSBcInJlYWN0LWljb25zL2NpXCI7XG5pbXBvcnQgeyBHclBvd2VyUmVzZXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbb3BlbixzZXRPcGVuXT11c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3RpbWUsc2V0VGltZV09dXNlU3RhdGUoMClcbiAgY29uc3QgaW50ZXJ2YWxyZWYgPXVzZVJlZihudWxsKVxuICBjb25zdCBzdGFydGltZXJlZj11c2VSZWYobnVsbClcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgXG4gICAgaWYob3Blbil7XG4gICAgICBpbnRlcnZhbHJlZi5jdXJyZW50ICA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgIHNldFRpbWUoRGF0ZS5ub3coKS1zdGFydGltZXJlZi5jdXJyZW50IClcbiAgICAgIH0sMTApXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKCk9PntcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxyZWYuY3VycmVudClcbiAgICB9IFxuICAgIFxuICAgICAgXG5cblxuICB9LFtvcGVuXSlcbiAgXG4gIGZ1bmN0aW9uIHN0YXJ0VGltZSAoKXtcbiAgICBzZXRPcGVuKHRydWUpXG4gICAgc3RhcnRpbWVyZWYuY3VycmVudCA9IERhdGUubm93KCkgLSB0aW1lIFxuICB9XG5cblxuICAgICAgbGV0IGhvdXJzID0gTWF0aC5mbG9vcih0aW1lIC8gKDEwMDAqNjAqNjApKVxuICAgICAgbGV0IG1pbnV0ZXMgPSAgTWF0aC5mbG9vcih0aW1lIC8gKDEwMDAqNjApICUgNjApXG4gICAgICBsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IodGltZSAvICgxMDAwKSAlIDYwKVxuICAgXG4gICAgICBob3VycyA9IFN0cmluZyhob3VycykucGFkU3RhcnQoMiwnMCcpXG4gICAgICBtaW51dGVzID1TdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwnMCcpXG4gICAgICBzZWNvbmRzID0gU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsJzAnKVxuXG4gIC8vIGNvbnNvbGUubG9nKChcIjBcIiArIE1hdGguZmxvb3IoKHRpbWUgLyA2MDAwMCkgJSA2MCkpLnNsaWNlKC0yKSlcbiAgLy8gY29uc29sZS5sb2coKFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDEwMDApICUgNjApKS5zbGljZSgtMikpXG4gIC8vIGNvbnNvbGUubG9nKChcIjBcIiArIE1hdGguZmxvb3IoKHRpbWUgLyAxMDAwKSAlIDYwKSkuc2xpY2UoLTIpKVxuICBmdW5jdGlvbiBSZXN0ICgpIHtcbiAgICBzZXRUaW1lKDApXG4gICAgc2V0T3BlbihmYWxzZSlcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBib3JkZXIgYm9yZGVyLWJsYWNrIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bNzAlXSAgbWF4LXNtOnctWzgwJV0gYm9yZGVyIGJvcmRlci1ncmF5LTUwMCBtaW4tbWQ6dy1bODAlXSBtaW4tbWQ6dy1bNjAlXSByb3VuZGVkLXhsIHNoYWRvdy0yeGwgIHNoYWRvdy1ibHVlLTUwMCBncmlkIGdyaWQtcm93LTdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCAgcm93LXNwYW4tMyBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bCBtYXgtc206dGV4dC00eGxcIj57YCR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfWB9PC9oMT5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsICBmbGV4IGp1c3RpZnktY2VudGVyICBnYXAtNiBpdGVtcy1jZW50ZXIgbWF4LXNtOmdhcC00IFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTQgdGV4dC13aGl0ZSB0ZXh0LTJ4bCBtYXgtc206dGV4dC1zbSB0ZXh0LWNlbnRlciBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtZnVsbFwiIG9uQ2xpY2s9eygpPT5zZXRPcGVuKGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgIDxDaVBhdXNlMSAvPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtNCB0ZXh0LXdoaXRlIHRleHQtMnhsIG1heC1zbTp0ZXh0LXNtICB0ZXh0LWNlbnRlciBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtZnVsbCBzaGFkb3cteGxcIiBvbkNsaWNrPXsoKT0+c3RhcnRUaW1lKCl9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYVBsYXkgLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIG1heC1zbTp0ZXh0LXNtICByb3VuZGVkLWZ1bGwgdGV4dC13aGl0ZSB0ZXh0LXhsIHAtNCB0ZXh0LWNlbnRlclwiIG9uQ2xpY2s9eygpPT5SZXN0KCl9PlxuICAgICAgICAgICAgICAgICAgICA8R3JQb3dlclJlc2V0IC8+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJJbWFnZSIsIkZhUGxheSIsIkNpUGF1c2UxIiwiR3JQb3dlclJlc2V0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJIb21lIiwib3BlbiIsInNldE9wZW4iLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFscmVmIiwic3RhcnRpbWVyZWYiLCJjdXJyZW50Iiwic2V0SW50ZXJ2YWwiLCJEYXRlIiwibm93IiwiY2xlYXJJbnRlcnZhbCIsInN0YXJ0VGltZSIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJTdHJpbmciLCJwYWRTdGFydCIsIlJlc3QiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});