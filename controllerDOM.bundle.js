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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/ocean.gif */ \"./src/assets/ocean.gif\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n --player-hp: 100%;\n --player-hit: 100%;\n --enemy-hp: 100%;\n --enemy-hit: 100%;\n --explosion-scale: 1;\n --sprite-scale: 0.35;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml, body,\nh1, h2, h3, h4, h5, h6, \np, ul, ol, li, button {\n  margin: 0;\n  padding: 0;\n}\n\nul, ol, li {\n  list-style: none;\n} \n\na {\n  text-decoration: none;\n}\n\n.max-width {\n  width: 100%;\n  max-width: 1280px;\n}\n\n.settings-btn-container {\n  position: fixed;\n  top: 0;\n  height: 0;\n  width: 100%;\n  max-width: 1280px;\n  display: flex;\n  justify-content: end;\n  z-index: 99;\n  background-color: white;\n}\n\n.settings-btn {\n  display: block;\n  height: 1.5rem;\n  aspect-ratio: 1;\n  margin: 0.5rem;\n  fill: white;\n  background-color: transparent;\n  border: none;  \n  transition: \n    transform 0.25s ease-in-out 0s,\n    fill 0.25s ease-in-out 0s;\n} \n\n.settings-btn:hover {\n  fill: hsl(0, 0%, 90%);\n  transform: rotate(45deg);\n}\n\n.settings-btn:active {\n  fill: hsl(0, 0%, 80%);\n}\n\n.game {\n  height: 100%;\n  min-height: 100vh;\n  width: 100vw;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  display: flex;\n  justify-content: center;\n}\n\n.boards {\n  height: 100%;\n  min-height: 100vh;\n  width: 100%;\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-auto-rows: 1fr;\n  justify-items: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n@media (max-width: 646px) {\n  .boards {\n    padding: 10rem 0.5rem;\n  }\n}\n\n.board {\n  position: relative;\n  width: 100%;\n  max-width: 750px;\n  aspect-ratio: 1;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  align-items: center;\n}\n\n.current.board {\n  border: 1px solid rgba(255,255,255,0.05);\n}\n\n.target.board {\n  border: 1px solid rgba(255,255,255,0.15);\n}\n\n.cell {\n  position: relative;\n  aspect-ratio: 1;\n  color: white;\n  display: grid;\n  grid-template-areas: \"a\";\n  justify-items: center;\n  align-items: start;\n  transition: background-color 0.25s ease-in-out 0s;\n  z-index: 2;\n}\n\n.cell.ship-bow {\n  z-index: 1\n}\n\n.cell.miss svg {\n  fill: rgba(255, 0, 0, 0.25);\n}\n\n.current > .cell {\n  border: 1px solid rgba(255,255,255,0.05);\n}\n\n\n.target > .cell {\n  background-color: rgba(0,0,0,0.25);\n  border: 1px solid rgba(255,255,255,0.15);\n}\n\n.target > .cell:not(.miss, .hit):hover {\n  background-color: rgba(0, 255, 0, 0.25);\n  cursor: pointer;\n}\n\n.target > .cell.hit {\n  background-color: rgba(255, 0, 0, 0.25);\n}\n\n.target > .cell.miss {\n  background-color: transparent;\n}\n\n.sprite-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  grid-area: a;\n}\n\n.sprite-container.horizontal {\n  justify-self: end;\n  align-self: center;\n}\n\n.sprite {\n  position: absolute;\n  transform-origin: top center;\n  transform: scale(var(--sprite-scale));\n  animation: ship-idle 2s ease-in-out 0s infinite forwards alternate;\n}\n\n.horizontal .sprite {\n  transform: scale(var(--sprite-scale)) rotate(90deg);\n  animation: ship-idle-horizontal 2s ease-in-out 0s infinite forwards alternate;\n}\n\n.fire-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: end;\n  align-self: center;\n  grid-area: a;\n  z-index: 1;\n}\n\n.fire {\n  position: absolute;\n  pointer-events: none;\n  animation: fade-in 1s ease-in-out 0s 1 forwards normal;\n}\n\n.explosion-container {\n  position: absolute;\n  top: 5%;\n  left: 45%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  grid-area: a;\n  z-index: 2;  \n}\n\n.explosion {\n  position: absolute;\n  pointer-events: none;\n  transform: scale(var(--explosion-scale));\n}\n\n.blocker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  z-index: 5;\n}\n\n.player-info {\n  position: fixed;\n  left: 50%;\n  width: 100%;\n  max-width: 30rem;\n  padding: 1rem;\n  transform: translate(-50%);\n  color: white;\n  z-index: 1;\n}\n\n.current.player-info {\n  top: 1rem;\n}\n\n.enemy.player-info {\n  bottom: 1rem;\n}\n\n.player-info div:first-child {\n  font-size: 0.9rem;\n}\n\n.player-info div:last-child {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n\n.health-bar {\n  position: relative;\n  height: 1rem;\n  width: 100%;\n  padding: 0.5rem;\n  background-color: rgba(8, 8, 20, 0.5);\n  border-radius: 0.5rem;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n.health {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-shadow: 1px 1px 1px black;\n}\n\n.bar {\n  height: 0.5rem;\n}\n\n.current .bar {\n  width: var(--player-hp);\n  background-color: rgba(0, 200, 0, 1);\n}\n\n.enemy .bar {\n  width: var(--enemy-hp);\n  background-color: rgba(200, 0, 0, 1);\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes ship-idle {\n  0% {\n    transform: translate(-2.5%, 0.25%) scale(var(--sprite-scale));\n  }\n\n  100% {\n    transform: translate(-0%, -0.25%) scale(var(--sprite-scale));\n  }\n}\n\n@keyframes ship-idle-horizontal {\n  0% {\n    transform: translate(-2.5%, 0.25%) scale(var(--sprite-scale)) rotate(90deg);\n  }\n\n  100% {\n    transform: translate(-0%, -0.25%) scale(var(--sprite-scale)) rotate(90deg);\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/cell.js":
/*!*****************************!*\
  !*** ./src/scripts/cell.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cell)\n/* harmony export */ });\nclass Cell {\n  constructor() {\n    this.isHit = false;\n    this.ship = null;\n  }\n\n  hit() {\n    this.isHit = true;\n  }\n\n  assign(ship) {\n    this.ship = ship;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/cell.js?");

/***/ }),

