/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/BrandsContent.js":
/*!**********************************!*\
  !*** ./scripts/BrandsContent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ brandsContent)
/* harmony export */ });
// загрузка списка брендов

function brandsContent(brands_container) {
  var swiperWrapper = document.querySelector('.swiper-wrapper');
  var brands = ['lenovo', 'samsung', 'apple', 'viewsonic', 'bosch', 'hp', 'acer', 'sony', 'lenovo', 'samsung', 'apple'];
  for (var i = 0; i < brands.length; i++) {
    var divElem = document.createElement('div');
    divElem.classList.add('main__brands-content', 'swiper-slide');
    var imgElem = document.createElement('img');
    imgElem.setAttribute('src', "./assets/brands/".concat(brands[i], ".png"));
    imgElem.setAttribute('alt', brands[i]);
    var hrefElem = document.createElement('a');
    hrefElem.classList.add('main__brands-icon');
    hrefElem.setAttribute('href', '#');
    hrefElem.innerHTML = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="1" y="1" width="38" height="38" rx="19" stroke="#FF3E79" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z" fill="#FF3E79"/>';
    divElem.append(imgElem, hrefElem);

    // проверка при загрузке окна
    if (window.innerWidth > 768) {
      brands_container.append(divElem);
    } else {
      swiperWrapper.append(divElem);
    }

    // проверка при динамически изменяющемся размере окна -- не работает правильно при переходе от mobile к PC

    // window.addEventListener('resize', () => {
    //     if (window.innerWidth > 768) {
    //         brands_container.append(divElem)
    //     } else {
    //         swiperWrapper.append(divElem)
    //     }
    // })
  }
}

/***/ }),

/***/ "./scripts/LeftMenu.js":
/*!*****************************!*\
  !*** ./scripts/LeftMenu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ leftMenu)
/* harmony export */ });
function leftMenu() {
  var menuContainer = document.querySelector('#menuContainer');
  var menu = document.querySelector('#menu');
  menuContainer.addEventListener('click', function () {
    menu.style.display = 'flex';
  });
  document.addEventListener('mouseup', function (e) {
    if (!menu.contains(e.target)) {
      menu.style.display = 'none';
    }
  });
}

/***/ }),

/***/ "./scripts/ShowHide.js":
/*!*****************************!*\
  !*** ./scripts/ShowHide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showHide)
/* harmony export */ });
// функция для кнопки разворач / сворачивания

function showHide(showMore, showLess, hide, main, container) {
  var buttonElem = document.createElement('button');
  buttonElem.classList.add('showHideButton');
  var imgElem = document.createElement('img');
  imgElem.setAttribute('src', './assets/img/expand.svg');
  imgElem.setAttribute('alt', 'MoreLess');
  var pElem = document.createElement('p');
  pElem.innerText = showMore;
  buttonElem.addEventListener('click', function () {
    container.classList.toggle(hide);
    imgElem.classList.toggle('showHideButton_rotate');
    if (container.classList.contains(hide)) {
      pElem.innerText = showMore;
    } else {
      pElem.innerText = showLess;
    }
  });
  buttonElem.append(imgElem, pElem);
  main.append(buttonElem);
}

/***/ }),

/***/ "./scripts/babel.js":
/*!**************************!*\
  !*** ./scripts/babel.js ***!
  \**************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Util = /*#__PURE__*/_createClass(function Util() {
  _classCallCheck(this, Util);
});
_defineProperty(Util, "id", Date.now());
console.log('Util ID: ', Util.id);

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/scss.scss":
/*!*********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/scss.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/style.css":
/*!*********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/style.css ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_TTLakes_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./TTLakes.css */ "../node_modules/css-loader/dist/cjs.js!./styles/TTLakes.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_TTLakes_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */ }

/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers.
 */
body {
  margin: 0; }

/**
 * Render the \`main\` element consistently in IE.
 */
main {
  display: block; }

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0; }

/* Grouping content
   ========================================================================== */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  box-sizing: content-box;
  /* 1 */
  height: 0;
  /* 1 */
  overflow: visible;
  /* 2 */ }

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */ }

/* Text-level semantics
   ========================================================================== */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent; }

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none;
  /* 1 */
  text-decoration: underline;
  /* 2 */
  text-decoration: underline dotted;
  /* 2 */ }

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder; }

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */ }

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%; }

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline; }

