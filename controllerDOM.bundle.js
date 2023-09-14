/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/ocean.gif */ "./src/assets/ocean.gif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik+Iso&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
 --current-health: 100%;
 --current-hit: 0%;
 --current-empty: 0%;
 --enemy-health: 100%;
 --enemy-hit: 0%;
 --enemy-empty: 0%;
 --explosion-scale: 1;
 --sprite-scale: 0.35;
 --placement-cell-width: 48px;
}

*,
*::after,
*::before {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

html, body,
h1, h2, h3, h4, h5, h6, 
p, ul, ol, li, button {
  margin: 0;
  padding: 0;
}

ul, ol, li {
  list-style: none;
} 

a {
  text-decoration: none;
}

.max-width {
  width: 100%;
  max-width: 1280px;
}

.settings-btn-container {
  position: fixed;
  top: 0;
  height: 0;
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: end;
  z-index: 99;
  background-color: white;
}

.settings-btn {
  display: block;
  height: 1.5rem;
  aspect-ratio: 1;
  margin: 0.5rem;
  fill: white;
  background-color: transparent;
  border: none;  
  transition: 
    transform 0.25s ease-in-out 0s,
    fill 0.25s ease-in-out 0s;
} 

.settings-btn:hover {
  fill: hsl(0, 0%, 90%);
  transform: rotate(45deg);
}

.settings-btn:active {
  fill: hsl(0, 0%, 80%);
}

.game {
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.boards {
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  justify-items: center;
  align-items: center;
  gap: 1rem;
}

.board {
  position: relative;
  width: 100%;
  max-width: 750px;
  aspect-ratio: 1;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  align-items: center;
  animation: title-rise 1s ease-in-out 0s 1 forwards normal;
}

.placement .board {
  margin-top: 12rem;
  max-width: 480px;
  touch-action: none;
}

.placement.info {
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  max-width: 640px;
  padding: 1rem;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  animation: title-rise 1s ease-in-out 0s 1 forwards normal;
}

.placement.info p {
  color: white;
  font-weight: 600;
  text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.25);
  transition: 0.25s;
  animation: button-idle 2s ease-in-out 0s infinite forwards alternate;
  user-select: none;
}

.placement.info p:nth-child(1) {
  font-size: 2rem;
}

.placement.info p:nth-child(3) {
  margin: 1.5rem 0 ;
}

.placement.info .ships {
  align-self: center;
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem var(--placement-cell-width);

}

.placement.info .ships .container {
  position: relative;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: var(--placement-cell-width);
  justify-content: start;
  align-items: center;
}

.placement .sprite{
  transition: 0.1s;
  pointer-events: none;
}

/* make sprite style common */

.placement .cell.hover .sprite,
.placement .container.unplaced:hover .sprite {
  filter: grayscale(100%) sepia(100%) brightness(0.75) hue-rotate(60deg);
}

.placement .cell.hover.clicked .sprite,
.placement .container.unplaced:active .sprite{
  filter: grayscale(100%) sepia(100%) brightness(1) hue-rotate(60deg);
}

.placement .cell {
  transition: 0.1s;
}

.placement .cell.bow {
  z-index: 3;
}

.placement .cell.hover,
.placement .container.unplaced:hover .cell{
  background-color: rgba(0, 255, 0, 0.25);
}

.placement .cell.hover.clicked,
.placement .container.unplaced:active .cell{
  background-color: rgba(155, 255, 155, 0.25);
}

.boards.placement .board {
  border: 1px solid rgba(255,255,255,0.15);
}

.current.board {
  border: 1px solid rgba(255,255,255,0.05);
}

.target.board {
  border: 1px solid rgba(255,255,255,0.15);
}

.cell {
  position: relative;
  aspect-ratio: 1;
  color: white;
  display: grid;
  grid-template-areas: "a";
  justify-items: center;
  align-items: start;
  transition: background-color 0.25s ease-in-out 0s;
  user-select: none;
  z-index: 2;
}

.cell.ship-bow {
  z-index: 1
}

.cell.miss svg {
  fill: rgba(255, 0, 0, 0.25);
}

.boards.placement .cell {
  border: 1px solid rgba(255,255,255,0.15);
}

.current > .cell {
  border: 1px solid rgba(255,255,255,0.05);
}

.target > .cell {
  background-color: rgba(0,0,0,0.25);
  border: 1px solid rgba(255,255,255,0.15);
}

.target > .cell:not(.miss, .hit):hover {
  background-color: rgba(0, 255, 0, 0.25);
  cursor: pointer;
}

.target > .cell.hit {
  background-color: rgba(255, 0, 0, 0.25);
}

.target > .cell.sunk,
.target > .cell.miss {
  background-color: transparent;
}

.sprite-container {
  position: relative;
  display: flex;
  justify-content: center;
  grid-area: a;
}

.sprite-container.horizontal {
  justify-self: end;
  align-self: center;
}

.sprite {
  position: absolute;
  transform-origin: top center;
  transform: scale(var(--sprite-scale));
  animation: ship-idle 2s ease-in-out 0s infinite forwards alternate;
}

.horizontal .sprite {
  transform: scale(var(--sprite-scale)) rotate(90deg);
  animation: ship-idle-horizontal 2s ease-in-out 0s infinite forwards alternate;
}

.cell.sunk .sprite {
  animation: 
    ship-sink 10s linear 0s 1 forwards normal,
    ship-shaking 0.5s ease-in-out 0s infinite forwards alternate;
}

.cell.sunk .horizontal .sprite {
  animation: 
    ship-sink 10s linear 0s 1 forwards normal,
    ship-shaking-horizontal 0.5s ease-in-out 0s infinite forwards alternate;
}

.fire-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
  align-self: center;
  grid-area: a;
  z-index: 1;
}

.fire {
  position: absolute;
  pointer-events: none;
  animation: fade-in 1s ease-in-out 0s 1 forwards normal;
}

.cell.sunk .fire {
  animation: fade-out 1s ease-in-out 0s 1 forwards normal;
}

.explosion-container {
  position: absolute;
  top: 5%;
  left: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  grid-area: a;
  z-index: 2;  
}

.explosion {
  position: absolute;
  pointer-events: none;
  transform: scale(var(--explosion-scale));
}

.blocker {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 5;
}

.player-info {
  position: fixed;
  left: 50%;
  width: 100%;
  max-width: 30rem;
  padding: 1rem;
  transform: translate(-50%);
  color: white;
  z-index: 50;
  pointer-events: none;
  animation: title-rise 1s ease-in-out 0s 1 forwards normal;
}

.current.player-info {
  top: 1rem;
}

.enemy.player-info {
  bottom: 1rem;
}

.player-info p {
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);
}

.player-info p:first-child {
  font-size: 0.9rem;
}

.player-info p:last-child {
  font-size: 1.5rem;
  font-weight: 600;
}

.health {
  position: relative;
  height: 1rem;
  width: 100%;
  padding: 0.5rem;
  background-color: rgba(8, 8, 20, 0.5);
  border-radius: 0.5rem;
  display: flex;
  justify-content: start;
  align-items: center;
}

.health > .text {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  font-size: 0.8rem;
  font-weight: 600;
  text-shadow: 1px 1px 1px black;
}

.health > .bar,
.health > .hit,
.health > .empty {
  height: 0.5rem;
  transition: width 0.25s ease-in-out 0s;
}

.current .health > .bar {
  width: var(--current-health);
  background-color: rgba(0, 200, 0, 1);
}

.current .health > .hit {
  width: var(--current-hit);
  background-color: rgba(0, 200, 0, 0.5);
}

.current .health > .empty {
  width: var(--current-empty);
  background-color: rgba(0, 0, 0, 0.25);
}

.enemy .health > .bar {
  width: var(--enemy-health);
  background-color: rgba(200, 0, 0, 1);
}

.enemy .health > .hit {
  width: var(--enemy-hit);
  background-color: rgba(200, 0, 0, 0.5);
}

.enemy .health > .empty {
  width: var(--enemy-empty);
  background-color: rgba(0, 0, 0, 0.25);
}

.site-container {
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  overflow-x: hidden;
}

.main-menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-menu > h1 {
  margin-top: auto;
  margin-bottom: 2rem;
  color: white;
  font-family: 'Rubik Iso', cursive;
  font-size: 6rem;
  text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.25);
  animation: 
    title-idle 2s ease-in-out 0s infinite forwards alternate,
    title-rise 1s ease-in-out 0s 1 forwards normal;
  user-select: none;
}

.main-menu .buttons {
  height: 15rem;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.game.click-sink,
.main-menu.click-sink,
.main-menu .buttons.click-sink {
  animation:
    title-sink 0.25s ease-in-out 0s 1 forwards normal;
}

.placement.buttons {
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  max-width: 640px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transform: translate(-50%);
}

.placement.buttons .button,
.main-menu .button {
  width: 15rem;
  padding: 0.5rem;
  background: none;
  color: white;
  border: none;
  font-size: 2rem;
  font-weight: 600;
  text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.25);
  transition: 0.25s;
  animation: 
    button-idle 2s ease-in-out 0s infinite forwards alternate,
    title-rise 1s ease-in-out 0s 1 forwards normal;
  user-select: none;
}

.placement.buttons .button {
  font-size: 1.75rem;
}

.placement.buttons .button.disabled {
  color: grey;
}

.placement.buttons .button:not(.disabled):hover,
.main-menu .button:hover {
  color: hsl(0, 0%, 90%);
  background-color: hsla(0, 0%, 100%, 0.1);
  border-radius: 2rem;
}

.placement.buttons .button:not(.disabled):active,
.main-menu .button:active {
  color: hsl(0, 0%, 80%);
}

.main-menu form li {
  margin-bottom: 0.5rem;
  display: grid;
  grid-template-columns: 6rem;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  justify-items: center;
  align-items: center;
  gap: 0.5rem;
}

.main-menu form li:last-child {
  margin-top: 2rem;
  grid-template-columns: 1fr;
}

.main-menu form li .label {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.25);
  user-select: none;
  animation: 
    button-idle 2s ease-in-out 0s infinite forwards alternate,
    title-rise 1s ease-in-out 0s 1 forwards normal;
}

.main-menu form li input {
  width: 100%;
  padding: 0.5rem;
  border: 2px groove #7f8c8d;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  animation: 
    button-idle 2s ease-in-out 0s infinite forwards alternate,
    title-rise 1s ease-in-out 0s 1 forwards normal;
}

.main-menu form li .button.AI {
  width: 100%;
  background-color: #7f8c8d;
  border: 2px outset #7f8c8d;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  text-shadow: none;
  user-select: none;
}

.main-menu form li .button.AI.toggled {
  background-color: hsl(0, 6%, 45%);   
  border: 2px inset hsl(0, 6%, 45%);   
}

.main-menu form li .button.AI.toggled:hover {
  background-color: hsl(184, 6%, 50%);   
  border: 2px inset hsl(184, 6%, 50%);   
}

.main-menu form li .button.AI.toggled:active {
  background-color: hsl(184, 6%, 47%);
}

.main-menu form li .button.AI:hover {
  background-color: hsl(184, 6%, 50%);   
}

.main-menu form li .button.AI:active {
  background-color: hsl(184, 6%, 47%);   
  border: 2px inset hsl(184, 6%, 47%);  
}

.copyright {
  color: white;
  text-align: center;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);
  font-size: 0.8rem;
  margin-bottom: 2rem;
  animation: 
    title-idle 2s ease-in-out 0s infinite forwards alternate,
    title-rise 1s ease-in-out 0s 1 forwards normal;
  user-select: none;
  line-height: 1.8rem;
}

.copyright svg {
  vertical-align: bottom;
  fill: white;
  height: 1.8rem;
  transition: 
    transform 0.25s ease-in-out 0s,
    fill 0.25s ease-in-out 0s;
}

.copyright svg:hover {
  color: hsl(0, 0%, 80%);
  transform: rotate(360deg) scale(1.1);
}

.copyright svg:active {
  fill: hsl(0, 0%, 70%);
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: hsla(0, 0%, 0%, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.dialog {
  min-width: 300px;
  margin: 1rem;
  padding: 2rem 1rem;
  background-color: rgba(44, 62, 80, 0.5);
  border-radius: 1rem;
  color: white;
  outline: 2px ridge #95a5a6;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: fade-in 0.25s ease-in-out 0s 1 forwards normal;
  user-select: none;
}

.dialog .text {
  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}

.dialog .main.text {
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
}

.dialog .button {
  width: 10rem;
  margin: 0.25rem;
  padding: 0.5rem;
  background-color: #7f8c8d;
  color: white;
  border: 1px outset #7f8c8d;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}

.dialog .button:hover {
  background-color: hsl(184, 6%, 56%);
}

.dialog .button:active {
  background-color: hsl(184, 6%, 59%);
}

.dialog .play.button {
  background-color: #27ae60;
  border: 1px outset #27ae60;
}

.dialog .play.button:hover {
  background-color: hsla(145, 63%, 45%);
}

.dialog .play.button:active {
  background-color: hsla(145, 63%, 48%);
}

.dialog .menu.button {
  background-color: #c0392b;
  border: 1px outset #c0392b;
}

.dialog .menu:hover {
  background-color: hsl(6, 63%, 49%);
}

.dialog .menu:active {
  background-color: hsl(6, 63%, 52%);
}

.fade-out {
  animation: fade-out 0.25s ease-in-out 0s 1 forwards normal;
}

.lose-focus {
  animation: lose-focus 1s ease-in-out 0s 1 forwards normal;
}

.return-focus {
  animation: return-focus 0.125s ease-in-out 0s 1 forwards normal;
}

.visibility-hidden {
  visibility: hidden;
}

@media (max-width: 646px) {
  .boards:not(.placement) {
    padding: 10rem 0.5rem;
  }
}

@media (max-width: 600px) {
  .main-menu > h1 {
    font-size: 5rem;
  }
}

@media (max-width: 500px) {
  .main-menu > h1 {
    font-size: 4rem;
  }

  .placement.buttons .button,
  .main-menu .button {
    font-size: 1.5rem
  }

  .main-menu form li .label {
    font-size: 1.25rem;
  }

  .main-menu form li input {
    font-size: 1rem;
  }

  .main-menu form li .button.AI {
    font-size: 0.85rem;
  }  
}

@media (max-width: 400px) {
  .main-menu > h1 {
    font-size: 3rem;
  }

  .placement.buttons .button,
  .main-menu .button {
    font-size: 1.25rem
  }

  .main-menu form li .label {
    font-size: 1rem;
  }
}

@keyframes lose-focus {
  0% {
    filter: blur(0);
  }
  
  100% {
    filter: blur(2px);
  }
}

@keyframes return-focus {
  0% {
    filter: blur(2px);
  }
  
  100% {
    filter: blur(0);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes button-idle {
  0% {
    transform: translate(-5px, 0);
  }

  100% {
    transform: translate(0, 0);
  }
}

@keyframes title-idle {
  0% {
    transform: translate(-1%, 0.25%);
  }

  100% {
    transform: translate(-0%, -0.25%);
  }
}

@keyframes title-rise {
  0% {
    filter: blur(10px) brightness(0.25) opacity(0.25);
  }

  100% {
    filter: blur(0px) brightness(1) opacity(1);
  }
}

@keyframes title-sink {
  0% {
    filter: blur(0px) brightness(1) opacity(1);
  }

  100% {
    filter: blur(10px) brightness(0.25) opacity(0.25);
  }
}

@keyframes ship-idle {
  0% {
    transform: translate(-2.5%, 0.25%) scale(var(--sprite-scale));
  }

  100% {
    transform: translate(-0%, -0.25%) scale(var(--sprite-scale));
  }
}

@keyframes ship-idle-horizontal {
  0% {
    transform: translate(-2.5%, 0.25%) scale(var(--sprite-scale)) rotate(90deg);
  }

  100% {
    transform: translate(-0%, -0.25%) scale(var(--sprite-scale)) rotate(90deg);
  }
}

@keyframes ship-sink {
  0% {
    filter: blur(0px) brightness(1) grayscale(0%) opacity(1);
  }

  2.5% {
    filter: blur(0px) brightness(2) grayscale(0%) opacity(1);
  }

  5% {
    filter: blur(0px) brightness(1) grayscale(0%) opacity(1);
  }
  
  100% {
    filter: blur(25px) brightness(0.5) grayscale(100%) opacity(0.25);
  }
}

@keyframes ship-shaking {
 0% {
  transform: translate(-0.5%, 0) scale(var(--sprite-scale));
 }

 100% {
  transform: translate(0.5%, 0) scale(var(--sprite-scale));
 }
}

@keyframes ship-shaking-horizontal {
  0% {
   transform: translate(0, -0.05%) scale(var(--sprite-scale)) rotate(90deg);
  }
 
  100% {
   transform: translate(0, 0.05%) scale(var(--sprite-scale)) rotate(90deg);
  }
 }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik+Iso&display=swap');\n\n:root {\n --current-health: 100%;\n --current-hit: 0%;\n --current-empty: 0%;\n --enemy-health: 100%;\n --enemy-hit: 0%;\n --enemy-empty: 0%;\n --explosion-scale: 1;\n --sprite-scale: 0.35;\n --placement-cell-width: 48px;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml, body,\nh1, h2, h3, h4, h5, h6, \np, ul, ol, li, button {\n  margin: 0;\n  padding: 0;\n}\n\nul, ol, li {\n  list-style: none;\n} \n\na {\n  text-decoration: none;\n}\n\n.max-width {\n  width: 100%;\n  max-width: 1280px;\n}\n\n.settings-btn-container {\n  position: fixed;\n  top: 0;\n  height: 0;\n  width: 100%;\n  max-width: 1280px;\n  display: flex;\n  justify-content: end;\n  z-index: 99;\n  background-color: white;\n}\n\n.settings-btn {\n  display: block;\n  height: 1.5rem;\n  aspect-ratio: 1;\n  margin: 0.5rem;\n  fill: white;\n  background-color: transparent;\n  border: none;  \n  transition: \n    transform 0.25s ease-in-out 0s,\n    fill 0.25s ease-in-out 0s;\n} \n\n.settings-btn:hover {\n  fill: hsl(0, 0%, 90%);\n  transform: rotate(45deg);\n}\n\n.settings-btn:active {\n  fill: hsl(0, 0%, 80%);\n}\n\n.game {\n  height: 100%;\n  min-height: 100vh;\n  width: 100vw;\n  background-image: url('./assets/ocean.gif');\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.boards {\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-auto-rows: 1fr;\n  justify-items: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.board {\n  position: relative;\n  width: 100%;\n  max-width: 750px;\n  aspect-ratio: 1;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  align-items: center;\n  animation: title-rise 1s ease-in-out 0s 1 forwards normal;\n}\n\n.placement .board {\n  margin-top: 12rem;\n  max-width: 480px;\n  touch-action: none;\n}\n\n.placement.info {\n  position: fixed;\n  top: 0;\n  left: 50%;\n  width: 100%;\n  max-width: 640px;\n  padding: 1rem;\n  transform: translate(-50%);\n  display: flex;\n  flex-direction: column;\n  animation: title-rise 1s ease-in-out 0s 1 forwards normal;\n}\n\n.placement.info p {\n  color: white;\n  font-weight: 600;\n  text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.25);\n  transition: 0.25s;\n  animation: button-idle 2s ease-in-out 0s infinite forwards alternate;\n  user-select: none;\n}\n\n.placement.info p:nth-child(1) {\n  font-size: 2rem;\n}\n\n.placement.info p:nth-child(3) {\n  margin: 1.5rem 0 ;\n}\n\n.placement.info .ships {\n  align-self: center;\n  width: 100%;\n  max-width: 480px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem var(--placement-cell-width);\n\n}\n\n.placement.info .ships .container {\n  position: relative;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: var(--placement-cell-width);\n  justify-content: start;\n  align-items: center;\n}\n\n.placement .sprite{\n  transition: 0.1s;\n  pointer-events: none;\n}\n\n/* make sprite style common */\n\n.placement .cell.hover .sprite,\n.placement .container.unplaced:hover .sprite {\n  filter: grayscale(100%) sepia(100%) brightness(0.75) hue-rotate(60deg);\n}\n\n.placement .cell.hover.clicked .sprite,\n.placement .container.unplaced:active .sprite{\n  filter: grayscale(100%) sepia(100%) brightness(1) hue-rotate(60deg);\n}\n\n.placement .cell {\n  transition: 0.1s;\n}\n\n.placement .cell.bow {\n  z-index: 3;\n}\n\n.placement .cell.hover,\n.placement .container.unplaced:hover .cell{\n  background-color: rgba(0, 255, 0, 0.25);\n}\n\n.placement .cell.hover.clicked,\n.placement .container.unplaced:active .cell{\n  background-color: rgba(155, 255, 155, 0.25);\n}\n\n.boards.placement .board {\n  border: 1px solid rgba(255,255,255,0.15);\n}\n\n.current.board {\n  border: 1px solid rgba(255,255,255,0.05);\n}\n\n.target.board {\n  border: 1px solid rgba(255,255,255,0.15);\n}\n\n.cell {\n  position: relative;\n  aspect-ratio: 1;\n  color: white;\n  display: grid;\n  grid-template-areas: \"a\";\n  justify-items: center;\n  align-items: start;\n  transition: background-color 0.25s ease-in-out 0s;\n  user-select: none;\n  z-index: 2;\n}\n\n.cell.ship-bow {\n  z-index: 1\n}\n\n.cell.miss svg {\n  fill: rgba(255, 0, 0, 0.25);\n}\n\n.boards.placement .cell {\n  border: 1px solid rgba(255,255,255,0.15);\n}\n\n.current > .cell {\n  border: 1px solid rgba(255,255,255,0.05);\n}\n\n.target > .cell {\n  background-color: rgba(0,0,0,0.25);\n  border: 1px solid rgba(255,255,255,0.15);\n}\n\n.target > .cell:not(.miss, .hit):hover {\n  background-color: rgba(0, 255, 0, 0.25);\n  cursor: pointer;\n}\n\n.target > .cell.hit {\n  background-color: rgba(255, 0, 0, 0.25);\n}\n\n.target > .cell.sunk,\n.target > .cell.miss {\n  background-color: transparent;\n}\n\n.sprite-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  grid-area: a;\n}\n\n.sprite-container.horizontal {\n  justify-self: end;\n  align-self: center;\n}\n\n.sprite {\n  position: absolute;\n  transform-origin: top center;\n  transform: scale(var(--sprite-scale));\n  animation: ship-idle 2s ease-in-out 0s infinite forwards alternate;\n}\n\n.horizontal .sprite {\n  transform: scale(var(--sprite-scale)) rotate(90deg);\n  animation: ship-idle-horizontal 2s ease-in-out 0s infinite forwards alternate;\n}\n\n.cell.sunk .sprite {\n  animation: \n    ship-sink 10s linear 0s 1 forwards normal,\n    ship-shaking 0.5s ease-in-out 0s infinite forwards alternate;\n}\n\n.cell.sunk .horizontal .sprite {\n  animation: \n    ship-sink 10s linear 0s 1 forwards normal,\n    ship-shaking-horizontal 0.5s ease-in-out 0s infinite forwards alternate;\n}\n\n.fire-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: end;\n  align-self: center;\n  grid-area: a;\n  z-index: 1;\n}\n\n.fire {\n  position: absolute;\n  pointer-events: none;\n  animation: fade-in 1s ease-in-out 0s 1 forwards normal;\n}\n\n.cell.sunk .fire {\n  animation: fade-out 1s ease-in-out 0s 1 forwards normal;\n}\n\n.explosion-container {\n  position: absolute;\n  top: 5%;\n  left: 45%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  grid-area: a;\n  z-index: 2;  \n}\n\n.explosion {\n  position: absolute;\n  pointer-events: none;\n  transform: scale(var(--explosion-scale));\n}\n\n.blocker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  z-index: 5;\n}\n\n.player-info {\n  position: fixed;\n  left: 50%;\n  width: 100%;\n  max-width: 30rem;\n  padding: 1rem;\n  transform: translate(-50%);\n  color: white;\n  z-index: 50;\n  pointer-events: none;\n  animation: title-rise 1s ease-in-out 0s 1 forwards normal;\n}\n\n.current.player-info {\n  top: 1rem;\n}\n\n.enemy.player-info {\n  bottom: 1rem;\n}\n\n.player-info p {\n  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);\n}\n\n.player-info p:first-child {\n  font-size: 0.9rem;\n}\n\n.player-info p:last-child {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n\n.health {\n  position: relative;\n  height: 1rem;\n  width: 100%;\n  padding: 0.5rem;\n  background-color: rgba(8, 8, 20, 0.5);\n  border-radius: 0.5rem;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n.health > .text {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-shadow: 1px 1px 1px black;\n}\n\n.health > .bar,\n.health > .hit,\n.health > .empty {\n  height: 0.5rem;\n  transition: width 0.25s ease-in-out 0s;\n}\n\n.current .health > .bar {\n  width: var(--current-health);\n  background-color: rgba(0, 200, 0, 1);\n}\n\n.current .health > .hit {\n  width: var(--current-hit);\n  background-color: rgba(0, 200, 0, 0.5);\n}\n\n.current .health > .empty {\n  width: var(--current-empty);\n  background-color: rgba(0, 0, 0, 0.25);\n}\n\n.enemy .health > .bar {\n  width: var(--enemy-health);\n  background-color: rgba(200, 0, 0, 1);\n}\n\n.enemy .health > .hit {\n  width: var(--enemy-hit);\n  background-color: rgba(200, 0, 0, 0.5);\n}\n\n.enemy .health > .empty {\n  width: var(--enemy-empty);\n  background-color: rgba(0, 0, 0, 0.25);\n}\n\n.site-container {\n  position: relative;\n  min-height: 100vh;\n  min-width: 100vw;\n  overflow-x: hidden;\n}\n\n.main-menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-menu > h1 {\n  margin-top: auto;\n  margin-bottom: 2rem;\n  color: white;\n  font-family: 'Rubik Iso', cursive;\n  font-size: 6rem;\n  text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.25);\n  animation: \n    title-idle 2s ease-in-out 0s infinite forwards alternate,\n    title-rise 1s ease-in-out 0s 1 forwards normal;\n  user-select: none;\n}\n\n.main-menu .buttons {\n  height: 15rem;\n  margin-bottom: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.game.click-sink,\n.main-menu.click-sink,\n.main-menu .buttons.click-sink {\n  animation:\n    title-sink 0.25s ease-in-out 0s 1 forwards normal;\n}\n\n.placement.buttons {\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  width: 100%;\n  max-width: 640px;\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  transform: translate(-50%);\n}\n\n.placement.buttons .button,\n.main-menu .button {\n  width: 15rem;\n  padding: 0.5rem;\n  background: none;\n  color: white;\n  border: none;\n  font-size: 2rem;\n  font-weight: 600;\n  text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.25);\n  transition: 0.25s;\n  animation: \n    button-idle 2s ease-in-out 0s infinite forwards alternate,\n    title-rise 1s ease-in-out 0s 1 forwards normal;\n  user-select: none;\n}\n\n.placement.buttons .button {\n  font-size: 1.75rem;\n}\n\n.placement.buttons .button.disabled {\n  color: grey;\n}\n\n.placement.buttons .button:not(.disabled):hover,\n.main-menu .button:hover {\n  color: hsl(0, 0%, 90%);\n  background-color: hsla(0, 0%, 100%, 0.1);\n  border-radius: 2rem;\n}\n\n.placement.buttons .button:not(.disabled):active,\n.main-menu .button:active {\n  color: hsl(0, 0%, 80%);\n}\n\n.main-menu form li {\n  margin-bottom: 0.5rem;\n  display: grid;\n  grid-template-columns: 6rem;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  justify-items: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.main-menu form li:last-child {\n  margin-top: 2rem;\n  grid-template-columns: 1fr;\n}\n\n.main-menu form li .label {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 600;\n  text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.25);\n  user-select: none;\n  animation: \n    button-idle 2s ease-in-out 0s infinite forwards alternate,\n    title-rise 1s ease-in-out 0s 1 forwards normal;\n}\n\n.main-menu form li input {\n  width: 100%;\n  padding: 0.5rem;\n  border: 2px groove #7f8c8d;\n  border-radius: 0.5rem;\n  font-size: 1.25rem;\n  animation: \n    button-idle 2s ease-in-out 0s infinite forwards alternate,\n    title-rise 1s ease-in-out 0s 1 forwards normal;\n}\n\n.main-menu form li .button.AI {\n  width: 100%;\n  background-color: #7f8c8d;\n  border: 2px outset #7f8c8d;\n  border-radius: 0.5rem;\n  font-size: 1.25rem;\n  text-shadow: none;\n  user-select: none;\n}\n\n.main-menu form li .button.AI.toggled {\n  background-color: hsl(0, 6%, 45%);   \n  border: 2px inset hsl(0, 6%, 45%);   \n}\n\n.main-menu form li .button.AI.toggled:hover {\n  background-color: hsl(184, 6%, 50%);   \n  border: 2px inset hsl(184, 6%, 50%);   \n}\n\n.main-menu form li .button.AI.toggled:active {\n  background-color: hsl(184, 6%, 47%);\n}\n\n.main-menu form li .button.AI:hover {\n  background-color: hsl(184, 6%, 50%);   \n}\n\n.main-menu form li .button.AI:active {\n  background-color: hsl(184, 6%, 47%);   \n  border: 2px inset hsl(184, 6%, 47%);  \n}\n\n.copyright {\n  color: white;\n  text-align: center;\n  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);\n  font-size: 0.8rem;\n  margin-bottom: 2rem;\n  animation: \n    title-idle 2s ease-in-out 0s infinite forwards alternate,\n    title-rise 1s ease-in-out 0s 1 forwards normal;\n  user-select: none;\n  line-height: 1.8rem;\n}\n\n.copyright svg {\n  vertical-align: bottom;\n  fill: white;\n  height: 1.8rem;\n  transition: \n    transform 0.25s ease-in-out 0s,\n    fill 0.25s ease-in-out 0s;\n}\n\n.copyright svg:hover {\n  color: hsl(0, 0%, 80%);\n  transform: rotate(360deg) scale(1.1);\n}\n\n.copyright svg:active {\n  fill: hsl(0, 0%, 70%);\n}\n\n.dialog-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: hsla(0, 0%, 0%, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 100;\n}\n\n.dialog {\n  min-width: 300px;\n  margin: 1rem;\n  padding: 2rem 1rem;\n  background-color: rgba(44, 62, 80, 0.5);\n  border-radius: 1rem;\n  color: white;\n  outline: 2px ridge #95a5a6;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  animation: fade-in 0.25s ease-in-out 0s 1 forwards normal;\n  user-select: none;\n}\n\n.dialog .text {\n  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);\n}\n\n.dialog .main.text {\n  margin-bottom: 2rem;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.dialog .button {\n  width: 10rem;\n  margin: 0.25rem;\n  padding: 0.5rem;\n  background-color: #7f8c8d;\n  color: white;\n  border: 1px outset #7f8c8d;\n  border-radius: 0.5rem;\n  font-size: 1rem;\n  font-weight: 600;\n}\n\n.dialog .button:hover {\n  background-color: hsl(184, 6%, 56%);\n}\n\n.dialog .button:active {\n  background-color: hsl(184, 6%, 59%);\n}\n\n.dialog .play.button {\n  background-color: #27ae60;\n  border: 1px outset #27ae60;\n}\n\n.dialog .play.button:hover {\n  background-color: hsla(145, 63%, 45%);\n}\n\n.dialog .play.button:active {\n  background-color: hsla(145, 63%, 48%);\n}\n\n.dialog .menu.button {\n  background-color: #c0392b;\n  border: 1px outset #c0392b;\n}\n\n.dialog .menu:hover {\n  background-color: hsl(6, 63%, 49%);\n}\n\n.dialog .menu:active {\n  background-color: hsl(6, 63%, 52%);\n}\n\n.fade-out {\n  animation: fade-out 0.25s ease-in-out 0s 1 forwards normal;\n}\n\n.lose-focus {\n  animation: lose-focus 1s ease-in-out 0s 1 forwards normal;\n}\n\n.return-focus {\n  animation: return-focus 0.125s ease-in-out 0s 1 forwards normal;\n}\n\n.visibility-hidden {\n  visibility: hidden;\n}\n\n@media (max-width: 646px) {\n  .boards:not(.placement) {\n    padding: 10rem 0.5rem;\n  }\n}\n\n@media (max-width: 600px) {\n  .main-menu > h1 {\n    font-size: 5rem;\n  }\n}\n\n@media (max-width: 500px) {\n  .main-menu > h1 {\n    font-size: 4rem;\n  }\n\n  .placement.buttons .button,\n  .main-menu .button {\n    font-size: 1.5rem\n  }\n\n  .main-menu form li .label {\n    font-size: 1.25rem;\n  }\n\n  .main-menu form li input {\n    font-size: 1rem;\n  }\n\n  .main-menu form li .button.AI {\n    font-size: 0.85rem;\n  }  \n}\n\n@media (max-width: 400px) {\n  .main-menu > h1 {\n    font-size: 3rem;\n  }\n\n  .placement.buttons .button,\n  .main-menu .button {\n    font-size: 1.25rem\n  }\n\n  .main-menu form li .label {\n    font-size: 1rem;\n  }\n}\n\n@keyframes lose-focus {\n  0% {\n    filter: blur(0);\n  }\n  \n  100% {\n    filter: blur(2px);\n  }\n}\n\n@keyframes return-focus {\n  0% {\n    filter: blur(2px);\n  }\n  \n  100% {\n    filter: blur(0);\n  }\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes button-idle {\n  0% {\n    transform: translate(-5px, 0);\n  }\n\n  100% {\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes title-idle {\n  0% {\n    transform: translate(-1%, 0.25%);\n  }\n\n  100% {\n    transform: translate(-0%, -0.25%);\n  }\n}\n\n@keyframes title-rise {\n  0% {\n    filter: blur(10px) brightness(0.25) opacity(0.25);\n  }\n\n  100% {\n    filter: blur(0px) brightness(1) opacity(1);\n  }\n}\n\n@keyframes title-sink {\n  0% {\n    filter: blur(0px) brightness(1) opacity(1);\n  }\n\n  100% {\n    filter: blur(10px) brightness(0.25) opacity(0.25);\n  }\n}\n\n@keyframes ship-idle {\n  0% {\n    transform: translate(-2.5%, 0.25%) scale(var(--sprite-scale));\n  }\n\n  100% {\n    transform: translate(-0%, -0.25%) scale(var(--sprite-scale));\n  }\n}\n\n@keyframes ship-idle-horizontal {\n  0% {\n    transform: translate(-2.5%, 0.25%) scale(var(--sprite-scale)) rotate(90deg);\n  }\n\n  100% {\n    transform: translate(-0%, -0.25%) scale(var(--sprite-scale)) rotate(90deg);\n  }\n}\n\n@keyframes ship-sink {\n  0% {\n    filter: blur(0px) brightness(1) grayscale(0%) opacity(1);\n  }\n\n  2.5% {\n    filter: blur(0px) brightness(2) grayscale(0%) opacity(1);\n  }\n\n  5% {\n    filter: blur(0px) brightness(1) grayscale(0%) opacity(1);\n  }\n  \n  100% {\n    filter: blur(25px) brightness(0.5) grayscale(100%) opacity(0.25);\n  }\n}\n\n@keyframes ship-shaking {\n 0% {\n  transform: translate(-0.5%, 0) scale(var(--sprite-scale));\n }\n\n 100% {\n  transform: translate(0.5%, 0) scale(var(--sprite-scale));\n }\n}\n\n@keyframes ship-shaking-horizontal {\n  0% {\n   transform: translate(0, -0.05%) scale(var(--sprite-scale)) rotate(90deg);\n  }\n \n  100% {\n   transform: translate(0, 0.05%) scale(var(--sprite-scale)) rotate(90deg);\n  }\n }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ "./src/scripts/cell.js":
/*!*****************************!*\
  !*** ./src/scripts/cell.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cell)
/* harmony export */ });
class Cell {
  constructor() {
    this.isHit = false;
    this.justGotHit = false;
    this.ship = null;
  }

  hit() {
    this.isHit = true;
    this.justGotHit = true;
  }

  resetJustGotHit() {
    this.justGotHit = false;
  }

  assign(ship) {
    this.ship = ship;
  }
}


/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generatePlayers: () => (/* binding */ generatePlayers),
/* harmony export */   placePlayerShips: () => (/* binding */ placePlayerShips),
/* harmony export */   players: () => (/* binding */ players)
/* harmony export */ });
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player/player */ "./src/scripts/player/player.js");
/* harmony import */ var _player_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player/ai */ "./src/scripts/player/ai.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoard */ "./src/scripts/gameBoard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/scripts/ship.js");