/***/ "./src/scripts/controllerDOM.js":
/*!**************************************!*\
  !*** ./src/scripts/controllerDOM.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n/* harmony import */ var _player_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player/ai */ \"./src/scripts/player/ai.js\");\n/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player/player */ \"./src/scripts/player/player.js\");\n/* harmony import */ var _assets_shipBattleship_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/shipBattleship.png */ \"./src/assets/shipBattleship.png\");\n/* harmony import */ var _assets_shipCarrier_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/shipCarrier.png */ \"./src/assets/shipCarrier.png\");\n/* harmony import */ var _assets_shipCruiser_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/shipCruiser.png */ \"./src/assets/shipCruiser.png\");\n/* harmony import */ var _assets_shipDestroyer_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/shipDestroyer.png */ \"./src/assets/shipDestroyer.png\");\n/* harmony import */ var _assets_shipSubmarine_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/shipSubmarine.png */ \"./src/assets/shipSubmarine.png\");\n/* harmony import */ var _assets_fire_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/fire.gif */ \"./src/assets/fire.gif\");\n/* harmony import */ var _assets_explosion_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/explosion.gif */ \"./src/assets/explosion.gif\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst shipSprites = [\n  {\n    type: 'Battleship',\n    src: _assets_shipBattleship_png__WEBPACK_IMPORTED_MODULE_4__,\n  },\n  {\n    type: 'Carrier',\n    src: _assets_shipCarrier_png__WEBPACK_IMPORTED_MODULE_5__,\n  },\n  {\n    type: 'Cruiser',\n    src: _assets_shipCruiser_png__WEBPACK_IMPORTED_MODULE_6__,\n  },\n  {\n    type: 'Destroyer',\n    src: _assets_shipDestroyer_png__WEBPACK_IMPORTED_MODULE_7__,\n  },\n  {\n    type: 'Submarine',\n    src: _assets_shipSubmarine_png__WEBPACK_IMPORTED_MODULE_8__,\n  },\n];\n\nlet currentPlayer = _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"][0];\nlet targetPlayer = _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"][1];\n\nconst switchPlayers = () => {\n  currentPlayer = currentPlayer === _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"][0] ? _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"][1] : _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"][0];\n  targetPlayer = targetPlayer === _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"][0] ? _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"][1] : _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"][0];\n\n  console.log(`Current Player: ${currentPlayer.name}`);\n  console.log(`Target Player: ${targetPlayer.name}`);\n};\n\nconst checkWinningCondition = () => {\n  if (!targetPlayer.board.isFleetOperational()) {\n    alert(`${currentPlayer.name} wins!`);\n    return true;\n  }\n  return false;\n};\n\nconst clearBoard = () => {\n  const boards = document.querySelector('.boards');\n  while (boards.firstChild) {\n    boards.removeChild(boards.firstChild);\n  }\n};\n\nconst initializeBoard = () => {\n  _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach((player) => {\n    const boards = document.querySelector('.boards');\n    const board = document.createElement('div');\n    board.classList.add('board');\n    if (player === currentPlayer) board.classList.add('current');\n    if (player === targetPlayer) board.classList.add('target');\n\n    for (let i = 9; i >= 0; i -= 1) {\n      for (let j = 0; j < 10; j += 1) {\n        const cell = document.createElement('div');\n        cell.classList.add('cell');\n        cell.dataset.x = j;\n        cell.dataset.y = i;\n        cell.dataset.playerName = player.name;\n        if (\n          player === targetPlayer\n          && currentPlayer instanceof _player_player__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n          && !(currentPlayer instanceof _player_ai__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        ) cell.addEventListener('click', hitCell);\n        board.appendChild(cell);\n      }\n    }\n    boards.appendChild(board);\n  });\n  printSprites();\n};\n\nconst hitExplosionEffect = async (targetCell) => {\n  const explosionContainer = document.createElement('div');\n  explosionContainer.classList.add('explosion-container');\n\n  const explosion = document.createElement('img');\n  explosion.src = `${_assets_explosion_gif__WEBPACK_IMPORTED_MODULE_10__}?rand=${Math.random()}`;\n  explosion.classList.add('explosion');\n\n  const explosionScale = 1.5 * (parseInt(window.getComputedStyle(targetCell).width, 10) / 60);\n  document.documentElement.style.setProperty('--explosion-scale', explosionScale);\n\n  explosionContainer.appendChild(explosion);\n  targetCell.appendChild(explosionContainer);\n\n  setTimeout(() => {\n    targetCell.removeChild(explosionContainer);\n  }, 5000);\n\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve();\n    }, 1000);\n  });\n};\n\nconst addFireEffect = (targetCell) => {\n  const fireContainer = document.createElement('div');\n  fireContainer.classList.add('fire-container');\n\n  const fire = document.createElement('img');\n  fire.src = `${_assets_fire_gif__WEBPACK_IMPORTED_MODULE_9__}?rand=${Math.random()}`;\n  fire.classList.add('fire');\n\n  fireContainer.appendChild(fire);\n  targetCell.appendChild(fireContainer);\n};\n\nconst addMissMark = (targetCell) => {\n  const mark = document.createElement('svg');\n  targetCell.appendChild(mark);\n  mark.outerHTML = '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>miss</title><path d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\" /></svg>';\n};\n\nconst updateBoard = async ([x, y]) => {\n  const targetCell = document.querySelector(`.cell[data-x=\"${x}\"][data-y=\"${y}\"][data-player-name=\"${targetPlayer.name}\"]`);\n  await hitExplosionEffect(targetCell);\n  if (targetPlayer.board.getBoard()[x][y].ship) {\n    targetCell.classList.add('hit');\n    addFireEffect(targetCell);\n  } else {\n    targetCell.classList.add('miss');\n    addMissMark(targetCell);\n  }\n};\n\nconst printSprites = () => {\n  currentPlayer.board.getFleet().forEach((ship) => {\n    const { x, y } = ship.bowCoordinates;\n    const bowCell = document.querySelector(`.cell[data-x=\"${x}\"][data-y=\"${y}\"]`);\n    bowCell.classList.add('ship-bow');\n\n    const spriteContainer = document.createElement('div');\n    spriteContainer.classList.add('sprite-container');\n    if (ship.isHorizontal) spriteContainer.classList.add('horizontal');\n\n    const shipSprite = document.createElement('img');\n    shipSprite.src = shipSprites.find((sprite) => sprite.type === ship.type).src;\n    shipSprite.classList.add('sprite');\n\n    const spriteScale = 0.35 * (parseInt(window.getComputedStyle(bowCell).width, 10) / 60);\n    document.documentElement.style.setProperty('--sprite-scale', spriteScale);\n\n    spriteContainer.appendChild(shipSprite);\n    bowCell.appendChild(spriteContainer);\n  });\n};\n\nconst showInputBlocker = () => {\n  const blocker = document.createElement('div');\n  blocker.classList.add('blocker');\n\n  const game = document.querySelector('.game');\n  game.appendChild(blocker);\n};\n\nconst hideInputBlocker = () => {\n  const blocker = document.querySelector('.blocker');\n  const game = document.querySelector('.game');\n  game.removeChild(blocker);\n};\n\nconst processHit = async () => {\n  if (checkWinningCondition()) return;\n  switchPlayers();\n  if (currentPlayer instanceof _player_ai__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n    const attackCoordinatinates = currentPlayer.chooseAttackCoordinates(targetPlayer);\n    targetPlayer\n      .board\n      .receiveAttack(\n        attackCoordinatinates,\n      );\n    await updateBoard(attackCoordinatinates);\n    processHit();\n  } else {\n    hideInputBlocker();\n  }\n};\n\nconst hitCell = async (e) => {\n  const cell = e.currentTarget;\n  const { x } = cell.dataset;\n  const { y } = cell.dataset;\n  if (\n    cell.dataset.playerName === targetPlayer.name\n    && !targetPlayer.board.getBoard()[x][y].isHit\n  ) {\n    targetPlayer\n      .board\n      .receiveAttack(\n        [x, y],\n      );\n    showInputBlocker();\n    await updateBoard([x, y]);\n    processHit();\n  }\n};\n\nconst resizeSprites = () => {\n  const bowCell = document.querySelector('.cell');\n  const spriteScale = 0.35 * (parseInt(window.getComputedStyle(bowCell).width, 10) / 60);\n  document.documentElement.style.setProperty('--sprite-scale', spriteScale);\n};\n\nwindow.addEventListener('resize', resizeSprites);\n\ninitializeBoard();\n\nconsole.log(`Current Player: ${currentPlayer.name}`);\nconsole.log(`Target Player: ${targetPlayer.name}`);\n\n\n//# sourceURL=webpack://battleship/./src/scripts/controllerDOM.js?");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player/player */ \"./src/scripts/player/player.js\");\n/* harmony import */ var _player_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player/ai */ \"./src/scripts/player/ai.js\");\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoard */ \"./src/scripts/gameBoard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\n\n\n\n\n\nconst players = [];\n\nconst temporaryPlayerInput = [\n  {\n    index: 0,\n    type: 'human',\n    name: 'Player 1',\n    data: null,\n  },\n  {\n    index: 1,\n    type: 'AI',\n    difficulty: 'Easy',\n    data: null,\n  },\n];\n\nconst ships = [\n  {\n    type: 'Carrier',\n    length: 5,\n    tempCoords: [3, 2],\n    tempHori: true,\n  },\n  {\n    type: 'Battleship',\n    length: 4,\n    tempCoords: [3, 5],\n    tempHori: true,\n  },\n  {\n    type: 'Cruiser',\n    length: 3,\n    tempCoords: [8, 3],\n    tempHori: false,\n  },\n  {\n    type: 'Submarine',\n    length: 3,\n    tempCoords: [6, 7],\n    tempHori: false,\n  },\n  {\n    type: 'Destroyer',\n    length: 2,\n    tempCoords: [1, 9],\n    tempHori: true,\n  },\n];\n\nconst initGame = (inputPlayers) => {\n  // temp generate human player and AI easy player\n\n  inputPlayers.forEach((thisPlayer) => {\n    const player = thisPlayer.type === 'human' ? new _player_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](thisPlayer.name)\n      : thisPlayer.type === 'AI' ? new _player_ai__WEBPACK_IMPORTED_MODULE_1__[\"default\"](thisPlayer.difficulty)\n        : null;\n\n    players.push(player);\n\n    const board = new _gameBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    board.createBoard();\n    player.assignBoard(board);\n    // console.log(player);\n    // console.log(player.board);\n\n    ships.forEach((ship) => {\n      player\n        .board\n        .placeShip(ship.tempCoords, new _ship__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ship.length, ship.type), ship.tempHori);\n    });\n    // console.table(player.board.getBoard());\n  });\n};\n\ninitGame(temporaryPlayerInput);\n// console.log(players);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (players);\n\n\n//# sourceURL=webpack://battleship/./src/scripts/game.js?");