sub {
  bottom: -0.25em; }

sup {
  top: -0.5em; }

/* Embedded content
   ========================================================================== */
/**
 * Remove the border on images inside links in IE 10.
 */
img {
  border-style: none; }

/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  line-height: 1.15;
  /* 1 */
  margin: 0;
  /* 2 */ }

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input {
  /* 1 */
  overflow: visible; }

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select {
  /* 1 */
  text-transform: none; }

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; }

/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0; }

/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText; }

/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em; }

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */
legend {
  box-sizing: border-box;
  /* 1 */
  color: inherit;
  /* 2 */
  display: table;
  /* 1 */
  max-width: 100%;
  /* 1 */
  padding: 0;
  /* 3 */
  white-space: normal;
  /* 1 */ }

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline; }

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto; }

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */ }

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto; }

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type="search"] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */ }

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none; }

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */ }

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block; }

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item; }

/* Misc
   ========================================================================== */
/**
 * Add the correct display in IE 10+.
 */
template {
  display: none; }

/**
 * Add the correct display in IE 10.
 */
[hidden] {
  display: none; }

html {
  box-sizing: border-box; }

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0; }

:root {
  --color-bg-main: #F8F8F8;
  --color-bg-aside: #FFFFFF;
  --color-bg-header: #FFFFFF;
  --color-icon-main: #FF3E79;
  --color-font: #1B1C21;
  --color-menu-font: #7E7E82;
  --color-menu-start: #41F6D7;
  --color-menu-border: #B8FFEC;
  --color-header-border: #D9FFF5;
  --color-brand-border: #EAEAEA; }

body {
  min-width: 320px;
  max-width: 100vw;
  font-family: TTLakes, Arial, sans-serif;
  font-style: normal;
  font-size: 14px;
  color: var(--color-font); }

a {
  text-decoration: none;
  color: inherit; }

a:hover {
  cursor: pointer;
  color: var(--color-menu-font);
  transition: 0.3s; }

a:active {
  color: var(--color-menu-font); }

/* -------------------------------------- */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  width: 100%;
  padding: 0 16px;
  border-bottom: 1px solid var(--color-header-border); }

.header__leftmenu {
  display: flex;
  justify-content: flex-start;
  align-items: center; }

.header__leftmenu > img {
  padding-right: 16px; }

.header__leftmenu .header__divider {
  display: none; }

.header__rightmenu {
  display: flex;
  justify-content: flex-end;
  align-items: center; }

.header__rightmenu > img:nth-child(2n+1) {
  margin: 0 16px; }

.header__divider {
  width: 2px;
  height: 32px;
  background-color: #EAEAEA;
  border-radius: 1px;
  margin: 0 4px; }

.header__img_disabled {
  display: none; }

/* --------------------------------------- */
.main {
  background-color: var(--color-bg-main);
  padding: 24px 16px;
  min-height: 100vh;
  position: relative; }

.container {
  width: 100%; }

.main__leftbutton {
  position: fixed;
  top: 0;
  left: 0;
  width: 16px;
  height: 100vh;
  background: var(--color-bg-aside);
  display: flex;
  align-items: center;
  cursor: pointer; }

.main__leftbutton:hover {
  background-color: rgba(14, 24, 80, 0.1);
  box-shadow: 3px 0px 5px 0px rgba(14, 24, 80, 0.1);
  transition: 0.3s; }

.main__leftbutton:hover svg {
  fill: var(--color-menu-font);
  transition: 0.2s; }

/* -------------- aside -------------------- */
.main__aside {
  position: fixed;
  top: 0;
  left: 0;
  width: 270px;
  height: 100vh;
  background: var(--color-bg-aside);
  padding: 18px 24px 32px;
  box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);
  /* display: flex; */
  flex-direction: column;
  justify-content: space-between;
  display: none;
  z-index: 11; }

.main__aside-header,
.main__aside-footer {
  display: flex;
  width: 100%;
  gap: 16px; }

.main__aside-header > img:hover,
.main__aside-footer > img:hover {
  cursor: pointer;
  filter: brightness(150%) opacity(80%);
  transition: all 0.2s ease-in; }

.main__img_search {
  margin-left: auto; }