const players = [];

// const ships = [
//   {
//     type: 'Carrier',
//     length: 5,
//     tempCoords: [3, 2],
//     tempHori: true,
//   },
//   {
//     type: 'Battleship',
//     length: 4,
//     tempCoords: [3, 5],
//     tempHori: true,
//   },
//   {
//     type: 'Cruiser',
//     length: 3,
//     tempCoords: [8, 3],
//     tempHori: false,
//   },
//   {
//     type: 'Submarine',
//     length: 3,
//     tempCoords: [6, 7],
//     tempHori: false,
//   },
//   {
//     type: 'Destroyer',
//     length: 2,
//     tempCoords: [1, 9],
//     tempHori: true,
//   },
// ];

const generatePlayers = (inputPlayers) => {
  players.length = 0;

  inputPlayers.forEach((thisPlayer) => {
    const player = thisPlayer.type === 'human' ? new _player_player__WEBPACK_IMPORTED_MODULE_0__["default"](thisPlayer.name)
      : thisPlayer.type === 'AI' ? new _player_ai__WEBPACK_IMPORTED_MODULE_1__["default"](thisPlayer.difficulty)
        : null;

    players.push(player);

    const board = new _gameBoard__WEBPACK_IMPORTED_MODULE_2__["default"]();
    board.createBoard();
    player.assignBoard(board);
  });
};

const placePlayerShips = (player, ships) => {
  ships.forEach((ship) => {
    player
      .board
      .placeShip(ship.insertCoordinates, new _ship__WEBPACK_IMPORTED_MODULE_3__["default"](ship.length, ship.type), ship.horizontal);
  });
};


/***/ }),

/***/ "./src/scripts/gameBoard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/scripts/cell.js");


class GameBoard {
  constructor() {
    this.board = [];
    this.fleet = [];
  }

  getBoard() {
    return this.board;
  }

  getFleet() {
    return this.fleet;
  }

  emptyFleet() {
    this.fleet.length = 0;
  }

  createBoard() {
    for (let i = 0; i < 10; i += 1) {
      this.board[i] = [];
      for (let j = 0; j < 10; j += 1) {
        this.board[i][j] = new _cell__WEBPACK_IMPORTED_MODULE_0__["default"]();
      }
    }
  }

  placeShip([x, y], ship, isPlacedHorizontally = true) {
    const start = isPlacedHorizontally
      ? x - Math.floor(ship.length / 2)
      : y - Math.floor(ship.length / 2);
    const end = start + ship.length - 1;
    const bowCoordinates = isPlacedHorizontally
      ? { x: end, y }
      : { x, y: end };

    if (ship.hasPositioned) return;
    if (start < 0 || end > 9) return;
    for (let i = start; i <= end; i += 1) {
      if (isPlacedHorizontally && this.board[i][y].ship !== null) return;
      if (!isPlacedHorizontally && this.board[x][i].ship !== null) return;
    }

    for (let i = start; i <= end; i += 1) {
      if (isPlacedHorizontally) this.board[i][y].assign(ship);
      if (!isPlacedHorizontally) this.board[x][i].assign(ship);
    }
    this.fleet.push(ship);
    ship.isPositioned(bowCoordinates, isPlacedHorizontally);
  }

  resetCellsJustGotHit() {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        this.board[i][j].resetJustGotHit();
        if (this.board[i][j].ship !== null) {
          this.board[i][j].ship.resetJustSunk();
        }
      }
    }
  }

  async receiveAttack([x, y]) {
    this.resetCellsJustGotHit();
    this.board[x][y].hit();
    if (this.board[x][y].ship !== null) {
      this.board[x][y].ship.hit();
    }
  }

  isFleetOperational() {
    return this.fleet.some((ship) => ship.hasSunk === false);
  }

  allUnhitCoordinates() {
    const unhitCoordinates = [];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (!this.board[i][j].isHit) unhitCoordinates.push([i, j]);
      }
    }
    return unhitCoordinates;
  }

  allShipCoordinates() {
    const shipCoordinates = [];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (this.board[i][j].ship !== null) {
          if (!this.board[i][j].isHit) {
            shipCoordinates.push([i, j]);
          }
        }
      }
    }
    return shipCoordinates;
  }
}


/***/ }),

/***/ "./src/scripts/player/ai.js":
/*!**********************************!*\
  !*** ./src/scripts/player/ai.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AI)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/scripts/player/player.js");


class AI extends _player__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(difficulty = 'Easy') {
    super(`AI ${difficulty}`);
    this.difficulty = difficulty;
  }

  chooseAttackCoordinates(player) {
    if (this.difficulty === 'Easy') {
      const availableAttackCoordinates = player.board.allUnhitCoordinates();
      return availableAttackCoordinates[
        Math.floor(Math.random() * availableAttackCoordinates.length)
      ];
    }
    // Normal Placeholder, same as easy
    if (this.difficulty === 'Normal') {
      const availableAttackCoordinates = player.board.allUnhitCoordinates();
      return availableAttackCoordinates[
        Math.floor(Math.random() * availableAttackCoordinates.length)
      ];
    }
    if (this.difficulty === 'Cheat') {
      const availableAttackCoordinates = player.board.allShipCoordinates();
      return availableAttackCoordinates[
        Math.floor(Math.random() * availableAttackCoordinates.length)
      ];
    }
    return null;
  }

  static arrangeShipsOnBoard(data) {
    const currentAIShips = [];
    const imaginaryBoard = [];

    data.forEach((ship) => {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      let horizontal = Boolean(Math.round(Math.random()));
      let start = horizontal
        ? x - Math.floor(ship.length / 2)
        : y - Math.floor(ship.length / 2);
      let end = start + ship.length - 1;

      for (let i = start; i <= end; i += 1) {
        const array = horizontal ? [i, y] : [x, i];
        if (
          imaginaryBoard.some((cell) => cell[0] === array[0] && cell[1] === array[1])
            || start < 0
            || end > 9
        ) {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
          horizontal = Boolean(Math.round(Math.random()));
          start = horizontal
            ? x - Math.floor(ship.length / 2)
            : y - Math.floor(ship.length / 2);
          end = start + ship.length - 1;
          i = start;
          continue;
        }
      }

      for (let i = start; i <= end; i += 1) {
        const array = horizontal ? [i, y] : [x, i];
        imaginaryBoard.push(array);
      }

      currentAIShips.push({
        type: ship.type,
        length: ship.length,
        insertCoordinates: [x, y],
        horizontal,
      });
    });

    return currentAIShips;
  }
}


/***/ }),

/***/ "./src/scripts/player/player.js":
/*!**************************************!*\
  !*** ./src/scripts/player/player.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
class Player {
  constructor(name = 'Player') {
    this.name = name;
    this.board = null;
  }

  assignBoard(gameBoard) {
    this.board = gameBoard;
  }
}


/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length, type) {
    this.length = length;
    this.hits = 0;
    this.hasPositioned = false;
    this.hasSunk = false;
    this.justSunk = false;
    this.type = type;
    this.bowCoordinates = null;
    this.isHorizontal = null;
  }

  hit() {
    this.hits += 1;
    if (this.length === this.hits) this.isSunk();
  }

  isSunk() {
    this.hasSunk = true;
    this.justSunk = true;
  }

  resetJustSunk() {
    this.justSunk = false;
  }

  isPositioned(bowCoordinates, isHorizontal) {
    this.hasPositioned = true;
    this.bowCoordinates = bowCoordinates;
    this.isHorizontal = isHorizontal;
  }
}


/***/ }),

/***/ "./src/assets/explosion.gif":
/*!**********************************!*\
  !*** ./src/assets/explosion.gif ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f276cfa86607d25dcd2.gif";

/***/ }),

/***/ "./src/assets/fire.gif":
/*!*****************************!*\
  !*** ./src/assets/fire.gif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19fd337c74583d2027c0.gif";

/***/ }),

/***/ "./src/assets/ocean.gif":
/*!******************************!*\
  !*** ./src/assets/ocean.gif ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02063eeea7379ba52b69.gif";

/***/ }),

/***/ "./src/assets/shipBattleship.png":
/*!***************************************!*\
  !*** ./src/assets/shipBattleship.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af9103d9276f84bf597d.png";

/***/ }),

/***/ "./src/assets/shipCarrier.png":
/*!************************************!*\
  !*** ./src/assets/shipCarrier.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce0292ac5f5c432cbaa8.png";

/***/ }),

/***/ "./src/assets/shipCruiser.png":
/*!************************************!*\
  !*** ./src/assets/shipCruiser.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75584719f2bfe57145e3.png";

/***/ }),

/***/ "./src/assets/shipDestroyer.png":
/*!**************************************!*\
  !*** ./src/assets/shipDestroyer.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8887ad237c1d7274d5bd.png";

/***/ }),

/***/ "./src/assets/shipSubmarine.png":
/*!**************************************!*\
  !*** ./src/assets/shipSubmarine.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ffb313b134cc61d170ae.png";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/scripts/controllerDOM.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
/* harmony import */ var _player_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player/ai */ "./src/scripts/player/ai.js");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player/player */ "./src/scripts/player/player.js");
/* harmony import */ var _assets_shipBattleship_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/shipBattleship.png */ "./src/assets/shipBattleship.png");
/* harmony import */ var _assets_shipCarrier_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/shipCarrier.png */ "./src/assets/shipCarrier.png");
/* harmony import */ var _assets_shipCruiser_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/shipCruiser.png */ "./src/assets/shipCruiser.png");
/* harmony import */ var _assets_shipDestroyer_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/shipDestroyer.png */ "./src/assets/shipDestroyer.png");
/* harmony import */ var _assets_shipSubmarine_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/shipSubmarine.png */ "./src/assets/shipSubmarine.png");
/* harmony import */ var _assets_fire_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/fire.gif */ "./src/assets/fire.gif");
/* harmony import */ var _assets_explosion_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/explosion.gif */ "./src/assets/explosion.gif");












const shipsData = [
  {
    type: 'Carrier',
    length: 5,
    src: _assets_shipCarrier_png__WEBPACK_IMPORTED_MODULE_5__,
  },
  {
    type: 'Battleship',
    length: 4,
    src: _assets_shipBattleship_png__WEBPACK_IMPORTED_MODULE_4__,
  },
  {
    type: 'Cruiser',
    length: 3,
    src: _assets_shipCruiser_png__WEBPACK_IMPORTED_MODULE_6__,
  },
  {
    type: 'Submarine',
    length: 3,
    src: _assets_shipSubmarine_png__WEBPACK_IMPORTED_MODULE_8__,
  },
  {
    type: 'Destroyer',
    length: 2,
    src: _assets_shipDestroyer_png__WEBPACK_IMPORTED_MODULE_7__,
  },
];

let currentPlayer;
let targetPlayer;

const switchPlayers = () => {
  currentPlayer = currentPlayer === _game__WEBPACK_IMPORTED_MODULE_1__.players[0] ? _game__WEBPACK_IMPORTED_MODULE_1__.players[1] : _game__WEBPACK_IMPORTED_MODULE_1__.players[0];
  targetPlayer = targetPlayer === _game__WEBPACK_IMPORTED_MODULE_1__.players[0] ? _game__WEBPACK_IMPORTED_MODULE_1__.players[1] : _game__WEBPACK_IMPORTED_MODULE_1__.players[0];
};

const loseFocusFromGame = () => {
  const game = document.querySelector('.game');
  game.classList.add('lose-focus');
};

const returnFocusToGame = () => {
  const game = document.querySelector('.game');
  game.classList.remove('lose-focus');
  game.classList.add('return-focus');
  game.addEventListener('animationend', () => {
    game.classList.remove('return-focus');
  }, { once: true });
};

const hideDialog = () => {
  const dialogOverlay = document.querySelector('.dialog-overlay');
  dialogOverlay.classList.add('fade-out');
  dialogOverlay.addEventListener('animationend', () => {
    dialogOverlay.classList.remove('fade-out');
    dialogOverlay.remove();
  }, { once: true });
};

const showWinnerDialog = () => {
  const siteContainer = document.querySelector('.site-container');

  const dialogOverlay = document.createElement('div');
  dialogOverlay.classList.add('dialog-overlay');

  const dialogBox = document.createElement('div');
  dialogBox.classList.add('dialog');

  const p1 = document.createElement('p');
  p1.classList.add('sub', 'text');
  p1.textContent = currentPlayer instanceof _player_ai__WEBPACK_IMPORTED_MODULE_2__["default"]
    ? 'All your ships have been destroyed.'
    : 'All enemy ships have been destroyed.';

  const p2 = document.createElement('p');
  p2.textContent = `${currentPlayer.name} wins!`;
  p2.classList.add('main', 'text');

  const btnPlayAgain = document.createElement('button');
  btnPlayAgain.classList.add('play', 'button');
  btnPlayAgain.textContent = 'Play Again';
  btnPlayAgain.addEventListener('click', restartGame);

  const btnMenuReturn = document.createElement('button');
  btnMenuReturn.classList.add('menu', 'button');
  btnMenuReturn.textContent = 'Return to Menu';
  btnMenuReturn.addEventListener('click', returnToMenu);

  dialogBox.appendChild(p1);
  dialogBox.appendChild(p2);
  dialogBox.appendChild(btnPlayAgain);
  dialogBox.appendChild(btnMenuReturn);
  dialogOverlay.appendChild(dialogBox);
  siteContainer.appendChild(dialogOverlay);
};

const checkWinningCondition = () => {
  if (!targetPlayer.board.isFleetOperational()) {
    loseFocusFromGame();
    showWinnerDialog();
    hidePlayerHP();
    return true;
  }
  return false;
};

const selectShipObject = (player, cell) => {
  const [selectedShip] = player
    .board
    .fleet
    .filter((ship) => ship.type === cell.dataset.ship);
  return selectedShip;
};

const ifSunkExplosion = (cell) => {
  const explodingCell = cell;
  if (explodingCell.dataset.ship) {
    const explodingCellPlayer = _game__WEBPACK_IMPORTED_MODULE_1__.players.find((player) => player.name === cell.dataset.playerName);
    const explodingShip = selectShipObject(explodingCellPlayer, explodingCell);
    if (explodingShip.hasSunk) {
      const array = [
        [
          +explodingCell.dataset.x + 1,
          +explodingCell.dataset.y,
        ],
        [
          +explodingCell.dataset.x - 1,
          +explodingCell.dataset.y,
        ],
        [
          +explodingCell.dataset.x,
          +explodingCell.dataset.y + 1,
        ],
        [
          +explodingCell.dataset.x,
          +explodingCell.dataset.y - 1,
        ],
      ];
      explodingCell.dataset.ship = '';
      explodingCell.classList.add('sunk');

      array.forEach(([x, y]) => {
        const nextCell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"][data-player-name="${explodingCellPlayer.name}"][data-ship="${explodingShip.type}"]`);
        if (nextCell) hitExplosionEffect(nextCell);
      });
    }
  }
};

