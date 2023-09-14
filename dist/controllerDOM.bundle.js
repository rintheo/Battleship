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

.btn-container {
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

.volume-btn,
.settings-btn {
  display: block;
  height: 1.5rem;
  aspect-ratio: 1;
  margin: 0.5rem;
  fill: white;
  background-color: transparent;
  border: none;  
} 

.settings-btn {
  transition: 
    transform 0.25s ease-in-out 0s,
    fill 0.25s ease-in-out 0s;
}

.volume-btn.mute {
  fill: red;
}

.volume-btn.mute:hover {
  fill: hsl(0, 100%, 40%);
}

.volume-btn.mute:active {
  fill: hsl(0, 100%, 30%);
}

.volume-btn:hover,
.settings-btn:hover {
  fill: hsl(0, 0%, 90%);
}

.settings-btn:hover {
  transform: rotate(45deg);
}

.volume-btn:active,
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

.player-wait {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  color: white;
  text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  text-align: center;
  animation: 
    title-idle 2s ease-in-out 0s infinite forwards alternate,
    title-rise 1s ease-in-out 0s 1 forwards normal;
  user-select: none;
}

.player-wait h2 {
  font-size: 6rem;
  font-weight: 800;
}

.player-wait p {
  font-size: 2rem;
  font-weight: 600;
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

  .player-wait h2 {
    font-size: 5rem;
  }
  
  .player-wait p {
    font-size: 1.75rem;
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

  .player-wait h2 {
    font-size: 4rem;
  }
  
  .player-wait p {
    font-size: 1.5rem;
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

  .player-wait h2 {
    font-size: 3rem;
  }
  
  .player-wait p {
    font-size: 1.15rem;
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
 }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik+Iso&display=swap');\n\n:root {\n --current-health: 100%;\n --current-hit: 0%;\n --current-empty: 0%;\n --enemy-health: 100%;\n --enemy-hit: 0%;\n --enemy-empty: 0%;\n --explosion-scale: 1;\n --sprite-scale: 0.35;\n --placement-cell-width: 48px;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml, body,\nh1, h2, h3, h4, h5, h6, \np, ul, ol, li, button {\n  margin: 0;\n  padding: 0;\n}\n\nul, ol, li {\n  list-style: none;\n} \n\na {\n  text-decoration: none;\n}\n\n.max-width {\n  width: 100%;\n  max-width: 1280px;\n}\n\n.btn-container {\n  position: fixed;\n  top: 0;\n  height: 0;\n  width: 100%;\n  max-width: 1280px;\n  display: flex;\n  justify-content: end;\n  z-index: 99;\n  background-color: white;\n}\n\n.volume-btn,\n.settings-btn {\n  display: block;\n  height: 1.5rem;\n  aspect-ratio: 1;\n  margin: 0.5rem;\n  fill: white;\n  background-color: transparent;\n  border: none;  \n} \n\n.settings-btn {\n  transition: \n    transform 0.25s ease-in-out 0s,\n    fill 0.25s ease-in-out 0s;\n}\n\n.volume-btn.mute {\n  fill: red;\n}\n\n.volume-btn.mute:hover {\n  fill: hsl(0, 100%, 40%);\n}\n\n.volume-btn.mute:active {\n  fill: hsl(0, 100%, 30%);\n}\n\n.volume-btn:hover,\n.settings-btn:hover {\n  fill: hsl(0, 0%, 90%);\n}\n\n.settings-btn:hover {\n  transform: rotate(45deg);\n}\n\n.volume-btn:active,\n.settings-btn:active {\n  fill: hsl(0, 0%, 80%);\n}\n\n.game {\n  height: 100%;\n  min-height: 100vh;\n  width: 100vw;\n  background-image: url('./assets/ocean.gif');\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.boards {\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-auto-rows: 1fr;\n  justify-items: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.board {\n  position: relative;\n  width: 100%;\n  max-width: 750px;\n  aspect-ratio: 1;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  align-items: center;\n  animation: title-rise 1s ease-in-out 0s 1 forwards normal;\n}\n\n.placement .board {\n  margin-top: 12rem;\n  max-width: 480px;\n  touch-action: none;\n}\n\n.placement.info {\n  position: fixed;\n  top: 0;\n  left: 50%;\n  width: 100%;\n  max-width: 640px;\n  padding: 1rem;\n  transform: translate(-50%);\n  display: flex;\n  flex-direction: column;\n  animation: title-rise 1s ease-in-out 0s 1 forwards normal;\n}\n\n.placement.info p {\n  color: white;\n  font-weight: 600;\n  text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.25);\n  transition: 0.25s;\n  animation: button-idle 2s ease-in-out 0s infinite forwards alternate;\n  user-select: none;\n}\n\n.placement.info p:nth-child(1) {\n  font-size: 2rem;\n}\n\n.placement.info p:nth-child(3) {\n  margin: 1.5rem 0 ;\n}\n\n.placement.info .ships {\n  align-self: center;\n  width: 100%;\n  max-width: 480px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem var(--placement-cell-width);\n\n}\n\n.placement.info .ships .container {\n  position: relative;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: var(--placement-cell-width);\n  justify-content: start;\n  align-items: center;\n}\n\n.placement .sprite{\n  transition: 0.1s;\n  pointer-events: none;\n}\n\n/* make sprite style common */\n\n.placement .cell.hover .sprite,\n.placement .container.unplaced:hover .sprite {\n  filter: grayscale(100%) sepia(100%) brightness(0.75) hue-rotate(60deg);\n}\n\n.placement .cell.hover.clicked .sprite,\n.placement .container.unplaced:active .sprite{\n  filter: grayscale(100%) sepia(100%) brightness(1) hue-rotate(60deg);\n}\n\n.placement .cell {\n  transition: 0.1s;\n}\n\n.placement .cell.bow {\n  z-index: 3;\n}\n\n.placement .cell.hover,\n.placement .container.unplaced:hover .cell{\n  background-color: rgba(0, 255, 0, 0.25);\n}\n\n.placement .cell.hover.clicked,\n.placement .container.unplaced:active .cell{\n  background-color: rgba(155, 255, 155, 0.25);\n}\n\n.boards.placement .board {\n  border: 1px solid rgba(255,255,255,0.15);\n}\n\n.current.board {\n  border: 1px solid rgba(255,255,255,0.05);\n}\n\n.target.board {\n  border: 1px solid rgba(255,255,255,0.15);\n}\n\n.cell {\n  position: relative;\n  aspect-ratio: 1;\n  color: white;\n  display: grid;\n  grid-template-areas: \"a\";\n  justify-items: center;\n  align-items: start;\n  transition: background-color 0.25s ease-in-out 0s;\n  user-select: none;\n  z-index: 2;\n}\n\n.cell.ship-bow {\n  z-index: 1\n}\n\n.cell.miss svg {\n  fill: rgba(255, 0, 0, 0.25);\n}\n\n.boards.placement .cell {\n  border: 1px solid rgba(255,255,255,0.15);\n}\n\n.current > .cell {\n  border: 1px solid rgba(255,255,255,0.05);\n}\n\n.target > .cell {\n  background-color: rgba(0,0,0,0.25);\n  border: 1px solid rgba(255,255,255,0.15);\n}\n\n.target > .cell:not(.miss, .hit):hover {\n  background-color: rgba(0, 255, 0, 0.25);\n  cursor: pointer;\n}\n\n.target > .cell.hit {\n  background-color: rgba(255, 0, 0, 0.25);\n}\n\n.target > .cell.sunk,\n.target > .cell.miss {\n  background-color: transparent;\n}\n\n.sprite-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  grid-area: a;\n}\n\n.sprite-container.horizontal {\n  justify-self: end;\n  align-self: center;\n}\n\n.sprite {\n  position: absolute;\n  transform-origin: top center;\n  transform: scale(var(--sprite-scale));\n  animation: ship-idle 2s ease-in-out 0s infinite forwards alternate;\n}\n\n.horizontal .sprite {\n  transform: scale(var(--sprite-scale)) rotate(90deg);\n  animation: ship-idle-horizontal 2s ease-in-out 0s infinite forwards alternate;\n}\n\n.cell.sunk .sprite {\n  animation: \n    ship-sink 10s linear 0s 1 forwards normal,\n    ship-shaking 0.5s ease-in-out 0s infinite forwards alternate;\n}\n\n.cell.sunk .horizontal .sprite {\n  animation: \n    ship-sink 10s linear 0s 1 forwards normal,\n    ship-shaking-horizontal 0.5s ease-in-out 0s infinite forwards alternate;\n}\n\n.fire-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: end;\n  align-self: center;\n  grid-area: a;\n  z-index: 1;\n}\n\n.fire {\n  position: absolute;\n  pointer-events: none;\n  animation: fade-in 1s ease-in-out 0s 1 forwards normal;\n}\n\n.cell.sunk .fire {\n  animation: fade-out 1s ease-in-out 0s 1 forwards normal;\n}\n\n.explosion-container {\n  position: absolute;\n  top: 5%;\n  left: 45%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  grid-area: a;\n  z-index: 2;  \n}\n\n.explosion {\n  position: absolute;\n  pointer-events: none;\n  transform: scale(var(--explosion-scale));\n}\n\n.blocker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  z-index: 5;\n}\n\n.player-info {\n  position: fixed;\n  left: 50%;\n  width: 100%;\n  max-width: 30rem;\n  padding: 1rem;\n  transform: translate(-50%);\n  color: white;\n  z-index: 50;\n  pointer-events: none;\n  animation: title-rise 1s ease-in-out 0s 1 forwards normal;\n}\n\n.current.player-info {\n  top: 1rem;\n}\n\n.enemy.player-info {\n  bottom: 1rem;\n}\n\n.player-info p {\n  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);\n}\n\n.player-info p:first-child {\n  font-size: 0.9rem;\n}\n\n.player-info p:last-child {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n\n.health {\n  position: relative;\n  height: 1rem;\n  width: 100%;\n  padding: 0.5rem;\n  background-color: rgba(8, 8, 20, 0.5);\n  border-radius: 0.5rem;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n.health > .text {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-shadow: 1px 1px 1px black;\n}\n\n.health > .bar,\n.health > .hit,\n.health > .empty {\n  height: 0.5rem;\n  transition: width 0.25s ease-in-out 0s;\n}\n\n.current .health > .bar {\n  width: var(--current-health);\n  background-color: rgba(0, 200, 0, 1);\n}\n\n.current .health > .hit {\n  width: var(--current-hit);\n  background-color: rgba(0, 200, 0, 0.5);\n}\n\n.current .health > .empty {\n  width: var(--current-empty);\n  background-color: rgba(0, 0, 0, 0.25);\n}\n\n.enemy .health > .bar {\n  width: var(--enemy-health);\n  background-color: rgba(200, 0, 0, 1);\n}\n\n.enemy .health > .hit {\n  width: var(--enemy-hit);\n  background-color: rgba(200, 0, 0, 0.5);\n}\n\n.enemy .health > .empty {\n  width: var(--enemy-empty);\n  background-color: rgba(0, 0, 0, 0.25);\n}\n\n.site-container {\n  position: relative;\n  min-height: 100vh;\n  min-width: 100vw;\n  overflow-x: hidden;\n}\n\n.main-menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-menu > h1 {\n  margin-top: auto;\n  margin-bottom: 2rem;\n  color: white;\n  font-family: 'Rubik Iso', cursive;\n  font-size: 6rem;\n  text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.25);\n  animation: \n    title-idle 2s ease-in-out 0s infinite forwards alternate,\n    title-rise 1s ease-in-out 0s 1 forwards normal;\n  user-select: none;\n}\n\n.main-menu .buttons {\n  height: 15rem;\n  margin-bottom: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.game.click-sink,\n.main-menu.click-sink,\n.main-menu .buttons.click-sink {\n  animation:\n    title-sink 0.25s ease-in-out 0s 1 forwards normal;\n}\n\n.placement.buttons {\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  width: 100%;\n  max-width: 640px;\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  transform: translate(-50%);\n}\n\n.placement.buttons .button,\n.main-menu .button {\n  width: 15rem;\n  padding: 0.5rem;\n  background: none;\n  color: white;\n  border: none;\n  font-size: 2rem;\n  font-weight: 600;\n  text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.25);\n  transition: 0.25s;\n  animation: \n    button-idle 2s ease-in-out 0s infinite forwards alternate,\n    title-rise 1s ease-in-out 0s 1 forwards normal;\n  user-select: none;\n}\n\n.placement.buttons .button {\n  font-size: 1.75rem;\n}\n\n.placement.buttons .button.disabled {\n  color: grey;\n}\n\n.placement.buttons .button:not(.disabled):hover,\n.main-menu .button:hover {\n  color: hsl(0, 0%, 90%);\n  background-color: hsla(0, 0%, 100%, 0.1);\n  border-radius: 2rem;\n}\n\n.placement.buttons .button:not(.disabled):active,\n.main-menu .button:active {\n  color: hsl(0, 0%, 80%);\n}\n\n.main-menu form li {\n  margin-bottom: 0.5rem;\n  display: grid;\n  grid-template-columns: 6rem;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  justify-items: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.main-menu form li:last-child {\n  margin-top: 2rem;\n  grid-template-columns: 1fr;\n}\n\n.main-menu form li .label {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 600;\n  text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.25);\n  user-select: none;\n  animation: \n    button-idle 2s ease-in-out 0s infinite forwards alternate,\n    title-rise 1s ease-in-out 0s 1 forwards normal;\n}\n\n.main-menu form li input {\n  width: 100%;\n  padding: 0.5rem;\n  border: 2px groove #7f8c8d;\n  border-radius: 0.5rem;\n  font-size: 1.25rem;\n  animation: \n    button-idle 2s ease-in-out 0s infinite forwards alternate,\n    title-rise 1s ease-in-out 0s 1 forwards normal;\n}\n\n.main-menu form li .button.AI {\n  width: 100%;\n  background-color: #7f8c8d;\n  border: 2px outset #7f8c8d;\n  border-radius: 0.5rem;\n  font-size: 1.25rem;\n  text-shadow: none;\n  user-select: none;\n}\n\n.main-menu form li .button.AI.toggled {\n  background-color: hsl(0, 6%, 45%);   \n  border: 2px inset hsl(0, 6%, 45%);   \n}\n\n.main-menu form li .button.AI.toggled:hover {\n  background-color: hsl(184, 6%, 50%);   \n  border: 2px inset hsl(184, 6%, 50%);   \n}\n\n.main-menu form li .button.AI.toggled:active {\n  background-color: hsl(184, 6%, 47%);\n}\n\n.main-menu form li .button.AI:hover {\n  background-color: hsl(184, 6%, 50%);   \n}\n\n.main-menu form li .button.AI:active {\n  background-color: hsl(184, 6%, 47%);   \n  border: 2px inset hsl(184, 6%, 47%);  \n}\n\n.copyright {\n  color: white;\n  text-align: center;\n  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);\n  font-size: 0.8rem;\n  margin-bottom: 2rem;\n  animation: \n    title-idle 2s ease-in-out 0s infinite forwards alternate,\n    title-rise 1s ease-in-out 0s 1 forwards normal;\n  user-select: none;\n  line-height: 1.8rem;\n}\n\n.copyright svg {\n  vertical-align: bottom;\n  fill: white;\n  height: 1.8rem;\n  transition: \n    transform 0.25s ease-in-out 0s,\n    fill 0.25s ease-in-out 0s;\n}\n\n.copyright svg:hover {\n  color: hsl(0, 0%, 80%);\n  transform: rotate(360deg) scale(1.1);\n}\n\n.copyright svg:active {\n  fill: hsl(0, 0%, 70%);\n}\n\n.player-wait {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  color: white;\n  text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  text-align: center;\n  animation: \n    title-idle 2s ease-in-out 0s infinite forwards alternate,\n    title-rise 1s ease-in-out 0s 1 forwards normal;\n  user-select: none;\n}\n\n.player-wait h2 {\n  font-size: 6rem;\n  font-weight: 800;\n}\n\n.player-wait p {\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.dialog-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: hsla(0, 0%, 0%, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 100;\n}\n\n.dialog {\n  min-width: 300px;\n  margin: 1rem;\n  padding: 2rem 1rem;\n  background-color: rgba(44, 62, 80, 0.5);\n  border-radius: 1rem;\n  color: white;\n  outline: 2px ridge #95a5a6;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  animation: fade-in 0.25s ease-in-out 0s 1 forwards normal;\n  user-select: none;\n}\n\n.dialog .text {\n  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);\n}\n\n.dialog .main.text {\n  margin-bottom: 2rem;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.dialog .button {\n  width: 10rem;\n  margin: 0.25rem;\n  padding: 0.5rem;\n  background-color: #7f8c8d;\n  color: white;\n  border: 1px outset #7f8c8d;\n  border-radius: 0.5rem;\n  font-size: 1rem;\n  font-weight: 600;\n}\n\n.dialog .button:hover {\n  background-color: hsl(184, 6%, 56%);\n}\n\n.dialog .button:active {\n  background-color: hsl(184, 6%, 59%);\n}\n\n.dialog .play.button {\n  background-color: #27ae60;\n  border: 1px outset #27ae60;\n}\n\n.dialog .play.button:hover {\n  background-color: hsla(145, 63%, 45%);\n}\n\n.dialog .play.button:active {\n  background-color: hsla(145, 63%, 48%);\n}\n\n.dialog .menu.button {\n  background-color: #c0392b;\n  border: 1px outset #c0392b;\n}\n\n.dialog .menu:hover {\n  background-color: hsl(6, 63%, 49%);\n}\n\n.dialog .menu:active {\n  background-color: hsl(6, 63%, 52%);\n}\n\n.fade-out {\n  animation: fade-out 0.25s ease-in-out 0s 1 forwards normal;\n}\n\n.lose-focus {\n  animation: lose-focus 1s ease-in-out 0s 1 forwards normal;\n}\n\n.return-focus {\n  animation: return-focus 0.125s ease-in-out 0s 1 forwards normal;\n}\n\n.visibility-hidden {\n  visibility: hidden;\n}\n\n@media (max-width: 646px) {\n  .boards:not(.placement) {\n    padding: 10rem 0.5rem;\n  }\n}\n\n@media (max-width: 600px) {\n  .main-menu > h1 {\n    font-size: 5rem;\n  }\n\n  .player-wait h2 {\n    font-size: 5rem;\n  }\n  \n  .player-wait p {\n    font-size: 1.75rem;\n  }  \n}\n\n@media (max-width: 500px) {\n  .main-menu > h1 {\n    font-size: 4rem;\n  }\n\n  .placement.buttons .button,\n  .main-menu .button {\n    font-size: 1.5rem\n  }\n\n  .main-menu form li .label {\n    font-size: 1.25rem;\n  }\n\n  .main-menu form li input {\n    font-size: 1rem;\n  }\n\n  .main-menu form li .button.AI {\n    font-size: 0.85rem;\n  }  \n\n  .player-wait h2 {\n    font-size: 4rem;\n  }\n  \n  .player-wait p {\n    font-size: 1.5rem;\n  }  \n}\n\n@media (max-width: 400px) {\n  .main-menu > h1 {\n    font-size: 3rem;\n  }\n\n  .placement.buttons .button,\n  .main-menu .button {\n    font-size: 1.25rem\n  }\n\n  .main-menu form li .label {\n    font-size: 1rem;\n  }\n\n  .player-wait h2 {\n    font-size: 3rem;\n  }\n  \n  .player-wait p {\n    font-size: 1.15rem;\n  }  \n}\n\n@keyframes lose-focus {\n  0% {\n    filter: blur(0);\n  }\n  \n  100% {\n    filter: blur(2px);\n  }\n}\n\n@keyframes return-focus {\n  0% {\n    filter: blur(2px);\n  }\n  \n  100% {\n    filter: blur(0);\n  }\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes button-idle {\n  0% {\n    transform: translate(-5px, 0);\n  }\n\n  100% {\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes title-idle {\n  0% {\n    transform: translate(-1%, 0.25%);\n  }\n\n  100% {\n    transform: translate(-0%, -0.25%);\n  }\n}\n\n@keyframes title-rise {\n  0% {\n    filter: blur(10px) brightness(0.25) opacity(0.25);\n  }\n\n  100% {\n    filter: blur(0px) brightness(1) opacity(1);\n  }\n}\n\n@keyframes title-sink {\n  0% {\n    filter: blur(0px) brightness(1) opacity(1);\n  }\n\n  100% {\n    filter: blur(10px) brightness(0.25) opacity(0.25);\n  }\n}\n\n@keyframes ship-idle {\n  0% {\n    transform: translate(-2.5%, 0.25%) scale(var(--sprite-scale));\n  }\n\n  100% {\n    transform: translate(-0%, -0.25%) scale(var(--sprite-scale));\n  }\n}\n\n@keyframes ship-idle-horizontal {\n  0% {\n    transform: translate(-2.5%, 0.25%) scale(var(--sprite-scale)) rotate(90deg);\n  }\n\n  100% {\n    transform: translate(-0%, -0.25%) scale(var(--sprite-scale)) rotate(90deg);\n  }\n}\n\n@keyframes ship-sink {\n  0% {\n    filter: blur(0px) brightness(1) grayscale(0%) opacity(1);\n  }\n\n  2.5% {\n    filter: blur(0px) brightness(2) grayscale(0%) opacity(1);\n  }\n\n  5% {\n    filter: blur(0px) brightness(1) grayscale(0%) opacity(1);\n  }\n  \n  100% {\n    filter: blur(25px) brightness(0.5) grayscale(100%) opacity(0.25);\n  }\n}\n\n@keyframes ship-shaking {\n 0% {\n  transform: translate(-0.5%, 0) scale(var(--sprite-scale));\n }\n\n 100% {\n  transform: translate(0.5%, 0) scale(var(--sprite-scale));\n }\n}\n\n@keyframes ship-shaking-horizontal {\n  0% {\n   transform: translate(0, -0.05%) scale(var(--sprite-scale)) rotate(90deg);\n  }\n \n  100% {\n   transform: translate(0, 0.05%) scale(var(--sprite-scale)) rotate(90deg);\n  }\n }"],"sourceRoot":""}]);
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












let audioVolume = 1;

const changeAudioVolume = (value) => {
  audioVolume = value;
  const audios = document.querySelectorAll('audio');
  audios.forEach((audio) => {
    const sound = audio;
    sound.volume = value;
  });
};

const playMenuClickSFX = () => {
  const audio = document.querySelector('#sfxMenu');
  audio.volume = audioVolume;
  audio.currentTime = 0;
  audio.play();
};

const playFireSFX = () => {
  const audio = document.querySelector('#sfxFire');
  audio.volume = audioVolume;
  audio.currentTime = 0;
  audio.play();
};

const stopAllBGM = () => {
  stopMenuBGM();
  stopVictoryBGM();
  stopGameBGM();
};

const playMenuBGM = () => {
  stopVictoryBGM();
  stopGameBGM();
  const audio = document.querySelector('#bgmMenu');
  audio.volume = audioVolume;
  audio.play();
};

const stopMenuBGM = () => {
  const audio = document.querySelector('#bgmMenu');
  audio.pause();
  audio.currentTime = 0;
};

const playVictoryBGM = () => {
  stopMenuBGM();
  stopGameBGM();
  const audio = document.querySelector('#bgmVictory');
  audio.volume = audioVolume;
  audio.play();
};

const stopVictoryBGM = () => {
  const audio = document.querySelector('#bgmVictory');
  audio.pause();
  audio.currentTime = 0;
};

const playGameBGM = () => {
  stopMenuBGM();
  stopVictoryBGM();
  const audio = document.querySelector('#bgmGame');
  audio.volume = audioVolume;
  audio.play();
};

const stopGameBGM = () => {
  const audio = document.querySelector('#bgmGame');
  audio.pause();
  audio.currentTime = 0;
};

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
  playMenuClickSFX();
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
    playVictoryBGM();
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

const startTurn = () => {
  clearGameContainer();
  initializeGame();
};

const showPlayerWaitScreen = () => {
  const game = document.querySelector('.game');

  const playerWait = document.createElement('div');
  playerWait.classList.add('player-wait');
  playerWait.addEventListener('click', startTurn);

  const h2 = document.createElement('h2');
  h2.textContent = currentPlayer.name;

  const p = document.createElement('p');
  p.textContent = 'Press anywhere to start your turn.';

  playerWait.appendChild(h2);
  playerWait.appendChild(p);
  game.appendChild(playerWait);
};

const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

const scrollToBottom = () => {
  window.scroll({
    top: document.body.scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
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
      }, 2500);
    });
    clearGameContainer();
    showPlayerWaitScreen();
  } else {
    setTimeout(() => {
      scrollToBottom();
    }, 1000);
  }
  if (_game__WEBPACK_IMPORTED_MODULE_1__.players.some((player) => (player instanceof _player_ai__WEBPACK_IMPORTED_MODULE_2__["default"]))) hideInputBlocker();
};

const hitCellAI = () => {
  playFireSFX();
  const [x, y] = currentPlayer.chooseAttackCoordinates(targetPlayer);
  scrollToTop();
  processHit([x, y]);
};

const hitCellPlayer = (e) => {
  playFireSFX();
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
  stopAllBGM();
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
  btnResume.addEventListener('click', resumeGame, { once: true });

  const btnRestart = document.createElement('button');
  btnRestart.classList.add('button');
  btnRestart.textContent = 'Restart';
  btnRestart.addEventListener('click', restartGame, { once: true });

  const btnMenuReturn = document.createElement('button');
  btnMenuReturn.classList.add('button');
  btnMenuReturn.textContent = 'Return to Menu';
  btnMenuReturn.addEventListener('click', returnToMenu, { once: true });

  dialogBox.appendChild(p);
  dialogBox.appendChild(btnResume);
  dialogBox.appendChild(btnRestart);
  dialogBox.appendChild(btnMenuReturn);
  dialogOverlay.appendChild(dialogBox);
  siteContainer.appendChild(dialogOverlay);
};

const clickPauseMenu = () => {
  playMenuClickSFX();
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
    initalizePlayerHPValues();
    clearGameContainer();
    if (_game__WEBPACK_IMPORTED_MODULE_1__.players.some((player) => player instanceof _player_ai__WEBPACK_IMPORTED_MODULE_2__["default"])) {
      initializeGame();
    } else {
      showPlayerWaitScreen();
    }
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
  playMenuClickSFX();
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
  btnYes.addEventListener('click', confirmPlacement, { once: true });

  const btnNo = document.createElement('button');
  btnNo.classList.add('menu', 'button');
  btnNo.textContent = 'No';
  btnNo.addEventListener('click', hideDialog, { once: true });

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
  playMenuClickSFX();
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
  playGameBGM();
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

const toggleVolume = (e) => {
  if (audioVolume === 1) {
    changeAudioVolume(0.66);
    e.currentTarget.firstChild.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>volume-medium</title><path d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" /></svg>';
  } else if (audioVolume === 0.66) {
    changeAudioVolume(0.33);
    e.currentTarget.firstChild.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>volume-low</title><path d="M7,9V15H11L16,20V4L11,9H7Z" /></svg>';
  } else if (audioVolume === 0.33) {
    changeAudioVolume(0);
    e.currentTarget.classList.add('mute');
    e.currentTarget.firstChild.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>volume-off</title><path d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z" /></svg>';
  } else if (audioVolume === 0) {
    changeAudioVolume(1);
    e.currentTarget.classList.remove('mute');
    e.currentTarget.firstChild.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>volume-high</title><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>';
  }
  playMenuClickSFX();
};

const showVolumeButton = () => {
  const mainMenu = document.querySelector('.main-menu');

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container', 'max-width');

  const volumeBtn = document.createElement('button');
  volumeBtn.classList.add('volume-btn');
  volumeBtn.addEventListener('click', toggleVolume);

  const volumeBtnSVG = document.createElement('svg');

  volumeBtn.appendChild(volumeBtnSVG);
  btnContainer.appendChild(volumeBtn);
  mainMenu.appendChild(btnContainer);

  if (audioVolume === 1) {
    volumeBtnSVG.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>volume-high</title><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>';
  } else if (audioVolume === 0.66) {
    volumeBtnSVG.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>volume-medium</title><path d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" /></svg>';
  } else if (audioVolume === 0.33) {
    volumeBtnSVG.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>volume-low</title><path d="M7,9V15H11L16,20V4L11,9H7Z" /></svg>';
  } else if (audioVolume === 0) {
    volumeBtn.classList.add('mute');
    volumeBtnSVG.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>volume-off</title><path d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z" /></svg>';
  }
};

const initializeGameContainer = () => {
  const game = document.querySelector('.game');

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container', 'max-width');

  const settingsBtn = document.createElement('button');
  settingsBtn.classList.add('settings-btn');
  settingsBtn.addEventListener('click', clickPauseMenu);

  const settingsBtnSVG = document.createElement('svg');

  const volumeBtn = document.createElement('button');
  volumeBtn.classList.add('volume-btn');
  volumeBtn.addEventListener('click', toggleVolume);

  const volumeBtnSVG = document.createElement('svg');

  const boards = document.createElement('div');
  boards.classList.add('boards', 'max-width');

  volumeBtn.appendChild(volumeBtnSVG);
  settingsBtn.appendChild(settingsBtnSVG);
  btnContainer.appendChild(volumeBtn);
  btnContainer.appendChild(settingsBtn);
  game.appendChild(btnContainer);
  game.appendChild(boards);

  settingsBtnSVG.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cog</title><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg>';
  if (audioVolume === 1) {
    volumeBtnSVG.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>volume-high</title><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>';
  } else if (audioVolume === 0.66) {
    volumeBtnSVG.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>volume-medium</title><path d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" /></svg>';
  } else if (audioVolume === 0.33) {
    volumeBtnSVG.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>volume-low</title><path d="M7,9V15H11L16,20V4L11,9H7Z" /></svg>';
  } else if (audioVolume === 0) {
    volumeBtn.classList.add('mute');
    volumeBtnSVG.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>volume-off</title><path d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z" /></svg>';
  }
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
      if (prevX !== -1 && prevY !== -1) playFireSFX();
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
  playMenuClickSFX();
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
  playMenuClickSFX();
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
  playMenuClickSFX();
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
  btnStart.addEventListener('click', startGamePlayer, { once: true });

  const btnBack = document.createElement('button');
  btnBack.classList.add('button');
  btnBack.textContent = 'Back';
  btnBack.addEventListener('click', showVersusOptions, { once: true });

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
  playMenuClickSFX();
  const currentToggledButton = document.querySelector('.main-menu form .button.AI.toggled');
  const clickedButton = e.currentTarget;

  currentToggledButton.classList.remove('toggled');
  clickedButton.classList.add('toggled');
};

const showVersusAI = async () => {
  playMenuClickSFX();
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
  btnStart.addEventListener('click', startGameAI, { once: true });

  const btnBack = document.createElement('button');
  btnBack.classList.add('button');
  btnBack.textContent = 'Back';
  btnBack.addEventListener('click', showVersusOptions, { once: true });

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
  playMenuClickSFX();
  playMenuBGM();
  await clearMainMenuButtons();

  const buttonsContainer = document.querySelector('.main-menu .buttons');

  const versusPlayerBtn = document.createElement('button');
  versusPlayerBtn.classList.add('button');
  versusPlayerBtn.textContent = 'Versus Player';
  versusPlayerBtn.addEventListener('click', showVersusPlayer, { once: true });

  const versusAIBtn = document.createElement('button');
  versusAIBtn.classList.add('button');
  versusAIBtn.textContent = 'Versus AI';
  versusAIBtn.addEventListener('click', showVersusAI, { once: true });

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
  playGameBtn.addEventListener('click', showVersusOptions, { once: true });

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
  showVolumeButton();
};

initializeMainMenu();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlckRPTS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxpSEFBcUM7QUFDakYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSEFBc0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxxQ0FBcUM7QUFDdk4seUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sT0FBTyxPQUFPLEtBQUssTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxLQUFLLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxL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RUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsWUFBWTs7QUFFaEU7QUFDQTtBQUNBO0FBQ0EseURBQXlELFlBQVk7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLFlBQVk7O0FBRTVFO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxZQUFZOztBQUVwRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsWUFBWTs7QUFFekU7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9jZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3BsYXllci9haS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyRE9NLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9vY2Vhbi5naWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZmFtaWx5PVJ1YmlrK0lzbyZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gLS1jdXJyZW50LWhlYWx0aDogMTAwJTtcbiAtLWN1cnJlbnQtaGl0OiAwJTtcbiAtLWN1cnJlbnQtZW1wdHk6IDAlO1xuIC0tZW5lbXktaGVhbHRoOiAxMDAlO1xuIC0tZW5lbXktaGl0OiAwJTtcbiAtLWVuZW15LWVtcHR5OiAwJTtcbiAtLWV4cGxvc2lvbi1zY2FsZTogMTtcbiAtLXNwcml0ZS1zY2FsZTogMC4zNTtcbiAtLXBsYWNlbWVudC1jZWxsLXdpZHRoOiA0OHB4O1xufVxuXG4qLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwsIGJvZHksXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBcbnAsIHVsLCBvbCwgbGksIGJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxudWwsIG9sLCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59IFxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubWF4LXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTI4MHB4O1xufVxuXG4uYnRuLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIHotaW5kZXg6IDk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnZvbHVtZS1idG4sXG4uc2V0dGluZ3MtYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMS41cmVtO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIG1hcmdpbjogMC41cmVtO1xuICBmaWxsOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTsgIFxufSBcblxuLnNldHRpbmdzLWJ0biB7XG4gIHRyYW5zaXRpb246IFxuICAgIHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dCAwcyxcbiAgICBmaWxsIDAuMjVzIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4udm9sdW1lLWJ0bi5tdXRlIHtcbiAgZmlsbDogcmVkO1xufVxuXG4udm9sdW1lLWJ0bi5tdXRlOmhvdmVyIHtcbiAgZmlsbDogaHNsKDAsIDEwMCUsIDQwJSk7XG59XG5cbi52b2x1bWUtYnRuLm11dGU6YWN0aXZlIHtcbiAgZmlsbDogaHNsKDAsIDEwMCUsIDMwJSk7XG59XG5cbi52b2x1bWUtYnRuOmhvdmVyLFxuLnNldHRpbmdzLWJ0bjpob3ZlciB7XG4gIGZpbGw6IGhzbCgwLCAwJSwgOTAlKTtcbn1cblxuLnNldHRpbmdzLWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLnZvbHVtZS1idG46YWN0aXZlLFxuLnNldHRpbmdzLWJ0bjphY3RpdmUge1xuICBmaWxsOiBoc2woMCwgMCUsIDgwJSk7XG59XG5cbi5nYW1lIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm9hcmRzIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIGdyaWQtYXV0by1yb3dzOiAxZnI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uYm9hcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDc1MHB4O1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xufVxuXG4ucGxhY2VtZW50IC5ib2FyZCB7XG4gIG1hcmdpbi10b3A6IDEycmVtO1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG59XG5cbi5wbGFjZW1lbnQuaW5mbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDY0MHB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYW5pbWF0aW9uOiB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xufVxuXG4ucGxhY2VtZW50LmluZm8gcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xuICBhbmltYXRpb246IGJ1dHRvbi1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5wbGFjZW1lbnQuaW5mbyBwOm50aC1jaGlsZCgxKSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnBsYWNlbWVudC5pbmZvIHA6bnRoLWNoaWxkKDMpIHtcbiAgbWFyZ2luOiAxLjVyZW0gMCA7XG59XG5cbi5wbGFjZW1lbnQuaW5mbyAuc2hpcHMge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMXJlbSB2YXIoLS1wbGFjZW1lbnQtY2VsbC13aWR0aCk7XG5cbn1cblxuLnBsYWNlbWVudC5pbmZvIC5zaGlwcyAuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBncmlkLWF1dG8tY29sdW1uczogdmFyKC0tcGxhY2VtZW50LWNlbGwtd2lkdGgpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGxhY2VtZW50IC5zcHJpdGV7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKiBtYWtlIHNwcml0ZSBzdHlsZSBjb21tb24gKi9cblxuLnBsYWNlbWVudCAuY2VsbC5ob3ZlciAuc3ByaXRlLFxuLnBsYWNlbWVudCAuY29udGFpbmVyLnVucGxhY2VkOmhvdmVyIC5zcHJpdGUge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBzZXBpYSgxMDAlKSBicmlnaHRuZXNzKDAuNzUpIGh1ZS1yb3RhdGUoNjBkZWcpO1xufVxuXG4ucGxhY2VtZW50IC5jZWxsLmhvdmVyLmNsaWNrZWQgLnNwcml0ZSxcbi5wbGFjZW1lbnQgLmNvbnRhaW5lci51bnBsYWNlZDphY3RpdmUgLnNwcml0ZXtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgc2VwaWEoMTAwJSkgYnJpZ2h0bmVzcygxKSBodWUtcm90YXRlKDYwZGVnKTtcbn1cblxuLnBsYWNlbWVudCAuY2VsbCB7XG4gIHRyYW5zaXRpb246IDAuMXM7XG59XG5cbi5wbGFjZW1lbnQgLmNlbGwuYm93IHtcbiAgei1pbmRleDogMztcbn1cblxuLnBsYWNlbWVudCAuY2VsbC5ob3Zlcixcbi5wbGFjZW1lbnQgLmNvbnRhaW5lci51bnBsYWNlZDpob3ZlciAuY2VsbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMjUpO1xufVxuXG4ucGxhY2VtZW50IC5jZWxsLmhvdmVyLmNsaWNrZWQsXG4ucGxhY2VtZW50IC5jb250YWluZXIudW5wbGFjZWQ6YWN0aXZlIC5jZWxse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMjU1LCAxNTUsIDAuMjUpO1xufVxuXG4uYm9hcmRzLnBsYWNlbWVudCAuYm9hcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xufVxuXG4uY3VycmVudC5ib2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG59XG5cbi50YXJnZXQuYm9hcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xufVxuXG4uY2VsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYVwiO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluLW91dCAwcztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5jZWxsLnNoaXAtYm93IHtcbiAgei1pbmRleDogMVxufVxuXG4uY2VsbC5taXNzIHN2ZyB7XG4gIGZpbGw6IHJnYmEoMjU1LCAwLCAwLCAwLjI1KTtcbn1cblxuLmJvYXJkcy5wbGFjZW1lbnQgLmNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xufVxuXG4uY3VycmVudCA+IC5jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbn1cblxuLnRhcmdldCA+IC5jZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjI1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcbn1cblxuLnRhcmdldCA+IC5jZWxsOm5vdCgubWlzcywgLmhpdCk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4yNSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhcmdldCA+IC5jZWxsLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjI1KTtcbn1cblxuLnRhcmdldCA+IC5jZWxsLnN1bmssXG4udGFyZ2V0ID4gLmNlbGwubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc3ByaXRlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtYXJlYTogYTtcbn1cblxuLnNwcml0ZS1jb250YWluZXIuaG9yaXpvbnRhbCB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5zcHJpdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSk7XG4gIGFuaW1hdGlvbjogc2hpcC1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZTtcbn1cblxuLmhvcml6b250YWwgLnNwcml0ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSkgcm90YXRlKDkwZGVnKTtcbiAgYW5pbWF0aW9uOiBzaGlwLWlkbGUtaG9yaXpvbnRhbCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGU7XG59XG5cbi5jZWxsLnN1bmsgLnNwcml0ZSB7XG4gIGFuaW1hdGlvbjogXG4gICAgc2hpcC1zaW5rIDEwcyBsaW5lYXIgMHMgMSBmb3J3YXJkcyBub3JtYWwsXG4gICAgc2hpcC1zaGFraW5nIDAuNXMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xufVxuXG4uY2VsbC5zdW5rIC5ob3Jpem9udGFsIC5zcHJpdGUge1xuICBhbmltYXRpb246IFxuICAgIHNoaXAtc2luayAxMHMgbGluZWFyIDBzIDEgZm9yd2FyZHMgbm9ybWFsLFxuICAgIHNoaXAtc2hha2luZy1ob3Jpem9udGFsIDAuNXMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xufVxuXG4uZmlyZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZW5kO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGdyaWQtYXJlYTogYTtcbiAgei1pbmRleDogMTtcbn1cblxuLmZpcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBhbmltYXRpb246IGZhZGUtaW4gMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG59XG5cbi5jZWxsLnN1bmsgLmZpcmUge1xuICBhbmltYXRpb246IGZhZGUtb3V0IDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xufVxuXG4uZXhwbG9zaW9uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1JTtcbiAgbGVmdDogNDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBncmlkLWFyZWE6IGE7XG4gIHotaW5kZXg6IDI7ICBcbn1cblxuLmV4cGxvc2lvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tZXhwbG9zaW9uLXNjYWxlKSk7XG59XG5cbi5ibG9ja2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgei1pbmRleDogNTtcbn1cblxuLnBsYXllci1pbmZvIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMwcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiA1MDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGFuaW1hdGlvbjogdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbn1cblxuLmN1cnJlbnQucGxheWVyLWluZm8ge1xuICB0b3A6IDFyZW07XG59XG5cbi5lbmVteS5wbGF5ZXItaW5mbyB7XG4gIGJvdHRvbTogMXJlbTtcbn1cblxuLnBsYXllci1pbmZvIHAge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLnBsYXllci1pbmZvIHA6Zmlyc3QtY2hpbGQge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLnBsYXllci1pbmZvIHA6bGFzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaGVhbHRoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgOCwgMjAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWx0aCA+IC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xufVxuXG4uaGVhbHRoID4gLmJhcixcbi5oZWFsdGggPiAuaGl0LFxuLmhlYWx0aCA+IC5lbXB0eSB7XG4gIGhlaWdodDogMC41cmVtO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cyBlYXNlLWluLW91dCAwcztcbn1cblxuLmN1cnJlbnQgLmhlYWx0aCA+IC5iYXIge1xuICB3aWR0aDogdmFyKC0tY3VycmVudC1oZWFsdGgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwMCwgMCwgMSk7XG59XG5cbi5jdXJyZW50IC5oZWFsdGggPiAuaGl0IHtcbiAgd2lkdGg6IHZhcigtLWN1cnJlbnQtaGl0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMDAsIDAsIDAuNSk7XG59XG5cbi5jdXJyZW50IC5oZWFsdGggPiAuZW1wdHkge1xuICB3aWR0aDogdmFyKC0tY3VycmVudC1lbXB0eSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5lbmVteSAuaGVhbHRoID4gLmJhciB7XG4gIHdpZHRoOiB2YXIoLS1lbmVteS1oZWFsdGgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMCwgMCwgMSk7XG59XG5cbi5lbmVteSAuaGVhbHRoID4gLmhpdCB7XG4gIHdpZHRoOiB2YXIoLS1lbmVteS1oaXQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMCwgMCwgMC41KTtcbn1cblxuLmVuZW15IC5oZWFsdGggPiAuZW1wdHkge1xuICB3aWR0aDogdmFyKC0tZW5lbXktZW1wdHkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4uc2l0ZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5tYWluLW1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYWluLW1lbnUgPiBoMSB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdSdWJpayBJc28nLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDZyZW07XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBhbmltYXRpb246IFxuICAgIHRpdGxlLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlLFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubWFpbi1tZW51IC5idXR0b25zIHtcbiAgaGVpZ2h0OiAxNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5nYW1lLmNsaWNrLXNpbmssXG4ubWFpbi1tZW51LmNsaWNrLXNpbmssXG4ubWFpbi1tZW51IC5idXR0b25zLmNsaWNrLXNpbmsge1xuICBhbmltYXRpb246XG4gICAgdGl0bGUtc2luayAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbn1cblxuLnBsYWNlbWVudC5idXR0b25zIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjQwcHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xufVxuXG4ucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbixcbi5tYWluLW1lbnUgLmJ1dHRvbiB7XG4gIHdpZHRoOiAxNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNpdGlvbjogMC4yNXM7XG4gIGFuaW1hdGlvbjogXG4gICAgYnV0dG9uLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlLFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLnBsYWNlbWVudC5idXR0b25zIC5idXR0b24uZGlzYWJsZWQge1xuICBjb2xvcjogZ3JleTtcbn1cblxuLnBsYWNlbWVudC5idXR0b25zIC5idXR0b246bm90KC5kaXNhYmxlZCk6aG92ZXIsXG4ubWFpbi1tZW51IC5idXR0b246aG92ZXIge1xuICBjb2xvcjogaHNsKDAsIDAlLCA5MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuXG4ucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbjpub3QoLmRpc2FibGVkKTphY3RpdmUsXG4ubWFpbi1tZW51IC5idXR0b246YWN0aXZlIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgODAlKTtcbn1cblxuLm1haW4tbWVudSBmb3JtIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDZyZW07XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5tYWluLW1lbnUgZm9ybSBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG59XG5cbi5tYWluLW1lbnUgZm9ybSBsaSAubGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGFuaW1hdGlvbjogXG4gICAgYnV0dG9uLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlLFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG59XG5cbi5tYWluLW1lbnUgZm9ybSBsaSBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogMnB4IGdyb292ZSAjN2Y4YzhkO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgYW5pbWF0aW9uOiBcbiAgICBidXR0b24taWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGUsXG4gICAgdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbn1cblxuLm1haW4tbWVudSBmb3JtIGxpIC5idXR0b24uQUkge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmOGM4ZDtcbiAgYm9yZGVyOiAycHggb3V0c2V0ICM3ZjhjOGQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJLnRvZ2dsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgNiUsIDQ1JSk7ICAgXG4gIGJvcmRlcjogMnB4IGluc2V0IGhzbCgwLCA2JSwgNDUlKTsgICBcbn1cblxuLm1haW4tbWVudSBmb3JtIGxpIC5idXR0b24uQUkudG9nZ2xlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA1MCUpOyAgIFxuICBib3JkZXI6IDJweCBpbnNldCBoc2woMTg0LCA2JSwgNTAlKTsgICBcbn1cblxuLm1haW4tbWVudSBmb3JtIGxpIC5idXR0b24uQUkudG9nZ2xlZDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg0LCA2JSwgNDclKTtcbn1cblxuLm1haW4tbWVudSBmb3JtIGxpIC5idXR0b24uQUk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg0LCA2JSwgNTAlKTsgICBcbn1cblxuLm1haW4tbWVudSBmb3JtIGxpIC5idXR0b24uQUk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NCwgNiUsIDQ3JSk7ICAgXG4gIGJvcmRlcjogMnB4IGluc2V0IGhzbCgxODQsIDYlLCA0NyUpOyAgXG59XG5cbi5jb3B5cmlnaHQge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBhbmltYXRpb246IFxuICAgIHRpdGxlLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlLFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBsaW5lLWhlaWdodDogMS44cmVtO1xufVxuXG4uY29weXJpZ2h0IHN2ZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGZpbGw6IHdoaXRlO1xuICBoZWlnaHQ6IDEuOHJlbTtcbiAgdHJhbnNpdGlvbjogXG4gICAgdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0IDBzLFxuICAgIGZpbGwgMC4yNXMgZWFzZS1pbi1vdXQgMHM7XG59XG5cbi5jb3B5cmlnaHQgc3ZnOmhvdmVyIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgODAlKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjEpO1xufVxuXG4uY29weXJpZ2h0IHN2ZzphY3RpdmUge1xuICBmaWxsOiBoc2woMCwgMCUsIDcwJSk7XG59XG5cbi5wbGF5ZXItd2FpdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogXG4gICAgdGl0bGUtaWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGUsXG4gICAgdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5wbGF5ZXItd2FpdCBoMiB7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnBsYXllci13YWl0IHAge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5kaWFsb2ctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjI1KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmRpYWxvZyB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMXJlbTtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ0LCA2MiwgODAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogMnB4IHJpZGdlICM5NWE1YTY7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmRpYWxvZyAudGV4dCB7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmRpYWxvZyAubWFpbi50ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZGlhbG9nIC5idXR0b24ge1xuICB3aWR0aDogMTByZW07XG4gIG1hcmdpbjogMC4yNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y4YzhkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IG91dHNldCAjN2Y4YzhkO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmRpYWxvZyAuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NCwgNiUsIDU2JSk7XG59XG5cbi5kaWFsb2cgLmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg0LCA2JSwgNTklKTtcbn1cblxuLmRpYWxvZyAucGxheS5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhZTYwO1xuICBib3JkZXI6IDFweCBvdXRzZXQgIzI3YWU2MDtcbn1cblxuLmRpYWxvZyAucGxheS5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDE0NSwgNjMlLCA0NSUpO1xufVxuXG4uZGlhbG9nIC5wbGF5LmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDE0NSwgNjMlLCA0OCUpO1xufVxuXG4uZGlhbG9nIC5tZW51LmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMDM5MmI7XG4gIGJvcmRlcjogMXB4IG91dHNldCAjYzAzOTJiO1xufVxuXG4uZGlhbG9nIC5tZW51OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDYsIDYzJSwgNDklKTtcbn1cblxuLmRpYWxvZyAubWVudTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNiwgNjMlLCA1MiUpO1xufVxuXG4uZmFkZS1vdXQge1xuICBhbmltYXRpb246IGZhZGUtb3V0IDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xufVxuXG4ubG9zZS1mb2N1cyB7XG4gIGFuaW1hdGlvbjogbG9zZS1mb2N1cyAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbn1cblxuLnJldHVybi1mb2N1cyB7XG4gIGFuaW1hdGlvbjogcmV0dXJuLWZvY3VzIDAuMTI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbn1cblxuLnZpc2liaWxpdHktaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjQ2cHgpIHtcbiAgLmJvYXJkczpub3QoLnBsYWNlbWVudCkge1xuICAgIHBhZGRpbmc6IDEwcmVtIDAuNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1haW4tbWVudSA+IGgxIHtcbiAgICBmb250LXNpemU6IDVyZW07XG4gIH1cblxuICAucGxheWVyLXdhaXQgaDIge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgfVxuICBcbiAgLnBsYXllci13YWl0IHAge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgfSAgXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAubWFpbi1tZW51ID4gaDEge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxuXG4gIC5wbGFjZW1lbnQuYnV0dG9ucyAuYnV0dG9uLFxuICAubWFpbi1tZW51IC5idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtXG4gIH1cblxuICAubWFpbi1tZW51IGZvcm0gbGkgLmxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cblxuICAubWFpbi1tZW51IGZvcm0gbGkgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJIHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gIH0gIFxuXG4gIC5wbGF5ZXItd2FpdCBoMiB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG4gIFxuICAucGxheWVyLXdhaXQgcCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH0gIFxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLm1haW4tbWVudSA+IGgxIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cblxuICAucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbixcbiAgLm1haW4tbWVudSAuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW1cbiAgfVxuXG4gIC5tYWluLW1lbnUgZm9ybSBsaSAubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC5wbGF5ZXItd2FpdCBoMiB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG4gIFxuICAucGxheWVyLXdhaXQgcCB7XG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICB9ICBcbn1cblxuQGtleWZyYW1lcyBsb3NlLWZvY3VzIHtcbiAgMCUge1xuICAgIGZpbHRlcjogYmx1cigwKTtcbiAgfVxuICBcbiAgMTAwJSB7XG4gICAgZmlsdGVyOiBibHVyKDJweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyByZXR1cm4tZm9jdXMge1xuICAwJSB7XG4gICAgZmlsdGVyOiBibHVyKDJweCk7XG4gIH1cbiAgXG4gIDEwMCUge1xuICAgIGZpbHRlcjogYmx1cigwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlLW91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJ1dHRvbi1pZGxlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDApO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB0aXRsZS1pZGxlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xJSwgMC4yNSUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAlLCAtMC4yNSUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdGl0bGUtcmlzZSB7XG4gIDAlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMTBweCkgYnJpZ2h0bmVzcygwLjI1KSBvcGFjaXR5KDAuMjUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgZmlsdGVyOiBibHVyKDBweCkgYnJpZ2h0bmVzcygxKSBvcGFjaXR5KDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdGl0bGUtc2luayB7XG4gIDAlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDEpIG9wYWNpdHkoMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMTBweCkgYnJpZ2h0bmVzcygwLjI1KSBvcGFjaXR5KDAuMjUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hpcC1pZGxlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yLjUlLCAwLjI1JSkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMCUsIC0wLjI1JSkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzaGlwLWlkbGUtaG9yaXpvbnRhbCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMi41JSwgMC4yNSUpIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpIHJvdGF0ZSg5MGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMCUsIC0wLjI1JSkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSkgcm90YXRlKDkwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNoaXAtc2luayB7XG4gIDAlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDEpIGdyYXlzY2FsZSgwJSkgb3BhY2l0eSgxKTtcbiAgfVxuXG4gIDIuNSUge1xuICAgIGZpbHRlcjogYmx1cigwcHgpIGJyaWdodG5lc3MoMikgZ3JheXNjYWxlKDAlKSBvcGFjaXR5KDEpO1xuICB9XG5cbiAgNSUge1xuICAgIGZpbHRlcjogYmx1cigwcHgpIGJyaWdodG5lc3MoMSkgZ3JheXNjYWxlKDAlKSBvcGFjaXR5KDEpO1xuICB9XG4gIFxuICAxMDAlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMjVweCkgYnJpZ2h0bmVzcygwLjUpIGdyYXlzY2FsZSgxMDAlKSBvcGFjaXR5KDAuMjUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hpcC1zaGFraW5nIHtcbiAwJSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wLjUlLCAwKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKTtcbiB9XG5cbiAxMDAlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC41JSwgMCkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSk7XG4gfVxufVxuXG5Aa2V5ZnJhbWVzIHNoaXAtc2hha2luZy1ob3Jpem9udGFsIHtcbiAgMCUge1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTAuMDUlKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKSByb3RhdGUoOTBkZWcpO1xuICB9XG4gXG4gIDEwMCUge1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMC4wNSUpIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpIHJvdGF0ZSg5MGRlZyk7XG4gIH1cbiB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQiw0QkFBNEI7QUFDN0I7O0FBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixpQ0FBaUM7QUFDbkM7O0FBRUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0U7OzZCQUUyQjtBQUM3Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7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QUEwQztFQUM1QztBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSxpREFBaUQ7RUFDbkQ7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNkRBQTZEO0VBQy9EOztFQUVBO0lBQ0UsNERBQTREO0VBQzlEO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDJFQUEyRTtFQUM3RTs7RUFFQTtJQUNFLDBFQUEwRTtFQUM1RTtBQUNGOztBQUVBO0VBQ0U7SUFDRSx3REFBd0Q7RUFDMUQ7O0VBRUE7SUFDRSx3REFBd0Q7RUFDMUQ7O0VBRUE7SUFDRSx3REFBd0Q7RUFDMUQ7O0VBRUE7SUFDRSxnRUFBZ0U7RUFDbEU7QUFDRjs7QUFFQTtDQUNDO0VBQ0MseURBQXlEO0NBQzFEOztDQUVBO0VBQ0Msd0RBQXdEO0NBQ3pEO0FBQ0Q7O0FBRUE7RUFDRTtHQUNDLHdFQUF3RTtFQUN6RTs7RUFFQTtHQUNDLHVFQUF1RTtFQUN4RTtDQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZmFtaWx5PVJ1YmlrK0lzbyZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuIC0tY3VycmVudC1oZWFsdGg6IDEwMCU7XFxuIC0tY3VycmVudC1oaXQ6IDAlO1xcbiAtLWN1cnJlbnQtZW1wdHk6IDAlO1xcbiAtLWVuZW15LWhlYWx0aDogMTAwJTtcXG4gLS1lbmVteS1oaXQ6IDAlO1xcbiAtLWVuZW15LWVtcHR5OiAwJTtcXG4gLS1leHBsb3Npb24tc2NhbGU6IDE7XFxuIC0tc3ByaXRlLXNjYWxlOiAwLjM1O1xcbiAtLXBsYWNlbWVudC1jZWxsLXdpZHRoOiA0OHB4O1xcbn1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sLCBib2R5LFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIFxcbnAsIHVsLCBvbCwgbGksIGJ1dHRvbiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG51bCwgb2wsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufSBcXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1heC13aWR0aCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTI4MHB4O1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTI4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgei1pbmRleDogOTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnZvbHVtZS1idG4sXFxuLnNldHRpbmdzLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBmaWxsOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lOyAgXFxufSBcXG5cXG4uc2V0dGluZ3MtYnRuIHtcXG4gIHRyYW5zaXRpb246IFxcbiAgICB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQgMHMsXFxuICAgIGZpbGwgMC4yNXMgZWFzZS1pbi1vdXQgMHM7XFxufVxcblxcbi52b2x1bWUtYnRuLm11dGUge1xcbiAgZmlsbDogcmVkO1xcbn1cXG5cXG4udm9sdW1lLWJ0bi5tdXRlOmhvdmVyIHtcXG4gIGZpbGw6IGhzbCgwLCAxMDAlLCA0MCUpO1xcbn1cXG5cXG4udm9sdW1lLWJ0bi5tdXRlOmFjdGl2ZSB7XFxuICBmaWxsOiBoc2woMCwgMTAwJSwgMzAlKTtcXG59XFxuXFxuLnZvbHVtZS1idG46aG92ZXIsXFxuLnNldHRpbmdzLWJ0bjpob3ZlciB7XFxuICBmaWxsOiBoc2woMCwgMCUsIDkwJSk7XFxufVxcblxcbi5zZXR0aW5ncy1idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4udm9sdW1lLWJ0bjphY3RpdmUsXFxuLnNldHRpbmdzLWJ0bjphY3RpdmUge1xcbiAgZmlsbDogaHNsKDAsIDAlLCA4MCUpO1xcbn1cXG5cXG4uZ2FtZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvb2NlYW4uZ2lmJyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkcyB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5ib2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNzUwcHg7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbmltYXRpb246IHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxufVxcblxcbi5wbGFjZW1lbnQgLmJvYXJkIHtcXG4gIG1hcmdpbi10b3A6IDEycmVtO1xcbiAgbWF4LXdpZHRoOiA0ODBweDtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG59XFxuXFxuLnBsYWNlbWVudC5pbmZvIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA2NDBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYW5pbWF0aW9uOiB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbn1cXG5cXG4ucGxhY2VtZW50LmluZm8gcCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gIGFuaW1hdGlvbjogYnV0dG9uLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5wbGFjZW1lbnQuaW5mbyBwOm50aC1jaGlsZCgxKSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5wbGFjZW1lbnQuaW5mbyBwOm50aC1jaGlsZCgzKSB7XFxuICBtYXJnaW46IDEuNXJlbSAwIDtcXG59XFxuXFxuLnBsYWNlbWVudC5pbmZvIC5zaGlwcyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNDgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxcmVtIHZhcigtLXBsYWNlbWVudC1jZWxsLXdpZHRoKTtcXG5cXG59XFxuXFxuLnBsYWNlbWVudC5pbmZvIC5zaGlwcyAuY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IHZhcigtLXBsYWNlbWVudC1jZWxsLXdpZHRoKTtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxhY2VtZW50IC5zcHJpdGV7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi8qIG1ha2Ugc3ByaXRlIHN0eWxlIGNvbW1vbiAqL1xcblxcbi5wbGFjZW1lbnQgLmNlbGwuaG92ZXIgLnNwcml0ZSxcXG4ucGxhY2VtZW50IC5jb250YWluZXIudW5wbGFjZWQ6aG92ZXIgLnNwcml0ZSB7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBzZXBpYSgxMDAlKSBicmlnaHRuZXNzKDAuNzUpIGh1ZS1yb3RhdGUoNjBkZWcpO1xcbn1cXG5cXG4ucGxhY2VtZW50IC5jZWxsLmhvdmVyLmNsaWNrZWQgLnNwcml0ZSxcXG4ucGxhY2VtZW50IC5jb250YWluZXIudW5wbGFjZWQ6YWN0aXZlIC5zcHJpdGV7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBzZXBpYSgxMDAlKSBicmlnaHRuZXNzKDEpIGh1ZS1yb3RhdGUoNjBkZWcpO1xcbn1cXG5cXG4ucGxhY2VtZW50IC5jZWxsIHtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbi5wbGFjZW1lbnQgLmNlbGwuYm93IHtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5wbGFjZW1lbnQgLmNlbGwuaG92ZXIsXFxuLnBsYWNlbWVudCAuY29udGFpbmVyLnVucGxhY2VkOmhvdmVyIC5jZWxse1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMjUpO1xcbn1cXG5cXG4ucGxhY2VtZW50IC5jZWxsLmhvdmVyLmNsaWNrZWQsXFxuLnBsYWNlbWVudCAuY29udGFpbmVyLnVucGxhY2VkOmFjdGl2ZSAuY2VsbHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LCAyNTUsIDE1NSwgMC4yNSk7XFxufVxcblxcbi5ib2FyZHMucGxhY2VtZW50IC5ib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xcbn1cXG5cXG4uY3VycmVudC5ib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xcbn1cXG5cXG4udGFyZ2V0LmJvYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XFxufVxcblxcbi5jZWxsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYVxcXCI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0IDBzO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY2VsbC5zaGlwLWJvdyB7XFxuICB6LWluZGV4OiAxXFxufVxcblxcbi5jZWxsLm1pc3Mgc3ZnIHtcXG4gIGZpbGw6IHJnYmEoMjU1LCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuLmJvYXJkcy5wbGFjZW1lbnQgLmNlbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcXG59XFxuXFxuLmN1cnJlbnQgPiAuY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xcbn1cXG5cXG4udGFyZ2V0ID4gLmNlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjI1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XFxufVxcblxcbi50YXJnZXQgPiAuY2VsbDpub3QoLm1pc3MsIC5oaXQpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjI1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhcmdldCA+IC5jZWxsLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi50YXJnZXQgPiAuY2VsbC5zdW5rLFxcbi50YXJnZXQgPiAuY2VsbC5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc3ByaXRlLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IGE7XFxufVxcblxcbi5zcHJpdGUtY29udGFpbmVyLmhvcml6b250YWwge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zcHJpdGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSk7XFxuICBhbmltYXRpb246IHNoaXAtaWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGU7XFxufVxcblxcbi5ob3Jpem9udGFsIC5zcHJpdGUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKSByb3RhdGUoOTBkZWcpO1xcbiAgYW5pbWF0aW9uOiBzaGlwLWlkbGUtaG9yaXpvbnRhbCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGU7XFxufVxcblxcbi5jZWxsLnN1bmsgLnNwcml0ZSB7XFxuICBhbmltYXRpb246IFxcbiAgICBzaGlwLXNpbmsgMTBzIGxpbmVhciAwcyAxIGZvcndhcmRzIG5vcm1hbCxcXG4gICAgc2hpcC1zaGFraW5nIDAuNXMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xcbn1cXG5cXG4uY2VsbC5zdW5rIC5ob3Jpem9udGFsIC5zcHJpdGUge1xcbiAgYW5pbWF0aW9uOiBcXG4gICAgc2hpcC1zaW5rIDEwcyBsaW5lYXIgMHMgMSBmb3J3YXJkcyBub3JtYWwsXFxuICAgIHNoaXAtc2hha2luZy1ob3Jpem9udGFsIDAuNXMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xcbn1cXG5cXG4uZmlyZS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogYTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5maXJlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbn1cXG5cXG4uY2VsbC5zdW5rIC5maXJlIHtcXG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxufVxcblxcbi5leHBsb3Npb24tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNSU7XFxuICBsZWZ0OiA0NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiBhO1xcbiAgei1pbmRleDogMjsgIFxcbn1cXG5cXG4uZXhwbG9zaW9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1leHBsb3Npb24tc2NhbGUpKTtcXG59XFxuXFxuLmJsb2NrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICB6LWluZGV4OiA1O1xcbn1cXG5cXG4ucGxheWVyLWluZm8ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDMwcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogNTA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGFuaW1hdGlvbjogdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcXG59XFxuXFxuLmN1cnJlbnQucGxheWVyLWluZm8ge1xcbiAgdG9wOiAxcmVtO1xcbn1cXG5cXG4uZW5lbXkucGxheWVyLWluZm8ge1xcbiAgYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ucGxheWVyLWluZm8gcCB7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuLnBsYXllci1pbmZvIHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5wbGF5ZXItaW5mbyBwOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaGVhbHRoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCA4LCAyMCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWx0aCA+IC50ZXh0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xcbn1cXG5cXG4uaGVhbHRoID4gLmJhcixcXG4uaGVhbHRoID4gLmhpdCxcXG4uaGVhbHRoID4gLmVtcHR5IHtcXG4gIGhlaWdodDogMC41cmVtO1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXMgZWFzZS1pbi1vdXQgMHM7XFxufVxcblxcbi5jdXJyZW50IC5oZWFsdGggPiAuYmFyIHtcXG4gIHdpZHRoOiB2YXIoLS1jdXJyZW50LWhlYWx0aCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwMCwgMCwgMSk7XFxufVxcblxcbi5jdXJyZW50IC5oZWFsdGggPiAuaGl0IHtcXG4gIHdpZHRoOiB2YXIoLS1jdXJyZW50LWhpdCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwMCwgMCwgMC41KTtcXG59XFxuXFxuLmN1cnJlbnQgLmhlYWx0aCA+IC5lbXB0eSB7XFxuICB3aWR0aDogdmFyKC0tY3VycmVudC1lbXB0eSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG5cXG4uZW5lbXkgLmhlYWx0aCA+IC5iYXIge1xcbiAgd2lkdGg6IHZhcigtLWVuZW15LWhlYWx0aCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMCwgMCwgMSk7XFxufVxcblxcbi5lbmVteSAuaGVhbHRoID4gLmhpdCB7XFxuICB3aWR0aDogdmFyKC0tZW5lbXktaGl0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uZW5lbXkgLmhlYWx0aCA+IC5lbXB0eSB7XFxuICB3aWR0aDogdmFyKC0tZW5lbXktZW1wdHkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuLnNpdGUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLm1haW4tbWVudSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLW1lbnUgPiBoMSB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsgSXNvJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgYW5pbWF0aW9uOiBcXG4gICAgdGl0bGUtaWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGUsXFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1haW4tbWVudSAuYnV0dG9ucyB7XFxuICBoZWlnaHQ6IDE1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS5jbGljay1zaW5rLFxcbi5tYWluLW1lbnUuY2xpY2stc2luayxcXG4ubWFpbi1tZW51IC5idXR0b25zLmNsaWNrLXNpbmsge1xcbiAgYW5pbWF0aW9uOlxcbiAgICB0aXRsZS1zaW5rIDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbn1cXG5cXG4ucGxhY2VtZW50LmJ1dHRvbnMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDY0MHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG59XFxuXFxuLnBsYWNlbWVudC5idXR0b25zIC5idXR0b24sXFxuLm1haW4tbWVudSAuYnV0dG9uIHtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gIGFuaW1hdGlvbjogXFxuICAgIGJ1dHRvbi1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZSxcXG4gICAgdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbi5wbGFjZW1lbnQuYnV0dG9ucyAuYnV0dG9uLmRpc2FibGVkIHtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4ucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbjpub3QoLmRpc2FibGVkKTpob3ZlcixcXG4ubWFpbi1tZW51IC5idXR0b246aG92ZXIge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgOTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4ucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbjpub3QoLmRpc2FibGVkKTphY3RpdmUsXFxuLm1haW4tbWVudSAuYnV0dG9uOmFjdGl2ZSB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCA4MCUpO1xcbn1cXG5cXG4ubWFpbi1tZW51IGZvcm0gbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNnJlbTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubWFpbi1tZW51IGZvcm0gbGk6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcblxcbi5tYWluLW1lbnUgZm9ybSBsaSAubGFiZWwge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGFuaW1hdGlvbjogXFxuICAgIGJ1dHRvbi1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZSxcXG4gICAgdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcXG59XFxuXFxuLm1haW4tbWVudSBmb3JtIGxpIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiAycHggZ3Jvb3ZlICM3ZjhjOGQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBhbmltYXRpb246IFxcbiAgICBidXR0b24taWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGUsXFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxufVxcblxcbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmOGM4ZDtcXG4gIGJvcmRlcjogMnB4IG91dHNldCAjN2Y4YzhkO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1haW4tbWVudSBmb3JtIGxpIC5idXR0b24uQUkudG9nZ2xlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgNiUsIDQ1JSk7ICAgXFxuICBib3JkZXI6IDJweCBpbnNldCBoc2woMCwgNiUsIDQ1JSk7ICAgXFxufVxcblxcbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJLnRvZ2dsZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NCwgNiUsIDUwJSk7ICAgXFxuICBib3JkZXI6IDJweCBpbnNldCBoc2woMTg0LCA2JSwgNTAlKTsgICBcXG59XFxuXFxuLm1haW4tbWVudSBmb3JtIGxpIC5idXR0b24uQUkudG9nZ2xlZDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NCwgNiUsIDQ3JSk7XFxufVxcblxcbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA1MCUpOyAgIFxcbn1cXG5cXG4ubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NCwgNiUsIDQ3JSk7ICAgXFxuICBib3JkZXI6IDJweCBpbnNldCBoc2woMTg0LCA2JSwgNDclKTsgIFxcbn1cXG5cXG4uY29weXJpZ2h0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgYW5pbWF0aW9uOiBcXG4gICAgdGl0bGUtaWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGUsXFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjhyZW07XFxufVxcblxcbi5jb3B5cmlnaHQgc3ZnIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBmaWxsOiB3aGl0ZTtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAgdHJhbnNpdGlvbjogXFxuICAgIHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dCAwcyxcXG4gICAgZmlsbCAwLjI1cyBlYXNlLWluLW91dCAwcztcXG59XFxuXFxuLmNvcHlyaWdodCBzdmc6aG92ZXIge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgODAlKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4xKTtcXG59XFxuXFxuLmNvcHlyaWdodCBzdmc6YWN0aXZlIHtcXG4gIGZpbGw6IGhzbCgwLCAwJSwgNzAlKTtcXG59XFxuXFxuLnBsYXllci13YWl0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbmltYXRpb246IFxcbiAgICB0aXRsZS1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZSxcXG4gICAgdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucGxheWVyLXdhaXQgaDIge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLnBsYXllci13YWl0IHAge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmRpYWxvZy1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuMjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmRpYWxvZyB7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NCwgNjIsIDgwLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG91dGxpbmU6IDJweCByaWRnZSAjOTVhNWE2O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uZGlhbG9nIC50ZXh0IHtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmRpYWxvZyAubWFpbi50ZXh0IHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZGlhbG9nIC5idXR0b24ge1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgbWFyZ2luOiAwLjI1cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmOGM4ZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IG91dHNldCAjN2Y4YzhkO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmRpYWxvZyAuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA1NiUpO1xcbn1cXG5cXG4uZGlhbG9nIC5idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA1OSUpO1xcbn1cXG5cXG4uZGlhbG9nIC5wbGF5LmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhZTYwO1xcbiAgYm9yZGVyOiAxcHggb3V0c2V0ICMyN2FlNjA7XFxufVxcblxcbi5kaWFsb2cgLnBsYXkuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMTQ1LCA2MyUsIDQ1JSk7XFxufVxcblxcbi5kaWFsb2cgLnBsYXkuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDE0NSwgNjMlLCA0OCUpO1xcbn1cXG5cXG4uZGlhbG9nIC5tZW51LmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiO1xcbiAgYm9yZGVyOiAxcHggb3V0c2V0ICNjMDM5MmI7XFxufVxcblxcbi5kaWFsb2cgLm1lbnU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDYsIDYzJSwgNDklKTtcXG59XFxuXFxuLmRpYWxvZyAubWVudTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDYsIDYzJSwgNTIlKTtcXG59XFxuXFxuLmZhZGUtb3V0IHtcXG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxufVxcblxcbi5sb3NlLWZvY3VzIHtcXG4gIGFuaW1hdGlvbjogbG9zZS1mb2N1cyAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcXG59XFxuXFxuLnJldHVybi1mb2N1cyB7XFxuICBhbmltYXRpb246IHJldHVybi1mb2N1cyAwLjEyNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxufVxcblxcbi52aXNpYmlsaXR5LWhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDZweCkge1xcbiAgLmJvYXJkczpub3QoLnBsYWNlbWVudCkge1xcbiAgICBwYWRkaW5nOiAxMHJlbSAwLjVyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLm1haW4tbWVudSA+IGgxIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgfVxcblxcbiAgLnBsYXllci13YWl0IGgyIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgfVxcbiAgXFxuICAucGxheWVyLXdhaXQgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIH0gIFxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC5tYWluLW1lbnUgPiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gIH1cXG5cXG4gIC5wbGFjZW1lbnQuYnV0dG9ucyAuYnV0dG9uLFxcbiAgLm1haW4tbWVudSAuYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW1cXG4gIH1cXG5cXG4gIC5tYWluLW1lbnUgZm9ybSBsaSAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxuXFxuICAubWFpbi1tZW51IGZvcm0gbGkgaW5wdXQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSSB7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gIH0gIFxcblxcbiAgLnBsYXllci13YWl0IGgyIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcbiAgXFxuICAucGxheWVyLXdhaXQgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfSAgXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLm1haW4tbWVudSA+IGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcblxcbiAgLnBsYWNlbWVudC5idXR0b25zIC5idXR0b24sXFxuICAubWFpbi1tZW51IC5idXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW1cXG4gIH1cXG5cXG4gIC5tYWluLW1lbnUgZm9ybSBsaSAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAucGxheWVyLXdhaXQgaDIge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuICBcXG4gIC5wbGF5ZXItd2FpdCBwIHtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgfSAgXFxufVxcblxcbkBrZXlmcmFtZXMgbG9zZS1mb2N1cyB7XFxuICAwJSB7XFxuICAgIGZpbHRlcjogYmx1cigwKTtcXG4gIH1cXG4gIFxcbiAgMTAwJSB7XFxuICAgIGZpbHRlcjogYmx1cigycHgpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJldHVybi1mb2N1cyB7XFxuICAwJSB7XFxuICAgIGZpbHRlcjogYmx1cigycHgpO1xcbiAgfVxcbiAgXFxuICAxMDAlIHtcXG4gICAgZmlsdGVyOiBibHVyKDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYnV0dG9uLWlkbGUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAwKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0aXRsZS1pZGxlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTElLCAwLjI1JSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAlLCAtMC4yNSUpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRpdGxlLXJpc2Uge1xcbiAgMCUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMTBweCkgYnJpZ2h0bmVzcygwLjI1KSBvcGFjaXR5KDAuMjUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIGZpbHRlcjogYmx1cigwcHgpIGJyaWdodG5lc3MoMSkgb3BhY2l0eSgxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0aXRsZS1zaW5rIHtcXG4gIDAlIHtcXG4gICAgZmlsdGVyOiBibHVyKDBweCkgYnJpZ2h0bmVzcygxKSBvcGFjaXR5KDEpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIGZpbHRlcjogYmx1cigxMHB4KSBicmlnaHRuZXNzKDAuMjUpIG9wYWNpdHkoMC4yNSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hpcC1pZGxlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIuNSUsIDAuMjUlKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMCUsIC0wLjI1JSkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hpcC1pZGxlLWhvcml6b250YWwge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMi41JSwgMC4yNSUpIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpIHJvdGF0ZSg5MGRlZyk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAlLCAtMC4yNSUpIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpIHJvdGF0ZSg5MGRlZyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hpcC1zaW5rIHtcXG4gIDAlIHtcXG4gICAgZmlsdGVyOiBibHVyKDBweCkgYnJpZ2h0bmVzcygxKSBncmF5c2NhbGUoMCUpIG9wYWNpdHkoMSk7XFxuICB9XFxuXFxuICAyLjUlIHtcXG4gICAgZmlsdGVyOiBibHVyKDBweCkgYnJpZ2h0bmVzcygyKSBncmF5c2NhbGUoMCUpIG9wYWNpdHkoMSk7XFxuICB9XFxuXFxuICA1JSB7XFxuICAgIGZpbHRlcjogYmx1cigwcHgpIGJyaWdodG5lc3MoMSkgZ3JheXNjYWxlKDAlKSBvcGFjaXR5KDEpO1xcbiAgfVxcbiAgXFxuICAxMDAlIHtcXG4gICAgZmlsdGVyOiBibHVyKDI1cHgpIGJyaWdodG5lc3MoMC41KSBncmF5c2NhbGUoMTAwJSkgb3BhY2l0eSgwLjI1KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaGlwLXNoYWtpbmcge1xcbiAwJSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMC41JSwgMCkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSk7XFxuIH1cXG5cXG4gMTAwJSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjUlLCAwKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKTtcXG4gfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoaXAtc2hha2luZy1ob3Jpem9udGFsIHtcXG4gIDAlIHtcXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMC4wNSUpIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpIHJvdGF0ZSg5MGRlZyk7XFxuICB9XFxuIFxcbiAgMTAwJSB7XFxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMC4wNSUpIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpIHJvdGF0ZSg5MGRlZyk7XFxuICB9XFxuIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbGwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlzSGl0ID0gZmFsc2U7XG4gICAgdGhpcy5qdXN0R290SGl0ID0gZmFsc2U7XG4gICAgdGhpcy5zaGlwID0gbnVsbDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmlzSGl0ID0gdHJ1ZTtcbiAgICB0aGlzLmp1c3RHb3RIaXQgPSB0cnVlO1xuICB9XG5cbiAgcmVzZXRKdXN0R290SGl0KCkge1xuICAgIHRoaXMuanVzdEdvdEhpdCA9IGZhbHNlO1xuICB9XG5cbiAgYXNzaWduKHNoaXApIHtcbiAgICB0aGlzLnNoaXAgPSBzaGlwO1xuICB9XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyL3BsYXllcic7XG5pbXBvcnQgQUkgZnJvbSAnLi9wbGF5ZXIvYWknO1xuaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL2dhbWVCb2FyZCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgY29uc3QgcGxheWVycyA9IFtdO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQbGF5ZXJzID0gKGlucHV0UGxheWVycykgPT4ge1xuICBwbGF5ZXJzLmxlbmd0aCA9IDA7XG5cbiAgaW5wdXRQbGF5ZXJzLmZvckVhY2goKHRoaXNQbGF5ZXIpID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzUGxheWVyLnR5cGUgPT09ICdodW1hbicgPyBuZXcgUGxheWVyKHRoaXNQbGF5ZXIubmFtZSlcbiAgICAgIDogdGhpc1BsYXllci50eXBlID09PSAnQUknID8gbmV3IEFJKHRoaXNQbGF5ZXIuZGlmZmljdWx0eSlcbiAgICAgICAgOiBudWxsO1xuXG4gICAgcGxheWVycy5wdXNoKHBsYXllcik7XG5cbiAgICBjb25zdCBib2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICBib2FyZC5jcmVhdGVCb2FyZCgpO1xuICAgIHBsYXllci5hc3NpZ25Cb2FyZChib2FyZCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHBsYWNlUGxheWVyU2hpcHMgPSAocGxheWVyLCBzaGlwcykgPT4ge1xuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgcGxheWVyXG4gICAgICAuYm9hcmRcbiAgICAgIC5wbGFjZVNoaXAoc2hpcC5pbnNlcnRDb29yZGluYXRlcywgbmV3IFNoaXAoc2hpcC5sZW5ndGgsIHNoaXAudHlwZSksIHNoaXAuaG9yaXpvbnRhbCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCBDZWxsIGZyb20gJy4vY2VsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICB0aGlzLmZsZWV0ID0gW107XG4gIH1cblxuICBnZXRCb2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgfVxuXG4gIGdldEZsZWV0KCkge1xuICAgIHJldHVybiB0aGlzLmZsZWV0O1xuICB9XG5cbiAgZW1wdHlGbGVldCgpIHtcbiAgICB0aGlzLmZsZWV0Lmxlbmd0aCA9IDA7XG4gIH1cblxuICBjcmVhdGVCb2FyZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID0gbmV3IENlbGwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwbGFjZVNoaXAoW3gsIHldLCBzaGlwLCBpc1BsYWNlZEhvcml6b250YWxseSA9IHRydWUpIHtcbiAgICBjb25zdCBzdGFydCA9IGlzUGxhY2VkSG9yaXpvbnRhbGx5XG4gICAgICA/IHggLSBNYXRoLmZsb29yKHNoaXAubGVuZ3RoIC8gMilcbiAgICAgIDogeSAtIE1hdGguZmxvb3Ioc2hpcC5sZW5ndGggLyAyKTtcbiAgICBjb25zdCBlbmQgPSBzdGFydCArIHNoaXAubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBib3dDb29yZGluYXRlcyA9IGlzUGxhY2VkSG9yaXpvbnRhbGx5XG4gICAgICA/IHsgeDogZW5kLCB5IH1cbiAgICAgIDogeyB4LCB5OiBlbmQgfTtcblxuICAgIGlmIChzaGlwLmhhc1Bvc2l0aW9uZWQpIHJldHVybjtcbiAgICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IDkpIHJldHVybjtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpICs9IDEpIHtcbiAgICAgIGlmIChpc1BsYWNlZEhvcml6b250YWxseSAmJiB0aGlzLmJvYXJkW2ldW3ldLnNoaXAgIT09IG51bGwpIHJldHVybjtcbiAgICAgIGlmICghaXNQbGFjZWRIb3Jpem9udGFsbHkgJiYgdGhpcy5ib2FyZFt4XVtpXS5zaGlwICE9PSBudWxsKSByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSArPSAxKSB7XG4gICAgICBpZiAoaXNQbGFjZWRIb3Jpem9udGFsbHkpIHRoaXMuYm9hcmRbaV1beV0uYXNzaWduKHNoaXApO1xuICAgICAgaWYgKCFpc1BsYWNlZEhvcml6b250YWxseSkgdGhpcy5ib2FyZFt4XVtpXS5hc3NpZ24oc2hpcCk7XG4gICAgfVxuICAgIHRoaXMuZmxlZXQucHVzaChzaGlwKTtcbiAgICBzaGlwLmlzUG9zaXRpb25lZChib3dDb29yZGluYXRlcywgaXNQbGFjZWRIb3Jpem9udGFsbHkpO1xuICB9XG5cbiAgcmVzZXRDZWxsc0p1c3RHb3RIaXQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgdGhpcy5ib2FyZFtpXVtqXS5yZXNldEp1c3RHb3RIaXQoKTtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0uc2hpcCAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0uc2hpcC5yZXNldEp1c3RTdW5rKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyByZWNlaXZlQXR0YWNrKFt4LCB5XSkge1xuICAgIHRoaXMucmVzZXRDZWxsc0p1c3RHb3RIaXQoKTtcbiAgICB0aGlzLmJvYXJkW3hdW3ldLmhpdCgpO1xuICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldLnNoaXAgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0uc2hpcC5oaXQoKTtcbiAgICB9XG4gIH1cblxuICBpc0ZsZWV0T3BlcmF0aW9uYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxlZXQuc29tZSgoc2hpcCkgPT4gc2hpcC5oYXNTdW5rID09PSBmYWxzZSk7XG4gIH1cblxuICBhbGxVbmhpdENvb3JkaW5hdGVzKCkge1xuICAgIGNvbnN0IHVuaGl0Q29vcmRpbmF0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBpZiAoIXRoaXMuYm9hcmRbaV1bal0uaXNIaXQpIHVuaGl0Q29vcmRpbmF0ZXMucHVzaChbaSwgal0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5oaXRDb29yZGluYXRlcztcbiAgfVxuXG4gIGFsbFNoaXBDb29yZGluYXRlcygpIHtcbiAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXS5zaGlwICE9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmJvYXJkW2ldW2pdLmlzSGl0KSB7XG4gICAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChbaSwgal0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2hpcENvb3JkaW5hdGVzO1xuICB9XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUkgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihkaWZmaWN1bHR5ID0gJ0Vhc3knKSB7XG4gICAgc3VwZXIoYEFJICR7ZGlmZmljdWx0eX1gKTtcbiAgICB0aGlzLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xuICB9XG5cbiAgY2hvb3NlQXR0YWNrQ29vcmRpbmF0ZXMocGxheWVyKSB7XG4gICAgaWYgKHRoaXMuZGlmZmljdWx0eSA9PT0gJ0Vhc3knKSB7XG4gICAgICBjb25zdCBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlcyA9IHBsYXllci5ib2FyZC5hbGxVbmhpdENvb3JkaW5hdGVzKCk7XG4gICAgICByZXR1cm4gYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXNbXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzLmxlbmd0aClcbiAgICAgIF07XG4gICAgfVxuICAgIC8vIE5vcm1hbCBQbGFjZWhvbGRlciwgc2FtZSBhcyBlYXN5XG4gICAgaWYgKHRoaXMuZGlmZmljdWx0eSA9PT0gJ05vcm1hbCcpIHtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLmFsbFVuaGl0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIHJldHVybiBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlc1tcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXMubGVuZ3RoKVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlmZmljdWx0eSA9PT0gJ0NoZWF0Jykge1xuICAgICAgY29uc3QgYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmQuYWxsU2hpcENvb3JkaW5hdGVzKCk7XG4gICAgICByZXR1cm4gYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXNbXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzLmxlbmd0aClcbiAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3RhdGljIGFycmFuZ2VTaGlwc09uQm9hcmQoZGF0YSkge1xuICAgIGNvbnN0IGN1cnJlbnRBSVNoaXBzID0gW107XG4gICAgY29uc3QgaW1hZ2luYXJ5Qm9hcmQgPSBbXTtcblxuICAgIGRhdGEuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGxldCBob3Jpem9udGFsID0gQm9vbGVhbihNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKTtcbiAgICAgIGxldCBzdGFydCA9IGhvcml6b250YWxcbiAgICAgICAgPyB4IC0gTWF0aC5mbG9vcihzaGlwLmxlbmd0aCAvIDIpXG4gICAgICAgIDogeSAtIE1hdGguZmxvb3Ioc2hpcC5sZW5ndGggLyAyKTtcbiAgICAgIGxldCBlbmQgPSBzdGFydCArIHNoaXAubGVuZ3RoIC0gMTtcblxuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gaG9yaXpvbnRhbCA/IFtpLCB5XSA6IFt4LCBpXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGltYWdpbmFyeUJvYXJkLnNvbWUoKGNlbGwpID0+IGNlbGxbMF0gPT09IGFycmF5WzBdICYmIGNlbGxbMV0gPT09IGFycmF5WzFdKVxuICAgICAgICAgICAgfHwgc3RhcnQgPCAwXG4gICAgICAgICAgICB8fCBlbmQgPiA5XG4gICAgICAgICkge1xuICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICBob3Jpem9udGFsID0gQm9vbGVhbihNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKTtcbiAgICAgICAgICBzdGFydCA9IGhvcml6b250YWxcbiAgICAgICAgICAgID8geCAtIE1hdGguZmxvb3Ioc2hpcC5sZW5ndGggLyAyKVxuICAgICAgICAgICAgOiB5IC0gTWF0aC5mbG9vcihzaGlwLmxlbmd0aCAvIDIpO1xuICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgc2hpcC5sZW5ndGggLSAxO1xuICAgICAgICAgIGkgPSBzdGFydDtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBob3Jpem9udGFsID8gW2ksIHldIDogW3gsIGldO1xuICAgICAgICBpbWFnaW5hcnlCb2FyZC5wdXNoKGFycmF5KTtcbiAgICAgIH1cblxuICAgICAgY3VycmVudEFJU2hpcHMucHVzaCh7XG4gICAgICAgIHR5cGU6IHNoaXAudHlwZSxcbiAgICAgICAgbGVuZ3RoOiBzaGlwLmxlbmd0aCxcbiAgICAgICAgaW5zZXJ0Q29vcmRpbmF0ZXM6IFt4LCB5XSxcbiAgICAgICAgaG9yaXpvbnRhbCxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRBSVNoaXBzO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lID0gJ1BsYXllcicpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYm9hcmQgPSBudWxsO1xuICB9XG5cbiAgYXNzaWduQm9hcmQoZ2FtZUJvYXJkKSB7XG4gICAgdGhpcy5ib2FyZCA9IGdhbWVCb2FyZDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgdHlwZSkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5oYXNQb3NpdGlvbmVkID0gZmFsc2U7XG4gICAgdGhpcy5oYXNTdW5rID0gZmFsc2U7XG4gICAgdGhpcy5qdXN0U3VuayA9IGZhbHNlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5ib3dDb29yZGluYXRlcyA9IG51bGw7XG4gICAgdGhpcy5pc0hvcml6b250YWwgPSBudWxsO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSB0aGlzLmlzU3VuaygpO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHRoaXMuaGFzU3VuayA9IHRydWU7XG4gICAgdGhpcy5qdXN0U3VuayA9IHRydWU7XG4gIH1cblxuICByZXNldEp1c3RTdW5rKCkge1xuICAgIHRoaXMuanVzdFN1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGlzUG9zaXRpb25lZChib3dDb29yZGluYXRlcywgaXNIb3Jpem9udGFsKSB7XG4gICAgdGhpcy5oYXNQb3NpdGlvbmVkID0gdHJ1ZTtcbiAgICB0aGlzLmJvd0Nvb3JkaW5hdGVzID0gYm93Q29vcmRpbmF0ZXM7XG4gICAgdGhpcy5pc0hvcml6b250YWwgPSBpc0hvcml6b250YWw7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImNvbnRyb2xsZXJET01cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcGxheWVycywgZ2VuZXJhdGVQbGF5ZXJzLCBwbGFjZVBsYXllclNoaXBzIH0gZnJvbSAnLi9nYW1lJztcbmltcG9ydCBBSSBmcm9tICcuL3BsYXllci9haSc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyL3BsYXllcic7XG5pbXBvcnQgc3ByaXRlQmF0dGxlc2hpcCBmcm9tICcuLi9hc3NldHMvc2hpcEJhdHRsZXNoaXAucG5nJztcbmltcG9ydCBzcHJpdGVDYXJyaWVyIGZyb20gJy4uL2Fzc2V0cy9zaGlwQ2Fycmllci5wbmcnO1xuaW1wb3J0IHNwcml0ZUNydWlzZXIgZnJvbSAnLi4vYXNzZXRzL3NoaXBDcnVpc2VyLnBuZyc7XG5pbXBvcnQgc3ByaXRlRGVzdHJveWVyIGZyb20gJy4uL2Fzc2V0cy9zaGlwRGVzdHJveWVyLnBuZyc7XG5pbXBvcnQgc3ByaXRlU3VibWFyaW5lIGZyb20gJy4uL2Fzc2V0cy9zaGlwU3VibWFyaW5lLnBuZyc7XG5pbXBvcnQgc3ByaXRlRmlyZSBmcm9tICcuLi9hc3NldHMvZmlyZS5naWYnO1xuaW1wb3J0IHNwcml0ZUV4cGxvc2lvbiBmcm9tICcuLi9hc3NldHMvZXhwbG9zaW9uLmdpZic7XG5cbmxldCBhdWRpb1ZvbHVtZSA9IDE7XG5cbmNvbnN0IGNoYW5nZUF1ZGlvVm9sdW1lID0gKHZhbHVlKSA9PiB7XG4gIGF1ZGlvVm9sdW1lID0gdmFsdWU7XG4gIGNvbnN0IGF1ZGlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2F1ZGlvJyk7XG4gIGF1ZGlvcy5mb3JFYWNoKChhdWRpbykgPT4ge1xuICAgIGNvbnN0IHNvdW5kID0gYXVkaW87XG4gICAgc291bmQudm9sdW1lID0gdmFsdWU7XG4gIH0pO1xufTtcblxuY29uc3QgcGxheU1lbnVDbGlja1NGWCA9ICgpID0+IHtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Z4TWVudScpO1xuICBhdWRpby52b2x1bWUgPSBhdWRpb1ZvbHVtZTtcbiAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICBhdWRpby5wbGF5KCk7XG59O1xuXG5jb25zdCBwbGF5RmlyZVNGWCA9ICgpID0+IHtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Z4RmlyZScpO1xuICBhdWRpby52b2x1bWUgPSBhdWRpb1ZvbHVtZTtcbiAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICBhdWRpby5wbGF5KCk7XG59O1xuXG5jb25zdCBzdG9wQWxsQkdNID0gKCkgPT4ge1xuICBzdG9wTWVudUJHTSgpO1xuICBzdG9wVmljdG9yeUJHTSgpO1xuICBzdG9wR2FtZUJHTSgpO1xufTtcblxuY29uc3QgcGxheU1lbnVCR00gPSAoKSA9PiB7XG4gIHN0b3BWaWN0b3J5QkdNKCk7XG4gIHN0b3BHYW1lQkdNKCk7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnbU1lbnUnKTtcbiAgYXVkaW8udm9sdW1lID0gYXVkaW9Wb2x1bWU7XG4gIGF1ZGlvLnBsYXkoKTtcbn07XG5cbmNvbnN0IHN0b3BNZW51QkdNID0gKCkgPT4ge1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZ21NZW51Jyk7XG4gIGF1ZGlvLnBhdXNlKCk7XG4gIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbn07XG5cbmNvbnN0IHBsYXlWaWN0b3J5QkdNID0gKCkgPT4ge1xuICBzdG9wTWVudUJHTSgpO1xuICBzdG9wR2FtZUJHTSgpO1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZ21WaWN0b3J5Jyk7XG4gIGF1ZGlvLnZvbHVtZSA9IGF1ZGlvVm9sdW1lO1xuICBhdWRpby5wbGF5KCk7XG59O1xuXG5jb25zdCBzdG9wVmljdG9yeUJHTSA9ICgpID0+IHtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmdtVmljdG9yeScpO1xuICBhdWRpby5wYXVzZSgpO1xuICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG59O1xuXG5jb25zdCBwbGF5R2FtZUJHTSA9ICgpID0+IHtcbiAgc3RvcE1lbnVCR00oKTtcbiAgc3RvcFZpY3RvcnlCR00oKTtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmdtR2FtZScpO1xuICBhdWRpby52b2x1bWUgPSBhdWRpb1ZvbHVtZTtcbiAgYXVkaW8ucGxheSgpO1xufTtcblxuY29uc3Qgc3RvcEdhbWVCR00gPSAoKSA9PiB7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnbUdhbWUnKTtcbiAgYXVkaW8ucGF1c2UoKTtcbiAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xufTtcblxuY29uc3Qgc2hpcHNEYXRhID0gW1xuICB7XG4gICAgdHlwZTogJ0NhcnJpZXInLFxuICAgIGxlbmd0aDogNSxcbiAgICBzcmM6IHNwcml0ZUNhcnJpZXIsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQmF0dGxlc2hpcCcsXG4gICAgbGVuZ3RoOiA0LFxuICAgIHNyYzogc3ByaXRlQmF0dGxlc2hpcCxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDcnVpc2VyJyxcbiAgICBsZW5ndGg6IDMsXG4gICAgc3JjOiBzcHJpdGVDcnVpc2VyLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ1N1Ym1hcmluZScsXG4gICAgbGVuZ3RoOiAzLFxuICAgIHNyYzogc3ByaXRlU3VibWFyaW5lLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ0Rlc3Ryb3llcicsXG4gICAgbGVuZ3RoOiAyLFxuICAgIHNyYzogc3ByaXRlRGVzdHJveWVyLFxuICB9LFxuXTtcblxubGV0IGN1cnJlbnRQbGF5ZXI7XG5sZXQgdGFyZ2V0UGxheWVyO1xuXG5jb25zdCBzd2l0Y2hQbGF5ZXJzID0gKCkgPT4ge1xuICBjdXJyZW50UGxheWVyID0gY3VycmVudFBsYXllciA9PT0gcGxheWVyc1swXSA/IHBsYXllcnNbMV0gOiBwbGF5ZXJzWzBdO1xuICB0YXJnZXRQbGF5ZXIgPSB0YXJnZXRQbGF5ZXIgPT09IHBsYXllcnNbMF0gPyBwbGF5ZXJzWzFdIDogcGxheWVyc1swXTtcbn07XG5cbmNvbnN0IGxvc2VGb2N1c0Zyb21HYW1lID0gKCkgPT4ge1xuICBjb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbiAgZ2FtZS5jbGFzc0xpc3QuYWRkKCdsb3NlLWZvY3VzJyk7XG59O1xuXG5jb25zdCByZXR1cm5Gb2N1c1RvR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XG4gIGdhbWUuY2xhc3NMaXN0LnJlbW92ZSgnbG9zZS1mb2N1cycpO1xuICBnYW1lLmNsYXNzTGlzdC5hZGQoJ3JldHVybi1mb2N1cycpO1xuICBnYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICBnYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ3JldHVybi1mb2N1cycpO1xuICB9LCB7IG9uY2U6IHRydWUgfSk7XG59O1xuXG5jb25zdCBoaWRlRGlhbG9nID0gKCkgPT4ge1xuICBwbGF5TWVudUNsaWNrU0ZYKCk7XG4gIGNvbnN0IGRpYWxvZ092ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLW92ZXJsYXknKTtcbiAgZGlhbG9nT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdmYWRlLW91dCcpO1xuICBkaWFsb2dPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICBkaWFsb2dPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtb3V0Jyk7XG4gICAgZGlhbG9nT3ZlcmxheS5yZW1vdmUoKTtcbiAgfSwgeyBvbmNlOiB0cnVlIH0pO1xufTtcblxuY29uc3Qgc2hvd1dpbm5lckRpYWxvZyA9ICgpID0+IHtcbiAgY29uc3Qgc2l0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGRpYWxvZ092ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlhbG9nT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctb3ZlcmxheScpO1xuXG4gIGNvbnN0IGRpYWxvZ0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaWFsb2dCb3guY2xhc3NMaXN0LmFkZCgnZGlhbG9nJyk7XG5cbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAxLmNsYXNzTGlzdC5hZGQoJ3N1YicsICd0ZXh0Jyk7XG4gIHAxLnRleHRDb250ZW50ID0gY3VycmVudFBsYXllciBpbnN0YW5jZW9mIEFJXG4gICAgPyAnQWxsIHlvdXIgc2hpcHMgaGF2ZSBiZWVuIGRlc3Ryb3llZC4nXG4gICAgOiAnQWxsIGVuZW15IHNoaXBzIGhhdmUgYmVlbiBkZXN0cm95ZWQuJztcblxuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDIudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50UGxheWVyLm5hbWV9IHdpbnMhYDtcbiAgcDIuY2xhc3NMaXN0LmFkZCgnbWFpbicsICd0ZXh0Jyk7XG5cbiAgY29uc3QgYnRuUGxheUFnYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0blBsYXlBZ2Fpbi5jbGFzc0xpc3QuYWRkKCdwbGF5JywgJ2J1dHRvbicpO1xuICBidG5QbGF5QWdhaW4udGV4dENvbnRlbnQgPSAnUGxheSBBZ2Fpbic7XG4gIGJ0blBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc3RhcnRHYW1lKTtcblxuICBjb25zdCBidG5NZW51UmV0dXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bk1lbnVSZXR1cm4uY2xhc3NMaXN0LmFkZCgnbWVudScsICdidXR0b24nKTtcbiAgYnRuTWVudVJldHVybi50ZXh0Q29udGVudCA9ICdSZXR1cm4gdG8gTWVudSc7XG4gIGJ0bk1lbnVSZXR1cm4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXR1cm5Ub01lbnUpO1xuXG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChwMSk7XG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChwMik7XG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChidG5QbGF5QWdhaW4pO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQoYnRuTWVudVJldHVybik7XG4gIGRpYWxvZ092ZXJsYXkuYXBwZW5kQ2hpbGQoZGlhbG9nQm94KTtcbiAgc2l0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaWFsb2dPdmVybGF5KTtcbn07XG5cbmNvbnN0IGNoZWNrV2lubmluZ0NvbmRpdGlvbiA9ICgpID0+IHtcbiAgaWYgKCF0YXJnZXRQbGF5ZXIuYm9hcmQuaXNGbGVldE9wZXJhdGlvbmFsKCkpIHtcbiAgICBwbGF5VmljdG9yeUJHTSgpO1xuICAgIGxvc2VGb2N1c0Zyb21HYW1lKCk7XG4gICAgc2hvd1dpbm5lckRpYWxvZygpO1xuICAgIGhpZGVQbGF5ZXJIUCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHNlbGVjdFNoaXBPYmplY3QgPSAocGxheWVyLCBjZWxsKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZFNoaXBdID0gcGxheWVyXG4gICAgLmJvYXJkXG4gICAgLmZsZWV0XG4gICAgLmZpbHRlcigoc2hpcCkgPT4gc2hpcC50eXBlID09PSBjZWxsLmRhdGFzZXQuc2hpcCk7XG4gIHJldHVybiBzZWxlY3RlZFNoaXA7XG59O1xuXG5jb25zdCBpZlN1bmtFeHBsb3Npb24gPSAoY2VsbCkgPT4ge1xuICBjb25zdCBleHBsb2RpbmdDZWxsID0gY2VsbDtcbiAgaWYgKGV4cGxvZGluZ0NlbGwuZGF0YXNldC5zaGlwKSB7XG4gICAgY29uc3QgZXhwbG9kaW5nQ2VsbFBsYXllciA9IHBsYXllcnMuZmluZCgocGxheWVyKSA9PiBwbGF5ZXIubmFtZSA9PT0gY2VsbC5kYXRhc2V0LnBsYXllck5hbWUpO1xuICAgIGNvbnN0IGV4cGxvZGluZ1NoaXAgPSBzZWxlY3RTaGlwT2JqZWN0KGV4cGxvZGluZ0NlbGxQbGF5ZXIsIGV4cGxvZGluZ0NlbGwpO1xuICAgIGlmIChleHBsb2RpbmdTaGlwLmhhc1N1bmspIHtcbiAgICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgICBbXG4gICAgICAgICAgK2V4cGxvZGluZ0NlbGwuZGF0YXNldC54ICsgMSxcbiAgICAgICAgICArZXhwbG9kaW5nQ2VsbC5kYXRhc2V0LnksXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICArZXhwbG9kaW5nQ2VsbC5kYXRhc2V0LnggLSAxLFxuICAgICAgICAgICtleHBsb2RpbmdDZWxsLmRhdGFzZXQueSxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICtleHBsb2RpbmdDZWxsLmRhdGFzZXQueCxcbiAgICAgICAgICArZXhwbG9kaW5nQ2VsbC5kYXRhc2V0LnkgKyAxLFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgK2V4cGxvZGluZ0NlbGwuZGF0YXNldC54LFxuICAgICAgICAgICtleHBsb2RpbmdDZWxsLmRhdGFzZXQueSAtIDEsXG4gICAgICAgIF0sXG4gICAgICBdO1xuICAgICAgZXhwbG9kaW5nQ2VsbC5kYXRhc2V0LnNoaXAgPSAnJztcbiAgICAgIGV4cGxvZGluZ0NlbGwuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuXG4gICAgICBhcnJheS5mb3JFYWNoKChbeCwgeV0pID0+IHtcbiAgICAgICAgY29uc3QgbmV4dENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1bZGF0YS1wbGF5ZXItbmFtZT1cIiR7ZXhwbG9kaW5nQ2VsbFBsYXllci5uYW1lfVwiXVtkYXRhLXNoaXA9XCIke2V4cGxvZGluZ1NoaXAudHlwZX1cIl1gKTtcbiAgICAgICAgaWYgKG5leHRDZWxsKSBoaXRFeHBsb3Npb25FZmZlY3QobmV4dENlbGwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBoaXRFeHBsb3Npb25FZmZlY3QgPSBhc3luYyAoY2VsbCkgPT4ge1xuICBpZlN1bmtFeHBsb3Npb24oY2VsbCk7XG5cbiAgY29uc3QgZXhwbG9zaW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGV4cGxvc2lvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdleHBsb3Npb24tY29udGFpbmVyJyk7XG5cbiAgY29uc3QgZXhwbG9zaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGV4cGxvc2lvbi5zcmMgPSBgJHtzcHJpdGVFeHBsb3Npb259P3JhbmQ9JHtNYXRoLnJhbmRvbSgpfWA7XG4gIGV4cGxvc2lvbi5jbGFzc0xpc3QuYWRkKCdleHBsb3Npb24nKTtcblxuICBjb25zdCBleHBsb3Npb25TY2FsZSA9IDEuNSAqIChwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjZWxsKS53aWR0aCwgMTApIC8gNjApO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZXhwbG9zaW9uLXNjYWxlJywgZXhwbG9zaW9uU2NhbGUpO1xuXG4gIGV4cGxvc2lvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChleHBsb3Npb24pO1xuICBjZWxsLmFwcGVuZENoaWxkKGV4cGxvc2lvbkNvbnRhaW5lcik7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY2VsbC5yZW1vdmVDaGlsZChleHBsb3Npb25Db250YWluZXIpO1xuICB9LCA1MDAwKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9LCA1MDApO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZEZpcmVFZmZlY3QgPSAodGFyZ2V0Q2VsbCkgPT4ge1xuICBjb25zdCBmaXJlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZpcmVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmlyZS1jb250YWluZXInKTtcblxuICBjb25zdCBmaXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGZpcmUuc3JjID0gYCR7c3ByaXRlRmlyZX0/cmFuZD0ke01hdGgucmFuZG9tKCl9YDtcbiAgZmlyZS5jbGFzc0xpc3QuYWRkKCdmaXJlJyk7XG5cbiAgZmlyZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJlKTtcbiAgdGFyZ2V0Q2VsbC5hcHBlbmRDaGlsZChmaXJlQ29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGFkZE1pc3NNYXJrID0gKHRhcmdldENlbGwpID0+IHtcbiAgY29uc3QgbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICB0YXJnZXRDZWxsLmFwcGVuZENoaWxkKG1hcmspO1xuICBtYXJrLm91dGVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPm1pc3M8L3RpdGxlPjxwYXRoIGQ9XCJNMTksNi40MUwxNy41OSw1TDEyLDEwLjU5TDYuNDEsNUw1LDYuNDFMMTAuNTksMTJMNSwxNy41OUw2LjQxLDE5TDEyLDEzLjQxTDE3LjU5LDE5TDE5LDE3LjU5TDEzLjQxLDEyTDE5LDYuNDFaXCIgLz48L3N2Zz4nO1xufTtcblxuY29uc3QgdXBkYXRlSFAgPSAoKSA9PiB7XG4gIGxldCB0YWc7XG4gIGlmIChwbGF5ZXJzLnNvbWUoKHBsYXllcikgPT4gcGxheWVyIGluc3RhbmNlb2YgQUkpKSB7XG4gICAgdGFnID0gdGFyZ2V0UGxheWVyID09PSBwbGF5ZXJzWzBdXG4gICAgICA/ICdjdXJyZW50J1xuICAgICAgOiAnZW5lbXknO1xuICB9IGVsc2Uge1xuICAgIHRhZyA9ICdlbmVteSc7XG4gIH1cbiAgY29uc3QgdG90YWxIUCA9IHRhcmdldFBsYXllclxuICAgIC5ib2FyZFxuICAgIC5mbGVldFxuICAgIC5yZWR1Y2UoKHRvdGFsLCBzaGlwKSA9PiB0b3RhbCArIHNoaXAubGVuZ3RoLCAwKTtcbiAgY29uc3QgY3VycmVudEhQID0gdGFyZ2V0UGxheWVyXG4gICAgLmJvYXJkXG4gICAgLmZsZWV0XG4gICAgLnJlZHVjZSgodG90YWwsIHNoaXApID0+IHRvdGFsIC0gc2hpcC5oaXRzLCB0b3RhbEhQKTtcbiAgY29uc3QgaGVhbHRoID0gYCR7TWF0aC5yb3VuZCgoY3VycmVudEhQIC8gdG90YWxIUCkgKiAxMDApfSVgO1xuICBjb25zdCBoaXQgPSBgJHtNYXRoLnJvdW5kKCgxIC8gdG90YWxIUCkgKiAxMDApfSVgO1xuICBjb25zdCBlbXB0eSA9IGAke01hdGgucm91bmQoKDEgLSBjdXJyZW50SFAgLyB0b3RhbEhQKSAqIDEwMCl9JWA7XG5cbiAgY29uc3QgcGxheWVySGVhbHRoVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhZ30gLmhlYWx0aCA+IC50ZXh0IGApO1xuICBwbGF5ZXJIZWFsdGhUZXh0LnRleHRDb250ZW50ID0gYCR7Y3VycmVudEhQfS8ke3RvdGFsSFB9YDtcblxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHt0YWd9LWhlYWx0aGAsIGhlYWx0aCk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke3RhZ30taGl0YCwgaGl0KTtcblxuICBjb25zdCBwbGF5ZXJIZWFsdGhCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YWd9IC5oZWFsdGggPiAuYmFyIGApO1xuICBwbGF5ZXJIZWFsdGhCYXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHt0YWd9LWhpdGAsICcwJScpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke3RhZ30tZW1wdHlgLCBlbXB0eSk7XG4gIH0sIHsgb25jZTogdHJ1ZSB9KTtcbn07XG5cbmNvbnN0IHVwZGF0ZUJvYXJkID0gYXN5bmMgKFt4LCB5XSkgPT4ge1xuICBjb25zdCB0YXJnZXRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdW2RhdGEtcGxheWVyLW5hbWU9XCIke3RhcmdldFBsYXllci5uYW1lfVwiXWApO1xuICBpZiAodGFyZ2V0UGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcCkge1xuICAgIGNvbnN0IHRhcmdldFNoaXAgPSBzZWxlY3RTaGlwT2JqZWN0KHRhcmdldFBsYXllciwgdGFyZ2V0Q2VsbCk7XG4gICAgaWYgKHRhcmdldFNoaXAuaGFzU3Vuaykge1xuICAgICAgcHJpbnRTaW5raW5nU3ByaXRlKHRhcmdldFNoaXApO1xuICAgIH1cbiAgfVxuICBhd2FpdCBoaXRFeHBsb3Npb25FZmZlY3QodGFyZ2V0Q2VsbCk7XG4gIGlmICh0YXJnZXRQbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5zaGlwKSB7XG4gICAgdGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICBpZiAodGFyZ2V0Q2VsbC5kYXRhc2V0LnNoaXApIGFkZEZpcmVFZmZlY3QodGFyZ2V0Q2VsbCk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgYWRkTWlzc01hcmsodGFyZ2V0Q2VsbCk7XG4gIH1cbn07XG5cbmNvbnN0IHNob3dJbnB1dEJsb2NrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGJsb2NrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmxvY2tlci5jbGFzc0xpc3QuYWRkKCdibG9ja2VyJyk7XG5cbiAgY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XG4gIGdhbWUuYXBwZW5kQ2hpbGQoYmxvY2tlcik7XG59O1xuXG5jb25zdCBoaWRlSW5wdXRCbG9ja2VyID0gKCkgPT4ge1xuICBjb25zdCBibG9ja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrZXInKTtcbiAgY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XG4gIGdhbWUucmVtb3ZlQ2hpbGQoYmxvY2tlcik7XG59O1xuXG5jb25zdCBzdGFydFR1cm4gPSAoKSA9PiB7XG4gIGNsZWFyR2FtZUNvbnRhaW5lcigpO1xuICBpbml0aWFsaXplR2FtZSgpO1xufTtcblxuY29uc3Qgc2hvd1BsYXllcldhaXRTY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuXG4gIGNvbnN0IHBsYXllcldhaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGxheWVyV2FpdC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItd2FpdCcpO1xuICBwbGF5ZXJXYWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRUdXJuKTtcblxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLnRleHRDb250ZW50ID0gY3VycmVudFBsYXllci5uYW1lO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAudGV4dENvbnRlbnQgPSAnUHJlc3MgYW55d2hlcmUgdG8gc3RhcnQgeW91ciB0dXJuLic7XG5cbiAgcGxheWVyV2FpdC5hcHBlbmRDaGlsZChoMik7XG4gIHBsYXllcldhaXQuYXBwZW5kQ2hpbGQocCk7XG4gIGdhbWUuYXBwZW5kQ2hpbGQocGxheWVyV2FpdCk7XG59O1xuXG5jb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgd2luZG93LnNjcm9sbCh7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICB9KTtcbn07XG5cbmNvbnN0IHNjcm9sbFRvQm90dG9tID0gKCkgPT4ge1xuICB3aW5kb3cuc2Nyb2xsKHtcbiAgICB0b3A6IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgIGxlZnQ6IDAsXG4gICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICB9KTtcbn07XG5cbmxldCBwcmV2aW91c0hpdENlbGwgPSBbLTEsIC0xXTtcblxuY29uc3QgcHJvY2Vzc0hpdCA9IGFzeW5jIChbeCwgeV0pID0+IHtcbiAgdGFyZ2V0UGxheWVyXG4gICAgLmJvYXJkXG4gICAgLnJlY2VpdmVBdHRhY2soXG4gICAgICBbeCwgeV0sXG4gICAgKTtcbiAgcHJldmlvdXNIaXRDZWxsID0gWyt4LCAreV07XG4gIHNob3dJbnB1dEJsb2NrZXIoKTtcbiAgYXdhaXQgdXBkYXRlQm9hcmQoW3gsIHldKTtcbiAgaWYgKHRhcmdldFBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXApIHVwZGF0ZUhQKCk7XG4gIGlmIChjaGVja1dpbm5pbmdDb25kaXRpb24oKSkgcmV0dXJuO1xuXG4gIHN3aXRjaFBsYXllcnMoKTtcbiAgaWYgKGN1cnJlbnRQbGF5ZXIgaW5zdGFuY2VvZiBBSSkge1xuICAgIGhpdENlbGxBSSgpO1xuICB9IGVsc2UgaWYgKCEodGFyZ2V0UGxheWVyIGluc3RhbmNlb2YgQUkpKSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCAyNTAwKTtcbiAgICB9KTtcbiAgICBjbGVhckdhbWVDb250YWluZXIoKTtcbiAgICBzaG93UGxheWVyV2FpdFNjcmVlbigpO1xuICB9IGVsc2Uge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICBpZiAocGxheWVycy5zb21lKChwbGF5ZXIpID0+IChwbGF5ZXIgaW5zdGFuY2VvZiBBSSkpKSBoaWRlSW5wdXRCbG9ja2VyKCk7XG59O1xuXG5jb25zdCBoaXRDZWxsQUkgPSAoKSA9PiB7XG4gIHBsYXlGaXJlU0ZYKCk7XG4gIGNvbnN0IFt4LCB5XSA9IGN1cnJlbnRQbGF5ZXIuY2hvb3NlQXR0YWNrQ29vcmRpbmF0ZXModGFyZ2V0UGxheWVyKTtcbiAgc2Nyb2xsVG9Ub3AoKTtcbiAgcHJvY2Vzc0hpdChbeCwgeV0pO1xufTtcblxuY29uc3QgaGl0Q2VsbFBsYXllciA9IChlKSA9PiB7XG4gIHBsYXlGaXJlU0ZYKCk7XG4gIGNvbnN0IGNlbGwgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gIGNvbnN0IHsgeCB9ID0gY2VsbC5kYXRhc2V0O1xuICBjb25zdCB7IHkgfSA9IGNlbGwuZGF0YXNldDtcbiAgaWYgKFxuICAgIGNlbGwuZGF0YXNldC5wbGF5ZXJOYW1lID09PSB0YXJnZXRQbGF5ZXIubmFtZVxuICAgICYmICF0YXJnZXRQbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5pc0hpdFxuICApIHtcbiAgICBwcm9jZXNzSGl0KFt4LCB5XSk7XG4gIH1cbn07XG5cbmNvbnN0IHByaW50U2lua2luZ1Nwcml0ZSA9IChzaGlwKSA9PiB7XG4gIGNvbnN0IHsgeCwgeSB9ID0gc2hpcC5ib3dDb29yZGluYXRlcztcbiAgY29uc3Qgc2hpcFBsYXllciA9IHBsYXllcnMuZmluZCgocGxheWVyKSA9PiBwbGF5ZXIuYm9hcmQuZ2V0RmxlZXQoKS5pbmNsdWRlcyhzaGlwKSk7XG4gIGNvbnN0IGJvd0NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1bZGF0YS1wbGF5ZXItbmFtZT1cIiR7c2hpcFBsYXllci5uYW1lfVwiXWApO1xuICBjb25zdCBib3dDZWxsQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGJvd0NlbGwuY2hpbGROb2Rlcyk7XG4gIGlmIChib3dDZWxsQ2hpbGRyZW4uc29tZSgoY2hpbGQpID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygnc3ByaXRlLWNvbnRhaW5lcicpKSkgcmV0dXJuO1xuICBib3dDZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtYm93Jyk7XG5cbiAgY29uc3Qgc3ByaXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNwcml0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzcHJpdGUtY29udGFpbmVyJyk7XG4gIGlmIChzaGlwLmlzSG9yaXpvbnRhbCkgc3ByaXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcblxuICBjb25zdCBzaGlwU3ByaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHNoaXBTcHJpdGUuc3JjID0gc2hpcHNEYXRhLmZpbmQoKHNoaXBEYXRhKSA9PiBzaGlwRGF0YS50eXBlID09PSBzaGlwLnR5cGUpLnNyYztcbiAgc2hpcFNwcml0ZS5jbGFzc0xpc3QuYWRkKCdzcHJpdGUnKTtcblxuICBjb25zdCBzcHJpdGVTY2FsZSA9IDAuMzUgKiAocGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoYm93Q2VsbCkud2lkdGgsIDEwKSAvIDYwKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXNwcml0ZS1zY2FsZScsIHNwcml0ZVNjYWxlKTtcblxuICBzcHJpdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcFNwcml0ZSk7XG4gIGJvd0NlbGwuYXBwZW5kQ2hpbGQoc3ByaXRlQ29udGFpbmVyKTtcbn07XG5cbmNvbnN0IHByaW50U3ByaXRlcyA9ICgpID0+IHtcbiAgY3VycmVudFBsYXllci5ib2FyZC5nZXRGbGVldCgpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBpZiAoIXNoaXAuaGFzU3Vuaykge1xuICAgICAgY29uc3QgeyB4LCB5IH0gPSBzaGlwLmJvd0Nvb3JkaW5hdGVzO1xuICAgICAgY29uc3QgYm93Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXVtkYXRhLXBsYXllci1uYW1lPVwiJHtjdXJyZW50UGxheWVyLm5hbWV9XCJdYCk7XG4gICAgICBib3dDZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtYm93Jyk7XG5cbiAgICAgIGNvbnN0IHNwcml0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3ByaXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Nwcml0ZS1jb250YWluZXInKTtcbiAgICAgIGlmIChzaGlwLmlzSG9yaXpvbnRhbCkgc3ByaXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcblxuICAgICAgY29uc3Qgc2hpcFNwcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgc2hpcFNwcml0ZS5zcmMgPSBzaGlwc0RhdGEuZmluZCgoc2hpcERhdGEpID0+IHNoaXBEYXRhLnR5cGUgPT09IHNoaXAudHlwZSkuc3JjO1xuICAgICAgc2hpcFNwcml0ZS5jbGFzc0xpc3QuYWRkKCdzcHJpdGUnKTtcblxuICAgICAgY29uc3Qgc3ByaXRlU2NhbGUgPSAwLjM1ICogKHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJvd0NlbGwpLndpZHRoLCAxMCkgLyA2MCk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc3ByaXRlLXNjYWxlJywgc3ByaXRlU2NhbGUpO1xuXG4gICAgICBzcHJpdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcFNwcml0ZSk7XG4gICAgICBib3dDZWxsLmFwcGVuZENoaWxkKHNwcml0ZUNvbnRhaW5lcik7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHJlc2l6ZVNwcml0ZXMgPSAoKSA9PiB7XG4gIGNvbnN0IGJvd0NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2VsbCcpO1xuICBjb25zdCBzcHJpdGVTY2FsZSA9IDAuMzUgKiAocGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoYm93Q2VsbCkud2lkdGgsIDEwKSAvIDYwKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXNwcml0ZS1zY2FsZScsIHNwcml0ZVNjYWxlKTtcbn07XG5cbmNvbnN0IHJlc3VtZUdhbWUgPSAoKSA9PiB7XG4gIHJldHVybkZvY3VzVG9HYW1lKCk7XG4gIGhpZGVEaWFsb2coKTtcbiAgdW5oaWRlUGxheWVySFAoKTtcbn07XG5cbmNvbnN0IHJlc3RhcnRHYW1lID0gKCkgPT4ge1xuICByZXR1cm5Gb2N1c1RvR2FtZSgpO1xuICBoaWRlRGlhbG9nKCk7XG4gIGNsZWFyR2FtZUNvbnRhaW5lcigpO1xuICBnZW5lcmF0ZVBsYXllcnMoXG4gICAgW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnaHVtYW4nLFxuICAgICAgICBuYW1lOiBwbGF5ZXJzWzBdLm5hbWUsXG4gICAgICB9LFxuICAgICAgcGxheWVyc1sxXSBpbnN0YW5jZW9mIEFJXG4gICAgICAgID8ge1xuICAgICAgICAgIHR5cGU6ICdBSScsXG4gICAgICAgICAgZGlmZmljdWx0eTogcGxheWVyc1sxXS5kaWZmaWN1bHR5LFxuICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgIHR5cGU6ICdodW1hbicsXG4gICAgICAgICAgbmFtZTogcGxheWVyc1sxXS5uYW1lLFxuICAgICAgICB9LFxuICAgIF0sXG4gICk7XG4gIFtjdXJyZW50UGxheWVyLCB0YXJnZXRQbGF5ZXJdID0gcGxheWVycztcbiAgaW5pdGlhbGl6ZUdhbWVDb250YWluZXIoKTtcbiAgaW5pdGlhbGl6ZVNoaXBQbGFjZW1lbnRTY3JlZW4oKTtcbn07XG5cbmNvbnN0IHJldHVyblRvTWVudSA9ICgpID0+IHtcbiAgc3RvcEFsbEJHTSgpO1xuICByZXR1cm5Gb2N1c1RvR2FtZSgpO1xuICBoaWRlRGlhbG9nKCk7XG4gIGNsZWFyR2FtZUNvbnRhaW5lcigpO1xuICBpbml0aWFsaXplTWFpbk1lbnUoKTtcbn07XG5cbmNvbnN0IHNob3dQYXVzZU1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IHNpdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1jb250YWluZXInKTtcblxuICBjb25zdCBkaWFsb2dPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpYWxvZ092ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLW92ZXJsYXknKTtcblxuICBjb25zdCBkaWFsb2dCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlhbG9nQm94LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZycpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAudGV4dENvbnRlbnQgPSAnR2FtZSBwYXVzZWQnO1xuICBwLmNsYXNzTGlzdC5hZGQoJ21haW4nLCAndGV4dCcpO1xuXG4gIGNvbnN0IGJ0blJlc3VtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5SZXN1bWUuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIGJ0blJlc3VtZS50ZXh0Q29udGVudCA9ICdSZXN1bWUnO1xuICBidG5SZXN1bWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN1bWVHYW1lLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgY29uc3QgYnRuUmVzdGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5SZXN0YXJ0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICBidG5SZXN0YXJ0LnRleHRDb250ZW50ID0gJ1Jlc3RhcnQnO1xuICBidG5SZXN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzdGFydEdhbWUsIHsgb25jZTogdHJ1ZSB9KTtcblxuICBjb25zdCBidG5NZW51UmV0dXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bk1lbnVSZXR1cm4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIGJ0bk1lbnVSZXR1cm4udGV4dENvbnRlbnQgPSAnUmV0dXJuIHRvIE1lbnUnO1xuICBidG5NZW51UmV0dXJuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV0dXJuVG9NZW51LCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgZGlhbG9nQm94LmFwcGVuZENoaWxkKHApO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQoYnRuUmVzdW1lKTtcbiAgZGlhbG9nQm94LmFwcGVuZENoaWxkKGJ0blJlc3RhcnQpO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQoYnRuTWVudVJldHVybik7XG4gIGRpYWxvZ092ZXJsYXkuYXBwZW5kQ2hpbGQoZGlhbG9nQm94KTtcbiAgc2l0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaWFsb2dPdmVybGF5KTtcbn07XG5cbmNvbnN0IGNsaWNrUGF1c2VNZW51ID0gKCkgPT4ge1xuICBwbGF5TWVudUNsaWNrU0ZYKCk7XG4gIGxvc2VGb2N1c0Zyb21HYW1lKCk7XG4gIGhpZGVQbGF5ZXJIUCgpO1xuICBzaG93UGF1c2VNZW51KCk7XG59O1xuXG5jb25zdCBjbGlja1BsYWNlbWVudFNoaXAgPSAoZSkgPT4ge1xuICBjb25zdCB7IHNoaXAgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKGAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXB9XCJgKVxuICAgIC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgICB9KTtcbiAgZS5jdXJyZW50VGFyZ2V0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG59O1xuXG5jb25zdCB1bmNsaWNrU2hpcFBsYWNlbWVudCA9IChlKSA9PiB7XG4gIGNvbnN0IHsgc2hpcCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcH1cImApXG4gICAgLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgIH0pO1xufTtcblxuY29uc3QgaG92ZXJTaGlwUGxhY2VtZW50ID0gKGUpID0+IHtcbiAgaWYgKGlzRHJhZ2dpbmdTaGlwKSByZXR1cm47XG4gIGNvbnN0IHsgc2hpcCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcH1cImApXG4gICAgLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IHVuaG92ZXJTaGlwUGxhY2VtZW50ID0gKGUpID0+IHtcbiAgY29uc3QgeyBzaGlwIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvckFsbChgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwfVwiYClcbiAgICAuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgIH0pO1xufTtcblxuY29uc3QgY3VycmVudFBsYXllclNoaXBzID0gW107XG5cbmNvbnN0IGNvbmZpcm1QbGFjZW1lbnQgPSAoKSA9PiB7XG4gIHBsYWNlUGxheWVyU2hpcHMoY3VycmVudFBsYXllciwgY3VycmVudFBsYXllclNoaXBzKTtcbiAgY3VycmVudFBsYXllclNoaXBzLmxlbmd0aCA9IDA7XG4gIGhpZGVEaWFsb2coKTtcbiAgc3dpdGNoUGxheWVycygpO1xuXG4gIGlmIChcbiAgICBwbGF5ZXJzWzBdLmJvYXJkLmZsZWV0Lmxlbmd0aCA+IDBcbiAgICAmJiBwbGF5ZXJzWzFdLmJvYXJkLmZsZWV0Lmxlbmd0aCA+IDBcbiAgKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCByZXNldFNoaXBQbGFjZW1lbnREcmFnRGF0YSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZVBsYWNlbWVudENlbGxzKTtcbiAgICBpbml0YWxpemVQbGF5ZXJIUFZhbHVlcygpO1xuICAgIGNsZWFyR2FtZUNvbnRhaW5lcigpO1xuICAgIGlmIChwbGF5ZXJzLnNvbWUoKHBsYXllcikgPT4gcGxheWVyIGluc3RhbmNlb2YgQUkpKSB7XG4gICAgICBpbml0aWFsaXplR2FtZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93UGxheWVyV2FpdFNjcmVlbigpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY3VycmVudFBsYXllciBpbnN0YW5jZW9mIEFJKSB7XG4gICAgY3VycmVudFBsYXllclNoaXBzLnB1c2goLi4uQUkuYXJyYW5nZVNoaXBzT25Cb2FyZChzaGlwc0RhdGEpKTtcbiAgICBjb25maXJtUGxhY2VtZW50KCk7XG4gIH0gZWxzZSB7XG4gICAgY2xlYXJHYW1lQ29udGFpbmVyKCk7XG4gICAgaW5pdGlhbGl6ZUdhbWVDb250YWluZXIoKTtcbiAgICBpbml0aWFsaXplU2hpcFBsYWNlbWVudFNjcmVlbigpO1xuICB9XG59O1xuXG5jb25zdCBjbGlja0NvbmZpcm1QbGFjZW1lbnQgPSAoKSA9PiB7XG4gIHBsYXlNZW51Q2xpY2tTRlgoKTtcbiAgY3VycmVudFBsYXllclNoaXBzLmxlbmd0aCA9IDA7XG5cbiAgY29uc3QgcGxhY2VkU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VtZW50LmJvYXJkcyAuY2VsbC5ib3cgLnNwcml0ZS1jb250YWluZXInKTtcbiAgcGxhY2VkU2hpcHMuZm9yRWFjaCgocGxhY2VkU2hpcCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNoaXAsIGxlbmd0aCwgYm93WCwgYm93WSwgaG9yaXpvbnRhbCxcbiAgICB9ID0gcGxhY2VkU2hpcC5wYXJlbnROb2RlLmRhdGFzZXQ7XG4gICAgbGV0IGluc2VydENvb3JkaW5hdGVzO1xuICAgIGlmIChob3Jpem9udGFsID09PSAndHJ1ZScpIHtcbiAgICAgIGluc2VydENvb3JkaW5hdGVzID0gW1xuICAgICAgICArYm93WCAtIE1hdGguY2VpbCgrbGVuZ3RoIC8gMikgKyAxLFxuICAgICAgICArYm93WSxcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc2VydENvb3JkaW5hdGVzID0gW1xuICAgICAgICArYm93WCxcbiAgICAgICAgK2Jvd1kgLSBNYXRoLmNlaWwoK2xlbmd0aCAvIDIpICsgMSxcbiAgICAgIF07XG4gICAgfVxuICAgIGN1cnJlbnRQbGF5ZXJTaGlwcy5wdXNoKHtcbiAgICAgIHR5cGU6IHNoaXAsXG4gICAgICBsZW5ndGg6ICtsZW5ndGgsXG4gICAgICBpbnNlcnRDb29yZGluYXRlcyxcbiAgICAgIGhvcml6b250YWw6IGhvcml6b250YWwgPT09ICd0cnVlJyxcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3Qgc2l0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGRpYWxvZ092ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlhbG9nT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctb3ZlcmxheScpO1xuXG4gIGNvbnN0IGRpYWxvZ0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaWFsb2dCb3guY2xhc3NMaXN0LmFkZCgnZGlhbG9nJyk7XG5cbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAxLmNsYXNzTGlzdC5hZGQoJ3N1YicsICd0ZXh0Jyk7XG4gIHAxLnRleHRDb250ZW50ID0gYFlvdSBoYXZlIHBsYWNlZCAke2N1cnJlbnRQbGF5ZXJTaGlwcy5sZW5ndGh9IHNoaXAocykuYDtcblxuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDIudGV4dENvbnRlbnQgPSAnQ29uZmlybSBwbGFjZW1lbnQ/JztcbiAgcDIuY2xhc3NMaXN0LmFkZCgnbWFpbicsICd0ZXh0Jyk7XG5cbiAgY29uc3QgYnRuWWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0blllcy5jbGFzc0xpc3QuYWRkKCdwbGF5JywgJ2J1dHRvbicpO1xuICBidG5ZZXMudGV4dENvbnRlbnQgPSAnWWVzJztcbiAgYnRuWWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29uZmlybVBsYWNlbWVudCwgeyBvbmNlOiB0cnVlIH0pO1xuXG4gIGNvbnN0IGJ0bk5vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bk5vLmNsYXNzTGlzdC5hZGQoJ21lbnUnLCAnYnV0dG9uJyk7XG4gIGJ0bk5vLnRleHRDb250ZW50ID0gJ05vJztcbiAgYnRuTm8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlRGlhbG9nLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgZGlhbG9nQm94LmFwcGVuZENoaWxkKHAxKTtcbiAgZGlhbG9nQm94LmFwcGVuZENoaWxkKHAyKTtcbiAgZGlhbG9nQm94LmFwcGVuZENoaWxkKGJ0blllcyk7XG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChidG5Obyk7XG4gIGRpYWxvZ092ZXJsYXkuYXBwZW5kQ2hpbGQoZGlhbG9nQm94KTtcbiAgc2l0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaWFsb2dPdmVybGF5KTtcbn07XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJzVG9TaGlwQ2VsbCA9IChjZWxsKSA9PiB7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhvdmVyU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHVuaG92ZXJTaGlwUGxhY2VtZW50KTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjbGlja1BsYWNlbWVudFNoaXApO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB1bmNsaWNrU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHVuY2xpY2tTaGlwUGxhY2VtZW50KTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkcmFnU2hpcE9uUGxhY2VtZW50Qm9hcmQpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJlbnRlcicsIGhvdmVyU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxlYXZlJywgdW5ob3ZlclNoaXBQbGFjZW1lbnQpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgY2xpY2tQbGFjZW1lbnRTaGlwKTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB1bmNsaWNrU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxlYXZlJywgdW5jbGlja1NoaXBQbGFjZW1lbnQpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgZHJhZ1NoaXBPblBsYWNlbWVudEJvYXJkKTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZVNoaXBPblBsYWNlbWVudEJvYXJkKTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHVucGxhY2VTaGlwRnJvbVBsYWNlbWVudEJvYXJkKTtcbn07XG5cbmNvbnN0IGVtcHR5Q2VsbERhdGFPblBsYWNlbWVudEJvYXJkID0gKGNlbGwpID0+IHtcbiAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdib3cnKTtcbiAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zaGlwJyk7XG4gIGNlbGwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxlbmd0aCcpO1xuICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1ib3cteCcpO1xuICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1ib3cteScpO1xuICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1ob3Jpem9udGFsJyk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhvdmVyU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHVuaG92ZXJTaGlwUGxhY2VtZW50KTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjbGlja1BsYWNlbWVudFNoaXApO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB1bmNsaWNrU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHVuY2xpY2tTaGlwUGxhY2VtZW50KTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkcmFnU2hpcE9uUGxhY2VtZW50Qm9hcmQpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJlbnRlcicsIGhvdmVyU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxlYXZlJywgdW5ob3ZlclNoaXBQbGFjZW1lbnQpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgY2xpY2tQbGFjZW1lbnRTaGlwKTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB1bmNsaWNrU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxlYXZlJywgdW5jbGlja1NoaXBQbGFjZW1lbnQpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgZHJhZ1NoaXBPblBsYWNlbWVudEJvYXJkKTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZVNoaXBPblBsYWNlbWVudEJvYXJkKTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHVucGxhY2VTaGlwRnJvbVBsYWNlbWVudEJvYXJkKTtcbn07XG5cbmNvbnN0IHJvdGF0ZVNoaXBPblBsYWNlbWVudEJvYXJkID0gKGUpID0+IHtcbiAgaWYgKGUuZGV0YWlsID4gMSkgcmV0dXJuO1xuICBpZiAoaXNEcmFnZ2luZ1NoaXApIHJldHVybjtcblxuICBjb25zdCByb3RhdGVkU2hpcENlbGwgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gIGNvbnN0IHsgc2hpcCwgbGVuZ3RoIH0gPSByb3RhdGVkU2hpcENlbGwuZGF0YXNldDtcbiAgbGV0IGJvd1ggPSArcm90YXRlZFNoaXBDZWxsLmRhdGFzZXQuYm93WDtcbiAgbGV0IGJvd1kgPSArcm90YXRlZFNoaXBDZWxsLmRhdGFzZXQuYm93WTtcbiAgY29uc3Qgcm90YXRlZFNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxhY2VtZW50IC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcH1cIl0gLnNwcml0ZS1jb250YWluZXJgKTtcbiAgY29uc3Qgcm90YXRlZFNoaXBDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wbGFjZW1lbnQgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwfVwiXWApO1xuXG4gIHJvdGF0ZWRTaGlwQ2VsbHMuZm9yRWFjaCgoc2hpcENlbGwpID0+IHtcbiAgICBlbXB0eUNlbGxEYXRhT25QbGFjZW1lbnRCb2FyZChzaGlwQ2VsbCk7XG4gIH0pO1xuXG4gIGlmIChyb3RhdGVkU2hpcENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKSkge1xuICAgIHJvdGF0ZWRTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwnKTtcbiAgfSBlbHNlIHtcbiAgICByb3RhdGVkU2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG4gIH1cblxuICBsZXQgc2NhblVwID0gdHJ1ZTtcbiAgbGV0IHNjYW5SaWdodCA9IHRydWU7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCArbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaGlwQ2VsbCA9IHJvdGF0ZWRTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7Ym93WCAtIGl9XCJdW2RhdGEteT1cIiR7Ym93WX1cIl1gKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2Jvd1h9XCJdW2RhdGEteT1cIiR7Ym93WSAtIGl9XCJdYCk7XG4gICAgaWYgKFxuICAgICAgIXNoaXBDZWxsXG4gICAgICB8fCAoc2hpcENlbGwuZGF0YXNldC5zaGlwICYmIHNoaXBDZWxsLmRhdGFzZXQuc2hpcCAhPT0gcm90YXRlZFNoaXBDZWxsLmRhdGFzZXQuc2hpcClcbiAgICApIHtcbiAgICAgIGlmIChib3dZID09PSAwKSBzY2FuVXAgPSB0cnVlO1xuICAgICAgaWYgKGJvd1kgPT09IDkpIHNjYW5VcCA9IGZhbHNlO1xuICAgICAgaWYgKGJvd1ggPT09IDApIHNjYW5SaWdodCA9IHRydWU7XG4gICAgICBpZiAoYm93WCA9PT0gOSkgc2NhblJpZ2h0ID0gZmFsc2U7XG4gICAgICBib3dZID0gc2NhblVwID8gYm93WSArIDEgOiBib3dZIC0gMTtcbiAgICAgIGJvd1ggPSBzY2FuUmlnaHQgPyBib3dYICsgMSA6IGJvd1ggLSAxO1xuICAgICAgaSA9IC0xO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCArbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaGlwQ2VsbCA9IHJvdGF0ZWRTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7Ym93WCAtIGl9XCJdW2RhdGEteT1cIiR7Ym93WX1cIl1gKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2Jvd1h9XCJdW2RhdGEteT1cIiR7Ym93WSAtIGl9XCJdYCk7XG4gICAgaWYgKCFzaGlwQ2VsbCkgY29udGludWU7XG4gICAgaWYgKCFzaGlwQ2VsbC5kYXRhc2V0LnNoaXApIHtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIHNoaXBDZWxsLmFwcGVuZENoaWxkKHJvdGF0ZWRTaGlwQ29udGFpbmVyKTtcbiAgICAgICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZCgnYm93Jyk7XG4gICAgICB9XG4gICAgICBzaGlwQ2VsbC5kYXRhc2V0LnNoaXAgPSBzaGlwO1xuICAgICAgc2hpcENlbGwuZGF0YXNldC5sZW5ndGggPSBsZW5ndGg7XG4gICAgICBzaGlwQ2VsbC5kYXRhc2V0LmJvd1ggPSBib3dYO1xuICAgICAgc2hpcENlbGwuZGF0YXNldC5ib3dZID0gYm93WTtcbiAgICAgIHNoaXBDZWxsLmRhdGFzZXQuaG9yaXpvbnRhbCA9IHJvdGF0ZWRTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpO1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcnNUb1NoaXBDZWxsKHNoaXBDZWxsKTtcbiAgICB9XG4gIH1cbn07XG5cbmxldCBpc0RyYWdnaW5nU2hpcCA9IGZhbHNlO1xubGV0IGRyYWdnZWRTaGlwQ29udGFpbmVyID0gbnVsbDtcbmxldCBkcmFnZ2VkU2hpcENlbGwgPSBudWxsO1xubGV0IGRyYWdnZWRTaGlwQ2VsbHMgPSBudWxsO1xuXG5jb25zdCByZXNldFNoaXBQbGFjZW1lbnREcmFnRGF0YSA9ICgpID0+IHtcbiAgaXNEcmFnZ2luZ1NoaXAgPSBmYWxzZTtcbiAgZHJhZ2dlZFNoaXBDb250YWluZXIgPSBudWxsO1xuICBkcmFnZ2VkU2hpcENlbGwgPSBudWxsO1xuICBkcmFnZ2VkU2hpcENlbGxzID0gbnVsbDtcbn07XG5cbmNvbnN0IGRyYWdTaGlwT25QbGFjZW1lbnRCb2FyZCA9IChlKSA9PiB7XG4gIGlzRHJhZ2dpbmdTaGlwID0gdHJ1ZTtcbiAgZHJhZ2dlZFNoaXBDZWxsID0gZS5jdXJyZW50VGFyZ2V0O1xuXG4gIGNvbnN0IHsgc2hpcCB9ID0gZHJhZ2dlZFNoaXBDZWxsLmRhdGFzZXQ7XG4gIGRyYWdnZWRTaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYWNlbWVudCAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXB9XCJdIC5zcHJpdGUtY29udGFpbmVyYCk7XG4gIGRyYWdnZWRTaGlwQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxhY2VtZW50IC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcH1cIl1gKTtcblxuICBkcmFnZ2VkU2hpcENlbGwucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcbn07XG5cbmNvbnN0IG1vdmVEcmFnZ2VkU2hpcE9uUGxhY2VtZW50Qm9hcmQgPSAoZSkgPT4ge1xuICBpZiAoIWlzRHJhZ2dpbmdTaGlwKSByZXR1cm47XG5cbiAgY29uc3QgeyB4LCB5IH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgY29uc3QgeyBzaGlwLCBsZW5ndGggfSA9IGRyYWdnZWRTaGlwQ2VsbC5kYXRhc2V0O1xuICBjb25zdCBib3dYID0gK3ggKyArZHJhZ2dlZFNoaXBDZWxsLmRhdGFzZXQuYm93WCAtIGRyYWdnZWRTaGlwQ2VsbC5kYXRhc2V0Lng7XG4gIGNvbnN0IGJvd1kgPSAreSArICtkcmFnZ2VkU2hpcENlbGwuZGF0YXNldC5ib3dZIC0gZHJhZ2dlZFNoaXBDZWxsLmRhdGFzZXQueTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8ICtsZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNoaXBDZWxsID0gZHJhZ2dlZFNoaXBDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJylcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtib3dYIC0gaX1cIl1bZGF0YS15PVwiJHtib3dZfVwiXWApXG4gICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7Ym93WH1cIl1bZGF0YS15PVwiJHtib3dZIC0gaX1cIl1gKTtcbiAgICBpZiAoXG4gICAgICAhc2hpcENlbGxcbiAgICAgIHx8IChzaGlwQ2VsbC5kYXRhc2V0LnNoaXAgJiYgc2hpcENlbGwuZGF0YXNldC5zaGlwICE9PSBkcmFnZ2VkU2hpcENlbGwuZGF0YXNldC5zaGlwKVxuICAgICkgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgYm93Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQgLmNlbGxbZGF0YS14PVwiJHtib3dYfVwiXVtkYXRhLXk9XCIke2Jvd1l9XCJdYCk7XG4gIGlmICghYm93Q2VsbCkgcmV0dXJuO1xuICBib3dDZWxsLmFwcGVuZENoaWxkKGRyYWdnZWRTaGlwQ29udGFpbmVyKTtcblxuICBkcmFnZ2VkU2hpcENlbGxzLmZvckVhY2goKHNoaXBDZWxsKSA9PiB7XG4gICAgZW1wdHlDZWxsRGF0YU9uUGxhY2VtZW50Qm9hcmQoc2hpcENlbGwpO1xuICB9KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8ICtsZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNoaXBDZWxsID0gZHJhZ2dlZFNoaXBDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJylcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtib3dYIC0gaX1cIl1bZGF0YS15PVwiJHtib3dZfVwiXWApXG4gICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7Ym93WH1cIl1bZGF0YS15PVwiJHtib3dZIC0gaX1cIl1gKTtcbiAgICBpZiAoIXNoaXBDZWxsKSB7IGNvbnRpbnVlOyB9XG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoJ2JvdycpO1xuICAgIH1cbiAgICBpZiAoIXNoaXBDZWxsLmRhdGFzZXQuc2hpcCkge1xuICAgICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgICAgIHNoaXBDZWxsLmRhdGFzZXQuc2hpcCA9IHNoaXA7XG4gICAgICBzaGlwQ2VsbC5kYXRhc2V0Lmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgIHNoaXBDZWxsLmRhdGFzZXQuYm93WCA9IGJvd1g7XG4gICAgICBzaGlwQ2VsbC5kYXRhc2V0LmJvd1kgPSBib3dZO1xuICAgICAgc2hpcENlbGwuZGF0YXNldC5ob3Jpem9udGFsID0gZHJhZ2dlZFNoaXBDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJyk7XG4gICAgICBhZGRFdmVudExpc3RlbmVyc1RvU2hpcENlbGwoc2hpcENlbGwpO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdnZWRTaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYWNlbWVudCAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXB9XCJdIC5zcHJpdGUtY29udGFpbmVyYCk7XG4gIGRyYWdnZWRTaGlwQ2VsbCA9IGUuY3VycmVudFRhcmdldDtcbiAgZHJhZ2dlZFNoaXBDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wbGFjZW1lbnQgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwfVwiXWApO1xufTtcblxuY29uc3QgY2hlY2tGb3JBdExlYXN0T25lU2hpcE9uUGxhY2VtZW50Qm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGhhc1NoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzLnBsYWNlbWVudCAuc3ByaXRlLWNvbnRhaW5lcicpO1xuICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlbWVudENvbmZpcm1CdG4nKTtcbiAgaWYgKGhhc1NoaXApIHtcbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDb25maXJtUGxhY2VtZW50KTtcbiAgICBjb25maXJtQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlybUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ29uZmlybVBsYWNlbWVudCk7XG4gICAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICB9XG59O1xuXG5jb25zdCB1bnBsYWNlU2hpcEZyb21QbGFjZW1lbnRCb2FyZCA9IChlKSA9PiB7XG4gIGNvbnN0IHsgc2hpcCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gIGNvbnN0IHVucGxhY2VkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYWNlbWVudC5pbmZvIC5jb250YWluZXJbZGF0YS1zaGlwPVwiJHtzaGlwfVwiXWApO1xuICBjb25zdCB1bnBsYWNlZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxhY2VtZW50LmluZm8gLmNvbnRhaW5lcltkYXRhLXNoaXA9XCIke3NoaXB9XCJdIC5jZWxsOmxhc3QtY2hpbGRgKTtcbiAgY29uc3Qgc3ByaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYWNlbWVudCAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXB9XCJdIC5zcHJpdGUtY29udGFpbmVyYCk7XG4gIGNvbnN0IHNoaXBDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wbGFjZW1lbnQgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwfVwiXWApO1xuICBzaGlwQ2VsbHMuZm9yRWFjaCgoc2hpcENlbGwpID0+IHtcbiAgICBlbXB0eUNlbGxEYXRhT25QbGFjZW1lbnRCb2FyZChzaGlwQ2VsbCk7XG4gIH0pO1xuICBzcHJpdGUuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICB1bnBsYWNlZENlbGwuYXBwZW5kQ2hpbGQoc3ByaXRlKTtcbiAgdW5wbGFjZWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndW5wbGFjZWQnKTtcbiAgdW5wbGFjZWRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVNoaXBPblBsYWNlbWVudEJvYXJkLCB7IG9uY2U6IHRydWUgfSk7XG4gIGNoZWNrRm9yQXRMZWFzdE9uZVNoaXBPblBsYWNlbWVudEJvYXJkKCk7XG59O1xuXG5jb25zdCByZXNldFBsYWNlbWVudEJvYXJkID0gKCkgPT4ge1xuICBwbGF5TWVudUNsaWNrU0ZYKCk7XG4gIHNoaXBzRGF0YS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29uc3QgdW5wbGFjZWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxhY2VtZW50LmluZm8gLmNvbnRhaW5lcltkYXRhLXNoaXA9XCIke3NoaXAudHlwZX1cIl1gKTtcbiAgICBjb25zdCB1bnBsYWNlZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxhY2VtZW50LmluZm8gLmNvbnRhaW5lcltkYXRhLXNoaXA9XCIke3NoaXAudHlwZX1cIl0gLmNlbGw6bGFzdC1jaGlsZGApO1xuICAgIGNvbnN0IHNwcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwLnR5cGV9XCJdIC5zcHJpdGUtY29udGFpbmVyYCk7XG4gICAgaWYgKHNwcml0ZSkge1xuICAgICAgY29uc3Qgc2hpcENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnBsYWNlbWVudCAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXAudHlwZX1cIl1gKTtcbiAgICAgIHNoaXBDZWxscy5mb3JFYWNoKChzaGlwQ2VsbCkgPT4ge1xuICAgICAgICBlbXB0eUNlbGxEYXRhT25QbGFjZW1lbnRCb2FyZChzaGlwQ2VsbCk7XG4gICAgICB9KTtcbiAgICAgIHNwcml0ZS5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG4gICAgICB1bnBsYWNlZENlbGwuYXBwZW5kQ2hpbGQoc3ByaXRlKTtcbiAgICAgIHVucGxhY2VkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3VucGxhY2VkJyk7XG4gICAgICB1bnBsYWNlZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlU2hpcE9uUGxhY2VtZW50Qm9hcmQsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pO1xuICBjaGVja0ZvckF0TGVhc3RPbmVTaGlwT25QbGFjZW1lbnRCb2FyZCgpO1xufTtcblxuY29uc3QgcGxhY2VTaGlwT25QbGFjZW1lbnRCb2FyZCA9IChlKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGUuY3VycmVudFRhcmdldDtcbiAgY29uc3QgeyBzaGlwLCBsZW5ndGggfSA9IGNvbnRhaW5lci5kYXRhc2V0O1xuICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndW5wbGFjZWQnKTtcblxuICBjb25zdCBzcHJpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxhY2VtZW50IFtkYXRhLXNoaXA9XCIke3NoaXB9XCJdIC5jZWxsIC5zcHJpdGUtY29udGFpbmVyYCk7XG4gIGxldCBib3dYID0gOTtcbiAgbGV0IGJvd1kgPSA5O1xuXG4gIC8vIENoZWNrIGZvciB2YWxpZCBpbml0aWFsIHBsYWNlbWVudFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2hpcENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2Jvd1ggLSBpfVwiXVtkYXRhLXk9XCIke2Jvd1l9XCJdYCk7XG4gICAgaWYgKCFzaGlwQ2VsbCkge1xuICAgICAgYm93WCA9IDk7XG4gICAgICBib3dZIC09IDE7XG4gICAgICBpID0gLTE7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKHNoaXBDZWxsLmRhdGFzZXQuc2hpcCkge1xuICAgICAgYm93WCAtPSAxO1xuICAgICAgaSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFjdHVhbGx5IHBsYWNlIHNwcml0ZSBvbiBzdWNjZXNzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaGlwQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7Ym93WCAtIGl9XCJdW2RhdGEteT1cIiR7Ym93WX1cIl1gKTtcbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgc2hpcENlbGwuYXBwZW5kQ2hpbGQoc3ByaXRlKTtcbiAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoJ2JvdycpO1xuICAgIH1cbiAgICBzaGlwQ2VsbC5kYXRhc2V0LnNoaXAgPSBzaGlwO1xuICAgIHNoaXBDZWxsLmRhdGFzZXQubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHNoaXBDZWxsLmRhdGFzZXQuYm93WCA9IGJvd1g7XG4gICAgc2hpcENlbGwuZGF0YXNldC5ib3dZID0gYm93WTtcbiAgICBzaGlwQ2VsbC5kYXRhc2V0Lmhvcml6b250YWwgPSBzcHJpdGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJyk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnNUb1NoaXBDZWxsKHNoaXBDZWxsKTtcbiAgfVxuICBjaGVja0ZvckF0TGVhc3RPbmVTaGlwT25QbGFjZW1lbnRCb2FyZCgpO1xufTtcblxuY29uc3QgcmVzaXplUGxhY2VtZW50Q2VsbHMgPSAoKSA9PiB7XG4gIGNvbnN0IGJvd0NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2VtZW50IC5jZWxsJyk7XG4gIGNvbnN0IHBsYWNlbWVudENlbGxXaWR0aCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJvd0NlbGwpLndpZHRoO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcGxhY2VtZW50LWNlbGwtd2lkdGgnLCBwbGFjZW1lbnRDZWxsV2lkdGgpO1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZVNoaXBQbGFjZW1lbnRTY3JlZW4gPSAoKSA9PiB7XG4gIHBsYXlHYW1lQkdNKCk7XG4gIHByZXZpb3VzSGl0Q2VsbCA9IFstMSwgLTFdO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHJlc2V0U2hpcFBsYWNlbWVudERyYWdEYXRhKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZVBsYWNlbWVudENlbGxzKTtcbiAgY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XG4gIGNvbnN0IHBsYWNlbWVudEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGxhY2VtZW50SW5mby5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQnLCAnaW5mbycpO1xuXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMS50ZXh0Q29udGVudCA9IGN1cnJlbnRQbGF5ZXIubmFtZTtcblxuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDIudGV4dENvbnRlbnQgPSAnQXJyYW5nZSB5b3VyIGZsZWV0IG9uIHRoZSBiYXR0bGVmaWVsZCEnO1xuXG4gIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMy50ZXh0Q29udGVudCA9ICdTaGlwcyBhdmFpbGFibGU6JztcblxuICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaGlwcycpO1xuXG4gIHNoaXBzRGF0YS5mb3JFYWNoKChzaGlwRGF0YSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCAndW5wbGFjZWQnKTtcbiAgICBjb250YWluZXIuZGF0YXNldC5zaGlwID0gc2hpcERhdGEudHlwZTtcbiAgICBjb250YWluZXIuZGF0YXNldC5sZW5ndGggPSBzaGlwRGF0YS5sZW5ndGg7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VTaGlwT25QbGFjZW1lbnRCb2FyZCwgeyBvbmNlOiB0cnVlIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcERhdGEubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuXG4gICAgICBpZiAoaSA9PT0gc2hpcERhdGEubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHNwcml0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcHJpdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ByaXRlLWNvbnRhaW5lcicpO1xuICAgICAgICBzcHJpdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuXG4gICAgICAgIGNvbnN0IHNoaXBTcHJpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgc2hpcFNwcml0ZS5zcmMgPSBzaGlwRGF0YS5zcmM7XG4gICAgICAgIHNoaXBTcHJpdGUuY2xhc3NMaXN0LmFkZCgnc3ByaXRlJyk7XG4gICAgICAgIHNoaXBTcHJpdGUuZHJhZ2dhYmxlID0gZmFsc2U7XG5cbiAgICAgICAgc3ByaXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBTcHJpdGUpO1xuICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHNwcml0ZUNvbnRhaW5lcik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYm93Jyk7XG4gICAgICB9XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICAgIHNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIHBsYWNlbWVudEluZm8uYXBwZW5kQ2hpbGQocDEpO1xuICBwbGFjZW1lbnRJbmZvLmFwcGVuZENoaWxkKHAyKTtcbiAgcGxhY2VtZW50SW5mby5hcHBlbmRDaGlsZChwMyk7XG4gIHBsYWNlbWVudEluZm8uYXBwZW5kQ2hpbGQoc2hpcHNDb250YWluZXIpO1xuICBnYW1lLmFwcGVuZENoaWxkKHBsYWNlbWVudEluZm8pO1xuXG4gIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMnKTtcbiAgYm9hcmRzLmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudCcpO1xuXG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG5cbiAgZm9yIChsZXQgaSA9IDk7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgIGNlbGwuZGF0YXNldC54ID0gajtcbiAgICAgIGNlbGwuZGF0YXNldC55ID0gaTtcbiAgICAgIGNlbGwuZGF0YXNldC5wbGF5ZXJOYW1lID0gY3VycmVudFBsYXllci5uYW1lO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgbW92ZURyYWdnZWRTaGlwT25QbGFjZW1lbnRCb2FyZCk7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJlbnRlcicsIG1vdmVEcmFnZ2VkU2hpcE9uUGxhY2VtZW50Qm9hcmQpO1xuICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICB9XG4gIGJvYXJkcy5hcHBlbmRDaGlsZChib2FyZCk7XG5cbiAgY29uc3QgcGxhY2VtZW50QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwbGFjZW1lbnRCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudCcsICdidXR0b25zJyk7XG5cbiAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIHJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gJ1Jlc2V0JztcbiAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldFBsYWNlbWVudEJvYXJkKTtcblxuICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbmZpcm1CdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2Rpc2FibGVkJyk7XG4gIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XG4gIGNvbmZpcm1CdXR0b24uaWQgPSAncGxhY2VtZW50Q29uZmlybUJ0bic7XG5cbiAgcGxhY2VtZW50QnV0dG9ucy5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG4gIHBsYWNlbWVudEJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29uZmlybUJ1dHRvbik7XG4gIGdhbWUuYXBwZW5kQ2hpbGQocGxhY2VtZW50QnV0dG9ucyk7XG5cbiAgcmVzaXplU3ByaXRlcygpO1xuICByZXNpemVQbGFjZW1lbnRDZWxscygpO1xufTtcblxuY29uc3QgY2xlYXJHYW1lQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbiAgd2hpbGUgKGdhbWUuZmlyc3RDaGlsZCkge1xuICAgIGdhbWUucmVtb3ZlQ2hpbGQoZ2FtZS5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgdG9nZ2xlVm9sdW1lID0gKGUpID0+IHtcbiAgaWYgKGF1ZGlvVm9sdW1lID09PSAxKSB7XG4gICAgY2hhbmdlQXVkaW9Wb2x1bWUoMC42Nik7XG4gICAgZS5jdXJyZW50VGFyZ2V0LmZpcnN0Q2hpbGQub3V0ZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+dm9sdW1lLW1lZGl1bTwvdGl0bGU+PHBhdGggZD1cIk01LDlWMTVIOUwxNCwyMFY0TDksOU0xOC41LDEyQzE4LjUsMTAuMjMgMTcuNSw4LjcxIDE2LDcuOTdWMTZDMTcuNSwxNS4yOSAxOC41LDEzLjc2IDE4LjUsMTJaXCIgLz48L3N2Zz4nO1xuICB9IGVsc2UgaWYgKGF1ZGlvVm9sdW1lID09PSAwLjY2KSB7XG4gICAgY2hhbmdlQXVkaW9Wb2x1bWUoMC4zMyk7XG4gICAgZS5jdXJyZW50VGFyZ2V0LmZpcnN0Q2hpbGQub3V0ZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+dm9sdW1lLWxvdzwvdGl0bGU+PHBhdGggZD1cIk03LDlWMTVIMTFMMTYsMjBWNEwxMSw5SDdaXCIgLz48L3N2Zz4nO1xuICB9IGVsc2UgaWYgKGF1ZGlvVm9sdW1lID09PSAwLjMzKSB7XG4gICAgY2hhbmdlQXVkaW9Wb2x1bWUoMCk7XG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ211dGUnKTtcbiAgICBlLmN1cnJlbnRUYXJnZXQuZmlyc3RDaGlsZC5vdXRlckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT52b2x1bWUtb2ZmPC90aXRsZT48cGF0aCBkPVwiTTEyLDRMOS45MSw2LjA5TDEyLDguMThNNC4yNywzTDMsNC4yN0w3LjczLDlIM1YxNUg3TDEyLDIwVjEzLjI3TDE2LjI1LDE3LjUzQzE1LjU4LDE4LjA0IDE0LjgzLDE4LjQ2IDE0LDE4LjdWMjAuNzdDMTUuMzgsMjAuNDUgMTYuNjMsMTkuODIgMTcuNjgsMTguOTZMMTkuNzMsMjFMMjEsMTkuNzNMMTIsMTAuNzNNMTksMTJDMTksMTIuOTQgMTguOCwxMy44MiAxOC40NiwxNC42NEwxOS45NywxNi4xNUMyMC42MiwxNC45MSAyMSwxMy41IDIxLDEyQzIxLDcuNzIgMTgsNC4xNCAxNCwzLjIzVjUuMjlDMTYuODksNi4xNSAxOSw4LjgzIDE5LDEyTTE2LjUsMTJDMTYuNSwxMC4yMyAxNS41LDguNzEgMTQsNy45N1YxMC4xOEwxNi40NSwxMi42M0MxNi41LDEyLjQzIDE2LjUsMTIuMjEgMTYuNSwxMlpcIiAvPjwvc3ZnPic7XG4gIH0gZWxzZSBpZiAoYXVkaW9Wb2x1bWUgPT09IDApIHtcbiAgICBjaGFuZ2VBdWRpb1ZvbHVtZSgxKTtcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnbXV0ZScpO1xuICAgIGUuY3VycmVudFRhcmdldC5maXJzdENoaWxkLm91dGVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnZvbHVtZS1oaWdoPC90aXRsZT48cGF0aCBkPVwiTTE0LDMuMjNWNS4yOUMxNi44OSw2LjE1IDE5LDguODMgMTksMTJDMTksMTUuMTcgMTYuODksMTcuODQgMTQsMTguN1YyMC43N0MxOCwxOS44NiAyMSwxNi4yOCAyMSwxMkMyMSw3LjcyIDE4LDQuMTQgMTQsMy4yM00xNi41LDEyQzE2LjUsMTAuMjMgMTUuNSw4LjcxIDE0LDcuOTdWMTZDMTUuNSwxNS4yOSAxNi41LDEzLjc2IDE2LjUsMTJNMyw5VjE1SDdMMTIsMjBWNEw3LDlIM1pcIiAvPjwvc3ZnPic7XG4gIH1cbiAgcGxheU1lbnVDbGlja1NGWCgpO1xufTtcblxuY29uc3Qgc2hvd1ZvbHVtZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51Jyk7XG5cbiAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidG4tY29udGFpbmVyJywgJ21heC13aWR0aCcpO1xuXG4gIGNvbnN0IHZvbHVtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB2b2x1bWVCdG4uY2xhc3NMaXN0LmFkZCgndm9sdW1lLWJ0bicpO1xuICB2b2x1bWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVWb2x1bWUpO1xuXG4gIGNvbnN0IHZvbHVtZUJ0blNWRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuXG4gIHZvbHVtZUJ0bi5hcHBlbmRDaGlsZCh2b2x1bWVCdG5TVkcpO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQodm9sdW1lQnRuKTtcbiAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcblxuICBpZiAoYXVkaW9Wb2x1bWUgPT09IDEpIHtcbiAgICB2b2x1bWVCdG5TVkcub3V0ZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+dm9sdW1lLWhpZ2g8L3RpdGxlPjxwYXRoIGQ9XCJNMTQsMy4yM1Y1LjI5QzE2Ljg5LDYuMTUgMTksOC44MyAxOSwxMkMxOSwxNS4xNyAxNi44OSwxNy44NCAxNCwxOC43VjIwLjc3QzE4LDE5Ljg2IDIxLDE2LjI4IDIxLDEyQzIxLDcuNzIgMTgsNC4xNCAxNCwzLjIzTTE2LjUsMTJDMTYuNSwxMC4yMyAxNS41LDguNzEgMTQsNy45N1YxNkMxNS41LDE1LjI5IDE2LjUsMTMuNzYgMTYuNSwxMk0zLDlWMTVIN0wxMiwyMFY0TDcsOUgzWlwiIC8+PC9zdmc+JztcbiAgfSBlbHNlIGlmIChhdWRpb1ZvbHVtZSA9PT0gMC42Nikge1xuICAgIHZvbHVtZUJ0blNWRy5vdXRlckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT52b2x1bWUtbWVkaXVtPC90aXRsZT48cGF0aCBkPVwiTTUsOVYxNUg5TDE0LDIwVjRMOSw5TTE4LjUsMTJDMTguNSwxMC4yMyAxNy41LDguNzEgMTYsNy45N1YxNkMxNy41LDE1LjI5IDE4LjUsMTMuNzYgMTguNSwxMlpcIiAvPjwvc3ZnPic7XG4gIH0gZWxzZSBpZiAoYXVkaW9Wb2x1bWUgPT09IDAuMzMpIHtcbiAgICB2b2x1bWVCdG5TVkcub3V0ZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+dm9sdW1lLWxvdzwvdGl0bGU+PHBhdGggZD1cIk03LDlWMTVIMTFMMTYsMjBWNEwxMSw5SDdaXCIgLz48L3N2Zz4nO1xuICB9IGVsc2UgaWYgKGF1ZGlvVm9sdW1lID09PSAwKSB7XG4gICAgdm9sdW1lQnRuLmNsYXNzTGlzdC5hZGQoJ211dGUnKTtcbiAgICB2b2x1bWVCdG5TVkcub3V0ZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+dm9sdW1lLW9mZjwvdGl0bGU+PHBhdGggZD1cIk0xMiw0TDkuOTEsNi4wOUwxMiw4LjE4TTQuMjcsM0wzLDQuMjdMNy43Myw5SDNWMTVIN0wxMiwyMFYxMy4yN0wxNi4yNSwxNy41M0MxNS41OCwxOC4wNCAxNC44MywxOC40NiAxNCwxOC43VjIwLjc3QzE1LjM4LDIwLjQ1IDE2LjYzLDE5LjgyIDE3LjY4LDE4Ljk2TDE5LjczLDIxTDIxLDE5LjczTDEyLDEwLjczTTE5LDEyQzE5LDEyLjk0IDE4LjgsMTMuODIgMTguNDYsMTQuNjRMMTkuOTcsMTYuMTVDMjAuNjIsMTQuOTEgMjEsMTMuNSAyMSwxMkMyMSw3LjcyIDE4LDQuMTQgMTQsMy4yM1Y1LjI5QzE2Ljg5LDYuMTUgMTksOC44MyAxOSwxMk0xNi41LDEyQzE2LjUsMTAuMjMgMTUuNSw4LjcxIDE0LDcuOTdWMTAuMThMMTYuNDUsMTIuNjNDMTYuNSwxMi40MyAxNi41LDEyLjIxIDE2LjUsMTJaXCIgLz48L3N2Zz4nO1xuICB9XG59O1xuXG5jb25zdCBpbml0aWFsaXplR2FtZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XG5cbiAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidG4tY29udGFpbmVyJywgJ21heC13aWR0aCcpO1xuXG4gIGNvbnN0IHNldHRpbmdzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNldHRpbmdzQnRuLmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzLWJ0bicpO1xuICBzZXR0aW5nc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrUGF1c2VNZW51KTtcblxuICBjb25zdCBzZXR0aW5nc0J0blNWRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuXG4gIGNvbnN0IHZvbHVtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB2b2x1bWVCdG4uY2xhc3NMaXN0LmFkZCgndm9sdW1lLWJ0bicpO1xuICB2b2x1bWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVWb2x1bWUpO1xuXG4gIGNvbnN0IHZvbHVtZUJ0blNWRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuXG4gIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZHMuY2xhc3NMaXN0LmFkZCgnYm9hcmRzJywgJ21heC13aWR0aCcpO1xuXG4gIHZvbHVtZUJ0bi5hcHBlbmRDaGlsZCh2b2x1bWVCdG5TVkcpO1xuICBzZXR0aW5nc0J0bi5hcHBlbmRDaGlsZChzZXR0aW5nc0J0blNWRyk7XG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZCh2b2x1bWVCdG4pO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoc2V0dGluZ3NCdG4pO1xuICBnYW1lLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG4gIGdhbWUuYXBwZW5kQ2hpbGQoYm9hcmRzKTtcblxuICBzZXR0aW5nc0J0blNWRy5vdXRlckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jb2c8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsMTUuNUEzLjUsMy41IDAgMCwxIDguNSwxMkEzLjUsMy41IDAgMCwxIDEyLDguNUEzLjUsMy41IDAgMCwxIDE1LjUsMTJBMy41LDMuNSAwIDAsMSAxMiwxNS41TTE5LjQzLDEyLjk3QzE5LjQ3LDEyLjY1IDE5LjUsMTIuMzMgMTkuNSwxMkMxOS41LDExLjY3IDE5LjQ3LDExLjM0IDE5LjQzLDExTDIxLjU0LDkuMzdDMjEuNzMsOS4yMiAyMS43OCw4Ljk1IDIxLjY2LDguNzNMMTkuNjYsNS4yN0MxOS41NCw1LjA1IDE5LjI3LDQuOTYgMTkuMDUsNS4wNUwxNi41Niw2LjA1QzE2LjA0LDUuNjYgMTUuNSw1LjMyIDE0Ljg3LDUuMDdMMTQuNSwyLjQyQzE0LjQ2LDIuMTggMTQuMjUsMiAxNCwySDEwQzkuNzUsMiA5LjU0LDIuMTggOS41LDIuNDJMOS4xMyw1LjA3QzguNSw1LjMyIDcuOTYsNS42NiA3LjQ0LDYuMDVMNC45NSw1LjA1QzQuNzMsNC45NiA0LjQ2LDUuMDUgNC4zNCw1LjI3TDIuMzQsOC43M0MyLjIxLDguOTUgMi4yNyw5LjIyIDIuNDYsOS4zN0w0LjU3LDExQzQuNTMsMTEuMzQgNC41LDExLjY3IDQuNSwxMkM0LjUsMTIuMzMgNC41MywxMi42NSA0LjU3LDEyLjk3TDIuNDYsMTQuNjNDMi4yNywxNC43OCAyLjIxLDE1LjA1IDIuMzQsMTUuMjdMNC4zNCwxOC43M0M0LjQ2LDE4Ljk1IDQuNzMsMTkuMDMgNC45NSwxOC45NUw3LjQ0LDE3Ljk0QzcuOTYsMTguMzQgOC41LDE4LjY4IDkuMTMsMTguOTNMOS41LDIxLjU4QzkuNTQsMjEuODIgOS43NSwyMiAxMCwyMkgxNEMxNC4yNSwyMiAxNC40NiwyMS44MiAxNC41LDIxLjU4TDE0Ljg3LDE4LjkzQzE1LjUsMTguNjcgMTYuMDQsMTguMzQgMTYuNTYsMTcuOTRMMTkuMDUsMTguOTVDMTkuMjcsMTkuMDMgMTkuNTQsMTguOTUgMTkuNjYsMTguNzNMMjEuNjYsMTUuMjdDMjEuNzgsMTUuMDUgMjEuNzMsMTQuNzggMjEuNTQsMTQuNjNMMTkuNDMsMTIuOTdaXCIgLz48L3N2Zz4nO1xuICBpZiAoYXVkaW9Wb2x1bWUgPT09IDEpIHtcbiAgICB2b2x1bWVCdG5TVkcub3V0ZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+dm9sdW1lLWhpZ2g8L3RpdGxlPjxwYXRoIGQ9XCJNMTQsMy4yM1Y1LjI5QzE2Ljg5LDYuMTUgMTksOC44MyAxOSwxMkMxOSwxNS4xNyAxNi44OSwxNy44NCAxNCwxOC43VjIwLjc3QzE4LDE5Ljg2IDIxLDE2LjI4IDIxLDEyQzIxLDcuNzIgMTgsNC4xNCAxNCwzLjIzTTE2LjUsMTJDMTYuNSwxMC4yMyAxNS41LDguNzEgMTQsNy45N1YxNkMxNS41LDE1LjI5IDE2LjUsMTMuNzYgMTYuNSwxMk0zLDlWMTVIN0wxMiwyMFY0TDcsOUgzWlwiIC8+PC9zdmc+JztcbiAgfSBlbHNlIGlmIChhdWRpb1ZvbHVtZSA9PT0gMC42Nikge1xuICAgIHZvbHVtZUJ0blNWRy5vdXRlckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT52b2x1bWUtbWVkaXVtPC90aXRsZT48cGF0aCBkPVwiTTUsOVYxNUg5TDE0LDIwVjRMOSw5TTE4LjUsMTJDMTguNSwxMC4yMyAxNy41LDguNzEgMTYsNy45N1YxNkMxNy41LDE1LjI5IDE4LjUsMTMuNzYgMTguNSwxMlpcIiAvPjwvc3ZnPic7XG4gIH0gZWxzZSBpZiAoYXVkaW9Wb2x1bWUgPT09IDAuMzMpIHtcbiAgICB2b2x1bWVCdG5TVkcub3V0ZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+dm9sdW1lLWxvdzwvdGl0bGU+PHBhdGggZD1cIk03LDlWMTVIMTFMMTYsMjBWNEwxMSw5SDdaXCIgLz48L3N2Zz4nO1xuICB9IGVsc2UgaWYgKGF1ZGlvVm9sdW1lID09PSAwKSB7XG4gICAgdm9sdW1lQnRuLmNsYXNzTGlzdC5hZGQoJ211dGUnKTtcbiAgICB2b2x1bWVCdG5TVkcub3V0ZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+dm9sdW1lLW9mZjwvdGl0bGU+PHBhdGggZD1cIk0xMiw0TDkuOTEsNi4wOUwxMiw4LjE4TTQuMjcsM0wzLDQuMjdMNy43Myw5SDNWMTVIN0wxMiwyMFYxMy4yN0wxNi4yNSwxNy41M0MxNS41OCwxOC4wNCAxNC44MywxOC40NiAxNCwxOC43VjIwLjc3QzE1LjM4LDIwLjQ1IDE2LjYzLDE5LjgyIDE3LjY4LDE4Ljk2TDE5LjczLDIxTDIxLDE5LjczTDEyLDEwLjczTTE5LDEyQzE5LDEyLjk0IDE4LjgsMTMuODIgMTguNDYsMTQuNjRMMTkuOTcsMTYuMTVDMjAuNjIsMTQuOTEgMjEsMTMuNSAyMSwxMkMyMSw3LjcyIDE4LDQuMTQgMTQsMy4yM1Y1LjI5QzE2Ljg5LDYuMTUgMTksOC44MyAxOSwxMk0xNi41LDEyQzE2LjUsMTAuMjMgMTUuNSw4LjcxIDE0LDcuOTdWMTAuMThMMTYuNDUsMTIuNjNDMTYuNSwxMi40MyAxNi41LDEyLjIxIDE2LjUsMTJaXCIgLz48L3N2Zz4nO1xuICB9XG59O1xuXG5jb25zdCBwcmludFByZXZpb3VzUGxheWVyQXR0YWNrID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBbeCwgeV0gPSBwcmV2aW91c0hpdENlbGw7XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXJIaXRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJvYXJkLmN1cnJlbnQgLmNlbGxbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XG4gIGlmICghY3VycmVudFBsYXllckhpdENlbGwpIHJldHVybjtcbiAgaWYgKGN1cnJlbnRQbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5zaGlwKSB7XG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBjdXJyZW50UGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcDtcbiAgICBpZiAoY3VycmVudFNoaXAuaGFzU3Vuaykge1xuICAgICAgcHJpbnRTaW5raW5nU3ByaXRlKGN1cnJlbnRTaGlwKTtcbiAgICB9XG4gIH1cbiAgYXdhaXQgaGl0RXhwbG9zaW9uRWZmZWN0KGN1cnJlbnRQbGF5ZXJIaXRDZWxsKTtcbiAgaWYgKGN1cnJlbnRQbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5zaGlwKSB7XG4gICAgY3VycmVudFBsYXllckhpdENlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXJIaXRDZWxsLmRhdGFzZXQuc2hpcCkgYWRkRmlyZUVmZmVjdChjdXJyZW50UGxheWVySGl0Q2VsbCk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFBsYXllckhpdENlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgIGFkZE1pc3NNYXJrKGN1cnJlbnRQbGF5ZXJIaXRDZWxsKTtcbiAgfVxufTtcblxuY29uc3QgaW5pdGlhbGl6ZUJvYXJkID0gYXN5bmMgKCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplU3ByaXRlcyk7XG4gIFtjdXJyZW50UGxheWVyLCB0YXJnZXRQbGF5ZXJdLmZvckVhY2goYXN5bmMgKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMnKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gICAgaWYgKHBsYXllciA9PT0gY3VycmVudFBsYXllcikgYm9hcmQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgIGlmIChwbGF5ZXIgPT09IHRhcmdldFBsYXllcikgYm9hcmQuY2xhc3NMaXN0LmFkZCgndGFyZ2V0Jyk7XG5cbiAgICBmb3IgKGxldCB5ID0gOTsgeSA+PSAwOyB5IC09IDEpIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHggKz0gMSkge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICBjZWxsLmRhdGFzZXQueCA9IHg7XG4gICAgICAgIGNlbGwuZGF0YXNldC55ID0geTtcbiAgICAgICAgY2VsbC5kYXRhc2V0LnBsYXllck5hbWUgPSBwbGF5ZXIubmFtZTtcbiAgICAgICAgY2VsbC5kYXRhc2V0LnNoaXAgPSBwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5zaGlwXG4gICAgICAgICAgPyBwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5zaGlwLnR5cGVcbiAgICAgICAgICA6ICcnO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxheWVyID09PSB0YXJnZXRQbGF5ZXJcbiAgICAgICAgICAmJiBjdXJyZW50UGxheWVyIGluc3RhbmNlb2YgUGxheWVyXG4gICAgICAgICAgJiYgIShjdXJyZW50UGxheWVyIGluc3RhbmNlb2YgQUkpXG4gICAgICAgICkgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpdENlbGxQbGF5ZXIpO1xuXG4gICAgICAgIGNvbnN0IFtwcmV2WCwgcHJldlldID0gcHJldmlvdXNIaXRDZWxsO1xuICAgICAgICBpZiAocGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcCAmJiBwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5zaGlwLmhhc1N1bmspIGNlbGwuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuXG4gICAgICAgIGlmICghKChwcmV2WCA9PT0geCAmJiBwcmV2WSA9PT0geSkgJiYgKHBsYXllciA9PT0gY3VycmVudFBsYXllcikpKSB7XG4gICAgICAgICAgaWYgKHBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLmlzSGl0ICYmIHBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXApIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICBpZiAoIXBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXAuaGFzU3VuaykgYWRkRmlyZUVmZmVjdChjZWxsKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLmlzSGl0ICYmICFwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5zaGlwKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgIGFkZE1pc3NNYXJrKGNlbGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgICBib2FyZHMuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICB9KTtcbiAgcHJpbnRTcHJpdGVzKCk7XG4gIGlmIChwbGF5ZXJzLmV2ZXJ5KChwbGF5ZXIpID0+ICEocGxheWVyIGluc3RhbmNlb2YgQUkpKSkge1xuICAgIHVwZGF0ZVBsYXllcnNIUE9uVHVyblN0YXJ0KCk7XG4gICAgY29uc3QgW3ByZXZYLCBwcmV2WV0gPSBwcmV2aW91c0hpdENlbGw7XG4gICAgaWYgKHByZXZYICE9PSAtMSAmJiBwcmV2WSAhPT0gLTEpIHtcbiAgICAgIGlmIChjdXJyZW50UGxheWVyLmJvYXJkLmdldEJvYXJkKClbcHJldlhdW3ByZXZZXS5zaGlwKSBhbmltYXRlQ3VycmVudFBsYXllckhQSGl0T25UdXJuU3RhcnQoKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAocHJldlggIT09IC0xICYmIHByZXZZICE9PSAtMSkgcGxheUZpcmVTRlgoKTtcbiAgICAgIHByaW50UHJldmlvdXNQbGF5ZXJBdHRhY2soKTtcbiAgICB9LCA1MDApO1xuICB9XG59O1xuXG5jb25zdCBoaWRlUGxheWVySFAgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllcnNIUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItaW5mbycpO1xuICBwbGF5ZXJzSFAuZm9yRWFjaCgocGxheWVySFApID0+IHBsYXllckhQLmNsYXNzTGlzdC5hZGQoJ3Zpc2liaWxpdHktaGlkZGVuJykpO1xufTtcblxuY29uc3QgdW5oaWRlUGxheWVySFAgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuICBjb25zdCBwbGF5ZXJzSFAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLWluZm8nKTtcbiAgZ2FtZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgcGxheWVyc0hQLmZvckVhY2goKHBsYXllckhQKSA9PiBwbGF5ZXJIUC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmlsaXR5LWhpZGRlbicpKTtcbiAgfSwgeyBvbmNlOiB0cnVlIH0pO1xufTtcblxuY29uc3QgaW5pdGFsaXplUGxheWVySFBWYWx1ZXMgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jdXJyZW50LWhlYWx0aCcsICcxMDAlJyk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jdXJyZW50LWhpdCcsICcwJScpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY3VycmVudC1lbXB0eScsICcwJScpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZW5lbXktaGVhbHRoJywgJzEwMCUnKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWVuZW15LWhpdCcsICcwJScpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZW5lbXktZW1wdHknLCAnMCUnKTtcbn07XG5cbmNvbnN0IGFuaW1hdGVDdXJyZW50UGxheWVySFBIaXRPblR1cm5TdGFydCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdG90YWxIUCA9IGN1cnJlbnRQbGF5ZXJcbiAgICAuYm9hcmRcbiAgICAuZmxlZXRcbiAgICAucmVkdWNlKCh0b3RhbCwgc2hpcCkgPT4gdG90YWwgKyBzaGlwLmxlbmd0aCwgMCk7XG4gIGNvbnN0IGN1cnJlbnRIUCA9IGN1cnJlbnRQbGF5ZXJcbiAgICAuYm9hcmRcbiAgICAuZmxlZXRcbiAgICAucmVkdWNlKCh0b3RhbCwgc2hpcCkgPT4gdG90YWwgLSBzaGlwLmhpdHMsIHRvdGFsSFApO1xuICBjb25zdCBoZWFsdGggPSBgJHtNYXRoLnJvdW5kKChjdXJyZW50SFAgLyB0b3RhbEhQKSAqIDEwMCl9JWA7XG4gIGNvbnN0IGhpdCA9IGAke01hdGgucm91bmQoKDEgLyB0b3RhbEhQKSAqIDEwMCl9JWA7XG4gIGNvbnN0IGVtcHR5ID0gYCR7TWF0aC5yb3VuZCgoMSAtIGN1cnJlbnRIUCAvIHRvdGFsSFApICogMTAwKX0lYDtcblxuICBjb25zdCBwbGF5ZXJIZWFsdGhUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQgLmhlYWx0aCA+IC50ZXh0ICcpO1xuXG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgaW5pdEhlYWx0aCA9IGAke01hdGgucm91bmQoKChjdXJyZW50SFAgKyAxKSAvIHRvdGFsSFApICogMTAwKX0lYDtcbiAgICBjb25zdCBpbml0RW1wdHkgPSBgJHtNYXRoLnJvdW5kKCgxIC0gKGN1cnJlbnRIUCArIDEpIC8gdG90YWxIUCkgKiAxMDApfSVgO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jdXJyZW50LWhlYWx0aCcsIGluaXRIZWFsdGgpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jdXJyZW50LWVtcHR5JywgaW5pdEVtcHR5KTtcbiAgICBwbGF5ZXJIZWFsdGhUZXh0LnRleHRDb250ZW50ID0gYCR7Y3VycmVudEhQICsgMX0vJHt0b3RhbEhQfWA7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xuXG4gIHBsYXllckhlYWx0aFRleHQudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50SFB9LyR7dG90YWxIUH1gO1xuXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jdXJyZW50LWhlYWx0aCcsIGhlYWx0aCk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jdXJyZW50LWhpdCcsIGhpdCk7XG5cbiAgY29uc3QgcGxheWVySGVhbHRoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQgLmhlYWx0aCA+IC5iYXIgJyk7XG4gIHBsYXllckhlYWx0aEJhci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jdXJyZW50LWhpdCcsICcwJScpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jdXJyZW50LWVtcHR5JywgZW1wdHkpO1xuICB9LCB7IG9uY2U6IHRydWUgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVQbGF5ZXJzSFBPblR1cm5TdGFydCA9IGFzeW5jICgpID0+IHtcbiAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCB0YWcgPSBjdXJyZW50UGxheWVyID09PSBwbGF5ZXJcbiAgICAgID8gJ2N1cnJlbnQnXG4gICAgICA6ICdlbmVteSc7XG4gICAgY29uc3QgdG90YWxIUCA9IHBsYXllclxuICAgICAgLmJvYXJkXG4gICAgICAuZmxlZXRcbiAgICAgIC5yZWR1Y2UoKHRvdGFsLCBzaGlwKSA9PiB0b3RhbCArIHNoaXAubGVuZ3RoLCAwKTtcbiAgICBjb25zdCBjdXJyZW50SFAgPSBwbGF5ZXJcbiAgICAgIC5ib2FyZFxuICAgICAgLmZsZWV0XG4gICAgICAucmVkdWNlKCh0b3RhbCwgc2hpcCkgPT4gdG90YWwgLSBzaGlwLmhpdHMsIHRvdGFsSFApO1xuICAgIGNvbnN0IGhlYWx0aCA9IGAke01hdGgucm91bmQoKGN1cnJlbnRIUCAvIHRvdGFsSFApICogMTAwKX0lYDtcbiAgICBjb25zdCBlbXB0eSA9IGAke01hdGgucm91bmQoKDEgLSBjdXJyZW50SFAgLyB0b3RhbEhQKSAqIDEwMCl9JWA7XG5cbiAgICBjb25zdCBwbGF5ZXJIZWFsdGhUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFnfSAuaGVhbHRoID4gLnRleHQgYCk7XG4gICAgcGxheWVySGVhbHRoVGV4dC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRIUH0vJHt0b3RhbEhQfWA7XG5cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHt0YWd9LWhlYWx0aGAsIGhlYWx0aCk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7dGFnfS1oaXRgLCAnMCUnKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHt0YWd9LWVtcHR5YCwgZW1wdHkpO1xuICB9KTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVQbGF5ZXJIUCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XG4gIHBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgY29uc3QgdGFnID0gY3VycmVudFBsYXllciA9PT0gcGxheWVyID8gJ2N1cnJlbnQnIDogJ2VuZW15JztcblxuICAgIGNvbnN0IHBsYXllckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXJJbmZvLmNsYXNzTGlzdC5hZGQodGFnLCAncGxheWVyLWluZm8nKTtcblxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAxLnRleHRDb250ZW50ID0gdGFnID09PSAnY3VycmVudCcgPyAnQWxsaWVkIGZsZWV0JyA6ICdFbmVteSBmbGVldCc7XG5cbiAgICBjb25zdCBoZWFsdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFsdGguY2xhc3NMaXN0LmFkZCgnaGVhbHRoJyk7XG5cbiAgICBjb25zdCB0b3RhbEhQID0gcGxheWVyXG4gICAgICAuYm9hcmRcbiAgICAgIC5mbGVldFxuICAgICAgLnJlZHVjZSgodG90YWwsIHNoaXApID0+IHRvdGFsICsgc2hpcC5sZW5ndGgsIDApO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGAke3RvdGFsSFB9LyR7dG90YWxIUH1gO1xuXG4gICAgY29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFyLmNsYXNzTGlzdC5hZGQoJ2JhcicpO1xuXG4gICAgY29uc3QgaGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGl0LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuXG4gICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbXB0eS5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIudGV4dENvbnRlbnQgPSBwbGF5ZXIubmFtZTtcblxuICAgIGhlYWx0aC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBoZWFsdGguYXBwZW5kQ2hpbGQoYmFyKTtcbiAgICBoZWFsdGguYXBwZW5kQ2hpbGQoaGl0KTtcbiAgICBoZWFsdGguYXBwZW5kQ2hpbGQoZW1wdHkpO1xuICAgIHBsYXllckluZm8uYXBwZW5kQ2hpbGQocDEpO1xuICAgIHBsYXllckluZm8uYXBwZW5kQ2hpbGQoaGVhbHRoKTtcbiAgICBwbGF5ZXJJbmZvLmFwcGVuZENoaWxkKHAyKTtcbiAgICBnYW1lLmFwcGVuZENoaWxkKHBsYXllckluZm8pO1xuICB9KTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVHYW1lID0gKCkgPT4ge1xuICBpbml0aWFsaXplR2FtZUNvbnRhaW5lcigpO1xuICBpbml0aWFsaXplUGxheWVySFAoKTtcbiAgaW5pdGlhbGl6ZUJvYXJkKCk7XG59O1xuXG5jb25zdCBjbGVhck1haW5NZW51ID0gKCkgPT4ge1xuICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUnKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBtYWluTWVudS5jbGFzc0xpc3QuYWRkKCdjbGljay1zaW5rJyk7XG4gICAgbWFpbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgbWFpbk1lbnUucmVtb3ZlKCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHN0YXJ0R2FtZVBsYXllciA9IGFzeW5jIChlKSA9PiB7XG4gIHBsYXlNZW51Q2xpY2tTRlgoKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwbGF5ZXIxTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxTmFtZUlucHV0JykudmFsdWVcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxTmFtZUlucHV0JykudmFsdWVcbiAgICA6ICdQbGF5ZXIgMSc7XG4gIGNvbnN0IHBsYXllcjJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjJOYW1lSW5wdXQnKS52YWx1ZVxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjJOYW1lSW5wdXQnKS52YWx1ZVxuICAgIDogJ1BsYXllciAyJztcblxuICBnZW5lcmF0ZVBsYXllcnMoXG4gICAgW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnaHVtYW4nLFxuICAgICAgICBuYW1lOiBwbGF5ZXIxTmFtZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdodW1hbicsXG4gICAgICAgIG5hbWU6IHBsYXllcjJOYW1lLFxuICAgICAgfSxcbiAgICBdLFxuICApO1xuXG4gIFtjdXJyZW50UGxheWVyLCB0YXJnZXRQbGF5ZXJdID0gcGxheWVycztcblxuICBhd2FpdCBjbGVhck1haW5NZW51KCk7XG4gIGluaXRpYWxpemVHYW1lQ29udGFpbmVyKCk7XG4gIGluaXRpYWxpemVTaGlwUGxhY2VtZW50U2NyZWVuKCk7XG59O1xuXG5jb25zdCBzdGFydEdhbWVBSSA9IGFzeW5jIChlKSA9PiB7XG4gIHBsYXlNZW51Q2xpY2tTRlgoKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjFOYW1lSW5wdXQnKS52YWx1ZVxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjFOYW1lSW5wdXQnKS52YWx1ZVxuICAgIDogJ1BsYXllciAxJztcbiAgY29uc3QgQUlMZXZlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUgZm9ybSAuYnV0dG9uLkFJLnRvZ2dsZWQnKS5kYXRhc2V0LmxldmVsO1xuXG4gIGdlbmVyYXRlUGxheWVycyhcbiAgICBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdodW1hbicsXG4gICAgICAgIG5hbWU6IHBsYXllck5hbWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnQUknLFxuICAgICAgICBkaWZmaWN1bHR5OiBBSUxldmVsLFxuICAgICAgfSxcbiAgICBdLFxuICApO1xuXG4gIFtjdXJyZW50UGxheWVyLCB0YXJnZXRQbGF5ZXJdID0gcGxheWVycztcblxuICBhd2FpdCBjbGVhck1haW5NZW51KCk7XG4gIGluaXRpYWxpemVHYW1lQ29udGFpbmVyKCk7XG4gIGluaXRpYWxpemVTaGlwUGxhY2VtZW50U2NyZWVuKCk7XG59O1xuXG5jb25zdCBjbGVhck1haW5NZW51QnV0dG9ucyA9ICgpID0+IHtcbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUgLmJ1dHRvbnMnKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NsaWNrLXNpbmsnKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2stc2luaycpO1xuICAgICAgd2hpbGUgKGJ1dHRvbnNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBidXR0b25zQ29udGFpbmVyLnJlbW92ZUNoaWxkKGJ1dHRvbnNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2hvd1ZlcnN1c1BsYXllciA9IGFzeW5jICgpID0+IHtcbiAgcGxheU1lbnVDbGlja1NGWCgpO1xuICBhd2FpdCBjbGVhck1haW5NZW51QnV0dG9ucygpO1xuXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51IC5idXR0b25zJyk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBjb25zdCBsYWJlbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbDEuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgbGFiZWwxLmh0bWxGb3IgPSAncGxheWVyMU5hbWVJbnB1dCc7XG4gIGxhYmVsMS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMTonO1xuXG4gIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0MS5pZCA9ICdwbGF5ZXIxTmFtZUlucHV0JztcbiAgaW5wdXQxLnR5cGUgPSAndGV4dCc7XG4gIGlucHV0MS5wbGFjZWhvbGRlciA9ICdOYW1lJztcbiAgaW5wdXQxLm1heExlbmd0aCA9IDE2O1xuXG4gIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgY29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwyLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gIGxhYmVsMi5odG1sRm9yID0gJ3BsYXllcjJOYW1lSW5wdXQnO1xuICBsYWJlbDIudGV4dENvbnRlbnQgPSAnUGxheWVyIDI6JztcblxuICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dDIuaWQgPSAncGxheWVyMk5hbWVJbnB1dCc7XG4gIGlucHV0Mi50eXBlID0gJ3RleHQnO1xuICBpbnB1dDIucGxhY2Vob2xkZXIgPSAnTmFtZSc7XG4gIGlucHV0Mi5tYXhMZW5ndGggPSAxNjtcblxuICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGNvbnN0IGJ0blN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0blN0YXJ0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICBidG5TdGFydC50eXBlID0gJ3N1Ym1pdCc7XG4gIGJ0blN0YXJ0LnRleHRDb250ZW50ID0gJ1N0YXJ0IEdhbWUnO1xuICBidG5TdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZVBsYXllciwgeyBvbmNlOiB0cnVlIH0pO1xuXG4gIGNvbnN0IGJ0bkJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuQmFjay5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgYnRuQmFjay50ZXh0Q29udGVudCA9ICdCYWNrJztcbiAgYnRuQmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dWZXJzdXNPcHRpb25zLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgbGkxLmFwcGVuZENoaWxkKGxhYmVsMSk7XG4gIGxpMS5hcHBlbmRDaGlsZChpbnB1dDEpO1xuICBsaTIuYXBwZW5kQ2hpbGQobGFiZWwyKTtcbiAgbGkyLmFwcGVuZENoaWxkKGlucHV0Mik7XG4gIGxpMy5hcHBlbmRDaGlsZChidG5TdGFydCk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMSk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gIHVsLmFwcGVuZENoaWxkKGxpMyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodWwpO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkJhY2spO1xufTtcblxuY29uc3QgdG9nZ2xlQUlEaWZmaWN1bHR5ID0gKGUpID0+IHtcbiAgcGxheU1lbnVDbGlja1NGWCgpO1xuICBjb25zdCBjdXJyZW50VG9nZ2xlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUgZm9ybSAuYnV0dG9uLkFJLnRvZ2dsZWQnKTtcbiAgY29uc3QgY2xpY2tlZEJ1dHRvbiA9IGUuY3VycmVudFRhcmdldDtcblxuICBjdXJyZW50VG9nZ2xlZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGVkJyk7XG4gIGNsaWNrZWRCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9nZ2xlZCcpO1xufTtcblxuY29uc3Qgc2hvd1ZlcnN1c0FJID0gYXN5bmMgKCkgPT4ge1xuICBwbGF5TWVudUNsaWNrU0ZYKCk7XG4gIGF3YWl0IGNsZWFyTWFpbk1lbnVCdXR0b25zKCk7XG5cbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUgLmJ1dHRvbnMnKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwnKTtcbiAgbGFiZWwuaHRtbEZvciA9ICdwbGF5ZXIxTmFtZUlucHV0JztcbiAgbGFiZWwudGV4dENvbnRlbnQgPSAnUGxheWVyIDE6JztcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LmlkID0gJ3BsYXllcjFOYW1lSW5wdXQnO1xuICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICBpbnB1dC5wbGFjZWhvbGRlciA9ICdOYW1lJztcbiAgaW5wdXQubWF4TGVuZ3RoID0gMTY7XG5cbiAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gIHAudGV4dENvbnRlbnQgPSAnQUkgTGV2ZWw6JztcblxuICBjb25zdCBidG5FYXN5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bkVhc3kuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ0FJJywgJ3RvZ2dsZWQnKTtcbiAgYnRuRWFzeS50eXBlID0gJ2J1dHRvbic7XG4gIGJ0bkVhc3kudGV4dENvbnRlbnQgPSAnRWFzeSc7XG4gIGJ0bkVhc3kuZGF0YXNldC5sZXZlbCA9ICdFYXN5JztcbiAgYnRuRWFzeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUFJRGlmZmljdWx0eSk7XG5cbiAgY29uc3QgYnRuTm9ybWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bk5vcm1hbC5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnQUknKTtcbiAgYnRuTm9ybWFsLnR5cGUgPSAnYnV0dG9uJztcbiAgYnRuTm9ybWFsLnRleHRDb250ZW50ID0gJ05vcm1hbCc7XG4gIGJ0bk5vcm1hbC5kYXRhc2V0LmxldmVsID0gJ05vcm1hbCc7XG4gIGJ0bk5vcm1hbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUFJRGlmZmljdWx0eSk7XG5cbiAgY29uc3QgYnRuQ2hlYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuQ2hlYXQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ0FJJyk7XG4gIGJ0bkNoZWF0LnR5cGUgPSAnYnV0dG9uJztcbiAgYnRuQ2hlYXQudGV4dENvbnRlbnQgPSAnQ2hlYXQnO1xuICBidG5DaGVhdC5kYXRhc2V0LmxldmVsID0gJ0NoZWF0JztcbiAgYnRuQ2hlYXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBSURpZmZpY3VsdHkpO1xuXG4gIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgY29uc3QgYnRuU3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuU3RhcnQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIGJ0blN0YXJ0LnR5cGUgPSAnc3VibWl0JztcbiAgYnRuU3RhcnQudGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSc7XG4gIGJ0blN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lQUksIHsgb25jZTogdHJ1ZSB9KTtcblxuICBjb25zdCBidG5CYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bkJhY2suY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIGJ0bkJhY2sudGV4dENvbnRlbnQgPSAnQmFjayc7XG4gIGJ0bkJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VmVyc3VzT3B0aW9ucywgeyBvbmNlOiB0cnVlIH0pO1xuXG4gIGxpMS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGxpMS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGxpMi5hcHBlbmRDaGlsZChwKTtcbiAgbGkyLmFwcGVuZENoaWxkKGJ0bkVhc3kpO1xuICBsaTIuYXBwZW5kQ2hpbGQoYnRuTm9ybWFsKTtcbiAgbGkyLmFwcGVuZENoaWxkKGJ0bkNoZWF0KTtcbiAgbGkzLmFwcGVuZENoaWxkKGJ0blN0YXJ0KTtcbiAgdWwuYXBwZW5kQ2hpbGQobGkxKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGkyKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGkzKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh1bCk7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQmFjayk7XG59O1xuXG5jb25zdCBzaG93VmVyc3VzT3B0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgcGxheU1lbnVDbGlja1NGWCgpO1xuICBwbGF5TWVudUJHTSgpO1xuICBhd2FpdCBjbGVhck1haW5NZW51QnV0dG9ucygpO1xuXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51IC5idXR0b25zJyk7XG5cbiAgY29uc3QgdmVyc3VzUGxheWVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHZlcnN1c1BsYXllckJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgdmVyc3VzUGxheWVyQnRuLnRleHRDb250ZW50ID0gJ1ZlcnN1cyBQbGF5ZXInO1xuICB2ZXJzdXNQbGF5ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VmVyc3VzUGxheWVyLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgY29uc3QgdmVyc3VzQUlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdmVyc3VzQUlCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIHZlcnN1c0FJQnRuLnRleHRDb250ZW50ID0gJ1ZlcnN1cyBBSSc7XG4gIHZlcnN1c0FJQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1ZlcnN1c0FJLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh2ZXJzdXNQbGF5ZXJCdG4pO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHZlcnN1c0FJQnRuKTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVNYWluTWVudSA9ICgpID0+IHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZVNwcml0ZXMpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHJlc2V0U2hpcFBsYWNlbWVudERyYWdEYXRhKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZVBsYWNlbWVudENlbGxzKTtcbiAgY29uc3Qgc2l0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5NZW51LmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudScpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnQmF0dGxlc2hpcCc7XG5cbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcblxuICBjb25zdCBwbGF5R2FtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwbGF5R2FtZUJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgcGxheUdhbWVCdG4udGV4dENvbnRlbnQgPSAnUGxheSBHYW1lJztcbiAgcGxheUdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VmVyc3VzT3B0aW9ucywgeyBvbmNlOiB0cnVlIH0pO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29weXJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2NvcHlyaWdodCcpO1xuXG4gIGNvbnN0IGdpdGh1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgZ2l0aHViLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL3JpbnRoZW8vJztcblxuICBjb25zdCBnaXRodWJTVkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcblxuICBjb25zdCB5ZWFyID0gKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBgIMKpICR7eWVhcn0gcmludGhlb2A7XG5cbiAgZ2l0aHViLmFwcGVuZENoaWxkKGdpdGh1YlNWRyk7XG4gIGNvcHlyaWdodC5hcHBlbmRDaGlsZChnaXRodWIpO1xuICBjb3B5cmlnaHQuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kKHBsYXlHYW1lQnRuKTtcbiAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBtYWluTWVudS5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcbiAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcbiAgc2l0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluTWVudSk7XG5cbiAgZ2l0aHViU1ZHLm91dGVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmdpdGh1YjwvdGl0bGU+PHBhdGggZD1cIk0xMiwyQTEwLDEwIDAgMCwwIDIsMTJDMiwxNi40MiA0Ljg3LDIwLjE3IDguODQsMjEuNUM5LjM0LDIxLjU4IDkuNSwyMS4yNyA5LjUsMjFDOS41LDIwLjc3IDkuNSwyMC4xNCA5LjUsMTkuMzFDNi43MywxOS45MSA2LjE0LDE3Ljk3IDYuMTQsMTcuOTdDNS42OCwxNi44MSA1LjAzLDE2LjUgNS4wMywxNi41QzQuMTIsMTUuODggNS4xLDE1LjkgNS4xLDE1LjlDNi4xLDE1Ljk3IDYuNjMsMTYuOTMgNi42MywxNi45M0M3LjUsMTguNDUgOC45NywxOCA5LjU0LDE3Ljc2QzkuNjMsMTcuMTEgOS44OSwxNi42NyAxMC4xNywxNi40MkM3Ljk1LDE2LjE3IDUuNjIsMTUuMzEgNS42MiwxMS41QzUuNjIsMTAuMzkgNiw5LjUgNi42NSw4Ljc5QzYuNTUsOC41NCA2LjIsNy41IDYuNzUsNi4xNUM2Ljc1LDYuMTUgNy41OSw1Ljg4IDkuNSw3LjE3QzEwLjI5LDYuOTUgMTEuMTUsNi44NCAxMiw2Ljg0QzEyLjg1LDYuODQgMTMuNzEsNi45NSAxNC41LDcuMTdDMTYuNDEsNS44OCAxNy4yNSw2LjE1IDE3LjI1LDYuMTVDMTcuOCw3LjUgMTcuNDUsOC41NCAxNy4zNSw4Ljc5QzE4LDkuNSAxOC4zOCwxMC4zOSAxOC4zOCwxMS41QzE4LjM4LDE1LjMyIDE2LjA0LDE2LjE2IDEzLjgxLDE2LjQxQzE0LjE3LDE2LjcyIDE0LjUsMTcuMzMgMTQuNSwxOC4yNkMxNC41LDE5LjYgMTQuNSwyMC42OCAxNC41LDIxQzE0LjUsMjEuMjcgMTQuNjYsMjEuNTkgMTUuMTcsMjEuNUMxOS4xNCwyMC4xNiAyMiwxNi40MiAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIC8+PC9zdmc+JztcbiAgc2hvd1ZvbHVtZUJ1dHRvbigpO1xufTtcblxuaW5pdGlhbGl6ZU1haW5NZW51KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=