.main__aside-menu {
  font-family: TTLakes500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  padding: 50px 0;
  list-style-type: none; }

.main__aside-menu li:not(:last-child) {
  margin-bottom: 24px; }

.main__aside-menu li {
  height: 32px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0 -24px 0 -24px; }

.main__aside-menu li:hover {
  cursor: pointer;
  color: var(--color-menu-font);
  transition: 0.3s; }

.main__aside-menu li img {
  opacity: 0; }

.main__aside-menu li:hover img {
  opacity: 1;
  transition: 0.5s; }

.main__aside-mail {
  margin: 16px 0 12px;
  font-size: 16px;
  letter-spacing: -0.2px; }

.main__aside-phone {
  font-family: TTLakes700;
  font-size: 24px;
  letter-spacing: -0.6px; }

.main__aside-lang {
  list-style-type: none;
  display: flex;
  gap: 8px;
  margin-top: 40px;
  font-size: 16px;
  letter-spacing: -0.2px;
  text-transform: uppercase; }

/* ------------------------------------------ */
.main__header {
  display: flex;
  justify-content: space-between; }

.main__title {
  display: flex;
  gap: 12px; }

.main__h1 {
  font-family: TTLakes700;
  font-size: 28px;
  line-height: 1.43;
  letter-spacing: -0.6px; }

.main__rightmenu_disabled {
  display: none; }

/* ------------- Navbar ------------------------ */
.navbar {
  display: flex;
  margin: 24px 16px;
  gap: 16px;
  overflow-x: scroll;
  min-width: 300px;
  list-style: none; }

.navbar::-webkit-scrollbar {
  height: 1px; }

.navbar__item {
  display: block;
  font-family: TTLakes500;
  color: var(--color-menu-font);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.2px;
  padding: 8px 16px;
  border: 2px solid transparent; }

a.navbar__item:hover {
  border: 2px solid var(--color-menu-border);
  border-radius: 6px;
  background-color: #fff; }

a.navbar__item:visited {
  border: 2px solid var(--color-menu-border);
  border-radius: 6px; }

/* -------------------------------- */
.main__content {
  display: flex;
  flex-direction: column;
  padding: 0 16px; }

.main__text > p:not(:first-child) {
  padding-top: 24px; }

.main__text_hidden {
  height: 80px;
  overflow-y: hidden; }

.main__content > img {
  width: 320px;
  object-fit: contain;
  align-self: center;
  padding-top: 10px; }

/* ---------------- Brands ---------------------- */
.main__brands {
  padding: 32px; }

.main__brands-title {
  font-family: TTLakes;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: -0.2px;
  color: var(--color-menu-font);
  padding-bottom: 32px; }

.main__brands-container {
  display: flex;
  gap: 16px;
  padding-top: 32px;
  overflow: hidden; }

.main__brands-content {
  display: flex;
  width: 240px;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  border: 1px solid var(--color-brand-border);
  background: var(--color-bg-header);
  padding-left: 16px; }

.main__brands-icon {
  margin: 16px;
  cursor: pointer;
  height: 40px; }

#brandsMain {
  display: none; }

/* -------- button ------------------------ */
.showHideButton {
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  color: var(--color-font);
  font-family: TTLakes500;
  font-size: 16px;
  letter-spacing: -0.2px;
  cursor: pointer;
  background-color: inherit;
  margin-top: 24px; }

.showHideButton:hover {
  color: var(--color-menu-font);
  transition: 0.3s; }

.showHideButton_rotate {
  transform: rotate(180deg); }

/* -------- Slider ------------- */
.swiper {
  width: 100%;
  height: 100%; }

.swiper-slide {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  border: 1px solid var(--color-brand-border);
  background: var(--color-bg-header);
  padding-left: 16px;
  min-width: 200px; }