/***/ }),

/***/ "./src/scripts/gameBoard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ \"./src/scripts/cell.js\");\n\n\nclass GameBoard {\n  constructor() {\n    this.board = [];\n    this.fleet = [];\n  }\n\n  getBoard() {\n    return this.board;\n  }\n\n  getFleet() {\n    return this.fleet;\n  }\n\n  createBoard() {\n    for (let i = 0; i < 10; i += 1) {\n      this.board[i] = [];\n      for (let j = 0; j < 10; j += 1) {\n        this.board[i][j] = new _cell__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      }\n    }\n  }\n\n  placeShip([x, y], ship, isPlacedHorizontally = true) {\n    const start = isPlacedHorizontally\n      ? x - Math.floor(ship.length / 2)\n      : y - Math.floor(ship.length / 2);\n    const end = start + ship.length;\n    const bowCoordinates = isPlacedHorizontally\n      ? { x: end - 1, y }\n      : { x, y: end - 1 };\n\n    if (ship.hasPositioned) return;\n    if (start < 0 || end > 9) return;\n    for (let i = start; i < end; i += 1) {\n      if (isPlacedHorizontally && this.board[i][y].ship !== null) return;\n      if (!isPlacedHorizontally && this.board[x][i].ship !== null) return;\n    }\n\n    for (let i = start; i < end; i += 1) {\n      if (isPlacedHorizontally) this.board[i][y].assign(ship);\n      if (!isPlacedHorizontally) this.board[x][i].assign(ship);\n    }\n    this.fleet.push(ship);\n    ship.isPositioned(bowCoordinates, isPlacedHorizontally);\n  }\n\n  async receiveAttack([x, y]) {\n    this.board[x][y].hit();\n    if (this.board[x][y].ship !== null) {\n      this.board[x][y].ship.hit();\n    }\n  }\n\n  isFleetOperational() {\n    return this.fleet.some((ship) => ship.hasSunk === false);\n  }\n\n  allUnhitCoordinates() {\n    const unhitCoordinates = [];\n    for (let i = 0; i < 10; i += 1) {\n      for (let j = 0; j < 10; j += 1) {\n        if (!this.board[i][j].isHit) unhitCoordinates.push([i, j]);\n      }\n    }\n    return unhitCoordinates;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/gameBoard.js?");

