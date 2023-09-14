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
  const player = targetPlayer === _game__WEBPACK_IMPORTED_MODULE_1__.players[0]
    ? 'current'
    : 'enemy';
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

  const playerHealthText = document.querySelector(`.${player} .health > .text `);
  playerHealthText.textContent = `${currentHP}/${totalHP}`;

  document.documentElement.style.setProperty(`--${player}-health`, health);
  document.documentElement.style.setProperty(`--${player}-hit`, hit);

  const playerHealthBar = document.querySelector(`.${player} .health > .bar `);
  playerHealthBar.addEventListener('transitionend', () => {
    document.documentElement.style.setProperty(`--${player}-hit`, '0%');
    document.documentElement.style.setProperty(`--${player}-empty`, empty);
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

  if (_game__WEBPACK_IMPORTED_MODULE_1__.players.every((player) => !(player instanceof _player_ai__WEBPACK_IMPORTED_MODULE_2__["default"]))) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
  return Promise.resolve();
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

const clearBoard = () => {
  const boards = document.querySelector('.boards');
  while (boards.firstChild) {
    boards.removeChild(boards.firstChild);
  }
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
  initalizeGameContainer();
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
    initializeGame();
    return;
  }

  if (currentPlayer instanceof _player_ai__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    currentPlayerShips.push(..._player_ai__WEBPACK_IMPORTED_MODULE_2__["default"].arrangeShipsOnBoard(shipsData));
    confirmPlacement();
  } else {
    clearGameContainer();
    initalizeGameContainer();
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

const initalizeGameContainer = () => {
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

const initializePlayerHP = () => {
  document.documentElement.style.setProperty('--current-health', '100%');
  document.documentElement.style.setProperty('--current-hit', '0%');
  document.documentElement.style.setProperty('--current-empty', '0%');
  document.documentElement.style.setProperty('--enemy-health', '100%');
  document.documentElement.style.setProperty('--enemy-hit', '0%');
  document.documentElement.style.setProperty('--enemy-empty', '0%');

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
  initalizeGameContainer();
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
  initalizeGameContainer();
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
  initalizeGameContainer();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlckRPTS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxpSEFBcUM7QUFDakYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSEFBc0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxxQ0FBcUM7QUFDdk4seUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sT0FBTyxPQUFPLEtBQUssTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxLQUFLLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxzR0FBc0csTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0s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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvY2VsbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wbGF5ZXIvYWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3BsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvY29udHJvbGxlckRPTS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvb2NlYW4uZ2lmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmZhbWlseT1SdWJpaytJc28mZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuIC0tY3VycmVudC1oZWFsdGg6IDEwMCU7XG4gLS1jdXJyZW50LWhpdDogMCU7XG4gLS1jdXJyZW50LWVtcHR5OiAwJTtcbiAtLWVuZW15LWhlYWx0aDogMTAwJTtcbiAtLWVuZW15LWhpdDogMCU7XG4gLS1lbmVteS1lbXB0eTogMCU7XG4gLS1leHBsb3Npb24tc2NhbGU6IDE7XG4gLS1zcHJpdGUtc2NhbGU6IDAuMzU7XG4gLS1wbGFjZW1lbnQtY2VsbC13aWR0aDogNDhweDtcbn1cblxuKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sLCBib2R5LFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgXG5wLCB1bCwgb2wsIGxpLCBidXR0b24ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnVsLCBvbCwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufSBcblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1heC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyODBweDtcbn1cblxuLnNldHRpbmdzLWJ0bi1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICB6LWluZGV4OiA5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zZXR0aW5ncy1idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGZpbGw6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lOyAgXG4gIHRyYW5zaXRpb246IFxuICAgIHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dCAwcyxcbiAgICBmaWxsIDAuMjVzIGVhc2UtaW4tb3V0IDBzO1xufSBcblxuLnNldHRpbmdzLWJ0bjpob3ZlciB7XG4gIGZpbGw6IGhzbCgwLCAwJSwgOTAlKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uc2V0dGluZ3MtYnRuOmFjdGl2ZSB7XG4gIGZpbGw6IGhzbCgwLCAwJSwgODAlKTtcbn1cblxuLmdhbWUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ib2FyZHMge1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5ib2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNzUwcHg7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbmltYXRpb246IHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG59XG5cbi5wbGFjZW1lbnQgLmJvYXJkIHtcbiAgbWFyZ2luLXRvcDogMTJyZW07XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbn1cblxuLnBsYWNlbWVudC5pbmZvIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjQwcHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbmltYXRpb246IHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG59XG5cbi5wbGFjZW1lbnQuaW5mbyBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNpdGlvbjogMC4yNXM7XG4gIGFuaW1hdGlvbjogYnV0dG9uLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnBsYWNlbWVudC5pbmZvIHA6bnRoLWNoaWxkKDEpIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ucGxhY2VtZW50LmluZm8gcDpudGgtY2hpbGQoMykge1xuICBtYXJnaW46IDEuNXJlbSAwIDtcbn1cblxuLnBsYWNlbWVudC5pbmZvIC5zaGlwcyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxcmVtIHZhcigtLXBsYWNlbWVudC1jZWxsLXdpZHRoKTtcblxufVxuXG4ucGxhY2VtZW50LmluZm8gLnNoaXBzIC5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGdyaWQtYXV0by1jb2x1bW5zOiB2YXIoLS1wbGFjZW1lbnQtY2VsbC13aWR0aCk7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wbGFjZW1lbnQgLnNwcml0ZXtcbiAgdHJhbnNpdGlvbjogMC4xcztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIG1ha2Ugc3ByaXRlIHN0eWxlIGNvbW1vbiAqL1xuXG4ucGxhY2VtZW50IC5jZWxsLmhvdmVyIC5zcHJpdGUsXG4ucGxhY2VtZW50IC5jb250YWluZXIudW5wbGFjZWQ6aG92ZXIgLnNwcml0ZSB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIHNlcGlhKDEwMCUpIGJyaWdodG5lc3MoMC43NSkgaHVlLXJvdGF0ZSg2MGRlZyk7XG59XG5cbi5wbGFjZW1lbnQgLmNlbGwuaG92ZXIuY2xpY2tlZCAuc3ByaXRlLFxuLnBsYWNlbWVudCAuY29udGFpbmVyLnVucGxhY2VkOmFjdGl2ZSAuc3ByaXRle1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBzZXBpYSgxMDAlKSBicmlnaHRuZXNzKDEpIGh1ZS1yb3RhdGUoNjBkZWcpO1xufVxuXG4ucGxhY2VtZW50IC5jZWxsIHtcbiAgdHJhbnNpdGlvbjogMC4xcztcbn1cblxuLnBsYWNlbWVudCAuY2VsbC5ib3cge1xuICB6LWluZGV4OiAzO1xufVxuXG4ucGxhY2VtZW50IC5jZWxsLmhvdmVyLFxuLnBsYWNlbWVudCAuY29udGFpbmVyLnVucGxhY2VkOmhvdmVyIC5jZWxse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4yNSk7XG59XG5cbi5wbGFjZW1lbnQgLmNlbGwuaG92ZXIuY2xpY2tlZCxcbi5wbGFjZW1lbnQgLmNvbnRhaW5lci51bnBsYWNlZDphY3RpdmUgLmNlbGx7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LCAyNTUsIDE1NSwgMC4yNSk7XG59XG5cbi5ib2FyZHMucGxhY2VtZW50IC5ib2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XG59XG5cbi5jdXJyZW50LmJvYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbn1cblxuLnRhcmdldC5ib2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XG59XG5cbi5jZWxsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhXCI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0IDBzO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgei1pbmRleDogMjtcbn1cblxuLmNlbGwuc2hpcC1ib3cge1xuICB6LWluZGV4OiAxXG59XG5cbi5jZWxsLm1pc3Mgc3ZnIHtcbiAgZmlsbDogcmdiYSgyNTUsIDAsIDAsIDAuMjUpO1xufVxuXG4uYm9hcmRzLnBsYWNlbWVudCAuY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XG59XG5cbi5jdXJyZW50ID4gLmNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xufVxuXG4udGFyZ2V0ID4gLmNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMjUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xufVxuXG4udGFyZ2V0ID4gLmNlbGw6bm90KC5taXNzLCAuaGl0KTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjI1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFyZ2V0ID4gLmNlbGwuaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMjUpO1xufVxuXG4udGFyZ2V0ID4gLmNlbGwuc3Vuayxcbi50YXJnZXQgPiAuY2VsbC5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zcHJpdGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC1hcmVhOiBhO1xufVxuXG4uc3ByaXRlLWNvbnRhaW5lci5ob3Jpem9udGFsIHtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnNwcml0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKTtcbiAgYW5pbWF0aW9uOiBzaGlwLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xufVxuXG4uaG9yaXpvbnRhbCAuc3ByaXRlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKSByb3RhdGUoOTBkZWcpO1xuICBhbmltYXRpb246IHNoaXAtaWRsZS1ob3Jpem9udGFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZTtcbn1cblxuLmNlbGwuc3VuayAuc3ByaXRlIHtcbiAgYW5pbWF0aW9uOiBcbiAgICBzaGlwLXNpbmsgMTBzIGxpbmVhciAwcyAxIGZvcndhcmRzIG5vcm1hbCxcbiAgICBzaGlwLXNoYWtpbmcgMC41cyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGU7XG59XG5cbi5jZWxsLnN1bmsgLmhvcml6b250YWwgLnNwcml0ZSB7XG4gIGFuaW1hdGlvbjogXG4gICAgc2hpcC1zaW5rIDEwcyBsaW5lYXIgMHMgMSBmb3J3YXJkcyBub3JtYWwsXG4gICAgc2hpcC1zaGFraW5nLWhvcml6b250YWwgMC41cyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGU7XG59XG5cbi5maXJlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZ3JpZC1hcmVhOiBhO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZmlyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbn1cblxuLmNlbGwuc3VuayAuZmlyZSB7XG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG59XG5cbi5leHBsb3Npb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUlO1xuICBsZWZ0OiA0NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGdyaWQtYXJlYTogYTtcbiAgei1pbmRleDogMjsgIFxufVxuXG4uZXhwbG9zaW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1leHBsb3Npb24tc2NhbGUpKTtcbn1cblxuLmJsb2NrZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB6LWluZGV4OiA1O1xufVxuXG4ucGxheWVyLWluZm8ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzByZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDUwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYW5pbWF0aW9uOiB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xufVxuXG4uY3VycmVudC5wbGF5ZXItaW5mbyB7XG4gIHRvcDogMXJlbTtcbn1cblxuLmVuZW15LnBsYXllci1pbmZvIHtcbiAgYm90dG9tOiAxcmVtO1xufVxuXG4ucGxheWVyLWluZm8gcCB7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4ucGxheWVyLWluZm8gcDpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ucGxheWVyLWluZm8gcDpsYXN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5oZWFsdGgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCA4LCAyMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhbHRoID4gLnRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XG59XG5cbi5oZWFsdGggPiAuYmFyLFxuLmhlYWx0aCA+IC5oaXQsXG4uaGVhbHRoID4gLmVtcHR5IHtcbiAgaGVpZ2h0OiAwLjVyZW07XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4uY3VycmVudCAuaGVhbHRoID4gLmJhciB7XG4gIHdpZHRoOiB2YXIoLS1jdXJyZW50LWhlYWx0aCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjAwLCAwLCAxKTtcbn1cblxuLmN1cnJlbnQgLmhlYWx0aCA+IC5oaXQge1xuICB3aWR0aDogdmFyKC0tY3VycmVudC1oaXQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwMCwgMCwgMC41KTtcbn1cblxuLmN1cnJlbnQgLmhlYWx0aCA+IC5lbXB0eSB7XG4gIHdpZHRoOiB2YXIoLS1jdXJyZW50LWVtcHR5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLmVuZW15IC5oZWFsdGggPiAuYmFyIHtcbiAgd2lkdGg6IHZhcigtLWVuZW15LWhlYWx0aCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAwLCAwLCAxKTtcbn1cblxuLmVuZW15IC5oZWFsdGggPiAuaGl0IHtcbiAgd2lkdGg6IHZhcigtLWVuZW15LWhpdCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAwLCAwLCAwLjUpO1xufVxuXG4uZW5lbXkgLmhlYWx0aCA+IC5lbXB0eSB7XG4gIHdpZHRoOiB2YXIoLS1lbmVteS1lbXB0eSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5zaXRlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLm1haW4tbWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW4tbWVudSA+IGgxIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ1J1YmlrIElzbycsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGFuaW1hdGlvbjogXG4gICAgdGl0bGUtaWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGUsXG4gICAgdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5tYWluLW1lbnUgLmJ1dHRvbnMge1xuICBoZWlnaHQ6IDE1cmVtO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmdhbWUuY2xpY2stc2luayxcbi5tYWluLW1lbnUuY2xpY2stc2luayxcbi5tYWluLW1lbnUgLmJ1dHRvbnMuY2xpY2stc2luayB7XG4gIGFuaW1hdGlvbjpcbiAgICB0aXRsZS1zaW5rIDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xufVxuXG4ucGxhY2VtZW50LmJ1dHRvbnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2NDBweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG59XG5cbi5wbGFjZW1lbnQuYnV0dG9ucyAuYnV0dG9uLFxuLm1haW4tbWVudSAuYnV0dG9uIHtcbiAgd2lkdGg6IDE1cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgYW5pbWF0aW9uOiBcbiAgICBidXR0b24taWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGUsXG4gICAgdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5wbGFjZW1lbnQuYnV0dG9ucyAuYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG4ucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbi5kaXNhYmxlZCB7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4ucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbjpub3QoLmRpc2FibGVkKTpob3Zlcixcbi5tYWluLW1lbnUgLmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDkwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG59XG5cbi5wbGFjZW1lbnQuYnV0dG9ucyAuYnV0dG9uOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSxcbi5tYWluLW1lbnUgLmJ1dHRvbjphY3RpdmUge1xuICBjb2xvcjogaHNsKDAsIDAlLCA4MCUpO1xufVxuXG4ubWFpbi1tZW51IGZvcm0gbGkge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNnJlbTtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLm1haW4tbWVudSBmb3JtIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbn1cblxuLm1haW4tbWVudSBmb3JtIGxpIC5sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYW5pbWF0aW9uOiBcbiAgICBidXR0b24taWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGUsXG4gICAgdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbn1cblxuLm1haW4tbWVudSBmb3JtIGxpIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiAycHggZ3Jvb3ZlICM3ZjhjOGQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBhbmltYXRpb246IFxuICAgIGJ1dHRvbi1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZSxcbiAgICB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xufVxuXG4ubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y4YzhkO1xuICBib3JkZXI6IDJweCBvdXRzZXQgIzdmOGM4ZDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIHRleHQtc2hhZG93OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm1haW4tbWVudSBmb3JtIGxpIC5idXR0b24uQUkudG9nZ2xlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCA2JSwgNDUlKTsgICBcbiAgYm9yZGVyOiAycHggaW5zZXQgaHNsKDAsIDYlLCA0NSUpOyAgIFxufVxuXG4ubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSS50b2dnbGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NCwgNiUsIDUwJSk7ICAgXG4gIGJvcmRlcjogMnB4IGluc2V0IGhzbCgxODQsIDYlLCA1MCUpOyAgIFxufVxuXG4ubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSS50b2dnbGVkOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA0NyUpO1xufVxuXG4ubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA1MCUpOyAgIFxufVxuXG4ubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg0LCA2JSwgNDclKTsgICBcbiAgYm9yZGVyOiAycHggaW5zZXQgaHNsKDE4NCwgNiUsIDQ3JSk7ICBcbn1cblxuLmNvcHlyaWdodCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGFuaW1hdGlvbjogXG4gICAgdGl0bGUtaWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGUsXG4gICAgdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxLjhyZW07XG59XG5cbi5jb3B5cmlnaHQgc3ZnIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgZmlsbDogd2hpdGU7XG4gIGhlaWdodDogMS44cmVtO1xuICB0cmFuc2l0aW9uOiBcbiAgICB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQgMHMsXG4gICAgZmlsbCAwLjI1cyBlYXNlLWluLW91dCAwcztcbn1cblxuLmNvcHlyaWdodCBzdmc6aG92ZXIge1xuICBjb2xvcjogaHNsKDAsIDAlLCA4MCUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMSk7XG59XG5cbi5jb3B5cmlnaHQgc3ZnOmFjdGl2ZSB7XG4gIGZpbGw6IGhzbCgwLCAwJSwgNzAlKTtcbn1cblxuLmRpYWxvZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuMjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uZGlhbG9nIHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAxcmVtO1xuICBwYWRkaW5nOiAycmVtIDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDQsIDYyLCA4MCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBvdXRsaW5lOiAycHggcmlkZ2UgIzk1YTVhNjtcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbmltYXRpb246IGZhZGUtaW4gMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZGlhbG9nIC50ZXh0IHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uZGlhbG9nIC5tYWluLnRleHQge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5kaWFsb2cgLmJ1dHRvbiB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgbWFyZ2luOiAwLjI1cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZjhjOGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggb3V0c2V0ICM3ZjhjOGQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZGlhbG9nIC5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg0LCA2JSwgNTYlKTtcbn1cblxuLmRpYWxvZyAuYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA1OSUpO1xufVxuXG4uZGlhbG9nIC5wbGF5LmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2FlNjA7XG4gIGJvcmRlcjogMXB4IG91dHNldCAjMjdhZTYwO1xufVxuXG4uZGlhbG9nIC5wbGF5LmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMTQ1LCA2MyUsIDQ1JSk7XG59XG5cbi5kaWFsb2cgLnBsYXkuYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMTQ1LCA2MyUsIDQ4JSk7XG59XG5cbi5kaWFsb2cgLm1lbnUuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYjtcbiAgYm9yZGVyOiAxcHggb3V0c2V0ICNjMDM5MmI7XG59XG5cbi5kaWFsb2cgLm1lbnU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNiwgNjMlLCA0OSUpO1xufVxuXG4uZGlhbG9nIC5tZW51OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg2LCA2MyUsIDUyJSk7XG59XG5cbi5mYWRlLW91dCB7XG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG59XG5cbi5sb3NlLWZvY3VzIHtcbiAgYW5pbWF0aW9uOiBsb3NlLWZvY3VzIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xufVxuXG4ucmV0dXJuLWZvY3VzIHtcbiAgYW5pbWF0aW9uOiByZXR1cm4tZm9jdXMgMC4xMjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xufVxuXG4udmlzaWJpbGl0eS1oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDZweCkge1xuICAuYm9hcmRzOm5vdCgucGxhY2VtZW50KSB7XG4gICAgcGFkZGluZzogMTByZW0gMC41cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubWFpbi1tZW51ID4gaDEge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLm1haW4tbWVudSA+IGgxIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cblxuICAucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbixcbiAgLm1haW4tbWVudSAuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuNXJlbVxuICB9XG5cbiAgLm1haW4tbWVudSBmb3JtIGxpIC5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG5cbiAgLm1haW4tbWVudSBmb3JtIGxpIGlucHV0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSSB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB9ICBcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5tYWluLW1lbnUgPiBoMSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG5cbiAgLnBsYWNlbWVudC5idXR0b25zIC5idXR0b24sXG4gIC5tYWluLW1lbnUgLmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtXG4gIH1cblxuICAubWFpbi1tZW51IGZvcm0gbGkgLmxhYmVsIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuQGtleWZyYW1lcyBsb3NlLWZvY3VzIHtcbiAgMCUge1xuICAgIGZpbHRlcjogYmx1cigwKTtcbiAgfVxuICBcbiAgMTAwJSB7XG4gICAgZmlsdGVyOiBibHVyKDJweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyByZXR1cm4tZm9jdXMge1xuICAwJSB7XG4gICAgZmlsdGVyOiBibHVyKDJweCk7XG4gIH1cbiAgXG4gIDEwMCUge1xuICAgIGZpbHRlcjogYmx1cigwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlLW91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJ1dHRvbi1pZGxlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDApO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB0aXRsZS1pZGxlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xJSwgMC4yNSUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAlLCAtMC4yNSUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdGl0bGUtcmlzZSB7XG4gIDAlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMTBweCkgYnJpZ2h0bmVzcygwLjI1KSBvcGFjaXR5KDAuMjUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgZmlsdGVyOiBibHVyKDBweCkgYnJpZ2h0bmVzcygxKSBvcGFjaXR5KDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdGl0bGUtc2luayB7XG4gIDAlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDEpIG9wYWNpdHkoMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMTBweCkgYnJpZ2h0bmVzcygwLjI1KSBvcGFjaXR5KDAuMjUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hpcC1pZGxlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yLjUlLCAwLjI1JSkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMCUsIC0wLjI1JSkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzaGlwLWlkbGUtaG9yaXpvbnRhbCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMi41JSwgMC4yNSUpIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpIHJvdGF0ZSg5MGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMCUsIC0wLjI1JSkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSkgcm90YXRlKDkwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNoaXAtc2luayB7XG4gIDAlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDEpIGdyYXlzY2FsZSgwJSkgb3BhY2l0eSgxKTtcbiAgfVxuXG4gIDIuNSUge1xuICAgIGZpbHRlcjogYmx1cigwcHgpIGJyaWdodG5lc3MoMikgZ3JheXNjYWxlKDAlKSBvcGFjaXR5KDEpO1xuICB9XG5cbiAgNSUge1xuICAgIGZpbHRlcjogYmx1cigwcHgpIGJyaWdodG5lc3MoMSkgZ3JheXNjYWxlKDAlKSBvcGFjaXR5KDEpO1xuICB9XG4gIFxuICAxMDAlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMjVweCkgYnJpZ2h0bmVzcygwLjUpIGdyYXlzY2FsZSgxMDAlKSBvcGFjaXR5KDAuMjUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hpcC1zaGFraW5nIHtcbiAwJSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wLjUlLCAwKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKTtcbiB9XG5cbiAxMDAlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC41JSwgMCkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSk7XG4gfVxufVxuXG5Aa2V5ZnJhbWVzIHNoaXAtc2hha2luZy1ob3Jpem9udGFsIHtcbiAgMCUge1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTAuMDUlKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKSByb3RhdGUoOTBkZWcpO1xuICB9XG4gXG4gIDEwMCUge1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMC4wNSUpIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpIHJvdGF0ZSg5MGRlZyk7XG4gIH1cbiB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQiw0QkFBNEI7QUFDN0I7O0FBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixpQ0FBaUM7QUFDbkM7O0FBRUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1o7OzZCQUUyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix5REFBMkM7RUFDM0Ms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QWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsaUNBQWlDO0VBQ25DO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlEQUFpRDtFQUNuRDs7RUFFQTtJQUNFLDBDQUEwQztFQUM1QztBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSxpREFBaUQ7RUFDbkQ7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNkRBQTZEO0VBQy9EOztFQUVBO0lBQ0UsNERBQTREO0VBQzlEO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDJFQUEyRTtFQUM3RTs7RUFFQTtJQUNFLDBFQUEwRTtFQUM1RTtBQUNGOztBQUVBO0VBQ0U7SUFDRSx3REFBd0Q7RUFDMUQ7O0VBRUE7SUFDRSx3REFBd0Q7RUFDMUQ7O0VBRUE7SUFDRSx3REFBd0Q7RUFDMUQ7O0VBRUE7SUFDRSxnRUFBZ0U7RUFDbEU7QUFDRjs7QUFFQTtDQUNDO0VBQ0MseURBQXlEO0NBQzFEOztDQUVBO0VBQ0Msd0RBQXdEO0NBQ3pEO0FBQ0Q7O0FBRUE7RUFDRTtHQUNDLHdFQUF3RTtFQUN6RTs7RUFFQTtHQUNDLHVFQUF1RTtFQUN4RTtDQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZmFtaWx5PVJ1YmlrK0lzbyZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuIC0tY3VycmVudC1oZWFsdGg6IDEwMCU7XFxuIC0tY3VycmVudC1oaXQ6IDAlO1xcbiAtLWN1cnJlbnQtZW1wdHk6IDAlO1xcbiAtLWVuZW15LWhlYWx0aDogMTAwJTtcXG4gLS1lbmVteS1oaXQ6IDAlO1xcbiAtLWVuZW15LWVtcHR5OiAwJTtcXG4gLS1leHBsb3Npb24tc2NhbGU6IDE7XFxuIC0tc3ByaXRlLXNjYWxlOiAwLjM1O1xcbiAtLXBsYWNlbWVudC1jZWxsLXdpZHRoOiA0OHB4O1xcbn1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sLCBib2R5LFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIFxcbnAsIHVsLCBvbCwgbGksIGJ1dHRvbiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG51bCwgb2wsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufSBcXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1heC13aWR0aCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTI4MHB4O1xcbn1cXG5cXG4uc2V0dGluZ3MtYnRuLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTI4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgei1pbmRleDogOTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNldHRpbmdzLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBmaWxsOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lOyAgXFxuICB0cmFuc2l0aW9uOiBcXG4gICAgdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0IDBzLFxcbiAgICBmaWxsIDAuMjVzIGVhc2UtaW4tb3V0IDBzO1xcbn0gXFxuXFxuLnNldHRpbmdzLWJ0bjpob3ZlciB7XFxuICBmaWxsOiBoc2woMCwgMCUsIDkwJSk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5zZXR0aW5ncy1idG46YWN0aXZlIHtcXG4gIGZpbGw6IGhzbCgwLCAwJSwgODAlKTtcXG59XFxuXFxuLmdhbWUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL29jZWFuLmdpZicpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZHMge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDc1MHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYW5pbWF0aW9uOiB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbn1cXG5cXG4ucGxhY2VtZW50IC5ib2FyZCB7XFxuICBtYXJnaW4tdG9wOiAxMnJlbTtcXG4gIG1heC13aWR0aDogNDgwcHg7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxufVxcblxcbi5wbGFjZW1lbnQuaW5mbyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNjQwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFuaW1hdGlvbjogdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcXG59XFxuXFxuLnBsYWNlbWVudC5pbmZvIHAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICBhbmltYXRpb246IGJ1dHRvbi1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucGxhY2VtZW50LmluZm8gcDpudGgtY2hpbGQoMSkge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ucGxhY2VtZW50LmluZm8gcDpudGgtY2hpbGQoMykge1xcbiAgbWFyZ2luOiAxLjVyZW0gMCA7XFxufVxcblxcbi5wbGFjZW1lbnQuaW5mbyAuc2hpcHMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDQ4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMXJlbSB2YXIoLS1wbGFjZW1lbnQtY2VsbC13aWR0aCk7XFxuXFxufVxcblxcbi5wbGFjZW1lbnQuaW5mbyAuc2hpcHMgLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiB2YXIoLS1wbGFjZW1lbnQtY2VsbC13aWR0aCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYWNlbWVudCAuc3ByaXRle1xcbiAgdHJhbnNpdGlvbjogMC4xcztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiBtYWtlIHNwcml0ZSBzdHlsZSBjb21tb24gKi9cXG5cXG4ucGxhY2VtZW50IC5jZWxsLmhvdmVyIC5zcHJpdGUsXFxuLnBsYWNlbWVudCAuY29udGFpbmVyLnVucGxhY2VkOmhvdmVyIC5zcHJpdGUge1xcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgc2VwaWEoMTAwJSkgYnJpZ2h0bmVzcygwLjc1KSBodWUtcm90YXRlKDYwZGVnKTtcXG59XFxuXFxuLnBsYWNlbWVudCAuY2VsbC5ob3Zlci5jbGlja2VkIC5zcHJpdGUsXFxuLnBsYWNlbWVudCAuY29udGFpbmVyLnVucGxhY2VkOmFjdGl2ZSAuc3ByaXRle1xcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgc2VwaWEoMTAwJSkgYnJpZ2h0bmVzcygxKSBodWUtcm90YXRlKDYwZGVnKTtcXG59XFxuXFxuLnBsYWNlbWVudCAuY2VsbCB7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbn1cXG5cXG4ucGxhY2VtZW50IC5jZWxsLmJvdyB7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4ucGxhY2VtZW50IC5jZWxsLmhvdmVyLFxcbi5wbGFjZW1lbnQgLmNvbnRhaW5lci51bnBsYWNlZDpob3ZlciAuY2VsbHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjI1KTtcXG59XFxuXFxuLnBsYWNlbWVudCAuY2VsbC5ob3Zlci5jbGlja2VkLFxcbi5wbGFjZW1lbnQgLmNvbnRhaW5lci51bnBsYWNlZDphY3RpdmUgLmNlbGx7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMjU1LCAxNTUsIDAuMjUpO1xcbn1cXG5cXG4uYm9hcmRzLnBsYWNlbWVudCAuYm9hcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcXG59XFxuXFxuLmN1cnJlbnQuYm9hcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcXG59XFxuXFxuLnRhcmdldC5ib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImFcXFwiO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluLW91dCAwcztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLmNlbGwuc2hpcC1ib3cge1xcbiAgei1pbmRleDogMVxcbn1cXG5cXG4uY2VsbC5taXNzIHN2ZyB7XFxuICBmaWxsOiByZ2JhKDI1NSwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi5ib2FyZHMucGxhY2VtZW50IC5jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XFxufVxcblxcbi5jdXJyZW50ID4gLmNlbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcXG59XFxuXFxuLnRhcmdldCA+IC5jZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yNSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xcbn1cXG5cXG4udGFyZ2V0ID4gLmNlbGw6bm90KC5taXNzLCAuaGl0KTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4yNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXJnZXQgPiAuY2VsbC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMjUpO1xcbn1cXG5cXG4udGFyZ2V0ID4gLmNlbGwuc3VuayxcXG4udGFyZ2V0ID4gLmNlbGwubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNwcml0ZS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiBhO1xcbn1cXG5cXG4uc3ByaXRlLWNvbnRhaW5lci5ob3Jpem9udGFsIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc3ByaXRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpO1xcbiAgYW5pbWF0aW9uOiBzaGlwLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xcbn1cXG5cXG4uaG9yaXpvbnRhbCAuc3ByaXRlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSkgcm90YXRlKDkwZGVnKTtcXG4gIGFuaW1hdGlvbjogc2hpcC1pZGxlLWhvcml6b250YWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xcbn1cXG5cXG4uY2VsbC5zdW5rIC5zcHJpdGUge1xcbiAgYW5pbWF0aW9uOiBcXG4gICAgc2hpcC1zaW5rIDEwcyBsaW5lYXIgMHMgMSBmb3J3YXJkcyBub3JtYWwsXFxuICAgIHNoaXAtc2hha2luZyAwLjVzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZTtcXG59XFxuXFxuLmNlbGwuc3VuayAuaG9yaXpvbnRhbCAuc3ByaXRlIHtcXG4gIGFuaW1hdGlvbjogXFxuICAgIHNoaXAtc2luayAxMHMgbGluZWFyIDBzIDEgZm9yd2FyZHMgbm9ybWFsLFxcbiAgICBzaGlwLXNoYWtpbmctaG9yaXpvbnRhbCAwLjVzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZTtcXG59XFxuXFxuLmZpcmUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IGE7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZmlyZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcXG59XFxuXFxuLmNlbGwuc3VuayAuZmlyZSB7XFxuICBhbmltYXRpb246IGZhZGUtb3V0IDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbn1cXG5cXG4uZXhwbG9zaW9uLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUlO1xcbiAgbGVmdDogNDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogYTtcXG4gIHotaW5kZXg6IDI7ICBcXG59XFxuXFxuLmV4cGxvc2lvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tZXhwbG9zaW9uLXNjYWxlKSk7XFxufVxcblxcbi5ibG9ja2VyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgei1pbmRleDogNTtcXG59XFxuXFxuLnBsYXllci1pbmZvIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAzMHJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDUwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBhbmltYXRpb246IHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxufVxcblxcbi5jdXJyZW50LnBsYXllci1pbmZvIHtcXG4gIHRvcDogMXJlbTtcXG59XFxuXFxuLmVuZW15LnBsYXllci1pbmZvIHtcXG4gIGJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnBsYXllci1pbmZvIHAge1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi5wbGF5ZXItaW5mbyBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ucGxheWVyLWluZm8gcDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmhlYWx0aCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgOCwgMjAsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFsdGggPiAudGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcXG59XFxuXFxuLmhlYWx0aCA+IC5iYXIsXFxuLmhlYWx0aCA+IC5oaXQsXFxuLmhlYWx0aCA+IC5lbXB0eSB7XFxuICBoZWlnaHQ6IDAuNXJlbTtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzIGVhc2UtaW4tb3V0IDBzO1xcbn1cXG5cXG4uY3VycmVudCAuaGVhbHRoID4gLmJhciB7XFxuICB3aWR0aDogdmFyKC0tY3VycmVudC1oZWFsdGgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMDAsIDAsIDEpO1xcbn1cXG5cXG4uY3VycmVudCAuaGVhbHRoID4gLmhpdCB7XFxuICB3aWR0aDogdmFyKC0tY3VycmVudC1oaXQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMDAsIDAsIDAuNSk7XFxufVxcblxcbi5jdXJyZW50IC5oZWFsdGggPiAuZW1wdHkge1xcbiAgd2lkdGg6IHZhcigtLWN1cnJlbnQtZW1wdHkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuLmVuZW15IC5oZWFsdGggPiAuYmFyIHtcXG4gIHdpZHRoOiB2YXIoLS1lbmVteS1oZWFsdGgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDAsIDAsIDEpO1xcbn1cXG5cXG4uZW5lbXkgLmhlYWx0aCA+IC5oaXQge1xcbiAgd2lkdGg6IHZhcigtLWVuZW15LWhpdCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmVuZW15IC5oZWFsdGggPiAuZW1wdHkge1xcbiAgd2lkdGg6IHZhcigtLWVuZW15LWVtcHR5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi5zaXRlLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5tYWluLW1lbnUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1tZW51ID4gaDEge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ1J1YmlrIElzbycsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDZyZW07XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGFuaW1hdGlvbjogXFxuICAgIHRpdGxlLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlLFxcbiAgICB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tYWluLW1lbnUgLmJ1dHRvbnMge1xcbiAgaGVpZ2h0OiAxNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUuY2xpY2stc2luayxcXG4ubWFpbi1tZW51LmNsaWNrLXNpbmssXFxuLm1haW4tbWVudSAuYnV0dG9ucy5jbGljay1zaW5rIHtcXG4gIGFuaW1hdGlvbjpcXG4gICAgdGl0bGUtc2luayAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcXG59XFxuXFxuLnBsYWNlbWVudC5idXR0b25zIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA2NDBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxufVxcblxcbi5wbGFjZW1lbnQuYnV0dG9ucyAuYnV0dG9uLFxcbi5tYWluLW1lbnUgLmJ1dHRvbiB7XFxuICB3aWR0aDogMTVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICBhbmltYXRpb246IFxcbiAgICBidXR0b24taWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGUsXFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnBsYWNlbWVudC5idXR0b25zIC5idXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG4ucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbi5kaXNhYmxlZCB7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLnBsYWNlbWVudC5idXR0b25zIC5idXR0b246bm90KC5kaXNhYmxlZCk6aG92ZXIsXFxuLm1haW4tbWVudSAuYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDkwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuLnBsYWNlbWVudC5idXR0b25zIC5idXR0b246bm90KC5kaXNhYmxlZCk6YWN0aXZlLFxcbi5tYWluLW1lbnUgLmJ1dHRvbjphY3RpdmUge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgODAlKTtcXG59XFxuXFxuLm1haW4tbWVudSBmb3JtIGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDZyZW07XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm1haW4tbWVudSBmb3JtIGxpOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG5cXG4ubWFpbi1tZW51IGZvcm0gbGkgLmxhYmVsIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBhbmltYXRpb246IFxcbiAgICBidXR0b24taWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGUsXFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxufVxcblxcbi5tYWluLW1lbnUgZm9ybSBsaSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogMnB4IGdyb292ZSAjN2Y4YzhkO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgYW5pbWF0aW9uOiBcXG4gICAgYnV0dG9uLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlLFxcbiAgICB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbn1cXG5cXG4ubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZjhjOGQ7XFxuICBib3JkZXI6IDJweCBvdXRzZXQgIzdmOGM4ZDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJLnRvZ2dsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDYlLCA0NSUpOyAgIFxcbiAgYm9yZGVyOiAycHggaW5zZXQgaHNsKDAsIDYlLCA0NSUpOyAgIFxcbn1cXG5cXG4ubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSS50b2dnbGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA1MCUpOyAgIFxcbiAgYm9yZGVyOiAycHggaW5zZXQgaHNsKDE4NCwgNiUsIDUwJSk7ICAgXFxufVxcblxcbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJLnRvZ2dsZWQ6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA0NyUpO1xcbn1cXG5cXG4ubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg0LCA2JSwgNTAlKTsgICBcXG59XFxuXFxuLm1haW4tbWVudSBmb3JtIGxpIC5idXR0b24uQUk6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA0NyUpOyAgIFxcbiAgYm9yZGVyOiAycHggaW5zZXQgaHNsKDE4NCwgNiUsIDQ3JSk7ICBcXG59XFxuXFxuLmNvcHlyaWdodCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGFuaW1hdGlvbjogXFxuICAgIHRpdGxlLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlLFxcbiAgICB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMS44cmVtO1xcbn1cXG5cXG4uY29weXJpZ2h0IHN2ZyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgZmlsbDogd2hpdGU7XFxuICBoZWlnaHQ6IDEuOHJlbTtcXG4gIHRyYW5zaXRpb246IFxcbiAgICB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQgMHMsXFxuICAgIGZpbGwgMC4yNXMgZWFzZS1pbi1vdXQgMHM7XFxufVxcblxcbi5jb3B5cmlnaHQgc3ZnOmhvdmVyIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDgwJSk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMSk7XFxufVxcblxcbi5jb3B5cmlnaHQgc3ZnOmFjdGl2ZSB7XFxuICBmaWxsOiBoc2woMCwgMCUsIDcwJSk7XFxufVxcblxcbi5kaWFsb2ctb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjI1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5kaWFsb2cge1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDQsIDYyLCA4MCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBvdXRsaW5lOiAycHggcmlkZ2UgIzk1YTVhNjtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbmltYXRpb246IGZhZGUtaW4gMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmRpYWxvZyAudGV4dCB7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5kaWFsb2cgLm1haW4udGV4dCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmRpYWxvZyAuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIG1hcmdpbjogMC4yNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZjhjOGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBvdXRzZXQgIzdmOGM4ZDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5kaWFsb2cgLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg0LCA2JSwgNTYlKTtcXG59XFxuXFxuLmRpYWxvZyAuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg0LCA2JSwgNTklKTtcXG59XFxuXFxuLmRpYWxvZyAucGxheS5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3YWU2MDtcXG4gIGJvcmRlcjogMXB4IG91dHNldCAjMjdhZTYwO1xcbn1cXG5cXG4uZGlhbG9nIC5wbGF5LmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDE0NSwgNjMlLCA0NSUpO1xcbn1cXG5cXG4uZGlhbG9nIC5wbGF5LmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgxNDUsIDYzJSwgNDglKTtcXG59XFxuXFxuLmRpYWxvZyAubWVudS5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYjtcXG4gIGJvcmRlcjogMXB4IG91dHNldCAjYzAzOTJiO1xcbn1cXG5cXG4uZGlhbG9nIC5tZW51OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg2LCA2MyUsIDQ5JSk7XFxufVxcblxcbi5kaWFsb2cgLm1lbnU6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg2LCA2MyUsIDUyJSk7XFxufVxcblxcbi5mYWRlLW91dCB7XFxuICBhbmltYXRpb246IGZhZGUtb3V0IDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbn1cXG5cXG4ubG9zZS1mb2N1cyB7XFxuICBhbmltYXRpb246IGxvc2UtZm9jdXMgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxufVxcblxcbi5yZXR1cm4tZm9jdXMge1xcbiAgYW5pbWF0aW9uOiByZXR1cm4tZm9jdXMgMC4xMjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbn1cXG5cXG4udmlzaWJpbGl0eS1oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjQ2cHgpIHtcXG4gIC5ib2FyZHM6bm90KC5wbGFjZW1lbnQpIHtcXG4gICAgcGFkZGluZzogMTByZW0gMC41cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5tYWluLW1lbnUgPiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAubWFpbi1tZW51ID4gaDEge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICB9XFxuXFxuICAucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbixcXG4gIC5tYWluLW1lbnUgLmJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtXFxuICB9XFxuXFxuICAubWFpbi1tZW51IGZvcm0gbGkgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcblxcbiAgLm1haW4tbWVudSBmb3JtIGxpIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLm1haW4tbWVudSBmb3JtIGxpIC5idXR0b24uQUkge1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICB9ICBcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAubWFpbi1tZW51ID4gaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuXFxuICAucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbixcXG4gIC5tYWluLW1lbnUgLmJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbVxcbiAgfVxcblxcbiAgLm1haW4tbWVudSBmb3JtIGxpIC5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBsb3NlLWZvY3VzIHtcXG4gIDAlIHtcXG4gICAgZmlsdGVyOiBibHVyKDApO1xcbiAgfVxcbiAgXFxuICAxMDAlIHtcXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcmV0dXJuLWZvY3VzIHtcXG4gIDAlIHtcXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XFxuICB9XFxuICBcXG4gIDEwMCUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBidXR0b24taWRsZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDApO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRpdGxlLWlkbGUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMSUsIDAuMjUlKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMCUsIC0wLjI1JSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdGl0bGUtcmlzZSB7XFxuICAwJSB7XFxuICAgIGZpbHRlcjogYmx1cigxMHB4KSBicmlnaHRuZXNzKDAuMjUpIG9wYWNpdHkoMC4yNSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgZmlsdGVyOiBibHVyKDBweCkgYnJpZ2h0bmVzcygxKSBvcGFjaXR5KDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRpdGxlLXNpbmsge1xcbiAgMCUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDEpIG9wYWNpdHkoMSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgZmlsdGVyOiBibHVyKDEwcHgpIGJyaWdodG5lc3MoMC4yNSkgb3BhY2l0eSgwLjI1KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaGlwLWlkbGUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMi41JSwgMC4yNSUpIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wJSwgLTAuMjUlKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaGlwLWlkbGUtaG9yaXpvbnRhbCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yLjUlLCAwLjI1JSkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSkgcm90YXRlKDkwZGVnKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMCUsIC0wLjI1JSkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSkgcm90YXRlKDkwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaGlwLXNpbmsge1xcbiAgMCUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDEpIGdyYXlzY2FsZSgwJSkgb3BhY2l0eSgxKTtcXG4gIH1cXG5cXG4gIDIuNSUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDIpIGdyYXlzY2FsZSgwJSkgb3BhY2l0eSgxKTtcXG4gIH1cXG5cXG4gIDUlIHtcXG4gICAgZmlsdGVyOiBibHVyKDBweCkgYnJpZ2h0bmVzcygxKSBncmF5c2NhbGUoMCUpIG9wYWNpdHkoMSk7XFxuICB9XFxuICBcXG4gIDEwMCUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMjVweCkgYnJpZ2h0bmVzcygwLjUpIGdyYXlzY2FsZSgxMDAlKSBvcGFjaXR5KDAuMjUpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoaXAtc2hha2luZyB7XFxuIDAlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wLjUlLCAwKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKTtcXG4gfVxcblxcbiAxMDAlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuNSUsIDApIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpO1xcbiB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hpcC1zaGFraW5nLWhvcml6b250YWwge1xcbiAgMCUge1xcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0wLjA1JSkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSkgcm90YXRlKDkwZGVnKTtcXG4gIH1cXG4gXFxuICAxMDAlIHtcXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwLjA1JSkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSkgcm90YXRlKDkwZGVnKTtcXG4gIH1cXG4gfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNIaXQgPSBmYWxzZTtcbiAgICB0aGlzLmp1c3RHb3RIaXQgPSBmYWxzZTtcbiAgICB0aGlzLnNoaXAgPSBudWxsO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaXNIaXQgPSB0cnVlO1xuICAgIHRoaXMuanVzdEdvdEhpdCA9IHRydWU7XG4gIH1cblxuICByZXNldEp1c3RHb3RIaXQoKSB7XG4gICAgdGhpcy5qdXN0R290SGl0ID0gZmFsc2U7XG4gIH1cblxuICBhc3NpZ24oc2hpcCkge1xuICAgIHRoaXMuc2hpcCA9IHNoaXA7XG4gIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIvcGxheWVyJztcbmltcG9ydCBBSSBmcm9tICcuL3BsYXllci9haSc7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmV4cG9ydCBjb25zdCBwbGF5ZXJzID0gW107XG5cbi8vIGNvbnN0IHNoaXBzID0gW1xuLy8gICB7XG4vLyAgICAgdHlwZTogJ0NhcnJpZXInLFxuLy8gICAgIGxlbmd0aDogNSxcbi8vICAgICB0ZW1wQ29vcmRzOiBbMywgMl0sXG4vLyAgICAgdGVtcEhvcmk6IHRydWUsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICB0eXBlOiAnQmF0dGxlc2hpcCcsXG4vLyAgICAgbGVuZ3RoOiA0LFxuLy8gICAgIHRlbXBDb29yZHM6IFszLCA1XSxcbi8vICAgICB0ZW1wSG9yaTogdHJ1ZSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIHR5cGU6ICdDcnVpc2VyJyxcbi8vICAgICBsZW5ndGg6IDMsXG4vLyAgICAgdGVtcENvb3JkczogWzgsIDNdLFxuLy8gICAgIHRlbXBIb3JpOiBmYWxzZSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIHR5cGU6ICdTdWJtYXJpbmUnLFxuLy8gICAgIGxlbmd0aDogMyxcbi8vICAgICB0ZW1wQ29vcmRzOiBbNiwgN10sXG4vLyAgICAgdGVtcEhvcmk6IGZhbHNlLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgdHlwZTogJ0Rlc3Ryb3llcicsXG4vLyAgICAgbGVuZ3RoOiAyLFxuLy8gICAgIHRlbXBDb29yZHM6IFsxLCA5XSxcbi8vICAgICB0ZW1wSG9yaTogdHJ1ZSxcbi8vICAgfSxcbi8vIF07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVBsYXllcnMgPSAoaW5wdXRQbGF5ZXJzKSA9PiB7XG4gIHBsYXllcnMubGVuZ3RoID0gMDtcblxuICBpbnB1dFBsYXllcnMuZm9yRWFjaCgodGhpc1BsYXllcikgPT4ge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXNQbGF5ZXIudHlwZSA9PT0gJ2h1bWFuJyA/IG5ldyBQbGF5ZXIodGhpc1BsYXllci5uYW1lKVxuICAgICAgOiB0aGlzUGxheWVyLnR5cGUgPT09ICdBSScgPyBuZXcgQUkodGhpc1BsYXllci5kaWZmaWN1bHR5KVxuICAgICAgICA6IG51bGw7XG5cbiAgICBwbGF5ZXJzLnB1c2gocGxheWVyKTtcblxuICAgIGNvbnN0IGJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgIGJvYXJkLmNyZWF0ZUJvYXJkKCk7XG4gICAgcGxheWVyLmFzc2lnbkJvYXJkKGJvYXJkKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgcGxhY2VQbGF5ZXJTaGlwcyA9IChwbGF5ZXIsIHNoaXBzKSA9PiB7XG4gIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBwbGF5ZXJcbiAgICAgIC5ib2FyZFxuICAgICAgLnBsYWNlU2hpcChzaGlwLmluc2VydENvb3JkaW5hdGVzLCBuZXcgU2hpcChzaGlwLmxlbmd0aCwgc2hpcC50eXBlKSwgc2hpcC5ob3Jpem9udGFsKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IENlbGwgZnJvbSAnLi9jZWxsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIHRoaXMuZmxlZXQgPSBbXTtcbiAgfVxuXG4gIGdldEJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICB9XG5cbiAgZ2V0RmxlZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxlZXQ7XG4gIH1cblxuICBlbXB0eUZsZWV0KCkge1xuICAgIHRoaXMuZmxlZXQubGVuZ3RoID0gMDtcbiAgfVxuXG4gIGNyZWF0ZUJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgdGhpcy5ib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSBuZXcgQ2VsbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcChbeCwgeV0sIHNoaXAsIGlzUGxhY2VkSG9yaXpvbnRhbGx5ID0gdHJ1ZSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gaXNQbGFjZWRIb3Jpem9udGFsbHlcbiAgICAgID8geCAtIE1hdGguZmxvb3Ioc2hpcC5sZW5ndGggLyAyKVxuICAgICAgOiB5IC0gTWF0aC5mbG9vcihzaGlwLmxlbmd0aCAvIDIpO1xuICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgc2hpcC5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGJvd0Nvb3JkaW5hdGVzID0gaXNQbGFjZWRIb3Jpem9udGFsbHlcbiAgICAgID8geyB4OiBlbmQsIHkgfVxuICAgICAgOiB7IHgsIHk6IGVuZCB9O1xuXG4gICAgaWYgKHNoaXAuaGFzUG9zaXRpb25lZCkgcmV0dXJuO1xuICAgIGlmIChzdGFydCA8IDAgfHwgZW5kID4gOSkgcmV0dXJuO1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkgKz0gMSkge1xuICAgICAgaWYgKGlzUGxhY2VkSG9yaXpvbnRhbGx5ICYmIHRoaXMuYm9hcmRbaV1beV0uc2hpcCAhPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgaWYgKCFpc1BsYWNlZEhvcml6b250YWxseSAmJiB0aGlzLmJvYXJkW3hdW2ldLnNoaXAgIT09IG51bGwpIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpICs9IDEpIHtcbiAgICAgIGlmIChpc1BsYWNlZEhvcml6b250YWxseSkgdGhpcy5ib2FyZFtpXVt5XS5hc3NpZ24oc2hpcCk7XG4gICAgICBpZiAoIWlzUGxhY2VkSG9yaXpvbnRhbGx5KSB0aGlzLmJvYXJkW3hdW2ldLmFzc2lnbihzaGlwKTtcbiAgICB9XG4gICAgdGhpcy5mbGVldC5wdXNoKHNoaXApO1xuICAgIHNoaXAuaXNQb3NpdGlvbmVkKGJvd0Nvb3JkaW5hdGVzLCBpc1BsYWNlZEhvcml6b250YWxseSk7XG4gIH1cblxuICByZXNldENlbGxzSnVzdEdvdEhpdCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICB0aGlzLmJvYXJkW2ldW2pdLnJlc2V0SnVzdEdvdEhpdCgpO1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXS5zaGlwICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXS5zaGlwLnJlc2V0SnVzdFN1bmsoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlY2VpdmVBdHRhY2soW3gsIHldKSB7XG4gICAgdGhpcy5yZXNldENlbGxzSnVzdEdvdEhpdCgpO1xuICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgaWYgKHRoaXMuYm9hcmRbeF1beV0uc2hpcCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XS5zaGlwLmhpdCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzRmxlZXRPcGVyYXRpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5mbGVldC5zb21lKChzaGlwKSA9PiBzaGlwLmhhc1N1bmsgPT09IGZhbHNlKTtcbiAgfVxuXG4gIGFsbFVuaGl0Q29vcmRpbmF0ZXMoKSB7XG4gICAgY29uc3QgdW5oaXRDb29yZGluYXRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmICghdGhpcy5ib2FyZFtpXVtqXS5pc0hpdCkgdW5oaXRDb29yZGluYXRlcy5wdXNoKFtpLCBqXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmhpdENvb3JkaW5hdGVzO1xuICB9XG5cbiAgYWxsU2hpcENvb3JkaW5hdGVzKCkge1xuICAgIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdLnNoaXAgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuYm9hcmRbaV1bal0uaXNIaXQpIHtcbiAgICAgICAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKFtpLCBqXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaGlwQ29vcmRpbmF0ZXM7XG4gIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBSSBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGRpZmZpY3VsdHkgPSAnRWFzeScpIHtcbiAgICBzdXBlcihgQUkgJHtkaWZmaWN1bHR5fWApO1xuICAgIHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG4gIH1cblxuICBjaG9vc2VBdHRhY2tDb29yZGluYXRlcyhwbGF5ZXIpIHtcbiAgICBpZiAodGhpcy5kaWZmaWN1bHR5ID09PSAnRWFzeScpIHtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLmFsbFVuaGl0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIHJldHVybiBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlc1tcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXMubGVuZ3RoKVxuICAgICAgXTtcbiAgICB9XG4gICAgLy8gTm9ybWFsIFBsYWNlaG9sZGVyLCBzYW1lIGFzIGVhc3lcbiAgICBpZiAodGhpcy5kaWZmaWN1bHR5ID09PSAnTm9ybWFsJykge1xuICAgICAgY29uc3QgYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmQuYWxsVW5oaXRDb29yZGluYXRlcygpO1xuICAgICAgcmV0dXJuIGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzW1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlcy5sZW5ndGgpXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaWZmaWN1bHR5ID09PSAnQ2hlYXQnKSB7XG4gICAgICBjb25zdCBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlcyA9IHBsYXllci5ib2FyZC5hbGxTaGlwQ29vcmRpbmF0ZXMoKTtcbiAgICAgIHJldHVybiBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlc1tcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXMubGVuZ3RoKVxuICAgICAgXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzdGF0aWMgYXJyYW5nZVNoaXBzT25Cb2FyZChkYXRhKSB7XG4gICAgY29uc3QgY3VycmVudEFJU2hpcHMgPSBbXTtcbiAgICBjb25zdCBpbWFnaW5hcnlCb2FyZCA9IFtdO1xuXG4gICAgZGF0YS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgbGV0IGhvcml6b250YWwgPSBCb29sZWFuKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpO1xuICAgICAgbGV0IHN0YXJ0ID0gaG9yaXpvbnRhbFxuICAgICAgICA/IHggLSBNYXRoLmZsb29yKHNoaXAubGVuZ3RoIC8gMilcbiAgICAgICAgOiB5IC0gTWF0aC5mbG9vcihzaGlwLmxlbmd0aCAvIDIpO1xuICAgICAgbGV0IGVuZCA9IHN0YXJ0ICsgc2hpcC5sZW5ndGggLSAxO1xuXG4gICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBob3Jpem9udGFsID8gW2ksIHldIDogW3gsIGldO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaW1hZ2luYXJ5Qm9hcmQuc29tZSgoY2VsbCkgPT4gY2VsbFswXSA9PT0gYXJyYXlbMF0gJiYgY2VsbFsxXSA9PT0gYXJyYXlbMV0pXG4gICAgICAgICAgICB8fCBzdGFydCA8IDBcbiAgICAgICAgICAgIHx8IGVuZCA+IDlcbiAgICAgICAgKSB7XG4gICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIGhvcml6b250YWwgPSBCb29sZWFuKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpO1xuICAgICAgICAgIHN0YXJ0ID0gaG9yaXpvbnRhbFxuICAgICAgICAgICAgPyB4IC0gTWF0aC5mbG9vcihzaGlwLmxlbmd0aCAvIDIpXG4gICAgICAgICAgICA6IHkgLSBNYXRoLmZsb29yKHNoaXAubGVuZ3RoIC8gMik7XG4gICAgICAgICAgZW5kID0gc3RhcnQgKyBzaGlwLmxlbmd0aCAtIDE7XG4gICAgICAgICAgaSA9IHN0YXJ0O1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBhcnJheSA9IGhvcml6b250YWwgPyBbaSwgeV0gOiBbeCwgaV07XG4gICAgICAgIGltYWdpbmFyeUJvYXJkLnB1c2goYXJyYXkpO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50QUlTaGlwcy5wdXNoKHtcbiAgICAgICAgdHlwZTogc2hpcC50eXBlLFxuICAgICAgICBsZW5ndGg6IHNoaXAubGVuZ3RoLFxuICAgICAgICBpbnNlcnRDb29yZGluYXRlczogW3gsIHldLFxuICAgICAgICBob3Jpem9udGFsLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3VycmVudEFJU2hpcHM7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnUGxheWVyJykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ib2FyZCA9IG51bGw7XG4gIH1cblxuICBhc3NpZ25Cb2FyZChnYW1lQm9hcmQpIHtcbiAgICB0aGlzLmJvYXJkID0gZ2FtZUJvYXJkO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCB0eXBlKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgICB0aGlzLmhhc1Bvc2l0aW9uZWQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc1N1bmsgPSBmYWxzZTtcbiAgICB0aGlzLmp1c3RTdW5rID0gZmFsc2U7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmJvd0Nvb3JkaW5hdGVzID0gbnVsbDtcbiAgICB0aGlzLmlzSG9yaXpvbnRhbCA9IG51bGw7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHRoaXMuaXNTdW5rKCk7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgdGhpcy5oYXNTdW5rID0gdHJ1ZTtcbiAgICB0aGlzLmp1c3RTdW5rID0gdHJ1ZTtcbiAgfVxuXG4gIHJlc2V0SnVzdFN1bmsoKSB7XG4gICAgdGhpcy5qdXN0U3VuayA9IGZhbHNlO1xuICB9XG5cbiAgaXNQb3NpdGlvbmVkKGJvd0Nvb3JkaW5hdGVzLCBpc0hvcml6b250YWwpIHtcbiAgICB0aGlzLmhhc1Bvc2l0aW9uZWQgPSB0cnVlO1xuICAgIHRoaXMuYm93Q29vcmRpbmF0ZXMgPSBib3dDb29yZGluYXRlcztcbiAgICB0aGlzLmlzSG9yaXpvbnRhbCA9IGlzSG9yaXpvbnRhbDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiY29udHJvbGxlckRPTVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwbGF5ZXJzLCBnZW5lcmF0ZVBsYXllcnMsIHBsYWNlUGxheWVyU2hpcHMgfSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IEFJIGZyb20gJy4vcGxheWVyL2FpJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIvcGxheWVyJztcbmltcG9ydCBzcHJpdGVCYXR0bGVzaGlwIGZyb20gJy4uL2Fzc2V0cy9zaGlwQmF0dGxlc2hpcC5wbmcnO1xuaW1wb3J0IHNwcml0ZUNhcnJpZXIgZnJvbSAnLi4vYXNzZXRzL3NoaXBDYXJyaWVyLnBuZyc7XG5pbXBvcnQgc3ByaXRlQ3J1aXNlciBmcm9tICcuLi9hc3NldHMvc2hpcENydWlzZXIucG5nJztcbmltcG9ydCBzcHJpdGVEZXN0cm95ZXIgZnJvbSAnLi4vYXNzZXRzL3NoaXBEZXN0cm95ZXIucG5nJztcbmltcG9ydCBzcHJpdGVTdWJtYXJpbmUgZnJvbSAnLi4vYXNzZXRzL3NoaXBTdWJtYXJpbmUucG5nJztcbmltcG9ydCBzcHJpdGVGaXJlIGZyb20gJy4uL2Fzc2V0cy9maXJlLmdpZic7XG5pbXBvcnQgc3ByaXRlRXhwbG9zaW9uIGZyb20gJy4uL2Fzc2V0cy9leHBsb3Npb24uZ2lmJztcblxuY29uc3Qgc2hpcHNEYXRhID0gW1xuICB7XG4gICAgdHlwZTogJ0NhcnJpZXInLFxuICAgIGxlbmd0aDogNSxcbiAgICBzcmM6IHNwcml0ZUNhcnJpZXIsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQmF0dGxlc2hpcCcsXG4gICAgbGVuZ3RoOiA0LFxuICAgIHNyYzogc3ByaXRlQmF0dGxlc2hpcCxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDcnVpc2VyJyxcbiAgICBsZW5ndGg6IDMsXG4gICAgc3JjOiBzcHJpdGVDcnVpc2VyLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ1N1Ym1hcmluZScsXG4gICAgbGVuZ3RoOiAzLFxuICAgIHNyYzogc3ByaXRlU3VibWFyaW5lLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ0Rlc3Ryb3llcicsXG4gICAgbGVuZ3RoOiAyLFxuICAgIHNyYzogc3ByaXRlRGVzdHJveWVyLFxuICB9LFxuXTtcblxubGV0IGN1cnJlbnRQbGF5ZXI7XG5sZXQgdGFyZ2V0UGxheWVyO1xuXG5jb25zdCBzd2l0Y2hQbGF5ZXJzID0gKCkgPT4ge1xuICBjdXJyZW50UGxheWVyID0gY3VycmVudFBsYXllciA9PT0gcGxheWVyc1swXSA/IHBsYXllcnNbMV0gOiBwbGF5ZXJzWzBdO1xuICB0YXJnZXRQbGF5ZXIgPSB0YXJnZXRQbGF5ZXIgPT09IHBsYXllcnNbMF0gPyBwbGF5ZXJzWzFdIDogcGxheWVyc1swXTtcbn07XG5cbmNvbnN0IGxvc2VGb2N1c0Zyb21HYW1lID0gKCkgPT4ge1xuICBjb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbiAgZ2FtZS5jbGFzc0xpc3QuYWRkKCdsb3NlLWZvY3VzJyk7XG59O1xuXG5jb25zdCByZXR1cm5Gb2N1c1RvR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XG4gIGdhbWUuY2xhc3NMaXN0LnJlbW92ZSgnbG9zZS1mb2N1cycpO1xuICBnYW1lLmNsYXNzTGlzdC5hZGQoJ3JldHVybi1mb2N1cycpO1xuICBnYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICBnYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ3JldHVybi1mb2N1cycpO1xuICB9LCB7IG9uY2U6IHRydWUgfSk7XG59O1xuXG5jb25zdCBoaWRlRGlhbG9nID0gKCkgPT4ge1xuICBjb25zdCBkaWFsb2dPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZy1vdmVybGF5Jyk7XG4gIGRpYWxvZ092ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcbiAgZGlhbG9nT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgZGlhbG9nT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLW91dCcpO1xuICAgIGRpYWxvZ092ZXJsYXkucmVtb3ZlKCk7XG4gIH0sIHsgb25jZTogdHJ1ZSB9KTtcbn07XG5cbmNvbnN0IHNob3dXaW5uZXJEaWFsb2cgPSAoKSA9PiB7XG4gIGNvbnN0IHNpdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1jb250YWluZXInKTtcblxuICBjb25zdCBkaWFsb2dPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpYWxvZ092ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLW92ZXJsYXknKTtcblxuICBjb25zdCBkaWFsb2dCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlhbG9nQm94LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZycpO1xuXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMS5jbGFzc0xpc3QuYWRkKCdzdWInLCAndGV4dCcpO1xuICBwMS50ZXh0Q29udGVudCA9IGN1cnJlbnRQbGF5ZXIgaW5zdGFuY2VvZiBBSVxuICAgID8gJ0FsbCB5b3VyIHNoaXBzIGhhdmUgYmVlbiBkZXN0cm95ZWQuJ1xuICAgIDogJ0FsbCBlbmVteSBzaGlwcyBoYXZlIGJlZW4gZGVzdHJveWVkLic7XG5cbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAyLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFBsYXllci5uYW1lfSB3aW5zIWA7XG4gIHAyLmNsYXNzTGlzdC5hZGQoJ21haW4nLCAndGV4dCcpO1xuXG4gIGNvbnN0IGJ0blBsYXlBZ2FpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5QbGF5QWdhaW4uY2xhc3NMaXN0LmFkZCgncGxheScsICdidXR0b24nKTtcbiAgYnRuUGxheUFnYWluLnRleHRDb250ZW50ID0gJ1BsYXkgQWdhaW4nO1xuICBidG5QbGF5QWdhaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0R2FtZSk7XG5cbiAgY29uc3QgYnRuTWVudVJldHVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5NZW51UmV0dXJuLmNsYXNzTGlzdC5hZGQoJ21lbnUnLCAnYnV0dG9uJyk7XG4gIGJ0bk1lbnVSZXR1cm4udGV4dENvbnRlbnQgPSAnUmV0dXJuIHRvIE1lbnUnO1xuICBidG5NZW51UmV0dXJuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV0dXJuVG9NZW51KTtcblxuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQocDEpO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQocDIpO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQoYnRuUGxheUFnYWluKTtcbiAgZGlhbG9nQm94LmFwcGVuZENoaWxkKGJ0bk1lbnVSZXR1cm4pO1xuICBkaWFsb2dPdmVybGF5LmFwcGVuZENoaWxkKGRpYWxvZ0JveCk7XG4gIHNpdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlhbG9nT3ZlcmxheSk7XG59O1xuXG5jb25zdCBjaGVja1dpbm5pbmdDb25kaXRpb24gPSAoKSA9PiB7XG4gIGlmICghdGFyZ2V0UGxheWVyLmJvYXJkLmlzRmxlZXRPcGVyYXRpb25hbCgpKSB7XG4gICAgbG9zZUZvY3VzRnJvbUdhbWUoKTtcbiAgICBzaG93V2lubmVyRGlhbG9nKCk7XG4gICAgaGlkZVBsYXllckhQKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3Qgc2VsZWN0U2hpcE9iamVjdCA9IChwbGF5ZXIsIGNlbGwpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkU2hpcF0gPSBwbGF5ZXJcbiAgICAuYm9hcmRcbiAgICAuZmxlZXRcbiAgICAuZmlsdGVyKChzaGlwKSA9PiBzaGlwLnR5cGUgPT09IGNlbGwuZGF0YXNldC5zaGlwKTtcbiAgcmV0dXJuIHNlbGVjdGVkU2hpcDtcbn07XG5cbmNvbnN0IGlmU3Vua0V4cGxvc2lvbiA9IChjZWxsKSA9PiB7XG4gIGNvbnN0IGV4cGxvZGluZ0NlbGwgPSBjZWxsO1xuICBpZiAoZXhwbG9kaW5nQ2VsbC5kYXRhc2V0LnNoaXApIHtcbiAgICBjb25zdCBleHBsb2RpbmdDZWxsUGxheWVyID0gcGxheWVycy5maW5kKChwbGF5ZXIpID0+IHBsYXllci5uYW1lID09PSBjZWxsLmRhdGFzZXQucGxheWVyTmFtZSk7XG4gICAgY29uc3QgZXhwbG9kaW5nU2hpcCA9IHNlbGVjdFNoaXBPYmplY3QoZXhwbG9kaW5nQ2VsbFBsYXllciwgZXhwbG9kaW5nQ2VsbCk7XG4gICAgaWYgKGV4cGxvZGluZ1NoaXAuaGFzU3Vuaykge1xuICAgICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAgIFtcbiAgICAgICAgICArZXhwbG9kaW5nQ2VsbC5kYXRhc2V0LnggKyAxLFxuICAgICAgICAgICtleHBsb2RpbmdDZWxsLmRhdGFzZXQueSxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICtleHBsb2RpbmdDZWxsLmRhdGFzZXQueCAtIDEsXG4gICAgICAgICAgK2V4cGxvZGluZ0NlbGwuZGF0YXNldC55LFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgK2V4cGxvZGluZ0NlbGwuZGF0YXNldC54LFxuICAgICAgICAgICtleHBsb2RpbmdDZWxsLmRhdGFzZXQueSArIDEsXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICArZXhwbG9kaW5nQ2VsbC5kYXRhc2V0LngsXG4gICAgICAgICAgK2V4cGxvZGluZ0NlbGwuZGF0YXNldC55IC0gMSxcbiAgICAgICAgXSxcbiAgICAgIF07XG4gICAgICBleHBsb2RpbmdDZWxsLmRhdGFzZXQuc2hpcCA9ICcnO1xuICAgICAgZXhwbG9kaW5nQ2VsbC5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG5cbiAgICAgIGFycmF5LmZvckVhY2goKFt4LCB5XSkgPT4ge1xuICAgICAgICBjb25zdCBuZXh0Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXVtkYXRhLXBsYXllci1uYW1lPVwiJHtleHBsb2RpbmdDZWxsUGxheWVyLm5hbWV9XCJdW2RhdGEtc2hpcD1cIiR7ZXhwbG9kaW5nU2hpcC50eXBlfVwiXWApO1xuICAgICAgICBpZiAobmV4dENlbGwpIGhpdEV4cGxvc2lvbkVmZmVjdChuZXh0Q2VsbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGhpdEV4cGxvc2lvbkVmZmVjdCA9IGFzeW5jIChjZWxsKSA9PiB7XG4gIGlmU3Vua0V4cGxvc2lvbihjZWxsKTtcblxuICBjb25zdCBleHBsb3Npb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZXhwbG9zaW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2V4cGxvc2lvbi1jb250YWluZXInKTtcblxuICBjb25zdCBleHBsb3Npb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZXhwbG9zaW9uLnNyYyA9IGAke3Nwcml0ZUV4cGxvc2lvbn0/cmFuZD0ke01hdGgucmFuZG9tKCl9YDtcbiAgZXhwbG9zaW9uLmNsYXNzTGlzdC5hZGQoJ2V4cGxvc2lvbicpO1xuXG4gIGNvbnN0IGV4cGxvc2lvblNjYWxlID0gMS41ICogKHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNlbGwpLndpZHRoLCAxMCkgLyA2MCk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1leHBsb3Npb24tc2NhbGUnLCBleHBsb3Npb25TY2FsZSk7XG5cbiAgZXhwbG9zaW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGV4cGxvc2lvbik7XG4gIGNlbGwuYXBwZW5kQ2hpbGQoZXhwbG9zaW9uQ29udGFpbmVyKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjZWxsLnJlbW92ZUNoaWxkKGV4cGxvc2lvbkNvbnRhaW5lcik7XG4gIH0sIDUwMDApO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0sIDUwMCk7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkRmlyZUVmZmVjdCA9ICh0YXJnZXRDZWxsKSA9PiB7XG4gIGNvbnN0IGZpcmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmlyZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmaXJlLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGZpcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZmlyZS5zcmMgPSBgJHtzcHJpdGVGaXJlfT9yYW5kPSR7TWF0aC5yYW5kb20oKX1gO1xuICBmaXJlLmNsYXNzTGlzdC5hZGQoJ2ZpcmUnKTtcblxuICBmaXJlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpcmUpO1xuICB0YXJnZXRDZWxsLmFwcGVuZENoaWxkKGZpcmVDb250YWluZXIpO1xufTtcblxuY29uc3QgYWRkTWlzc01hcmsgPSAodGFyZ2V0Q2VsbCkgPT4ge1xuICBjb25zdCBtYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gIHRhcmdldENlbGwuYXBwZW5kQ2hpbGQobWFyayk7XG4gIG1hcmsub3V0ZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+bWlzczwvdGl0bGU+PHBhdGggZD1cIk0xOSw2LjQxTDE3LjU5LDVMMTIsMTAuNTlMNi40MSw1TDUsNi40MUwxMC41OSwxMkw1LDE3LjU5TDYuNDEsMTlMMTIsMTMuNDFMMTcuNTksMTlMMTksMTcuNTlMMTMuNDEsMTJMMTksNi40MVpcIiAvPjwvc3ZnPic7XG59O1xuXG5jb25zdCB1cGRhdGVIUCA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyID0gdGFyZ2V0UGxheWVyID09PSBwbGF5ZXJzWzBdXG4gICAgPyAnY3VycmVudCdcbiAgICA6ICdlbmVteSc7XG4gIGNvbnN0IHRvdGFsSFAgPSB0YXJnZXRQbGF5ZXJcbiAgICAuYm9hcmRcbiAgICAuZmxlZXRcbiAgICAucmVkdWNlKCh0b3RhbCwgc2hpcCkgPT4gdG90YWwgKyBzaGlwLmxlbmd0aCwgMCk7XG4gIGNvbnN0IGN1cnJlbnRIUCA9IHRhcmdldFBsYXllclxuICAgIC5ib2FyZFxuICAgIC5mbGVldFxuICAgIC5yZWR1Y2UoKHRvdGFsLCBzaGlwKSA9PiB0b3RhbCAtIHNoaXAuaGl0cywgdG90YWxIUCk7XG4gIGNvbnN0IGhlYWx0aCA9IGAke01hdGgucm91bmQoKGN1cnJlbnRIUCAvIHRvdGFsSFApICogMTAwKX0lYDtcbiAgY29uc3QgaGl0ID0gYCR7TWF0aC5yb3VuZCgoMSAvIHRvdGFsSFApICogMTAwKX0lYDtcbiAgY29uc3QgZW1wdHkgPSBgJHtNYXRoLnJvdW5kKCgxIC0gY3VycmVudEhQIC8gdG90YWxIUCkgKiAxMDApfSVgO1xuXG4gIGNvbnN0IHBsYXllckhlYWx0aFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwbGF5ZXJ9IC5oZWFsdGggPiAudGV4dCBgKTtcbiAgcGxheWVySGVhbHRoVGV4dC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRIUH0vJHt0b3RhbEhQfWA7XG5cbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7cGxheWVyfS1oZWFsdGhgLCBoZWFsdGgpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtwbGF5ZXJ9LWhpdGAsIGhpdCk7XG5cbiAgY29uc3QgcGxheWVySGVhbHRoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cGxheWVyfSAuaGVhbHRoID4gLmJhciBgKTtcbiAgcGxheWVySGVhbHRoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7cGxheWVyfS1oaXRgLCAnMCUnKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtwbGF5ZXJ9LWVtcHR5YCwgZW1wdHkpO1xuICB9LCB7IG9uY2U6IHRydWUgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVCb2FyZCA9IGFzeW5jIChbeCwgeV0pID0+IHtcbiAgY29uc3QgdGFyZ2V0Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXVtkYXRhLXBsYXllci1uYW1lPVwiJHt0YXJnZXRQbGF5ZXIubmFtZX1cIl1gKTtcbiAgaWYgKHRhcmdldFBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXApIHtcbiAgICBjb25zdCB0YXJnZXRTaGlwID0gc2VsZWN0U2hpcE9iamVjdCh0YXJnZXRQbGF5ZXIsIHRhcmdldENlbGwpO1xuICAgIGlmICh0YXJnZXRTaGlwLmhhc1N1bmspIHtcbiAgICAgIHByaW50U2lua2luZ1Nwcml0ZSh0YXJnZXRTaGlwKTtcbiAgICB9XG4gIH1cbiAgYXdhaXQgaGl0RXhwbG9zaW9uRWZmZWN0KHRhcmdldENlbGwpO1xuICBpZiAodGFyZ2V0UGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcCkge1xuICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgaWYgKHRhcmdldENlbGwuZGF0YXNldC5zaGlwKSBhZGRGaXJlRWZmZWN0KHRhcmdldENlbGwpO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgIGFkZE1pc3NNYXJrKHRhcmdldENlbGwpO1xuICB9XG5cbiAgaWYgKHBsYXllcnMuZXZlcnkoKHBsYXllcikgPT4gIShwbGF5ZXIgaW5zdGFuY2VvZiBBSSkpKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufTtcblxuY29uc3Qgc2hvd0lucHV0QmxvY2tlciA9ICgpID0+IHtcbiAgY29uc3QgYmxvY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBibG9ja2VyLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrZXInKTtcblxuICBjb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbiAgZ2FtZS5hcHBlbmRDaGlsZChibG9ja2VyKTtcbn07XG5cbmNvbnN0IGhpZGVJbnB1dEJsb2NrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGJsb2NrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvY2tlcicpO1xuICBjb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbiAgZ2FtZS5yZW1vdmVDaGlsZChibG9ja2VyKTtcbn07XG5cbmxldCBwcmV2aW91c0hpdENlbGwgPSBbLTEsIC0xXTtcblxuY29uc3QgcHJvY2Vzc0hpdCA9IGFzeW5jIChbeCwgeV0pID0+IHtcbiAgdGFyZ2V0UGxheWVyXG4gICAgLmJvYXJkXG4gICAgLnJlY2VpdmVBdHRhY2soXG4gICAgICBbeCwgeV0sXG4gICAgKTtcbiAgcHJldmlvdXNIaXRDZWxsID0gWyt4LCAreV07XG4gIHNob3dJbnB1dEJsb2NrZXIoKTtcbiAgYXdhaXQgdXBkYXRlQm9hcmQoW3gsIHldKTtcbiAgaWYgKHRhcmdldFBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXApIHVwZGF0ZUhQKCk7XG4gIGlmIChjaGVja1dpbm5pbmdDb25kaXRpb24oKSkgcmV0dXJuO1xuICBzd2l0Y2hQbGF5ZXJzKCk7XG4gIGlmIChjdXJyZW50UGxheWVyIGluc3RhbmNlb2YgQUkpIHtcbiAgICBoaXRDZWxsQUkoKTtcbiAgfSBlbHNlIGlmICghKHRhcmdldFBsYXllciBpbnN0YW5jZW9mIEFJKSkge1xuICAgIGNsZWFyR2FtZUNvbnRhaW5lcigpO1xuICAgIGluaXRpYWxpemVHYW1lKCk7XG4gIH1cbiAgaWYgKHBsYXllcnMuc29tZSgocGxheWVyKSA9PiAocGxheWVyIGluc3RhbmNlb2YgQUkpKSkgaGlkZUlucHV0QmxvY2tlcigpO1xufTtcblxuY29uc3QgaGl0Q2VsbEFJID0gKCkgPT4ge1xuICBjb25zdCBbeCwgeV0gPSBjdXJyZW50UGxheWVyLmNob29zZUF0dGFja0Nvb3JkaW5hdGVzKHRhcmdldFBsYXllcik7XG4gIHByb2Nlc3NIaXQoW3gsIHldKTtcbn07XG5cbmNvbnN0IGhpdENlbGxQbGF5ZXIgPSAoZSkgPT4ge1xuICBjb25zdCBjZWxsID0gZS5jdXJyZW50VGFyZ2V0O1xuICBjb25zdCB7IHggfSA9IGNlbGwuZGF0YXNldDtcbiAgY29uc3QgeyB5IH0gPSBjZWxsLmRhdGFzZXQ7XG4gIGlmIChcbiAgICBjZWxsLmRhdGFzZXQucGxheWVyTmFtZSA9PT0gdGFyZ2V0UGxheWVyLm5hbWVcbiAgICAmJiAhdGFyZ2V0UGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uaXNIaXRcbiAgKSB7XG4gICAgcHJvY2Vzc0hpdChbeCwgeV0pO1xuICB9XG59O1xuXG5jb25zdCBwcmludFNpbmtpbmdTcHJpdGUgPSAoc2hpcCkgPT4ge1xuICBjb25zdCB7IHgsIHkgfSA9IHNoaXAuYm93Q29vcmRpbmF0ZXM7XG4gIGNvbnN0IHNoaXBQbGF5ZXIgPSBwbGF5ZXJzLmZpbmQoKHBsYXllcikgPT4gcGxheWVyLmJvYXJkLmdldEZsZWV0KCkuaW5jbHVkZXMoc2hpcCkpO1xuICBjb25zdCBib3dDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdW2RhdGEtcGxheWVyLW5hbWU9XCIke3NoaXBQbGF5ZXIubmFtZX1cIl1gKTtcbiAgY29uc3QgYm93Q2VsbENoaWxkcmVuID0gQXJyYXkuZnJvbShib3dDZWxsLmNoaWxkTm9kZXMpO1xuICBpZiAoYm93Q2VsbENoaWxkcmVuLnNvbWUoKGNoaWxkKSA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nwcml0ZS1jb250YWluZXInKSkpIHJldHVybjtcbiAgYm93Q2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLWJvdycpO1xuXG4gIGNvbnN0IHNwcml0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzcHJpdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ByaXRlLWNvbnRhaW5lcicpO1xuICBpZiAoc2hpcC5pc0hvcml6b250YWwpIHNwcml0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG5cbiAgY29uc3Qgc2hpcFNwcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzaGlwU3ByaXRlLnNyYyA9IHNoaXBzRGF0YS5maW5kKChzaGlwRGF0YSkgPT4gc2hpcERhdGEudHlwZSA9PT0gc2hpcC50eXBlKS5zcmM7XG4gIHNoaXBTcHJpdGUuY2xhc3NMaXN0LmFkZCgnc3ByaXRlJyk7XG5cbiAgY29uc3Qgc3ByaXRlU2NhbGUgPSAwLjM1ICogKHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJvd0NlbGwpLndpZHRoLCAxMCkgLyA2MCk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zcHJpdGUtc2NhbGUnLCBzcHJpdGVTY2FsZSk7XG5cbiAgc3ByaXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBTcHJpdGUpO1xuICBib3dDZWxsLmFwcGVuZENoaWxkKHNwcml0ZUNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBwcmludFNwcml0ZXMgPSAoKSA9PiB7XG4gIGN1cnJlbnRQbGF5ZXIuYm9hcmQuZ2V0RmxlZXQoKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgaWYgKCFzaGlwLmhhc1N1bmspIHtcbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gc2hpcC5ib3dDb29yZGluYXRlcztcbiAgICAgIGNvbnN0IGJvd0NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1bZGF0YS1wbGF5ZXItbmFtZT1cIiR7Y3VycmVudFBsYXllci5uYW1lfVwiXWApO1xuICAgICAgYm93Q2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLWJvdycpO1xuXG4gICAgICBjb25zdCBzcHJpdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNwcml0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzcHJpdGUtY29udGFpbmVyJyk7XG4gICAgICBpZiAoc2hpcC5pc0hvcml6b250YWwpIHNwcml0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG5cbiAgICAgIGNvbnN0IHNoaXBTcHJpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHNoaXBTcHJpdGUuc3JjID0gc2hpcHNEYXRhLmZpbmQoKHNoaXBEYXRhKSA9PiBzaGlwRGF0YS50eXBlID09PSBzaGlwLnR5cGUpLnNyYztcbiAgICAgIHNoaXBTcHJpdGUuY2xhc3NMaXN0LmFkZCgnc3ByaXRlJyk7XG5cbiAgICAgIGNvbnN0IHNwcml0ZVNjYWxlID0gMC4zNSAqIChwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib3dDZWxsKS53aWR0aCwgMTApIC8gNjApO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXNwcml0ZS1zY2FsZScsIHNwcml0ZVNjYWxlKTtcblxuICAgICAgc3ByaXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBTcHJpdGUpO1xuICAgICAgYm93Q2VsbC5hcHBlbmRDaGlsZChzcHJpdGVDb250YWluZXIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCByZXNpemVTcHJpdGVzID0gKCkgPT4ge1xuICBjb25zdCBib3dDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNlbGwnKTtcbiAgY29uc3Qgc3ByaXRlU2NhbGUgPSAwLjM1ICogKHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJvd0NlbGwpLndpZHRoLCAxMCkgLyA2MCk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zcHJpdGUtc2NhbGUnLCBzcHJpdGVTY2FsZSk7XG59O1xuXG5jb25zdCBjbGVhckJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzJyk7XG4gIHdoaWxlIChib2FyZHMuZmlyc3RDaGlsZCkge1xuICAgIGJvYXJkcy5yZW1vdmVDaGlsZChib2FyZHMuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlc3VtZUdhbWUgPSAoKSA9PiB7XG4gIHJldHVybkZvY3VzVG9HYW1lKCk7XG4gIGhpZGVEaWFsb2coKTtcbiAgdW5oaWRlUGxheWVySFAoKTtcbn07XG5cbmNvbnN0IHJlc3RhcnRHYW1lID0gKCkgPT4ge1xuICByZXR1cm5Gb2N1c1RvR2FtZSgpO1xuICBoaWRlRGlhbG9nKCk7XG4gIGNsZWFyR2FtZUNvbnRhaW5lcigpO1xuICBnZW5lcmF0ZVBsYXllcnMoXG4gICAgW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnaHVtYW4nLFxuICAgICAgICBuYW1lOiBwbGF5ZXJzWzBdLm5hbWUsXG4gICAgICB9LFxuICAgICAgcGxheWVyc1sxXSBpbnN0YW5jZW9mIEFJXG4gICAgICAgID8ge1xuICAgICAgICAgIHR5cGU6ICdBSScsXG4gICAgICAgICAgZGlmZmljdWx0eTogcGxheWVyc1sxXS5kaWZmaWN1bHR5LFxuICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgIHR5cGU6ICdodW1hbicsXG4gICAgICAgICAgbmFtZTogcGxheWVyc1sxXS5uYW1lLFxuICAgICAgICB9LFxuICAgIF0sXG4gICk7XG4gIFtjdXJyZW50UGxheWVyLCB0YXJnZXRQbGF5ZXJdID0gcGxheWVycztcbiAgaW5pdGFsaXplR2FtZUNvbnRhaW5lcigpO1xuICBpbml0aWFsaXplU2hpcFBsYWNlbWVudFNjcmVlbigpO1xufTtcblxuY29uc3QgcmV0dXJuVG9NZW51ID0gKCkgPT4ge1xuICByZXR1cm5Gb2N1c1RvR2FtZSgpO1xuICBoaWRlRGlhbG9nKCk7XG4gIGNsZWFyR2FtZUNvbnRhaW5lcigpO1xuICBpbml0aWFsaXplTWFpbk1lbnUoKTtcbn07XG5cbmNvbnN0IHNob3dQYXVzZU1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IHNpdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1jb250YWluZXInKTtcblxuICBjb25zdCBkaWFsb2dPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpYWxvZ092ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLW92ZXJsYXknKTtcblxuICBjb25zdCBkaWFsb2dCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlhbG9nQm94LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZycpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAudGV4dENvbnRlbnQgPSAnR2FtZSBwYXVzZWQnO1xuICBwLmNsYXNzTGlzdC5hZGQoJ21haW4nLCAndGV4dCcpO1xuXG4gIGNvbnN0IGJ0blJlc3VtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5SZXN1bWUuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIGJ0blJlc3VtZS50ZXh0Q29udGVudCA9ICdSZXN1bWUnO1xuICBidG5SZXN1bWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN1bWVHYW1lKTtcblxuICBjb25zdCBidG5SZXN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0blJlc3RhcnQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIGJ0blJlc3RhcnQudGV4dENvbnRlbnQgPSAnUmVzdGFydCc7XG4gIGJ0blJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0R2FtZSk7XG5cbiAgY29uc3QgYnRuTWVudVJldHVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5NZW51UmV0dXJuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICBidG5NZW51UmV0dXJuLnRleHRDb250ZW50ID0gJ1JldHVybiB0byBNZW51JztcbiAgYnRuTWVudVJldHVybi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJldHVyblRvTWVudSk7XG5cbiAgZGlhbG9nQm94LmFwcGVuZENoaWxkKHApO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQoYnRuUmVzdW1lKTtcbiAgZGlhbG9nQm94LmFwcGVuZENoaWxkKGJ0blJlc3RhcnQpO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQoYnRuTWVudVJldHVybik7XG4gIGRpYWxvZ092ZXJsYXkuYXBwZW5kQ2hpbGQoZGlhbG9nQm94KTtcbiAgc2l0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaWFsb2dPdmVybGF5KTtcbn07XG5cbmNvbnN0IGNsaWNrUGF1c2VNZW51ID0gKCkgPT4ge1xuICBsb3NlRm9jdXNGcm9tR2FtZSgpO1xuICBoaWRlUGxheWVySFAoKTtcbiAgc2hvd1BhdXNlTWVudSgpO1xufTtcblxuY29uc3QgY2xpY2tQbGFjZW1lbnRTaGlwID0gKGUpID0+IHtcbiAgY29uc3QgeyBzaGlwIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvckFsbChgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwfVwiYClcbiAgICAuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgfSk7XG4gIGUuY3VycmVudFRhcmdldC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xufTtcblxuY29uc3QgdW5jbGlja1NoaXBQbGFjZW1lbnQgPSAoZSkgPT4ge1xuICBjb25zdCB7IHNoaXAgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKGAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXB9XCJgKVxuICAgIC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGhvdmVyU2hpcFBsYWNlbWVudCA9IChlKSA9PiB7XG4gIGlmIChpc0RyYWdnaW5nU2hpcCkgcmV0dXJuO1xuICBjb25zdCB7IHNoaXAgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKGAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXB9XCJgKVxuICAgIC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgfSk7XG59O1xuXG5jb25zdCB1bmhvdmVyU2hpcFBsYWNlbWVudCA9IChlKSA9PiB7XG4gIGNvbnN0IHsgc2hpcCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcH1cImApXG4gICAgLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGN1cnJlbnRQbGF5ZXJTaGlwcyA9IFtdO1xuXG5jb25zdCBjb25maXJtUGxhY2VtZW50ID0gKCkgPT4ge1xuICBwbGFjZVBsYXllclNoaXBzKGN1cnJlbnRQbGF5ZXIsIGN1cnJlbnRQbGF5ZXJTaGlwcyk7XG4gIGN1cnJlbnRQbGF5ZXJTaGlwcy5sZW5ndGggPSAwO1xuICBoaWRlRGlhbG9nKCk7XG4gIHN3aXRjaFBsYXllcnMoKTtcblxuICBpZiAoXG4gICAgcGxheWVyc1swXS5ib2FyZC5mbGVldC5sZW5ndGggPiAwXG4gICAgJiYgcGxheWVyc1sxXS5ib2FyZC5mbGVldC5sZW5ndGggPiAwXG4gICkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgcmVzZXRTaGlwUGxhY2VtZW50RHJhZ0RhdGEpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVQbGFjZW1lbnRDZWxscyk7XG4gICAgY2xlYXJHYW1lQ29udGFpbmVyKCk7XG4gICAgaW5pdGlhbGl6ZUdhbWUoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY3VycmVudFBsYXllciBpbnN0YW5jZW9mIEFJKSB7XG4gICAgY3VycmVudFBsYXllclNoaXBzLnB1c2goLi4uQUkuYXJyYW5nZVNoaXBzT25Cb2FyZChzaGlwc0RhdGEpKTtcbiAgICBjb25maXJtUGxhY2VtZW50KCk7XG4gIH0gZWxzZSB7XG4gICAgY2xlYXJHYW1lQ29udGFpbmVyKCk7XG4gICAgaW5pdGFsaXplR2FtZUNvbnRhaW5lcigpO1xuICAgIGluaXRpYWxpemVTaGlwUGxhY2VtZW50U2NyZWVuKCk7XG4gIH1cbn07XG5cbmNvbnN0IGNsaWNrQ29uZmlybVBsYWNlbWVudCA9ICgpID0+IHtcbiAgY3VycmVudFBsYXllclNoaXBzLmxlbmd0aCA9IDA7XG5cbiAgY29uc3QgcGxhY2VkU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VtZW50LmJvYXJkcyAuY2VsbC5ib3cgLnNwcml0ZS1jb250YWluZXInKTtcbiAgcGxhY2VkU2hpcHMuZm9yRWFjaCgocGxhY2VkU2hpcCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNoaXAsIGxlbmd0aCwgYm93WCwgYm93WSwgaG9yaXpvbnRhbCxcbiAgICB9ID0gcGxhY2VkU2hpcC5wYXJlbnROb2RlLmRhdGFzZXQ7XG4gICAgbGV0IGluc2VydENvb3JkaW5hdGVzO1xuICAgIGlmIChob3Jpem9udGFsID09PSAndHJ1ZScpIHtcbiAgICAgIGluc2VydENvb3JkaW5hdGVzID0gW1xuICAgICAgICArYm93WCAtIE1hdGguY2VpbCgrbGVuZ3RoIC8gMikgKyAxLFxuICAgICAgICArYm93WSxcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc2VydENvb3JkaW5hdGVzID0gW1xuICAgICAgICArYm93WCxcbiAgICAgICAgK2Jvd1kgLSBNYXRoLmNlaWwoK2xlbmd0aCAvIDIpICsgMSxcbiAgICAgIF07XG4gICAgfVxuICAgIGN1cnJlbnRQbGF5ZXJTaGlwcy5wdXNoKHtcbiAgICAgIHR5cGU6IHNoaXAsXG4gICAgICBsZW5ndGg6ICtsZW5ndGgsXG4gICAgICBpbnNlcnRDb29yZGluYXRlcyxcbiAgICAgIGhvcml6b250YWw6IGhvcml6b250YWwgPT09ICd0cnVlJyxcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3Qgc2l0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGRpYWxvZ092ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlhbG9nT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctb3ZlcmxheScpO1xuXG4gIGNvbnN0IGRpYWxvZ0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaWFsb2dCb3guY2xhc3NMaXN0LmFkZCgnZGlhbG9nJyk7XG5cbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAxLmNsYXNzTGlzdC5hZGQoJ3N1YicsICd0ZXh0Jyk7XG4gIHAxLnRleHRDb250ZW50ID0gYFlvdSBoYXZlIHBsYWNlZCAke2N1cnJlbnRQbGF5ZXJTaGlwcy5sZW5ndGh9IHNoaXAocykuYDtcblxuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDIudGV4dENvbnRlbnQgPSAnQ29uZmlybSBwbGFjZW1lbnQ/JztcbiAgcDIuY2xhc3NMaXN0LmFkZCgnbWFpbicsICd0ZXh0Jyk7XG5cbiAgY29uc3QgYnRuWWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0blllcy5jbGFzc0xpc3QuYWRkKCdwbGF5JywgJ2J1dHRvbicpO1xuICBidG5ZZXMudGV4dENvbnRlbnQgPSAnWWVzJztcbiAgYnRuWWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29uZmlybVBsYWNlbWVudCk7XG5cbiAgY29uc3QgYnRuTm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuTm8uY2xhc3NMaXN0LmFkZCgnbWVudScsICdidXR0b24nKTtcbiAgYnRuTm8udGV4dENvbnRlbnQgPSAnTm8nO1xuICBidG5Oby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVEaWFsb2cpO1xuXG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChwMSk7XG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChwMik7XG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChidG5ZZXMpO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQoYnRuTm8pO1xuICBkaWFsb2dPdmVybGF5LmFwcGVuZENoaWxkKGRpYWxvZ0JveCk7XG4gIHNpdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlhbG9nT3ZlcmxheSk7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyc1RvU2hpcENlbGwgPSAoY2VsbCkgPT4ge1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBob3ZlclNoaXBQbGFjZW1lbnQpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB1bmhvdmVyU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xpY2tQbGFjZW1lbnRTaGlwKTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdW5jbGlja1NoaXBQbGFjZW1lbnQpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB1bmNsaWNrU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZHJhZ1NoaXBPblBsYWNlbWVudEJvYXJkKTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZW50ZXInLCBob3ZlclNoaXBQbGFjZW1lbnQpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHVuaG92ZXJTaGlwUGxhY2VtZW50KTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGNsaWNrUGxhY2VtZW50U2hpcCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdW5jbGlja1NoaXBQbGFjZW1lbnQpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHVuY2xpY2tTaGlwUGxhY2VtZW50KTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGRyYWdTaGlwT25QbGFjZW1lbnRCb2FyZCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwT25QbGFjZW1lbnRCb2FyZCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB1bnBsYWNlU2hpcEZyb21QbGFjZW1lbnRCb2FyZCk7XG59O1xuXG5jb25zdCBlbXB0eUNlbGxEYXRhT25QbGFjZW1lbnRCb2FyZCA9IChjZWxsKSA9PiB7XG4gIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYm93Jyk7XG4gIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2hpcCcpO1xuICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sZW5ndGgnKTtcbiAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYm93LXgnKTtcbiAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYm93LXknKTtcbiAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaG9yaXpvbnRhbCcpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBob3ZlclNoaXBQbGFjZW1lbnQpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB1bmhvdmVyU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xpY2tQbGFjZW1lbnRTaGlwKTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdW5jbGlja1NoaXBQbGFjZW1lbnQpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB1bmNsaWNrU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZHJhZ1NoaXBPblBsYWNlbWVudEJvYXJkKTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZW50ZXInLCBob3ZlclNoaXBQbGFjZW1lbnQpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHVuaG92ZXJTaGlwUGxhY2VtZW50KTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGNsaWNrUGxhY2VtZW50U2hpcCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdW5jbGlja1NoaXBQbGFjZW1lbnQpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHVuY2xpY2tTaGlwUGxhY2VtZW50KTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGRyYWdTaGlwT25QbGFjZW1lbnRCb2FyZCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwT25QbGFjZW1lbnRCb2FyZCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB1bnBsYWNlU2hpcEZyb21QbGFjZW1lbnRCb2FyZCk7XG59O1xuXG5jb25zdCByb3RhdGVTaGlwT25QbGFjZW1lbnRCb2FyZCA9IChlKSA9PiB7XG4gIGlmIChlLmRldGFpbCA+IDEpIHJldHVybjtcbiAgaWYgKGlzRHJhZ2dpbmdTaGlwKSByZXR1cm47XG5cbiAgY29uc3Qgcm90YXRlZFNoaXBDZWxsID0gZS5jdXJyZW50VGFyZ2V0O1xuICBjb25zdCB7IHNoaXAsIGxlbmd0aCB9ID0gcm90YXRlZFNoaXBDZWxsLmRhdGFzZXQ7XG4gIGxldCBib3dYID0gK3JvdGF0ZWRTaGlwQ2VsbC5kYXRhc2V0LmJvd1g7XG4gIGxldCBib3dZID0gK3JvdGF0ZWRTaGlwQ2VsbC5kYXRhc2V0LmJvd1k7XG4gIGNvbnN0IHJvdGF0ZWRTaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYWNlbWVudCAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXB9XCJdIC5zcHJpdGUtY29udGFpbmVyYCk7XG4gIGNvbnN0IHJvdGF0ZWRTaGlwQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxhY2VtZW50IC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcH1cIl1gKTtcblxuICByb3RhdGVkU2hpcENlbGxzLmZvckVhY2goKHNoaXBDZWxsKSA9PiB7XG4gICAgZW1wdHlDZWxsRGF0YU9uUGxhY2VtZW50Qm9hcmQoc2hpcENlbGwpO1xuICB9KTtcblxuICBpZiAocm90YXRlZFNoaXBDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICByb3RhdGVkU2hpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJyk7XG4gIH0gZWxzZSB7XG4gICAgcm90YXRlZFNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICB9XG5cbiAgbGV0IHNjYW5VcCA9IHRydWU7XG4gIGxldCBzY2FuUmlnaHQgPSB0cnVlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgK2xlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2hpcENlbGwgPSByb3RhdGVkU2hpcENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2Jvd1ggLSBpfVwiXVtkYXRhLXk9XCIke2Jvd1l9XCJdYClcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtib3dYfVwiXVtkYXRhLXk9XCIke2Jvd1kgLSBpfVwiXWApO1xuICAgIGlmIChcbiAgICAgICFzaGlwQ2VsbFxuICAgICAgfHwgKHNoaXBDZWxsLmRhdGFzZXQuc2hpcCAmJiBzaGlwQ2VsbC5kYXRhc2V0LnNoaXAgIT09IHJvdGF0ZWRTaGlwQ2VsbC5kYXRhc2V0LnNoaXApXG4gICAgKSB7XG4gICAgICBpZiAoYm93WSA9PT0gMCkgc2NhblVwID0gdHJ1ZTtcbiAgICAgIGlmIChib3dZID09PSA5KSBzY2FuVXAgPSBmYWxzZTtcbiAgICAgIGlmIChib3dYID09PSAwKSBzY2FuUmlnaHQgPSB0cnVlO1xuICAgICAgaWYgKGJvd1ggPT09IDkpIHNjYW5SaWdodCA9IGZhbHNlO1xuICAgICAgYm93WSA9IHNjYW5VcCA/IGJvd1kgKyAxIDogYm93WSAtIDE7XG4gICAgICBib3dYID0gc2NhblJpZ2h0ID8gYm93WCArIDEgOiBib3dYIC0gMTtcbiAgICAgIGkgPSAtMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgK2xlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2hpcENlbGwgPSByb3RhdGVkU2hpcENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2Jvd1ggLSBpfVwiXVtkYXRhLXk9XCIke2Jvd1l9XCJdYClcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtib3dYfVwiXVtkYXRhLXk9XCIke2Jvd1kgLSBpfVwiXWApO1xuICAgIGlmICghc2hpcENlbGwpIGNvbnRpbnVlO1xuICAgIGlmICghc2hpcENlbGwuZGF0YXNldC5zaGlwKSB7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBzaGlwQ2VsbC5hcHBlbmRDaGlsZChyb3RhdGVkU2hpcENvbnRhaW5lcik7XG4gICAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoJ2JvdycpO1xuICAgICAgfVxuICAgICAgc2hpcENlbGwuZGF0YXNldC5zaGlwID0gc2hpcDtcbiAgICAgIHNoaXBDZWxsLmRhdGFzZXQubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgc2hpcENlbGwuZGF0YXNldC5ib3dYID0gYm93WDtcbiAgICAgIHNoaXBDZWxsLmRhdGFzZXQuYm93WSA9IGJvd1k7XG4gICAgICBzaGlwQ2VsbC5kYXRhc2V0Lmhvcml6b250YWwgPSByb3RhdGVkU2hpcENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKTtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXJzVG9TaGlwQ2VsbChzaGlwQ2VsbCk7XG4gICAgfVxuICB9XG59O1xuXG5sZXQgaXNEcmFnZ2luZ1NoaXAgPSBmYWxzZTtcbmxldCBkcmFnZ2VkU2hpcENvbnRhaW5lciA9IG51bGw7XG5sZXQgZHJhZ2dlZFNoaXBDZWxsID0gbnVsbDtcbmxldCBkcmFnZ2VkU2hpcENlbGxzID0gbnVsbDtcblxuY29uc3QgcmVzZXRTaGlwUGxhY2VtZW50RHJhZ0RhdGEgPSAoKSA9PiB7XG4gIGlzRHJhZ2dpbmdTaGlwID0gZmFsc2U7XG4gIGRyYWdnZWRTaGlwQ29udGFpbmVyID0gbnVsbDtcbiAgZHJhZ2dlZFNoaXBDZWxsID0gbnVsbDtcbiAgZHJhZ2dlZFNoaXBDZWxscyA9IG51bGw7XG59O1xuXG5jb25zdCBkcmFnU2hpcE9uUGxhY2VtZW50Qm9hcmQgPSAoZSkgPT4ge1xuICBpc0RyYWdnaW5nU2hpcCA9IHRydWU7XG4gIGRyYWdnZWRTaGlwQ2VsbCA9IGUuY3VycmVudFRhcmdldDtcblxuICBjb25zdCB7IHNoaXAgfSA9IGRyYWdnZWRTaGlwQ2VsbC5kYXRhc2V0O1xuICBkcmFnZ2VkU2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwfVwiXSAuc3ByaXRlLWNvbnRhaW5lcmApO1xuICBkcmFnZ2VkU2hpcENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnBsYWNlbWVudCAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXB9XCJdYCk7XG5cbiAgZHJhZ2dlZFNoaXBDZWxsLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG59O1xuXG5jb25zdCBtb3ZlRHJhZ2dlZFNoaXBPblBsYWNlbWVudEJvYXJkID0gKGUpID0+IHtcbiAgaWYgKCFpc0RyYWdnaW5nU2hpcCkgcmV0dXJuO1xuXG4gIGNvbnN0IHsgeCwgeSB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gIGNvbnN0IHsgc2hpcCwgbGVuZ3RoIH0gPSBkcmFnZ2VkU2hpcENlbGwuZGF0YXNldDtcbiAgY29uc3QgYm93WCA9ICt4ICsgK2RyYWdnZWRTaGlwQ2VsbC5kYXRhc2V0LmJvd1ggLSBkcmFnZ2VkU2hpcENlbGwuZGF0YXNldC54O1xuICBjb25zdCBib3dZID0gK3kgKyArZHJhZ2dlZFNoaXBDZWxsLmRhdGFzZXQuYm93WSAtIGRyYWdnZWRTaGlwQ2VsbC5kYXRhc2V0Lnk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCArbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaGlwQ2VsbCA9IGRyYWdnZWRTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7Ym93WCAtIGl9XCJdW2RhdGEteT1cIiR7Ym93WX1cIl1gKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2Jvd1h9XCJdW2RhdGEteT1cIiR7Ym93WSAtIGl9XCJdYCk7XG4gICAgaWYgKFxuICAgICAgIXNoaXBDZWxsXG4gICAgICB8fCAoc2hpcENlbGwuZGF0YXNldC5zaGlwICYmIHNoaXBDZWxsLmRhdGFzZXQuc2hpcCAhPT0gZHJhZ2dlZFNoaXBDZWxsLmRhdGFzZXQuc2hpcClcbiAgICApIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGJvd0NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxhY2VtZW50IC5jZWxsW2RhdGEteD1cIiR7Ym93WH1cIl1bZGF0YS15PVwiJHtib3dZfVwiXWApO1xuICBpZiAoIWJvd0NlbGwpIHJldHVybjtcbiAgYm93Q2VsbC5hcHBlbmRDaGlsZChkcmFnZ2VkU2hpcENvbnRhaW5lcik7XG5cbiAgZHJhZ2dlZFNoaXBDZWxscy5mb3JFYWNoKChzaGlwQ2VsbCkgPT4ge1xuICAgIGVtcHR5Q2VsbERhdGFPblBsYWNlbWVudEJvYXJkKHNoaXBDZWxsKTtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCArbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaGlwQ2VsbCA9IGRyYWdnZWRTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7Ym93WCAtIGl9XCJdW2RhdGEteT1cIiR7Ym93WX1cIl1gKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2Jvd1h9XCJdW2RhdGEteT1cIiR7Ym93WSAtIGl9XCJdYCk7XG4gICAgaWYgKCFzaGlwQ2VsbCkgeyBjb250aW51ZTsgfVxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKCdib3cnKTtcbiAgICB9XG4gICAgaWYgKCFzaGlwQ2VsbC5kYXRhc2V0LnNoaXApIHtcbiAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICBzaGlwQ2VsbC5kYXRhc2V0LnNoaXAgPSBzaGlwO1xuICAgICAgc2hpcENlbGwuZGF0YXNldC5sZW5ndGggPSBsZW5ndGg7XG4gICAgICBzaGlwQ2VsbC5kYXRhc2V0LmJvd1ggPSBib3dYO1xuICAgICAgc2hpcENlbGwuZGF0YXNldC5ib3dZID0gYm93WTtcbiAgICAgIHNoaXBDZWxsLmRhdGFzZXQuaG9yaXpvbnRhbCA9IGRyYWdnZWRTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpO1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcnNUb1NoaXBDZWxsKHNoaXBDZWxsKTtcbiAgICB9XG4gIH1cblxuICBkcmFnZ2VkU2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwfVwiXSAuc3ByaXRlLWNvbnRhaW5lcmApO1xuICBkcmFnZ2VkU2hpcENlbGwgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gIGRyYWdnZWRTaGlwQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxhY2VtZW50IC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcH1cIl1gKTtcbn07XG5cbmNvbnN0IGNoZWNrRm9yQXRMZWFzdE9uZVNoaXBPblBsYWNlbWVudEJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBoYXNTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcy5wbGFjZW1lbnQgLnNwcml0ZS1jb250YWluZXInKTtcbiAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFjZW1lbnRDb25maXJtQnRuJyk7XG4gIGlmIChoYXNTaGlwKSB7XG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ29uZmlybVBsYWNlbWVudCk7XG4gICAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpcm1CdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NvbmZpcm1QbGFjZW1lbnQpO1xuICAgIGNvbmZpcm1CdXR0b24uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgfVxufTtcblxuY29uc3QgdW5wbGFjZVNoaXBGcm9tUGxhY2VtZW50Qm9hcmQgPSAoZSkgPT4ge1xuICBjb25zdCB7IHNoaXAgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICBjb25zdCB1bnBsYWNlZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQuaW5mbyAuY29udGFpbmVyW2RhdGEtc2hpcD1cIiR7c2hpcH1cIl1gKTtcbiAgY29uc3QgdW5wbGFjZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYWNlbWVudC5pbmZvIC5jb250YWluZXJbZGF0YS1zaGlwPVwiJHtzaGlwfVwiXSAuY2VsbDpsYXN0LWNoaWxkYCk7XG4gIGNvbnN0IHNwcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwfVwiXSAuc3ByaXRlLWNvbnRhaW5lcmApO1xuICBjb25zdCBzaGlwQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxhY2VtZW50IC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcH1cIl1gKTtcbiAgc2hpcENlbGxzLmZvckVhY2goKHNoaXBDZWxsKSA9PiB7XG4gICAgZW1wdHlDZWxsRGF0YU9uUGxhY2VtZW50Qm9hcmQoc2hpcENlbGwpO1xuICB9KTtcbiAgc3ByaXRlLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcbiAgdW5wbGFjZWRDZWxsLmFwcGVuZENoaWxkKHNwcml0ZSk7XG4gIHVucGxhY2VkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3VucGxhY2VkJyk7XG4gIHVucGxhY2VkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VTaGlwT25QbGFjZW1lbnRCb2FyZCwgeyBvbmNlOiB0cnVlIH0pO1xuICBjaGVja0ZvckF0TGVhc3RPbmVTaGlwT25QbGFjZW1lbnRCb2FyZCgpO1xufTtcblxuY29uc3QgcmVzZXRQbGFjZW1lbnRCb2FyZCA9ICgpID0+IHtcbiAgc2hpcHNEYXRhLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjb25zdCB1bnBsYWNlZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQuaW5mbyAuY29udGFpbmVyW2RhdGEtc2hpcD1cIiR7c2hpcC50eXBlfVwiXWApO1xuICAgIGNvbnN0IHVucGxhY2VkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQuaW5mbyAuY29udGFpbmVyW2RhdGEtc2hpcD1cIiR7c2hpcC50eXBlfVwiXSAuY2VsbDpsYXN0LWNoaWxkYCk7XG4gICAgY29uc3Qgc3ByaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYWNlbWVudCAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXAudHlwZX1cIl0gLnNwcml0ZS1jb250YWluZXJgKTtcbiAgICBpZiAoc3ByaXRlKSB7XG4gICAgICBjb25zdCBzaGlwQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxhY2VtZW50IC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcC50eXBlfVwiXWApO1xuICAgICAgc2hpcENlbGxzLmZvckVhY2goKHNoaXBDZWxsKSA9PiB7XG4gICAgICAgIGVtcHR5Q2VsbERhdGFPblBsYWNlbWVudEJvYXJkKHNoaXBDZWxsKTtcbiAgICAgIH0pO1xuICAgICAgc3ByaXRlLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcbiAgICAgIHVucGxhY2VkQ2VsbC5hcHBlbmRDaGlsZChzcHJpdGUpO1xuICAgICAgdW5wbGFjZWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndW5wbGFjZWQnKTtcbiAgICAgIHVucGxhY2VkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VTaGlwT25QbGFjZW1lbnRCb2FyZCwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH1cbiAgfSk7XG4gIGNoZWNrRm9yQXRMZWFzdE9uZVNoaXBPblBsYWNlbWVudEJvYXJkKCk7XG59O1xuXG5jb25zdCBwbGFjZVNoaXBPblBsYWNlbWVudEJvYXJkID0gKGUpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZS5jdXJyZW50VGFyZ2V0O1xuICBjb25zdCB7IHNoaXAsIGxlbmd0aCB9ID0gY29udGFpbmVyLmRhdGFzZXQ7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd1bnBsYWNlZCcpO1xuXG4gIGNvbnN0IHNwcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQgW2RhdGEtc2hpcD1cIiR7c2hpcH1cIl0gLmNlbGwgLnNwcml0ZS1jb250YWluZXJgKTtcbiAgbGV0IGJvd1ggPSA5O1xuICBsZXQgYm93WSA9IDk7XG5cbiAgLy8gQ2hlY2sgZm9yIHZhbGlkIGluaXRpYWwgcGxhY2VtZW50XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaGlwQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7Ym93WCAtIGl9XCJdW2RhdGEteT1cIiR7Ym93WX1cIl1gKTtcbiAgICBpZiAoIXNoaXBDZWxsKSB7XG4gICAgICBib3dYID0gOTtcbiAgICAgIGJvd1kgLT0gMTtcbiAgICAgIGkgPSAtMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoc2hpcENlbGwuZGF0YXNldC5zaGlwKSB7XG4gICAgICBib3dYIC09IDE7XG4gICAgICBpID0gLTE7XG4gICAgfVxuICB9XG5cbiAgLy8gQWN0dWFsbHkgcGxhY2Ugc3ByaXRlIG9uIHN1Y2Nlc3NcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNoaXBDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtib3dYIC0gaX1cIl1bZGF0YS15PVwiJHtib3dZfVwiXWApO1xuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBzaGlwQ2VsbC5hcHBlbmRDaGlsZChzcHJpdGUpO1xuICAgICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZCgnYm93Jyk7XG4gICAgfVxuICAgIHNoaXBDZWxsLmRhdGFzZXQuc2hpcCA9IHNoaXA7XG4gICAgc2hpcENlbGwuZGF0YXNldC5sZW5ndGggPSBsZW5ndGg7XG4gICAgc2hpcENlbGwuZGF0YXNldC5ib3dYID0gYm93WDtcbiAgICBzaGlwQ2VsbC5kYXRhc2V0LmJvd1kgPSBib3dZO1xuICAgIHNoaXBDZWxsLmRhdGFzZXQuaG9yaXpvbnRhbCA9IHNwcml0ZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKTtcbiAgICBhZGRFdmVudExpc3RlbmVyc1RvU2hpcENlbGwoc2hpcENlbGwpO1xuICB9XG4gIGNoZWNrRm9yQXRMZWFzdE9uZVNoaXBPblBsYWNlbWVudEJvYXJkKCk7XG59O1xuXG5jb25zdCByZXNpemVQbGFjZW1lbnRDZWxscyA9ICgpID0+IHtcbiAgY29uc3QgYm93Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZW1lbnQgLmNlbGwnKTtcbiAgY29uc3QgcGxhY2VtZW50Q2VsbFdpZHRoID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoYm93Q2VsbCkud2lkdGg7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wbGFjZW1lbnQtY2VsbC13aWR0aCcsIHBsYWNlbWVudENlbGxXaWR0aCk7XG59O1xuXG5jb25zdCBpbml0aWFsaXplU2hpcFBsYWNlbWVudFNjcmVlbiA9ICgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCByZXNldFNoaXBQbGFjZW1lbnREcmFnRGF0YSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVQbGFjZW1lbnRDZWxscyk7XG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuICBjb25zdCBwbGFjZW1lbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBsYWNlbWVudEluZm8uY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50JywgJ2luZm8nKTtcblxuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDEudGV4dENvbnRlbnQgPSBjdXJyZW50UGxheWVyLm5hbWU7XG5cbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAyLnRleHRDb250ZW50ID0gJ0FycmFuZ2UgeW91ciBmbGVldCBvbiB0aGUgYmF0dGxlZmllbGQhJztcblxuICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDMudGV4dENvbnRlbnQgPSAnU2hpcHMgYXZhaWxhYmxlOic7XG5cbiAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2hpcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpcHMnKTtcblxuICBzaGlwc0RhdGEuZm9yRWFjaCgoc2hpcERhdGEpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywgJ3VucGxhY2VkJyk7XG4gICAgY29udGFpbmVyLmRhdGFzZXQuc2hpcCA9IHNoaXBEYXRhLnR5cGU7XG4gICAgY29udGFpbmVyLmRhdGFzZXQubGVuZ3RoID0gc2hpcERhdGEubGVuZ3RoO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlU2hpcE9uUGxhY2VtZW50Qm9hcmQsIHsgb25jZTogdHJ1ZSB9KTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXBEYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcblxuICAgICAgaWYgKGkgPT09IHNoaXBEYXRhLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBzcHJpdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3ByaXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Nwcml0ZS1jb250YWluZXInKTtcbiAgICAgICAgc3ByaXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcblxuICAgICAgICBjb25zdCBzaGlwU3ByaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHNoaXBTcHJpdGUuc3JjID0gc2hpcERhdGEuc3JjO1xuICAgICAgICBzaGlwU3ByaXRlLmNsYXNzTGlzdC5hZGQoJ3Nwcml0ZScpO1xuICAgICAgICBzaGlwU3ByaXRlLmRyYWdnYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHNwcml0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwU3ByaXRlKTtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChzcHJpdGVDb250YWluZXIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2JvdycpO1xuICAgICAgfVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgICBzaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9KTtcblxuICBwbGFjZW1lbnRJbmZvLmFwcGVuZENoaWxkKHAxKTtcbiAgcGxhY2VtZW50SW5mby5hcHBlbmRDaGlsZChwMik7XG4gIHBsYWNlbWVudEluZm8uYXBwZW5kQ2hpbGQocDMpO1xuICBwbGFjZW1lbnRJbmZvLmFwcGVuZENoaWxkKHNoaXBzQ29udGFpbmVyKTtcbiAgZ2FtZS5hcHBlbmRDaGlsZChwbGFjZW1lbnRJbmZvKTtcblxuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzJyk7XG4gIGJvYXJkcy5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQnKTtcblxuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuXG4gIGZvciAobGV0IGkgPSA5OyBpID49IDA7IGkgLT0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICBjZWxsLmRhdGFzZXQueCA9IGo7XG4gICAgICBjZWxsLmRhdGFzZXQueSA9IGk7XG4gICAgICBjZWxsLmRhdGFzZXQucGxheWVyTmFtZSA9IGN1cnJlbnRQbGF5ZXIubmFtZTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG1vdmVEcmFnZ2VkU2hpcE9uUGxhY2VtZW50Qm9hcmQpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZW50ZXInLCBtb3ZlRHJhZ2dlZFNoaXBPblBsYWNlbWVudEJvYXJkKTtcbiAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgfVxuICBib2FyZHMuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuXG4gIGNvbnN0IHBsYWNlbWVudEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGxhY2VtZW50QnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQnLCAnYnV0dG9ucycpO1xuXG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICByZXNldEJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZXNldCc7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRQbGFjZW1lbnRCb2FyZCk7XG5cbiAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25maXJtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdkaXNhYmxlZCcpO1xuICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuICBjb25maXJtQnV0dG9uLmlkID0gJ3BsYWNlbWVudENvbmZpcm1CdG4nO1xuXG4gIHBsYWNlbWVudEJ1dHRvbnMuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuICBwbGFjZW1lbnRCdXR0b25zLmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuICBnYW1lLmFwcGVuZENoaWxkKHBsYWNlbWVudEJ1dHRvbnMpO1xuXG4gIHJlc2l6ZVNwcml0ZXMoKTtcbiAgcmVzaXplUGxhY2VtZW50Q2VsbHMoKTtcbn07XG5cbmNvbnN0IGNsZWFyR2FtZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XG4gIHdoaWxlIChnYW1lLmZpcnN0Q2hpbGQpIHtcbiAgICBnYW1lLnJlbW92ZUNoaWxkKGdhbWUuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IGluaXRhbGl6ZUdhbWVDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuXG4gIGNvbnN0IHNldHRpbmdzQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNldHRpbmdzQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzLWJ0bi1jb250YWluZXInLCAnbWF4LXdpZHRoJyk7XG5cbiAgY29uc3Qgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2V0dGluZ3NCdG4uY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3MtYnRuJyk7XG4gIHNldHRpbmdzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tQYXVzZU1lbnUpO1xuXG4gIGNvbnN0IHNldHRpbmdzQnRuU1ZHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG5cbiAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkcy5jbGFzc0xpc3QuYWRkKCdib2FyZHMnLCAnbWF4LXdpZHRoJyk7XG5cbiAgc2V0dGluZ3NCdG4uYXBwZW5kQ2hpbGQoc2V0dGluZ3NCdG5TVkcpO1xuICBzZXR0aW5nc0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXR0aW5nc0J0bik7XG4gIGdhbWUuYXBwZW5kQ2hpbGQoc2V0dGluZ3NCdG5Db250YWluZXIpO1xuICBnYW1lLmFwcGVuZENoaWxkKGJvYXJkcyk7XG5cbiAgc2V0dGluZ3NCdG5TVkcub3V0ZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y29nPC90aXRsZT48cGF0aCBkPVwiTTEyLDE1LjVBMy41LDMuNSAwIDAsMSA4LjUsMTJBMy41LDMuNSAwIDAsMSAxMiw4LjVBMy41LDMuNSAwIDAsMSAxNS41LDEyQTMuNSwzLjUgMCAwLDEgMTIsMTUuNU0xOS40MywxMi45N0MxOS40NywxMi42NSAxOS41LDEyLjMzIDE5LjUsMTJDMTkuNSwxMS42NyAxOS40NywxMS4zNCAxOS40MywxMUwyMS41NCw5LjM3QzIxLjczLDkuMjIgMjEuNzgsOC45NSAyMS42Niw4LjczTDE5LjY2LDUuMjdDMTkuNTQsNS4wNSAxOS4yNyw0Ljk2IDE5LjA1LDUuMDVMMTYuNTYsNi4wNUMxNi4wNCw1LjY2IDE1LjUsNS4zMiAxNC44Nyw1LjA3TDE0LjUsMi40MkMxNC40NiwyLjE4IDE0LjI1LDIgMTQsMkgxMEM5Ljc1LDIgOS41NCwyLjE4IDkuNSwyLjQyTDkuMTMsNS4wN0M4LjUsNS4zMiA3Ljk2LDUuNjYgNy40NCw2LjA1TDQuOTUsNS4wNUM0LjczLDQuOTYgNC40Niw1LjA1IDQuMzQsNS4yN0wyLjM0LDguNzNDMi4yMSw4Ljk1IDIuMjcsOS4yMiAyLjQ2LDkuMzdMNC41NywxMUM0LjUzLDExLjM0IDQuNSwxMS42NyA0LjUsMTJDNC41LDEyLjMzIDQuNTMsMTIuNjUgNC41NywxMi45N0wyLjQ2LDE0LjYzQzIuMjcsMTQuNzggMi4yMSwxNS4wNSAyLjM0LDE1LjI3TDQuMzQsMTguNzNDNC40NiwxOC45NSA0LjczLDE5LjAzIDQuOTUsMTguOTVMNy40NCwxNy45NEM3Ljk2LDE4LjM0IDguNSwxOC42OCA5LjEzLDE4LjkzTDkuNSwyMS41OEM5LjU0LDIxLjgyIDkuNzUsMjIgMTAsMjJIMTRDMTQuMjUsMjIgMTQuNDYsMjEuODIgMTQuNSwyMS41OEwxNC44NywxOC45M0MxNS41LDE4LjY3IDE2LjA0LDE4LjM0IDE2LjU2LDE3Ljk0TDE5LjA1LDE4Ljk1QzE5LjI3LDE5LjAzIDE5LjU0LDE4Ljk1IDE5LjY2LDE4LjczTDIxLjY2LDE1LjI3QzIxLjc4LDE1LjA1IDIxLjczLDE0Ljc4IDIxLjU0LDE0LjYzTDE5LjQzLDEyLjk3WlwiIC8+PC9zdmc+Jztcbn07XG5cbmNvbnN0IHByaW50UHJldmlvdXNQbGF5ZXJBdHRhY2sgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IFt4LCB5XSA9IHByZXZpb3VzSGl0Q2VsbDtcbiAgY29uc3QgY3VycmVudFBsYXllckhpdENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9hcmQuY3VycmVudCAuY2VsbFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gKTtcbiAgaWYgKCFjdXJyZW50UGxheWVySGl0Q2VsbCkgcmV0dXJuO1xuICBpZiAoY3VycmVudFBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXApIHtcbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IGN1cnJlbnRQbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5zaGlwO1xuICAgIGlmIChjdXJyZW50U2hpcC5oYXNTdW5rKSB7XG4gICAgICBwcmludFNpbmtpbmdTcHJpdGUoY3VycmVudFNoaXApO1xuICAgIH1cbiAgfVxuICBhd2FpdCBoaXRFeHBsb3Npb25FZmZlY3QoY3VycmVudFBsYXllckhpdENlbGwpO1xuICBpZiAoY3VycmVudFBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXApIHtcbiAgICBjdXJyZW50UGxheWVySGl0Q2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICBpZiAoY3VycmVudFBsYXllckhpdENlbGwuZGF0YXNldC5zaGlwKSBhZGRGaXJlRWZmZWN0KGN1cnJlbnRQbGF5ZXJIaXRDZWxsKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50UGxheWVySGl0Q2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgYWRkTWlzc01hcmsoY3VycmVudFBsYXllckhpdENlbGwpO1xuICB9XG59O1xuXG5jb25zdCBpbml0aWFsaXplQm9hcmQgPSBhc3luYyAoKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVTcHJpdGVzKTtcbiAgW2N1cnJlbnRQbGF5ZXIsIHRhcmdldFBsYXllcl0uZm9yRWFjaChhc3luYyAocGxheWVyKSA9PiB7XG4gICAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcycpO1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgICBpZiAocGxheWVyID09PSBjdXJyZW50UGxheWVyKSBib2FyZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgaWYgKHBsYXllciA9PT0gdGFyZ2V0UGxheWVyKSBib2FyZC5jbGFzc0xpc3QuYWRkKCd0YXJnZXQnKTtcblxuICAgIGZvciAobGV0IHkgPSA5OyB5ID49IDA7IHkgLT0gMSkge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgIGNlbGwuZGF0YXNldC54ID0geDtcbiAgICAgICAgY2VsbC5kYXRhc2V0LnkgPSB5O1xuICAgICAgICBjZWxsLmRhdGFzZXQucGxheWVyTmFtZSA9IHBsYXllci5uYW1lO1xuICAgICAgICBjZWxsLmRhdGFzZXQuc2hpcCA9IHBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXBcbiAgICAgICAgICA/IHBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXAudHlwZVxuICAgICAgICAgIDogJyc7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwbGF5ZXIgPT09IHRhcmdldFBsYXllclxuICAgICAgICAgICYmIGN1cnJlbnRQbGF5ZXIgaW5zdGFuY2VvZiBQbGF5ZXJcbiAgICAgICAgICAmJiAhKGN1cnJlbnRQbGF5ZXIgaW5zdGFuY2VvZiBBSSlcbiAgICAgICAgKSBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGl0Q2VsbFBsYXllcik7XG5cbiAgICAgICAgY29uc3QgW3ByZXZYLCBwcmV2WV0gPSBwcmV2aW91c0hpdENlbGw7XG4gICAgICAgIGlmIChwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5zaGlwICYmIHBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXAuaGFzU3VuaykgY2VsbC5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG5cbiAgICAgICAgaWYgKCEoKHByZXZYID09PSB4ICYmIHByZXZZID09PSB5KSAmJiAocGxheWVyID09PSBjdXJyZW50UGxheWVyKSkpIHtcbiAgICAgICAgICBpZiAocGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uaXNIaXQgJiYgcGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcCkge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgIGlmICghcGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcC5oYXNTdW5rKSBhZGRGaXJlRWZmZWN0KGNlbGwpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uaXNIaXQgJiYgIXBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXApIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgYWRkTWlzc01hcmsoY2VsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGJvYXJkcy5hcHBlbmRDaGlsZChib2FyZCk7XG4gIH0pO1xuICBwcmludFNwcml0ZXMoKTtcbiAgaWYgKHBsYXllcnMuZXZlcnkoKHBsYXllcikgPT4gIShwbGF5ZXIgaW5zdGFuY2VvZiBBSSkpKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwcmludFByZXZpb3VzUGxheWVyQXR0YWNrKCk7XG4gICAgfSwgNTAwKTtcbiAgfVxufTtcblxuY29uc3QgaGlkZVBsYXllckhQID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJzSFAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLWluZm8nKTtcbiAgcGxheWVyc0hQLmZvckVhY2goKHBsYXllckhQKSA9PiBwbGF5ZXJIUC5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXR5LWhpZGRlbicpKTtcbn07XG5cbmNvbnN0IHVuaGlkZVBsYXllckhQID0gKCkgPT4ge1xuICBjb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbiAgY29uc3QgcGxheWVyc0hQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1pbmZvJyk7XG4gIGdhbWUuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgIHBsYXllcnNIUC5mb3JFYWNoKChwbGF5ZXJIUCkgPT4gcGxheWVySFAuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJpbGl0eS1oaWRkZW4nKSk7XG4gIH0sIHsgb25jZTogdHJ1ZSB9KTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVQbGF5ZXJIUCA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWN1cnJlbnQtaGVhbHRoJywgJzEwMCUnKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWN1cnJlbnQtaGl0JywgJzAlJyk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jdXJyZW50LWVtcHR5JywgJzAlJyk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1lbmVteS1oZWFsdGgnLCAnMTAwJScpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZW5lbXktaGl0JywgJzAlJyk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1lbmVteS1lbXB0eScsICcwJScpO1xuXG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuICBwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHRhZyA9IGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllciA/ICdjdXJyZW50JyA6ICdlbmVteSc7XG5cbiAgICBjb25zdCBwbGF5ZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVySW5mby5jbGFzc0xpc3QuYWRkKHRhZywgJ3BsYXllci1pbmZvJyk7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS50ZXh0Q29udGVudCA9IHRhZyA9PT0gJ2N1cnJlbnQnID8gJ0FsbGllZCBmbGVldCcgOiAnRW5lbXkgZmxlZXQnO1xuXG4gICAgY29uc3QgaGVhbHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhbHRoLmNsYXNzTGlzdC5hZGQoJ2hlYWx0aCcpO1xuXG4gICAgY29uc3QgdG90YWxIUCA9IHBsYXllclxuICAgICAgLmJvYXJkXG4gICAgICAuZmxlZXRcbiAgICAgIC5yZWR1Y2UoKHRvdGFsLCBzaGlwKSA9PiB0b3RhbCArIHNoaXAubGVuZ3RoLCAwKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBgJHt0b3RhbEhQfS8ke3RvdGFsSFB9YDtcblxuICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhci5jbGFzc0xpc3QuYWRkKCdiYXInKTtcblxuICAgIGNvbnN0IGhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhpdC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcblxuICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW1wdHkuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcblxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAyLnRleHRDb250ZW50ID0gcGxheWVyLm5hbWU7XG5cbiAgICBoZWFsdGguYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgaGVhbHRoLmFwcGVuZENoaWxkKGJhcik7XG4gICAgaGVhbHRoLmFwcGVuZENoaWxkKGhpdCk7XG4gICAgaGVhbHRoLmFwcGVuZENoaWxkKGVtcHR5KTtcbiAgICBwbGF5ZXJJbmZvLmFwcGVuZENoaWxkKHAxKTtcbiAgICBwbGF5ZXJJbmZvLmFwcGVuZENoaWxkKGhlYWx0aCk7XG4gICAgcGxheWVySW5mby5hcHBlbmRDaGlsZChwMik7XG4gICAgZ2FtZS5hcHBlbmRDaGlsZChwbGF5ZXJJbmZvKTtcbiAgfSk7XG59O1xuXG5jb25zdCBpbml0aWFsaXplR2FtZSA9ICgpID0+IHtcbiAgaW5pdGFsaXplR2FtZUNvbnRhaW5lcigpO1xuICBpbml0aWFsaXplUGxheWVySFAoKTtcbiAgaW5pdGlhbGl6ZUJvYXJkKCk7XG59O1xuXG5jb25zdCBjbGVhck1haW5NZW51ID0gKCkgPT4ge1xuICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUnKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBtYWluTWVudS5jbGFzc0xpc3QuYWRkKCdjbGljay1zaW5rJyk7XG4gICAgbWFpbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgbWFpbk1lbnUucmVtb3ZlKCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHN0YXJ0R2FtZVBsYXllciA9IGFzeW5jIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgcGxheWVyMU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMU5hbWVJbnB1dCcpLnZhbHVlXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMU5hbWVJbnB1dCcpLnZhbHVlXG4gICAgOiAnUGxheWVyIDEnO1xuICBjb25zdCBwbGF5ZXIyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIyTmFtZUlucHV0JykudmFsdWVcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIyTmFtZUlucHV0JykudmFsdWVcbiAgICA6ICdQbGF5ZXIgMic7XG5cbiAgZ2VuZXJhdGVQbGF5ZXJzKFxuICAgIFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2h1bWFuJyxcbiAgICAgICAgbmFtZTogcGxheWVyMU5hbWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnaHVtYW4nLFxuICAgICAgICBuYW1lOiBwbGF5ZXIyTmFtZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgKTtcblxuICBbY3VycmVudFBsYXllciwgdGFyZ2V0UGxheWVyXSA9IHBsYXllcnM7XG5cbiAgYXdhaXQgY2xlYXJNYWluTWVudSgpO1xuICBpbml0YWxpemVHYW1lQ29udGFpbmVyKCk7XG4gIGluaXRpYWxpemVTaGlwUGxhY2VtZW50U2NyZWVuKCk7XG59O1xuXG5jb25zdCBzdGFydEdhbWVBSSA9IGFzeW5jIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxTmFtZUlucHV0JykudmFsdWVcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxTmFtZUlucHV0JykudmFsdWVcbiAgICA6ICdQbGF5ZXIgMSc7XG4gIGNvbnN0IEFJTGV2ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51IGZvcm0gLmJ1dHRvbi5BSS50b2dnbGVkJykuZGF0YXNldC5sZXZlbDtcblxuICBnZW5lcmF0ZVBsYXllcnMoXG4gICAgW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnaHVtYW4nLFxuICAgICAgICBuYW1lOiBwbGF5ZXJOYW1lLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ0FJJyxcbiAgICAgICAgZGlmZmljdWx0eTogQUlMZXZlbCxcbiAgICAgIH0sXG4gICAgXSxcbiAgKTtcblxuICBbY3VycmVudFBsYXllciwgdGFyZ2V0UGxheWVyXSA9IHBsYXllcnM7XG5cbiAgYXdhaXQgY2xlYXJNYWluTWVudSgpO1xuICBpbml0YWxpemVHYW1lQ29udGFpbmVyKCk7XG4gIGluaXRpYWxpemVTaGlwUGxhY2VtZW50U2NyZWVuKCk7XG59O1xuXG5jb25zdCBjbGVhck1haW5NZW51QnV0dG9ucyA9ICgpID0+IHtcbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUgLmJ1dHRvbnMnKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NsaWNrLXNpbmsnKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2stc2luaycpO1xuICAgICAgd2hpbGUgKGJ1dHRvbnNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBidXR0b25zQ29udGFpbmVyLnJlbW92ZUNoaWxkKGJ1dHRvbnNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2hvd1ZlcnN1c1BsYXllciA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgY2xlYXJNYWluTWVudUJ1dHRvbnMoKTtcblxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbWVudSAuYnV0dG9ucycpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwxLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gIGxhYmVsMS5odG1sRm9yID0gJ3BsYXllcjFOYW1lSW5wdXQnO1xuICBsYWJlbDEudGV4dENvbnRlbnQgPSAnUGxheWVyIDE6JztcblxuICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dDEuaWQgPSAncGxheWVyMU5hbWVJbnB1dCc7XG4gIGlucHV0MS50eXBlID0gJ3RleHQnO1xuICBpbnB1dDEucGxhY2Vob2xkZXIgPSAnTmFtZSc7XG4gIGlucHV0MS5tYXhMZW5ndGggPSAxNjtcblxuICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGNvbnN0IGxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsMi5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICBsYWJlbDIuaHRtbEZvciA9ICdwbGF5ZXIyTmFtZUlucHV0JztcbiAgbGFiZWwyLnRleHRDb250ZW50ID0gJ1BsYXllciAyOic7XG5cbiAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQyLmlkID0gJ3BsYXllcjJOYW1lSW5wdXQnO1xuICBpbnB1dDIudHlwZSA9ICd0ZXh0JztcbiAgaW5wdXQyLnBsYWNlaG9sZGVyID0gJ05hbWUnO1xuICBpbnB1dDIubWF4TGVuZ3RoID0gMTY7XG5cbiAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBjb25zdCBidG5TdGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5TdGFydC5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgYnRuU3RhcnQudHlwZSA9ICdzdWJtaXQnO1xuICBidG5TdGFydC50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lJztcbiAgYnRuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWVQbGF5ZXIpO1xuXG4gIGNvbnN0IGJ0bkJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuQmFjay5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgYnRuQmFjay50ZXh0Q29udGVudCA9ICdCYWNrJztcbiAgYnRuQmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dWZXJzdXNPcHRpb25zKTtcblxuICBsaTEuYXBwZW5kQ2hpbGQobGFiZWwxKTtcbiAgbGkxLmFwcGVuZENoaWxkKGlucHV0MSk7XG4gIGxpMi5hcHBlbmRDaGlsZChsYWJlbDIpO1xuICBsaTIuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcbiAgbGkzLmFwcGVuZENoaWxkKGJ0blN0YXJ0KTtcbiAgdWwuYXBwZW5kQ2hpbGQobGkxKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGkyKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGkzKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh1bCk7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQmFjayk7XG59O1xuXG5jb25zdCB0b2dnbGVBSURpZmZpY3VsdHkgPSAoZSkgPT4ge1xuICBjb25zdCBjdXJyZW50VG9nZ2xlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUgZm9ybSAuYnV0dG9uLkFJLnRvZ2dsZWQnKTtcbiAgY29uc3QgY2xpY2tlZEJ1dHRvbiA9IGUuY3VycmVudFRhcmdldDtcblxuICBjdXJyZW50VG9nZ2xlZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGVkJyk7XG4gIGNsaWNrZWRCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9nZ2xlZCcpO1xufTtcblxuY29uc3Qgc2hvd1ZlcnN1c0FJID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBjbGVhck1haW5NZW51QnV0dG9ucygpO1xuXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51IC5idXR0b25zJyk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gIGxhYmVsLmh0bWxGb3IgPSAncGxheWVyMU5hbWVJbnB1dCc7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gJ1BsYXllciAxOic7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5pZCA9ICdwbGF5ZXIxTmFtZUlucHV0JztcbiAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSAnTmFtZSc7XG4gIGlucHV0Lm1heExlbmd0aCA9IDE2O1xuXG4gIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICBwLnRleHRDb250ZW50ID0gJ0FJIExldmVsOic7XG5cbiAgY29uc3QgYnRuRWFzeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5FYXN5LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdBSScsICd0b2dnbGVkJyk7XG4gIGJ0bkVhc3kudHlwZSA9ICdidXR0b24nO1xuICBidG5FYXN5LnRleHRDb250ZW50ID0gJ0Vhc3knO1xuICBidG5FYXN5LmRhdGFzZXQubGV2ZWwgPSAnRWFzeSc7XG4gIGJ0bkVhc3kuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBSURpZmZpY3VsdHkpO1xuXG4gIGNvbnN0IGJ0bk5vcm1hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5Ob3JtYWwuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ0FJJyk7XG4gIGJ0bk5vcm1hbC50eXBlID0gJ2J1dHRvbic7XG4gIGJ0bk5vcm1hbC50ZXh0Q29udGVudCA9ICdOb3JtYWwnO1xuICBidG5Ob3JtYWwuZGF0YXNldC5sZXZlbCA9ICdOb3JtYWwnO1xuICBidG5Ob3JtYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBSURpZmZpY3VsdHkpO1xuXG4gIGNvbnN0IGJ0bkNoZWF0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bkNoZWF0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdBSScpO1xuICBidG5DaGVhdC50eXBlID0gJ2J1dHRvbic7XG4gIGJ0bkNoZWF0LnRleHRDb250ZW50ID0gJ0NoZWF0JztcbiAgYnRuQ2hlYXQuZGF0YXNldC5sZXZlbCA9ICdDaGVhdCc7XG4gIGJ0bkNoZWF0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQUlEaWZmaWN1bHR5KTtcblxuICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGNvbnN0IGJ0blN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0blN0YXJ0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICBidG5TdGFydC50eXBlID0gJ3N1Ym1pdCc7XG4gIGJ0blN0YXJ0LnRleHRDb250ZW50ID0gJ1N0YXJ0IEdhbWUnO1xuICBidG5TdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZUFJKTtcblxuICBjb25zdCBidG5CYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bkJhY2suY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIGJ0bkJhY2sudGV4dENvbnRlbnQgPSAnQmFjayc7XG4gIGJ0bkJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VmVyc3VzT3B0aW9ucyk7XG5cbiAgbGkxLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgbGkxLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgbGkyLmFwcGVuZENoaWxkKHApO1xuICBsaTIuYXBwZW5kQ2hpbGQoYnRuRWFzeSk7XG4gIGxpMi5hcHBlbmRDaGlsZChidG5Ob3JtYWwpO1xuICBsaTIuYXBwZW5kQ2hpbGQoYnRuQ2hlYXQpO1xuICBsaTMuYXBwZW5kQ2hpbGQoYnRuU3RhcnQpO1xuICB1bC5hcHBlbmRDaGlsZChsaTEpO1xuICB1bC5hcHBlbmRDaGlsZChsaTIpO1xuICB1bC5hcHBlbmRDaGlsZChsaTMpO1xuICBmb3JtLmFwcGVuZENoaWxkKHVsKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidG5CYWNrKTtcbn07XG5cbmNvbnN0IHNob3dWZXJzdXNPcHRpb25zID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBjbGVhck1haW5NZW51QnV0dG9ucygpO1xuXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51IC5idXR0b25zJyk7XG5cbiAgY29uc3QgdmVyc3VzUGxheWVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHZlcnN1c1BsYXllckJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgdmVyc3VzUGxheWVyQnRuLnRleHRDb250ZW50ID0gJ1ZlcnN1cyBQbGF5ZXInO1xuICB2ZXJzdXNQbGF5ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VmVyc3VzUGxheWVyKTtcblxuICBjb25zdCB2ZXJzdXNBSUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB2ZXJzdXNBSUJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgdmVyc3VzQUlCdG4udGV4dENvbnRlbnQgPSAnVmVyc3VzIEFJJztcbiAgdmVyc3VzQUlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VmVyc3VzQUkpO1xuXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQodmVyc3VzUGxheWVyQnRuKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh2ZXJzdXNBSUJ0bik7XG59O1xuXG5jb25zdCBpbml0aWFsaXplTWFpbk1lbnUgPSAoKSA9PiB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVTcHJpdGVzKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCByZXNldFNoaXBQbGFjZW1lbnREcmFnRGF0YSk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVQbGFjZW1lbnRDZWxscyk7XG4gIGNvbnN0IHNpdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1jb250YWluZXInKTtcblxuICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnUnKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0JhdHRsZXNoaXAnO1xuXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7XG5cbiAgY29uc3QgcGxheUdhbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcGxheUdhbWVCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIHBsYXlHYW1lQnRuLnRleHRDb250ZW50ID0gJ1BsYXkgR2FtZSc7XG4gIHBsYXlHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1ZlcnN1c09wdGlvbnMpO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29weXJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2NvcHlyaWdodCcpO1xuXG4gIGNvbnN0IGdpdGh1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgZ2l0aHViLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL3JpbnRoZW8vJztcblxuICBjb25zdCBnaXRodWJTVkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcblxuICBjb25zdCB5ZWFyID0gKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBgIMKpICR7eWVhcn0gcmludGhlb2A7XG5cbiAgZ2l0aHViLmFwcGVuZENoaWxkKGdpdGh1YlNWRyk7XG4gIGNvcHlyaWdodC5hcHBlbmRDaGlsZChnaXRodWIpO1xuICBjb3B5cmlnaHQuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kKHBsYXlHYW1lQnRuKTtcbiAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBtYWluTWVudS5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcbiAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcbiAgc2l0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluTWVudSk7XG5cbiAgZ2l0aHViU1ZHLm91dGVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmdpdGh1YjwvdGl0bGU+PHBhdGggZD1cIk0xMiwyQTEwLDEwIDAgMCwwIDIsMTJDMiwxNi40MiA0Ljg3LDIwLjE3IDguODQsMjEuNUM5LjM0LDIxLjU4IDkuNSwyMS4yNyA5LjUsMjFDOS41LDIwLjc3IDkuNSwyMC4xNCA5LjUsMTkuMzFDNi43MywxOS45MSA2LjE0LDE3Ljk3IDYuMTQsMTcuOTdDNS42OCwxNi44MSA1LjAzLDE2LjUgNS4wMywxNi41QzQuMTIsMTUuODggNS4xLDE1LjkgNS4xLDE1LjlDNi4xLDE1Ljk3IDYuNjMsMTYuOTMgNi42MywxNi45M0M3LjUsMTguNDUgOC45NywxOCA5LjU0LDE3Ljc2QzkuNjMsMTcuMTEgOS44OSwxNi42NyAxMC4xNywxNi40MkM3Ljk1LDE2LjE3IDUuNjIsMTUuMzEgNS42MiwxMS41QzUuNjIsMTAuMzkgNiw5LjUgNi42NSw4Ljc5QzYuNTUsOC41NCA2LjIsNy41IDYuNzUsNi4xNUM2Ljc1LDYuMTUgNy41OSw1Ljg4IDkuNSw3LjE3QzEwLjI5LDYuOTUgMTEuMTUsNi44NCAxMiw2Ljg0QzEyLjg1LDYuODQgMTMuNzEsNi45NSAxNC41LDcuMTdDMTYuNDEsNS44OCAxNy4yNSw2LjE1IDE3LjI1LDYuMTVDMTcuOCw3LjUgMTcuNDUsOC41NCAxNy4zNSw4Ljc5QzE4LDkuNSAxOC4zOCwxMC4zOSAxOC4zOCwxMS41QzE4LjM4LDE1LjMyIDE2LjA0LDE2LjE2IDEzLjgxLDE2LjQxQzE0LjE3LDE2LjcyIDE0LjUsMTcuMzMgMTQuNSwxOC4yNkMxNC41LDE5LjYgMTQuNSwyMC42OCAxNC41LDIxQzE0LjUsMjEuMjcgMTQuNjYsMjEuNTkgMTUuMTcsMjEuNUMxOS4xNCwyMC4xNiAyMiwxNi40MiAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIC8+PC9zdmc+Jztcbn07XG5cbmluaXRpYWxpemVNYWluTWVudSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9