/* ======================================= */
@media screen and (min-width: 768px) {
  .main__aside {
    width: 270px; }
  .container {
    width: 100%;
    margin: 0 auto; }
  .header {
    padding: 0 24px; }
  .header__leftmenu .header__divider {
    display: block; }
  .header__leftmenu > img:nth-child(3) {
    padding-left: 16px; }
  .header__img_disabled {
    display: block; }
  /* -------------------------- */
  .navbar {
    margin: 32px 24px; }
  .main__title {
    gap: 20px; }
  /* --------------------------- */
  .main__content {
    display: flex;
    flex-direction: row;
    padding: 0 24px; }
  .main__text {
    padding-right: 48px; }
  .main__content > img {
    width: 50%;
    object-fit: contain;
    align-self: flex-start;
    padding-top: 0; }
  /* --------------------------- */
  #brandsMain {
    display: block; }
  #brandsMainMobile {
    display: none; }
  .main__brands {
    padding: 24px 16px; }
  .main__brands_hidden {
    height: 190px;
    overflow-y: hidden; }
  .main__brands-title {
    padding: 8px 0; }
  .main__brands-container {
    padding-top: 24px;
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 240px));
    gap: 16px 24px;
    justify-content: center; }
  .main__brands-content {
    width: auto; } }

/* ============================================= */
@media screen and (min-width: 1120px) {
  .container {
    width: 1100px; }
  .header {
    display: none; }
  .navbar {
    margin: 32px 34px; }
  .main__title {
    gap: 30px; }
  .main {
    padding-top: 42px; }
  .main__rightmenu_disabled {
    display: flex;
    gap: 32px; }
  .main__righticons {
    display: flex;
    align-items: center;
    font-family: TTLakes500;
    font-size: 16px;
    gap: 8px; }
  .main__righticons:hover {
    cursor: pointer;
    font-weight: bolder; }
  .main__content {
    padding: 0 34px; }
  /* --------------------- */
  .main__brands {
    padding: 0 32px 34px; }
  .main__brands-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px 32px; } }