/***/ }),

/***/ "./src/scripts/player/ai.js":
/*!**********************************!*\
  !*** ./src/scripts/player/ai.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AI)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/scripts/player/player.js\");\n\n\nclass AI extends _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(difficulty = 'Easy') {\n    super(`AI ${difficulty}`);\n    this.difficulty = difficulty;\n  }\n\n  chooseAttackCoordinates(player) {\n    if (this.difficulty === 'Easy') {\n      const availableAttackCoordinates = player.board.allUnhitCoordinates();\n      return availableAttackCoordinates[\n        Math.floor(Math.random() * availableAttackCoordinates.length)\n      ];\n    }\n    // insert conditions for other difficulties\n    return null;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/player/ai.js?");

/***/ }),

/***/ "./src/scripts/player/player.js":
/*!**************************************!*\
  !*** ./src/scripts/player/player.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\n  constructor(name = 'Player') {\n    this.name = name;\n    this.board = null;\n  }\n\n  assignBoard(gameBoard) {\n    this.board = gameBoard;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/player/player.js?");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length, type) {\n    this.length = length;\n    this.hits = 0;\n    this.hasPositioned = false;\n    this.hasSunk = false;\n    this.type = type;\n    this.bowCoordinates = null;\n    this.isHorizontal = null;\n  }\n\n  hit() {\n    this.hits += 1;\n    if (this.length === this.hits) this.isSunk();\n  }\n\n  isSunk() {\n    this.hasSunk = true;\n  }\n\n  isPositioned(bowCoordinates, isHorizontal) {\n    this.hasPositioned = true;\n    this.bowCoordinates = bowCoordinates;\n    this.isHorizontal = isHorizontal;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/ship.js?");

/***/ }),