const hitExplosionEffect = async (cell) => {
  ifSunkExplosion(cell);

  const explosionContainer = document.createElement('div');
  explosionContainer.classList.add('explosion-container');

  const explosion = document.createElement('img');
  explosion.src = `${_assets_explosion_gif__WEBPACK_IMPORTED_MODULE_10__}?rand=${Math.random()}`;
  explosion.classList.add('explosion');

  const explosionScale = 1.5 * (parseInt(window.getComputedStyle(cell).width, 10) / 60);
  document.documentElement.style.setProperty('--explosion-scale', explosionScale);

  explosionContainer.appendChild(explosion);
  cell.appendChild(explosionContainer);

  setTimeout(() => {
    cell.removeChild(explosionContainer);
  }, 5000);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

const addFireEffect = (targetCell) => {
  const fireContainer = document.createElement('div');
  fireContainer.classList.add('fire-container');

  const fire = document.createElement('img');
  fire.src = `${_assets_fire_gif__WEBPACK_IMPORTED_MODULE_9__}?rand=${Math.random()}`;
  fire.classList.add('fire');

  fireContainer.appendChild(fire);
  targetCell.appendChild(fireContainer);
};

const addMissMark = (targetCell) => {
  const mark = document.createElement('svg');
  targetCell.appendChild(mark);
  mark.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>miss</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>';
};

const updateHP = () => {
  let tag;
  if (_game__WEBPACK_IMPORTED_MODULE_1__.players.some((player) => player instanceof _player_ai__WEBPACK_IMPORTED_MODULE_2__["default"])) {
    tag = targetPlayer === _game__WEBPACK_IMPORTED_MODULE_1__.players[0]
      ? 'current'
      : 'enemy';
  } else {
    tag = 'enemy';
  }
  const totalHP = targetPlayer
    .board
    .fleet
    .reduce((total, ship) => total + ship.length, 0);
  const currentHP = targetPlayer
    .board
    .fleet
    .reduce((total, ship) => total - ship.hits, totalHP);
  const health = `${Math.round((currentHP / totalHP) * 100)}%`;
  const hit = `${Math.round((1 / totalHP) * 100)}%`;
  const empty = `${Math.round((1 - currentHP / totalHP) * 100)}%`;

  const playerHealthText = document.querySelector(`.${tag} .health > .text `);
  playerHealthText.textContent = `${currentHP}/${totalHP}`;

  document.documentElement.style.setProperty(`--${tag}-health`, health);
  document.documentElement.style.setProperty(`--${tag}-hit`, hit);

  const playerHealthBar = document.querySelector(`.${tag} .health > .bar `);
  playerHealthBar.addEventListener('transitionend', () => {
    document.documentElement.style.setProperty(`--${tag}-hit`, '0%');
    document.documentElement.style.setProperty(`--${tag}-empty`, empty);
  }, { once: true });
};

const updateBoard = async ([x, y]) => {
  const targetCell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"][data-player-name="${targetPlayer.name}"]`);
  if (targetPlayer.board.getBoard()[x][y].ship) {
    const targetShip = selectShipObject(targetPlayer, targetCell);
    if (targetShip.hasSunk) {
      printSinkingSprite(targetShip);
    }
  }
  await hitExplosionEffect(targetCell);
  if (targetPlayer.board.getBoard()[x][y].ship) {
    targetCell.classList.add('hit');
    if (targetCell.dataset.ship) addFireEffect(targetCell);
  } else {
    targetCell.classList.add('miss');
    addMissMark(targetCell);
  }
};

const showInputBlocker = () => {
  const blocker = document.createElement('div');
  blocker.classList.add('blocker');

  const game = document.querySelector('.game');
  game.appendChild(blocker);
};

const hideInputBlocker = () => {
  const blocker = document.querySelector('.blocker');
  const game = document.querySelector('.game');
  game.removeChild(blocker);
};

let previousHitCell = [-1, -1];

const processHit = async ([x, y]) => {
  targetPlayer
    .board
    .receiveAttack(
      [x, y],
    );
  previousHitCell = [+x, +y];
  showInputBlocker();
  await updateBoard([x, y]);
  if (targetPlayer.board.getBoard()[x][y].ship) updateHP();
  if (checkWinningCondition()) return;
  switchPlayers();
  if (currentPlayer instanceof _player_ai__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    hitCellAI();
  } else if (!(targetPlayer instanceof _player_ai__WEBPACK_IMPORTED_MODULE_2__["default"])) {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    clearGameContainer();
    initializeGame();
  }
  if (_game__WEBPACK_IMPORTED_MODULE_1__.players.some((player) => (player instanceof _player_ai__WEBPACK_IMPORTED_MODULE_2__["default"]))) hideInputBlocker();
};

const hitCellAI = () => {
  const [x, y] = currentPlayer.chooseAttackCoordinates(targetPlayer);
  processHit([x, y]);
};

const hitCellPlayer = (e) => {
  const cell = e.currentTarget;
  const { x } = cell.dataset;
  const { y } = cell.dataset;
  if (
    cell.dataset.playerName === targetPlayer.name
    && !targetPlayer.board.getBoard()[x][y].isHit
  ) {
    processHit([x, y]);
  }
};

const printSinkingSprite = (ship) => {
  const { x, y } = ship.bowCoordinates;
  const shipPlayer = _game__WEBPACK_IMPORTED_MODULE_1__.players.find((player) => player.board.getFleet().includes(ship));
  const bowCell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"][data-player-name="${shipPlayer.name}"]`);
  const bowCellChildren = Array.from(bowCell.childNodes);
  if (bowCellChildren.some((child) => child.classList.contains('sprite-container'))) return;
  bowCell.classList.add('ship-bow');

  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add('sprite-container');
  if (ship.isHorizontal) spriteContainer.classList.add('horizontal');

  const shipSprite = document.createElement('img');
  shipSprite.src = shipsData.find((shipData) => shipData.type === ship.type).src;
  shipSprite.classList.add('sprite');

  const spriteScale = 0.35 * (parseInt(window.getComputedStyle(bowCell).width, 10) / 60);
  document.documentElement.style.setProperty('--sprite-scale', spriteScale);

  spriteContainer.appendChild(shipSprite);
  bowCell.appendChild(spriteContainer);
};

const printSprites = () => {
  currentPlayer.board.getFleet().forEach((ship) => {
    if (!ship.hasSunk) {
      const { x, y } = ship.bowCoordinates;
      const bowCell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"][data-player-name="${currentPlayer.name}"]`);
      bowCell.classList.add('ship-bow');

      const spriteContainer = document.createElement('div');
      spriteContainer.classList.add('sprite-container');
      if (ship.isHorizontal) spriteContainer.classList.add('horizontal');

      const shipSprite = document.createElement('img');
      shipSprite.src = shipsData.find((shipData) => shipData.type === ship.type).src;
      shipSprite.classList.add('sprite');

      const spriteScale = 0.35 * (parseInt(window.getComputedStyle(bowCell).width, 10) / 60);
      document.documentElement.style.setProperty('--sprite-scale', spriteScale);

      spriteContainer.appendChild(shipSprite);
      bowCell.appendChild(spriteContainer);
    }
  });
};

const resizeSprites = () => {
  const bowCell = document.querySelector('.cell');
  const spriteScale = 0.35 * (parseInt(window.getComputedStyle(bowCell).width, 10) / 60);
  document.documentElement.style.setProperty('--sprite-scale', spriteScale);
};

const resumeGame = () => {
  returnFocusToGame();
  hideDialog();
  unhidePlayerHP();
};

const restartGame = () => {
  returnFocusToGame();
  hideDialog();
  clearGameContainer();
  (0,_game__WEBPACK_IMPORTED_MODULE_1__.generatePlayers)(
    [
      {
        type: 'human',
        name: _game__WEBPACK_IMPORTED_MODULE_1__.players[0].name,
      },
      _game__WEBPACK_IMPORTED_MODULE_1__.players[1] instanceof _player_ai__WEBPACK_IMPORTED_MODULE_2__["default"]
        ? {
          type: 'AI',
          difficulty: _game__WEBPACK_IMPORTED_MODULE_1__.players[1].difficulty,
        }
        : {
          type: 'human',
          name: _game__WEBPACK_IMPORTED_MODULE_1__.players[1].name,
        },
    ],
  );
  [currentPlayer, targetPlayer] = _game__WEBPACK_IMPORTED_MODULE_1__.players;
  initializeGameContainer();
  initializeShipPlacementScreen();
};

const returnToMenu = () => {
  returnFocusToGame();
  hideDialog();
  clearGameContainer();
  initializeMainMenu();
};

const showPauseMenu = () => {
  const siteContainer = document.querySelector('.site-container');

  const dialogOverlay = document.createElement('div');
  dialogOverlay.classList.add('dialog-overlay');

  const dialogBox = document.createElement('div');
  dialogBox.classList.add('dialog');

  const p = document.createElement('p');
  p.textContent = 'Game paused';
  p.classList.add('main', 'text');

  const btnResume = document.createElement('button');
  btnResume.classList.add('button');
  btnResume.textContent = 'Resume';
  btnResume.addEventListener('click', resumeGame);

  const btnRestart = document.createElement('button');
  btnRestart.classList.add('button');
  btnRestart.textContent = 'Restart';
  btnRestart.addEventListener('click', restartGame);

  const btnMenuReturn = document.createElement('button');
  btnMenuReturn.classList.add('button');
  btnMenuReturn.textContent = 'Return to Menu';
  btnMenuReturn.addEventListener('click', returnToMenu);

  dialogBox.appendChild(p);
  dialogBox.appendChild(btnResume);
  dialogBox.appendChild(btnRestart);
  dialogBox.appendChild(btnMenuReturn);
  dialogOverlay.appendChild(dialogBox);
  siteContainer.appendChild(dialogOverlay);
};

const clickPauseMenu = () => {
  loseFocusFromGame();
  hidePlayerHP();
  showPauseMenu();
};

const clickPlacementShip = (e) => {
  const { ship } = e.currentTarget.dataset;
  document
    .querySelectorAll(`.cell[data-ship="${ship}"`)
    .forEach((cell) => {
      cell.classList.add('clicked');
    });
  e.currentTarget.releasePointerCapture(e.pointerId);
};

const unclickShipPlacement = (e) => {
  const { ship } = e.currentTarget.dataset;
  document
    .querySelectorAll(`.cell[data-ship="${ship}"`)
    .forEach((cell) => {
      cell.classList.remove('clicked');
    });
};

const hoverShipPlacement = (e) => {
  if (isDraggingShip) return;
  const { ship } = e.currentTarget.dataset;
  document
    .querySelectorAll(`.cell[data-ship="${ship}"`)
    .forEach((cell) => {
      cell.classList.add('hover');
    });
};

const unhoverShipPlacement = (e) => {
  const { ship } = e.currentTarget.dataset;
  document
    .querySelectorAll(`.cell[data-ship="${ship}"`)
    .forEach((cell) => {
      cell.classList.remove('hover');
    });
};

const currentPlayerShips = [];

const confirmPlacement = () => {
  (0,_game__WEBPACK_IMPORTED_MODULE_1__.placePlayerShips)(currentPlayer, currentPlayerShips);
  currentPlayerShips.length = 0;
  hideDialog();
  switchPlayers();

  if (
    _game__WEBPACK_IMPORTED_MODULE_1__.players[0].board.fleet.length > 0
    && _game__WEBPACK_IMPORTED_MODULE_1__.players[1].board.fleet.length > 0
  ) {
    window.removeEventListener('mouseup', resetShipPlacementDragData);
    window.removeEventListener('resize', resizePlacementCells);
    clearGameContainer();
    initalizePlayerHPValues();
    initializeGame();
    return;
  }

  if (currentPlayer instanceof _player_ai__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    currentPlayerShips.push(..._player_ai__WEBPACK_IMPORTED_MODULE_2__["default"].arrangeShipsOnBoard(shipsData));
    confirmPlacement();
  } else {
    clearGameContainer();
    initializeGameContainer();
    initializeShipPlacementScreen();
  }
};

const clickConfirmPlacement = () => {
  currentPlayerShips.length = 0;

  const placedShips = document.querySelectorAll('.placement.boards .cell.bow .sprite-container');
  placedShips.forEach((placedShip) => {
    const {
      ship, length, bowX, bowY, horizontal,
    } = placedShip.parentNode.dataset;
    let insertCoordinates;
    if (horizontal === 'true') {
      insertCoordinates = [
        +bowX - Math.ceil(+length / 2) + 1,
        +bowY,
      ];
    } else {
      insertCoordinates = [
        +bowX,
        +bowY - Math.ceil(+length / 2) + 1,
      ];
    }
    currentPlayerShips.push({
      type: ship,
      length: +length,
      insertCoordinates,
      horizontal: horizontal === 'true',
    });
  });

  const siteContainer = document.querySelector('.site-container');

  const dialogOverlay = document.createElement('div');
  dialogOverlay.classList.add('dialog-overlay');

  const dialogBox = document.createElement('div');
  dialogBox.classList.add('dialog');

  const p1 = document.createElement('p');
  p1.classList.add('sub', 'text');
  p1.textContent = `You have placed ${currentPlayerShips.length} ship(s).`;

  const p2 = document.createElement('p');
  p2.textContent = 'Confirm placement?';
  p2.classList.add('main', 'text');

  const btnYes = document.createElement('button');
  btnYes.classList.add('play', 'button');
  btnYes.textContent = 'Yes';
  btnYes.addEventListener('click', confirmPlacement);

  const btnNo = document.createElement('button');
  btnNo.classList.add('menu', 'button');
  btnNo.textContent = 'No';
  btnNo.addEventListener('click', hideDialog);

  dialogBox.appendChild(p1);
  dialogBox.appendChild(p2);
  dialogBox.appendChild(btnYes);
  dialogBox.appendChild(btnNo);
  dialogOverlay.appendChild(dialogBox);
  siteContainer.appendChild(dialogOverlay);
};

const addEventListenersToShipCell = (cell) => {
  cell.addEventListener('mouseenter', hoverShipPlacement);
  cell.addEventListener('mouseleave', unhoverShipPlacement);
  cell.addEventListener('mousedown', clickPlacementShip);
  cell.addEventListener('mouseup', unclickShipPlacement);
  cell.addEventListener('mouseleave', unclickShipPlacement);
  cell.addEventListener('mousedown', dragShipOnPlacementBoard);
  cell.addEventListener('pointerenter', hoverShipPlacement);
  cell.addEventListener('pointerleave', unhoverShipPlacement);
  cell.addEventListener('pointerdown', clickPlacementShip);
  cell.addEventListener('pointerup', unclickShipPlacement);
  cell.addEventListener('pointerleave', unclickShipPlacement);
  cell.addEventListener('pointerdown', dragShipOnPlacementBoard);
  cell.addEventListener('click', rotateShipOnPlacementBoard);
  cell.addEventListener('dblclick', unplaceShipFromPlacementBoard);
};

const emptyCellDataOnPlacementBoard = (cell) => {
  cell.classList.remove('bow');
  cell.classList.remove('hover');
  cell.removeAttribute('data-ship');
  cell.removeAttribute('data-length');
  cell.removeAttribute('data-bow-x');
  cell.removeAttribute('data-bow-y');
  cell.removeAttribute('data-horizontal');
  cell.removeEventListener('mouseenter', hoverShipPlacement);
  cell.removeEventListener('mouseleave', unhoverShipPlacement);
  cell.removeEventListener('mousedown', clickPlacementShip);
  cell.removeEventListener('mouseup', unclickShipPlacement);
  cell.removeEventListener('mouseleave', unclickShipPlacement);
  cell.removeEventListener('mousedown', dragShipOnPlacementBoard);
  cell.removeEventListener('pointerenter', hoverShipPlacement);
  cell.removeEventListener('pointerleave', unhoverShipPlacement);
  cell.removeEventListener('pointerdown', clickPlacementShip);
  cell.removeEventListener('pointerup', unclickShipPlacement);
  cell.removeEventListener('pointerleave', unclickShipPlacement);
  cell.removeEventListener('pointerdown', dragShipOnPlacementBoard);
  cell.removeEventListener('click', rotateShipOnPlacementBoard);
  cell.removeEventListener('dblclick', unplaceShipFromPlacementBoard);
};

const rotateShipOnPlacementBoard = (e) => {
  if (e.detail > 1) return;
  if (isDraggingShip) return;

  const rotatedShipCell = e.currentTarget;
  const { ship, length } = rotatedShipCell.dataset;
  let bowX = +rotatedShipCell.dataset.bowX;
  let bowY = +rotatedShipCell.dataset.bowY;
  const rotatedShipContainer = document.querySelector(`.placement .cell[data-ship="${ship}"] .sprite-container`);
  const rotatedShipCells = document.querySelectorAll(`.placement .cell[data-ship="${ship}"]`);

  rotatedShipCells.forEach((shipCell) => {
    emptyCellDataOnPlacementBoard(shipCell);
  });

  if (rotatedShipContainer.classList.contains('horizontal')) {
    rotatedShipContainer.classList.remove('horizontal');
  } else {
    rotatedShipContainer.classList.add('horizontal');
  }

  let scanUp = true;
  let scanRight = true;

  for (let i = 0; i < +length; i += 1) {
    const shipCell = rotatedShipContainer.classList.contains('horizontal')
      ? document.querySelector(`.cell[data-x="${bowX - i}"][data-y="${bowY}"]`)
      : document.querySelector(`.cell[data-x="${bowX}"][data-y="${bowY - i}"]`);
    if (
      !shipCell
      || (shipCell.dataset.ship && shipCell.dataset.ship !== rotatedShipCell.dataset.ship)
    ) {
      if (bowY === 0) scanUp = true;
      if (bowY === 9) scanUp = false;
      if (bowX === 0) scanRight = true;
      if (bowX === 9) scanRight = false;
      bowY = scanUp ? bowY + 1 : bowY - 1;
      bowX = scanRight ? bowX + 1 : bowX - 1;
      i = -1;
      continue;
    }
  }

  for (let i = 0; i < +length; i += 1) {
    const shipCell = rotatedShipContainer.classList.contains('horizontal')
      ? document.querySelector(`.cell[data-x="${bowX - i}"][data-y="${bowY}"]`)
      : document.querySelector(`.cell[data-x="${bowX}"][data-y="${bowY - i}"]`);
    if (!shipCell) continue;
    if (!shipCell.dataset.ship) {
      if (i === 0) {
        shipCell.appendChild(rotatedShipContainer);
        shipCell.classList.add('bow');
      }
      shipCell.dataset.ship = ship;
      shipCell.dataset.length = length;
      shipCell.dataset.bowX = bowX;
      shipCell.dataset.bowY = bowY;
      shipCell.dataset.horizontal = rotatedShipContainer.classList.contains('horizontal');
      addEventListenersToShipCell(shipCell);
    }
  }
};

let isDraggingShip = false;
let draggedShipContainer = null;
let draggedShipCell = null;
let draggedShipCells = null;

const resetShipPlacementDragData = () => {
  isDraggingShip = false;
  draggedShipContainer = null;
  draggedShipCell = null;
  draggedShipCells = null;
};

const dragShipOnPlacementBoard = (e) => {
  isDraggingShip = true;
  draggedShipCell = e.currentTarget;

  const { ship } = draggedShipCell.dataset;
  draggedShipContainer = document.querySelector(`.placement .cell[data-ship="${ship}"] .sprite-container`);
  draggedShipCells = document.querySelectorAll(`.placement .cell[data-ship="${ship}"]`);

  draggedShipCell.releasePointerCapture(e.pointerId);
};

const moveDraggedShipOnPlacementBoard = (e) => {
  if (!isDraggingShip) return;

  const { x, y } = e.currentTarget.dataset;
  const { ship, length } = draggedShipCell.dataset;
  const bowX = +x + +draggedShipCell.dataset.bowX - draggedShipCell.dataset.x;
  const bowY = +y + +draggedShipCell.dataset.bowY - draggedShipCell.dataset.y;

  for (let i = 0; i < +length; i += 1) {
    const shipCell = draggedShipContainer.classList.contains('horizontal')
      ? document.querySelector(`.cell[data-x="${bowX - i}"][data-y="${bowY}"]`)
      : document.querySelector(`.cell[data-x="${bowX}"][data-y="${bowY - i}"]`);
    if (
      !shipCell
      || (shipCell.dataset.ship && shipCell.dataset.ship !== draggedShipCell.dataset.ship)
    ) return;
  }

  const bowCell = document.querySelector(`.placement .cell[data-x="${bowX}"][data-y="${bowY}"]`);
  if (!bowCell) return;
  bowCell.appendChild(draggedShipContainer);

  draggedShipCells.forEach((shipCell) => {
    emptyCellDataOnPlacementBoard(shipCell);
  });

  for (let i = 0; i < +length; i += 1) {
    const shipCell = draggedShipContainer.classList.contains('horizontal')
      ? document.querySelector(`.cell[data-x="${bowX - i}"][data-y="${bowY}"]`)
      : document.querySelector(`.cell[data-x="${bowX}"][data-y="${bowY - i}"]`);
    if (!shipCell) { continue; }
    if (i === 0) {
      shipCell.classList.add('bow');
    }
    if (!shipCell.dataset.ship) {
      shipCell.classList.add('hover');
      shipCell.classList.add('clicked');
      shipCell.dataset.ship = ship;
      shipCell.dataset.length = length;
      shipCell.dataset.bowX = bowX;
      shipCell.dataset.bowY = bowY;
      shipCell.dataset.horizontal = draggedShipContainer.classList.contains('horizontal');
      addEventListenersToShipCell(shipCell);
    }
  }

  draggedShipContainer = document.querySelector(`.placement .cell[data-ship="${ship}"] .sprite-container`);
  draggedShipCell = e.currentTarget;
  draggedShipCells = document.querySelectorAll(`.placement .cell[data-ship="${ship}"]`);
};

const checkForAtLeastOneShipOnPlacementBoard = () => {
  const hasShip = document.querySelector('.boards.placement .sprite-container');
  const confirmButton = document.querySelector('#placementConfirmBtn');
  if (hasShip) {
    confirmButton.addEventListener('click', clickConfirmPlacement);
    confirmButton.classList.remove('disabled');
  } else {
    confirmButton.removeEventListener('click', clickConfirmPlacement);
    confirmButton.classList.add('disabled');
  }
};

const unplaceShipFromPlacementBoard = (e) => {
  const { ship } = e.currentTarget.dataset;
  const unplacedContainer = document.querySelector(`.placement.info .container[data-ship="${ship}"]`);
  const unplacedCell = document.querySelector(`.placement.info .container[data-ship="${ship}"] .cell:last-child`);
  const sprite = document.querySelector(`.placement .cell[data-ship="${ship}"] .sprite-container`);
  const shipCells = document.querySelectorAll(`.placement .cell[data-ship="${ship}"]`);
  shipCells.forEach((shipCell) => {
    emptyCellDataOnPlacementBoard(shipCell);
  });
  sprite.classList.add('horizontal');
  unplacedCell.appendChild(sprite);
  unplacedContainer.classList.add('unplaced');
  unplacedContainer.addEventListener('click', placeShipOnPlacementBoard, { once: true });
  checkForAtLeastOneShipOnPlacementBoard();
};

const resetPlacementBoard = () => {
  shipsData.forEach((ship) => {
    const unplacedContainer = document.querySelector(`.placement.info .container[data-ship="${ship.type}"]`);
    const unplacedCell = document.querySelector(`.placement.info .container[data-ship="${ship.type}"] .cell:last-child`);
    const sprite = document.querySelector(`.placement .cell[data-ship="${ship.type}"] .sprite-container`);
    if (sprite) {
      const shipCells = document.querySelectorAll(`.placement .cell[data-ship="${ship.type}"]`);
      shipCells.forEach((shipCell) => {
        emptyCellDataOnPlacementBoard(shipCell);
      });
      sprite.classList.add('horizontal');
      unplacedCell.appendChild(sprite);
      unplacedContainer.classList.add('unplaced');
      unplacedContainer.addEventListener('click', placeShipOnPlacementBoard, { once: true });
    }
  });
  checkForAtLeastOneShipOnPlacementBoard();
};

const placeShipOnPlacementBoard = (e) => {
  const container = e.currentTarget;
  const { ship, length } = container.dataset;
  container.classList.remove('unplaced');

  const sprite = document.querySelector(`.placement [data-ship="${ship}"] .cell .sprite-container`);
  let bowX = 9;
  let bowY = 9;

  // Check for valid initial placement
  for (let i = 0; i < length; i += 1) {
    const shipCell = document.querySelector(`.cell[data-x="${bowX - i}"][data-y="${bowY}"]`);
    if (!shipCell) {
      bowX = 9;
      bowY -= 1;
      i = -1;
      continue;
    }
    if (shipCell.dataset.ship) {
      bowX -= 1;
      i = -1;
    }
  }

  // Actually place sprite on success
  for (let i = 0; i < length; i += 1) {
    const shipCell = document.querySelector(`.cell[data-x="${bowX - i}"][data-y="${bowY}"]`);
    if (i === 0) {
      shipCell.appendChild(sprite);
      shipCell.classList.add('bow');
    }
    shipCell.dataset.ship = ship;
    shipCell.dataset.length = length;
    shipCell.dataset.bowX = bowX;
    shipCell.dataset.bowY = bowY;
    shipCell.dataset.horizontal = sprite.classList.contains('horizontal');
    addEventListenersToShipCell(shipCell);
  }
  checkForAtLeastOneShipOnPlacementBoard();
};

const resizePlacementCells = () => {
  const bowCell = document.querySelector('.placement .cell');
  const placementCellWidth = window.getComputedStyle(bowCell).width;
  document.documentElement.style.setProperty('--placement-cell-width', placementCellWidth);
};

const initializeShipPlacementScreen = () => {
  previousHitCell = [-1, -1];
  window.addEventListener('mouseup', resetShipPlacementDragData);
  window.addEventListener('resize', resizePlacementCells);
  const game = document.querySelector('.game');
  const placementInfo = document.createElement('div');
  placementInfo.classList.add('placement', 'info');

  const p1 = document.createElement('p');
  p1.textContent = currentPlayer.name;

  const p2 = document.createElement('p');
  p2.textContent = 'Arrange your fleet on the battlefield!';

  const p3 = document.createElement('p');
  p3.textContent = 'Ships available:';

  const shipsContainer = document.createElement('div');
  shipsContainer.classList.add('ships');

  shipsData.forEach((shipData) => {
    const container = document.createElement('div');
    container.classList.add('container', 'unplaced');
    container.dataset.ship = shipData.type;
    container.dataset.length = shipData.length;
    container.addEventListener('click', placeShipOnPlacementBoard, { once: true });

    for (let i = 1; i <= shipData.length; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');

      if (i === shipData.length) {
        const spriteContainer = document.createElement('div');
        spriteContainer.classList.add('sprite-container');
        spriteContainer.classList.add('horizontal');

        const shipSprite = document.createElement('img');
        shipSprite.src = shipData.src;
        shipSprite.classList.add('sprite');
        shipSprite.draggable = false;

        spriteContainer.appendChild(shipSprite);
        cell.appendChild(spriteContainer);
        cell.classList.add('bow');
      }
      container.appendChild(cell);
    }
    shipsContainer.appendChild(container);
  });

  placementInfo.appendChild(p1);
  placementInfo.appendChild(p2);
  placementInfo.appendChild(p3);
  placementInfo.appendChild(shipsContainer);
  game.appendChild(placementInfo);

  const boards = document.querySelector('.boards');
  boards.classList.add('placement');

  const board = document.createElement('div');
  board.classList.add('board');

  for (let i = 9; i >= 0; i -= 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.x = j;
      cell.dataset.y = i;
      cell.dataset.playerName = currentPlayer.name;
      cell.addEventListener('mouseenter', moveDraggedShipOnPlacementBoard);
      cell.addEventListener('pointerenter', moveDraggedShipOnPlacementBoard);
      board.appendChild(cell);
    }
  }
  boards.appendChild(board);

  const placementButtons = document.createElement('div');
  placementButtons.classList.add('placement', 'buttons');

  const resetButton = document.createElement('button');
  resetButton.classList.add('button');
  resetButton.textContent = 'Reset';
  resetButton.addEventListener('click', resetPlacementBoard);

  const confirmButton = document.createElement('button');
  confirmButton.classList.add('button', 'disabled');
  confirmButton.textContent = 'Confirm';
  confirmButton.id = 'placementConfirmBtn';

  placementButtons.appendChild(resetButton);
  placementButtons.appendChild(confirmButton);
  game.appendChild(placementButtons);

  resizeSprites();
  resizePlacementCells();
};

const clearGameContainer = () => {
  const game = document.querySelector('.game');
  while (game.firstChild) {
    game.removeChild(game.firstChild);
  }
};

const initializeGameContainer = () => {
  const game = document.querySelector('.game');

  const settingsBtnContainer = document.createElement('div');
  settingsBtnContainer.classList.add('settings-btn-container', 'max-width');

  const settingsBtn = document.createElement('button');
  settingsBtn.classList.add('settings-btn');
  settingsBtn.addEventListener('click', clickPauseMenu);

  const settingsBtnSVG = document.createElement('svg');

  const boards = document.createElement('div');
  boards.classList.add('boards', 'max-width');

  settingsBtn.appendChild(settingsBtnSVG);
  settingsBtnContainer.appendChild(settingsBtn);
  game.appendChild(settingsBtnContainer);
  game.appendChild(boards);

  settingsBtnSVG.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cog</title><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg>';
};

const printPreviousPlayerAttack = async () => {
  const [x, y] = previousHitCell;
  const currentPlayerHitCell = document.querySelector(`.board.current .cell[data-x="${x}"][data-y="${y}"]`);
  if (!currentPlayerHitCell) return;
  if (currentPlayer.board.getBoard()[x][y].ship) {
    const currentShip = currentPlayer.board.getBoard()[x][y].ship;
    if (currentShip.hasSunk) {
      printSinkingSprite(currentShip);
    }
  }
  await hitExplosionEffect(currentPlayerHitCell);
  if (currentPlayer.board.getBoard()[x][y].ship) {
    currentPlayerHitCell.classList.add('hit');
    if (currentPlayerHitCell.dataset.ship) addFireEffect(currentPlayerHitCell);
  } else {
    currentPlayerHitCell.classList.add('miss');
    addMissMark(currentPlayerHitCell);
  }
};

const initializeBoard = async () => {
  window.addEventListener('resize', resizeSprites);
  [currentPlayer, targetPlayer].forEach(async (player) => {
    const boards = document.querySelector('.boards');
    const board = document.createElement('div');
    board.classList.add('board');
    if (player === currentPlayer) board.classList.add('current');
    if (player === targetPlayer) board.classList.add('target');

    for (let y = 9; y >= 0; y -= 1) {
      for (let x = 0; x < 10; x += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.x = x;
        cell.dataset.y = y;
        cell.dataset.playerName = player.name;
        cell.dataset.ship = player.board.getBoard()[x][y].ship
          ? player.board.getBoard()[x][y].ship.type
          : '';
        if (
          player === targetPlayer
          && currentPlayer instanceof _player_player__WEBPACK_IMPORTED_MODULE_3__["default"]
          && !(currentPlayer instanceof _player_ai__WEBPACK_IMPORTED_MODULE_2__["default"])
        ) cell.addEventListener('click', hitCellPlayer);

        const [prevX, prevY] = previousHitCell;
        if (player.board.getBoard()[x][y].ship && player.board.getBoard()[x][y].ship.hasSunk) cell.classList.add('sunk');

        if (!((prevX === x && prevY === y) && (player === currentPlayer))) {
          if (player.board.getBoard()[x][y].isHit && player.board.getBoard()[x][y].ship) {
            cell.classList.add('hit');
            if (!player.board.getBoard()[x][y].ship.hasSunk) addFireEffect(cell);
          } else if (player.board.getBoard()[x][y].isHit && !player.board.getBoard()[x][y].ship) {
            cell.classList.add('miss');
            addMissMark(cell);
          }
        }

        board.appendChild(cell);
      }
    }
    boards.appendChild(board);
  });
  printSprites();
  if (_game__WEBPACK_IMPORTED_MODULE_1__.players.every((player) => !(player instanceof _player_ai__WEBPACK_IMPORTED_MODULE_2__["default"]))) {
    updatePlayersHPOnTurnStart();
    const [prevX, prevY] = previousHitCell;
    if (prevX !== -1 && prevY !== -1) {
      if (currentPlayer.board.getBoard()[prevX][prevY].ship) animateCurrentPlayerHPHitOnTurnStart();
    }
    setTimeout(() => {
      printPreviousPlayerAttack();
    }, 500);
  }
};

const hidePlayerHP = () => {
  const playersHP = document.querySelectorAll('.player-info');
  playersHP.forEach((playerHP) => playerHP.classList.add('visibility-hidden'));
};

const unhidePlayerHP = () => {
  const game = document.querySelector('.game');
  const playersHP = document.querySelectorAll('.player-info');
  game.addEventListener('animationend', () => {
    playersHP.forEach((playerHP) => playerHP.classList.remove('visibility-hidden'));
  }, { once: true });
};

const initalizePlayerHPValues = () => {
  document.documentElement.style.setProperty('--current-health', '100%');
  document.documentElement.style.setProperty('--current-hit', '0%');
  document.documentElement.style.setProperty('--current-empty', '0%');
  document.documentElement.style.setProperty('--enemy-health', '100%');
  document.documentElement.style.setProperty('--enemy-hit', '0%');
  document.documentElement.style.setProperty('--enemy-empty', '0%');
};

