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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    padding: 0;\\n    margin: 0;\\n}\\n\\n.boards,\\n.header,\\n.index-column {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.header {\\n    margin-bottom: 50px;\\n}\\n\\n.header h1 {\\n    font-size: 3rem;\\n}\\n\\n.gameboards {\\n    display: flex;\\n    justify-content: center;\\n    gap: 100px;\\n}\\n\\n.all-col-index,\\n.index-row {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n\\n}\\n\\n\\n\\n.row {\\n    display: flex;\\n}\\n\\n.grid,\\n.index-column,\\n.index-row {\\n    width: 60px;\\n    height: 60px;\\n    border: 1px rgb(0, 0, 0) solid;\\n\\n}\\n#hovered{\\n    background-color: black;\\n}\\n#ship-placed{\\n    background-color: red;\\n}\\n.index-column,\\n.index-row {\\n    background-color: black;\\n    color: rgb(251, 242, 242);\\n    border: 1px rgb(0, 0, 0) solid;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship-game/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/api.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DomBoard\": () => (/* binding */ DomBoard),\n/* harmony export */   \"btnRotateEvent\": () => (/* binding */ btnRotateEvent)\n/* harmony export */ });\nfunction createSimpleEl(type, selector_name, innerContent, appendTo) {\n\tconst ell = document.createElement(type);\n\tell.className = selector_name;\n\tif (innerContent !== undefined) {\n\t\tell.textContent = innerContent;\n\t}\n\tif (appendTo !== undefined) {\n\t\tappendTo.appendChild(ell);\n\t}\n\treturn ell;\n}\nfunction btnRotateEvent() {\n\tconst rotate = document.querySelector(\".rotate\");\n\trotate.addEventListener(\"click\", () => {\n\t\trotate.value = Number(rotate.value) + 1;\n\t\tif (Number(rotate.value) >= 4) {\n\t\t\trotate.value = 0;\n\t\t}\n\t});\n}\nfunction DomBoard(player1) {\n\tconst boardContainer = document.querySelector(\".gameboards\");\n\tlet allRows = createDomBoard().slice(1);\n\treturn { hoverGridEvents, allRows, clickShipPlace };\n\n\tfunction clickShipPlace(arr) {\n\t\tif (!Array.isArray(arr)) {\n\t\t\treturn;\n\t\t}\n\t\tarr.forEach((ar) =>\n\t\t\tallRows[ar[0]][ar[1]].setAttribute(\"id\", \"ship-placed\")\n\t\t);\n\t}\n\tfunction hoverGridEvents(arr, remove) {\n\t\tconst rotate = document.querySelector(\".rotate\");\n\n\t\tconst direction = Object.keys(arr)[Number(rotate.value)];\n\t\tif (arr[direction] === undefined) return;\n\t\tif (arr === \"POSITION ALREADY USED\") return;\n\n\t\tif (remove === true) {\n\t\t\tarr[direction].forEach((ar) => {\n\t\t\t\tif (allRows[ar[0]][ar[1]].id === \"hovered\") {\n\t\t\t\t\tallRows[ar[0]][ar[1]].setAttribute(\"id\", \"\");\n\t\t\t\t}\n\t\t\t});\n\t\t} else {\n\t\t\tarr[direction].forEach((ar) => {\n\t\t\t\tif (allRows[ar[0]][ar[1]].id !== \"ship-placed\") {\n\t\t\t\t\tallRows[ar[0]][ar[1]].setAttribute(\"id\", \"hovered\");\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}\n\tfunction createDomBoard() {\n\t\tlet letters = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\n\t\tconst theBoard = createSimpleEl(\"div\", \"boards\", \"\", boardContainer);\n\t\tlet boardCon = createSimpleEl(\"div\", \"board-container\", \"\", theBoard);\n\t\tlet allRows = [];\n\n\t\tconst colIndexLetters = (r, i) => {\n\t\t\tif (i === 0) {\n\t\t\t\tcreateSimpleEl(\"div\", \"index-row\", \"\", r);\n\t\t\t} else {\n\t\t\t\tcreateSimpleEl(\"div\", \"index-row\", i - 1, r);\n\t\t\t}\n\t\t};\n\n\t\tconst boardRows = (r, i) => {\n\t\t\tconst tenRows = [];\n\t\t\tconst arr = Array.from(Array(10).keys());\n\n\t\t\tarr.forEach((a) => {\n\t\t\t\tconst indxLetter = letters.shift();\n\t\t\t\tif (r.className !== \"row\") {\n\t\t\t\t\tcreateSimpleEl(\"div\", \"index-column\", indxLetter, r);\n\t\t\t\t} else {\n\t\t\t\t\tconst el = createSimpleEl(\"div\", \"grid\", \"\", r);\n\t\t\t\t\t/* value = dom/obj board coordinate*/\n\t\t\t\t\tel.value = `${i - 1},${a}`;\n\t\t\t\t\ttenRows.push(el);\n\t\t\t\t}\n\t\t\t});\n\t\t\treturn tenRows;\n\t\t};\n\n\t\tfor (let i = 0; i <= 10; i++) {\n\t\t\tconst row = document.createElement(\"div\");\n\t\t\tif (i === 0) {\n\t\t\t\trow.classList.add(\"all-col-index\");\n\t\t\t} else {\n\t\t\t\trow.classList.add(\"row\");\n\t\t\t}\n\t\t\tcolIndexLetters(row, i);\n\t\t\tallRows.push(boardRows(row, i));\n\t\t\tboardCon.appendChild(row);\n\t\t}\n\t\tif (player1 === true) {\n\t\t\tcreateSimpleEl(\"h2\", \"info\", \"Your side\", theBoard);\n\t\t} else {\n\t\t\tcreateSimpleEl(\"h2\", \"info\", \"Opponent side\", theBoard);\n\t\t}\n\t\treturn allRows;\n\t}\n}\n\n\n\n\n//# sourceURL=webpack://battleship-game/./src/dom.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* \nGame boards \nshould be able to report whether or not all of their ships have been sunk. */\n\n/* a 2D board with 10x10 with column being letter and row number */\nfunction objBoard() {\n\tlet column = [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\"];\n\tlet board = {};\n\n\tconst arr = (r) => {\n\t\t/* r++; */\n\t\tlet ar = [];\n\t\tfor (let i = 0; i <= column.length - 1; i++) {\n\t\t\tar.push(\" \");\n\t\t}\n\t\tboard[r] = ar;\n\t};\n\n\t/* board.columns = column; */\n\tArray.from(column.keys()).forEach((r) => arr(r));\n\treturn board;\n}\n/* should be able to place ships at specific coordinates\nby calling the ship factory function. */\n/* user will click in a board location then the ship image \nwill show default position being horizontal */\nclass GameBoard {\n\tconstructor() {\n\t\tthis.board = objBoard();\n\t\tthis.shipsPlaced = 0;\n\t\t/* instead of shot we save the coordinates of each ship  */\n\t\tthis.playerShipLocation = [];\n\t\tthis.shotsLocation = [];\n\t}\n\t/* should be able to report whether or not all of their ships have been sunk. */\n\tallShipSunk(player) {\n\t\t/*\n\t\tallsunk = true \n\t\tplayer.allShips.forEach \n\t\ts => if s.sunk === false \n\t\t\tallsunk = false\n\t\t\treturn\n\t\treturn allsunk\n\t\t*/\n\t}\n\treceiveAttack(coordinates) {\n\t\tcoordinates = this.formatCoordinates(coordinates);\n\n\t\tconst hitLocation = this.board[coordinates[0]][coordinates[1]];\n\t\tif (this.shotsLocation.includes(coordinates.join(\",\"))) {\n\t\t\treturn \"Already shot there\";\n\t\t}\n\t\tif (hitLocation !== \" \") {\n\t\t\thitLocation.hit();\n\t\t\thitLocation.isSunk();\n\t\t\tthis.shotsLocation.push(coordinates.join(\",\"));\n\t\t\treturn [hitLocation.name, hitLocation.hits, hitLocation.sunk];\n\t\t} else {\n\t\t\tthis.shotsLocation.push(coordinates.join(\",\"));\n\t\t\treturn \"Missed\";\n\t\t}\n\t}\n\n\tformatCoordinates(toFormat) {\n\t\tconst coordinates = toFormat.split(\",\");\n\t\treturn [Number(coordinates[0]), Number(coordinates[1])];\n\t}\n\tplaceShip(coordinates, ship, confirmed, direction) {\n\t\tif (!Array.isArray(coordinates)) {\n\t\t\tcoordinates = this.formatCoordinates(coordinates);\n\t\t}\n\t\tif (this.board[coordinates[0]][coordinates[1]] !== \" \") {\n\t\t\treturn \"POSITION ALREADY USED\";\n\t\t}\n\t\tconst avPos = this.getCoord(coordinates, ship);\n\t\tconst isOccupied = (arr) => {\n\t\t\tif (!Array.isArray(arr)) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tlet anw = false;\n\t\t\tarr.forEach((num) => {\n\t\t\t\tif (this.board[num[0]][num[1]] !== \" \") {\n\t\t\t\t\tanw = true;\n\t\t\t\t}\n\t\t\t});\n\t\t\treturn anw;\n\t\t};\n\t\tconst saveShipToObjBoard = (arr) => {\n\t\t\tarr.forEach((num) => {\n\t\t\t\tthis.board[num[0]][num[1]] = ship;\n\t\t\t});\n\t\t};\n\n\t\tif (confirmed === true && isOccupied(avPos[direction]) === false) {\n\t\t\tthis.shipsPlaced += 1;\n\t\t\tsaveShipToObjBoard(avPos[direction]);\n\t\t\treturn avPos[direction];\n\t\t}\n\t\treturn avPos;\n\t}\n\n\tarrayMoves = (avPos) => {\n\t\tif (Array.isArray(avPos.col)) {\n\t\t\tlet arr = avPos.col.map((i) => [avPos.row, i]);\n\t\t\treturn arr;\n\t\t}\n\t\tif (Array.isArray(avPos.row)) {\n\t\t\tlet arr = avPos.row.map((i) => [i, avPos.col]);\n\t\t\treturn arr;\n\t\t}\n\t};\n\tgetCoord(coordinates, ship) {\n\t\tif (!Array.isArray(coordinates)) {\n\t\t\tcoordinates = this.formatCoordinates(coordinates);\n\t\t}\n\n\t\tlet up = {\n\t\t\trow: this.getAllCoord(coordinates[0], ship, true),\n\t\t\tcol: coordinates[1],\n\t\t}; /* row */\n\n\t\tlet left = {\n\t\t\trow: coordinates[0],\n\t\t\tcol: this.getAllCoord(coordinates[1], ship, true),\n\t\t}; /* col */\n\t\tlet down = {\n\t\t\trow: this.getAllCoord(coordinates[0], ship),\n\t\t\tcol: coordinates[1],\n\t\t}; /* row */\n\n\t\tlet right = {\n\t\t\trow: coordinates[0],\n\t\t\tcol: this.getAllCoord(coordinates[1], ship),\n\t\t}; /* col */\n\t\treturn {\n\t\t\tright: this.arrayMoves(right),\n\t\t\tdown: this.arrayMoves(down),\n\t\t\tleft: this.arrayMoves(left),\n\t\t\tup: this.arrayMoves(up),\n\t\t};\n\t}\n\n\tgetAllCoord(coordinates, ship, minus, indx = 0, lst = []) {\n\t\tif (indx >= ship.length) {\n\t\t\treturn;\n\t\t}\n\n\t\tif (minus === true) {\n\t\t\tconst newC = coordinates - indx;\n\t\t\tif (newC < 0) {\n\t\t\t\treturn null;\n\t\t\t}\n\t\t\tlst.push(newC);\n\t\t} else {\n\t\t\tconst newC = coordinates + indx;\n\t\t\tif (newC > 9) {\n\t\t\t\treturn null;\n\t\t\t}\n\t\t\tlst.push(newC);\n\t\t}\n\n\t\tthis.getAllCoord(coordinates, ship, minus, indx + 1, lst);\n\n\t\tif (lst.length != ship.length) {\n\t\t\treturn null;\n\t\t}\n\t\treturn lst;\n\t}\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n\n//# sourceURL=webpack://battleship-game/./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* import GameBoard from \"../src/gameBoard.js\"; */\n\n\n\n\nconst p1_info = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.player)();\nconst p1BoardDom = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.DomBoard)(true, p1_info.myGame.board);\n\nconst p2_info = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.machinePlayer)();\nconst p2BoardDom = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.DomBoard)(false, p1_info.myGame.board);\np2_info.pcRandomMove(p2_info,p2BoardDom);\nlet canStart = false;\n\n\n/* make a func while loop that will start when all ship are placed\nevent listener at p2board that when click active the p2receive attack\nhis turn will turn to false and then will be the machine turn\nwe will need a function to change the color of the target place\none for missed shot and accurate shot\n */\nfunction pShip(elValue, remove, isClick) {\n\tconst inx = p1_info.myGame.shipsPlaced;\n\tif (inx > 4) {\n\t\tremoveEv();\n\t\tcanStart = true;\n\t\treturn;\n\t}\n\tconst direction = [\"right\", \"down\", \"left\", \"up\"];\n\tconst i = document.querySelector(\".rotate\").value;\n\tconst move = p1_info.myGame.placeShip(\n\t\telValue,\n\t\tp1_info.allShips[inx],\n\t\tisClick,\n\t\tdirection[i]\n\t);\n\tif (isClick === true) {\n\t\tp1BoardDom.clickShipPlace(move);\n\t\treturn;\n\t}\n\tp1BoardDom.hoverGridEvents(move, remove, isClick);\n}\n\nfunction removeEv() {\n\tconst events = [\"click\", \"mouseover\", \"mouseout\"];\n\tevents.forEach((ev) =>\n\t\tp1BoardDom.allRows.forEach((arr) =>\n\t\t\tarr.forEach((r) => r.removeEventListener(ev, pShip))\n\t\t)\n\t);\n}\nconst clickPlaceShip = (r) => {\n\tr.addEventListener(\"click\", () => {\n\t\tpShip(r.value, false, true);\n\t});\n};\nconst addHover = (r) => {\n\tr.addEventListener(\"mouseover\", () => {\n\t\tpShip(r.value, false);\n\t});\n};\nconst removeHover = (r) => {\n\tr.addEventListener(\"mouseout\", () => {\n\t\tpShip(r.value, true);\n\t});\n};\nconst allEv = (r) => {\n\taddHover(r);\n\tremoveHover(r);\n\tclickPlaceShip(r);\n};\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.btnRotateEvent)();\np1BoardDom.allRows.forEach((arr) => {\n\tarr.forEach((r) => allEv(r));\n});\n\n/* now the main game loop */\np2BoardDom.allRows.forEach((arr) =>\n\tarr.forEach((r) =>\n\t\tr.addEventListener(\"click\", () => {\n            p2_info.myGame.receiveAttack(r.value)\n\t\t})\n\t)\n);\n\n\n//# sourceURL=webpack://battleship-game/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"machinePlayer\": () => (/* binding */ machinePlayer),\n/* harmony export */   \"player\": () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.js */ \"./src/ships.js\");\n/* harmony import */ var _src_gameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/gameBoard.js */ \"./src/gameBoard.js\");\n\n\n\nconst shipType = {\n\tCarrier: 5,\n\tBattleship: 4,\n\tDestroyer: 3,\n\tSubmarine: 3,\n\t\"Patrol Boat\": 2,\n};\nlet allShips = Object.keys(shipType).map(_ships_js__WEBPACK_IMPORTED_MODULE_0__.completeShip);\n\n\n/* Create Player.\nPlayers can take turns playing the game by attacking the enemy Gameboard.\n\nThe game is played against the computer, so make ‘computer’ \nplayers capable of making random plays.\nThe AI does not have to be smart, \nbut it should know whether or not a given move is legal.\n(i.e. it shouldn’t shoot the same coordinate twice). */\nfunction randomNumbers() {\n\tlet numRand = () => Math.floor(Math.random() * 10);\n\tlet arr = Array.from(Array(2).keys());\n\tlet randomArr = arr.map(numRand);\n\treturn randomArr;\n}\nfunction getRndInteger(min, max) {\n\treturn Math.floor(Math.random() * (max - min + 1)) + min;\n}\nfunction pcRandomMove(pc,pcDom) {\n\tconst inx = pc.myGame.shipsPlaced;\n\tif (inx > 4) {\n\t\treturn;\n\t}\n\tlet randomPlace = randomNumbers();\n\tconst objM = pc.myGame.getCoord(randomPlace, pc.allShips[inx]);\n\tconst direction = () => {\n\t\tconst arr = [];\n\t\tObject.keys(objM).forEach((k) => {\n\t\t\tif (objM[k] !== undefined) {\n\t\t\t\tarr.push(k);\n\t\t\t}\n\t\t});\n\t\treturn arr[getRndInteger(0, arr.length - 1)];\n\t};\n    const di = direction()\n    if(di === undefined){\n        pcRandomMove(pc,pcDom)\n    }\n    else{\n        const move = pc.myGame.placeShip(\n            randomPlace,\n            pc.allShips[inx],\n            true,\n            di\n            \n        );\n        pcDom.clickShipPlace(move);\n        pcRandomMove(pc,pcDom)\n    }\n\t\n}\nfunction machinePlayer(){\n    return {\n        turn:false,\n        allShips,\n        myGame: new _src_gameBoard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](),\n        pcRandomMove\n    }\n}\nfunction player(){\n    \n    return {\n        turn:false,\n        allShips,\n        myGame: new _src_gameBoard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\n    }\n}\n\n\n//# sourceURL=webpack://battleship-game/./src/player.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"completeShip\": () => (/* binding */ completeShip)\n/* harmony export */ });\nfunction shipsFactory(type, shipLength) {\n\treturn {\n\t\tname: type,\n\t\tlength: shipLength,\n\t\thits: 0,\n\t\tsunk: false,\n\t\thit: \"\",\n\t\tisSunk: \"\",\n\t\tposition: \"horizontal\",\n\t};\n}\n\nfunction completeShip(name) {\n\tlet ship = shipsFactory(String(name), shipType[name]);\n\n\tship.hit = () => {\n\t\treturn (ship.hits += 1);\n\t};\n\n\tship.isSunk = () => {\n\t\tif (ship.hits === ship.length) {\n\t\t\tship.sunk = true;\n\t\t\treturn true;\n\t\t} else {\n\t\t\treturn false;\n\t\t}\n\t};\n\n\treturn ship;\n}\n\nfunction objBoard() {\n\tlet column = [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\"];\n\tlet board = {};\n\tconst arr = (r) => {\n\t\tlet ar = [];\n\t\tfor (let i = 0; i <= column.length - 1; i++) {\n\t\t\tar.push(\" \");\n\t\t}\n\t\tboard[r] = ar;\n\t};\n\tfunction divideBoard(board) {\n\t\tlet p1Board = {};\n\t\tlet p2Board = {};\n\t\tObject.keys(board)\n\t\t\t.slice(0, 5)\n\t\t\t.forEach((k) => (p1Board[k] = board[k]));\n\t\tObject.keys(board)\n\t\t\t.slice(5)\n\t\t\t.forEach((k) => (p2Board[k] = board[k]));\n\t\t/* p1Board.columns = board.columns.slice(0,5)\n\t\tp2Board.columns = board.columns.slice(5) */\n\t\treturn [p1Board, p2Board];\n\t}\n\n\tboard.columns = column;\n\tArray.from(column.keys()).forEach((r) => arr(r));\n\tlet halfs = divideBoard(board);\n\treturn { board, p1Board: halfs[0], p2Board: halfs[1] };\n}\n\nconst shipType = {\n\tCarrier: 5,\n\tBattleship: 4,\n\tDestroyer: 3,\n\tSubmarine: 3,\n\t\"Patrol Boat\": 2,\n};\nlet allShips = Object.keys(shipType).map(completeShip);\n\n/* should be able to place ships at specific coordinates\nby calling the ship factory function. */\n\n\n\n//# sourceURL=webpack://battleship-game/./src/ships.js?");

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