/***/ "./src/assets/explosion.gif":
/*!**********************************!*\
  !*** ./src/assets/explosion.gif ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2f276cfa86607d25dcd2.gif\";\n\n//# sourceURL=webpack://battleship/./src/assets/explosion.gif?");

/***/ }),

/***/ "./src/assets/fire.gif":
/*!*****************************!*\
  !*** ./src/assets/fire.gif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"19fd337c74583d2027c0.gif\";\n\n//# sourceURL=webpack://battleship/./src/assets/fire.gif?");

/***/ }),

/***/ "./src/assets/ocean.gif":
/*!******************************!*\
  !*** ./src/assets/ocean.gif ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"02063eeea7379ba52b69.gif\";\n\n//# sourceURL=webpack://battleship/./src/assets/ocean.gif?");

/***/ }),

/***/ "./src/assets/shipBattleship.png":
/*!***************************************!*\
  !*** ./src/assets/shipBattleship.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"af9103d9276f84bf597d.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/shipBattleship.png?");

/***/ }),

/***/ "./src/assets/shipCarrier.png":
/*!************************************!*\
  !*** ./src/assets/shipCarrier.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ce0292ac5f5c432cbaa8.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/shipCarrier.png?");

/***/ }),

/***/ "./src/assets/shipCruiser.png":
/*!************************************!*\
  !*** ./src/assets/shipCruiser.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"75584719f2bfe57145e3.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/shipCruiser.png?");

/***/ }),

/***/ "./src/assets/shipDestroyer.png":
/*!**************************************!*\
  !*** ./src/assets/shipDestroyer.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8887ad237c1d7274d5bd.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/shipDestroyer.png?");

/***/ }),

/***/ "./src/assets/shipSubmarine.png":
/*!**************************************!*\
  !*** ./src/assets/shipSubmarine.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ffb313b134cc61d170ae.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/shipSubmarine.png?");

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
/******/ 			"controllerDOM": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/controllerDOM.js");
/******/ 	
/******/ })()
;