const animateCurrentPlayerHPHitOnTurnStart = async () => {
  const totalHP = currentPlayer
    .board
    .fleet
    .reduce((total, ship) => total + ship.length, 0);
  const currentHP = currentPlayer
    .board
    .fleet
    .reduce((total, ship) => total - ship.hits, totalHP);
  const health = `${Math.round((currentHP / totalHP) * 100)}%`;
  const hit = `${Math.round((1 / totalHP) * 100)}%`;
  const empty = `${Math.round((1 - currentHP / totalHP) * 100)}%`;

  const playerHealthText = document.querySelector('.current .health > .text ');

  await new Promise((resolve) => {
    const initHealth = `${Math.round(((currentHP + 1) / totalHP) * 100)}%`;
    const initEmpty = `${Math.round((1 - (currentHP + 1) / totalHP) * 100)}%`;
    document.documentElement.style.setProperty('--current-health', initHealth);
    document.documentElement.style.setProperty('--current-empty', initEmpty);
    playerHealthText.textContent = `${currentHP + 1}/${totalHP}`;
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  playerHealthText.textContent = `${currentHP}/${totalHP}`;

  document.documentElement.style.setProperty('--current-health', health);
  document.documentElement.style.setProperty('--current-hit', hit);

  const playerHealthBar = document.querySelector('.current .health > .bar ');
  playerHealthBar.addEventListener('transitionend', () => {
    document.documentElement.style.setProperty('--current-hit', '0%');
    document.documentElement.style.setProperty('--current-empty', empty);
  }, { once: true });
};

const updatePlayersHPOnTurnStart = async () => {
  _game__WEBPACK_IMPORTED_MODULE_1__.players.forEach((player) => {
    const tag = currentPlayer === player
      ? 'current'
      : 'enemy';
    const totalHP = player
      .board
      .fleet
      .reduce((total, ship) => total + ship.length, 0);
    const currentHP = player
      .board
      .fleet
      .reduce((total, ship) => total - ship.hits, totalHP);
    const health = `${Math.round((currentHP / totalHP) * 100)}%`;
    const empty = `${Math.round((1 - currentHP / totalHP) * 100)}%`;

    const playerHealthText = document.querySelector(`.${tag} .health > .text `);
    playerHealthText.textContent = `${currentHP}/${totalHP}`;

    document.documentElement.style.setProperty(`--${tag}-health`, health);
    document.documentElement.style.setProperty(`--${tag}-hit`, '0%');
    document.documentElement.style.setProperty(`--${tag}-empty`, empty);
  });
};

const initializePlayerHP = () => {
  const game = document.querySelector('.game');
  _game__WEBPACK_IMPORTED_MODULE_1__.players.forEach((player) => {
    const tag = currentPlayer === player ? 'current' : 'enemy';

    const playerInfo = document.createElement('div');
    playerInfo.classList.add(tag, 'player-info');

    const p1 = document.createElement('p');
    p1.textContent = tag === 'current' ? 'Allied fleet' : 'Enemy fleet';

    const health = document.createElement('div');
    health.classList.add('health');

    const totalHP = player
      .board
      .fleet
      .reduce((total, ship) => total + ship.length, 0);
    const text = document.createElement('p');
    text.classList.add('text');
    text.textContent = `${totalHP}/${totalHP}`;

    const bar = document.createElement('div');
    bar.classList.add('bar');

    const hit = document.createElement('div');
    hit.classList.add('hit');

    const empty = document.createElement('div');
    empty.classList.add('empty');

    const p2 = document.createElement('p');
    p2.textContent = player.name;

    health.appendChild(text);
    health.appendChild(bar);
    health.appendChild(hit);
    health.appendChild(empty);
    playerInfo.appendChild(p1);
    playerInfo.appendChild(health);
    playerInfo.appendChild(p2);
    game.appendChild(playerInfo);
  });
};

const initializeGame = () => {
  initializeGameContainer();
  initializePlayerHP();
  initializeBoard();
};

const clearMainMenu = () => {
  const mainMenu = document.querySelector('.main-menu');

  return new Promise((resolve) => {
    mainMenu.classList.add('click-sink');
    mainMenu.addEventListener('animationend', () => {
      mainMenu.remove();
      resolve();
    }, { once: true });
  });
};

const startGamePlayer = async (e) => {
  e.preventDefault();
  const player1Name = document.querySelector('#player1NameInput').value
    ? document.querySelector('#player1NameInput').value
    : 'Player 1';
  const player2Name = document.querySelector('#player2NameInput').value
    ? document.querySelector('#player2NameInput').value
    : 'Player 2';

  (0,_game__WEBPACK_IMPORTED_MODULE_1__.generatePlayers)(
    [
      {
        type: 'human',
        name: player1Name,
      },
      {
        type: 'human',
        name: player2Name,
      },
    ],
  );

  [currentPlayer, targetPlayer] = _game__WEBPACK_IMPORTED_MODULE_1__.players;

  await clearMainMenu();
  initializeGameContainer();
  initializeShipPlacementScreen();
};

const startGameAI = async (e) => {
  e.preventDefault();
  const playerName = document.querySelector('#player1NameInput').value
    ? document.querySelector('#player1NameInput').value
    : 'Player 1';
  const AILevel = document.querySelector('.main-menu form .button.AI.toggled').dataset.level;

  (0,_game__WEBPACK_IMPORTED_MODULE_1__.generatePlayers)(
    [
      {
        type: 'human',
        name: playerName,
      },
      {
        type: 'AI',
        difficulty: AILevel,
      },
    ],
  );

  [currentPlayer, targetPlayer] = _game__WEBPACK_IMPORTED_MODULE_1__.players;

  await clearMainMenu();
  initializeGameContainer();
  initializeShipPlacementScreen();
};

const clearMainMenuButtons = () => {
  const buttonsContainer = document.querySelector('.main-menu .buttons');

  return new Promise((resolve) => {
    buttonsContainer.classList.add('click-sink');
    buttonsContainer.addEventListener('animationend', () => {
      buttonsContainer.classList.remove('click-sink');
      while (buttonsContainer.firstChild) {
        buttonsContainer.removeChild(buttonsContainer.firstChild);
        resolve();
      }
    }, { once: true });
  });
};

const showVersusPlayer = async () => {
  await clearMainMenuButtons();

  const buttonsContainer = document.querySelector('.main-menu .buttons');

  const form = document.createElement('form');

  const ul = document.createElement('ul');

  const li1 = document.createElement('li');

  const label1 = document.createElement('label');
  label1.classList.add('label');
  label1.htmlFor = 'player1NameInput';
  label1.textContent = 'Player 1:';

  const input1 = document.createElement('input');
  input1.id = 'player1NameInput';
  input1.type = 'text';
  input1.placeholder = 'Name';
  input1.maxLength = 16;

  const li2 = document.createElement('li');

  const label2 = document.createElement('label');
  label2.classList.add('label');
  label2.htmlFor = 'player2NameInput';
  label2.textContent = 'Player 2:';

  const input2 = document.createElement('input');
  input2.id = 'player2NameInput';
  input2.type = 'text';
  input2.placeholder = 'Name';
  input2.maxLength = 16;

  const li3 = document.createElement('li');

  const btnStart = document.createElement('button');
  btnStart.classList.add('button');
  btnStart.type = 'submit';
  btnStart.textContent = 'Start Game';
  btnStart.addEventListener('click', startGamePlayer);

  const btnBack = document.createElement('button');
  btnBack.classList.add('button');
  btnBack.textContent = 'Back';
  btnBack.addEventListener('click', showVersusOptions);

  li1.appendChild(label1);
  li1.appendChild(input1);
  li2.appendChild(label2);
  li2.appendChild(input2);
  li3.appendChild(btnStart);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  form.appendChild(ul);
  buttonsContainer.appendChild(form);
  buttonsContainer.appendChild(btnBack);
};

const toggleAIDifficulty = (e) => {
  const currentToggledButton = document.querySelector('.main-menu form .button.AI.toggled');
  const clickedButton = e.currentTarget;

  currentToggledButton.classList.remove('toggled');
  clickedButton.classList.add('toggled');
};

const showVersusAI = async () => {
  await clearMainMenuButtons();

  const buttonsContainer = document.querySelector('.main-menu .buttons');

  const form = document.createElement('form');

  const ul = document.createElement('ul');

  const li1 = document.createElement('li');

  const label = document.createElement('label');
  label.classList.add('label');
  label.htmlFor = 'player1NameInput';
  label.textContent = 'Player 1:';

  const input = document.createElement('input');
  input.id = 'player1NameInput';
  input.type = 'text';
  input.placeholder = 'Name';
  input.maxLength = 16;

  const li2 = document.createElement('li');

  const p = document.createElement('p');
  p.classList.add('label');
  p.textContent = 'AI Level:';

  const btnEasy = document.createElement('button');
  btnEasy.classList.add('button', 'AI', 'toggled');
  btnEasy.type = 'button';
  btnEasy.textContent = 'Easy';
  btnEasy.dataset.level = 'Easy';
  btnEasy.addEventListener('click', toggleAIDifficulty);

  const btnNormal = document.createElement('button');
  btnNormal.classList.add('button', 'AI');
  btnNormal.type = 'button';
  btnNormal.textContent = 'Normal';
  btnNormal.dataset.level = 'Normal';
  btnNormal.addEventListener('click', toggleAIDifficulty);

  const btnCheat = document.createElement('button');
  btnCheat.classList.add('button', 'AI');
  btnCheat.type = 'button';
  btnCheat.textContent = 'Cheat';
  btnCheat.dataset.level = 'Cheat';
  btnCheat.addEventListener('click', toggleAIDifficulty);

  const li3 = document.createElement('li');

  const btnStart = document.createElement('button');
  btnStart.classList.add('button');
  btnStart.type = 'submit';
  btnStart.textContent = 'Start Game';
  btnStart.addEventListener('click', startGameAI);

  const btnBack = document.createElement('button');
  btnBack.classList.add('button');
  btnBack.textContent = 'Back';
  btnBack.addEventListener('click', showVersusOptions);

  li1.appendChild(label);
  li1.appendChild(input);
  li2.appendChild(p);
  li2.appendChild(btnEasy);
  li2.appendChild(btnNormal);
  li2.appendChild(btnCheat);
  li3.appendChild(btnStart);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  form.appendChild(ul);
  buttonsContainer.appendChild(form);
  buttonsContainer.appendChild(btnBack);
};

const showVersusOptions = async () => {
  await clearMainMenuButtons();

  const buttonsContainer = document.querySelector('.main-menu .buttons');

  const versusPlayerBtn = document.createElement('button');
  versusPlayerBtn.classList.add('button');
  versusPlayerBtn.textContent = 'Versus Player';
  versusPlayerBtn.addEventListener('click', showVersusPlayer);

  const versusAIBtn = document.createElement('button');
  versusAIBtn.classList.add('button');
  versusAIBtn.textContent = 'Versus AI';
  versusAIBtn.addEventListener('click', showVersusAI);

  buttonsContainer.appendChild(versusPlayerBtn);
  buttonsContainer.appendChild(versusAIBtn);
};

const initializeMainMenu = () => {
  window.removeEventListener('resize', resizeSprites);
  window.removeEventListener('mouseup', resetShipPlacementDragData);
  window.removeEventListener('resize', resizePlacementCells);
  const siteContainer = document.querySelector('.site-container');

  const mainMenu = document.createElement('div');
  mainMenu.classList.add('main-menu');

  const title = document.createElement('h1');
  title.textContent = 'Battleship';

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons');

  const playGameBtn = document.createElement('button');
  playGameBtn.classList.add('button');
  playGameBtn.textContent = 'Play Game';
  playGameBtn.addEventListener('click', showVersusOptions);

  const copyright = document.createElement('p');
  copyright.classList.add('copyright');

  const github = document.createElement('a');
  github.href = 'https://github.com/rintheo/';

  const githubSVG = document.createElement('svg');

  const year = (new Date()).getFullYear();
  const span = document.createElement('span');
  span.textContent = ` © ${year} rintheo`;

  github.appendChild(githubSVG);
  copyright.appendChild(github);
  copyright.appendChild(span);
  buttonsContainer.append(playGameBtn);
  mainMenu.appendChild(title);
  mainMenu.appendChild(buttonsContainer);
  mainMenu.appendChild(copyright);
  siteContainer.appendChild(mainMenu);

  githubSVG.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>github</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>';
};

initializeMainMenu();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlckRPTS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxpSEFBcUM7QUFDakYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSEFBc0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxxQ0FBcUM7QUFDdk4seUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sT0FBTyxPQUFPLEtBQUssTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxLQUFLLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxzR0FBc0csTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0s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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixNQUFNOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9jZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3BsYXllci9haS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyRE9NLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9vY2Vhbi5naWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZmFtaWx5PVJ1YmlrK0lzbyZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gLS1jdXJyZW50LWhlYWx0aDogMTAwJTtcbiAtLWN1cnJlbnQtaGl0OiAwJTtcbiAtLWN1cnJlbnQtZW1wdHk6IDAlO1xuIC0tZW5lbXktaGVhbHRoOiAxMDAlO1xuIC0tZW5lbXktaGl0OiAwJTtcbiAtLWVuZW15LWVtcHR5OiAwJTtcbiAtLWV4cGxvc2lvbi1zY2FsZTogMTtcbiAtLXNwcml0ZS1zY2FsZTogMC4zNTtcbiAtLXBsYWNlbWVudC1jZWxsLXdpZHRoOiA0OHB4O1xufVxuXG4qLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwsIGJvZHksXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBcbnAsIHVsLCBvbCwgbGksIGJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxudWwsIG9sLCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59IFxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubWF4LXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTI4MHB4O1xufVxuXG4uc2V0dGluZ3MtYnRuLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIHotaW5kZXg6IDk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNldHRpbmdzLWJ0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgZmlsbDogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7ICBcbiAgdHJhbnNpdGlvbjogXG4gICAgdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0IDBzLFxuICAgIGZpbGwgMC4yNXMgZWFzZS1pbi1vdXQgMHM7XG59IFxuXG4uc2V0dGluZ3MtYnRuOmhvdmVyIHtcbiAgZmlsbDogaHNsKDAsIDAlLCA5MCUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5zZXR0aW5ncy1idG46YWN0aXZlIHtcbiAgZmlsbDogaHNsKDAsIDAlLCA4MCUpO1xufVxuXG4uZ2FtZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJvYXJkcyB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICBncmlkLWF1dG8tcm93czogMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLmJvYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbn1cblxuLnBsYWNlbWVudCAuYm9hcmQge1xuICBtYXJnaW4tdG9wOiAxMnJlbTtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xufVxuXG4ucGxhY2VtZW50LmluZm8ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2NDBweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFuaW1hdGlvbjogdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbn1cblxuLnBsYWNlbWVudC5pbmZvIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgYW5pbWF0aW9uOiBidXR0b24taWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ucGxhY2VtZW50LmluZm8gcDpudGgtY2hpbGQoMSkge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5wbGFjZW1lbnQuaW5mbyBwOm50aC1jaGlsZCgzKSB7XG4gIG1hcmdpbjogMS41cmVtIDAgO1xufVxuXG4ucGxhY2VtZW50LmluZm8gLnNoaXBzIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDFyZW0gdmFyKC0tcGxhY2VtZW50LWNlbGwtd2lkdGgpO1xuXG59XG5cbi5wbGFjZW1lbnQuaW5mbyAuc2hpcHMgLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IHZhcigtLXBsYWNlbWVudC1jZWxsLXdpZHRoKTtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBsYWNlbWVudCAuc3ByaXRle1xuICB0cmFuc2l0aW9uOiAwLjFzO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogbWFrZSBzcHJpdGUgc3R5bGUgY29tbW9uICovXG5cbi5wbGFjZW1lbnQgLmNlbGwuaG92ZXIgLnNwcml0ZSxcbi5wbGFjZW1lbnQgLmNvbnRhaW5lci51bnBsYWNlZDpob3ZlciAuc3ByaXRlIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgc2VwaWEoMTAwJSkgYnJpZ2h0bmVzcygwLjc1KSBodWUtcm90YXRlKDYwZGVnKTtcbn1cblxuLnBsYWNlbWVudCAuY2VsbC5ob3Zlci5jbGlja2VkIC5zcHJpdGUsXG4ucGxhY2VtZW50IC5jb250YWluZXIudW5wbGFjZWQ6YWN0aXZlIC5zcHJpdGV7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIHNlcGlhKDEwMCUpIGJyaWdodG5lc3MoMSkgaHVlLXJvdGF0ZSg2MGRlZyk7XG59XG5cbi5wbGFjZW1lbnQgLmNlbGwge1xuICB0cmFuc2l0aW9uOiAwLjFzO1xufVxuXG4ucGxhY2VtZW50IC5jZWxsLmJvdyB7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5wbGFjZW1lbnQgLmNlbGwuaG92ZXIsXG4ucGxhY2VtZW50IC5jb250YWluZXIudW5wbGFjZWQ6aG92ZXIgLmNlbGx7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjI1KTtcbn1cblxuLnBsYWNlbWVudCAuY2VsbC5ob3Zlci5jbGlja2VkLFxuLnBsYWNlbWVudCAuY29udGFpbmVyLnVucGxhY2VkOmFjdGl2ZSAuY2VsbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDI1NSwgMTU1LCAwLjI1KTtcbn1cblxuLmJvYXJkcy5wbGFjZW1lbnQgLmJvYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcbn1cblxuLmN1cnJlbnQuYm9hcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xufVxuXG4udGFyZ2V0LmJvYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcbn1cblxuLmNlbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImFcIjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQgMHM7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY2VsbC5zaGlwLWJvdyB7XG4gIHotaW5kZXg6IDFcbn1cblxuLmNlbGwubWlzcyBzdmcge1xuICBmaWxsOiByZ2JhKDI1NSwgMCwgMCwgMC4yNSk7XG59XG5cbi5ib2FyZHMucGxhY2VtZW50IC5jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcbn1cblxuLmN1cnJlbnQgPiAuY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG59XG5cbi50YXJnZXQgPiAuY2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XG59XG5cbi50YXJnZXQgPiAuY2VsbDpub3QoLm1pc3MsIC5oaXQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMjUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXJnZXQgPiAuY2VsbC5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yNSk7XG59XG5cbi50YXJnZXQgPiAuY2VsbC5zdW5rLFxuLnRhcmdldCA+IC5jZWxsLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnNwcml0ZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWFyZWE6IGE7XG59XG5cbi5zcHJpdGUtY29udGFpbmVyLmhvcml6b250YWwge1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uc3ByaXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpO1xuICBhbmltYXRpb246IHNoaXAtaWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGU7XG59XG5cbi5ob3Jpem9udGFsIC5zcHJpdGUge1xuICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpIHJvdGF0ZSg5MGRlZyk7XG4gIGFuaW1hdGlvbjogc2hpcC1pZGxlLWhvcml6b250YWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xufVxuXG4uY2VsbC5zdW5rIC5zcHJpdGUge1xuICBhbmltYXRpb246IFxuICAgIHNoaXAtc2luayAxMHMgbGluZWFyIDBzIDEgZm9yd2FyZHMgbm9ybWFsLFxuICAgIHNoaXAtc2hha2luZyAwLjVzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZTtcbn1cblxuLmNlbGwuc3VuayAuaG9yaXpvbnRhbCAuc3ByaXRlIHtcbiAgYW5pbWF0aW9uOiBcbiAgICBzaGlwLXNpbmsgMTBzIGxpbmVhciAwcyAxIGZvcndhcmRzIG5vcm1hbCxcbiAgICBzaGlwLXNoYWtpbmctaG9yaXpvbnRhbCAwLjVzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZTtcbn1cblxuLmZpcmUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBncmlkLWFyZWE6IGE7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5maXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xufVxuXG4uY2VsbC5zdW5rIC5maXJlIHtcbiAgYW5pbWF0aW9uOiBmYWRlLW91dCAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbn1cblxuLmV4cGxvc2lvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNSU7XG4gIGxlZnQ6IDQ1JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZ3JpZC1hcmVhOiBhO1xuICB6LWluZGV4OiAyOyAgXG59XG5cbi5leHBsb3Npb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLWV4cGxvc2lvbi1zY2FsZSkpO1xufVxuXG4uYmxvY2tlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5wbGF5ZXItaW5mbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogNTA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBhbmltYXRpb246IHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG59XG5cbi5jdXJyZW50LnBsYXllci1pbmZvIHtcbiAgdG9wOiAxcmVtO1xufVxuXG4uZW5lbXkucGxheWVyLWluZm8ge1xuICBib3R0b206IDFyZW07XG59XG5cbi5wbGF5ZXItaW5mbyBwIHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5wbGF5ZXItaW5mbyBwOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5wbGF5ZXItaW5mbyBwOmxhc3QtY2hpbGQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhlYWx0aCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDgsIDIwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFsdGggPiAudGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcbn1cblxuLmhlYWx0aCA+IC5iYXIsXG4uaGVhbHRoID4gLmhpdCxcbi5oZWFsdGggPiAuZW1wdHkge1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXMgZWFzZS1pbi1vdXQgMHM7XG59XG5cbi5jdXJyZW50IC5oZWFsdGggPiAuYmFyIHtcbiAgd2lkdGg6IHZhcigtLWN1cnJlbnQtaGVhbHRoKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMDAsIDAsIDEpO1xufVxuXG4uY3VycmVudCAuaGVhbHRoID4gLmhpdCB7XG4gIHdpZHRoOiB2YXIoLS1jdXJyZW50LWhpdCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjAwLCAwLCAwLjUpO1xufVxuXG4uY3VycmVudCAuaGVhbHRoID4gLmVtcHR5IHtcbiAgd2lkdGg6IHZhcigtLWN1cnJlbnQtZW1wdHkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4uZW5lbXkgLmhlYWx0aCA+IC5iYXIge1xuICB3aWR0aDogdmFyKC0tZW5lbXktaGVhbHRoKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDAsIDAsIDEpO1xufVxuXG4uZW5lbXkgLmhlYWx0aCA+IC5oaXQge1xuICB3aWR0aDogdmFyKC0tZW5lbXktaGl0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDAsIDAsIDAuNSk7XG59XG5cbi5lbmVteSAuaGVhbHRoID4gLmVtcHR5IHtcbiAgd2lkdGg6IHZhcigtLWVuZW15LWVtcHR5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLnNpdGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4ubWFpbi1tZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFpbi1tZW51ID4gaDEge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnUnViaWsgSXNvJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiA2cmVtO1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYW5pbWF0aW9uOiBcbiAgICB0aXRsZS1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZSxcbiAgICB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm1haW4tbWVudSAuYnV0dG9ucyB7XG4gIGhlaWdodDogMTVyZW07XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ2FtZS5jbGljay1zaW5rLFxuLm1haW4tbWVudS5jbGljay1zaW5rLFxuLm1haW4tbWVudSAuYnV0dG9ucy5jbGljay1zaW5rIHtcbiAgYW5pbWF0aW9uOlxuICAgIHRpdGxlLXNpbmsgMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG59XG5cbi5wbGFjZW1lbnQuYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDY0MHB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbn1cblxuLnBsYWNlbWVudC5idXR0b25zIC5idXR0b24sXG4ubWFpbi1tZW51IC5idXR0b24ge1xuICB3aWR0aDogMTVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xuICBhbmltYXRpb246IFxuICAgIGJ1dHRvbi1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZSxcbiAgICB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnBsYWNlbWVudC5idXR0b25zIC5idXR0b24ge1xuICBmb250LXNpemU6IDEuNzVyZW07XG59XG5cbi5wbGFjZW1lbnQuYnV0dG9ucyAuYnV0dG9uLmRpc2FibGVkIHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5wbGFjZW1lbnQuYnV0dG9ucyAuYnV0dG9uOm5vdCguZGlzYWJsZWQpOmhvdmVyLFxuLm1haW4tbWVudSAuYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgOTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbn1cblxuLnBsYWNlbWVudC5idXR0b25zIC5idXR0b246bm90KC5kaXNhYmxlZCk6YWN0aXZlLFxuLm1haW4tbWVudSAuYnV0dG9uOmFjdGl2ZSB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDgwJSk7XG59XG5cbi5tYWluLW1lbnUgZm9ybSBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2cmVtO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4ubWFpbi1tZW51IGZvcm0gbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xufVxuXG4ubWFpbi1tZW51IGZvcm0gbGkgLmxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBhbmltYXRpb246IFxuICAgIGJ1dHRvbi1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZSxcbiAgICB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xufVxuXG4ubWFpbi1tZW51IGZvcm0gbGkgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IDJweCBncm9vdmUgIzdmOGM4ZDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGFuaW1hdGlvbjogXG4gICAgYnV0dG9uLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlLFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG59XG5cbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZjhjOGQ7XG4gIGJvcmRlcjogMnB4IG91dHNldCAjN2Y4YzhkO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSS50b2dnbGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDYlLCA0NSUpOyAgIFxuICBib3JkZXI6IDJweCBpbnNldCBoc2woMCwgNiUsIDQ1JSk7ICAgXG59XG5cbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJLnRvZ2dsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg0LCA2JSwgNTAlKTsgICBcbiAgYm9yZGVyOiAycHggaW5zZXQgaHNsKDE4NCwgNiUsIDUwJSk7ICAgXG59XG5cbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJLnRvZ2dsZWQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NCwgNiUsIDQ3JSk7XG59XG5cbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NCwgNiUsIDUwJSk7ICAgXG59XG5cbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA0NyUpOyAgIFxuICBib3JkZXI6IDJweCBpbnNldCBoc2woMTg0LCA2JSwgNDclKTsgIFxufVxuXG4uY29weXJpZ2h0IHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYW5pbWF0aW9uOiBcbiAgICB0aXRsZS1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZSxcbiAgICB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcbn1cblxuLmNvcHlyaWdodCBzdmcge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBmaWxsOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxLjhyZW07XG4gIHRyYW5zaXRpb246IFxuICAgIHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dCAwcyxcbiAgICBmaWxsIDAuMjVzIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4uY29weXJpZ2h0IHN2Zzpob3ZlciB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDgwJSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4xKTtcbn1cblxuLmNvcHlyaWdodCBzdmc6YWN0aXZlIHtcbiAgZmlsbDogaHNsKDAsIDAlLCA3MCUpO1xufVxuXG4uZGlhbG9nLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC4yNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5kaWFsb2cge1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDFyZW07XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NCwgNjIsIDgwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IDJweCByaWRnZSAjOTVhNWE2O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5kaWFsb2cgLnRleHQge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5kaWFsb2cgLm1haW4udGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmRpYWxvZyAuYnV0dG9uIHtcbiAgd2lkdGg6IDEwcmVtO1xuICBtYXJnaW46IDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmOGM4ZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBvdXRzZXQgIzdmOGM4ZDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5kaWFsb2cgLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA1NiUpO1xufVxuXG4uZGlhbG9nIC5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NCwgNiUsIDU5JSk7XG59XG5cbi5kaWFsb2cgLnBsYXkuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3YWU2MDtcbiAgYm9yZGVyOiAxcHggb3V0c2V0ICMyN2FlNjA7XG59XG5cbi5kaWFsb2cgLnBsYXkuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgxNDUsIDYzJSwgNDUlKTtcbn1cblxuLmRpYWxvZyAucGxheS5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgxNDUsIDYzJSwgNDglKTtcbn1cblxuLmRpYWxvZyAubWVudS5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiO1xuICBib3JkZXI6IDFweCBvdXRzZXQgI2MwMzkyYjtcbn1cblxuLmRpYWxvZyAubWVudTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg2LCA2MyUsIDQ5JSk7XG59XG5cbi5kaWFsb2cgLm1lbnU6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDYsIDYzJSwgNTIlKTtcbn1cblxuLmZhZGUtb3V0IHtcbiAgYW5pbWF0aW9uOiBmYWRlLW91dCAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbn1cblxuLmxvc2UtZm9jdXMge1xuICBhbmltYXRpb246IGxvc2UtZm9jdXMgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG59XG5cbi5yZXR1cm4tZm9jdXMge1xuICBhbmltYXRpb246IHJldHVybi1mb2N1cyAwLjEyNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG59XG5cbi52aXNpYmlsaXR5LWhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0NnB4KSB7XG4gIC5ib2FyZHM6bm90KC5wbGFjZW1lbnQpIHtcbiAgICBwYWRkaW5nOiAxMHJlbSAwLjVyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYWluLW1lbnUgPiBoMSB7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAubWFpbi1tZW51ID4gaDEge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxuXG4gIC5wbGFjZW1lbnQuYnV0dG9ucyAuYnV0dG9uLFxuICAubWFpbi1tZW51IC5idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtXG4gIH1cblxuICAubWFpbi1tZW51IGZvcm0gbGkgLmxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cblxuICAubWFpbi1tZW51IGZvcm0gbGkgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJIHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gIH0gIFxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLm1haW4tbWVudSA+IGgxIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cblxuICAucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbixcbiAgLm1haW4tbWVudSAuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW1cbiAgfVxuXG4gIC5tYWluLW1lbnUgZm9ybSBsaSAubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxvc2UtZm9jdXMge1xuICAwJSB7XG4gICAgZmlsdGVyOiBibHVyKDApO1xuICB9XG4gIFxuICAxMDAlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJldHVybi1mb2N1cyB7XG4gIDAlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcbiAgfVxuICBcbiAgMTAwJSB7XG4gICAgZmlsdGVyOiBibHVyKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYnV0dG9uLWlkbGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHRpdGxlLWlkbGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTElLCAwLjI1JSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMCUsIC0wLjI1JSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB0aXRsZS1yaXNlIHtcbiAgMCUge1xuICAgIGZpbHRlcjogYmx1cigxMHB4KSBicmlnaHRuZXNzKDAuMjUpIG9wYWNpdHkoMC4yNSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDEpIG9wYWNpdHkoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB0aXRsZS1zaW5rIHtcbiAgMCUge1xuICAgIGZpbHRlcjogYmx1cigwcHgpIGJyaWdodG5lc3MoMSkgb3BhY2l0eSgxKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIGZpbHRlcjogYmx1cigxMHB4KSBicmlnaHRuZXNzKDAuMjUpIG9wYWNpdHkoMC4yNSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzaGlwLWlkbGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIuNSUsIDAuMjUlKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wJSwgLTAuMjUlKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNoaXAtaWRsZS1ob3Jpem9udGFsIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yLjUlLCAwLjI1JSkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSkgcm90YXRlKDkwZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wJSwgLTAuMjUlKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKSByb3RhdGUoOTBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hpcC1zaW5rIHtcbiAgMCUge1xuICAgIGZpbHRlcjogYmx1cigwcHgpIGJyaWdodG5lc3MoMSkgZ3JheXNjYWxlKDAlKSBvcGFjaXR5KDEpO1xuICB9XG5cbiAgMi41JSB7XG4gICAgZmlsdGVyOiBibHVyKDBweCkgYnJpZ2h0bmVzcygyKSBncmF5c2NhbGUoMCUpIG9wYWNpdHkoMSk7XG4gIH1cblxuICA1JSB7XG4gICAgZmlsdGVyOiBibHVyKDBweCkgYnJpZ2h0bmVzcygxKSBncmF5c2NhbGUoMCUpIG9wYWNpdHkoMSk7XG4gIH1cbiAgXG4gIDEwMCUge1xuICAgIGZpbHRlcjogYmx1cigyNXB4KSBicmlnaHRuZXNzKDAuNSkgZ3JheXNjYWxlKDEwMCUpIG9wYWNpdHkoMC4yNSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzaGlwLXNoYWtpbmcge1xuIDAlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAuNSUsIDApIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpO1xuIH1cblxuIDEwMCUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjUlLCAwKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKTtcbiB9XG59XG5cbkBrZXlmcmFtZXMgc2hpcC1zaGFraW5nLWhvcml6b250YWwge1xuICAwJSB7XG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMC4wNSUpIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpIHJvdGF0ZSg5MGRlZyk7XG4gIH1cbiBcbiAgMTAwJSB7XG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwLjA1JSkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSkgcm90YXRlKDkwZGVnKTtcbiAgfVxuIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsaUJBQWlC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O0lBQ0UsMENBQTBDO0VBQzVDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBDQUEwQztFQUM1Qzs7RUFFQTtJQUNFLGlEQUFpRDtFQUNuRDtBQUNGOztBQUVBO0VBQ0U7SUFDRSw2REFBNkQ7RUFDL0Q7O0VBRUE7SUFDRSw0REFBNEQ7RUFDOUQ7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMkVBQTJFO0VBQzdFOztFQUVBO0lBQ0UsMEVBQTBFO0VBQzVFO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdEQUF3RDtFQUMxRDs7RUFFQTtJQUNFLHdEQUF3RDtFQUMxRDs7RUFFQTtJQUNFLHdEQUF3RDtFQUMxRDs7RUFFQTtJQUNFLGdFQUFnRTtFQUNsRTtBQUNGOztBQUVBO0NBQ0M7RUFDQyx5REFBeUQ7Q0FDMUQ7O0NBRUE7RUFDQyx3REFBd0Q7Q0FDekQ7QUFDRDs7QUFFQTtFQUNFO0dBQ0Msd0VBQXdFO0VBQ3pFOztFQUVBO0dBQ0MsdUVBQXVFO0VBQ3hFO0NBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZmYW1pbHk9UnViaWsrSXNvJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gLS1jdXJyZW50LWhlYWx0aDogMTAwJTtcXG4gLS1jdXJyZW50LWhpdDogMCU7XFxuIC0tY3VycmVudC1lbXB0eTogMCU7XFxuIC0tZW5lbXktaGVhbHRoOiAxMDAlO1xcbiAtLWVuZW15LWhpdDogMCU7XFxuIC0tZW5lbXktZW1wdHk6IDAlO1xcbiAtLWV4cGxvc2lvbi1zY2FsZTogMTtcXG4gLS1zcHJpdGUtc2NhbGU6IDAuMzU7XFxuIC0tcGxhY2VtZW50LWNlbGwtd2lkdGg6IDQ4cHg7XFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsIGJvZHksXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgXFxucCwgdWwsIG9sLCBsaSwgYnV0dG9uIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbnVsLCBvbCwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59IFxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubWF4LXdpZHRoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XFxufVxcblxcbi5zZXR0aW5ncy1idG4tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICB6LWluZGV4OiA5OTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2V0dGluZ3MtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIGZpbGw6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7ICBcXG4gIHRyYW5zaXRpb246IFxcbiAgICB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQgMHMsXFxuICAgIGZpbGwgMC4yNXMgZWFzZS1pbi1vdXQgMHM7XFxufSBcXG5cXG4uc2V0dGluZ3MtYnRuOmhvdmVyIHtcXG4gIGZpbGw6IGhzbCgwLCAwJSwgOTAlKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLnNldHRpbmdzLWJ0bjphY3RpdmUge1xcbiAgZmlsbDogaHNsKDAsIDAlLCA4MCUpO1xcbn1cXG5cXG4uZ2FtZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvb2NlYW4uZ2lmJyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkcyB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5ib2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNzUwcHg7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbmltYXRpb246IHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxufVxcblxcbi5wbGFjZW1lbnQgLmJvYXJkIHtcXG4gIG1hcmdpbi10b3A6IDEycmVtO1xcbiAgbWF4LXdpZHRoOiA0ODBweDtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG59XFxuXFxuLnBsYWNlbWVudC5pbmZvIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA2NDBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYW5pbWF0aW9uOiB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbn1cXG5cXG4ucGxhY2VtZW50LmluZm8gcCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gIGFuaW1hdGlvbjogYnV0dG9uLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5wbGFjZW1lbnQuaW5mbyBwOm50aC1jaGlsZCgxKSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5wbGFjZW1lbnQuaW5mbyBwOm50aC1jaGlsZCgzKSB7XFxuICBtYXJnaW46IDEuNXJlbSAwIDtcXG59XFxuXFxuLnBsYWNlbWVudC5pbmZvIC5zaGlwcyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNDgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxcmVtIHZhcigtLXBsYWNlbWVudC1jZWxsLXdpZHRoKTtcXG5cXG59XFxuXFxuLnBsYWNlbWVudC5pbmZvIC5zaGlwcyAuY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IHZhcigtLXBsYWNlbWVudC1jZWxsLXdpZHRoKTtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxhY2VtZW50IC5zcHJpdGV7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi8qIG1ha2Ugc3ByaXRlIHN0eWxlIGNvbW1vbiAqL1xcblxcbi5wbGFjZW1lbnQgLmNlbGwuaG92ZXIgLnNwcml0ZSxcXG4ucGxhY2VtZW50IC5jb250YWluZXIudW5wbGFjZWQ6aG92ZXIgLnNwcml0ZSB7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBzZXBpYSgxMDAlKSBicmlnaHRuZXNzKDAuNzUpIGh1ZS1yb3RhdGUoNjBkZWcpO1xcbn1cXG5cXG4ucGxhY2VtZW50IC5jZWxsLmhvdmVyLmNsaWNrZWQgLnNwcml0ZSxcXG4ucGxhY2VtZW50IC5jb250YWluZXIudW5wbGFjZWQ6YWN0aXZlIC5zcHJpdGV7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBzZXBpYSgxMDAlKSBicmlnaHRuZXNzKDEpIGh1ZS1yb3RhdGUoNjBkZWcpO1xcbn1cXG5cXG4ucGxhY2VtZW50IC5jZWxsIHtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbi5wbGFjZW1lbnQgLmNlbGwuYm93IHtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5wbGFjZW1lbnQgLmNlbGwuaG92ZXIsXFxuLnBsYWNlbWVudCAuY29udGFpbmVyLnVucGxhY2VkOmhvdmVyIC5jZWxse1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMjUpO1xcbn1cXG5cXG4ucGxhY2VtZW50IC5jZWxsLmhvdmVyLmNsaWNrZWQsXFxuLnBsYWNlbWVudCAuY29udGFpbmVyLnVucGxhY2VkOmFjdGl2ZSAuY2VsbHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LCAyNTUsIDE1NSwgMC4yNSk7XFxufVxcblxcbi5ib2FyZHMucGxhY2VtZW50IC5ib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xcbn1cXG5cXG4uY3VycmVudC5ib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xcbn1cXG5cXG4udGFyZ2V0LmJvYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XFxufVxcblxcbi5jZWxsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYVxcXCI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0IDBzO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY2VsbC5zaGlwLWJvdyB7XFxuICB6LWluZGV4OiAxXFxufVxcblxcbi5jZWxsLm1pc3Mgc3ZnIHtcXG4gIGZpbGw6IHJnYmEoMjU1LCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuLmJvYXJkcy5wbGFjZW1lbnQgLmNlbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcXG59XFxuXFxuLmN1cnJlbnQgPiAuY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xcbn1cXG5cXG4udGFyZ2V0ID4gLmNlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjI1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XFxufVxcblxcbi50YXJnZXQgPiAuY2VsbDpub3QoLm1pc3MsIC5oaXQpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjI1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhcmdldCA+IC5jZWxsLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi50YXJnZXQgPiAuY2VsbC5zdW5rLFxcbi50YXJnZXQgPiAuY2VsbC5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc3ByaXRlLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IGE7XFxufVxcblxcbi5zcHJpdGUtY29udGFpbmVyLmhvcml6b250YWwge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zcHJpdGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSk7XFxuICBhbmltYXRpb246IHNoaXAtaWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGU7XFxufVxcblxcbi5ob3Jpem9udGFsIC5zcHJpdGUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKSByb3RhdGUoOTBkZWcpO1xcbiAgYW5pbWF0aW9uOiBzaGlwLWlkbGUtaG9yaXpvbnRhbCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGU7XFxufVxcblxcbi5jZWxsLnN1bmsgLnNwcml0ZSB7XFxuICBhbmltYXRpb246IFxcbiAgICBzaGlwLXNpbmsgMTBzIGxpbmVhciAwcyAxIGZvcndhcmRzIG5vcm1hbCxcXG4gICAgc2hpcC1zaGFraW5nIDAuNXMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xcbn1cXG5cXG4uY2VsbC5zdW5rIC5ob3Jpem9udGFsIC5zcHJpdGUge1xcbiAgYW5pbWF0aW9uOiBcXG4gICAgc2hpcC1zaW5rIDEwcyBsaW5lYXIgMHMgMSBmb3J3YXJkcyBub3JtYWwsXFxuICAgIHNoaXAtc2hha2luZy1ob3Jpem9udGFsIDAuNXMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xcbn1cXG5cXG4uZmlyZS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogYTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5maXJlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbn1cXG5cXG4uY2VsbC5zdW5rIC5maXJlIHtcXG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxufVxcblxcbi5leHBsb3Npb24tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNSU7XFxuICBsZWZ0OiA0NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiBhO1xcbiAgei1pbmRleDogMjsgIFxcbn1cXG5cXG4uZXhwbG9zaW9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1leHBsb3Npb24tc2NhbGUpKTtcXG59XFxuXFxuLmJsb2NrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICB6LWluZGV4OiA1O1xcbn1cXG5cXG4ucGxheWVyLWluZm8ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDMwcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogNTA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGFuaW1hdGlvbjogdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcXG59XFxuXFxuLmN1cnJlbnQucGxheWVyLWluZm8ge1xcbiAgdG9wOiAxcmVtO1xcbn1cXG5cXG4uZW5lbXkucGxheWVyLWluZm8ge1xcbiAgYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ucGxheWVyLWluZm8gcCB7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuLnBsYXllci1pbmZvIHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5wbGF5ZXItaW5mbyBwOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaGVhbHRoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCA4LCAyMCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWx0aCA+IC50ZXh0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xcbn1cXG5cXG4uaGVhbHRoID4gLmJhcixcXG4uaGVhbHRoID4gLmhpdCxcXG4uaGVhbHRoID4gLmVtcHR5IHtcXG4gIGhlaWdodDogMC41cmVtO1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXMgZWFzZS1pbi1vdXQgMHM7XFxufVxcblxcbi5jdXJyZW50IC5oZWFsdGggPiAuYmFyIHtcXG4gIHdpZHRoOiB2YXIoLS1jdXJyZW50LWhlYWx0aCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwMCwgMCwgMSk7XFxufVxcblxcbi5jdXJyZW50IC5oZWFsdGggPiAuaGl0IHtcXG4gIHdpZHRoOiB2YXIoLS1jdXJyZW50LWhpdCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwMCwgMCwgMC41KTtcXG59XFxuXFxuLmN1cnJlbnQgLmhlYWx0aCA+IC5lbXB0eSB7XFxuICB3aWR0aDogdmFyKC0tY3VycmVudC1lbXB0eSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG5cXG4uZW5lbXkgLmhlYWx0aCA+IC5iYXIge1xcbiAgd2lkdGg6IHZhcigtLWVuZW15LWhlYWx0aCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMCwgMCwgMSk7XFxufVxcblxcbi5lbmVteSAuaGVhbHRoID4gLmhpdCB7XFxuICB3aWR0aDogdmFyKC0tZW5lbXktaGl0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uZW5lbXkgLmhlYWx0aCA+IC5lbXB0eSB7XFxuICB3aWR0aDogdmFyKC0tZW5lbXktZW1wdHkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuLnNpdGUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLm1haW4tbWVudSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLW1lbnUgPiBoMSB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsgSXNvJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgYW5pbWF0aW9uOiBcXG4gICAgdGl0bGUtaWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGUsXFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1haW4tbWVudSAuYnV0dG9ucyB7XFxuICBoZWlnaHQ6IDE1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS5jbGljay1zaW5rLFxcbi5tYWluLW1lbnUuY2xpY2stc2luayxcXG4ubWFpbi1tZW51IC5idXR0b25zLmNsaWNrLXNpbmsge1xcbiAgYW5pbWF0aW9uOlxcbiAgICB0aXRsZS1zaW5rIDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbn1cXG5cXG4ucGxhY2VtZW50LmJ1dHRvbnMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDY0MHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG59XFxuXFxuLnBsYWNlbWVudC5idXR0b25zIC5idXR0b24sXFxuLm1haW4tbWVudSAuYnV0dG9uIHtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gIGFuaW1hdGlvbjogXFxuICAgIGJ1dHRvbi1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZSxcXG4gICAgdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbi5wbGFjZW1lbnQuYnV0dG9ucyAuYnV0dG9uLmRpc2FibGVkIHtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4ucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbjpub3QoLmRpc2FibGVkKTpob3ZlcixcXG4ubWFpbi1tZW51IC5idXR0b246aG92ZXIge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgOTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4ucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbjpub3QoLmRpc2FibGVkKTphY3RpdmUsXFxuLm1haW4tbWVudSAuYnV0dG9uOmFjdGl2ZSB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCA4MCUpO1xcbn1cXG5cXG4ubWFpbi1tZW51IGZvcm0gbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNnJlbTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubWFpbi1tZW51IGZvcm0gbGk6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcblxcbi5tYWluLW1lbnUgZm9ybSBsaSAubGFiZWwge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGFuaW1hdGlvbjogXFxuICAgIGJ1dHRvbi1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZSxcXG4gICAgdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcXG59XFxuXFxuLm1haW4tbWVudSBmb3JtIGxpIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiAycHggZ3Jvb3ZlICM3ZjhjOGQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBhbmltYXRpb246IFxcbiAgICBidXR0b24taWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGUsXFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxufVxcblxcbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmOGM4ZDtcXG4gIGJvcmRlcjogMnB4IG91dHNldCAjN2Y4YzhkO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1haW4tbWVudSBmb3JtIGxpIC5idXR0b24uQUkudG9nZ2xlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgNiUsIDQ1JSk7ICAgXFxuICBib3JkZXI6IDJweCBpbnNldCBoc2woMCwgNiUsIDQ1JSk7ICAgXFxufVxcblxcbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJLnRvZ2dsZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NCwgNiUsIDUwJSk7ICAgXFxuICBib3JkZXI6IDJweCBpbnNldCBoc2woMTg0LCA2JSwgNTAlKTsgICBcXG59XFxuXFxuLm1haW4tbWVudSBmb3JtIGxpIC5idXR0b24uQUkudG9nZ2xlZDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NCwgNiUsIDQ3JSk7XFxufVxcblxcbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA1MCUpOyAgIFxcbn1cXG5cXG4ubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NCwgNiUsIDQ3JSk7ICAgXFxuICBib3JkZXI6IDJweCBpbnNldCBoc2woMTg0LCA2JSwgNDclKTsgIFxcbn1cXG5cXG4uY29weXJpZ2h0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgYW5pbWF0aW9uOiBcXG4gICAgdGl0bGUtaWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGUsXFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjhyZW07XFxufVxcblxcbi5jb3B5cmlnaHQgc3ZnIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBmaWxsOiB3aGl0ZTtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAgdHJhbnNpdGlvbjogXFxuICAgIHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dCAwcyxcXG4gICAgZmlsbCAwLjI1cyBlYXNlLWluLW91dCAwcztcXG59XFxuXFxuLmNvcHlyaWdodCBzdmc6aG92ZXIge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgODAlKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4xKTtcXG59XFxuXFxuLmNvcHlyaWdodCBzdmc6YWN0aXZlIHtcXG4gIGZpbGw6IGhzbCgwLCAwJSwgNzAlKTtcXG59XFxuXFxuLmRpYWxvZy1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuMjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmRpYWxvZyB7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NCwgNjIsIDgwLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG91dGxpbmU6IDJweCByaWRnZSAjOTVhNWE2O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uZGlhbG9nIC50ZXh0IHtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmRpYWxvZyAubWFpbi50ZXh0IHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZGlhbG9nIC5idXR0b24ge1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgbWFyZ2luOiAwLjI1cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmOGM4ZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IG91dHNldCAjN2Y4YzhkO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmRpYWxvZyAuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA1NiUpO1xcbn1cXG5cXG4uZGlhbG9nIC5idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA1OSUpO1xcbn1cXG5cXG4uZGlhbG9nIC5wbGF5LmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhZTYwO1xcbiAgYm9yZGVyOiAxcHggb3V0c2V0ICMyN2FlNjA7XFxufVxcblxcbi5kaWFsb2cgLnBsYXkuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMTQ1LCA2MyUsIDQ1JSk7XFxufVxcblxcbi5kaWFsb2cgLnBsYXkuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDE0NSwgNjMlLCA0OCUpO1xcbn1cXG5cXG4uZGlhbG9nIC5tZW51LmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiO1xcbiAgYm9yZGVyOiAxcHggb3V0c2V0ICNjMDM5MmI7XFxufVxcblxcbi5kaWFsb2cgLm1lbnU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDYsIDYzJSwgNDklKTtcXG59XFxuXFxuLmRpYWxvZyAubWVudTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDYsIDYzJSwgNTIlKTtcXG59XFxuXFxuLmZhZGUtb3V0IHtcXG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxufVxcblxcbi5sb3NlLWZvY3VzIHtcXG4gIGFuaW1hdGlvbjogbG9zZS1mb2N1cyAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcXG59XFxuXFxuLnJldHVybi1mb2N1cyB7XFxuICBhbmltYXRpb246IHJldHVybi1mb2N1cyAwLjEyNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxufVxcblxcbi52aXNpYmlsaXR5LWhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDZweCkge1xcbiAgLmJvYXJkczpub3QoLnBsYWNlbWVudCkge1xcbiAgICBwYWRkaW5nOiAxMHJlbSAwLjVyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLm1haW4tbWVudSA+IGgxIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC5tYWluLW1lbnUgPiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gIH1cXG5cXG4gIC5wbGFjZW1lbnQuYnV0dG9ucyAuYnV0dG9uLFxcbiAgLm1haW4tbWVudSAuYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW1cXG4gIH1cXG5cXG4gIC5tYWluLW1lbnUgZm9ybSBsaSAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxuXFxuICAubWFpbi1tZW51IGZvcm0gbGkgaW5wdXQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSSB7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gIH0gIFxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIC5tYWluLW1lbnUgPiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG5cXG4gIC5wbGFjZW1lbnQuYnV0dG9ucyAuYnV0dG9uLFxcbiAgLm1haW4tbWVudSAuYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtXFxuICB9XFxuXFxuICAubWFpbi1tZW51IGZvcm0gbGkgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxvc2UtZm9jdXMge1xcbiAgMCUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XFxuICB9XFxuICBcXG4gIDEwMCUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByZXR1cm4tZm9jdXMge1xcbiAgMCUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcXG4gIH1cXG4gIFxcbiAgMTAwJSB7XFxuICAgIGZpbHRlcjogYmx1cigwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJ1dHRvbi1pZGxlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgMCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdGl0bGUtaWRsZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xJSwgMC4yNSUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wJSwgLTAuMjUlKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0aXRsZS1yaXNlIHtcXG4gIDAlIHtcXG4gICAgZmlsdGVyOiBibHVyKDEwcHgpIGJyaWdodG5lc3MoMC4yNSkgb3BhY2l0eSgwLjI1KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDEpIG9wYWNpdHkoMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdGl0bGUtc2luayB7XFxuICAwJSB7XFxuICAgIGZpbHRlcjogYmx1cigwcHgpIGJyaWdodG5lc3MoMSkgb3BhY2l0eSgxKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMTBweCkgYnJpZ2h0bmVzcygwLjI1KSBvcGFjaXR5KDAuMjUpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoaXAtaWRsZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yLjUlLCAwLjI1JSkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAlLCAtMC4yNSUpIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoaXAtaWRsZS1ob3Jpem9udGFsIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIuNSUsIDAuMjUlKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKSByb3RhdGUoOTBkZWcpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wJSwgLTAuMjUlKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKSByb3RhdGUoOTBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoaXAtc2luayB7XFxuICAwJSB7XFxuICAgIGZpbHRlcjogYmx1cigwcHgpIGJyaWdodG5lc3MoMSkgZ3JheXNjYWxlKDAlKSBvcGFjaXR5KDEpO1xcbiAgfVxcblxcbiAgMi41JSB7XFxuICAgIGZpbHRlcjogYmx1cigwcHgpIGJyaWdodG5lc3MoMikgZ3JheXNjYWxlKDAlKSBvcGFjaXR5KDEpO1xcbiAgfVxcblxcbiAgNSUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDEpIGdyYXlzY2FsZSgwJSkgb3BhY2l0eSgxKTtcXG4gIH1cXG4gIFxcbiAgMTAwJSB7XFxuICAgIGZpbHRlcjogYmx1cigyNXB4KSBicmlnaHRuZXNzKDAuNSkgZ3JheXNjYWxlKDEwMCUpIG9wYWNpdHkoMC4yNSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hpcC1zaGFraW5nIHtcXG4gMCUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAuNSUsIDApIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpO1xcbiB9XFxuXFxuIDEwMCUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC41JSwgMCkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSk7XFxuIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaGlwLXNoYWtpbmctaG9yaXpvbnRhbCB7XFxuICAwJSB7XFxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTAuMDUlKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKSByb3RhdGUoOTBkZWcpO1xcbiAgfVxcbiBcXG4gIDEwMCUge1xcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAuMDUlKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKSByb3RhdGUoOTBkZWcpO1xcbiAgfVxcbiB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc0hpdCA9IGZhbHNlO1xuICAgIHRoaXMuanVzdEdvdEhpdCA9IGZhbHNlO1xuICAgIHRoaXMuc2hpcCA9IG51bGw7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5pc0hpdCA9IHRydWU7XG4gICAgdGhpcy5qdXN0R290SGl0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJlc2V0SnVzdEdvdEhpdCgpIHtcbiAgICB0aGlzLmp1c3RHb3RIaXQgPSBmYWxzZTtcbiAgfVxuXG4gIGFzc2lnbihzaGlwKSB7XG4gICAgdGhpcy5zaGlwID0gc2hpcDtcbiAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci9wbGF5ZXInO1xuaW1wb3J0IEFJIGZyb20gJy4vcGxheWVyL2FpJztcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuZXhwb3J0IGNvbnN0IHBsYXllcnMgPSBbXTtcblxuLy8gY29uc3Qgc2hpcHMgPSBbXG4vLyAgIHtcbi8vICAgICB0eXBlOiAnQ2FycmllcicsXG4vLyAgICAgbGVuZ3RoOiA1LFxuLy8gICAgIHRlbXBDb29yZHM6IFszLCAyXSxcbi8vICAgICB0ZW1wSG9yaTogdHJ1ZSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIHR5cGU6ICdCYXR0bGVzaGlwJyxcbi8vICAgICBsZW5ndGg6IDQsXG4vLyAgICAgdGVtcENvb3JkczogWzMsIDVdLFxuLy8gICAgIHRlbXBIb3JpOiB0cnVlLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgdHlwZTogJ0NydWlzZXInLFxuLy8gICAgIGxlbmd0aDogMyxcbi8vICAgICB0ZW1wQ29vcmRzOiBbOCwgM10sXG4vLyAgICAgdGVtcEhvcmk6IGZhbHNlLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgdHlwZTogJ1N1Ym1hcmluZScsXG4vLyAgICAgbGVuZ3RoOiAzLFxuLy8gICAgIHRlbXBDb29yZHM6IFs2LCA3XSxcbi8vICAgICB0ZW1wSG9yaTogZmFsc2UsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICB0eXBlOiAnRGVzdHJveWVyJyxcbi8vICAgICBsZW5ndGg6IDIsXG4vLyAgICAgdGVtcENvb3JkczogWzEsIDldLFxuLy8gICAgIHRlbXBIb3JpOiB0cnVlLFxuLy8gICB9LFxuLy8gXTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlUGxheWVycyA9IChpbnB1dFBsYXllcnMpID0+IHtcbiAgcGxheWVycy5sZW5ndGggPSAwO1xuXG4gIGlucHV0UGxheWVycy5mb3JFYWNoKCh0aGlzUGxheWVyKSA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpc1BsYXllci50eXBlID09PSAnaHVtYW4nID8gbmV3IFBsYXllcih0aGlzUGxheWVyLm5hbWUpXG4gICAgICA6IHRoaXNQbGF5ZXIudHlwZSA9PT0gJ0FJJyA/IG5ldyBBSSh0aGlzUGxheWVyLmRpZmZpY3VsdHkpXG4gICAgICAgIDogbnVsbDtcblxuICAgIHBsYXllcnMucHVzaChwbGF5ZXIpO1xuXG4gICAgY29uc3QgYm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgYm9hcmQuY3JlYXRlQm9hcmQoKTtcbiAgICBwbGF5ZXIuYXNzaWduQm9hcmQoYm9hcmQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBwbGFjZVBsYXllclNoaXBzID0gKHBsYXllciwgc2hpcHMpID0+IHtcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHBsYXllclxuICAgICAgLmJvYXJkXG4gICAgICAucGxhY2VTaGlwKHNoaXAuaW5zZXJ0Q29vcmRpbmF0ZXMsIG5ldyBTaGlwKHNoaXAubGVuZ3RoLCBzaGlwLnR5cGUpLCBzaGlwLmhvcml6b250YWwpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgQ2VsbCBmcm9tICcuL2NlbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gW107XG4gICAgdGhpcy5mbGVldCA9IFtdO1xuICB9XG5cbiAgZ2V0Qm9hcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gIH1cblxuICBnZXRGbGVldCgpIHtcbiAgICByZXR1cm4gdGhpcy5mbGVldDtcbiAgfVxuXG4gIGVtcHR5RmxlZXQoKSB7XG4gICAgdGhpcy5mbGVldC5sZW5ndGggPSAwO1xuICB9XG5cbiAgY3JlYXRlQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICB0aGlzLmJvYXJkW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IG5ldyBDZWxsKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGxhY2VTaGlwKFt4LCB5XSwgc2hpcCwgaXNQbGFjZWRIb3Jpem9udGFsbHkgPSB0cnVlKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpc1BsYWNlZEhvcml6b250YWxseVxuICAgICAgPyB4IC0gTWF0aC5mbG9vcihzaGlwLmxlbmd0aCAvIDIpXG4gICAgICA6IHkgLSBNYXRoLmZsb29yKHNoaXAubGVuZ3RoIC8gMik7XG4gICAgY29uc3QgZW5kID0gc3RhcnQgKyBzaGlwLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgYm93Q29vcmRpbmF0ZXMgPSBpc1BsYWNlZEhvcml6b250YWxseVxuICAgICAgPyB7IHg6IGVuZCwgeSB9XG4gICAgICA6IHsgeCwgeTogZW5kIH07XG5cbiAgICBpZiAoc2hpcC5oYXNQb3NpdGlvbmVkKSByZXR1cm47XG4gICAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiA5KSByZXR1cm47XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSArPSAxKSB7XG4gICAgICBpZiAoaXNQbGFjZWRIb3Jpem9udGFsbHkgJiYgdGhpcy5ib2FyZFtpXVt5XS5zaGlwICE9PSBudWxsKSByZXR1cm47XG4gICAgICBpZiAoIWlzUGxhY2VkSG9yaXpvbnRhbGx5ICYmIHRoaXMuYm9hcmRbeF1baV0uc2hpcCAhPT0gbnVsbCkgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkgKz0gMSkge1xuICAgICAgaWYgKGlzUGxhY2VkSG9yaXpvbnRhbGx5KSB0aGlzLmJvYXJkW2ldW3ldLmFzc2lnbihzaGlwKTtcbiAgICAgIGlmICghaXNQbGFjZWRIb3Jpem9udGFsbHkpIHRoaXMuYm9hcmRbeF1baV0uYXNzaWduKHNoaXApO1xuICAgIH1cbiAgICB0aGlzLmZsZWV0LnB1c2goc2hpcCk7XG4gICAgc2hpcC5pc1Bvc2l0aW9uZWQoYm93Q29vcmRpbmF0ZXMsIGlzUGxhY2VkSG9yaXpvbnRhbGx5KTtcbiAgfVxuXG4gIHJlc2V0Q2VsbHNKdXN0R290SGl0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1bal0ucmVzZXRKdXN0R290SGl0KCk7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdLnNoaXAgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdLnNoaXAucmVzZXRKdXN0U3VuaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVjZWl2ZUF0dGFjayhbeCwgeV0pIHtcbiAgICB0aGlzLnJlc2V0Q2VsbHNKdXN0R290SGl0KCk7XG4gICAgdGhpcy5ib2FyZFt4XVt5XS5oaXQoKTtcbiAgICBpZiAodGhpcy5ib2FyZFt4XVt5XS5zaGlwICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldLnNoaXAuaGl0KCk7XG4gICAgfVxuICB9XG5cbiAgaXNGbGVldE9wZXJhdGlvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLmZsZWV0LnNvbWUoKHNoaXApID0+IHNoaXAuaGFzU3VuayA9PT0gZmFsc2UpO1xuICB9XG5cbiAgYWxsVW5oaXRDb29yZGluYXRlcygpIHtcbiAgICBjb25zdCB1bmhpdENvb3JkaW5hdGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJvYXJkW2ldW2pdLmlzSGl0KSB1bmhpdENvb3JkaW5hdGVzLnB1c2goW2ksIGpdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuaGl0Q29vcmRpbmF0ZXM7XG4gIH1cblxuICBhbGxTaGlwQ29vcmRpbmF0ZXMoKSB7XG4gICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0uc2hpcCAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmICghdGhpcy5ib2FyZFtpXVtqXS5pc0hpdCkge1xuICAgICAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW2ksIGpdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNoaXBDb29yZGluYXRlcztcbiAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFJIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoZGlmZmljdWx0eSA9ICdFYXN5Jykge1xuICAgIHN1cGVyKGBBSSAke2RpZmZpY3VsdHl9YCk7XG4gICAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcbiAgfVxuXG4gIGNob29zZUF0dGFja0Nvb3JkaW5hdGVzKHBsYXllcikge1xuICAgIGlmICh0aGlzLmRpZmZpY3VsdHkgPT09ICdFYXN5Jykge1xuICAgICAgY29uc3QgYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmQuYWxsVW5oaXRDb29yZGluYXRlcygpO1xuICAgICAgcmV0dXJuIGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzW1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlcy5sZW5ndGgpXG4gICAgICBdO1xuICAgIH1cbiAgICAvLyBOb3JtYWwgUGxhY2Vob2xkZXIsIHNhbWUgYXMgZWFzeVxuICAgIGlmICh0aGlzLmRpZmZpY3VsdHkgPT09ICdOb3JtYWwnKSB7XG4gICAgICBjb25zdCBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlcyA9IHBsYXllci5ib2FyZC5hbGxVbmhpdENvb3JkaW5hdGVzKCk7XG4gICAgICByZXR1cm4gYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXNbXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzLmxlbmd0aClcbiAgICAgIF07XG4gICAgfVxuICAgIGlmICh0aGlzLmRpZmZpY3VsdHkgPT09ICdDaGVhdCcpIHtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLmFsbFNoaXBDb29yZGluYXRlcygpO1xuICAgICAgcmV0dXJuIGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzW1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlcy5sZW5ndGgpXG4gICAgICBdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBhcnJhbmdlU2hpcHNPbkJvYXJkKGRhdGEpIHtcbiAgICBjb25zdCBjdXJyZW50QUlTaGlwcyA9IFtdO1xuICAgIGNvbnN0IGltYWdpbmFyeUJvYXJkID0gW107XG5cbiAgICBkYXRhLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBsZXQgaG9yaXpvbnRhbCA9IEJvb2xlYW4oTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSk7XG4gICAgICBsZXQgc3RhcnQgPSBob3Jpem9udGFsXG4gICAgICAgID8geCAtIE1hdGguZmxvb3Ioc2hpcC5sZW5ndGggLyAyKVxuICAgICAgICA6IHkgLSBNYXRoLmZsb29yKHNoaXAubGVuZ3RoIC8gMik7XG4gICAgICBsZXQgZW5kID0gc3RhcnQgKyBzaGlwLmxlbmd0aCAtIDE7XG5cbiAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBhcnJheSA9IGhvcml6b250YWwgPyBbaSwgeV0gOiBbeCwgaV07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpbWFnaW5hcnlCb2FyZC5zb21lKChjZWxsKSA9PiBjZWxsWzBdID09PSBhcnJheVswXSAmJiBjZWxsWzFdID09PSBhcnJheVsxXSlcbiAgICAgICAgICAgIHx8IHN0YXJ0IDwgMFxuICAgICAgICAgICAgfHwgZW5kID4gOVxuICAgICAgICApIHtcbiAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgaG9yaXpvbnRhbCA9IEJvb2xlYW4oTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSk7XG4gICAgICAgICAgc3RhcnQgPSBob3Jpem9udGFsXG4gICAgICAgICAgICA/IHggLSBNYXRoLmZsb29yKHNoaXAubGVuZ3RoIC8gMilcbiAgICAgICAgICAgIDogeSAtIE1hdGguZmxvb3Ioc2hpcC5sZW5ndGggLyAyKTtcbiAgICAgICAgICBlbmQgPSBzdGFydCArIHNoaXAubGVuZ3RoIC0gMTtcbiAgICAgICAgICBpID0gc3RhcnQ7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gaG9yaXpvbnRhbCA/IFtpLCB5XSA6IFt4LCBpXTtcbiAgICAgICAgaW1hZ2luYXJ5Qm9hcmQucHVzaChhcnJheSk7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRBSVNoaXBzLnB1c2goe1xuICAgICAgICB0eXBlOiBzaGlwLnR5cGUsXG4gICAgICAgIGxlbmd0aDogc2hpcC5sZW5ndGgsXG4gICAgICAgIGluc2VydENvb3JkaW5hdGVzOiBbeCwgeV0sXG4gICAgICAgIGhvcml6b250YWwsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjdXJyZW50QUlTaGlwcztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSA9ICdQbGF5ZXInKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmJvYXJkID0gbnVsbDtcbiAgfVxuXG4gIGFzc2lnbkJvYXJkKGdhbWVCb2FyZCkge1xuICAgIHRoaXMuYm9hcmQgPSBnYW1lQm9hcmQ7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgsIHR5cGUpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMuaGFzUG9zaXRpb25lZCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzU3VuayA9IGZhbHNlO1xuICAgIHRoaXMuanVzdFN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuYm93Q29vcmRpbmF0ZXMgPSBudWxsO1xuICAgIHRoaXMuaXNIb3Jpem9udGFsID0gbnVsbDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IHRoaXMuaGl0cykgdGhpcy5pc1N1bmsoKTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICB0aGlzLmhhc1N1bmsgPSB0cnVlO1xuICAgIHRoaXMuanVzdFN1bmsgPSB0cnVlO1xuICB9XG5cbiAgcmVzZXRKdXN0U3VuaygpIHtcbiAgICB0aGlzLmp1c3RTdW5rID0gZmFsc2U7XG4gIH1cblxuICBpc1Bvc2l0aW9uZWQoYm93Q29vcmRpbmF0ZXMsIGlzSG9yaXpvbnRhbCkge1xuICAgIHRoaXMuaGFzUG9zaXRpb25lZCA9IHRydWU7XG4gICAgdGhpcy5ib3dDb29yZGluYXRlcyA9IGJvd0Nvb3JkaW5hdGVzO1xuICAgIHRoaXMuaXNIb3Jpem9udGFsID0gaXNIb3Jpem9udGFsO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJjb250cm9sbGVyRE9NXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHBsYXllcnMsIGdlbmVyYXRlUGxheWVycywgcGxhY2VQbGF5ZXJTaGlwcyB9IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgQUkgZnJvbSAnLi9wbGF5ZXIvYWknO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci9wbGF5ZXInO1xuaW1wb3J0IHNwcml0ZUJhdHRsZXNoaXAgZnJvbSAnLi4vYXNzZXRzL3NoaXBCYXR0bGVzaGlwLnBuZyc7XG5pbXBvcnQgc3ByaXRlQ2FycmllciBmcm9tICcuLi9hc3NldHMvc2hpcENhcnJpZXIucG5nJztcbmltcG9ydCBzcHJpdGVDcnVpc2VyIGZyb20gJy4uL2Fzc2V0cy9zaGlwQ3J1aXNlci5wbmcnO1xuaW1wb3J0IHNwcml0ZURlc3Ryb3llciBmcm9tICcuLi9hc3NldHMvc2hpcERlc3Ryb3llci5wbmcnO1xuaW1wb3J0IHNwcml0ZVN1Ym1hcmluZSBmcm9tICcuLi9hc3NldHMvc2hpcFN1Ym1hcmluZS5wbmcnO1xuaW1wb3J0IHNwcml0ZUZpcmUgZnJvbSAnLi4vYXNzZXRzL2ZpcmUuZ2lmJztcbmltcG9ydCBzcHJpdGVFeHBsb3Npb24gZnJvbSAnLi4vYXNzZXRzL2V4cGxvc2lvbi5naWYnO1xuXG5jb25zdCBzaGlwc0RhdGEgPSBbXG4gIHtcbiAgICB0eXBlOiAnQ2FycmllcicsXG4gICAgbGVuZ3RoOiA1LFxuICAgIHNyYzogc3ByaXRlQ2FycmllcixcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdCYXR0bGVzaGlwJyxcbiAgICBsZW5ndGg6IDQsXG4gICAgc3JjOiBzcHJpdGVCYXR0bGVzaGlwLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ0NydWlzZXInLFxuICAgIGxlbmd0aDogMyxcbiAgICBzcmM6IHNwcml0ZUNydWlzZXIsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnU3VibWFyaW5lJyxcbiAgICBsZW5ndGg6IDMsXG4gICAgc3JjOiBzcHJpdGVTdWJtYXJpbmUsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnRGVzdHJveWVyJyxcbiAgICBsZW5ndGg6IDIsXG4gICAgc3JjOiBzcHJpdGVEZXN0cm95ZXIsXG4gIH0sXG5dO1xuXG5sZXQgY3VycmVudFBsYXllcjtcbmxldCB0YXJnZXRQbGF5ZXI7XG5cbmNvbnN0IHN3aXRjaFBsYXllcnMgPSAoKSA9PiB7XG4gIGN1cnJlbnRQbGF5ZXIgPSBjdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF07XG4gIHRhcmdldFBsYXllciA9IHRhcmdldFBsYXllciA9PT0gcGxheWVyc1swXSA/IHBsYXllcnNbMV0gOiBwbGF5ZXJzWzBdO1xufTtcblxuY29uc3QgbG9zZUZvY3VzRnJvbUdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuICBnYW1lLmNsYXNzTGlzdC5hZGQoJ2xvc2UtZm9jdXMnKTtcbn07XG5cbmNvbnN0IHJldHVybkZvY3VzVG9HYW1lID0gKCkgPT4ge1xuICBjb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbiAgZ2FtZS5jbGFzc0xpc3QucmVtb3ZlKCdsb3NlLWZvY3VzJyk7XG4gIGdhbWUuY2xhc3NMaXN0LmFkZCgncmV0dXJuLWZvY3VzJyk7XG4gIGdhbWUuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgIGdhbWUuY2xhc3NMaXN0LnJlbW92ZSgncmV0dXJuLWZvY3VzJyk7XG4gIH0sIHsgb25jZTogdHJ1ZSB9KTtcbn07XG5cbmNvbnN0IGhpZGVEaWFsb2cgPSAoKSA9PiB7XG4gIGNvbnN0IGRpYWxvZ092ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLW92ZXJsYXknKTtcbiAgZGlhbG9nT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdmYWRlLW91dCcpO1xuICBkaWFsb2dPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICBkaWFsb2dPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtb3V0Jyk7XG4gICAgZGlhbG9nT3ZlcmxheS5yZW1vdmUoKTtcbiAgfSwgeyBvbmNlOiB0cnVlIH0pO1xufTtcblxuY29uc3Qgc2hvd1dpbm5lckRpYWxvZyA9ICgpID0+IHtcbiAgY29uc3Qgc2l0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGRpYWxvZ092ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlhbG9nT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctb3ZlcmxheScpO1xuXG4gIGNvbnN0IGRpYWxvZ0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaWFsb2dCb3guY2xhc3NMaXN0LmFkZCgnZGlhbG9nJyk7XG5cbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAxLmNsYXNzTGlzdC5hZGQoJ3N1YicsICd0ZXh0Jyk7XG4gIHAxLnRleHRDb250ZW50ID0gY3VycmVudFBsYXllciBpbnN0YW5jZW9mIEFJXG4gICAgPyAnQWxsIHlvdXIgc2hpcHMgaGF2ZSBiZWVuIGRlc3Ryb3llZC4nXG4gICAgOiAnQWxsIGVuZW15IHNoaXBzIGhhdmUgYmVlbiBkZXN0cm95ZWQuJztcblxuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDIudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50UGxheWVyLm5hbWV9IHdpbnMhYDtcbiAgcDIuY2xhc3NMaXN0LmFkZCgnbWFpbicsICd0ZXh0Jyk7XG5cbiAgY29uc3QgYnRuUGxheUFnYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0blBsYXlBZ2Fpbi5jbGFzc0xpc3QuYWRkKCdwbGF5JywgJ2J1dHRvbicpO1xuICBidG5QbGF5QWdhaW4udGV4dENvbnRlbnQgPSAnUGxheSBBZ2Fpbic7XG4gIGJ0blBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc3RhcnRHYW1lKTtcblxuICBjb25zdCBidG5NZW51UmV0dXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bk1lbnVSZXR1cm4uY2xhc3NMaXN0LmFkZCgnbWVudScsICdidXR0b24nKTtcbiAgYnRuTWVudVJldHVybi50ZXh0Q29udGVudCA9ICdSZXR1cm4gdG8gTWVudSc7XG4gIGJ0bk1lbnVSZXR1cm4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXR1cm5Ub01lbnUpO1xuXG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChwMSk7XG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChwMik7XG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChidG5QbGF5QWdhaW4pO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQoYnRuTWVudVJldHVybik7XG4gIGRpYWxvZ092ZXJsYXkuYXBwZW5kQ2hpbGQoZGlhbG9nQm94KTtcbiAgc2l0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaWFsb2dPdmVybGF5KTtcbn07XG5cbmNvbnN0IGNoZWNrV2lubmluZ0NvbmRpdGlvbiA9ICgpID0+IHtcbiAgaWYgKCF0YXJnZXRQbGF5ZXIuYm9hcmQuaXNGbGVldE9wZXJhdGlvbmFsKCkpIHtcbiAgICBsb3NlRm9jdXNGcm9tR2FtZSgpO1xuICAgIHNob3dXaW5uZXJEaWFsb2coKTtcbiAgICBoaWRlUGxheWVySFAoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzZWxlY3RTaGlwT2JqZWN0ID0gKHBsYXllciwgY2VsbCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRTaGlwXSA9IHBsYXllclxuICAgIC5ib2FyZFxuICAgIC5mbGVldFxuICAgIC5maWx0ZXIoKHNoaXApID0+IHNoaXAudHlwZSA9PT0gY2VsbC5kYXRhc2V0LnNoaXApO1xuICByZXR1cm4gc2VsZWN0ZWRTaGlwO1xufTtcblxuY29uc3QgaWZTdW5rRXhwbG9zaW9uID0gKGNlbGwpID0+IHtcbiAgY29uc3QgZXhwbG9kaW5nQ2VsbCA9IGNlbGw7XG4gIGlmIChleHBsb2RpbmdDZWxsLmRhdGFzZXQuc2hpcCkge1xuICAgIGNvbnN0IGV4cGxvZGluZ0NlbGxQbGF5ZXIgPSBwbGF5ZXJzLmZpbmQoKHBsYXllcikgPT4gcGxheWVyLm5hbWUgPT09IGNlbGwuZGF0YXNldC5wbGF5ZXJOYW1lKTtcbiAgICBjb25zdCBleHBsb2RpbmdTaGlwID0gc2VsZWN0U2hpcE9iamVjdChleHBsb2RpbmdDZWxsUGxheWVyLCBleHBsb2RpbmdDZWxsKTtcbiAgICBpZiAoZXhwbG9kaW5nU2hpcC5oYXNTdW5rKSB7XG4gICAgICBjb25zdCBhcnJheSA9IFtcbiAgICAgICAgW1xuICAgICAgICAgICtleHBsb2RpbmdDZWxsLmRhdGFzZXQueCArIDEsXG4gICAgICAgICAgK2V4cGxvZGluZ0NlbGwuZGF0YXNldC55LFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgK2V4cGxvZGluZ0NlbGwuZGF0YXNldC54IC0gMSxcbiAgICAgICAgICArZXhwbG9kaW5nQ2VsbC5kYXRhc2V0LnksXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICArZXhwbG9kaW5nQ2VsbC5kYXRhc2V0LngsXG4gICAgICAgICAgK2V4cGxvZGluZ0NlbGwuZGF0YXNldC55ICsgMSxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICtleHBsb2RpbmdDZWxsLmRhdGFzZXQueCxcbiAgICAgICAgICArZXhwbG9kaW5nQ2VsbC5kYXRhc2V0LnkgLSAxLFxuICAgICAgICBdLFxuICAgICAgXTtcbiAgICAgIGV4cGxvZGluZ0NlbGwuZGF0YXNldC5zaGlwID0gJyc7XG4gICAgICBleHBsb2RpbmdDZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcblxuICAgICAgYXJyYXkuZm9yRWFjaCgoW3gsIHldKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdW2RhdGEtcGxheWVyLW5hbWU9XCIke2V4cGxvZGluZ0NlbGxQbGF5ZXIubmFtZX1cIl1bZGF0YS1zaGlwPVwiJHtleHBsb2RpbmdTaGlwLnR5cGV9XCJdYCk7XG4gICAgICAgIGlmIChuZXh0Q2VsbCkgaGl0RXhwbG9zaW9uRWZmZWN0KG5leHRDZWxsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgaGl0RXhwbG9zaW9uRWZmZWN0ID0gYXN5bmMgKGNlbGwpID0+IHtcbiAgaWZTdW5rRXhwbG9zaW9uKGNlbGwpO1xuXG4gIGNvbnN0IGV4cGxvc2lvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBleHBsb3Npb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZXhwbG9zaW9uLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGV4cGxvc2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBleHBsb3Npb24uc3JjID0gYCR7c3ByaXRlRXhwbG9zaW9ufT9yYW5kPSR7TWF0aC5yYW5kb20oKX1gO1xuICBleHBsb3Npb24uY2xhc3NMaXN0LmFkZCgnZXhwbG9zaW9uJyk7XG5cbiAgY29uc3QgZXhwbG9zaW9uU2NhbGUgPSAxLjUgKiAocGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoY2VsbCkud2lkdGgsIDEwKSAvIDYwKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWV4cGxvc2lvbi1zY2FsZScsIGV4cGxvc2lvblNjYWxlKTtcblxuICBleHBsb3Npb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZXhwbG9zaW9uKTtcbiAgY2VsbC5hcHBlbmRDaGlsZChleHBsb3Npb25Db250YWluZXIpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNlbGwucmVtb3ZlQ2hpbGQoZXhwbG9zaW9uQ29udGFpbmVyKTtcbiAgfSwgNTAwMCk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSwgNTAwKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRGaXJlRWZmZWN0ID0gKHRhcmdldENlbGwpID0+IHtcbiAgY29uc3QgZmlyZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmaXJlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZpcmUtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgZmlyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBmaXJlLnNyYyA9IGAke3Nwcml0ZUZpcmV9P3JhbmQ9JHtNYXRoLnJhbmRvbSgpfWA7XG4gIGZpcmUuY2xhc3NMaXN0LmFkZCgnZmlyZScpO1xuXG4gIGZpcmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlyZSk7XG4gIHRhcmdldENlbGwuYXBwZW5kQ2hpbGQoZmlyZUNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBhZGRNaXNzTWFyayA9ICh0YXJnZXRDZWxsKSA9PiB7XG4gIGNvbnN0IG1hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgdGFyZ2V0Q2VsbC5hcHBlbmRDaGlsZChtYXJrKTtcbiAgbWFyay5vdXRlckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5taXNzPC90aXRsZT48cGF0aCBkPVwiTTE5LDYuNDFMMTcuNTksNUwxMiwxMC41OUw2LjQxLDVMNSw2LjQxTDEwLjU5LDEyTDUsMTcuNTlMNi40MSwxOUwxMiwxMy40MUwxNy41OSwxOUwxOSwxNy41OUwxMy40MSwxMkwxOSw2LjQxWlwiIC8+PC9zdmc+Jztcbn07XG5cbmNvbnN0IHVwZGF0ZUhQID0gKCkgPT4ge1xuICBsZXQgdGFnO1xuICBpZiAocGxheWVycy5zb21lKChwbGF5ZXIpID0+IHBsYXllciBpbnN0YW5jZW9mIEFJKSkge1xuICAgIHRhZyA9IHRhcmdldFBsYXllciA9PT0gcGxheWVyc1swXVxuICAgICAgPyAnY3VycmVudCdcbiAgICAgIDogJ2VuZW15JztcbiAgfSBlbHNlIHtcbiAgICB0YWcgPSAnZW5lbXknO1xuICB9XG4gIGNvbnN0IHRvdGFsSFAgPSB0YXJnZXRQbGF5ZXJcbiAgICAuYm9hcmRcbiAgICAuZmxlZXRcbiAgICAucmVkdWNlKCh0b3RhbCwgc2hpcCkgPT4gdG90YWwgKyBzaGlwLmxlbmd0aCwgMCk7XG4gIGNvbnN0IGN1cnJlbnRIUCA9IHRhcmdldFBsYXllclxuICAgIC5ib2FyZFxuICAgIC5mbGVldFxuICAgIC5yZWR1Y2UoKHRvdGFsLCBzaGlwKSA9PiB0b3RhbCAtIHNoaXAuaGl0cywgdG90YWxIUCk7XG4gIGNvbnN0IGhlYWx0aCA9IGAke01hdGgucm91bmQoKGN1cnJlbnRIUCAvIHRvdGFsSFApICogMTAwKX0lYDtcbiAgY29uc3QgaGl0ID0gYCR7TWF0aC5yb3VuZCgoMSAvIHRvdGFsSFApICogMTAwKX0lYDtcbiAgY29uc3QgZW1wdHkgPSBgJHtNYXRoLnJvdW5kKCgxIC0gY3VycmVudEhQIC8gdG90YWxIUCkgKiAxMDApfSVgO1xuXG4gIGNvbnN0IHBsYXllckhlYWx0aFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YWd9IC5oZWFsdGggPiAudGV4dCBgKTtcbiAgcGxheWVySGVhbHRoVGV4dC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRIUH0vJHt0b3RhbEhQfWA7XG5cbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7dGFnfS1oZWFsdGhgLCBoZWFsdGgpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHt0YWd9LWhpdGAsIGhpdCk7XG5cbiAgY29uc3QgcGxheWVySGVhbHRoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFnfSAuaGVhbHRoID4gLmJhciBgKTtcbiAgcGxheWVySGVhbHRoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7dGFnfS1oaXRgLCAnMCUnKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHt0YWd9LWVtcHR5YCwgZW1wdHkpO1xuICB9LCB7IG9uY2U6IHRydWUgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVCb2FyZCA9IGFzeW5jIChbeCwgeV0pID0+IHtcbiAgY29uc3QgdGFyZ2V0Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXVtkYXRhLXBsYXllci1uYW1lPVwiJHt0YXJnZXRQbGF5ZXIubmFtZX1cIl1gKTtcbiAgaWYgKHRhcmdldFBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXApIHtcbiAgICBjb25zdCB0YXJnZXRTaGlwID0gc2VsZWN0U2hpcE9iamVjdCh0YXJnZXRQbGF5ZXIsIHRhcmdldENlbGwpO1xuICAgIGlmICh0YXJnZXRTaGlwLmhhc1N1bmspIHtcbiAgICAgIHByaW50U2lua2luZ1Nwcml0ZSh0YXJnZXRTaGlwKTtcbiAgICB9XG4gIH1cbiAgYXdhaXQgaGl0RXhwbG9zaW9uRWZmZWN0KHRhcmdldENlbGwpO1xuICBpZiAodGFyZ2V0UGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcCkge1xuICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgaWYgKHRhcmdldENlbGwuZGF0YXNldC5zaGlwKSBhZGRGaXJlRWZmZWN0KHRhcmdldENlbGwpO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgIGFkZE1pc3NNYXJrKHRhcmdldENlbGwpO1xuICB9XG59O1xuXG5jb25zdCBzaG93SW5wdXRCbG9ja2VyID0gKCkgPT4ge1xuICBjb25zdCBibG9ja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJsb2NrZXIuY2xhc3NMaXN0LmFkZCgnYmxvY2tlcicpO1xuXG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuICBnYW1lLmFwcGVuZENoaWxkKGJsb2NrZXIpO1xufTtcblxuY29uc3QgaGlkZUlucHV0QmxvY2tlciA9ICgpID0+IHtcbiAgY29uc3QgYmxvY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9ja2VyJyk7XG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuICBnYW1lLnJlbW92ZUNoaWxkKGJsb2NrZXIpO1xufTtcblxubGV0IHByZXZpb3VzSGl0Q2VsbCA9IFstMSwgLTFdO1xuXG5jb25zdCBwcm9jZXNzSGl0ID0gYXN5bmMgKFt4LCB5XSkgPT4ge1xuICB0YXJnZXRQbGF5ZXJcbiAgICAuYm9hcmRcbiAgICAucmVjZWl2ZUF0dGFjayhcbiAgICAgIFt4LCB5XSxcbiAgICApO1xuICBwcmV2aW91c0hpdENlbGwgPSBbK3gsICt5XTtcbiAgc2hvd0lucHV0QmxvY2tlcigpO1xuICBhd2FpdCB1cGRhdGVCb2FyZChbeCwgeV0pO1xuICBpZiAodGFyZ2V0UGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcCkgdXBkYXRlSFAoKTtcbiAgaWYgKGNoZWNrV2lubmluZ0NvbmRpdGlvbigpKSByZXR1cm47XG4gIHN3aXRjaFBsYXllcnMoKTtcbiAgaWYgKGN1cnJlbnRQbGF5ZXIgaW5zdGFuY2VvZiBBSSkge1xuICAgIGhpdENlbGxBSSgpO1xuICB9IGVsc2UgaWYgKCEodGFyZ2V0UGxheWVyIGluc3RhbmNlb2YgQUkpKSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9KTtcbiAgICBjbGVhckdhbWVDb250YWluZXIoKTtcbiAgICBpbml0aWFsaXplR2FtZSgpO1xuICB9XG4gIGlmIChwbGF5ZXJzLnNvbWUoKHBsYXllcikgPT4gKHBsYXllciBpbnN0YW5jZW9mIEFJKSkpIGhpZGVJbnB1dEJsb2NrZXIoKTtcbn07XG5cbmNvbnN0IGhpdENlbGxBSSA9ICgpID0+IHtcbiAgY29uc3QgW3gsIHldID0gY3VycmVudFBsYXllci5jaG9vc2VBdHRhY2tDb29yZGluYXRlcyh0YXJnZXRQbGF5ZXIpO1xuICBwcm9jZXNzSGl0KFt4LCB5XSk7XG59O1xuXG5jb25zdCBoaXRDZWxsUGxheWVyID0gKGUpID0+IHtcbiAgY29uc3QgY2VsbCA9IGUuY3VycmVudFRhcmdldDtcbiAgY29uc3QgeyB4IH0gPSBjZWxsLmRhdGFzZXQ7XG4gIGNvbnN0IHsgeSB9ID0gY2VsbC5kYXRhc2V0O1xuICBpZiAoXG4gICAgY2VsbC5kYXRhc2V0LnBsYXllck5hbWUgPT09IHRhcmdldFBsYXllci5uYW1lXG4gICAgJiYgIXRhcmdldFBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLmlzSGl0XG4gICkge1xuICAgIHByb2Nlc3NIaXQoW3gsIHldKTtcbiAgfVxufTtcblxuY29uc3QgcHJpbnRTaW5raW5nU3ByaXRlID0gKHNoaXApID0+IHtcbiAgY29uc3QgeyB4LCB5IH0gPSBzaGlwLmJvd0Nvb3JkaW5hdGVzO1xuICBjb25zdCBzaGlwUGxheWVyID0gcGxheWVycy5maW5kKChwbGF5ZXIpID0+IHBsYXllci5ib2FyZC5nZXRGbGVldCgpLmluY2x1ZGVzKHNoaXApKTtcbiAgY29uc3QgYm93Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXVtkYXRhLXBsYXllci1uYW1lPVwiJHtzaGlwUGxheWVyLm5hbWV9XCJdYCk7XG4gIGNvbnN0IGJvd0NlbGxDaGlsZHJlbiA9IEFycmF5LmZyb20oYm93Q2VsbC5jaGlsZE5vZGVzKTtcbiAgaWYgKGJvd0NlbGxDaGlsZHJlbi5zb21lKChjaGlsZCkgPT4gY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcHJpdGUtY29udGFpbmVyJykpKSByZXR1cm47XG4gIGJvd0NlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1ib3cnKTtcblxuICBjb25zdCBzcHJpdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3ByaXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Nwcml0ZS1jb250YWluZXInKTtcbiAgaWYgKHNoaXAuaXNIb3Jpem9udGFsKSBzcHJpdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuXG4gIGNvbnN0IHNoaXBTcHJpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc2hpcFNwcml0ZS5zcmMgPSBzaGlwc0RhdGEuZmluZCgoc2hpcERhdGEpID0+IHNoaXBEYXRhLnR5cGUgPT09IHNoaXAudHlwZSkuc3JjO1xuICBzaGlwU3ByaXRlLmNsYXNzTGlzdC5hZGQoJ3Nwcml0ZScpO1xuXG4gIGNvbnN0IHNwcml0ZVNjYWxlID0gMC4zNSAqIChwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib3dDZWxsKS53aWR0aCwgMTApIC8gNjApO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc3ByaXRlLXNjYWxlJywgc3ByaXRlU2NhbGUpO1xuXG4gIHNwcml0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwU3ByaXRlKTtcbiAgYm93Q2VsbC5hcHBlbmRDaGlsZChzcHJpdGVDb250YWluZXIpO1xufTtcblxuY29uc3QgcHJpbnRTcHJpdGVzID0gKCkgPT4ge1xuICBjdXJyZW50UGxheWVyLmJvYXJkLmdldEZsZWV0KCkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGlmICghc2hpcC5oYXNTdW5rKSB7XG4gICAgICBjb25zdCB7IHgsIHkgfSA9IHNoaXAuYm93Q29vcmRpbmF0ZXM7XG4gICAgICBjb25zdCBib3dDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdW2RhdGEtcGxheWVyLW5hbWU9XCIke2N1cnJlbnRQbGF5ZXIubmFtZX1cIl1gKTtcbiAgICAgIGJvd0NlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1ib3cnKTtcblxuICAgICAgY29uc3Qgc3ByaXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcHJpdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ByaXRlLWNvbnRhaW5lcicpO1xuICAgICAgaWYgKHNoaXAuaXNIb3Jpem9udGFsKSBzcHJpdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuXG4gICAgICBjb25zdCBzaGlwU3ByaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBzaGlwU3ByaXRlLnNyYyA9IHNoaXBzRGF0YS5maW5kKChzaGlwRGF0YSkgPT4gc2hpcERhdGEudHlwZSA9PT0gc2hpcC50eXBlKS5zcmM7XG4gICAgICBzaGlwU3ByaXRlLmNsYXNzTGlzdC5hZGQoJ3Nwcml0ZScpO1xuXG4gICAgICBjb25zdCBzcHJpdGVTY2FsZSA9IDAuMzUgKiAocGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoYm93Q2VsbCkud2lkdGgsIDEwKSAvIDYwKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zcHJpdGUtc2NhbGUnLCBzcHJpdGVTY2FsZSk7XG5cbiAgICAgIHNwcml0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwU3ByaXRlKTtcbiAgICAgIGJvd0NlbGwuYXBwZW5kQ2hpbGQoc3ByaXRlQ29udGFpbmVyKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgcmVzaXplU3ByaXRlcyA9ICgpID0+IHtcbiAgY29uc3QgYm93Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZWxsJyk7XG4gIGNvbnN0IHNwcml0ZVNjYWxlID0gMC4zNSAqIChwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib3dDZWxsKS53aWR0aCwgMTApIC8gNjApO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc3ByaXRlLXNjYWxlJywgc3ByaXRlU2NhbGUpO1xufTtcblxuY29uc3QgcmVzdW1lR2FtZSA9ICgpID0+IHtcbiAgcmV0dXJuRm9jdXNUb0dhbWUoKTtcbiAgaGlkZURpYWxvZygpO1xuICB1bmhpZGVQbGF5ZXJIUCgpO1xufTtcblxuY29uc3QgcmVzdGFydEdhbWUgPSAoKSA9PiB7XG4gIHJldHVybkZvY3VzVG9HYW1lKCk7XG4gIGhpZGVEaWFsb2coKTtcbiAgY2xlYXJHYW1lQ29udGFpbmVyKCk7XG4gIGdlbmVyYXRlUGxheWVycyhcbiAgICBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdodW1hbicsXG4gICAgICAgIG5hbWU6IHBsYXllcnNbMF0ubmFtZSxcbiAgICAgIH0sXG4gICAgICBwbGF5ZXJzWzFdIGluc3RhbmNlb2YgQUlcbiAgICAgICAgPyB7XG4gICAgICAgICAgdHlwZTogJ0FJJyxcbiAgICAgICAgICBkaWZmaWN1bHR5OiBwbGF5ZXJzWzFdLmRpZmZpY3VsdHksXG4gICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgdHlwZTogJ2h1bWFuJyxcbiAgICAgICAgICBuYW1lOiBwbGF5ZXJzWzFdLm5hbWUsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgKTtcbiAgW2N1cnJlbnRQbGF5ZXIsIHRhcmdldFBsYXllcl0gPSBwbGF5ZXJzO1xuICBpbml0aWFsaXplR2FtZUNvbnRhaW5lcigpO1xuICBpbml0aWFsaXplU2hpcFBsYWNlbWVudFNjcmVlbigpO1xufTtcblxuY29uc3QgcmV0dXJuVG9NZW51ID0gKCkgPT4ge1xuICByZXR1cm5Gb2N1c1RvR2FtZSgpO1xuICBoaWRlRGlhbG9nKCk7XG4gIGNsZWFyR2FtZUNvbnRhaW5lcigpO1xuICBpbml0aWFsaXplTWFpbk1lbnUoKTtcbn07XG5cbmNvbnN0IHNob3dQYXVzZU1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IHNpdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1jb250YWluZXInKTtcblxuICBjb25zdCBkaWFsb2dPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpYWxvZ092ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLW92ZXJsYXknKTtcblxuICBjb25zdCBkaWFsb2dCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlhbG9nQm94LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZycpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAudGV4dENvbnRlbnQgPSAnR2FtZSBwYXVzZWQnO1xuICBwLmNsYXNzTGlzdC5hZGQoJ21haW4nLCAndGV4dCcpO1xuXG4gIGNvbnN0IGJ0blJlc3VtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5SZXN1bWUuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIGJ0blJlc3VtZS50ZXh0Q29udGVudCA9ICdSZXN1bWUnO1xuICBidG5SZXN1bWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN1bWVHYW1lKTtcblxuICBjb25zdCBidG5SZXN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0blJlc3RhcnQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIGJ0blJlc3RhcnQudGV4dENvbnRlbnQgPSAnUmVzdGFydCc7XG4gIGJ0blJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0R2FtZSk7XG5cbiAgY29uc3QgYnRuTWVudVJldHVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5NZW51UmV0dXJuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICBidG5NZW51UmV0dXJuLnRleHRDb250ZW50ID0gJ1JldHVybiB0byBNZW51JztcbiAgYnRuTWVudVJldHVybi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJldHVyblRvTWVudSk7XG5cbiAgZGlhbG9nQm94LmFwcGVuZENoaWxkKHApO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQoYnRuUmVzdW1lKTtcbiAgZGlhbG9nQm94LmFwcGVuZENoaWxkKGJ0blJlc3RhcnQpO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQoYnRuTWVudVJldHVybik7XG4gIGRpYWxvZ092ZXJsYXkuYXBwZW5kQ2hpbGQoZGlhbG9nQm94KTtcbiAgc2l0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaWFsb2dPdmVybGF5KTtcbn07XG5cbmNvbnN0IGNsaWNrUGF1c2VNZW51ID0gKCkgPT4ge1xuICBsb3NlRm9jdXNGcm9tR2FtZSgpO1xuICBoaWRlUGxheWVySFAoKTtcbiAgc2hvd1BhdXNlTWVudSgpO1xufTtcblxuY29uc3QgY2xpY2tQbGFjZW1lbnRTaGlwID0gKGUpID0+IHtcbiAgY29uc3QgeyBzaGlwIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvckFsbChgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwfVwiYClcbiAgICAuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgfSk7XG4gIGUuY3VycmVudFRhcmdldC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xufTtcblxuY29uc3QgdW5jbGlja1NoaXBQbGFjZW1lbnQgPSAoZSkgPT4ge1xuICBjb25zdCB7IHNoaXAgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKGAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXB9XCJgKVxuICAgIC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGhvdmVyU2hpcFBsYWNlbWVudCA9IChlKSA9PiB7XG4gIGlmIChpc0RyYWdnaW5nU2hpcCkgcmV0dXJuO1xuICBjb25zdCB7IHNoaXAgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKGAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXB9XCJgKVxuICAgIC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgfSk7XG59O1xuXG5jb25zdCB1bmhvdmVyU2hpcFBsYWNlbWVudCA9IChlKSA9PiB7XG4gIGNvbnN0IHsgc2hpcCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcH1cImApXG4gICAgLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGN1cnJlbnRQbGF5ZXJTaGlwcyA9IFtdO1xuXG5jb25zdCBjb25maXJtUGxhY2VtZW50ID0gKCkgPT4ge1xuICBwbGFjZVBsYXllclNoaXBzKGN1cnJlbnRQbGF5ZXIsIGN1cnJlbnRQbGF5ZXJTaGlwcyk7XG4gIGN1cnJlbnRQbGF5ZXJTaGlwcy5sZW5ndGggPSAwO1xuICBoaWRlRGlhbG9nKCk7XG4gIHN3aXRjaFBsYXllcnMoKTtcblxuICBpZiAoXG4gICAgcGxheWVyc1swXS5ib2FyZC5mbGVldC5sZW5ndGggPiAwXG4gICAgJiYgcGxheWVyc1sxXS5ib2FyZC5mbGVldC5sZW5ndGggPiAwXG4gICkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgcmVzZXRTaGlwUGxhY2VtZW50RHJhZ0RhdGEpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVQbGFjZW1lbnRDZWxscyk7XG4gICAgY2xlYXJHYW1lQ29udGFpbmVyKCk7XG4gICAgaW5pdGFsaXplUGxheWVySFBWYWx1ZXMoKTtcbiAgICBpbml0aWFsaXplR2FtZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjdXJyZW50UGxheWVyIGluc3RhbmNlb2YgQUkpIHtcbiAgICBjdXJyZW50UGxheWVyU2hpcHMucHVzaCguLi5BSS5hcnJhbmdlU2hpcHNPbkJvYXJkKHNoaXBzRGF0YSkpO1xuICAgIGNvbmZpcm1QbGFjZW1lbnQoKTtcbiAgfSBlbHNlIHtcbiAgICBjbGVhckdhbWVDb250YWluZXIoKTtcbiAgICBpbml0aWFsaXplR2FtZUNvbnRhaW5lcigpO1xuICAgIGluaXRpYWxpemVTaGlwUGxhY2VtZW50U2NyZWVuKCk7XG4gIH1cbn07XG5cbmNvbnN0IGNsaWNrQ29uZmlybVBsYWNlbWVudCA9ICgpID0+IHtcbiAgY3VycmVudFBsYXllclNoaXBzLmxlbmd0aCA9IDA7XG5cbiAgY29uc3QgcGxhY2VkU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VtZW50LmJvYXJkcyAuY2VsbC5ib3cgLnNwcml0ZS1jb250YWluZXInKTtcbiAgcGxhY2VkU2hpcHMuZm9yRWFjaCgocGxhY2VkU2hpcCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNoaXAsIGxlbmd0aCwgYm93WCwgYm93WSwgaG9yaXpvbnRhbCxcbiAgICB9ID0gcGxhY2VkU2hpcC5wYXJlbnROb2RlLmRhdGFzZXQ7XG4gICAgbGV0IGluc2VydENvb3JkaW5hdGVzO1xuICAgIGlmIChob3Jpem9udGFsID09PSAndHJ1ZScpIHtcbiAgICAgIGluc2VydENvb3JkaW5hdGVzID0gW1xuICAgICAgICArYm93WCAtIE1hdGguY2VpbCgrbGVuZ3RoIC8gMikgKyAxLFxuICAgICAgICArYm93WSxcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc2VydENvb3JkaW5hdGVzID0gW1xuICAgICAgICArYm93WCxcbiAgICAgICAgK2Jvd1kgLSBNYXRoLmNlaWwoK2xlbmd0aCAvIDIpICsgMSxcbiAgICAgIF07XG4gICAgfVxuICAgIGN1cnJlbnRQbGF5ZXJTaGlwcy5wdXNoKHtcbiAgICAgIHR5cGU6IHNoaXAsXG4gICAgICBsZW5ndGg6ICtsZW5ndGgsXG4gICAgICBpbnNlcnRDb29yZGluYXRlcyxcbiAgICAgIGhvcml6b250YWw6IGhvcml6b250YWwgPT09ICd0cnVlJyxcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3Qgc2l0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGRpYWxvZ092ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlhbG9nT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctb3ZlcmxheScpO1xuXG4gIGNvbnN0IGRpYWxvZ0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaWFsb2dCb3guY2xhc3NMaXN0LmFkZCgnZGlhbG9nJyk7XG5cbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAxLmNsYXNzTGlzdC5hZGQoJ3N1YicsICd0ZXh0Jyk7XG4gIHAxLnRleHRDb250ZW50ID0gYFlvdSBoYXZlIHBsYWNlZCAke2N1cnJlbnRQbGF5ZXJTaGlwcy5sZW5ndGh9IHNoaXAocykuYDtcblxuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDIudGV4dENvbnRlbnQgPSAnQ29uZmlybSBwbGFjZW1lbnQ/JztcbiAgcDIuY2xhc3NMaXN0LmFkZCgnbWFpbicsICd0ZXh0Jyk7XG5cbiAgY29uc3QgYnRuWWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0blllcy5jbGFzc0xpc3QuYWRkKCdwbGF5JywgJ2J1dHRvbicpO1xuICBidG5ZZXMudGV4dENvbnRlbnQgPSAnWWVzJztcbiAgYnRuWWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29uZmlybVBsYWNlbWVudCk7XG5cbiAgY29uc3QgYnRuTm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuTm8uY2xhc3NMaXN0LmFkZCgnbWVudScsICdidXR0b24nKTtcbiAgYnRuTm8udGV4dENvbnRlbnQgPSAnTm8nO1xuICBidG5Oby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVEaWFsb2cpO1xuXG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChwMSk7XG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChwMik7XG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChidG5ZZXMpO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQoYnRuTm8pO1xuICBkaWFsb2dPdmVybGF5LmFwcGVuZENoaWxkKGRpYWxvZ0JveCk7XG4gIHNpdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlhbG9nT3ZlcmxheSk7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyc1RvU2hpcENlbGwgPSAoY2VsbCkgPT4ge1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBob3ZlclNoaXBQbGFjZW1lbnQpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB1bmhvdmVyU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xpY2tQbGFjZW1lbnRTaGlwKTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdW5jbGlja1NoaXBQbGFjZW1lbnQpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB1bmNsaWNrU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZHJhZ1NoaXBPblBsYWNlbWVudEJvYXJkKTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZW50ZXInLCBob3ZlclNoaXBQbGFjZW1lbnQpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHVuaG92ZXJTaGlwUGxhY2VtZW50KTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGNsaWNrUGxhY2VtZW50U2hpcCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdW5jbGlja1NoaXBQbGFjZW1lbnQpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHVuY2xpY2tTaGlwUGxhY2VtZW50KTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGRyYWdTaGlwT25QbGFjZW1lbnRCb2FyZCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwT25QbGFjZW1lbnRCb2FyZCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB1bnBsYWNlU2hpcEZyb21QbGFjZW1lbnRCb2FyZCk7XG59O1xuXG5jb25zdCBlbXB0eUNlbGxEYXRhT25QbGFjZW1lbnRCb2FyZCA9IChjZWxsKSA9PiB7XG4gIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYm93Jyk7XG4gIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2hpcCcpO1xuICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sZW5ndGgnKTtcbiAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYm93LXgnKTtcbiAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYm93LXknKTtcbiAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaG9yaXpvbnRhbCcpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBob3ZlclNoaXBQbGFjZW1lbnQpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB1bmhvdmVyU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xpY2tQbGFjZW1lbnRTaGlwKTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdW5jbGlja1NoaXBQbGFjZW1lbnQpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB1bmNsaWNrU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZHJhZ1NoaXBPblBsYWNlbWVudEJvYXJkKTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZW50ZXInLCBob3ZlclNoaXBQbGFjZW1lbnQpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHVuaG92ZXJTaGlwUGxhY2VtZW50KTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGNsaWNrUGxhY2VtZW50U2hpcCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdW5jbGlja1NoaXBQbGFjZW1lbnQpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHVuY2xpY2tTaGlwUGxhY2VtZW50KTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGRyYWdTaGlwT25QbGFjZW1lbnRCb2FyZCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwT25QbGFjZW1lbnRCb2FyZCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB1bnBsYWNlU2hpcEZyb21QbGFjZW1lbnRCb2FyZCk7XG59O1xuXG5jb25zdCByb3RhdGVTaGlwT25QbGFjZW1lbnRCb2FyZCA9IChlKSA9PiB7XG4gIGlmIChlLmRldGFpbCA+IDEpIHJldHVybjtcbiAgaWYgKGlzRHJhZ2dpbmdTaGlwKSByZXR1cm47XG5cbiAgY29uc3Qgcm90YXRlZFNoaXBDZWxsID0gZS5jdXJyZW50VGFyZ2V0O1xuICBjb25zdCB7IHNoaXAsIGxlbmd0aCB9ID0gcm90YXRlZFNoaXBDZWxsLmRhdGFzZXQ7XG4gIGxldCBib3dYID0gK3JvdGF0ZWRTaGlwQ2VsbC5kYXRhc2V0LmJvd1g7XG4gIGxldCBib3dZID0gK3JvdGF0ZWRTaGlwQ2VsbC5kYXRhc2V0LmJvd1k7XG4gIGNvbnN0IHJvdGF0ZWRTaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYWNlbWVudCAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXB9XCJdIC5zcHJpdGUtY29udGFpbmVyYCk7XG4gIGNvbnN0IHJvdGF0ZWRTaGlwQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxhY2VtZW50IC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcH1cIl1gKTtcblxuICByb3RhdGVkU2hpcENlbGxzLmZvckVhY2goKHNoaXBDZWxsKSA9PiB7XG4gICAgZW1wdHlDZWxsRGF0YU9uUGxhY2VtZW50Qm9hcmQoc2hpcENlbGwpO1xuICB9KTtcblxuICBpZiAocm90YXRlZFNoaXBDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICByb3RhdGVkU2hpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJyk7XG4gIH0gZWxzZSB7XG4gICAgcm90YXRlZFNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICB9XG5cbiAgbGV0IHNjYW5VcCA9IHRydWU7XG4gIGxldCBzY2FuUmlnaHQgPSB0cnVlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgK2xlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2hpcENlbGwgPSByb3RhdGVkU2hpcENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2Jvd1ggLSBpfVwiXVtkYXRhLXk9XCIke2Jvd1l9XCJdYClcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtib3dYfVwiXVtkYXRhLXk9XCIke2Jvd1kgLSBpfVwiXWApO1xuICAgIGlmIChcbiAgICAgICFzaGlwQ2VsbFxuICAgICAgfHwgKHNoaXBDZWxsLmRhdGFzZXQuc2hpcCAmJiBzaGlwQ2VsbC5kYXRhc2V0LnNoaXAgIT09IHJvdGF0ZWRTaGlwQ2VsbC5kYXRhc2V0LnNoaXApXG4gICAgKSB7XG4gICAgICBpZiAoYm93WSA9PT0gMCkgc2NhblVwID0gdHJ1ZTtcbiAgICAgIGlmIChib3dZID09PSA5KSBzY2FuVXAgPSBmYWxzZTtcbiAgICAgIGlmIChib3dYID09PSAwKSBzY2FuUmlnaHQgPSB0cnVlO1xuICAgICAgaWYgKGJvd1ggPT09IDkpIHNjYW5SaWdodCA9IGZhbHNlO1xuICAgICAgYm93WSA9IHNjYW5VcCA/IGJvd1kgKyAxIDogYm93WSAtIDE7XG4gICAgICBib3dYID0gc2NhblJpZ2h0ID8gYm93WCArIDEgOiBib3dYIC0gMTtcbiAgICAgIGkgPSAtMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgK2xlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2hpcENlbGwgPSByb3RhdGVkU2hpcENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2Jvd1ggLSBpfVwiXVtkYXRhLXk9XCIke2Jvd1l9XCJdYClcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtib3dYfVwiXVtkYXRhLXk9XCIke2Jvd1kgLSBpfVwiXWApO1xuICAgIGlmICghc2hpcENlbGwpIGNvbnRpbnVlO1xuICAgIGlmICghc2hpcENlbGwuZGF0YXNldC5zaGlwKSB7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBzaGlwQ2VsbC5hcHBlbmRDaGlsZChyb3RhdGVkU2hpcENvbnRhaW5lcik7XG4gICAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoJ2JvdycpO1xuICAgICAgfVxuICAgICAgc2hpcENlbGwuZGF0YXNldC5zaGlwID0gc2hpcDtcbiAgICAgIHNoaXBDZWxsLmRhdGFzZXQubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgc2hpcENlbGwuZGF0YXNldC5ib3dYID0gYm93WDtcbiAgICAgIHNoaXBDZWxsLmRhdGFzZXQuYm93WSA9IGJvd1k7XG4gICAgICBzaGlwQ2VsbC5kYXRhc2V0Lmhvcml6b250YWwgPSByb3RhdGVkU2hpcENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKTtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXJzVG9TaGlwQ2VsbChzaGlwQ2VsbCk7XG4gICAgfVxuICB9XG59O1xuXG5sZXQgaXNEcmFnZ2luZ1NoaXAgPSBmYWxzZTtcbmxldCBkcmFnZ2VkU2hpcENvbnRhaW5lciA9IG51bGw7XG5sZXQgZHJhZ2dlZFNoaXBDZWxsID0gbnVsbDtcbmxldCBkcmFnZ2VkU2hpcENlbGxzID0gbnVsbDtcblxuY29uc3QgcmVzZXRTaGlwUGxhY2VtZW50RHJhZ0RhdGEgPSAoKSA9PiB7XG4gIGlzRHJhZ2dpbmdTaGlwID0gZmFsc2U7XG4gIGRyYWdnZWRTaGlwQ29udGFpbmVyID0gbnVsbDtcbiAgZHJhZ2dlZFNoaXBDZWxsID0gbnVsbDtcbiAgZHJhZ2dlZFNoaXBDZWxscyA9IG51bGw7XG59O1xuXG5jb25zdCBkcmFnU2hpcE9uUGxhY2VtZW50Qm9hcmQgPSAoZSkgPT4ge1xuICBpc0RyYWdnaW5nU2hpcCA9IHRydWU7XG4gIGRyYWdnZWRTaGlwQ2VsbCA9IGUuY3VycmVudFRhcmdldDtcblxuICBjb25zdCB7IHNoaXAgfSA9IGRyYWdnZWRTaGlwQ2VsbC5kYXRhc2V0O1xuICBkcmFnZ2VkU2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwfVwiXSAuc3ByaXRlLWNvbnRhaW5lcmApO1xuICBkcmFnZ2VkU2hpcENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnBsYWNlbWVudCAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXB9XCJdYCk7XG5cbiAgZHJhZ2dlZFNoaXBDZWxsLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG59O1xuXG5jb25zdCBtb3ZlRHJhZ2dlZFNoaXBPblBsYWNlbWVudEJvYXJkID0gKGUpID0+IHtcbiAgaWYgKCFpc0RyYWdnaW5nU2hpcCkgcmV0dXJuO1xuXG4gIGNvbnN0IHsgeCwgeSB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gIGNvbnN0IHsgc2hpcCwgbGVuZ3RoIH0gPSBkcmFnZ2VkU2hpcENlbGwuZGF0YXNldDtcbiAgY29uc3QgYm93WCA9ICt4ICsgK2RyYWdnZWRTaGlwQ2VsbC5kYXRhc2V0LmJvd1ggLSBkcmFnZ2VkU2hpcENlbGwuZGF0YXNldC54O1xuICBjb25zdCBib3dZID0gK3kgKyArZHJhZ2dlZFNoaXBDZWxsLmRhdGFzZXQuYm93WSAtIGRyYWdnZWRTaGlwQ2VsbC5kYXRhc2V0Lnk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCArbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaGlwQ2VsbCA9IGRyYWdnZWRTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7Ym93WCAtIGl9XCJdW2RhdGEteT1cIiR7Ym93WX1cIl1gKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2Jvd1h9XCJdW2RhdGEteT1cIiR7Ym93WSAtIGl9XCJdYCk7XG4gICAgaWYgKFxuICAgICAgIXNoaXBDZWxsXG4gICAgICB8fCAoc2hpcENlbGwuZGF0YXNldC5zaGlwICYmIHNoaXBDZWxsLmRhdGFzZXQuc2hpcCAhPT0gZHJhZ2dlZFNoaXBDZWxsLmRhdGFzZXQuc2hpcClcbiAgICApIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGJvd0NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxhY2VtZW50IC5jZWxsW2RhdGEteD1cIiR7Ym93WH1cIl1bZGF0YS15PVwiJHtib3dZfVwiXWApO1xuICBpZiAoIWJvd0NlbGwpIHJldHVybjtcbiAgYm93Q2VsbC5hcHBlbmRDaGlsZChkcmFnZ2VkU2hpcENvbnRhaW5lcik7XG5cbiAgZHJhZ2dlZFNoaXBDZWxscy5mb3JFYWNoKChzaGlwQ2VsbCkgPT4ge1xuICAgIGVtcHR5Q2VsbERhdGFPblBsYWNlbWVudEJvYXJkKHNoaXBDZWxsKTtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCArbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaGlwQ2VsbCA9IGRyYWdnZWRTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7Ym93WCAtIGl9XCJdW2RhdGEteT1cIiR7Ym93WX1cIl1gKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2Jvd1h9XCJdW2RhdGEteT1cIiR7Ym93WSAtIGl9XCJdYCk7XG4gICAgaWYgKCFzaGlwQ2VsbCkgeyBjb250aW51ZTsgfVxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKCdib3cnKTtcbiAgICB9XG4gICAgaWYgKCFzaGlwQ2VsbC5kYXRhc2V0LnNoaXApIHtcbiAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICBzaGlwQ2VsbC5kYXRhc2V0LnNoaXAgPSBzaGlwO1xuICAgICAgc2hpcENlbGwuZGF0YXNldC5sZW5ndGggPSBsZW5ndGg7XG4gICAgICBzaGlwQ2VsbC5kYXRhc2V0LmJvd1ggPSBib3dYO1xuICAgICAgc2hpcENlbGwuZGF0YXNldC5ib3dZID0gYm93WTtcbiAgICAgIHNoaXBDZWxsLmRhdGFzZXQuaG9yaXpvbnRhbCA9IGRyYWdnZWRTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpO1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcnNUb1NoaXBDZWxsKHNoaXBDZWxsKTtcbiAgICB9XG4gIH1cblxuICBkcmFnZ2VkU2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwfVwiXSAuc3ByaXRlLWNvbnRhaW5lcmApO1xuICBkcmFnZ2VkU2hpcENlbGwgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gIGRyYWdnZWRTaGlwQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxhY2VtZW50IC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcH1cIl1gKTtcbn07XG5cbmNvbnN0IGNoZWNrRm9yQXRMZWFzdE9uZVNoaXBPblBsYWNlbWVudEJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBoYXNTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcy5wbGFjZW1lbnQgLnNwcml0ZS1jb250YWluZXInKTtcbiAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFjZW1lbnRDb25maXJtQnRuJyk7XG4gIGlmIChoYXNTaGlwKSB7XG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ29uZmlybVBsYWNlbWVudCk7XG4gICAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpcm1CdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NvbmZpcm1QbGFjZW1lbnQpO1xuICAgIGNvbmZpcm1CdXR0b24uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgfVxufTtcblxuY29uc3QgdW5wbGFjZVNoaXBGcm9tUGxhY2VtZW50Qm9hcmQgPSAoZSkgPT4ge1xuICBjb25zdCB7IHNoaXAgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICBjb25zdCB1bnBsYWNlZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQuaW5mbyAuY29udGFpbmVyW2RhdGEtc2hpcD1cIiR7c2hpcH1cIl1gKTtcbiAgY29uc3QgdW5wbGFjZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYWNlbWVudC5pbmZvIC5jb250YWluZXJbZGF0YS1zaGlwPVwiJHtzaGlwfVwiXSAuY2VsbDpsYXN0LWNoaWxkYCk7XG4gIGNvbnN0IHNwcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwfVwiXSAuc3ByaXRlLWNvbnRhaW5lcmApO1xuICBjb25zdCBzaGlwQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxhY2VtZW50IC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcH1cIl1gKTtcbiAgc2hpcENlbGxzLmZvckVhY2goKHNoaXBDZWxsKSA9PiB7XG4gICAgZW1wdHlDZWxsRGF0YU9uUGxhY2VtZW50Qm9hcmQoc2hpcENlbGwpO1xuICB9KTtcbiAgc3ByaXRlLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcbiAgdW5wbGFjZWRDZWxsLmFwcGVuZENoaWxkKHNwcml0ZSk7XG4gIHVucGxhY2VkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3VucGxhY2VkJyk7XG4gIHVucGxhY2VkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VTaGlwT25QbGFjZW1lbnRCb2FyZCwgeyBvbmNlOiB0cnVlIH0pO1xuICBjaGVja0ZvckF0TGVhc3RPbmVTaGlwT25QbGFjZW1lbnRCb2FyZCgpO1xufTtcblxuY29uc3QgcmVzZXRQbGFjZW1lbnRCb2FyZCA9ICgpID0+IHtcbiAgc2hpcHNEYXRhLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjb25zdCB1bnBsYWNlZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQuaW5mbyAuY29udGFpbmVyW2RhdGEtc2hpcD1cIiR7c2hpcC50eXBlfVwiXWApO1xuICAgIGNvbnN0IHVucGxhY2VkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQuaW5mbyAuY29udGFpbmVyW2RhdGEtc2hpcD1cIiR7c2hpcC50eXBlfVwiXSAuY2VsbDpsYXN0LWNoaWxkYCk7XG4gICAgY29uc3Qgc3ByaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYWNlbWVudCAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXAudHlwZX1cIl0gLnNwcml0ZS1jb250YWluZXJgKTtcbiAgICBpZiAoc3ByaXRlKSB7XG4gICAgICBjb25zdCBzaGlwQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxhY2VtZW50IC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcC50eXBlfVwiXWApO1xuICAgICAgc2hpcENlbGxzLmZvckVhY2goKHNoaXBDZWxsKSA9PiB7XG4gICAgICAgIGVtcHR5Q2VsbERhdGFPblBsYWNlbWVudEJvYXJkKHNoaXBDZWxsKTtcbiAgICAgIH0pO1xuICAgICAgc3ByaXRlLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcbiAgICAgIHVucGxhY2VkQ2VsbC5hcHBlbmRDaGlsZChzcHJpdGUpO1xuICAgICAgdW5wbGFjZWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndW5wbGFjZWQnKTtcbiAgICAgIHVucGxhY2VkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VTaGlwT25QbGFjZW1lbnRCb2FyZCwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH1cbiAgfSk7XG4gIGNoZWNrRm9yQXRMZWFzdE9uZVNoaXBPblBsYWNlbWVudEJvYXJkKCk7XG59O1xuXG5jb25zdCBwbGFjZVNoaXBPblBsYWNlbWVudEJvYXJkID0gKGUpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZS5jdXJyZW50VGFyZ2V0O1xuICBjb25zdCB7IHNoaXAsIGxlbmd0aCB9ID0gY29udGFpbmVyLmRhdGFzZXQ7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd1bnBsYWNlZCcpO1xuXG4gIGNvbnN0IHNwcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQgW2RhdGEtc2hpcD1cIiR7c2hpcH1cIl0gLmNlbGwgLnNwcml0ZS1jb250YWluZXJgKTtcbiAgbGV0IGJvd1ggPSA5O1xuICBsZXQgYm93WSA9IDk7XG5cbiAgLy8gQ2hlY2sgZm9yIHZhbGlkIGluaXRpYWwgcGxhY2VtZW50XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaGlwQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7Ym93WCAtIGl9XCJdW2RhdGEteT1cIiR7Ym93WX1cIl1gKTtcbiAgICBpZiAoIXNoaXBDZWxsKSB7XG4gICAgICBib3dYID0gOTtcbiAgICAgIGJvd1kgLT0gMTtcbiAgICAgIGkgPSAtMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoc2hpcENlbGwuZGF0YXNldC5zaGlwKSB7XG4gICAgICBib3dYIC09IDE7XG4gICAgICBpID0gLTE7XG4gICAgfVxuICB9XG5cbiAgLy8gQWN0dWFsbHkgcGxhY2Ugc3ByaXRlIG9uIHN1Y2Nlc3NcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNoaXBDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtib3dYIC0gaX1cIl1bZGF0YS15PVwiJHtib3dZfVwiXWApO1xuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBzaGlwQ2VsbC5hcHBlbmRDaGlsZChzcHJpdGUpO1xuICAgICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZCgnYm93Jyk7XG4gICAgfVxuICAgIHNoaXBDZWxsLmRhdGFzZXQuc2hpcCA9IHNoaXA7XG4gICAgc2hpcENlbGwuZGF0YXNldC5sZW5ndGggPSBsZW5ndGg7XG4gICAgc2hpcENlbGwuZGF0YXNldC5ib3dYID0gYm93WDtcbiAgICBzaGlwQ2VsbC5kYXRhc2V0LmJvd1kgPSBib3dZO1xuICAgIHNoaXBDZWxsLmRhdGFzZXQuaG9yaXpvbnRhbCA9IHNwcml0ZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKTtcbiAgICBhZGRFdmVudExpc3RlbmVyc1RvU2hpcENlbGwoc2hpcENlbGwpO1xuICB9XG4gIGNoZWNrRm9yQXRMZWFzdE9uZVNoaXBPblBsYWNlbWVudEJvYXJkKCk7XG59O1xuXG5jb25zdCByZXNpemVQbGFjZW1lbnRDZWxscyA9ICgpID0+IHtcbiAgY29uc3QgYm93Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZW1lbnQgLmNlbGwnKTtcbiAgY29uc3QgcGxhY2VtZW50Q2VsbFdpZHRoID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoYm93Q2VsbCkud2lkdGg7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wbGFjZW1lbnQtY2VsbC13aWR0aCcsIHBsYWNlbWVudENlbGxXaWR0aCk7XG59O1xuXG5jb25zdCBpbml0aWFsaXplU2hpcFBsYWNlbWVudFNjcmVlbiA9ICgpID0+IHtcbiAgcHJldmlvdXNIaXRDZWxsID0gWy0xLCAtMV07XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgcmVzZXRTaGlwUGxhY2VtZW50RHJhZ0RhdGEpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplUGxhY2VtZW50Q2VsbHMpO1xuICBjb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbiAgY29uc3QgcGxhY2VtZW50SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwbGFjZW1lbnRJbmZvLmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudCcsICdpbmZvJyk7XG5cbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAxLnRleHRDb250ZW50ID0gY3VycmVudFBsYXllci5uYW1lO1xuXG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMi50ZXh0Q29udGVudCA9ICdBcnJhbmdlIHlvdXIgZmxlZXQgb24gdGhlIGJhdHRsZWZpZWxkISc7XG5cbiAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAzLnRleHRDb250ZW50ID0gJ1NoaXBzIGF2YWlsYWJsZTonO1xuXG4gIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNoaXBzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NoaXBzJyk7XG5cbiAgc2hpcHNEYXRhLmZvckVhY2goKHNoaXBEYXRhKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicsICd1bnBsYWNlZCcpO1xuICAgIGNvbnRhaW5lci5kYXRhc2V0LnNoaXAgPSBzaGlwRGF0YS50eXBlO1xuICAgIGNvbnRhaW5lci5kYXRhc2V0Lmxlbmd0aCA9IHNoaXBEYXRhLmxlbmd0aDtcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVNoaXBPblBsYWNlbWVudEJvYXJkLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzaGlwRGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG5cbiAgICAgIGlmIChpID09PSBzaGlwRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgc3ByaXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNwcml0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzcHJpdGUtY29udGFpbmVyJyk7XG4gICAgICAgIHNwcml0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG5cbiAgICAgICAgY29uc3Qgc2hpcFNwcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBzaGlwU3ByaXRlLnNyYyA9IHNoaXBEYXRhLnNyYztcbiAgICAgICAgc2hpcFNwcml0ZS5jbGFzc0xpc3QuYWRkKCdzcHJpdGUnKTtcbiAgICAgICAgc2hpcFNwcml0ZS5kcmFnZ2FibGUgPSBmYWxzZTtcblxuICAgICAgICBzcHJpdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcFNwcml0ZSk7XG4gICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoc3ByaXRlQ29udGFpbmVyKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdib3cnKTtcbiAgICAgIH1cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gICAgc2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgcGxhY2VtZW50SW5mby5hcHBlbmRDaGlsZChwMSk7XG4gIHBsYWNlbWVudEluZm8uYXBwZW5kQ2hpbGQocDIpO1xuICBwbGFjZW1lbnRJbmZvLmFwcGVuZENoaWxkKHAzKTtcbiAgcGxhY2VtZW50SW5mby5hcHBlbmRDaGlsZChzaGlwc0NvbnRhaW5lcik7XG4gIGdhbWUuYXBwZW5kQ2hpbGQocGxhY2VtZW50SW5mbyk7XG5cbiAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcycpO1xuICBib2FyZHMuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50Jyk7XG5cbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcblxuICBmb3IgKGxldCBpID0gOTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgY2VsbC5kYXRhc2V0LnggPSBqO1xuICAgICAgY2VsbC5kYXRhc2V0LnkgPSBpO1xuICAgICAgY2VsbC5kYXRhc2V0LnBsYXllck5hbWUgPSBjdXJyZW50UGxheWVyLm5hbWU7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBtb3ZlRHJhZ2dlZFNoaXBPblBsYWNlbWVudEJvYXJkKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmVudGVyJywgbW92ZURyYWdnZWRTaGlwT25QbGFjZW1lbnRCb2FyZCk7XG4gICAgICBib2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH1cbiAgYm9hcmRzLmFwcGVuZENoaWxkKGJvYXJkKTtcblxuICBjb25zdCBwbGFjZW1lbnRCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBsYWNlbWVudEJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50JywgJ2J1dHRvbnMnKTtcblxuICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSAnUmVzZXQnO1xuICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UGxhY2VtZW50Qm9hcmQpO1xuXG4gIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnZGlzYWJsZWQnKTtcbiAgY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcbiAgY29uZmlybUJ1dHRvbi5pZCA9ICdwbGFjZW1lbnRDb25maXJtQnRuJztcblxuICBwbGFjZW1lbnRCdXR0b25zLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbiAgcGxhY2VtZW50QnV0dG9ucy5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcbiAgZ2FtZS5hcHBlbmRDaGlsZChwbGFjZW1lbnRCdXR0b25zKTtcblxuICByZXNpemVTcHJpdGVzKCk7XG4gIHJlc2l6ZVBsYWNlbWVudENlbGxzKCk7XG59O1xuXG5jb25zdCBjbGVhckdhbWVDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuICB3aGlsZSAoZ2FtZS5maXJzdENoaWxkKSB7XG4gICAgZ2FtZS5yZW1vdmVDaGlsZChnYW1lLmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBpbml0aWFsaXplR2FtZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XG5cbiAgY29uc3Qgc2V0dGluZ3NCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2V0dGluZ3NCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3MtYnRuLWNvbnRhaW5lcicsICdtYXgtd2lkdGgnKTtcblxuICBjb25zdCBzZXR0aW5nc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzZXR0aW5nc0J0bi5jbGFzc0xpc3QuYWRkKCdzZXR0aW5ncy1idG4nKTtcbiAgc2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja1BhdXNlTWVudSk7XG5cbiAgY29uc3Qgc2V0dGluZ3NCdG5TVkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcblxuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmRzLmNsYXNzTGlzdC5hZGQoJ2JvYXJkcycsICdtYXgtd2lkdGgnKTtcblxuICBzZXR0aW5nc0J0bi5hcHBlbmRDaGlsZChzZXR0aW5nc0J0blNWRyk7XG4gIHNldHRpbmdzQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldHRpbmdzQnRuKTtcbiAgZ2FtZS5hcHBlbmRDaGlsZChzZXR0aW5nc0J0bkNvbnRhaW5lcik7XG4gIGdhbWUuYXBwZW5kQ2hpbGQoYm9hcmRzKTtcblxuICBzZXR0aW5nc0J0blNWRy5vdXRlckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jb2c8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsMTUuNUEzLjUsMy41IDAgMCwxIDguNSwxMkEzLjUsMy41IDAgMCwxIDEyLDguNUEzLjUsMy41IDAgMCwxIDE1LjUsMTJBMy41LDMuNSAwIDAsMSAxMiwxNS41TTE5LjQzLDEyLjk3QzE5LjQ3LDEyLjY1IDE5LjUsMTIuMzMgMTkuNSwxMkMxOS41LDExLjY3IDE5LjQ3LDExLjM0IDE5LjQzLDExTDIxLjU0LDkuMzdDMjEuNzMsOS4yMiAyMS43OCw4Ljk1IDIxLjY2LDguNzNMMTkuNjYsNS4yN0MxOS41NCw1LjA1IDE5LjI3LDQuOTYgMTkuMDUsNS4wNUwxNi41Niw2LjA1QzE2LjA0LDUuNjYgMTUuNSw1LjMyIDE0Ljg3LDUuMDdMMTQuNSwyLjQyQzE0LjQ2LDIuMTggMTQuMjUsMiAxNCwySDEwQzkuNzUsMiA5LjU0LDIuMTggOS41LDIuNDJMOS4xMyw1LjA3QzguNSw1LjMyIDcuOTYsNS42NiA3LjQ0LDYuMDVMNC45NSw1LjA1QzQuNzMsNC45NiA0LjQ2LDUuMDUgNC4zNCw1LjI3TDIuMzQsOC43M0MyLjIxLDguOTUgMi4yNyw5LjIyIDIuNDYsOS4zN0w0LjU3LDExQzQuNTMsMTEuMzQgNC41LDExLjY3IDQuNSwxMkM0LjUsMTIuMzMgNC41MywxMi42NSA0LjU3LDEyLjk3TDIuNDYsMTQuNjNDMi4yNywxNC43OCAyLjIxLDE1LjA1IDIuMzQsMTUuMjdMNC4zNCwxOC43M0M0LjQ2LDE4Ljk1IDQuNzMsMTkuMDMgNC45NSwxOC45NUw3LjQ0LDE3Ljk0QzcuOTYsMTguMzQgOC41LDE4LjY4IDkuMTMsMTguOTNMOS41LDIxLjU4QzkuNTQsMjEuODIgOS43NSwyMiAxMCwyMkgxNEMxNC4yNSwyMiAxNC40NiwyMS44MiAxNC41LDIxLjU4TDE0Ljg3LDE4LjkzQzE1LjUsMTguNjcgMTYuMDQsMTguMzQgMTYuNTYsMTcuOTRMMTkuMDUsMTguOTVDMTkuMjcsMTkuMDMgMTkuNTQsMTguOTUgMTkuNjYsMTguNzNMMjEuNjYsMTUuMjdDMjEuNzgsMTUuMDUgMjEuNzMsMTQuNzggMjEuNTQsMTQuNjNMMTkuNDMsMTIuOTdaXCIgLz48L3N2Zz4nO1xufTtcblxuY29uc3QgcHJpbnRQcmV2aW91c1BsYXllckF0dGFjayA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgW3gsIHldID0gcHJldmlvdXNIaXRDZWxsO1xuICBjb25zdCBjdXJyZW50UGxheWVySGl0Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ib2FyZC5jdXJyZW50IC5jZWxsW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xuICBpZiAoIWN1cnJlbnRQbGF5ZXJIaXRDZWxsKSByZXR1cm47XG4gIGlmIChjdXJyZW50UGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcCkge1xuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gY3VycmVudFBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXA7XG4gICAgaWYgKGN1cnJlbnRTaGlwLmhhc1N1bmspIHtcbiAgICAgIHByaW50U2lua2luZ1Nwcml0ZShjdXJyZW50U2hpcCk7XG4gICAgfVxuICB9XG4gIGF3YWl0IGhpdEV4cGxvc2lvbkVmZmVjdChjdXJyZW50UGxheWVySGl0Q2VsbCk7XG4gIGlmIChjdXJyZW50UGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcCkge1xuICAgIGN1cnJlbnRQbGF5ZXJIaXRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgIGlmIChjdXJyZW50UGxheWVySGl0Q2VsbC5kYXRhc2V0LnNoaXApIGFkZEZpcmVFZmZlY3QoY3VycmVudFBsYXllckhpdENlbGwpO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRQbGF5ZXJIaXRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICBhZGRNaXNzTWFyayhjdXJyZW50UGxheWVySGl0Q2VsbCk7XG4gIH1cbn07XG5cbmNvbnN0IGluaXRpYWxpemVCb2FyZCA9IGFzeW5jICgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZVNwcml0ZXMpO1xuICBbY3VycmVudFBsYXllciwgdGFyZ2V0UGxheWVyXS5mb3JFYWNoKGFzeW5jIChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzJyk7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICAgIGlmIChwbGF5ZXIgPT09IGN1cnJlbnRQbGF5ZXIpIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICBpZiAocGxheWVyID09PSB0YXJnZXRQbGF5ZXIpIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ3RhcmdldCcpO1xuXG4gICAgZm9yIChsZXQgeSA9IDk7IHkgPj0gMDsgeSAtPSAxKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4ICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgY2VsbC5kYXRhc2V0LnggPSB4O1xuICAgICAgICBjZWxsLmRhdGFzZXQueSA9IHk7XG4gICAgICAgIGNlbGwuZGF0YXNldC5wbGF5ZXJOYW1lID0gcGxheWVyLm5hbWU7XG4gICAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gcGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcFxuICAgICAgICAgID8gcGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcC50eXBlXG4gICAgICAgICAgOiAnJztcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllciA9PT0gdGFyZ2V0UGxheWVyXG4gICAgICAgICAgJiYgY3VycmVudFBsYXllciBpbnN0YW5jZW9mIFBsYXllclxuICAgICAgICAgICYmICEoY3VycmVudFBsYXllciBpbnN0YW5jZW9mIEFJKVxuICAgICAgICApIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaXRDZWxsUGxheWVyKTtcblxuICAgICAgICBjb25zdCBbcHJldlgsIHByZXZZXSA9IHByZXZpb3VzSGl0Q2VsbDtcbiAgICAgICAgaWYgKHBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXAgJiYgcGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcC5oYXNTdW5rKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcblxuICAgICAgICBpZiAoISgocHJldlggPT09IHggJiYgcHJldlkgPT09IHkpICYmIChwbGF5ZXIgPT09IGN1cnJlbnRQbGF5ZXIpKSkge1xuICAgICAgICAgIGlmIChwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5pc0hpdCAmJiBwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5zaGlwKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgaWYgKCFwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5zaGlwLmhhc1N1bmspIGFkZEZpcmVFZmZlY3QoY2VsbCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5pc0hpdCAmJiAhcGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcCkge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICBhZGRNaXNzTWFyayhjZWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYm9hcmRzLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgfSk7XG4gIHByaW50U3ByaXRlcygpO1xuICBpZiAocGxheWVycy5ldmVyeSgocGxheWVyKSA9PiAhKHBsYXllciBpbnN0YW5jZW9mIEFJKSkpIHtcbiAgICB1cGRhdGVQbGF5ZXJzSFBPblR1cm5TdGFydCgpO1xuICAgIGNvbnN0IFtwcmV2WCwgcHJldlldID0gcHJldmlvdXNIaXRDZWxsO1xuICAgIGlmIChwcmV2WCAhPT0gLTEgJiYgcHJldlkgIT09IC0xKSB7XG4gICAgICBpZiAoY3VycmVudFBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3ByZXZYXVtwcmV2WV0uc2hpcCkgYW5pbWF0ZUN1cnJlbnRQbGF5ZXJIUEhpdE9uVHVyblN0YXJ0KCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcHJpbnRQcmV2aW91c1BsYXllckF0dGFjaygpO1xuICAgIH0sIDUwMCk7XG4gIH1cbn07XG5cbmNvbnN0IGhpZGVQbGF5ZXJIUCA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyc0hQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1pbmZvJyk7XG4gIHBsYXllcnNIUC5mb3JFYWNoKChwbGF5ZXJIUCkgPT4gcGxheWVySFAuY2xhc3NMaXN0LmFkZCgndmlzaWJpbGl0eS1oaWRkZW4nKSk7XG59O1xuXG5jb25zdCB1bmhpZGVQbGF5ZXJIUCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XG4gIGNvbnN0IHBsYXllcnNIUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItaW5mbycpO1xuICBnYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICBwbGF5ZXJzSFAuZm9yRWFjaCgocGxheWVySFApID0+IHBsYXllckhQLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2liaWxpdHktaGlkZGVuJykpO1xuICB9LCB7IG9uY2U6IHRydWUgfSk7XG59O1xuXG5jb25zdCBpbml0YWxpemVQbGF5ZXJIUFZhbHVlcyA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWN1cnJlbnQtaGVhbHRoJywgJzEwMCUnKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWN1cnJlbnQtaGl0JywgJzAlJyk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jdXJyZW50LWVtcHR5JywgJzAlJyk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1lbmVteS1oZWFsdGgnLCAnMTAwJScpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZW5lbXktaGl0JywgJzAlJyk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1lbmVteS1lbXB0eScsICcwJScpO1xufTtcblxuY29uc3QgYW5pbWF0ZUN1cnJlbnRQbGF5ZXJIUEhpdE9uVHVyblN0YXJ0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB0b3RhbEhQID0gY3VycmVudFBsYXllclxuICAgIC5ib2FyZFxuICAgIC5mbGVldFxuICAgIC5yZWR1Y2UoKHRvdGFsLCBzaGlwKSA9PiB0b3RhbCArIHNoaXAubGVuZ3RoLCAwKTtcbiAgY29uc3QgY3VycmVudEhQID0gY3VycmVudFBsYXllclxuICAgIC5ib2FyZFxuICAgIC5mbGVldFxuICAgIC5yZWR1Y2UoKHRvdGFsLCBzaGlwKSA9PiB0b3RhbCAtIHNoaXAuaGl0cywgdG90YWxIUCk7XG4gIGNvbnN0IGhlYWx0aCA9IGAke01hdGgucm91bmQoKGN1cnJlbnRIUCAvIHRvdGFsSFApICogMTAwKX0lYDtcbiAgY29uc3QgaGl0ID0gYCR7TWF0aC5yb3VuZCgoMSAvIHRvdGFsSFApICogMTAwKX0lYDtcbiAgY29uc3QgZW1wdHkgPSBgJHtNYXRoLnJvdW5kKCgxIC0gY3VycmVudEhQIC8gdG90YWxIUCkgKiAxMDApfSVgO1xuXG4gIGNvbnN0IHBsYXllckhlYWx0aFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCAuaGVhbHRoID4gLnRleHQgJyk7XG5cbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBpbml0SGVhbHRoID0gYCR7TWF0aC5yb3VuZCgoKGN1cnJlbnRIUCArIDEpIC8gdG90YWxIUCkgKiAxMDApfSVgO1xuICAgIGNvbnN0IGluaXRFbXB0eSA9IGAke01hdGgucm91bmQoKDEgLSAoY3VycmVudEhQICsgMSkgLyB0b3RhbEhQKSAqIDEwMCl9JWA7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWN1cnJlbnQtaGVhbHRoJywgaW5pdEhlYWx0aCk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWN1cnJlbnQtZW1wdHknLCBpbml0RW1wdHkpO1xuICAgIHBsYXllckhlYWx0aFRleHQudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50SFAgKyAxfS8ke3RvdGFsSFB9YDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG5cbiAgcGxheWVySGVhbHRoVGV4dC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRIUH0vJHt0b3RhbEhQfWA7XG5cbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWN1cnJlbnQtaGVhbHRoJywgaGVhbHRoKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWN1cnJlbnQtaGl0JywgaGl0KTtcblxuICBjb25zdCBwbGF5ZXJIZWFsdGhCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCAuaGVhbHRoID4gLmJhciAnKTtcbiAgcGxheWVySGVhbHRoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWN1cnJlbnQtaGl0JywgJzAlJyk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWN1cnJlbnQtZW1wdHknLCBlbXB0eSk7XG4gIH0sIHsgb25jZTogdHJ1ZSB9KTtcbn07XG5cbmNvbnN0IHVwZGF0ZVBsYXllcnNIUE9uVHVyblN0YXJ0ID0gYXN5bmMgKCkgPT4ge1xuICBwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHRhZyA9IGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllclxuICAgICAgPyAnY3VycmVudCdcbiAgICAgIDogJ2VuZW15JztcbiAgICBjb25zdCB0b3RhbEhQID0gcGxheWVyXG4gICAgICAuYm9hcmRcbiAgICAgIC5mbGVldFxuICAgICAgLnJlZHVjZSgodG90YWwsIHNoaXApID0+IHRvdGFsICsgc2hpcC5sZW5ndGgsIDApO1xuICAgIGNvbnN0IGN1cnJlbnRIUCA9IHBsYXllclxuICAgICAgLmJvYXJkXG4gICAgICAuZmxlZXRcbiAgICAgIC5yZWR1Y2UoKHRvdGFsLCBzaGlwKSA9PiB0b3RhbCAtIHNoaXAuaGl0cywgdG90YWxIUCk7XG4gICAgY29uc3QgaGVhbHRoID0gYCR7TWF0aC5yb3VuZCgoY3VycmVudEhQIC8gdG90YWxIUCkgKiAxMDApfSVgO1xuICAgIGNvbnN0IGVtcHR5ID0gYCR7TWF0aC5yb3VuZCgoMSAtIGN1cnJlbnRIUCAvIHRvdGFsSFApICogMTAwKX0lYDtcblxuICAgIGNvbnN0IHBsYXllckhlYWx0aFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YWd9IC5oZWFsdGggPiAudGV4dCBgKTtcbiAgICBwbGF5ZXJIZWFsdGhUZXh0LnRleHRDb250ZW50ID0gYCR7Y3VycmVudEhQfS8ke3RvdGFsSFB9YDtcblxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke3RhZ30taGVhbHRoYCwgaGVhbHRoKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHt0YWd9LWhpdGAsICcwJScpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke3RhZ30tZW1wdHlgLCBlbXB0eSk7XG4gIH0pO1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZVBsYXllckhQID0gKCkgPT4ge1xuICBjb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbiAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCB0YWcgPSBjdXJyZW50UGxheWVyID09PSBwbGF5ZXIgPyAnY3VycmVudCcgOiAnZW5lbXknO1xuXG4gICAgY29uc3QgcGxheWVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllckluZm8uY2xhc3NMaXN0LmFkZCh0YWcsICdwbGF5ZXItaW5mbycpO1xuXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDEudGV4dENvbnRlbnQgPSB0YWcgPT09ICdjdXJyZW50JyA/ICdBbGxpZWQgZmxlZXQnIDogJ0VuZW15IGZsZWV0JztcblxuICAgIGNvbnN0IGhlYWx0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWx0aC5jbGFzc0xpc3QuYWRkKCdoZWFsdGgnKTtcblxuICAgIGNvbnN0IHRvdGFsSFAgPSBwbGF5ZXJcbiAgICAgIC5ib2FyZFxuICAgICAgLmZsZWV0XG4gICAgICAucmVkdWNlKCh0b3RhbCwgc2hpcCkgPT4gdG90YWwgKyBzaGlwLmxlbmd0aCwgMCk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gYCR7dG90YWxIUH0vJHt0b3RhbEhQfWA7XG5cbiAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYXIuY2xhc3NMaXN0LmFkZCgnYmFyJyk7XG5cbiAgICBjb25zdCBoaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoaXQuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG5cbiAgICBjb25zdCBlbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVtcHR5LmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG5cbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMi50ZXh0Q29udGVudCA9IHBsYXllci5uYW1lO1xuXG4gICAgaGVhbHRoLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGhlYWx0aC5hcHBlbmRDaGlsZChiYXIpO1xuICAgIGhlYWx0aC5hcHBlbmRDaGlsZChoaXQpO1xuICAgIGhlYWx0aC5hcHBlbmRDaGlsZChlbXB0eSk7XG4gICAgcGxheWVySW5mby5hcHBlbmRDaGlsZChwMSk7XG4gICAgcGxheWVySW5mby5hcHBlbmRDaGlsZChoZWFsdGgpO1xuICAgIHBsYXllckluZm8uYXBwZW5kQ2hpbGQocDIpO1xuICAgIGdhbWUuYXBwZW5kQ2hpbGQocGxheWVySW5mbyk7XG4gIH0pO1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZUdhbWUgPSAoKSA9PiB7XG4gIGluaXRpYWxpemVHYW1lQ29udGFpbmVyKCk7XG4gIGluaXRpYWxpemVQbGF5ZXJIUCgpO1xuICBpbml0aWFsaXplQm9hcmQoKTtcbn07XG5cbmNvbnN0IGNsZWFyTWFpbk1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbWVudScpO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIG1haW5NZW51LmNsYXNzTGlzdC5hZGQoJ2NsaWNrLXNpbmsnKTtcbiAgICBtYWluTWVudS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICBtYWluTWVudS5yZW1vdmUoKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gIH0pO1xufTtcblxuY29uc3Qgc3RhcnRHYW1lUGxheWVyID0gYXN5bmMgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwbGF5ZXIxTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxTmFtZUlucHV0JykudmFsdWVcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxTmFtZUlucHV0JykudmFsdWVcbiAgICA6ICdQbGF5ZXIgMSc7XG4gIGNvbnN0IHBsYXllcjJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjJOYW1lSW5wdXQnKS52YWx1ZVxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjJOYW1lSW5wdXQnKS52YWx1ZVxuICAgIDogJ1BsYXllciAyJztcblxuICBnZW5lcmF0ZVBsYXllcnMoXG4gICAgW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnaHVtYW4nLFxuICAgICAgICBuYW1lOiBwbGF5ZXIxTmFtZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdodW1hbicsXG4gICAgICAgIG5hbWU6IHBsYXllcjJOYW1lLFxuICAgICAgfSxcbiAgICBdLFxuICApO1xuXG4gIFtjdXJyZW50UGxheWVyLCB0YXJnZXRQbGF5ZXJdID0gcGxheWVycztcblxuICBhd2FpdCBjbGVhck1haW5NZW51KCk7XG4gIGluaXRpYWxpemVHYW1lQ29udGFpbmVyKCk7XG4gIGluaXRpYWxpemVTaGlwUGxhY2VtZW50U2NyZWVuKCk7XG59O1xuXG5jb25zdCBzdGFydEdhbWVBSSA9IGFzeW5jIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxTmFtZUlucHV0JykudmFsdWVcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxTmFtZUlucHV0JykudmFsdWVcbiAgICA6ICdQbGF5ZXIgMSc7XG4gIGNvbnN0IEFJTGV2ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51IGZvcm0gLmJ1dHRvbi5BSS50b2dnbGVkJykuZGF0YXNldC5sZXZlbDtcblxuICBnZW5lcmF0ZVBsYXllcnMoXG4gICAgW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnaHVtYW4nLFxuICAgICAgICBuYW1lOiBwbGF5ZXJOYW1lLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ0FJJyxcbiAgICAgICAgZGlmZmljdWx0eTogQUlMZXZlbCxcbiAgICAgIH0sXG4gICAgXSxcbiAgKTtcblxuICBbY3VycmVudFBsYXllciwgdGFyZ2V0UGxheWVyXSA9IHBsYXllcnM7XG5cbiAgYXdhaXQgY2xlYXJNYWluTWVudSgpO1xuICBpbml0aWFsaXplR2FtZUNvbnRhaW5lcigpO1xuICBpbml0aWFsaXplU2hpcFBsYWNlbWVudFNjcmVlbigpO1xufTtcblxuY29uc3QgY2xlYXJNYWluTWVudUJ1dHRvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51IC5idXR0b25zJyk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjbGljay1zaW5rJyk7XG4gICAgYnV0dG9uc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrLXNpbmsnKTtcbiAgICAgIHdoaWxlIChidXR0b25zQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5yZW1vdmVDaGlsZChidXR0b25zQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHNob3dWZXJzdXNQbGF5ZXIgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGNsZWFyTWFpbk1lbnVCdXR0b25zKCk7XG5cbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUgLmJ1dHRvbnMnKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGNvbnN0IGxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsMS5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICBsYWJlbDEuaHRtbEZvciA9ICdwbGF5ZXIxTmFtZUlucHV0JztcbiAgbGFiZWwxLnRleHRDb250ZW50ID0gJ1BsYXllciAxOic7XG5cbiAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQxLmlkID0gJ3BsYXllcjFOYW1lSW5wdXQnO1xuICBpbnB1dDEudHlwZSA9ICd0ZXh0JztcbiAgaW5wdXQxLnBsYWNlaG9sZGVyID0gJ05hbWUnO1xuICBpbnB1dDEubWF4TGVuZ3RoID0gMTY7XG5cbiAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBjb25zdCBsYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbDIuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgbGFiZWwyLmh0bWxGb3IgPSAncGxheWVyMk5hbWVJbnB1dCc7XG4gIGxhYmVsMi50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMjonO1xuXG4gIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0Mi5pZCA9ICdwbGF5ZXIyTmFtZUlucHV0JztcbiAgaW5wdXQyLnR5cGUgPSAndGV4dCc7XG4gIGlucHV0Mi5wbGFjZWhvbGRlciA9ICdOYW1lJztcbiAgaW5wdXQyLm1heExlbmd0aCA9IDE2O1xuXG4gIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgY29uc3QgYnRuU3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuU3RhcnQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIGJ0blN0YXJ0LnR5cGUgPSAnc3VibWl0JztcbiAgYnRuU3RhcnQudGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSc7XG4gIGJ0blN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lUGxheWVyKTtcblxuICBjb25zdCBidG5CYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bkJhY2suY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIGJ0bkJhY2sudGV4dENvbnRlbnQgPSAnQmFjayc7XG4gIGJ0bkJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VmVyc3VzT3B0aW9ucyk7XG5cbiAgbGkxLmFwcGVuZENoaWxkKGxhYmVsMSk7XG4gIGxpMS5hcHBlbmRDaGlsZChpbnB1dDEpO1xuICBsaTIuYXBwZW5kQ2hpbGQobGFiZWwyKTtcbiAgbGkyLmFwcGVuZENoaWxkKGlucHV0Mik7XG4gIGxpMy5hcHBlbmRDaGlsZChidG5TdGFydCk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMSk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gIHVsLmFwcGVuZENoaWxkKGxpMyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodWwpO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkJhY2spO1xufTtcblxuY29uc3QgdG9nZ2xlQUlEaWZmaWN1bHR5ID0gKGUpID0+IHtcbiAgY29uc3QgY3VycmVudFRvZ2dsZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51IGZvcm0gLmJ1dHRvbi5BSS50b2dnbGVkJyk7XG4gIGNvbnN0IGNsaWNrZWRCdXR0b24gPSBlLmN1cnJlbnRUYXJnZXQ7XG5cbiAgY3VycmVudFRvZ2dsZWRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlZCcpO1xuICBjbGlja2VkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZWQnKTtcbn07XG5cbmNvbnN0IHNob3dWZXJzdXNBSSA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgY2xlYXJNYWluTWVudUJ1dHRvbnMoKTtcblxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbWVudSAuYnV0dG9ucycpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICBsYWJlbC5odG1sRm9yID0gJ3BsYXllcjFOYW1lSW5wdXQnO1xuICBsYWJlbC50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMTonO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQuaWQgPSAncGxheWVyMU5hbWVJbnB1dCc7XG4gIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gIGlucHV0LnBsYWNlaG9sZGVyID0gJ05hbWUnO1xuICBpbnB1dC5tYXhMZW5ndGggPSAxNjtcblxuICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgcC50ZXh0Q29udGVudCA9ICdBSSBMZXZlbDonO1xuXG4gIGNvbnN0IGJ0bkVhc3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuRWFzeS5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnQUknLCAndG9nZ2xlZCcpO1xuICBidG5FYXN5LnR5cGUgPSAnYnV0dG9uJztcbiAgYnRuRWFzeS50ZXh0Q29udGVudCA9ICdFYXN5JztcbiAgYnRuRWFzeS5kYXRhc2V0LmxldmVsID0gJ0Vhc3knO1xuICBidG5FYXN5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQUlEaWZmaWN1bHR5KTtcblxuICBjb25zdCBidG5Ob3JtYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuTm9ybWFsLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdBSScpO1xuICBidG5Ob3JtYWwudHlwZSA9ICdidXR0b24nO1xuICBidG5Ob3JtYWwudGV4dENvbnRlbnQgPSAnTm9ybWFsJztcbiAgYnRuTm9ybWFsLmRhdGFzZXQubGV2ZWwgPSAnTm9ybWFsJztcbiAgYnRuTm9ybWFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQUlEaWZmaWN1bHR5KTtcblxuICBjb25zdCBidG5DaGVhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5DaGVhdC5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnQUknKTtcbiAgYnRuQ2hlYXQudHlwZSA9ICdidXR0b24nO1xuICBidG5DaGVhdC50ZXh0Q29udGVudCA9ICdDaGVhdCc7XG4gIGJ0bkNoZWF0LmRhdGFzZXQubGV2ZWwgPSAnQ2hlYXQnO1xuICBidG5DaGVhdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUFJRGlmZmljdWx0eSk7XG5cbiAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBjb25zdCBidG5TdGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5TdGFydC5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgYnRuU3RhcnQudHlwZSA9ICdzdWJtaXQnO1xuICBidG5TdGFydC50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lJztcbiAgYnRuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWVBSSk7XG5cbiAgY29uc3QgYnRuQmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5CYWNrLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICBidG5CYWNrLnRleHRDb250ZW50ID0gJ0JhY2snO1xuICBidG5CYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1ZlcnN1c09wdGlvbnMpO1xuXG4gIGxpMS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGxpMS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGxpMi5hcHBlbmRDaGlsZChwKTtcbiAgbGkyLmFwcGVuZENoaWxkKGJ0bkVhc3kpO1xuICBsaTIuYXBwZW5kQ2hpbGQoYnRuTm9ybWFsKTtcbiAgbGkyLmFwcGVuZENoaWxkKGJ0bkNoZWF0KTtcbiAgbGkzLmFwcGVuZENoaWxkKGJ0blN0YXJ0KTtcbiAgdWwuYXBwZW5kQ2hpbGQobGkxKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGkyKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGkzKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh1bCk7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQmFjayk7XG59O1xuXG5jb25zdCBzaG93VmVyc3VzT3B0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgY2xlYXJNYWluTWVudUJ1dHRvbnMoKTtcblxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbWVudSAuYnV0dG9ucycpO1xuXG4gIGNvbnN0IHZlcnN1c1BsYXllckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB2ZXJzdXNQbGF5ZXJCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIHZlcnN1c1BsYXllckJ0bi50ZXh0Q29udGVudCA9ICdWZXJzdXMgUGxheWVyJztcbiAgdmVyc3VzUGxheWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1ZlcnN1c1BsYXllcik7XG5cbiAgY29uc3QgdmVyc3VzQUlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdmVyc3VzQUlCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIHZlcnN1c0FJQnRuLnRleHRDb250ZW50ID0gJ1ZlcnN1cyBBSSc7XG4gIHZlcnN1c0FJQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1ZlcnN1c0FJKTtcblxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHZlcnN1c1BsYXllckJ0bik7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQodmVyc3VzQUlCdG4pO1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZU1haW5NZW51ID0gKCkgPT4ge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplU3ByaXRlcyk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgcmVzZXRTaGlwUGxhY2VtZW50RHJhZ0RhdGEpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplUGxhY2VtZW50Q2VsbHMpO1xuICBjb25zdCBzaXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51Jyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwJztcblxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xuXG4gIGNvbnN0IHBsYXlHYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHBsYXlHYW1lQnRuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICBwbGF5R2FtZUJ0bi50ZXh0Q29udGVudCA9ICdQbGF5IEdhbWUnO1xuICBwbGF5R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dWZXJzdXNPcHRpb25zKTtcblxuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvcHlyaWdodC5jbGFzc0xpc3QuYWRkKCdjb3B5cmlnaHQnKTtcblxuICBjb25zdCBnaXRodWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGdpdGh1Yi5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9yaW50aGVvLyc7XG5cbiAgY29uc3QgZ2l0aHViU1ZHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG5cbiAgY29uc3QgeWVhciA9IChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLnRleHRDb250ZW50ID0gYCDCqSAke3llYXJ9IHJpbnRoZW9gO1xuXG4gIGdpdGh1Yi5hcHBlbmRDaGlsZChnaXRodWJTVkcpO1xuICBjb3B5cmlnaHQuYXBwZW5kQ2hpbGQoZ2l0aHViKTtcbiAgY29weXJpZ2h0LmFwcGVuZENoaWxkKHNwYW4pO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZChwbGF5R2FtZUJ0bik7XG4gIG1haW5NZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XG4gIG1haW5NZW51LmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG4gIHNpdGVDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbk1lbnUpO1xuXG4gIGdpdGh1YlNWRy5vdXRlckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5naXRodWI8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsMkExMCwxMCAwIDAsMCAyLDEyQzIsMTYuNDIgNC44NywyMC4xNyA4Ljg0LDIxLjVDOS4zNCwyMS41OCA5LjUsMjEuMjcgOS41LDIxQzkuNSwyMC43NyA5LjUsMjAuMTQgOS41LDE5LjMxQzYuNzMsMTkuOTEgNi4xNCwxNy45NyA2LjE0LDE3Ljk3QzUuNjgsMTYuODEgNS4wMywxNi41IDUuMDMsMTYuNUM0LjEyLDE1Ljg4IDUuMSwxNS45IDUuMSwxNS45QzYuMSwxNS45NyA2LjYzLDE2LjkzIDYuNjMsMTYuOTNDNy41LDE4LjQ1IDguOTcsMTggOS41NCwxNy43NkM5LjYzLDE3LjExIDkuODksMTYuNjcgMTAuMTcsMTYuNDJDNy45NSwxNi4xNyA1LjYyLDE1LjMxIDUuNjIsMTEuNUM1LjYyLDEwLjM5IDYsOS41IDYuNjUsOC43OUM2LjU1LDguNTQgNi4yLDcuNSA2Ljc1LDYuMTVDNi43NSw2LjE1IDcuNTksNS44OCA5LjUsNy4xN0MxMC4yOSw2Ljk1IDExLjE1LDYuODQgMTIsNi44NEMxMi44NSw2Ljg0IDEzLjcxLDYuOTUgMTQuNSw3LjE3QzE2LjQxLDUuODggMTcuMjUsNi4xNSAxNy4yNSw2LjE1QzE3LjgsNy41IDE3LjQ1LDguNTQgMTcuMzUsOC43OUMxOCw5LjUgMTguMzgsMTAuMzkgMTguMzgsMTEuNUMxOC4zOCwxNS4zMiAxNi4wNCwxNi4xNiAxMy44MSwxNi40MUMxNC4xNywxNi43MiAxNC41LDE3LjMzIDE0LjUsMTguMjZDMTQuNSwxOS42IDE0LjUsMjAuNjggMTQuNSwyMUMxNC41LDIxLjI3IDE0LjY2LDIxLjU5IDE1LjE3LDIxLjVDMTkuMTQsMjAuMTYgMjIsMTYuNDIgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPjwvc3ZnPic7XG59O1xuXG5pbml0aWFsaXplTWFpbk1lbnUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==