`, "",{"version":3,"sources":["webpack://./../node_modules/normalize.css/normalize.css","webpack://./styles/style.css"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n","@import 'TTLakes.css';\r\n@import '~normalize.css';\r\n\r\nhtml {\r\n    box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n    box-sizing: inherit;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n:root {\r\n    --color-bg-main: #F8F8F8;\r\n    --color-bg-aside: #FFFFFF;\r\n    --color-bg-header: #FFFFFF;\r\n    --color-icon-main: #FF3E79;\r\n    --color-font: #1B1C21;\r\n    --color-menu-font: #7E7E82;\r\n    --color-menu-start: #41F6D7;\r\n    --color-menu-border: #B8FFEC;\r\n    --color-header-border: #D9FFF5;\r\n    --color-brand-border: #EAEAEA;\r\n}\r\n\r\nbody {\r\n    min-width: 320px;\r\n    max-width: 100vw;\r\n    font-family: TTLakes, Arial, sans-serif;\r\n    font-style: normal;\r\n    font-size: 14px;\r\n    color: var(--color-font);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n\r\na:hover {\r\n    cursor: pointer;\r\n    color: var(--color-menu-font);\r\n    transition: 0.3s;\r\n}\r\n\r\na:active {\r\n    color: var(--color-menu-font);\r\n}\r\n\r\n/* -------------------------------------- */\r\n\r\n.header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 88px;\r\n    width: 100%;\r\n    padding: 0 16px;\r\n    border-bottom: 1px solid var(--color-header-border);\r\n}\r\n\r\n.header__leftmenu {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.header__leftmenu>img {\r\n    padding-right: 16px;\r\n}\r\n\r\n.header__leftmenu .header__divider {\r\n    display: none;\r\n}\r\n\r\n.header__rightmenu {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n}\r\n\r\n.header__rightmenu>img:nth-child(2n+1) {\r\n    margin: 0 16px;\r\n}\r\n\r\n.header__divider {\r\n    width: 2px;\r\n    height: 32px;\r\n    background-color: #EAEAEA;\r\n    border-radius: 1px;\r\n    margin: 0 4px;\r\n}\r\n\r\n.header__img_disabled {\r\n    display: none;\r\n}\r\n\r\n/* --------------------------------------- */\r\n\r\n.main {\r\n    background-color: var(--color-bg-main);\r\n    padding: 24px 16px;\r\n    min-height: 100vh;\r\n    position: relative;\r\n}\r\n\r\n.container {\r\n    width: 100%;\r\n}\r\n\r\n.main__leftbutton {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 16px;\r\n    height: 100vh;\r\n    background: var(--color-bg-aside);\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.main__leftbutton:hover {\r\n    background-color: rgba(14, 24, 80, 0.10);\r\n    box-shadow: 3px 0px 5px 0px rgba(14, 24, 80, 0.10);\r\n    transition: 0.3s;\r\n}\r\n\r\n.main__leftbutton:hover svg {\r\n    fill: var(--color-menu-font);\r\n    transition: 0.2s;\r\n}\r\n\r\n/* -------------- aside -------------------- */\r\n\r\n.main__aside {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 270px;\r\n    height: 100vh;\r\n    background: var(--color-bg-aside);\r\n    padding: 18px 24px 32px;\r\n    box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.20), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);\r\n    /* display: flex; */\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    display: none;\r\n    z-index: 11;\r\n}\r\n\r\n.main__aside-header,\r\n.main__aside-footer {\r\n    display: flex;\r\n    width: 100%;\r\n    gap: 16px;\r\n}\r\n\r\n.main__aside-header>img:hover,\r\n.main__aside-footer>img:hover {\r\n    cursor: pointer;\r\n    filter: brightness(150%) opacity(80%);\r\n    transition: all 0.2s ease-in;\r\n}\r\n\r\n.main__img_search {\r\n    margin-left: auto;\r\n}\r\n\r\n.main__aside-menu {\r\n    font-family: TTLakes500;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    letter-spacing: -0.2px;\r\n    padding: 50px 0;\r\n    list-style-type: none;\r\n}\r\n\r\n.main__aside-menu li:not(:last-child) {\r\n    margin-bottom: 24px;\r\n}\r\n\r\n.main__aside-menu li {\r\n    height: 32px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n    margin: 0 -24px 0 -24px;\r\n}\r\n\r\n.main__aside-menu li:hover {\r\n    cursor: pointer;\r\n    color: var(--color-menu-font);\r\n    transition: 0.3s;\r\n}\r\n\r\n.main__aside-menu li img {\r\n    opacity: 0;\r\n}\r\n\r\n.main__aside-menu li:hover img {\r\n    opacity: 1;\r\n    transition: 0.5s;\r\n}\r\n\r\n.main__aside-mail {\r\n    margin: 16px 0 12px;\r\n    font-size: 16px;\r\n    letter-spacing: -0.2px;\r\n}\r\n\r\n.main__aside-phone {\r\n    font-family: TTLakes700;\r\n    font-size: 24px;\r\n    letter-spacing: -0.6px;\r\n}\r\n\r\n.main__aside-lang {\r\n    list-style-type: none;\r\n    display: flex;\r\n    gap: 8px;\r\n    margin-top: 40px;\r\n    font-size: 16px;\r\n    letter-spacing: -0.2px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n/* ------------------------------------------ */\r\n\r\n.main__header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.main__title {\r\n    display: flex;\r\n    gap: 12px;\r\n}\r\n\r\n.main__h1 {\r\n    font-family: TTLakes700;\r\n    font-size: 28px;\r\n    line-height: 1.43;\r\n    letter-spacing: -0.6px;\r\n}\r\n\r\n.main__rightmenu_disabled {\r\n    display: none;\r\n}\r\n\r\n/* ------------- Navbar ------------------------ */\r\n\r\n.navbar {\r\n    display: flex;\r\n    margin: 24px 16px;\r\n    gap: 16px;\r\n    overflow-x: scroll;\r\n    min-width: 300px;\r\n    list-style: none;\r\n}\r\n\r\n.navbar::-webkit-scrollbar {\r\n    height: 1px;\r\n}\r\n\r\n.navbar__item {\r\n    display: block;\r\n    font-family: TTLakes500;\r\n    color: var(--color-menu-font);\r\n    font-size: 16px;\r\n    line-height: 1.5;\r\n    letter-spacing: -0.2px;\r\n    padding: 8px 16px;\r\n    border: 2px solid transparent;\r\n}\r\n\r\na.navbar__item:hover {\r\n    border: 2px solid var(--color-menu-border);\r\n    border-radius: 6px;\r\n    background-color: #fff;\r\n}\r\n\r\na.navbar__item:visited {\r\n    border: 2px solid var(--color-menu-border);\r\n    border-radius: 6px;\r\n}\r\n\r\n/* -------------------------------- */\r\n\r\n.main__content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0 16px;\r\n}\r\n\r\n.main__text>p:not(:first-child) {\r\n    padding-top: 24px;\r\n}\r\n\r\n.main__text_hidden {\r\n    height: 80px;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.main__content>img {\r\n    width: 320px;\r\n    object-fit: contain;\r\n    align-self: center;\r\n    padding-top: 10px;\r\n}\r\n\r\n/* ---------------- Brands ---------------------- */\r\n\r\n.main__brands {\r\n    padding: 32px;\r\n}\r\n\r\n.main__brands-title {\r\n    font-family: TTLakes;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    letter-spacing: -0.2px;\r\n    color: var(--color-menu-font);\r\n    padding-bottom: 32px;\r\n}\r\n\r\n.main__brands-container {\r\n    display: flex;\r\n    gap: 16px;\r\n    padding-top: 32px;\r\n    overflow: hidden;\r\n}\r\n\r\n.main__brands-content {\r\n    display: flex;\r\n    width: 240px;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-radius: 6px;\r\n    border: 1px solid var(--color-brand-border);\r\n    background: var(--color-bg-header);\r\n    padding-left: 16px;\r\n}\r\n\r\n.main__brands-icon {\r\n    margin: 16px;\r\n    cursor: pointer;\r\n    height: 40px;\r\n}\r\n\r\n#brandsMain {\r\n    display: none;\r\n}\r\n\r\n/* -------- button ------------------------ */\r\n\r\n.showHideButton {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    border: none;\r\n    color: var(--color-font);\r\n    font-family: TTLakes500;\r\n    font-size: 16px;\r\n    letter-spacing: -0.2px;\r\n    cursor: pointer;\r\n    background-color: inherit;\r\n    margin-top: 24px;\r\n}\r\n\r\n.showHideButton:hover {\r\n    color: var(--color-menu-font);\r\n    transition: 0.3s;\r\n}\r\n\r\n.showHideButton_rotate {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n\r\n/* -------- Slider ------------- */\r\n\r\n.swiper {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.swiper-slide {\r\n    display: flex !important;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-radius: 6px;\r\n    border: 1px solid var(--color-brand-border);\r\n    background: var(--color-bg-header);\r\n    padding-left: 16px;\r\n    min-width: 200px;\r\n}\r\n\r\n/* ======================================= */\r\n\r\n@media screen and (min-width: 768px) {\r\n\r\n    .main__aside {\r\n        width: 270px;\r\n    }\r\n\r\n    .container {\r\n        width: 100%;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .header {\r\n        padding: 0 24px;\r\n    }\r\n\r\n    .header__leftmenu .header__divider {\r\n        display: block;\r\n    }\r\n\r\n    .header__leftmenu>img:nth-child(3) {\r\n        padding-left: 16px;\r\n    }\r\n\r\n    .header__img_disabled {\r\n        display: block;\r\n    }\r\n\r\n    /* -------------------------- */\r\n\r\n    .navbar {\r\n        margin: 32px 24px;\r\n    }\r\n\r\n    .main__title {\r\n        gap: 20px;\r\n    }\r\n\r\n    /* --------------------------- */\r\n\r\n    .main__content {\r\n        display: flex;\r\n        flex-direction: row;\r\n        padding: 0 24px;\r\n    }\r\n\r\n    .main__text {\r\n        padding-right: 48px;\r\n    }\r\n\r\n    .main__content>img {\r\n        width: 50%;\r\n        object-fit: contain;\r\n        align-self: flex-start;\r\n        padding-top: 0;\r\n    }\r\n\r\n    /* --------------------------- */\r\n\r\n    #brandsMain {\r\n        display: block;\r\n    }\r\n\r\n    #brandsMainMobile {\r\n        display: none;\r\n    }\r\n\r\n    .main__brands {\r\n        padding: 24px 16px;\r\n    }\r\n\r\n    .main__brands_hidden {\r\n        height: 190px;\r\n        overflow-y: hidden;\r\n    }\r\n\r\n    .main__brands-title {\r\n        padding: 8px 0;\r\n    }\r\n\r\n    .main__brands-container {\r\n        padding-top: 24px;\r\n        display: grid;\r\n        grid-template-columns: repeat(3, minmax(200px, 240px));\r\n        gap: 16px 24px;\r\n        justify-content: center;\r\n    }\r\n\r\n    .main__brands-content {\r\n        width: auto;\r\n    }\r\n}\r\n\r\n/* ============================================= */\r\n\r\n@media screen and (min-width: 1120px) {\r\n\r\n    .container {\r\n        width: 1100px;\r\n    }\r\n\r\n    .header {\r\n        display: none;\r\n    }\r\n\r\n    .navbar {\r\n        margin: 32px 34px;\r\n    }\r\n\r\n    .main__title {\r\n        gap: 30px;\r\n    }\r\n\r\n    .main {\r\n        padding-top: 42px;\r\n    }\r\n\r\n    .main__rightmenu_disabled {\r\n        display: flex;\r\n        gap: 32px;\r\n    }\r\n\r\n    .main__righticons {\r\n        display: flex;\r\n        align-items: center;\r\n        font-family: TTLakes500;\r\n        font-size: 16px;\r\n        gap: 8px;\r\n    }\r\n\r\n    .main__righticons:hover {\r\n        cursor: pointer;\r\n        font-weight: bolder;\r\n    }\r\n\r\n    .main__content {\r\n        padding: 0 34px;\r\n    }\r\n\r\n    /* --------------------- */\r\n\r\n    .main__brands {\r\n        padding: 0 32px 34px;\r\n    }\r\n\r\n    .main__brands-container {\r\n        display: grid;\r\n        grid-template-columns: repeat(4, 1fr);\r\n        gap: 16px 32px;\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/TTLakes.css":
/*!*******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/TTLakes.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/TTLakes-Regular.woff */ "./fonts/TTLakes-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/TTLakes-Medium.woff */ "./fonts/TTLakes-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/TTLakes-Bold.woff */ "./fonts/TTLakes-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: TTLakes;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
}

@font-face {
    font-family: TTLakes500;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
}

@font-face {
    font-family: TTLakes700;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype');
}`, "",{"version":3,"sources":["webpack://./styles/TTLakes.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,+DAA0D;AAC9D;;AAEA;IACI,uBAAuB;IACvB,+DAAyD;AAC7D;;AAEA;IACI,uBAAuB;IACvB,+DAAuD;AAC3D","sourcesContent":["@font-face {\r\n    font-family: TTLakes;\r\n    src: url(../fonts/TTLakes-Regular.woff) format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: TTLakes500;\r\n    src: url(../fonts/TTLakes-Medium.woff) format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: TTLakes700;\r\n    src: url(../fonts/TTLakes-Bold.woff) format('truetype');\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./styles/scss.scss":
/*!**************************!*\
  !*** ./styles/scss.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scss_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./scss.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/scss.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scss_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scss_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scss_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scss_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./fonts/TTLakes-Bold.woff":
/*!*********************************!*\
  !*** ./fonts/TTLakes-Bold.woff ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5fe27ad211f7b79014fc.woff";

/***/ }),

/***/ "./fonts/TTLakes-Medium.woff":
/*!***********************************!*\
  !*** ./fonts/TTLakes-Medium.woff ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fe25154d26f37feaf90c.woff";

/***/ }),

