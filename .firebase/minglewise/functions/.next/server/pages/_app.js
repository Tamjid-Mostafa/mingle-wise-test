(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./public/assets/logo/mingle.png
var mingle = __webpack_require__(7745);
// EXTERNAL MODULE: ./public/assets/icons/apple.svg
var apple = __webpack_require__(1212);
// EXTERNAL MODULE: ./public/assets/icons/google-play-icon.svg
var google_play_icon = __webpack_require__(7098);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./Components/Shared/Footer.js








const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-[#2A2D3B]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-[#2A2D3B] min-h-[35vh] flex items-center justify-center p-5",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex-wrap lg:flex items-center gap-14",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col items-center ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "w-14 h-14",
                                    src: mingle/* default */.Z,
                                    alt: "Logo"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "text-white relative",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-4xl header-font-extra-light tracking-widest",
                                            children: "MingleWise"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "absolute text-[10px] xl:text-xs min-w-[16px] min-h-[16px] xl:min-w-[18px] xl:min-h-[18px] text-center",
                                            children: "TM"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-white header-font-regular text-[10px] sm:tracking-widest mt-1",
                                    children: "Dating | Networking | Events"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "md:flex gap-4 mt-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex gap-1 items-center bg-black px-4 py-1 rounded-xl",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    className: "w-8 h-8",
                                                    src: apple/* default */.Z,
                                                    alt: "Apple logo"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-col text-white",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-xs -mb-1",
                                                            children: "Download on the"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            className: "text-sm",
                                                            children: "App Store"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex gap-1 items-center bg-black px-4 py-1 rounded-xl mt-2 md:mt-auto",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    className: "w-8 h-8",
                                                    src: google_play_icon/* default */.Z,
                                                    alt: "Apple logo"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex flex-col text-white",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-xs -mb-1",
                                                            children: "Download on the"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            className: "text-sm",
                                                            children: "Google Play"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "roboto flex flex-col gap-3 mt-10 lg:mt-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "text-lg text-white mb-2",
                                    children: "Company"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/QuickLinks/AboutUs",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-gray-400 font-medium",
                                        children: "About Us"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/QuickLinks/Features",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-gray-400 font-medium",
                                        children: "Features"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/QuickLinks/Careers",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-gray-400 font-medium",
                                        children: "Careers"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/QuickLinks/SubscriptionTires",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-gray-400 font-medium",
                                        children: "Subscription Tires"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "roboto flex flex-col gap-3 mt-5 lg:mt-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "text-lg text-white mb-2",
                                    children: "Community"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/QuickLinks/CommunityBlog",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-gray-400 font-medium",
                                        children: "Community Blog"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/QuickLinks/PromoCodes",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-gray-400 font-medium",
                                        children: "Promo Codes"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/QuickLinks/Support",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-gray-400 font-medium",
                                        children: "Support"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/QuickLinks/CommunityRules",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-gray-400 font-medium",
                                        children: "Community Rules"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "roboto flex flex-col gap-3 mt-5 lg:mt-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "text-lg text-white mb-2",
                                    children: "Legal"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/QuickLinks/TermsOfUse",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-gray-400 font-medium",
                                        children: "Terms of Use"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/QuickLinks/PrivacyPolicy",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-gray-400 font-medium",
                                        children: "Privacy Policy"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/QuickLinks/CookiePolicy",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-gray-400 font-medium",
                                        children: "Cookie Policy"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/QuickLinks/IntellectualProperty",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-gray-400 font-medium",
                                        children: "Intellectual Property"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "roboto flex flex-col gap-3 mt-5 lg:mt-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "text-lg text-white mb-2",
                                    children: "CONTACT"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "text-gray-400 font-medium",
                                    children: "+44 7544802677"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "text-gray-400 font-medium",
                                    children: "info@minglewise.com"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "text-gray-400 font-medium",
                                    children: "London, UK"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "text-gray-400 font-medium",
                                    children: "+91 9967067419"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "lg:flex justify-between items-center w-[60%] mx-auto border-t border-gray-600 pt-2 pb-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-gray-300",
                        children: [
                            "Copyright \xa9 2021",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "hover:text-orange-500 duration-200 ease-out",
                                href: "https://appsynergies.com/",
                                target: "_blank",
                                children: "AppSynergies Ltd-"
                            }),
                            "All Rights Reserved."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex text-gray-500 gap-6 mt-2 lg:mt-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaFacebookF, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTwitter, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaInstagram, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaLinkedinIn, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaPinterest, {})
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Shared_Footer = (Footer);

// EXTERNAL MODULE: ./Components/Shared/Loader.js
var Loader = __webpack_require__(7490);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./pages/_app.js






function App({ Component , pageProps  }) {
    const Router = (0,router_namespaceObject.useRouter)();
    const [loading, setLoading] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setLoading(true);
            console.log("Loading");
        }, 1000);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: !loading ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Loader/* default */.Z, {})
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Shared_Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

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

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 1223:
/***/ ((module) => {

"use strict";
module.exports = require("react-loader-spinner");

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
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664,216], () => (__webpack_exec__(9482)));
module.exports = __webpack_exports__;

})();