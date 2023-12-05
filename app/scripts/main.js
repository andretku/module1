/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/LeftMenu.js":
/*!*****************************!*\
  !*** ./scripts/LeftMenu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ leftMenu)
/* harmony export */ });
function leftMenu() {
  var menuContainer = document.querySelector('#menuContainer');
  var menu = document.querySelector('#menu');
  var burger = document.querySelector('#burger');
  var burgerX = document.querySelector('#burgerX');

  // проверка на размер окна
  if (window.innerWidth >= 1120) {
    menuContainer.addEventListener('click', function () {
      menu.style.display = 'flex';
    });
  } else {
    burger.addEventListener('click', function () {
      menu.style.display = 'flex';
    });
    burgerX.addEventListener('pointerup', function (e) {
      menu.style.display = 'none';
    });
  }
  document.addEventListener('pointerup', function (e) {
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

/***/ "./scripts/Slider.js":
/*!***************************!*\
  !*** ./scripts/Slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slider)
/* harmony export */ });
function slider(container, swiperWrapper, content, cssClass, cssIconClass) {
  var _loop = function _loop(i) {
    var divElem = document.createElement('div');
    if (window.innerWidth < 768) {
      divElem.classList.add('swiper-slide');
    } else {
      divElem.classList.add(cssClass);
    }
    if (swiperWrapper.id === 'brandsSwiper') {
      var imgElem = document.createElement('img');
      imgElem.setAttribute('src', "./assets/brands/".concat(content[i], ".png"));
      imgElem.setAttribute('alt', content[i]);
      var hrefElem = icon(cssIconClass);
      divElem.append(imgElem, hrefElem);
    }
    if (swiperWrapper.id === 'servicesSwiper') {
      var pElem = document.createElement('p');
      pElem.innerText = content[i];
      var _hrefElem = icon(cssIconClass);
      divElem.append(pElem, _hrefElem);
    }
    if (swiperWrapper.id === 'offersSwiper') {
      if (window.innerWidth < 768) {
        var divItem = document.createElement('div');
        divItem.classList.add('offers__content');
        var pFirstElem = document.createElement('p');
        pFirstElem.classList.add('offers__title');
        pFirstElem.innerText = 'Ремонтные услуги';
        var infoFirstElem = document.createElement('p');
        infoFirstElem.classList.add('offers__info');
        infoFirstElem.innerText = content[i].value;
        var pSecondElem = document.createElement('p');
        pSecondElem.classList.add('offers__title');
        pSecondElem.innerText = 'Цена';
        var infoSecondElem = document.createElement('p');
        infoSecondElem.classList.add('offers__info');
        infoSecondElem.innerText = content[i].price;
        var divThirdElem = document.createElement('div');
        divThirdElem.classList.add('offers__order');
        var pThirdElem = document.createElement('p');
        pThirdElem.classList.add('offers__title');
        pThirdElem.innerText = 'Срок';
        var infoThirdElem = document.createElement('p');
        infoThirdElem.classList.add('offers__info');
        infoThirdElem.innerText = content[i].term;
        var buttonElem = document.createElement('button');
        buttonElem.classList.add('orderButton');
        buttonElem.innerHTML = '<p>Заказать</p><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="12" fill="#FF3E79"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8 11.9999L9.79155 9.229C9.3641 8.83529 9.36112 8.16138 9.78509 7.76392L9.92029 7.63716C10.3032 7.27818 10.8985 7.27633 11.2836 7.63294L15.9381 11.9426C15.9715 11.9735 15.9715 12.0263 15.9381 12.0572L11.3467 16.3085C10.9261 16.698 10.2758 16.696 9.85755 16.3039C9.39446 15.8697 9.39771 15.1336 9.86462 14.7036L12.8 11.9999Z" fill="white"/></svg>';
        buttonElem.addEventListener('click', function () {
          console.log('click on:', content[i].id);
        });
        pThirdElem.append(infoThirdElem);
        divThirdElem.append(pThirdElem, buttonElem);
        divItem.append(pFirstElem, infoFirstElem, pSecondElem, infoSecondElem, divThirdElem);
        divElem.append(divItem);
      } else {
        var div1Item = document.createElement('div');
        div1Item.innerText = content[i].value;
        var div2Item = document.createElement('div');
        div2Item.innerText = content[i].price;
        var div3Item = document.createElement('div');
        div3Item.innerText = content[i].term;
        var _buttonElem = document.createElement('button');
        _buttonElem.classList.add('orderButton');
        _buttonElem.innerHTML = '<p>Заказать</p><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="12" fill="#FF3E79"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8 11.9999L9.79155 9.229C9.3641 8.83529 9.36112 8.16138 9.78509 7.76392L9.92029 7.63716C10.3032 7.27818 10.8985 7.27633 11.2836 7.63294L15.9381 11.9426C15.9715 11.9735 15.9715 12.0263 15.9381 12.0572L11.3467 16.3085C10.9261 16.698 10.2758 16.696 9.85755 16.3039C9.39446 15.8697 9.39771 15.1336 9.86462 14.7036L12.8 11.9999Z" fill="white"/></svg>';
        _buttonElem.addEventListener('click', function () {
          console.log('click on:', content[i].id);
        });
        divElem.append(div1Item, div2Item, div3Item, _buttonElem);
      }
    }

    // проверка при загрузке окна
    if (window.innerWidth > 768) {
      container.append(divElem);
    } else {
      swiperWrapper.append(divElem);
    }

    // иконка красной кнопки
    function icon(iconClass) {
      var item = document.createElement('a');
      item.classList.add(iconClass);
      item.setAttribute('href', '#');
      item.innerHTML = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="1" y="1" width="38" height="38" rx="19" stroke="#FF3E79" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 20L17.7071 16.2071C17.3166 15.8166 17.3166 15.1834 17.7071 14.7929L17.7929 14.7071C18.1834 14.3166 18.8166 14.3166 19.2071 14.7071L23.7929 19.2929C24.1834 19.6834 24.1834 20.3166 23.7929 20.7071L19.2071 25.2929C18.8166 25.6834 18.1834 25.6834 17.7929 25.2929L17.7071 25.2071C17.3166 24.8166 17.3166 24.1834 17.7071 23.7929L21.5 20Z" fill="#FF3E79"/>';
      return item;
    }
  };
  for (var i = 0; i < content.length; i++) {
    _loop(i);
  }
}

/***/ }),

/***/ "./scripts/data.js":
/*!*************************!*\
  !*** ./scripts/data.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   brands: () => (/* binding */ brands),