/***/ "./fonts/TTLakes-Regular.woff":
/*!************************************!*\
  !*** ./fonts/TTLakes-Regular.woff ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ecf08c49b0b1d4d71f5b.woff";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowHide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowHide */ "./scripts/ShowHide.js");
/* harmony import */ var _BrandsContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrandsContent */ "./scripts/BrandsContent.js");
/* harmony import */ var _LeftMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeftMenu */ "./scripts/LeftMenu.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style.css */ "./styles/style.css");
/* harmony import */ var _styles_scss_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/scss.scss */ "./styles/scss.scss");
/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./babel */ "./scripts/babel.js");
/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel__WEBPACK_IMPORTED_MODULE_5__);







// * Slider -- only mobile version
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var brands_main = document.getElementById('brandsMain');
var brands_container = document.getElementById('brandsContainer');
var read_main = document.getElementById('readMain');
var read_container = document.getElementById('readContainer');
(0,_LeftMenu__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_BrandsContent__WEBPACK_IMPORTED_MODULE_1__["default"])(brands_container);
(0,_ShowHide__WEBPACK_IMPORTED_MODULE_0__["default"])('Показать все', 'Скрыть', 'main__brands_hidden', brands_main, brands_container);
(0,_ShowHide__WEBPACK_IMPORTED_MODULE_0__["default"])('Читать далее', 'Скрыть', 'main__text_hidden', read_main, read_container);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map