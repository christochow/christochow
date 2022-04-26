(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6577:
/***/ ((module) => {

// Exports
module.exports = {
	"AppLogo": "Loading_AppLogo__W89BH",
	"spin": "Loading_spin__wKKpm",
	"wrapper": "Loading_wrapper__qHYVv",
	"container": "Loading_container__2E1_y"
};


/***/ }),

/***/ 8630:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "Navbar_link__SUBEg"
};


/***/ }),

/***/ 7610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(4466);
// EXTERNAL MODULE: ./styles/Loading.module.scss
var Loading_module = __webpack_require__(6577);
var Loading_module_default = /*#__PURE__*/__webpack_require__.n(Loading_module);
;// CONCATENATED MODULE: ./public/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.79afb856.svg","height":595,"width":842});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Loading/index.tsx




function Loading() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Loading_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Loading_module_default()).wrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Loading..."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    height: 50,
                    className: (Loading_module_default()).AppLogo,
                    src: logo,
                    alt: "logo"
                })
            ]
        })
    });
}
/* harmony default export */ const components_Loading = (Loading);

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./styles/Navbar.module.scss
var Navbar_module = __webpack_require__(8630);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/Navbar/index.tsx




const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.AppBar, {
        sx: {
            height: "50px",
            background: "#090A0F"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
            sx: {
                height: "50px",
                background: "#090A0F"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    sx: {
                        flexGrow: 1
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (Navbar_module_default()).link,
                            children: "Home"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    sx: {
                        flexGrow: 1
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/projects",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (Navbar_module_default()).link,
                            children: "Projects"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    sx: {
                        flexGrow: 1
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/tiktaktoe",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (Navbar_module_default()).link,
                            children: "Tiktaktoe"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    sx: {
                        flexGrow: 1
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/contact",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (Navbar_module_default()).link,
                            children: "Contact"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Layout/index.tsx





const Layout = ({ children  })=>{
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const timeout = setTimeout(()=>{
            setLoading(false);
        }, 1000);
        return ()=>clearTimeout(timeout)
        ;
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (!loading && !show) {
            const timeout = setTimeout(()=>setShow(true)
            , 500);
            return ()=>clearTimeout(timeout)
            ;
        }
    }, [
        loading,
        show
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "App",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_.CSSTransition, {
                in: loading,
                timeout: 1000,
                classNames: "logo-transition root-container",
                unmountOnExit: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Loading, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_.CSSTransition, {
                in: show,
                timeout: 1000,
                classNames: "transition",
                unmountOnExit: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    children: children
                })
            })
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
;// CONCATENATED MODULE: ./pages/_app.tsx





const theme = (0,styles_namespaceObject.createTheme)({
    palette: {
        primary: {
            main: colors_namespaceObject.grey[50]
        }
    },
    typography: {
        fontFamily: '"Courier New",Courier,monospace'
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "rgb(158, 166, 175)",
                    backgroundColor: "transaprent"
                }
            }
        }
    }
});
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(styles_namespaceObject.ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4466:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,676,664], () => (__webpack_exec__(7610)));
module.exports = __webpack_exports__;

})();