/* harmony export */   offers: () => (/* binding */ offers),
/* harmony export */   services: () => (/* binding */ services)
/* harmony export */ });
var brands = ['lenovo', 'samsung', 'apple', 'viewsonic', 'bosch', 'hp', 'acer', 'sony', 'lenovo', 'samsung', 'apple'];
var services = ['Ремонт ноутбуков', 'Ремонт планшетов', 'Ремонт ПК', 'Ремонт мониторов'];
var offers = [{
  id: 1,
  value: 'Диагностика',
  price: 'Бесплатно',
  term: '30 мин'
}, {
  id: 2,
  value: 'Замена дисплея',
  price: 1000,
  term: '30-120 мин'
}, {
  id: 3,
  value: 'Замена полифонического динамика',
  price: 1000,
  term: '30-120 мин'
}, {
  id: 4,
  value: 'Тестирование с выдачей технического заключения',
  price: 1000,
  term: '30-120 мин'
}, {
  id: 5,
  value: 'Замена программного обеспечения',
  price: 1000,
  term: '30-120 мин'
}];

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/style.scss":
/*!**********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype"); }

@font-face {
  font-family: TTLakes500;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype"); }

@font-face {
  font-family: TTLakes700;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype"); }

/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 18px 16px;
  border-bottom: 1px solid #D9FFF5; }
  .header__leftmenu {
    display: flex;
    justify-content: flex-start;
    align-items: center; }
  .header__leftmenu > img {
    padding-right: 16px; }
    @media screen and (min-width: 768px) {
      .header__leftmenu > img:nth-child(3) {
        padding-left: 16px; } }
  .header__leftmenu .header__divider {
    display: none; }
    @media screen and (min-width: 768px) {
      .header__leftmenu .header__divider {
        display: block; } }
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
    @media screen and (min-width: 768px) {
      .header__img_disabled {
        display: block; } }
  @media screen and (min-width: 768px) {
    .header {
      padding: 18px 24px; } }
  @media screen and (min-width: 1120px) {
    .header {
      display: none; } }

.main {
  background-color: #F8F8F8;
  padding: 24px 0;
  min-height: 100vh;
  position: relative; }
  .main__leftbutton {
    display: none; }
  .main__header {
    display: flex;
    justify-content: space-between; }
  .main__title {
    display: flex;
    align-items: center;
    gap: 12px; }
    @media screen and (min-width: 768px) {
      .main__title {
        gap: 20px; } }
    @media screen and (min-width: 1120px) {
      .main__title {
        gap: 30px; } }
  .main__h1 {
    font-family: TTLakes700;
    font-size: 28px;
    line-height: 1.43;
    letter-spacing: -0.6px; }
  .main__rightmenu_disabled {
    display: none; }
    @media screen and (min-width: 1120px) {
      .main__rightmenu_disabled {
        display: flex;
        gap: 32px; } }
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
    display: flex;
    flex-direction: column;
    padding: 0 16px; }
    .main__content > img {
      width: 320px;
      object-fit: contain;
      align-self: center;
      padding-top: 10px; }
      @media screen and (min-width: 768px) {
        .main__content > img {
          width: 50%;
          object-fit: contain;
          align-self: flex-start;
          padding-top: 0; } }
    @media screen and (min-width: 768px) {
      .main__content {
        display: flex;
        flex-direction: row;
        padding: 0 24px; } }
    @media screen and (min-width: 1120px) {
      .main__content {
        padding: 0 34px; } }
  @media screen and (min-width: 768px) {
    .main__text {
      padding-right: 48px; } }
  .main__text > p:not(:first-child) {
    padding-top: 24px; }
  .main__text_hidden {
    height: 80px;
    overflow-y: hidden; }
  .main__footer {
    padding: 16px;
    color: #1B1C21; }
    .main__footer > p {
      font-family: TTLakes;
      line-height: 20px;
      letter-spacing: 0.2px;
      padding-bottom: 10px; }
    .main__footer > a {
      display: flex;
      align-items: center;
      font-family: TTLakes500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.2px; }
  @media screen and (min-width: 1120px) {
    .main {
      padding: 42px 0; }
      .main__leftbutton {
        position: fixed;
        top: 0;
        left: 0;
        width: 16px;
        height: 100vh;
        background: #FFFFFF;
        display: flex;
        align-items: center;
        cursor: pointer; }
        .main__leftbutton:hover {
          background-color: rgba(14, 24, 80, 0.1);
          box-shadow: 3px 0px 5px 0px rgba(14, 24, 80, 0.1);
          transition: 0.3s; }
        .main__leftbutton:hover svg {
          fill: #7E7E82;
          transition: 0.3s; } }

.aside {
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  height: 100vh;
  background: #FFFFFF;
  padding: 18px 16px;
  box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);
  flex-direction: column;
  justify-content: space-between;
  display: none;
  z-index: 11; }
  .aside__header, .aside__footer {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 16px; }
  .aside__header > img {
    object-fit: contain; }
  .aside__search {
    margin-left: auto; }
  .aside__menu {
    font-family: TTLakes500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    padding: 50px 0;
    list-style-type: none; }
    .aside__menu li {
      height: 32px;
      display: flex;
      align-items: center;
      gap: 20px;
      margin: 0 -24px 0 -24px; }
      .aside__menu li:not(:last-child) {
        margin-bottom: 24px; }
      .aside__menu li:hover {
        cursor: pointer;
        color: var(--color-menu-font);
        transition: 0.3s; }
      .aside__menu li img {
        opacity: 0; }
      .aside__menu li:hover img {
        opacity: 1;
        transition: 0.3s; }
  .aside__mail {
    margin: 16px 0 12px;
    font-size: 16px;
    letter-spacing: -0.2px; }
  .aside__phone {
    font-family: TTLakes700;
    font-size: 24px;
    letter-spacing: -0.6px; }
  .aside__lang {
    list-style-type: none;
    display: flex;
    gap: 8px;
    margin-top: 40px;
    font-size: 16px;
    letter-spacing: -0.2px;
    text-transform: uppercase; }
  @media screen and (min-width: 768px) {
    .aside {
      padding: 18px 24px; } }

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
    color: #7E7E82;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.2px;
    padding: 8px 16px;
    border: 2px solid transparent; }
  .navbar a.navbar__item:hover {
    border: 2px solid #B8FFEC;
    border-radius: 6px;
    background-color: #fff; }
  .navbar a.navbar__item:visited {
    border: 2px solid #B8FFEC;
    border-radius: 6px; }
  @media screen and (min-width: 768px) {
    .navbar {
      margin: 32px 24px; } }
  @media screen and (min-width: 1120px) {
    .navbar {
      margin: 32px 34px; } }

.brands {
  padding: 16px; }
  .brands__container {
    display: none; }
    @media screen and (min-width: 768px) {
      .brands__container {
        padding-top: 24px;
        display: grid;
        grid-template-columns: repeat(3, minmax(200px, 240px));
        gap: 16px 24px;
        justify-content: center; } }
    @media screen and (min-width: 1120px) {
      .brands__container {
        grid-template-columns: repeat(4, 1fr);
        gap: 16px 32px; } }
  .brands__content {
    display: flex;
    width: 240px;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    padding-left: 16px; }
    @media screen and (min-width: 768px) {
      .brands__content {
        width: auto;
        border-radius: 6px;
        border: 1px solid #EAEAEA;
        background: #FFFFFF;
        padding-left: 16px;
        max-width: 240px; } }
  .brands__icon {
    margin: 16px;
    cursor: pointer;
    height: 40px; }
  @media screen and (min-width: 768px) {
    .brands {
      padding: 24px 16px; }
      .brands_hidden {
        height: 190px;
        overflow-y: hidden; } }
  @media screen and (min-width: 1120px) {
    .brands {
      padding: 0 32px 34px; } }

.services {
  padding: 16px; }
  .services__container {
    display: none; }
    @media screen and (min-width: 768px) {
      .services__container {
        padding-top: 24px;
        display: grid;
        grid-template-columns: repeat(3, minmax(200px, 240px));
        gap: 16px 24px;
        justify-content: center; } }
    @media screen and (min-width: 1120px) {
      .services__container {
        grid-template-columns: repeat(4, 1fr);
        gap: 16px 32px; } }
  .services__content {
    display: flex;
    height: 120px;
    padding-top: 16px;
    justify-content: space-between;
    background: #FFFFFF; }
    @media screen and (min-width: 768px) {
      .services__content {
        width: auto;
        border-radius: 6px;
        border: 1px solid #EAEAEA;
        background: #FFFFFF;
        padding-left: 16px;
        max-width: 240px; } }
  .services__icon {
    margin: 16px;
    cursor: pointer;
    height: 40px;
    align-self: flex-end; }
  @media screen and (min-width: 768px) {
    .services {
      padding: 24px 16px; }
      .services_hidden {
        height: 150px;
        overflow-y: hidden; } }
  @media screen and (min-width: 1120px) {
    .services {
      padding: 0 32px 34px; } }

.offers {
  padding: 16px; }
  .offers__container {
    display: none; }
    @media screen and (min-width: 768px) {
      .offers__container {
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        border-radius: 6px;
        justify-content: center; } }
  .offers__header {
    display: flex;
    color: #7E7E82;
    font-family: TTLakes500;
    padding: 46px 16px 16px;
    background: #F8F8F8; }
    .offers__header div:first-child {
      flex: 1;
      min-width: 350px; }
    .offers__header div:nth-child(2) {
      width: 100px; }
    .offers__header div:nth-child(3) {
      width: 120px; }
  .offers__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 160px;
    padding: 16px 16px 16px 0;
    background: #FFFFFF; }
    @media screen and (min-width: 768px) {
      .offers__content {
        flex-direction: row;
        height: auto;
        justify-content: flex-start;
        border-bottom: 1px solid #EAEAEA;
        padding: 24px 0;
        margin: 0 16px; }
        .offers__content div:first-child {
          flex: 1;
          min-width: 350px; }
        .offers__content div:nth-child(2) {
          width: 100px; }
        .offers__content div:nth-child(3) {
          width: 120px; } }
  .offers__title {
    color: #7E7E82;
    font-family: TTLakes500;
    font-size: 14px;
    line-height: 16px; }
  .offers__info {
    color: #1B1C21;
    font-family: TTLakes;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.2px;
    min-width: 100px; }
    .offers__info:not(:last-child) {
      padding-bottom: 16px; }
  .offers__order {
    display: flex;
    justify-content: space-between; }
  @media screen and (min-width: 768px) {
    .offers {
      padding: 24px 16px; } }
  @media screen and (min-width: 1120px) {
    .offers {
      padding: 0 32px 34px; } }

.showHideButton {
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  color: #1B1C21;
  font-family: TTLakes500;
  font-size: 16px;
  letter-spacing: -0.2px;
  cursor: pointer;
  background-color: inherit;
  margin-top: 24px; }
  .showHideButton:hover {
    color: #7E7E82;
    transition: 0.3s; }
  .showHideButton_rotate {
    transform: rotate(180deg); }

.swiper {
  width: 100%;
  height: 100%;
  min-height: 100px; }
  @media screen and (min-width: 768px) {
    .swiper {
      display: none; } }

.swiper-slide {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #EAEAEA;
  background: #FFFFFF;
  padding-left: 16px;
  min-width: 200px;
  max-width: 240px;
  height: 100%;
  width: 100%; }

.footer {
  color: #7E7E82;
  text-align: center;
  font-family: TTLakes500;
  line-height: 16px;
  padding: 16px; }
  .footer p {
    padding-top: 16px; }
  @media screen and (min-width: 768px) {
    .footer {
      display: flex;
      gap: 36px;
      padding: 24px; }
      .footer p {
        text-align: start;
        flex: 1; }
      .footer p:last-child {
        text-align: end; } }
  @media screen and (min-width: 1120px) {
    .footer {
      padding: 32px; } }

html {
  box-sizing: border-box; }

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0; }

body {
  min-width: 320px;
  max-width: 100vw;
  font-family: TTLakes, Arial, sans-serif;
  font-style: normal;
  font-size: 14px;
  color: #1B1C21; }
  body a {
    text-decoration: none;
    color: inherit; }
    body a:hover {
      cursor: pointer;
      color: #7E7E82;
      transition: 0.3s; }
    body a:active {
      color: #7E7E82; }

img[src\$='.svg']:hover,
svg:hover {
  cursor: pointer;
  filter: brightness(150%) opacity(80%);
  transition: all 0.3s ease-in; }

.container {
  width: 100%; }
  @media screen and (min-width: 768px) {
    .container {
      margin: 0 auto; } }
  @media screen and (min-width: 1120px) {
    .container {
      width: 1100px; } }

.section__title {
  font-family: TTLakes;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: -0.2px;
  color: #7E7E82;
  padding-bottom: 32px; }
  @media screen and (min-width: 768px) {
    .section__title {
      padding: 8px 0; } }

@media screen and (min-width: 768px) {
  .swiper {
    display: none; } }

.orderButton {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: #FF3E79;
  color: #FFFFFF;
  font-family: TTLakes700;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -0.2px;
  text-transform: uppercase;
  padding: 4px 12px;
  text-align: left;
  border: none; }
  .orderButton:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.3s; }
`, "",{"version":3,"sources":["webpack://./styles/TTLakes.scss","webpack://./../node_modules/normalize.css/normalize.css","webpack://./styles/style.scss","webpack://./styles/_header.scss","webpack://./styles/_variables.scss","webpack://./styles/_main.scss","webpack://./styles/_aside.scss","webpack://./styles/_navbar.scss","webpack://./styles/_brands.scss","webpack://./styles/_services.scss","webpack://./styles/_offers.scss","webpack://./styles/_showHideButton.scss","webpack://./styles/_swiper.scss","webpack://./styles/_footer.scss"],"names":[],"mappings":"AAAA;EACI,oBAAoB;EACpB,+DAA0D,EAAA;;AAG9D;EACI,uBAAuB;EACvB,+DAAyD,EAAA;;AAG7D;EACI,uBAAuB;EACvB,+DAAuD,EAAA;;ACZ3D,2EAAA;AAEA;+ECY+E;ADT/E;;;ECaE;ADRF;EACE,iBAAiB;EAAE,MAAA;EACnB,8BAA8B;EAAE,MAAA,EAAO;;AAGzC;+ECW+E;ADR/E;;ECWE;ADPF;EACE,SAAS,EAAA;;AAGX;;ECSE;ADLF;EACE,cAAc,EAAA;;AAGhB;;;ECQE;ADHF;EACE,cAAc;EACd,gBAAgB,EAAA;;AAGlB;+ECI+E;ADD/E;;;ECKE;ADAF;EACE,uBAAuB;EAAE,MAAA;EACzB,SAAS;EAAE,MAAA;EACX,iBAAiB;EAAE,MAAA,EAAO;;AAG5B;;;ECME;ADDF;EACE,iCAAiC;EAAE,MAAA;EACnC,cAAc;EAAE,MAAA,EAAO;;AAGzB;+ECI+E;ADD/E;;ECIE;ADAF;EACE,6BAA6B,EAAA;;AAG/B;;;ECGE;ADEF;EACE,mBAAmB;EAAE,MAAA;EACrB,0BAA0B;EAAE,MAAA;EAC5B,iCAAiC;EAAE,MAAA,EAAO;;AAG5C;;ECGE;ADCF;;EAEE,mBAAmB,EAAA;;AAGrB;;;ECEE;ADGF;;;EAGE,iCAAiC;EAAE,MAAA;EACnC,cAAc;EAAE,MAAA,EAAO;;AAGzB;;ECCE;ADGF;EACE,cAAc,EAAA;;AAGhB;;;ECAE;ADKF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB,EAAA;;AAG1B;EACE,eAAe,EAAA;;AAGjB;EACE,WAAW,EAAA;;AAGb;+ECN+E;ADS/E;;ECNE;ADUF;EACE,kBAAkB,EAAA;;AAGpB;+ECT+E;ADY/E;;;ECRE;ADaF;;;;;EAKE,oBAAoB;EAAE,MAAA;EACtB,eAAe;EAAE,MAAA;EACjB,iBAAiB;EAAE,MAAA;EACnB,SAAS;EAAE,MAAA,EAAO;;AAGpB;;;ECNE;ADWF;;EACQ,MAAA;EACN,iBAAiB,EAAA;;AAGnB;;;ECPE;ADYF;;EACS,MAAA;EACP,oBAAoB,EAAA;;AAGtB;;ECTE;ADaF;;;;EAIE,0BAA0B,EAAA;;AAG5B;;ECXE;ADeF;;;;EAIE,kBAAkB;EAClB,UAAU,EAAA;;AAGZ;;ECbE;ADiBF;;;;EAIE,8BAA8B,EAAA;;AAGhC;;ECfE;ADmBF;EACE,8BAA8B,EAAA;;AAGhC;;;;;ECdE;ADqBF;EACE,sBAAsB;EAAE,MAAA;EACxB,cAAc;EAAE,MAAA;EAChB,cAAc;EAAE,MAAA;EAChB,eAAe;EAAE,MAAA;EACjB,UAAU;EAAE,MAAA;EACZ,mBAAmB;EAAE,MAAA,EAAO;;AAG9B;;ECbE;ADiBF;EACE,wBAAwB,EAAA;;AAG1B;;ECfE;ADmBF;EACE,cAAc,EAAA;;AAGhB;;;EChBE;AACF;;EDsBE,sBAAsB;EAAE,MAAA;EACxB,UAAU;EAAE,MAAA,EAAO;;AAGrB;;ECjBE;AACF;;EDsBE,YAAY,EAAA;;AAGd;;;EClBE;AACF;EDuBE,6BAA6B;EAAE,MAAA;EAC/B,oBAAoB;EAAE,MAAA,EAAO;;AAG/B;;ECnBE;AACF;EDuBE,wBAAwB,EAAA;;AAG1B;;;ECpBE;ADyBF;EACE,0BAA0B;EAAE,MAAA;EAC5B,aAAa;EAAE,MAAA,EAAO;;AAGxB;+ECtB+E;ADyB/E;;ECtBE;AD0BF;EACE,cAAc,EAAA;;AAGhB;;ECxBE;AD4BF;EACE,kBAAkB,EAAA;;AAGpB;+EC3B+E;AD8B/E;;EC3BE;AD+BF;EACE,aAAa,EAAA;;AAGf;;EC7BE;AACF;EDiCE,aAAa,EAAA;;AE3Vf;EACI,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,gCCGyB,EAAA;EDAzB;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB,EAAA;EAGvB;IACI,mBAAmB,EAAA;IAEnB;MAHH;QAKW,kBAAkB,EAAA,EACrB;EAIT;IACI,aAAa,EAAA;IAEb;MAHJ;QAIQ,cAAc,EAAA,EAErB;EAED;IACI,aAAa;IACb,yBAAyB;IACzB,mBAAmB,EAAA;EAGvB;IACI,cAAc,EAAA;EAGlB;IACI,UAAU;IACV,YAAY;IACZ,yBC3Ce;ID4Cf,kBAAkB;IAClB,aAAa,EAAA;EAGjB;IACI,aAAa,EAAA;IAEb;MAHJ;QAIQ,cAAc,EAAA,EAErB;EAED;IA3DJ;MA4DQ,kBAAkB,EAAA,EAQzB;EALG;IA/DJ;MAgEQ,aAAa,EAAA,EAIpB;;AEpED;EACI,yBDDkB;ECElB,eAAe;EACf,iBAAiB;EACjB,kBAAkB,EAAA;EAElB;IACI,aAAa,EAAA;EAGjB;IACI,aAAa;IACb,8BAA8B,EAAA;EAGlC;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS,EAAA;IAET;MALJ;QAMQ,SAAS,EAAA,EAMhB;IAHG;MATJ;QAUQ,SAAS,EAAA,EAEhB;EAED;IACI,uBAAuB;IACvB,eAAe;IACf,iBAAiB;IACjB,sBAAsB,EAAA;EAG1B;IACI,aAAa,EAAA;IAEb;MAHJ;QAIQ,aAAa;QACb,SAAS,EAAA,EAEhB;EAED;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,QAAQ,EAAA;IALX;MAQO,eAAe;MACf,mBAAmB,EAAA;EAI3B;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe,EAAA;IAHlB;MAMO,YAAY;MACZ,mBAAmB;MACnB,kBAAkB;MAClB,iBAAiB,EAAA;MAEjB;QAXP;UAYW,UAAU;UACV,mBAAmB;UACnB,sBAAsB;UACtB,cAAc,EAAA,EAErB;IAED;MAnBJ;QAoBQ,aAAa;QACb,mBAAmB;QACnB,eAAe,EAAA,EAMtB;IAHG;MAzBJ;QA0BQ,eAAe,EAAA,EAEtB;EAGG;IADJ;MAEQ,mBAAmB,EAAA,EAE1B;EAED;IACI,iBAAiB,EAAA;EAGrB;IACI,YAAY;IACZ,kBAAkB,EAAA;EAGtB;IACI,aAAa;IACb,cDpGY,EAAA;ICkGf;MAMO,oBAAoB;MACpB,iBAAiB;MACjB,qBAAqB;MACrB,oBAAoB,EAAA;IAT3B;MAaO,aAAa;MACb,mBAAmB;MACnB,uBAAuB;MACvB,eAAe;MACf,iBAAiB;MACjB,sBDvGW,EAAA;EC2GnB;IA7HJ;MA8HQ,eAAe,EAAA;MAEf;QACI,eAAe;QACf,MAAM;QACN,OAAO;QACP,WAAW;QACX,aAAa;QACb,mBDrIY;QCsIZ,aAAa;QACb,mBAAmB;QACnB,eAAe,EAAA;QATlB;UAYO,uCAAwC;UACxC,iDAAkD;UAClD,gBDzHC,EAAA;QC2GR;UAkBO,aD5IS;UC6IT,gBD9HC,EAAA,EC+HJ;;ACpJb;EACI,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,mBFLoB;EEMpB,kBAAkB;EAClB,6FAA8F;EAC9F,sBAAsB;EACtB,8BAA8B;EAC9B,aAAa;EACb,WAAW,EAAA;EAEX;IAEI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,SAAS,EAAA;EAGb;IACI,mBAAmB,EAAA;EAGvB;IACI,iBAAiB,EAAA;EAGrB;IACI,uBAAuB;IACvB,eAAe;IACf,iBAAiB;IACjB,sBFhBe;IEiBf,eAAe;IACf,qBAAqB,EAAA;IANxB;MASO,YAAY;MACZ,aAAa;MACb,mBAAmB;MACnB,SAAS;MACT,uBAAuB,EAAA;MAb9B;QAgBW,mBAAmB,EAAA;MAhB9B;QAoBW,eAAe;QACf,6BAA6B;QAC7B,gBF/BC,EAAA;MESZ;QA0BW,UAAU,EAAA;MA1BrB;QA8BW,UAAU;QACV,gBFxCC,EAAA;EE6Cb;IACI,mBAAmB;IACnB,eAAe;IACf,sBFnDe,EAAA;EEsDnB;IACI,uBAAuB;IACvB,eAAe;IACf,sBAAsB,EAAA;EAG1B;IACI,qBAAqB;IACrB,aAAa;IACb,QAAQ;IACR,gBAAgB;IAChB,eAAe;IACf,sBFlEe;IEmEf,yBAAyB,EAAA;EAG7B;IAxFJ;MAyFQ,kBAAkB,EAAA,EAGzB;;AC5FD;EACI,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB,EAAA;EANpB;IAUQ,WAAW,EAAA;EAGf;IACI,cAAc;IACd,uBAAuB;IACvB,cHViB;IGWjB,eAAe;IACf,gBAAgB;IAChB,sBHDe;IGEf,iBAAiB;IACjB,6BAA6B,EAAA;EArBrC;IAyBQ,yBHjBmB;IGkBnB,kBAAkB;IAClB,sBAAsB,EAAA;EA3B9B;IA+BQ,yBHvBmB;IGwBnB,kBAAkB,EAAA;EAGtB;IAnCJ;MAoCQ,iBAAiB,EAAA,EAMxB;EAHG;IAvCJ;MAwCQ,iBAAiB,EAAA,EAExB;;AC1CD;EACI,aAAa,EAAA;EAEb;IACI,aAAa,EAAA;IAEb;MAHJ;QAIQ,iBAAiB;QACjB,aAAa;QACb,sDAAsD;QACtD,cAAc;QACd,uBAAuB,EAAA,EAO9B;IAJG;MAXJ;QAYQ,qCAAqC;QACrC,cAAc,EAAA,EAErB;EAED;IACI,aAAa;IACb,YAAY;IACZ,8BAA8B;IAC9B,mBAAmB;IACnB,mBJvBiB;IIwBjB,kBAAkB,EAAA;IAElB;MARJ;QASQ,WAAW;QACX,kBAAkB;QAClB,yBJrBgB;QIsBhB,mBJ9Ba;QI+Bb,kBAAkB;QAClB,gBAAgB,EAAA,EAEvB;EAED;IACI,YAAY;IACZ,eAAe;IACf,YAAY,EAAA;EAGhB;IA5CJ;MA6CQ,kBAAkB,EAAA;MAElB;QACI,aAAa;QACb,kBAAkB,EAAA,EACrB;EAGL;IArDJ;MAsDQ,oBAAoB,EAAA,EAE3B;;ACxDD;EACI,aAAa,EAAA;EAEb;IACI,aAAa,EAAA;IAEb;MAHJ;QAIQ,iBAAiB;QACjB,aAAa;QACb,sDAAsD;QACtD,cAAc;QACd,uBAAuB,EAAA,EAO9B;IAJG;MAXJ;QAYQ,qCAAqC;QACrC,cAAc,EAAA,EAErB;EAED;IACI,aAAa;IACb,aAAa;IACb,iBAAiB;IACjB,8BAA8B;IAC9B,mBLvBiB,EAAA;IKyBjB;MAPJ;QAQQ,WAAW;QACX,kBAAkB;QAClB,yBLpBgB;QKqBhB,mBL7Ba;QK8Bb,kBAAkB;QAClB,gBAAgB,EAAA,EAEvB;EAED;IACI,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,oBAAoB,EAAA;EAGxB;IA5CJ;MA6CQ,kBAAkB,EAAA;MAElB;QACI,aAAa;QACb,kBAAkB,EAAA,EACrB;EAGL;IArDJ;MAsDQ,oBAAoB,EAAA,EAE3B;;ACxDD;EACI,aAAa,EAAA;EAEb;IACI,aAAa,EAAA;IAEb;MAHJ;QAIQ,aAAa;QACb,sBAAsB;QACtB,mBNPa;QMQb,kBAAkB;QAClB,uBAAuB,EAAA,EAI9B;EAED;IACI,aAAa;IACb,cNbiB;IMcjB,uBAAuB;IACvB,uBAAuB;IACvB,mBNtBc,EAAA;IMiBjB;MAQO,OAAO;MACP,gBAAgB,EAAA;IATvB;MAaO,YAAY,EAAA;IAbnB;MAiBO,YAAY,EAAA;EAIpB;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;IACb,yBAAyB;IACzB,mBN1CiB,EAAA;IM4CjB;MARJ;QASQ,mBAAmB;QACnB,YAAY;QACZ,2BAA2B;QAC3B,gCN/CW;QMgDX,eAAe;QACf,cAAc,EAAA;QAdrB;UAiBW,OAAO;UACP,gBAAgB,EAAA;QAlB3B;UAsBW,YAAY,EAAA;QAtBvB;UA0BW,YAAY,EAAA,EACf;EAIT;IACI,cNhEiB;IMiEjB,uBAAuB;IACvB,eAAe;IACf,iBAAiB,EAAA;EAGrB;IACI,cNxEY;IMyEZ,oBAAoB;IACpB,eAAe;IACf,iBAAiB;IACjB,qBAAqB;IACrB,gBAAgB,EAAA;IANnB;MASO,oBAAoB,EAAA;EAI5B;IACI,aAAa;IACb,8BAA8B,EAAA;EAGlC;IA9FJ;MA+FQ,kBAAkB,EAAA,EAWzB;EAHG;IAvGJ;MAwGQ,oBAAoB,EAAA,EAE3B;;AC1GD;EACI,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,cPAgB;EOChB,uBAAuB;EACvB,eAAe;EACf,sBPUmB;EOTnB,eAAe;EACf,yBAAyB;EACzB,gBAAgB,EAAA;EAXpB;IAcQ,cPRiB;IOSjB,gBPMS,EAAA;EOHb;IACI,yBAAyB,EAAA;;ACnBjC;EACI,WAAW;EACX,YAAY;EACZ,iBAAiB,EAAA;EAEjB;IALJ;MAMQ,aAAa,EAAA,EAEpB;;AAED;EACI,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,yBRLwB;EQMxB,mBRdqB;EQerB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,WAAW,EAAA;;ACrBf;EACI,cTKqB;ESJrB,kBAAkB;EAClB,uBAAuB;EACvB,iBAAiB;EACjB,aAAa,EAAA;EALjB;IAQQ,iBAAiB,EAAA;EAGrB;IAXJ;MAYQ,aAAa;MACb,SAAS;MACT,aAAa,EAAA;MAdrB;QAiBY,iBAAiB;QACjB,OAAO,EAAA;MAlBnB;QAsBY,eAAe,EAAA,EAClB;EAGL;IA1BJ;MA2BQ,aAAa,EAAA,EAEpB;;AXdD;EACI,sBAAsB,EAAA;;AAG1B;;;EAGI,mBAAmB;EACnB,SAAS;EACT,UAAU,EAAA;;AAGd;EACI,gBEfiB;EFgBjB,gBAAgB;EAChB,uCEXsC;EFYtC,kBAAkB;EAClB,eEfgB;EFgBhB,cE5BgB,EAAA;EFsBpB;IASQ,qBAAqB;IACrB,cAAc,EAAA;IAVtB;MAaY,eAAe;MACf,cEnCa;MFoCb,gBErBK,EAAA;IFMjB;MAmBY,cExCa,EAAA;;AF6CzB;;EAEI,eAAe;EACf,qCAAqC;EACrC,4BAAmC,EAAA;;AAGvC;EACI,WAAW,EAAA;EAEX;IAHJ;MAIQ,cAAc,EAAA,EAMrB;EAHG;IAPJ;MAQQ,aAAa,EAAA,EAEpB;;AAED;EACI,oBAAoB;EACpB,eAAe;EACf,yBAAyB;EACzB,sBExDmB;EFyDnB,cErEqB;EFsErB,oBAAoB,EAAA;EAEpB;IARJ;MASQ,cAAc,EAAA,EAErB;;AAGG;EADJ;IAEQ,aAAa,EAAA,EAEpB;;AAED;EACI,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;EACnB,mBEnFkB;EFoFlB,cE7FqB;EF8FrB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,sBEjFmB;EFkFnB,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAChB,YAAY,EAAA;EAdhB;IAiBQ,eAAe;IACf,YAAY;IACZ,gBEvFS,EAAA","sourcesContent":["@font-face {\r\n    font-family: TTLakes;\r\n    src: url(../fonts/TTLakes-Regular.woff) format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: TTLakes500;\r\n    src: url(../fonts/TTLakes-Medium.woff) format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: TTLakes700;\r\n    src: url(../fonts/TTLakes-Bold.woff) format('truetype');\r\n}","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n","@import 'TTLakes.scss';\r\n@import '~normalize.css';\r\n@import 'variables';\r\n@import 'header';\r\n@import 'main';\r\n@import 'aside';\r\n@import 'navbar';\r\n@import 'brands';\r\n@import 'services';\r\n@import 'offers';\r\n@import 'showHideButton';\r\n@import 'swiper';\r\n@import 'footer';\r\n\r\n\r\nhtml {\r\n    box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n    box-sizing: inherit;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    min-width: $screen-sm;\r\n    max-width: 100vw;\r\n    font-family: $font-family;\r\n    font-style: normal;\r\n    font-size: $font-size;\r\n    color: $color-font;\r\n\r\n    a {\r\n        text-decoration: none;\r\n        color: inherit;\r\n\r\n        &:hover {\r\n            cursor: pointer;\r\n            color: $color-menu-font;\r\n            transition: $transition;\r\n        }\r\n\r\n        &:active {\r\n            color: $color-menu-font;\r\n        }\r\n    }\r\n}\r\n\r\nimg[src$='.svg']:hover,\r\nsvg:hover {\r\n    cursor: pointer;\r\n    filter: brightness(150%) opacity(80%);\r\n    transition: all $transition ease-in;\r\n}\r\n\r\n.container {\r\n    width: 100%;\r\n\r\n    @media screen and (min-width: $screen-md) {\r\n        margin: 0 auto;\r\n    }\r\n\r\n    @media screen and (min-width: $screen-lg) {\r\n        width: 1100px;\r\n    }\r\n}\r\n\r\n.section__title {\r\n    font-family: TTLakes;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    letter-spacing: $letter-spacing;\r\n    color: $color-menu-font;\r\n    padding-bottom: 32px;\r\n\r\n    @media screen and (min-width: $screen-md) {\r\n        padding: 8px 0;\r\n    }\r\n}\r\n\r\n.swiper {\r\n    @media screen and (min-width: $screen-md) {\r\n        display: none;\r\n    }\r\n}\r\n\r\n.orderButton {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-radius: 16px;\r\n    background: $color-button;\r\n    color: $color-bg-header;\r\n    font-family: TTLakes700;\r\n    font-size: 12px;\r\n    line-height: 24px;\r\n    letter-spacing: $letter-spacing;\r\n    text-transform: uppercase;\r\n    padding: 4px 12px;\r\n    text-align: left;\r\n    border: none;\r\n\r\n    &:hover {\r\n        cursor: pointer;\r\n        opacity: 0.8;\r\n        transition: $transition;\r\n    }\r\n}",".header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    padding: 18px 16px;\r\n    border-bottom: 1px solid $color-header-border;\r\n\r\n\r\n    &__leftmenu {\r\n        display: flex;\r\n        justify-content: flex-start;\r\n        align-items: center;\r\n    }\r\n\r\n    &__leftmenu>img {\r\n        padding-right: 16px;\r\n\r\n        @media screen and (min-width: $screen-md) {\r\n            &:nth-child(3) {\r\n                padding-left: 16px;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__leftmenu &__divider {\r\n        display: none;\r\n\r\n        @media screen and (min-width: $screen-md) {\r\n            display: block;\r\n        }\r\n    }\r\n\r\n    &__rightmenu {\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        align-items: center;\r\n    }\r\n\r\n    &__rightmenu>img:nth-child(2n+1) {\r\n        margin: 0 16px;\r\n    }\r\n\r\n    &__divider {\r\n        width: 2px;\r\n        height: 32px;\r\n        background-color: $color-bg-menu;\r\n        border-radius: 1px;\r\n        margin: 0 4px;\r\n    }\r\n\r\n    &__img_disabled {\r\n        display: none;\r\n\r\n        @media screen and (min-width: $screen-md) {\r\n            display: block;\r\n        }\r\n    }\r\n\r\n    @media screen and (min-width: $screen-md) {\r\n        padding: 18px 24px;\r\n    }\r\n\r\n    @media screen and (min-width: $screen-lg) {\r\n        display: none;\r\n    }\r\n\r\n\r\n}","$color-bg-main:#F8F8F8;\r\n$color-bg-aside: #FFFFFF;\r\n$color-bg-header: #FFFFFF;\r\n$color-bg-menu: #EAEAEA;\r\n$color-icon-main: #FF3E79;\r\n$color-font: #1B1C21;\r\n$color-menu-font: #7E7E82;\r\n$color-menu-start: #41F6D7;\r\n$color-menu-border: #B8FFEC;\r\n$color-header-border: #D9FFF5;\r\n$color-brand-border: #EAEAEA;\r\n$color-button: #FF3E79;\r\n\r\n$screen-sm:     320px;\r\n$screen-md:     768px;\r\n$screen-lg:     1120px;\r\n\r\n$font-size:     14px;\r\n$letter-spacing: -0.2px;\r\n$font-family:   TTLakes, Arial, sans-serif;\r\n\r\n$transition: 0.3s;\r\n",".main {\r\n    background-color: $color-bg-main;\r\n    padding: 24px 0;\r\n    min-height: 100vh;\r\n    position: relative;\r\n\r\n    &__leftbutton {\r\n        display: none;\r\n    }\r\n\r\n    &__header {\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    &__title {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 12px;\r\n\r\n        @media screen and (min-width: $screen-md) {\r\n            gap: 20px;\r\n        }\r\n\r\n        @media screen and (min-width: $screen-lg) {\r\n            gap: 30px;\r\n        }\r\n    }\r\n\r\n    &__h1 {\r\n        font-family: TTLakes700;\r\n        font-size: 28px;\r\n        line-height: 1.43;\r\n        letter-spacing: -0.6px;\r\n    }\r\n\r\n    &__rightmenu_disabled {\r\n        display: none;\r\n\r\n        @media screen and (min-width: $screen-lg) {\r\n            display: flex;\r\n            gap: 32px;\r\n        }\r\n    }\r\n\r\n    &__righticons {\r\n        display: flex;\r\n        align-items: center;\r\n        font-family: TTLakes500;\r\n        font-size: 16px;\r\n        gap: 8px;\r\n\r\n        &:hover {\r\n            cursor: pointer;\r\n            font-weight: bolder;\r\n        }\r\n    }\r\n\r\n    &__content {\r\n        display: flex;\r\n        flex-direction: column;\r\n        padding: 0 16px;\r\n\r\n        &>img {\r\n            width: 320px;\r\n            object-fit: contain;\r\n            align-self: center;\r\n            padding-top: 10px;\r\n\r\n            @media screen and (min-width: $screen-md) {\r\n                width: 50%;\r\n                object-fit: contain;\r\n                align-self: flex-start;\r\n                padding-top: 0;\r\n            }\r\n        }\r\n\r\n        @media screen and (min-width: $screen-md) {\r\n            display: flex;\r\n            flex-direction: row;\r\n            padding: 0 24px;\r\n        }\r\n\r\n        @media screen and (min-width: $screen-lg) {\r\n            padding: 0 34px;\r\n        }\r\n    }\r\n\r\n    &__text {\r\n        @media screen and (min-width: $screen-md) {\r\n            padding-right: 48px;\r\n        }\r\n    }\r\n\r\n    &__text>p:not(:first-child) {\r\n        padding-top: 24px;\r\n    }\r\n\r\n    &__text_hidden {\r\n        height: 80px;\r\n        overflow-y: hidden;\r\n    }\r\n\r\n    &__footer {\r\n        padding: 16px;\r\n        color: $color-font;\r\n\r\n\r\n        &>p {\r\n            font-family: TTLakes;\r\n            line-height: 20px;\r\n            letter-spacing: 0.2px;\r\n            padding-bottom: 10px;\r\n        }\r\n\r\n        &>a {\r\n            display: flex;\r\n            align-items: center;\r\n            font-family: TTLakes500;\r\n            font-size: 16px;\r\n            line-height: 24px;\r\n            letter-spacing: $letter-spacing;\r\n        }\r\n    }\r\n\r\n    @media screen and (min-width: $screen-lg) {\r\n        padding: 42px 0;\r\n\r\n        &__leftbutton {\r\n            position: fixed;\r\n            top: 0;\r\n            left: 0;\r\n            width: 16px;\r\n            height: 100vh;\r\n            background: $color-bg-aside;\r\n            display: flex;\r\n            align-items: center;\r\n            cursor: pointer;\r\n\r\n            &:hover {\r\n                background-color: rgba(14, 24, 80, 0.10);\r\n                box-shadow: 3px 0px 5px 0px rgba(14, 24, 80, 0.10);\r\n                transition: $transition;\r\n            }\r\n\r\n            &:hover svg {\r\n                fill: $color-menu-font;\r\n                transition: $transition;\r\n            }\r\n        }\r\n    }\r\n\r\n\r\n}",".aside {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 320px;\r\n    height: 100vh;\r\n    background: $color-bg-aside;\r\n    padding: 18px 16px;\r\n    box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.20), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    display: none;\r\n    z-index: 11;\r\n\r\n    &__header,\r\n    &__footer {\r\n        display: flex;\r\n        align-items: center;\r\n        width: 100%;\r\n        gap: 16px;\r\n    }\r\n\r\n    &__header>img {\r\n        object-fit: contain;\r\n    }\r\n\r\n    &__search {\r\n        margin-left: auto;\r\n    }\r\n\r\n    &__menu {\r\n        font-family: TTLakes500;\r\n        font-size: 16px;\r\n        line-height: 24px;\r\n        letter-spacing: $letter-spacing;\r\n        padding: 50px 0;\r\n        list-style-type: none;\r\n\r\n        & li {\r\n            height: 32px;\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 20px;\r\n            margin: 0 -24px 0 -24px;\r\n\r\n            &:not(:last-child) {\r\n                margin-bottom: 24px;\r\n            }\r\n\r\n            &:hover {\r\n                cursor: pointer;\r\n                color: var(--color-menu-font);\r\n                transition: $transition;\r\n            }\r\n\r\n            & img {\r\n                opacity: 0;\r\n            }\r\n\r\n            &:hover img {\r\n                opacity: 1;\r\n                transition: $transition;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__mail {\r\n        margin: 16px 0 12px;\r\n        font-size: 16px;\r\n        letter-spacing: $letter-spacing;\r\n    }\r\n\r\n    &__phone {\r\n        font-family: TTLakes700;\r\n        font-size: 24px;\r\n        letter-spacing: -0.6px;\r\n    }\r\n\r\n    &__lang {\r\n        list-style-type: none;\r\n        display: flex;\r\n        gap: 8px;\r\n        margin-top: 40px;\r\n        font-size: 16px;\r\n        letter-spacing: $letter-spacing;\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    @media screen and (min-width: $screen-md) {\r\n        padding: 18px 24px;\r\n    }\r\n\r\n}",".navbar {\r\n    display: flex;\r\n    margin: 24px 16px;\r\n    gap: 16px;\r\n    overflow-x: scroll;\r\n    min-width: 300px;\r\n    list-style: none;\r\n\r\n\r\n    &::-webkit-scrollbar {\r\n        height: 1px;\r\n    }\r\n\r\n    &__item {\r\n        display: block;\r\n        font-family: TTLakes500;\r\n        color: $color-menu-font;\r\n        font-size: 16px;\r\n        line-height: 1.5;\r\n        letter-spacing: $letter-spacing;\r\n        padding: 8px 16px;\r\n        border: 2px solid transparent;\r\n    }\r\n\r\n    a.navbar__item:hover {\r\n        border: 2px solid $color-menu-border;\r\n        border-radius: 6px;\r\n        background-color: #fff;\r\n    }\r\n\r\n    a.navbar__item:visited {\r\n        border: 2px solid $color-menu-border;\r\n        border-radius: 6px;\r\n    }\r\n\r\n    @media screen and (min-width: $screen-md) {\r\n        margin: 32px 24px;\r\n    }\r\n\r\n    @media screen and (min-width: $screen-lg) {\r\n        margin: 32px 34px;\r\n    }\r\n}\r\n\r\n",".brands {\r\n    padding: 16px;\r\n\r\n    &__container {\r\n        display: none;\r\n\r\n        @media screen and (min-width: $screen-md) {\r\n            padding-top: 24px;\r\n            display: grid;\r\n            grid-template-columns: repeat(3, minmax(200px, 240px));\r\n            gap: 16px 24px;\r\n            justify-content: center;\r\n        }\r\n\r\n        @media screen and (min-width: $screen-lg) {\r\n            grid-template-columns: repeat(4, 1fr);\r\n            gap: 16px 32px;\r\n        }\r\n    }\r\n\r\n    &__content {\r\n        display: flex;\r\n        width: 240px;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        background: $color-bg-header;\r\n        padding-left: 16px;\r\n\r\n        @media screen and (min-width: $screen-md) {\r\n            width: auto;\r\n            border-radius: 6px;\r\n            border: 1px solid $color-brand-border;\r\n            background: $color-bg-header;\r\n            padding-left: 16px;\r\n            max-width: 240px;\r\n        }\r\n    }\r\n\r\n    &__icon {\r\n        margin: 16px;\r\n        cursor: pointer;\r\n        height: 40px;\r\n    }\r\n\r\n    @media screen and (min-width: $screen-md) {\r\n        padding: 24px 16px;\r\n\r\n        &_hidden {\r\n            height: 190px;\r\n            overflow-y: hidden;\r\n        }\r\n    }\r\n\r\n    @media screen and (min-width: $screen-lg) {\r\n        padding: 0 32px 34px;\r\n    }\r\n}\r\n\r\n\r\n",".services {\r\n    padding: 16px;\r\n\r\n    &__container {\r\n        display: none;\r\n\r\n        @media screen and (min-width: $screen-md) {\r\n            padding-top: 24px;\r\n            display: grid;\r\n            grid-template-columns: repeat(3, minmax(200px, 240px));\r\n            gap: 16px 24px;\r\n            justify-content: center;\r\n        }\r\n\r\n        @media screen and (min-width: $screen-lg) {\r\n            grid-template-columns: repeat(4, 1fr);\r\n            gap: 16px 32px;\r\n        }\r\n    }\r\n\r\n    &__content {\r\n        display: flex;\r\n        height: 120px;\r\n        padding-top: 16px;\r\n        justify-content: space-between;\r\n        background: $color-bg-header;\r\n\r\n        @media screen and (min-width: $screen-md) {\r\n            width: auto;\r\n            border-radius: 6px;\r\n            border: 1px solid $color-brand-border;\r\n            background: $color-bg-header;\r\n            padding-left: 16px;\r\n            max-width: 240px;\r\n        }\r\n    }\r\n\r\n    &__icon {\r\n        margin: 16px;\r\n        cursor: pointer;\r\n        height: 40px;\r\n        align-self: flex-end;\r\n    }\r\n\r\n    @media screen and (min-width: $screen-md) {\r\n        padding: 24px 16px;\r\n\r\n        &_hidden {\r\n            height: 150px;\r\n            overflow-y: hidden;\r\n        }\r\n    }\r\n\r\n    @media screen and (min-width: $screen-lg) {\r\n        padding: 0 32px 34px;\r\n    }\r\n}\r\n\r\n\r\n",".offers {\r\n    padding: 16px;\r\n\r\n    &__container {\r\n        display: none;\r\n\r\n        @media screen and (min-width: $screen-md) {\r\n            display: flex;\r\n            flex-direction: column;\r\n            background: $color-bg-header;\r\n            border-radius: 6px;\r\n            justify-content: center;\r\n        }\r\n\r\n        @media screen and (min-width: $screen-lg) {}\r\n    }\r\n\r\n    &__header {\r\n        display: flex;\r\n        color: $color-menu-font;\r\n        font-family: TTLakes500;\r\n        padding: 46px 16px 16px;\r\n        background: $color-bg-main;\r\n\r\n        & div:first-child {\r\n            flex: 1;\r\n            min-width: 350px;\r\n        }\r\n\r\n        & div:nth-child(2) {\r\n            width: 100px;\r\n        }\r\n        \r\n        & div:nth-child(3) {\r\n            width: 120px;\r\n        }\r\n    }\r\n\r\n    &__content {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        height: 160px;\r\n        padding: 16px 16px 16px 0;\r\n        background: $color-bg-header;\r\n\r\n        @media screen and (min-width: $screen-md) {\r\n            flex-direction: row;\r\n            height: auto;\r\n            justify-content: flex-start;\r\n            border-bottom: 1px solid $color-bg-menu;\r\n            padding: 24px 0;\r\n            margin: 0 16px;\r\n\r\n            & div:first-child {\r\n                flex: 1;\r\n                min-width: 350px;\r\n            }\r\n\r\n            & div:nth-child(2) {\r\n                width: 100px;\r\n            }\r\n\r\n            & div:nth-child(3) {\r\n                width: 120px;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__title {\r\n        color: $color-menu-font;\r\n        font-family: TTLakes500;\r\n        font-size: 14px;\r\n        line-height: 16px;\r\n    }\r\n\r\n    &__info {\r\n        color: $color-font;\r\n        font-family: TTLakes;\r\n        font-size: 14px;\r\n        line-height: 18px;\r\n        letter-spacing: 0.2px;\r\n        min-width: 100px;\r\n\r\n        &:not(:last-child) {\r\n            padding-bottom: 16px;\r\n        }\r\n    }\r\n\r\n    &__order {\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    @media screen and (min-width: $screen-md) {\r\n        padding: 24px 16px;\r\n\r\n        // &_hidden {\r\n        //     height: 190px;\r\n        //     overflow-y: hidden;\r\n        // }\r\n    }\r\n\r\n    @media screen and (min-width: $screen-lg) {\r\n        padding: 0 32px 34px;\r\n    }\r\n}",".showHideButton {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    border: none;\r\n    color: $color-font;\r\n    font-family: TTLakes500;\r\n    font-size: 16px;\r\n    letter-spacing: $letter-spacing;\r\n    cursor: pointer;\r\n    background-color: inherit;\r\n    margin-top: 24px;\r\n\r\n    &:hover {\r\n        color: $color-menu-font;\r\n        transition: $transition;\r\n    }\r\n\r\n    &_rotate {\r\n        transform: rotate(180deg);\r\n    }\r\n}",".swiper {\r\n    width: 100%;\r\n    height: 100%;\r\n    min-height: 100px;\r\n\r\n    @media screen and (min-width: $screen-md) {\r\n        display: none;\r\n    }\r\n}\r\n\r\n.swiper-slide {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-radius: 6px;\r\n    border: 1px solid $color-brand-border;\r\n    background: $color-bg-header;\r\n    padding-left: 16px;\r\n    min-width: 200px;\r\n    max-width: 240px;\r\n    height: 100%;\r\n    width: 100%;\r\n\r\n}",".footer {\r\n    color: $color-menu-font;\r\n    text-align: center;\r\n    font-family: TTLakes500;\r\n    line-height: 16px;\r\n    padding: 16px;\r\n\r\n    & p {\r\n        padding-top: 16px;\r\n    }\r\n\r\n    @media screen and (min-width: $screen-md) {\r\n        display: flex;\r\n        gap: 36px;\r\n        padding: 24px;\r\n\r\n        & p {\r\n            text-align: start;\r\n            flex: 1;\r\n        }\r\n\r\n        & p:last-child {\r\n            text-align: end;\r\n        }\r\n    }\r\n\r\n    @media screen and (min-width: $screen-lg) {\r\n        padding: 32px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {



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

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {



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

module.exports = __webpack_require__.p + "fonts/TTLakes-Bold.woff";

/***/ }),

