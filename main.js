/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/ocean.jpg */ \"./src/img/ocean.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    padding: 0;\\n    margin: 0;\\n}\\n\\n#content {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-size: cover;\\n    /* min-height: 100vh; */\\n}\\n\\n.board-container {\\n    background-color: #ffffff99;\\n\\n}\\n\\n.boards,\\n.header,\\n.index-column {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.header {\\n    margin-bottom: 50px;\\n}\\n\\n.header h1 {\\n    font-size: 3rem;\\n}\\n\\n.gameboards {\\n    display: flex;\\n    justify-content: center;\\n    gap: 100px;\\n}\\n\\n.all-col-index,\\n.index-row {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n\\n}\\n\\n.all-col-index {\\n    justify-content: flex-end;\\n}\\n\\n\\n.row {\\n    display: flex;\\n}\\n\\n.grid,\\n.index-column,\\n.index-row {\\n    width: 60px;\\n    height: 60px;\\n    border: 1px rgb(0, 0, 0) solid;\\n\\n}\\n\\n#hovered {\\n    background-color: black;\\n}\\n\\n#ship-placed {\\n    background-color: red;\\n}\\n\\n.index-row {\\n    background-color: black;\\n    color: rgb(251, 242, 242);\\n    border-bottom: 1px grey solid;\\n}\\n\\n.index-column {\\n    background-color: black;\\n    color: rgb(251, 242, 242);\\n    border-left: 1px grey solid;\\n}\\n\\n.hit-icon {\\n    opacity: 0.7;\\n}\\n\\n#missed-shot {\\n    background-color: grey;\\n    border-color: red;\\n}\\n\\n.rotate {\\n    border: none;\\n    background: none;\\n    cursor: pointer;\\n    color: white;\\n    font-size: 25px;\\n}\\n\\n.rotate-svg {\\n    fill: white;\\n}\\n\\n.inform-user {\\n    color: white;\\n}\\n\\n#opponent-grid:hover {\\n    background-color: grey;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship-game/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship-game/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DomBoard\": () => (/* binding */ DomBoard),\n/* harmony export */   \"btnRotateEvent\": () => (/* binding */ btnRotateEvent),\n/* harmony export */   \"infoUser\": () => (/* binding */ infoUser)\n/* harmony export */ });\n/* harmony import */ var _src_img_hitX_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/img/hitX.png */ \"./src/img/hitX.png\");\n\n\nfunction createSimpleEl(type, selector_name, innerContent, appendTo) {\n    const ell = document.createElement(type);\n    ell.className = selector_name;\n    if (innerContent !== undefined) {\n        ell.textContent = innerContent;\n    }\n    if (appendTo !== undefined) {\n        appendTo.appendChild(ell);\n    }\n    return ell;\n}\nfunction createImg() {\n    const iconHit = new Image();\n    iconHit.src = _src_img_hitX_png__WEBPACK_IMPORTED_MODULE_0__;\n    iconHit.className = \"hit-icon\";\n    return iconHit;\n}\nfunction btnRotateEvent() {\n    const rotate = document.querySelector(\".rotate\");\n    rotate.addEventListener(\"click\", () => {\n        rotate.value = Number(rotate.value) + 1;\n        if (Number(rotate.value) >= 4) {\n            rotate.value = 0;\n        }\n    });\n}\nfunction infoUser(passToUser) {\n    const info = document.querySelector(\".inform-user\");\n    info.textContent = passToUser;\n}\nfunction DomBoard(player1) {\n    const boardContainer = document.querySelector(\".gameboards\");\n    let allRows = createDomBoard().slice(1);\n    return { hitEvent, missedEvent, hoverGridEvents, allRows, clickShipPlace };\n\n    function hitEvent(arr) {\n        const img = createImg();\n        allRows[arr[0]][arr[1]].appendChild(img);\n    }\n    function missedEvent(arr) {\n        allRows[arr[0]][arr[1]].setAttribute(\"id\", \"missed-shot\");\n    }\n    function clickShipPlace(arr) {\n        if (!Array.isArray(arr)) {\n            return;\n        }\n        arr.forEach((ar) =>\n            allRows[ar[0]][ar[1]].setAttribute(\"id\", \"ship-placed\")\n        );\n    }\n    function hoverGridEvents(arr, remove) {\n        const rotate = document.querySelector(\".rotate\");\n        const direction = Object.keys(arr)[Number(rotate.value)];\n        if (arr === \"POSITION ALREADY USED\" || arr === \"Not a valid move\")\n            return;\n\n        if (remove === true) {\n            arr[direction].forEach((ar) => {\n                if (allRows[ar[0]][ar[1]].id === \"hovered\") {\n                    allRows[ar[0]][ar[1]].setAttribute(\"id\", \"\");\n                }\n            });\n        } else {\n            arr[direction].forEach((ar) => {\n                if (allRows[ar[0]][ar[1]].id !== \"ship-placed\") {\n                    allRows[ar[0]][ar[1]].setAttribute(\"id\", \"hovered\");\n                }\n            });\n        }\n    }\n    function createDomBoard() {\n        let letters = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\n        const theBoard = createSimpleEl(\"div\", \"boards\", \"\", boardContainer);\n        let boardCon = createSimpleEl(\"div\", \"board-container\", \"\", theBoard);\n        let allRows = [];\n\n        const colIndexLetters = (r, i) => {\n            if (i === 0) {\n                createSimpleEl(\"div\", \"index-row\", \"\", r);\n            } else {\n                createSimpleEl(\"div\", \"index-row\", i - 1, r);\n            }\n        };\n\n        const boardRows = (r, i) => {\n            const tenRows = [];\n            const arr = Array.from(Array(10).keys());\n\n            arr.forEach((a) => {\n                const indxLetter = letters.shift();\n                if (r.className !== \"row\") {\n                    createSimpleEl(\"div\", \"index-column\", indxLetter, r);\n                } else {\n                    const el = createSimpleEl(\"div\", \"grid\", \"\", r);\n                    /* value = dom/obj board coordinate*/\n                    el.value = `${i - 1},${a}`;\n                    tenRows.push(el);\n                }\n            });\n            return tenRows;\n        };\n\n        for (let i = 0; i <= 10; i++) {\n            const row = document.createElement(\"div\");\n            if (i === 0) {\n                row.classList.add(\"all-col-index\");\n            } else {\n                row.classList.add(\"row\");\n            }\n            colIndexLetters(row, i);\n            allRows.push(boardRows(row, i));\n            boardCon.appendChild(row);\n        }\n        if (player1 === true) {\n            createSimpleEl(\"h2\", \"info\", \"Your side\", theBoard);\n        } else {\n            createSimpleEl(\"h2\", \"info\", \"Opponent side\", theBoard);\n        }\n        return allRows;\n    }\n}\n\n\n\n\n//# sourceURL=webpack://battleship-game/./src/dom.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction objBoard() {\n    let column = [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\"];\n    let board = {};\n\n    const arr = (r) => {\n        /* r++; */\n        let ar = [];\n        for (let i = 0; i <= column.length - 1; i++) {\n            ar.push(\" \");\n        }\n        board[r] = ar;\n    };\n\n    Array.from(column.keys()).forEach((r) => arr(r));\n    return board;\n}\n\nclass GameBoard {\n    constructor() {\n        this.board = objBoard();\n        this.shipsPlaced = 0;\n        this.playerShipLocation = [];\n        this.shotsLocation = [];\n    }\n    allShipSunk(player) {\n        let allSunk = true;\n        player.allShips.forEach((ship) => {\n            if (ship.sunk === false) {\n                allSunk = false;\n                return;\n            }\n        });\n        return allSunk;\n    }\n    receiveAttack(coordinates) {\n        const arrCoord = this.formatCoordinates(coordinates);\n        const hitLocation = this.board[arrCoord[0]][arrCoord[1]];\n        if (this.shotsLocation.includes(coordinates)) {\n            return \"Already shot there\";\n        }\n        if (hitLocation !== \" \") {\n            hitLocation.hit();\n            hitLocation.isSunk();\n            this.shotsLocation.push(coordinates);\n            return [\n                hitLocation.name,\n                hitLocation.hits,\n                hitLocation.isSunk(),\n                arrCoord,\n            ];\n        } else {\n            this.shotsLocation.push(coordinates);\n            return \"Missed\";\n        }\n    }\n\n    formatCoordinates(toFormat) {\n        const coordinates = toFormat.split(\",\");\n        return [Number(coordinates[0]), Number(coordinates[1])];\n    }\n    placeShip(coordinates, ship, confirmed, direction) {\n        if (!Array.isArray(coordinates)) {\n            coordinates = this.formatCoordinates(coordinates);\n        }\n        if (this.board[coordinates[0]][coordinates[1]] !== \" \") {\n            return \"POSITION ALREADY USED\";\n        }\n        const avPos = this.getCoord(coordinates, ship);\n        const isOccupied = (arr) => {\n            if (!Array.isArray(arr)) {\n                return true;\n            }\n            let anw = false;\n            arr.forEach((num) => {\n                if (this.board[num[0]][num[1]] !== \" \") {\n                    anw = true;\n                }\n            });\n            return anw;\n        };\n        const saveShipToObjBoard = (arr) => {\n            arr.forEach((num) => {\n                this.board[num[0]][num[1]] = ship;\n                this.playerShipLocation.push([num[0], num[1]]);\n            });\n        };\n        if (confirmed === true && isOccupied(avPos[direction]) === false) {\n            this.shipsPlaced += 1;\n            saveShipToObjBoard(avPos[direction]);\n            return avPos[direction];\n        }\n        if (isOccupied(avPos[direction]) === true) {\n            return \"Not a valid move\";\n        }\n        return avPos;\n    }\n\n    arrayMoves = (avPos) => {\n        if (Array.isArray(avPos.col)) {\n            let arr = avPos.col.map((i) => [avPos.row, i]);\n            return arr;\n        }\n        if (Array.isArray(avPos.row)) {\n            let arr = avPos.row.map((i) => [i, avPos.col]);\n            return arr;\n        }\n    };\n    /* Don't need all direction just the x and  y  */\n    getCoord(coordinates, ship) {\n        if (!Array.isArray(coordinates)) {\n            coordinates = this.formatCoordinates(coordinates);\n        }\n\n        let up = {\n            row: this.getAllCoord(coordinates[0], ship, true),\n            col: coordinates[1],\n        }; /* row */\n\n        let left = {\n            row: coordinates[0],\n            col: this.getAllCoord(coordinates[1], ship, true),\n        }; /* col */\n        let down = {\n            row: this.getAllCoord(coordinates[0], ship),\n            col: coordinates[1],\n        }; /* row */\n\n        let right = {\n            row: coordinates[0],\n            col: this.getAllCoord(coordinates[1], ship),\n        }; /* col */\n        return {\n            right: this.arrayMoves(right),\n            down: this.arrayMoves(down),\n            left: this.arrayMoves(left),\n            up: this.arrayMoves(up),\n        };\n    }\n\n    getAllCoord(coordinates, ship, minus, indx = 0, lst = []) {\n        if (indx >= ship.length) {\n            return;\n        }\n\n        if (minus === true) {\n            const newC = coordinates - indx;\n            if (newC < 0) {\n                return null;\n            }\n            lst.push(newC);\n        } else {\n            const newC = coordinates + indx;\n            if (newC > 9) {\n                return null;\n            }\n            lst.push(newC);\n        }\n\n        this.getAllCoord(coordinates, ship, minus, indx + 1, lst);\n\n        if (lst.length != ship.length) {\n            return null;\n        }\n        return lst;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n\n//# sourceURL=webpack://battleship-game/./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nfunction pShip(elValue, remove, isClick) {\n    const inx = p1_info.myGame.shipsPlaced;\n    if (inx > 4) {\n        if (!canStart) {\n            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.infoUser)(\"You can attack now\");\n        }\n        canStart = true;\n        return;\n    }\n    const direction = [\"right\", \"down\", \"left\", \"up\"];\n    const i = document.querySelector(\".rotate\").value;\n    const move = p1_info.myGame.placeShip(\n        elValue,\n        p1_info.allShips[inx],\n        isClick,\n        direction[i]\n    );\n    if (isClick === true) {\n        if (p1_info.allShips[inx + 1] !== undefined) {\n            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.infoUser)(\"Place your \" + p1_info.allShips[inx + 1].name);\n        }\n        p1BoardDom.clickShipPlace(move);\n        return;\n    }\n    p1BoardDom.hoverGridEvents(move, remove, isClick);\n}\n\nconst clickPlaceShip = (r) => {\n    r.addEventListener(\"click\", () => {\n        pShip(r.value, false, true);\n    });\n};\nconst addHover = (r) => {\n    r.addEventListener(\"mouseover\", () => {\n        pShip(r.value, false);\n    });\n};\nconst removeHover = (r) => {\n    r.addEventListener(\"mouseout\", () => {\n        pShip(r.value, true);\n    });\n};\n\nfunction attackEvents(el, player, playerDom) {\n    if (typeof el === \"object\") {\n        el = el.value;\n    }\n\n    const coord = player.myGame.formatCoordinates(el);\n    let response = player.myGame.receiveAttack(el);\n    if (Array.isArray(response)) {\n        playerDom.hitEvent(coord);\n        player.turn = true;\n        if (player.myGame.allShipSunk(player) === true) {\n            return \"End game\";\n        }\n    }\n    if (response === \"Missed\") {\n        playerDom.missedEvent(coord);\n        player.turn = true;\n    }\n    if (response === \"Already shot there\") {\n        return \"again\";\n    }\n}\nfunction removeClickAtk() {\n    p2BoardDom.allRows.forEach((arr) =>\n        arr.forEach((r) => r.removeEventListener(\"click\", mainLoop))\n    );\n}\nfunction machineLoop() {\n    const str = p2_info.randCoord().join(\",\");\n    const anw = attackEvents(str, p1_info, p1BoardDom);\n    if (anw === \"again\") {\n        machineLoop();\n    }\n    if (anw === \"End game\") {\n        removeClickAtk();\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.infoUser)(\"You lose!\");\n    }\n    p2_info.turn = false;\n}\nfunction mainLoop() {\n    if (canStart === true) {\n        if (p1_info.turn === true) {\n            const anw = attackEvents(this.value, p2_info, p2BoardDom);\n            if (anw === \"End game\") {\n                removeClickAtk();\n                (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.infoUser)(\"You Won!\");\n            }\n            if (anw !== \"again\") {\n                p1_info.turn = false;\n            }\n        }\n        if (p2_info.turn === true) {\n            machineLoop();\n        }\n    }\n}\nfunction startGameByClickEv() {\n    p2BoardDom.allRows.forEach((arr) =>\n        arr.forEach((r) => {\n            r.id = \"opponent-grid\";\n            r.addEventListener(\"click\", mainLoop);\n        })\n    );\n}\n\nconst p1_info = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.player)();\nconst p1BoardDom = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.DomBoard)(true, p1_info.myGame.board);\nconst p2_info = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.machinePlayer)();\nconst p2BoardDom = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.DomBoard)(false, p1_info.myGame.board);\np2_info.randomPlaceShip(p2_info, p2BoardDom);\nlet canStart = false;\n\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.btnRotateEvent)();\np1BoardDom.allRows.forEach((arr) => {\n    arr.forEach((r) => {\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.infoUser)(\"Place your \" + p1_info.allShips[0].name);\n        addHover(r);\n        removeHover(r);\n        clickPlaceShip(r);\n    });\n});\np1_info.turn = true;\nstartGameByClickEv();\n\n\n//# sourceURL=webpack://battleship-game/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"machinePlayer\": () => (/* binding */ machinePlayer),\n/* harmony export */   \"player\": () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.js */ \"./src/ships.js\");\n/* harmony import */ var _src_gameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/gameBoard.js */ \"./src/gameBoard.js\");\n\n\n\nconst shipType = {\n    Carrier: 5,\n    Battleship: 4,\n    Destroyer: 3,\n    Submarine: 3,\n    \"Patrol Boat\": 2,\n};\nlet allShips = () => Object.keys(shipType).map(_ships_js__WEBPACK_IMPORTED_MODULE_0__.completeShip);\n\nfunction randomNumbers() {\n    let numRand = () => Math.floor(Math.random() * 10);\n    let arr = Array.from(Array(2).keys());\n    let randomArr = arr.map(numRand);\n    return randomArr;\n}\nfunction getRndInteger(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n}\nfunction randomPlaceShip(pc, pcDom) {\n    const inx = pc.myGame.shipsPlaced;\n    if (inx > 4) {\n        return;\n    }\n    let randomPlace = randomNumbers();\n    const objM = pc.myGame.getCoord(randomPlace, pc.allShips[inx]);\n    const direction = () => {\n        const arr = [];\n        Object.keys(objM).forEach((k) => {\n            if (objM[k] !== undefined) {\n                arr.push(k);\n            }\n        });\n        return arr[getRndInteger(0, arr.length - 1)];\n    };\n    const di = direction();\n    if (di === undefined) {\n        randomPlaceShip(pc, pcDom);\n    } else {\n        pc.myGame.placeShip(randomPlace, pc.allShips[inx], true, di);\n        randomPlaceShip(pc, pcDom);\n    }\n}\nfunction machinePlayer() {\n    return {\n        turn: false,\n        allShips: allShips(),\n        myGame: new _src_gameBoard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](),\n        randomPlaceShip,\n        randCoord: randomNumbers,\n    };\n}\nfunction player() {\n    return {\n        turn: false,\n        allShips: allShips(),\n        myGame: new _src_gameBoard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](),\n    };\n}\n\n\n\n//# sourceURL=webpack://battleship-game/./src/player.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"completeShip\": () => (/* binding */ completeShip)\n/* harmony export */ });\nfunction shipsFactory(type, shipLength) {\n    return {\n        name: type,\n        length: shipLength,\n        hits: 0,\n        sunk: false,\n        hit: \"\",\n        isSunk: \"\",\n    };\n}\n\nfunction completeShip(name) {\n    let ship = shipsFactory(String(name), shipType[name]);\n\n    ship.hit = () => {\n        return (ship.hits += 1);\n    };\n\n    ship.isSunk = () => {\n        if (ship.hits === ship.length) {\n            ship.sunk = true;\n            return true;\n        } else {\n            return false;\n        }\n    };\n\n    return ship;\n}\n\nconst shipType = {\n    Carrier: 5,\n    Battleship: 4,\n    Destroyer: 3,\n    Submarine: 3,\n    \"Patrol Boat\": 2,\n};\n\n\n\n\n//# sourceURL=webpack://battleship-game/./src/ships.js?");

/***/ }),

/***/ "./src/img/hitX.png":
/*!**************************!*\
  !*** ./src/img/hitX.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8120ba4e65f827fd2b77.png\";\n\n//# sourceURL=webpack://battleship-game/./src/img/hitX.png?");

/***/ }),

/***/ "./src/img/ocean.jpg":
/*!***************************!*\
  !*** ./src/img/ocean.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"05b2df6cb23b6173b408.jpg\";\n\n//# sourceURL=webpack://battleship-game/./src/img/ocean.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;