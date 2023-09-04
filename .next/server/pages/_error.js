"use strict";
(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 6369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ NormalButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: ./components/common/Inputs/NormalButton/index.jsx



/**
 * Button: The Common Re-usable Button across website.
 * @return {JSX.Element} The JSX Code for Button
 */ function NormalButton({ children , innerRef , className , ...restProps }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
        className: `${className}`,
        ...restProps,
        ref: innerRef,
        children: children
    });
}
NormalButton.propTypes = {
    children: (external_prop_types_default()).any,
    variant: (external_prop_types_default()).string,
    className: (external_prop_types_default()).string
};
NormalButton.defaultProps = {
    children: "Submit",
    variant: "primary",
    className: ""
};


/***/ }),

/***/ 9563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_Inputs_NormalButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6369);


function Error({ statusCode , err , dev  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "d-flex flex-column align-items-center justify-content-center py-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "fs-36 text-center fw-500",
                            children: statusCode
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-center fw-600",
                            children: "Something went wrong :("
                        })
                    ]
                }),
                dev === "true" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                    children: err?.message
                }),
                dev === "true" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                    children: err?.stack
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "action-btn w-100 mt-4 size-md mx-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Inputs_NormalButton__WEBPACK_IMPORTED_MODULE_1__/* .NormalButton */ .U, {
                        className: "w-100 fw-600",
                        children: "Try again?"
                    })
                })
            ]
        })
    });
}
Error.getInitialProps = ({ res , err , query  })=>{
    const errorCode = err ? err.statusCode : 404;
    const statusCode = res ? res.statusCode : errorCode;
    const { dev  } = query || {};
    return {
        statusCode,
        err,
        dev
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);


/***/ }),

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9563));
module.exports = __webpack_exports__;

})();