/***/ "./fonts/TTLakes-Medium.woff":
/*!***********************************!*\
  !*** ./fonts/TTLakes-Medium.woff ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/TTLakes-Medium.woff";

/***/ }),

/***/ "./fonts/TTLakes-Regular.woff":
/*!************************************!*\
  !*** ./fonts/TTLakes-Regular.woff ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/TTLakes-Regular.woff";

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
/******/ 		__webpack_require__.p = scriptUrl + "../";
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowHide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowHide */ "./scripts/ShowHide.js");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ "./scripts/Slider.js");
/* harmony import */ var _LeftMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeftMenu */ "./scripts/LeftMenu.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./scripts/data.js");







(0,_LeftMenu__WEBPACK_IMPORTED_MODULE_2__["default"])();
sliders();
showHideButton();
function showHideButton() {
  var read_main = document.getElementById('readMain');
  var read_container = document.getElementById('readContainer');
  var brands_main = document.getElementById('brandsMain');
  var brands_container = document.getElementById('brandsContainer');
  var services_main = document.getElementById('servicesMain');
  var services_container = document.getElementById('servicesContainer');
  (0,_ShowHide__WEBPACK_IMPORTED_MODULE_0__["default"])('Читать далее', 'Скрыть', 'main__text_hidden', read_main, read_container);
  (0,_ShowHide__WEBPACK_IMPORTED_MODULE_0__["default"])('Показать все', 'Скрыть', 'brands_hidden', brands_main, brands_container);
  (0,_ShowHide__WEBPACK_IMPORTED_MODULE_0__["default"])('Показать все', 'Скрыть', 'services_hidden', services_main, services_container);
}

// * Sliders -- only mobile version
function sliders() {
  var brands_container = document.getElementById('brandsContainer');
  var brands_swiper = document.getElementById('brandsSwiper');
  var services_container = document.getElementById('servicesContainer');
  var services_swiper = document.getElementById('servicesSwiper');
  var offers_container = document.getElementById('offersContainer');
  var offers_swiper = document.getElementById('offersSwiper');
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  (0,_Slider__WEBPACK_IMPORTED_MODULE_1__["default"])(brands_container, brands_swiper, _data__WEBPACK_IMPORTED_MODULE_4__.brands, 'brands__content', 'brands__icon');
  (0,_Slider__WEBPACK_IMPORTED_MODULE_1__["default"])(services_container, services_swiper, _data__WEBPACK_IMPORTED_MODULE_4__.services, 'services__content', 'services__icon');
  (0,_Slider__WEBPACK_IMPORTED_MODULE_1__["default"])(offers_container, offers_swiper, _data__WEBPACK_IMPORTED_MODULE_4__.offers, 'offers__content', 'offers__icon');
}

// if (window.innerWidth > 768) {
//     main.append(buttonElem)
// }
})();

/******/ })()
;
//# sourceMappingURL=main.js.map