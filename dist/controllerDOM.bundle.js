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












let audioVolume = 1;

const changeAudioVolume = (value) => {
  audioVolume = value;
  const audios = document.querySelectorAll('audio');
  audios.forEach((audio) => audio.volume = value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlckRPTS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxpSEFBcUM7QUFDakYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSEFBc0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxxQ0FBcUM7QUFDdk4seUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sT0FBTyxPQUFPLEtBQUssTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxLQUFLLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxL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QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNGQUFzRixFQUFFLGFBQWEsRUFBRTtBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0RBQU07QUFDNUMsd0NBQXdDLGtEQUFFO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxNQUFNLDBDQUFPLHVDQUF1QyxrREFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSSxZQUFZO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdDQUF3QztBQUM1RCxpQkFBaUIsZ0NBQWdDO0FBQ2pELG1CQUFtQiw0Q0FBNEM7O0FBRS9EOztBQUVBO0FBQ0EsMEJBQTBCLDhDQUE4QztBQUN4RSx5QkFBeUIsa0RBQWtEO0FBQzNFO0FBQ0E7QUFDQSxzQ0FBc0MsY0FBYyxHQUFHLFFBQVE7QUFDL0Q7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVILG9DQUFvQyxVQUFVLEdBQUcsUUFBUTs7QUFFekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSSxZQUFZO0FBQ25COztBQUVBO0FBQ0EsRUFBRSwwQ0FBTztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0NBQXdDO0FBQzlELHFCQUFxQiw0Q0FBNEM7O0FBRWpFLHdEQUF3RCxLQUFLO0FBQzdELHNDQUFzQyxVQUFVLEdBQUcsUUFBUTs7QUFFM0Qsb0RBQW9ELElBQUk7QUFDeEQsb0RBQW9ELElBQUk7QUFDeEQsb0RBQW9ELElBQUk7QUFDeEQsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDBDQUFPO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFFBQVEsR0FBRyxRQUFROztBQUU3QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUksWUFBWTtBQUNyQixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsc0RBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsa0NBQWtDLDBDQUFPOztBQUV6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHNEQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLGtDQUFrQywwQ0FBTzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJLFlBQVk7QUFDckIsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsWUFBWTs7QUFFcEU7QUFDQTtBQUNBO0FBQ0EseURBQXlELFlBQVk7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFlBQVk7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxZQUFZOztBQUVyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxZQUFZOztBQUU1RTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsWUFBWTs7QUFFcEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFlBQVk7O0FBRXpFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLE1BQU07O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvY2VsbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wbGF5ZXIvYWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3BsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvY29udHJvbGxlckRPTS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvb2NlYW4uZ2lmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmZhbWlseT1SdWJpaytJc28mZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuIC0tY3VycmVudC1oZWFsdGg6IDEwMCU7XG4gLS1jdXJyZW50LWhpdDogMCU7XG4gLS1jdXJyZW50LWVtcHR5OiAwJTtcbiAtLWVuZW15LWhlYWx0aDogMTAwJTtcbiAtLWVuZW15LWhpdDogMCU7XG4gLS1lbmVteS1lbXB0eTogMCU7XG4gLS1leHBsb3Npb24tc2NhbGU6IDE7XG4gLS1zcHJpdGUtc2NhbGU6IDAuMzU7XG4gLS1wbGFjZW1lbnQtY2VsbC13aWR0aDogNDhweDtcbn1cblxuKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sLCBib2R5LFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgXG5wLCB1bCwgb2wsIGxpLCBidXR0b24ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnVsLCBvbCwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufSBcblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1heC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyODBweDtcbn1cblxuLmJ0bi1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICB6LWluZGV4OiA5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi52b2x1bWUtYnRuLFxuLnNldHRpbmdzLWJ0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgZmlsbDogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7ICBcbn0gXG5cbi5zZXR0aW5ncy1idG4ge1xuICB0cmFuc2l0aW9uOiBcbiAgICB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQgMHMsXG4gICAgZmlsbCAwLjI1cyBlYXNlLWluLW91dCAwcztcbn1cblxuLnZvbHVtZS1idG4ubXV0ZSB7XG4gIGZpbGw6IHJlZDtcbn1cblxuLnZvbHVtZS1idG4ubXV0ZTpob3ZlciB7XG4gIGZpbGw6IGhzbCgwLCAxMDAlLCA0MCUpO1xufVxuXG4udm9sdW1lLWJ0bi5tdXRlOmFjdGl2ZSB7XG4gIGZpbGw6IGhzbCgwLCAxMDAlLCAzMCUpO1xufVxuXG4udm9sdW1lLWJ0bjpob3Zlcixcbi5zZXR0aW5ncy1idG46aG92ZXIge1xuICBmaWxsOiBoc2woMCwgMCUsIDkwJSk7XG59XG5cbi5zZXR0aW5ncy1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi52b2x1bWUtYnRuOmFjdGl2ZSxcbi5zZXR0aW5ncy1idG46YWN0aXZlIHtcbiAgZmlsbDogaHNsKDAsIDAlLCA4MCUpO1xufVxuXG4uZ2FtZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJvYXJkcyB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICBncmlkLWF1dG8tcm93czogMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLmJvYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbn1cblxuLnBsYWNlbWVudCAuYm9hcmQge1xuICBtYXJnaW4tdG9wOiAxMnJlbTtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xufVxuXG4ucGxhY2VtZW50LmluZm8ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2NDBweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFuaW1hdGlvbjogdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbn1cblxuLnBsYWNlbWVudC5pbmZvIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgYW5pbWF0aW9uOiBidXR0b24taWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ucGxhY2VtZW50LmluZm8gcDpudGgtY2hpbGQoMSkge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5wbGFjZW1lbnQuaW5mbyBwOm50aC1jaGlsZCgzKSB7XG4gIG1hcmdpbjogMS41cmVtIDAgO1xufVxuXG4ucGxhY2VtZW50LmluZm8gLnNoaXBzIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDFyZW0gdmFyKC0tcGxhY2VtZW50LWNlbGwtd2lkdGgpO1xuXG59XG5cbi5wbGFjZW1lbnQuaW5mbyAuc2hpcHMgLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IHZhcigtLXBsYWNlbWVudC1jZWxsLXdpZHRoKTtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBsYWNlbWVudCAuc3ByaXRle1xuICB0cmFuc2l0aW9uOiAwLjFzO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogbWFrZSBzcHJpdGUgc3R5bGUgY29tbW9uICovXG5cbi5wbGFjZW1lbnQgLmNlbGwuaG92ZXIgLnNwcml0ZSxcbi5wbGFjZW1lbnQgLmNvbnRhaW5lci51bnBsYWNlZDpob3ZlciAuc3ByaXRlIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgc2VwaWEoMTAwJSkgYnJpZ2h0bmVzcygwLjc1KSBodWUtcm90YXRlKDYwZGVnKTtcbn1cblxuLnBsYWNlbWVudCAuY2VsbC5ob3Zlci5jbGlja2VkIC5zcHJpdGUsXG4ucGxhY2VtZW50IC5jb250YWluZXIudW5wbGFjZWQ6YWN0aXZlIC5zcHJpdGV7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIHNlcGlhKDEwMCUpIGJyaWdodG5lc3MoMSkgaHVlLXJvdGF0ZSg2MGRlZyk7XG59XG5cbi5wbGFjZW1lbnQgLmNlbGwge1xuICB0cmFuc2l0aW9uOiAwLjFzO1xufVxuXG4ucGxhY2VtZW50IC5jZWxsLmJvdyB7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5wbGFjZW1lbnQgLmNlbGwuaG92ZXIsXG4ucGxhY2VtZW50IC5jb250YWluZXIudW5wbGFjZWQ6aG92ZXIgLmNlbGx7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjI1KTtcbn1cblxuLnBsYWNlbWVudCAuY2VsbC5ob3Zlci5jbGlja2VkLFxuLnBsYWNlbWVudCAuY29udGFpbmVyLnVucGxhY2VkOmFjdGl2ZSAuY2VsbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDI1NSwgMTU1LCAwLjI1KTtcbn1cblxuLmJvYXJkcy5wbGFjZW1lbnQgLmJvYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcbn1cblxuLmN1cnJlbnQuYm9hcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xufVxuXG4udGFyZ2V0LmJvYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcbn1cblxuLmNlbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImFcIjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQgMHM7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY2VsbC5zaGlwLWJvdyB7XG4gIHotaW5kZXg6IDFcbn1cblxuLmNlbGwubWlzcyBzdmcge1xuICBmaWxsOiByZ2JhKDI1NSwgMCwgMCwgMC4yNSk7XG59XG5cbi5ib2FyZHMucGxhY2VtZW50IC5jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcbn1cblxuLmN1cnJlbnQgPiAuY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG59XG5cbi50YXJnZXQgPiAuY2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XG59XG5cbi50YXJnZXQgPiAuY2VsbDpub3QoLm1pc3MsIC5oaXQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMjUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXJnZXQgPiAuY2VsbC5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yNSk7XG59XG5cbi50YXJnZXQgPiAuY2VsbC5zdW5rLFxuLnRhcmdldCA+IC5jZWxsLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnNwcml0ZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWFyZWE6IGE7XG59XG5cbi5zcHJpdGUtY29udGFpbmVyLmhvcml6b250YWwge1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uc3ByaXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpO1xuICBhbmltYXRpb246IHNoaXAtaWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGU7XG59XG5cbi5ob3Jpem9udGFsIC5zcHJpdGUge1xuICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpIHJvdGF0ZSg5MGRlZyk7XG4gIGFuaW1hdGlvbjogc2hpcC1pZGxlLWhvcml6b250YWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xufVxuXG4uY2VsbC5zdW5rIC5zcHJpdGUge1xuICBhbmltYXRpb246IFxuICAgIHNoaXAtc2luayAxMHMgbGluZWFyIDBzIDEgZm9yd2FyZHMgbm9ybWFsLFxuICAgIHNoaXAtc2hha2luZyAwLjVzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZTtcbn1cblxuLmNlbGwuc3VuayAuaG9yaXpvbnRhbCAuc3ByaXRlIHtcbiAgYW5pbWF0aW9uOiBcbiAgICBzaGlwLXNpbmsgMTBzIGxpbmVhciAwcyAxIGZvcndhcmRzIG5vcm1hbCxcbiAgICBzaGlwLXNoYWtpbmctaG9yaXpvbnRhbCAwLjVzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZTtcbn1cblxuLmZpcmUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBncmlkLWFyZWE6IGE7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5maXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xufVxuXG4uY2VsbC5zdW5rIC5maXJlIHtcbiAgYW5pbWF0aW9uOiBmYWRlLW91dCAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbn1cblxuLmV4cGxvc2lvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNSU7XG4gIGxlZnQ6IDQ1JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZ3JpZC1hcmVhOiBhO1xuICB6LWluZGV4OiAyOyAgXG59XG5cbi5leHBsb3Npb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLWV4cGxvc2lvbi1zY2FsZSkpO1xufVxuXG4uYmxvY2tlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5wbGF5ZXItaW5mbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogNTA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBhbmltYXRpb246IHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG59XG5cbi5jdXJyZW50LnBsYXllci1pbmZvIHtcbiAgdG9wOiAxcmVtO1xufVxuXG4uZW5lbXkucGxheWVyLWluZm8ge1xuICBib3R0b206IDFyZW07XG59XG5cbi5wbGF5ZXItaW5mbyBwIHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5wbGF5ZXItaW5mbyBwOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5wbGF5ZXItaW5mbyBwOmxhc3QtY2hpbGQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhlYWx0aCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDgsIDIwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFsdGggPiAudGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcbn1cblxuLmhlYWx0aCA+IC5iYXIsXG4uaGVhbHRoID4gLmhpdCxcbi5oZWFsdGggPiAuZW1wdHkge1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXMgZWFzZS1pbi1vdXQgMHM7XG59XG5cbi5jdXJyZW50IC5oZWFsdGggPiAuYmFyIHtcbiAgd2lkdGg6IHZhcigtLWN1cnJlbnQtaGVhbHRoKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMDAsIDAsIDEpO1xufVxuXG4uY3VycmVudCAuaGVhbHRoID4gLmhpdCB7XG4gIHdpZHRoOiB2YXIoLS1jdXJyZW50LWhpdCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjAwLCAwLCAwLjUpO1xufVxuXG4uY3VycmVudCAuaGVhbHRoID4gLmVtcHR5IHtcbiAgd2lkdGg6IHZhcigtLWN1cnJlbnQtZW1wdHkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4uZW5lbXkgLmhlYWx0aCA+IC5iYXIge1xuICB3aWR0aDogdmFyKC0tZW5lbXktaGVhbHRoKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDAsIDAsIDEpO1xufVxuXG4uZW5lbXkgLmhlYWx0aCA+IC5oaXQge1xuICB3aWR0aDogdmFyKC0tZW5lbXktaGl0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDAsIDAsIDAuNSk7XG59XG5cbi5lbmVteSAuaGVhbHRoID4gLmVtcHR5IHtcbiAgd2lkdGg6IHZhcigtLWVuZW15LWVtcHR5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLnNpdGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4ubWFpbi1tZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFpbi1tZW51ID4gaDEge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnUnViaWsgSXNvJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiA2cmVtO1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYW5pbWF0aW9uOiBcbiAgICB0aXRsZS1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZSxcbiAgICB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm1haW4tbWVudSAuYnV0dG9ucyB7XG4gIGhlaWdodDogMTVyZW07XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ2FtZS5jbGljay1zaW5rLFxuLm1haW4tbWVudS5jbGljay1zaW5rLFxuLm1haW4tbWVudSAuYnV0dG9ucy5jbGljay1zaW5rIHtcbiAgYW5pbWF0aW9uOlxuICAgIHRpdGxlLXNpbmsgMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG59XG5cbi5wbGFjZW1lbnQuYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDY0MHB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbn1cblxuLnBsYWNlbWVudC5idXR0b25zIC5idXR0b24sXG4ubWFpbi1tZW51IC5idXR0b24ge1xuICB3aWR0aDogMTVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xuICBhbmltYXRpb246IFxuICAgIGJ1dHRvbi1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZSxcbiAgICB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnBsYWNlbWVudC5idXR0b25zIC5idXR0b24ge1xuICBmb250LXNpemU6IDEuNzVyZW07XG59XG5cbi5wbGFjZW1lbnQuYnV0dG9ucyAuYnV0dG9uLmRpc2FibGVkIHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5wbGFjZW1lbnQuYnV0dG9ucyAuYnV0dG9uOm5vdCguZGlzYWJsZWQpOmhvdmVyLFxuLm1haW4tbWVudSAuYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgOTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbn1cblxuLnBsYWNlbWVudC5idXR0b25zIC5idXR0b246bm90KC5kaXNhYmxlZCk6YWN0aXZlLFxuLm1haW4tbWVudSAuYnV0dG9uOmFjdGl2ZSB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDgwJSk7XG59XG5cbi5tYWluLW1lbnUgZm9ybSBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2cmVtO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4ubWFpbi1tZW51IGZvcm0gbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xufVxuXG4ubWFpbi1tZW51IGZvcm0gbGkgLmxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBhbmltYXRpb246IFxuICAgIGJ1dHRvbi1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZSxcbiAgICB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xufVxuXG4ubWFpbi1tZW51IGZvcm0gbGkgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IDJweCBncm9vdmUgIzdmOGM4ZDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGFuaW1hdGlvbjogXG4gICAgYnV0dG9uLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlLFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG59XG5cbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZjhjOGQ7XG4gIGJvcmRlcjogMnB4IG91dHNldCAjN2Y4YzhkO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSS50b2dnbGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDYlLCA0NSUpOyAgIFxuICBib3JkZXI6IDJweCBpbnNldCBoc2woMCwgNiUsIDQ1JSk7ICAgXG59XG5cbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJLnRvZ2dsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg0LCA2JSwgNTAlKTsgICBcbiAgYm9yZGVyOiAycHggaW5zZXQgaHNsKDE4NCwgNiUsIDUwJSk7ICAgXG59XG5cbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJLnRvZ2dsZWQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NCwgNiUsIDQ3JSk7XG59XG5cbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NCwgNiUsIDUwJSk7ICAgXG59XG5cbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA0NyUpOyAgIFxuICBib3JkZXI6IDJweCBpbnNldCBoc2woMTg0LCA2JSwgNDclKTsgIFxufVxuXG4uY29weXJpZ2h0IHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYW5pbWF0aW9uOiBcbiAgICB0aXRsZS1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZSxcbiAgICB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcbn1cblxuLmNvcHlyaWdodCBzdmcge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBmaWxsOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxLjhyZW07XG4gIHRyYW5zaXRpb246IFxuICAgIHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dCAwcyxcbiAgICBmaWxsIDAuMjVzIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4uY29weXJpZ2h0IHN2Zzpob3ZlciB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDgwJSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4xKTtcbn1cblxuLmNvcHlyaWdodCBzdmc6YWN0aXZlIHtcbiAgZmlsbDogaHNsKDAsIDAlLCA3MCUpO1xufVxuXG4ucGxheWVyLXdhaXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbmltYXRpb246IFxuICAgIHRpdGxlLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlLFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ucGxheWVyLXdhaXQgaDIge1xuICBmb250LXNpemU6IDZyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5wbGF5ZXItd2FpdCBwIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZGlhbG9nLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC4yNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5kaWFsb2cge1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDFyZW07XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NCwgNjIsIDgwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IDJweCByaWRnZSAjOTVhNWE2O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5kaWFsb2cgLnRleHQge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5kaWFsb2cgLm1haW4udGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmRpYWxvZyAuYnV0dG9uIHtcbiAgd2lkdGg6IDEwcmVtO1xuICBtYXJnaW46IDAuMjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmOGM4ZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBvdXRzZXQgIzdmOGM4ZDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5kaWFsb2cgLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA1NiUpO1xufVxuXG4uZGlhbG9nIC5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NCwgNiUsIDU5JSk7XG59XG5cbi5kaWFsb2cgLnBsYXkuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3YWU2MDtcbiAgYm9yZGVyOiAxcHggb3V0c2V0ICMyN2FlNjA7XG59XG5cbi5kaWFsb2cgLnBsYXkuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgxNDUsIDYzJSwgNDUlKTtcbn1cblxuLmRpYWxvZyAucGxheS5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgxNDUsIDYzJSwgNDglKTtcbn1cblxuLmRpYWxvZyAubWVudS5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiO1xuICBib3JkZXI6IDFweCBvdXRzZXQgI2MwMzkyYjtcbn1cblxuLmRpYWxvZyAubWVudTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg2LCA2MyUsIDQ5JSk7XG59XG5cbi5kaWFsb2cgLm1lbnU6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDYsIDYzJSwgNTIlKTtcbn1cblxuLmZhZGUtb3V0IHtcbiAgYW5pbWF0aW9uOiBmYWRlLW91dCAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcbn1cblxuLmxvc2UtZm9jdXMge1xuICBhbmltYXRpb246IGxvc2UtZm9jdXMgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG59XG5cbi5yZXR1cm4tZm9jdXMge1xuICBhbmltYXRpb246IHJldHVybi1mb2N1cyAwLjEyNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XG59XG5cbi52aXNpYmlsaXR5LWhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0NnB4KSB7XG4gIC5ib2FyZHM6bm90KC5wbGFjZW1lbnQpIHtcbiAgICBwYWRkaW5nOiAxMHJlbSAwLjVyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYWluLW1lbnUgPiBoMSB7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICB9XG5cbiAgLnBsYXllci13YWl0IGgyIHtcbiAgICBmb250LXNpemU6IDVyZW07XG4gIH1cbiAgXG4gIC5wbGF5ZXItd2FpdCBwIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gIH0gIFxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLm1haW4tbWVudSA+IGgxIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cblxuICAucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbixcbiAgLm1haW4tbWVudSAuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuNXJlbVxuICB9XG5cbiAgLm1haW4tbWVudSBmb3JtIGxpIC5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG5cbiAgLm1haW4tbWVudSBmb3JtIGxpIGlucHV0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSSB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB9ICBcblxuICAucGxheWVyLXdhaXQgaDIge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxuICBcbiAgLnBsYXllci13YWl0IHAge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9ICBcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5tYWluLW1lbnUgPiBoMSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG5cbiAgLnBsYWNlbWVudC5idXR0b25zIC5idXR0b24sXG4gIC5tYWluLW1lbnUgLmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtXG4gIH1cblxuICAubWFpbi1tZW51IGZvcm0gbGkgLmxhYmVsIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAucGxheWVyLXdhaXQgaDIge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuICBcbiAgLnBsYXllci13YWl0IHAge1xuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgfSAgXG59XG5cbkBrZXlmcmFtZXMgbG9zZS1mb2N1cyB7XG4gIDAlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XG4gIH1cbiAgXG4gIDEwMCUge1xuICAgIGZpbHRlcjogYmx1cigycHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcmV0dXJuLWZvY3VzIHtcbiAgMCUge1xuICAgIGZpbHRlcjogYmx1cigycHgpO1xuICB9XG4gIFxuICAxMDAlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBidXR0b24taWRsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdGl0bGUtaWRsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMSUsIDAuMjUlKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wJSwgLTAuMjUlKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHRpdGxlLXJpc2Uge1xuICAwJSB7XG4gICAgZmlsdGVyOiBibHVyKDEwcHgpIGJyaWdodG5lc3MoMC4yNSkgb3BhY2l0eSgwLjI1KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIGZpbHRlcjogYmx1cigwcHgpIGJyaWdodG5lc3MoMSkgb3BhY2l0eSgxKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHRpdGxlLXNpbmsge1xuICAwJSB7XG4gICAgZmlsdGVyOiBibHVyKDBweCkgYnJpZ2h0bmVzcygxKSBvcGFjaXR5KDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgZmlsdGVyOiBibHVyKDEwcHgpIGJyaWdodG5lc3MoMC4yNSkgb3BhY2l0eSgwLjI1KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNoaXAtaWRsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMi41JSwgMC4yNSUpIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAlLCAtMC4yNSUpIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hpcC1pZGxlLWhvcml6b250YWwge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIuNSUsIDAuMjUlKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKSByb3RhdGUoOTBkZWcpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAlLCAtMC4yNSUpIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpIHJvdGF0ZSg5MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzaGlwLXNpbmsge1xuICAwJSB7XG4gICAgZmlsdGVyOiBibHVyKDBweCkgYnJpZ2h0bmVzcygxKSBncmF5c2NhbGUoMCUpIG9wYWNpdHkoMSk7XG4gIH1cblxuICAyLjUlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDIpIGdyYXlzY2FsZSgwJSkgb3BhY2l0eSgxKTtcbiAgfVxuXG4gIDUlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDEpIGdyYXlzY2FsZSgwJSkgb3BhY2l0eSgxKTtcbiAgfVxuICBcbiAgMTAwJSB7XG4gICAgZmlsdGVyOiBibHVyKDI1cHgpIGJyaWdodG5lc3MoMC41KSBncmF5c2NhbGUoMTAwJSkgb3BhY2l0eSgwLjI1KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNoaXAtc2hha2luZyB7XG4gMCUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMC41JSwgMCkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSk7XG4gfVxuXG4gMTAwJSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuNSUsIDApIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpO1xuIH1cbn1cblxuQGtleWZyYW1lcyBzaGlwLXNoYWtpbmctaG9yaXpvbnRhbCB7XG4gIDAlIHtcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0wLjA1JSkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSkgcm90YXRlKDkwZGVnKTtcbiAgfVxuIFxuICAxMDAlIHtcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAuMDUlKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKSByb3RhdGUoOTBkZWcpO1xuICB9XG4gfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtDQUNDLHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQixvQkFBb0I7Q0FDcEIsNEJBQTRCO0FBQzdCOztBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsaUNBQWlDO0FBQ25DOztBQUVBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG9C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Q1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLGlDQUFpQztFQUNuQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxpREFBaUQ7RUFDbkQ7O0VBRUE7SUFDRSwwQ0FBMEM7RUFDNUM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMENBQTBDO0VBQzVDOztFQUVBO0lBQ0UsaURBQWlEO0VBQ25EO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDZEQUE2RDtFQUMvRDs7RUFFQTtJQUNFLDREQUE0RDtFQUM5RDtBQUNGOztBQUVBO0VBQ0U7SUFDRSwyRUFBMkU7RUFDN0U7O0VBRUE7SUFDRSwwRUFBMEU7RUFDNUU7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0RBQXdEO0VBQzFEOztFQUVBO0lBQ0Usd0RBQXdEO0VBQzFEOztFQUVBO0lBQ0Usd0RBQXdEO0VBQzFEOztFQUVBO0lBQ0UsZ0VBQWdFO0VBQ2xFO0FBQ0Y7O0FBRUE7Q0FDQztFQUNDLHlEQUF5RDtDQUMxRDs7Q0FFQTtFQUNDLHdEQUF3RDtDQUN6RDtBQUNEOztBQUVBO0VBQ0U7R0FDQyx3RUFBd0U7RUFDekU7O0VBRUE7R0FDQyx1RUFBdUU7RUFDeEU7Q0FDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmZhbWlseT1SdWJpaytJc28mZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAtLWN1cnJlbnQtaGVhbHRoOiAxMDAlO1xcbiAtLWN1cnJlbnQtaGl0OiAwJTtcXG4gLS1jdXJyZW50LWVtcHR5OiAwJTtcXG4gLS1lbmVteS1oZWFsdGg6IDEwMCU7XFxuIC0tZW5lbXktaGl0OiAwJTtcXG4gLS1lbmVteS1lbXB0eTogMCU7XFxuIC0tZXhwbG9zaW9uLXNjYWxlOiAxO1xcbiAtLXNwcml0ZS1zY2FsZTogMC4zNTtcXG4gLS1wbGFjZW1lbnQtY2VsbC13aWR0aDogNDhweDtcXG59XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCwgYm9keSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBcXG5wLCB1bCwgb2wsIGxpLCBidXR0b24ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxudWwsIG9sLCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn0gXFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5tYXgtd2lkdGgge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEyODBweDtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEyODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIHotaW5kZXg6IDk5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi52b2x1bWUtYnRuLFxcbi5zZXR0aW5ncy1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgZmlsbDogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTsgIFxcbn0gXFxuXFxuLnNldHRpbmdzLWJ0biB7XFxuICB0cmFuc2l0aW9uOiBcXG4gICAgdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0IDBzLFxcbiAgICBmaWxsIDAuMjVzIGVhc2UtaW4tb3V0IDBzO1xcbn1cXG5cXG4udm9sdW1lLWJ0bi5tdXRlIHtcXG4gIGZpbGw6IHJlZDtcXG59XFxuXFxuLnZvbHVtZS1idG4ubXV0ZTpob3ZlciB7XFxuICBmaWxsOiBoc2woMCwgMTAwJSwgNDAlKTtcXG59XFxuXFxuLnZvbHVtZS1idG4ubXV0ZTphY3RpdmUge1xcbiAgZmlsbDogaHNsKDAsIDEwMCUsIDMwJSk7XFxufVxcblxcbi52b2x1bWUtYnRuOmhvdmVyLFxcbi5zZXR0aW5ncy1idG46aG92ZXIge1xcbiAgZmlsbDogaHNsKDAsIDAlLCA5MCUpO1xcbn1cXG5cXG4uc2V0dGluZ3MtYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLnZvbHVtZS1idG46YWN0aXZlLFxcbi5zZXR0aW5ncy1idG46YWN0aXZlIHtcXG4gIGZpbGw6IGhzbCgwLCAwJSwgODAlKTtcXG59XFxuXFxuLmdhbWUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL29jZWFuLmdpZicpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZHMge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDc1MHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYW5pbWF0aW9uOiB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbn1cXG5cXG4ucGxhY2VtZW50IC5ib2FyZCB7XFxuICBtYXJnaW4tdG9wOiAxMnJlbTtcXG4gIG1heC13aWR0aDogNDgwcHg7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxufVxcblxcbi5wbGFjZW1lbnQuaW5mbyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNjQwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFuaW1hdGlvbjogdGl0bGUtcmlzZSAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcXG59XFxuXFxuLnBsYWNlbWVudC5pbmZvIHAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICBhbmltYXRpb246IGJ1dHRvbi1pZGxlIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucGxhY2VtZW50LmluZm8gcDpudGgtY2hpbGQoMSkge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ucGxhY2VtZW50LmluZm8gcDpudGgtY2hpbGQoMykge1xcbiAgbWFyZ2luOiAxLjVyZW0gMCA7XFxufVxcblxcbi5wbGFjZW1lbnQuaW5mbyAuc2hpcHMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDQ4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMXJlbSB2YXIoLS1wbGFjZW1lbnQtY2VsbC13aWR0aCk7XFxuXFxufVxcblxcbi5wbGFjZW1lbnQuaW5mbyAuc2hpcHMgLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiB2YXIoLS1wbGFjZW1lbnQtY2VsbC13aWR0aCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYWNlbWVudCAuc3ByaXRle1xcbiAgdHJhbnNpdGlvbjogMC4xcztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiBtYWtlIHNwcml0ZSBzdHlsZSBjb21tb24gKi9cXG5cXG4ucGxhY2VtZW50IC5jZWxsLmhvdmVyIC5zcHJpdGUsXFxuLnBsYWNlbWVudCAuY29udGFpbmVyLnVucGxhY2VkOmhvdmVyIC5zcHJpdGUge1xcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgc2VwaWEoMTAwJSkgYnJpZ2h0bmVzcygwLjc1KSBodWUtcm90YXRlKDYwZGVnKTtcXG59XFxuXFxuLnBsYWNlbWVudCAuY2VsbC5ob3Zlci5jbGlja2VkIC5zcHJpdGUsXFxuLnBsYWNlbWVudCAuY29udGFpbmVyLnVucGxhY2VkOmFjdGl2ZSAuc3ByaXRle1xcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgc2VwaWEoMTAwJSkgYnJpZ2h0bmVzcygxKSBodWUtcm90YXRlKDYwZGVnKTtcXG59XFxuXFxuLnBsYWNlbWVudCAuY2VsbCB7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbn1cXG5cXG4ucGxhY2VtZW50IC5jZWxsLmJvdyB7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4ucGxhY2VtZW50IC5jZWxsLmhvdmVyLFxcbi5wbGFjZW1lbnQgLmNvbnRhaW5lci51bnBsYWNlZDpob3ZlciAuY2VsbHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjI1KTtcXG59XFxuXFxuLnBsYWNlbWVudCAuY2VsbC5ob3Zlci5jbGlja2VkLFxcbi5wbGFjZW1lbnQgLmNvbnRhaW5lci51bnBsYWNlZDphY3RpdmUgLmNlbGx7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NSwgMjU1LCAxNTUsIDAuMjUpO1xcbn1cXG5cXG4uYm9hcmRzLnBsYWNlbWVudCAuYm9hcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcXG59XFxuXFxuLmN1cnJlbnQuYm9hcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcXG59XFxuXFxuLnRhcmdldC5ib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImFcXFwiO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluLW91dCAwcztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLmNlbGwuc2hpcC1ib3cge1xcbiAgei1pbmRleDogMVxcbn1cXG5cXG4uY2VsbC5taXNzIHN2ZyB7XFxuICBmaWxsOiByZ2JhKDI1NSwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi5ib2FyZHMucGxhY2VtZW50IC5jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XFxufVxcblxcbi5jdXJyZW50ID4gLmNlbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcXG59XFxuXFxuLnRhcmdldCA+IC5jZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yNSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xcbn1cXG5cXG4udGFyZ2V0ID4gLmNlbGw6bm90KC5taXNzLCAuaGl0KTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4yNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXJnZXQgPiAuY2VsbC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMjUpO1xcbn1cXG5cXG4udGFyZ2V0ID4gLmNlbGwuc3VuayxcXG4udGFyZ2V0ID4gLmNlbGwubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNwcml0ZS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiBhO1xcbn1cXG5cXG4uc3ByaXRlLWNvbnRhaW5lci5ob3Jpem9udGFsIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc3ByaXRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpO1xcbiAgYW5pbWF0aW9uOiBzaGlwLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xcbn1cXG5cXG4uaG9yaXpvbnRhbCAuc3ByaXRlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSkgcm90YXRlKDkwZGVnKTtcXG4gIGFuaW1hdGlvbjogc2hpcC1pZGxlLWhvcml6b250YWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xcbn1cXG5cXG4uY2VsbC5zdW5rIC5zcHJpdGUge1xcbiAgYW5pbWF0aW9uOiBcXG4gICAgc2hpcC1zaW5rIDEwcyBsaW5lYXIgMHMgMSBmb3J3YXJkcyBub3JtYWwsXFxuICAgIHNoaXAtc2hha2luZyAwLjVzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZTtcXG59XFxuXFxuLmNlbGwuc3VuayAuaG9yaXpvbnRhbCAuc3ByaXRlIHtcXG4gIGFuaW1hdGlvbjogXFxuICAgIHNoaXAtc2luayAxMHMgbGluZWFyIDBzIDEgZm9yd2FyZHMgbm9ybWFsLFxcbiAgICBzaGlwLXNoYWtpbmctaG9yaXpvbnRhbCAwLjVzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZTtcXG59XFxuXFxuLmZpcmUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IGE7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZmlyZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcXG59XFxuXFxuLmNlbGwuc3VuayAuZmlyZSB7XFxuICBhbmltYXRpb246IGZhZGUtb3V0IDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbn1cXG5cXG4uZXhwbG9zaW9uLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUlO1xcbiAgbGVmdDogNDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogYTtcXG4gIHotaW5kZXg6IDI7ICBcXG59XFxuXFxuLmV4cGxvc2lvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tZXhwbG9zaW9uLXNjYWxlKSk7XFxufVxcblxcbi5ibG9ja2VyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgei1pbmRleDogNTtcXG59XFxuXFxuLnBsYXllci1pbmZvIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAzMHJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDUwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBhbmltYXRpb246IHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxufVxcblxcbi5jdXJyZW50LnBsYXllci1pbmZvIHtcXG4gIHRvcDogMXJlbTtcXG59XFxuXFxuLmVuZW15LnBsYXllci1pbmZvIHtcXG4gIGJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnBsYXllci1pbmZvIHAge1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi5wbGF5ZXItaW5mbyBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ucGxheWVyLWluZm8gcDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmhlYWx0aCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgOCwgMjAsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFsdGggPiAudGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcXG59XFxuXFxuLmhlYWx0aCA+IC5iYXIsXFxuLmhlYWx0aCA+IC5oaXQsXFxuLmhlYWx0aCA+IC5lbXB0eSB7XFxuICBoZWlnaHQ6IDAuNXJlbTtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzIGVhc2UtaW4tb3V0IDBzO1xcbn1cXG5cXG4uY3VycmVudCAuaGVhbHRoID4gLmJhciB7XFxuICB3aWR0aDogdmFyKC0tY3VycmVudC1oZWFsdGgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMDAsIDAsIDEpO1xcbn1cXG5cXG4uY3VycmVudCAuaGVhbHRoID4gLmhpdCB7XFxuICB3aWR0aDogdmFyKC0tY3VycmVudC1oaXQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMDAsIDAsIDAuNSk7XFxufVxcblxcbi5jdXJyZW50IC5oZWFsdGggPiAuZW1wdHkge1xcbiAgd2lkdGg6IHZhcigtLWN1cnJlbnQtZW1wdHkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuLmVuZW15IC5oZWFsdGggPiAuYmFyIHtcXG4gIHdpZHRoOiB2YXIoLS1lbmVteS1oZWFsdGgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDAsIDAsIDEpO1xcbn1cXG5cXG4uZW5lbXkgLmhlYWx0aCA+IC5oaXQge1xcbiAgd2lkdGg6IHZhcigtLWVuZW15LWhpdCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmVuZW15IC5oZWFsdGggPiAuZW1wdHkge1xcbiAgd2lkdGg6IHZhcigtLWVuZW15LWVtcHR5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi5zaXRlLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5tYWluLW1lbnUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1tZW51ID4gaDEge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ1J1YmlrIElzbycsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDZyZW07XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGFuaW1hdGlvbjogXFxuICAgIHRpdGxlLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlLFxcbiAgICB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tYWluLW1lbnUgLmJ1dHRvbnMge1xcbiAgaGVpZ2h0OiAxNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUuY2xpY2stc2luayxcXG4ubWFpbi1tZW51LmNsaWNrLXNpbmssXFxuLm1haW4tbWVudSAuYnV0dG9ucy5jbGljay1zaW5rIHtcXG4gIGFuaW1hdGlvbjpcXG4gICAgdGl0bGUtc2luayAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDtcXG59XFxuXFxuLnBsYWNlbWVudC5idXR0b25zIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA2NDBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxufVxcblxcbi5wbGFjZW1lbnQuYnV0dG9ucyAuYnV0dG9uLFxcbi5tYWluLW1lbnUgLmJ1dHRvbiB7XFxuICB3aWR0aDogMTVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICBhbmltYXRpb246IFxcbiAgICBidXR0b24taWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGUsXFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnBsYWNlbWVudC5idXR0b25zIC5idXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG4ucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbi5kaXNhYmxlZCB7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLnBsYWNlbWVudC5idXR0b25zIC5idXR0b246bm90KC5kaXNhYmxlZCk6aG92ZXIsXFxuLm1haW4tbWVudSAuYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDkwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuLnBsYWNlbWVudC5idXR0b25zIC5idXR0b246bm90KC5kaXNhYmxlZCk6YWN0aXZlLFxcbi5tYWluLW1lbnUgLmJ1dHRvbjphY3RpdmUge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgODAlKTtcXG59XFxuXFxuLm1haW4tbWVudSBmb3JtIGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDZyZW07XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm1haW4tbWVudSBmb3JtIGxpOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG5cXG4ubWFpbi1tZW51IGZvcm0gbGkgLmxhYmVsIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBhbmltYXRpb246IFxcbiAgICBidXR0b24taWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGUsXFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxufVxcblxcbi5tYWluLW1lbnUgZm9ybSBsaSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogMnB4IGdyb292ZSAjN2Y4YzhkO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgYW5pbWF0aW9uOiBcXG4gICAgYnV0dG9uLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlLFxcbiAgICB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbn1cXG5cXG4ubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZjhjOGQ7XFxuICBib3JkZXI6IDJweCBvdXRzZXQgIzdmOGM4ZDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJLnRvZ2dsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDYlLCA0NSUpOyAgIFxcbiAgYm9yZGVyOiAycHggaW5zZXQgaHNsKDAsIDYlLCA0NSUpOyAgIFxcbn1cXG5cXG4ubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSS50b2dnbGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA1MCUpOyAgIFxcbiAgYm9yZGVyOiAycHggaW5zZXQgaHNsKDE4NCwgNiUsIDUwJSk7ICAgXFxufVxcblxcbi5tYWluLW1lbnUgZm9ybSBsaSAuYnV0dG9uLkFJLnRvZ2dsZWQ6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA0NyUpO1xcbn1cXG5cXG4ubWFpbi1tZW51IGZvcm0gbGkgLmJ1dHRvbi5BSTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg0LCA2JSwgNTAlKTsgICBcXG59XFxuXFxuLm1haW4tbWVudSBmb3JtIGxpIC5idXR0b24uQUk6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDYlLCA0NyUpOyAgIFxcbiAgYm9yZGVyOiAycHggaW5zZXQgaHNsKDE4NCwgNiUsIDQ3JSk7ICBcXG59XFxuXFxuLmNvcHlyaWdodCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGFuaW1hdGlvbjogXFxuICAgIHRpdGxlLWlkbGUgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlLFxcbiAgICB0aXRsZS1yaXNlIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMS44cmVtO1xcbn1cXG5cXG4uY29weXJpZ2h0IHN2ZyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgZmlsbDogd2hpdGU7XFxuICBoZWlnaHQ6IDEuOHJlbTtcXG4gIHRyYW5zaXRpb246IFxcbiAgICB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQgMHMsXFxuICAgIGZpbGwgMC4yNXMgZWFzZS1pbi1vdXQgMHM7XFxufVxcblxcbi5jb3B5cmlnaHQgc3ZnOmhvdmVyIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDgwJSk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMSk7XFxufVxcblxcbi5jb3B5cmlnaHQgc3ZnOmFjdGl2ZSB7XFxuICBmaWxsOiBoc2woMCwgMCUsIDcwJSk7XFxufVxcblxcbi5wbGF5ZXItd2FpdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYW5pbWF0aW9uOiBcXG4gICAgdGl0bGUtaWRsZSAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGUsXFxuICAgIHRpdGxlLXJpc2UgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnBsYXllci13YWl0IGgyIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5wbGF5ZXItd2FpdCBwIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5kaWFsb2ctb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjI1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5kaWFsb2cge1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDQsIDYyLCA4MCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBvdXRsaW5lOiAycHggcmlkZ2UgIzk1YTVhNjtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbmltYXRpb246IGZhZGUtaW4gMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmRpYWxvZyAudGV4dCB7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5kaWFsb2cgLm1haW4udGV4dCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmRpYWxvZyAuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIG1hcmdpbjogMC4yNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZjhjOGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBvdXRzZXQgIzdmOGM4ZDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5kaWFsb2cgLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg0LCA2JSwgNTYlKTtcXG59XFxuXFxuLmRpYWxvZyAuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg0LCA2JSwgNTklKTtcXG59XFxuXFxuLmRpYWxvZyAucGxheS5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3YWU2MDtcXG4gIGJvcmRlcjogMXB4IG91dHNldCAjMjdhZTYwO1xcbn1cXG5cXG4uZGlhbG9nIC5wbGF5LmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDE0NSwgNjMlLCA0NSUpO1xcbn1cXG5cXG4uZGlhbG9nIC5wbGF5LmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgxNDUsIDYzJSwgNDglKTtcXG59XFxuXFxuLmRpYWxvZyAubWVudS5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYjtcXG4gIGJvcmRlcjogMXB4IG91dHNldCAjYzAzOTJiO1xcbn1cXG5cXG4uZGlhbG9nIC5tZW51OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg2LCA2MyUsIDQ5JSk7XFxufVxcblxcbi5kaWFsb2cgLm1lbnU6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg2LCA2MyUsIDUyJSk7XFxufVxcblxcbi5mYWRlLW91dCB7XFxuICBhbmltYXRpb246IGZhZGUtb3V0IDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbn1cXG5cXG4ubG9zZS1mb2N1cyB7XFxuICBhbmltYXRpb246IGxvc2UtZm9jdXMgMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7XFxufVxcblxcbi5yZXR1cm4tZm9jdXMge1xcbiAgYW5pbWF0aW9uOiByZXR1cm4tZm9jdXMgMC4xMjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsO1xcbn1cXG5cXG4udmlzaWJpbGl0eS1oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjQ2cHgpIHtcXG4gIC5ib2FyZHM6bm90KC5wbGFjZW1lbnQpIHtcXG4gICAgcGFkZGluZzogMTByZW0gMC41cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5tYWluLW1lbnUgPiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gIH1cXG5cXG4gIC5wbGF5ZXItd2FpdCBoMiB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gIH1cXG4gIFxcbiAgLnBsYXllci13YWl0IHAge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICB9ICBcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAubWFpbi1tZW51ID4gaDEge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICB9XFxuXFxuICAucGxhY2VtZW50LmJ1dHRvbnMgLmJ1dHRvbixcXG4gIC5tYWluLW1lbnUgLmJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtXFxuICB9XFxuXFxuICAubWFpbi1tZW51IGZvcm0gbGkgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcblxcbiAgLm1haW4tbWVudSBmb3JtIGxpIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLm1haW4tbWVudSBmb3JtIGxpIC5idXR0b24uQUkge1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICB9ICBcXG5cXG4gIC5wbGF5ZXItd2FpdCBoMiB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gIH1cXG4gIFxcbiAgLnBsYXllci13YWl0IHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH0gIFxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIC5tYWluLW1lbnUgPiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG5cXG4gIC5wbGFjZW1lbnQuYnV0dG9ucyAuYnV0dG9uLFxcbiAgLm1haW4tbWVudSAuYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtXFxuICB9XFxuXFxuICAubWFpbi1tZW51IGZvcm0gbGkgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLnBsYXllci13YWl0IGgyIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcbiAgXFxuICAucGxheWVyLXdhaXQgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gIH0gIFxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxvc2UtZm9jdXMge1xcbiAgMCUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XFxuICB9XFxuICBcXG4gIDEwMCUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByZXR1cm4tZm9jdXMge1xcbiAgMCUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcXG4gIH1cXG4gIFxcbiAgMTAwJSB7XFxuICAgIGZpbHRlcjogYmx1cigwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJ1dHRvbi1pZGxlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgMCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdGl0bGUtaWRsZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xJSwgMC4yNSUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wJSwgLTAuMjUlKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0aXRsZS1yaXNlIHtcXG4gIDAlIHtcXG4gICAgZmlsdGVyOiBibHVyKDEwcHgpIGJyaWdodG5lc3MoMC4yNSkgb3BhY2l0eSgwLjI1KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDEpIG9wYWNpdHkoMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdGl0bGUtc2luayB7XFxuICAwJSB7XFxuICAgIGZpbHRlcjogYmx1cigwcHgpIGJyaWdodG5lc3MoMSkgb3BhY2l0eSgxKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMTBweCkgYnJpZ2h0bmVzcygwLjI1KSBvcGFjaXR5KDAuMjUpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoaXAtaWRsZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yLjUlLCAwLjI1JSkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAlLCAtMC4yNSUpIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoaXAtaWRsZS1ob3Jpem9udGFsIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIuNSUsIDAuMjUlKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKSByb3RhdGUoOTBkZWcpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wJSwgLTAuMjUlKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKSByb3RhdGUoOTBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoaXAtc2luayB7XFxuICAwJSB7XFxuICAgIGZpbHRlcjogYmx1cigwcHgpIGJyaWdodG5lc3MoMSkgZ3JheXNjYWxlKDAlKSBvcGFjaXR5KDEpO1xcbiAgfVxcblxcbiAgMi41JSB7XFxuICAgIGZpbHRlcjogYmx1cigwcHgpIGJyaWdodG5lc3MoMikgZ3JheXNjYWxlKDAlKSBvcGFjaXR5KDEpO1xcbiAgfVxcblxcbiAgNSUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KSBicmlnaHRuZXNzKDEpIGdyYXlzY2FsZSgwJSkgb3BhY2l0eSgxKTtcXG4gIH1cXG4gIFxcbiAgMTAwJSB7XFxuICAgIGZpbHRlcjogYmx1cigyNXB4KSBicmlnaHRuZXNzKDAuNSkgZ3JheXNjYWxlKDEwMCUpIG9wYWNpdHkoMC4yNSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hpcC1zaGFraW5nIHtcXG4gMCUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAuNSUsIDApIHNjYWxlKHZhcigtLXNwcml0ZS1zY2FsZSkpO1xcbiB9XFxuXFxuIDEwMCUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC41JSwgMCkgc2NhbGUodmFyKC0tc3ByaXRlLXNjYWxlKSk7XFxuIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaGlwLXNoYWtpbmctaG9yaXpvbnRhbCB7XFxuICAwJSB7XFxuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTAuMDUlKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKSByb3RhdGUoOTBkZWcpO1xcbiAgfVxcbiBcXG4gIDEwMCUge1xcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAuMDUlKSBzY2FsZSh2YXIoLS1zcHJpdGUtc2NhbGUpKSByb3RhdGUoOTBkZWcpO1xcbiAgfVxcbiB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc0hpdCA9IGZhbHNlO1xuICAgIHRoaXMuanVzdEdvdEhpdCA9IGZhbHNlO1xuICAgIHRoaXMuc2hpcCA9IG51bGw7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5pc0hpdCA9IHRydWU7XG4gICAgdGhpcy5qdXN0R290SGl0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJlc2V0SnVzdEdvdEhpdCgpIHtcbiAgICB0aGlzLmp1c3RHb3RIaXQgPSBmYWxzZTtcbiAgfVxuXG4gIGFzc2lnbihzaGlwKSB7XG4gICAgdGhpcy5zaGlwID0gc2hpcDtcbiAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci9wbGF5ZXInO1xuaW1wb3J0IEFJIGZyb20gJy4vcGxheWVyL2FpJztcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuZXhwb3J0IGNvbnN0IHBsYXllcnMgPSBbXTtcblxuLy8gY29uc3Qgc2hpcHMgPSBbXG4vLyAgIHtcbi8vICAgICB0eXBlOiAnQ2FycmllcicsXG4vLyAgICAgbGVuZ3RoOiA1LFxuLy8gICAgIHRlbXBDb29yZHM6IFszLCAyXSxcbi8vICAgICB0ZW1wSG9yaTogdHJ1ZSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIHR5cGU6ICdCYXR0bGVzaGlwJyxcbi8vICAgICBsZW5ndGg6IDQsXG4vLyAgICAgdGVtcENvb3JkczogWzMsIDVdLFxuLy8gICAgIHRlbXBIb3JpOiB0cnVlLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgdHlwZTogJ0NydWlzZXInLFxuLy8gICAgIGxlbmd0aDogMyxcbi8vICAgICB0ZW1wQ29vcmRzOiBbOCwgM10sXG4vLyAgICAgdGVtcEhvcmk6IGZhbHNlLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgdHlwZTogJ1N1Ym1hcmluZScsXG4vLyAgICAgbGVuZ3RoOiAzLFxuLy8gICAgIHRlbXBDb29yZHM6IFs2LCA3XSxcbi8vICAgICB0ZW1wSG9yaTogZmFsc2UsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICB0eXBlOiAnRGVzdHJveWVyJyxcbi8vICAgICBsZW5ndGg6IDIsXG4vLyAgICAgdGVtcENvb3JkczogWzEsIDldLFxuLy8gICAgIHRlbXBIb3JpOiB0cnVlLFxuLy8gICB9LFxuLy8gXTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlUGxheWVycyA9IChpbnB1dFBsYXllcnMpID0+IHtcbiAgcGxheWVycy5sZW5ndGggPSAwO1xuXG4gIGlucHV0UGxheWVycy5mb3JFYWNoKCh0aGlzUGxheWVyKSA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpc1BsYXllci50eXBlID09PSAnaHVtYW4nID8gbmV3IFBsYXllcih0aGlzUGxheWVyLm5hbWUpXG4gICAgICA6IHRoaXNQbGF5ZXIudHlwZSA9PT0gJ0FJJyA/IG5ldyBBSSh0aGlzUGxheWVyLmRpZmZpY3VsdHkpXG4gICAgICAgIDogbnVsbDtcblxuICAgIHBsYXllcnMucHVzaChwbGF5ZXIpO1xuXG4gICAgY29uc3QgYm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgYm9hcmQuY3JlYXRlQm9hcmQoKTtcbiAgICBwbGF5ZXIuYXNzaWduQm9hcmQoYm9hcmQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBwbGFjZVBsYXllclNoaXBzID0gKHBsYXllciwgc2hpcHMpID0+IHtcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHBsYXllclxuICAgICAgLmJvYXJkXG4gICAgICAucGxhY2VTaGlwKHNoaXAuaW5zZXJ0Q29vcmRpbmF0ZXMsIG5ldyBTaGlwKHNoaXAubGVuZ3RoLCBzaGlwLnR5cGUpLCBzaGlwLmhvcml6b250YWwpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgQ2VsbCBmcm9tICcuL2NlbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gW107XG4gICAgdGhpcy5mbGVldCA9IFtdO1xuICB9XG5cbiAgZ2V0Qm9hcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gIH1cblxuICBnZXRGbGVldCgpIHtcbiAgICByZXR1cm4gdGhpcy5mbGVldDtcbiAgfVxuXG4gIGVtcHR5RmxlZXQoKSB7XG4gICAgdGhpcy5mbGVldC5sZW5ndGggPSAwO1xuICB9XG5cbiAgY3JlYXRlQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICB0aGlzLmJvYXJkW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IG5ldyBDZWxsKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGxhY2VTaGlwKFt4LCB5XSwgc2hpcCwgaXNQbGFjZWRIb3Jpem9udGFsbHkgPSB0cnVlKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpc1BsYWNlZEhvcml6b250YWxseVxuICAgICAgPyB4IC0gTWF0aC5mbG9vcihzaGlwLmxlbmd0aCAvIDIpXG4gICAgICA6IHkgLSBNYXRoLmZsb29yKHNoaXAubGVuZ3RoIC8gMik7XG4gICAgY29uc3QgZW5kID0gc3RhcnQgKyBzaGlwLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgYm93Q29vcmRpbmF0ZXMgPSBpc1BsYWNlZEhvcml6b250YWxseVxuICAgICAgPyB7IHg6IGVuZCwgeSB9XG4gICAgICA6IHsgeCwgeTogZW5kIH07XG5cbiAgICBpZiAoc2hpcC5oYXNQb3NpdGlvbmVkKSByZXR1cm47XG4gICAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiA5KSByZXR1cm47XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSArPSAxKSB7XG4gICAgICBpZiAoaXNQbGFjZWRIb3Jpem9udGFsbHkgJiYgdGhpcy5ib2FyZFtpXVt5XS5zaGlwICE9PSBudWxsKSByZXR1cm47XG4gICAgICBpZiAoIWlzUGxhY2VkSG9yaXpvbnRhbGx5ICYmIHRoaXMuYm9hcmRbeF1baV0uc2hpcCAhPT0gbnVsbCkgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkgKz0gMSkge1xuICAgICAgaWYgKGlzUGxhY2VkSG9yaXpvbnRhbGx5KSB0aGlzLmJvYXJkW2ldW3ldLmFzc2lnbihzaGlwKTtcbiAgICAgIGlmICghaXNQbGFjZWRIb3Jpem9udGFsbHkpIHRoaXMuYm9hcmRbeF1baV0uYXNzaWduKHNoaXApO1xuICAgIH1cbiAgICB0aGlzLmZsZWV0LnB1c2goc2hpcCk7XG4gICAgc2hpcC5pc1Bvc2l0aW9uZWQoYm93Q29vcmRpbmF0ZXMsIGlzUGxhY2VkSG9yaXpvbnRhbGx5KTtcbiAgfVxuXG4gIHJlc2V0Q2VsbHNKdXN0R290SGl0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1bal0ucmVzZXRKdXN0R290SGl0KCk7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdLnNoaXAgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdLnNoaXAucmVzZXRKdXN0U3VuaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVjZWl2ZUF0dGFjayhbeCwgeV0pIHtcbiAgICB0aGlzLnJlc2V0Q2VsbHNKdXN0R290SGl0KCk7XG4gICAgdGhpcy5ib2FyZFt4XVt5XS5oaXQoKTtcbiAgICBpZiAodGhpcy5ib2FyZFt4XVt5XS5zaGlwICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldLnNoaXAuaGl0KCk7XG4gICAgfVxuICB9XG5cbiAgaXNGbGVldE9wZXJhdGlvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLmZsZWV0LnNvbWUoKHNoaXApID0+IHNoaXAuaGFzU3VuayA9PT0gZmFsc2UpO1xuICB9XG5cbiAgYWxsVW5oaXRDb29yZGluYXRlcygpIHtcbiAgICBjb25zdCB1bmhpdENvb3JkaW5hdGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJvYXJkW2ldW2pdLmlzSGl0KSB1bmhpdENvb3JkaW5hdGVzLnB1c2goW2ksIGpdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuaGl0Q29vcmRpbmF0ZXM7XG4gIH1cblxuICBhbGxTaGlwQ29vcmRpbmF0ZXMoKSB7XG4gICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0uc2hpcCAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmICghdGhpcy5ib2FyZFtpXVtqXS5pc0hpdCkge1xuICAgICAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW2ksIGpdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNoaXBDb29yZGluYXRlcztcbiAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFJIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoZGlmZmljdWx0eSA9ICdFYXN5Jykge1xuICAgIHN1cGVyKGBBSSAke2RpZmZpY3VsdHl9YCk7XG4gICAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcbiAgfVxuXG4gIGNob29zZUF0dGFja0Nvb3JkaW5hdGVzKHBsYXllcikge1xuICAgIGlmICh0aGlzLmRpZmZpY3VsdHkgPT09ICdFYXN5Jykge1xuICAgICAgY29uc3QgYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmQuYWxsVW5oaXRDb29yZGluYXRlcygpO1xuICAgICAgcmV0dXJuIGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzW1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlcy5sZW5ndGgpXG4gICAgICBdO1xuICAgIH1cbiAgICAvLyBOb3JtYWwgUGxhY2Vob2xkZXIsIHNhbWUgYXMgZWFzeVxuICAgIGlmICh0aGlzLmRpZmZpY3VsdHkgPT09ICdOb3JtYWwnKSB7XG4gICAgICBjb25zdCBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlcyA9IHBsYXllci5ib2FyZC5hbGxVbmhpdENvb3JkaW5hdGVzKCk7XG4gICAgICByZXR1cm4gYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXNbXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzLmxlbmd0aClcbiAgICAgIF07XG4gICAgfVxuICAgIGlmICh0aGlzLmRpZmZpY3VsdHkgPT09ICdDaGVhdCcpIHtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLmFsbFNoaXBDb29yZGluYXRlcygpO1xuICAgICAgcmV0dXJuIGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzW1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlcy5sZW5ndGgpXG4gICAgICBdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBhcnJhbmdlU2hpcHNPbkJvYXJkKGRhdGEpIHtcbiAgICBjb25zdCBjdXJyZW50QUlTaGlwcyA9IFtdO1xuICAgIGNvbnN0IGltYWdpbmFyeUJvYXJkID0gW107XG5cbiAgICBkYXRhLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBsZXQgaG9yaXpvbnRhbCA9IEJvb2xlYW4oTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSk7XG4gICAgICBsZXQgc3RhcnQgPSBob3Jpem9udGFsXG4gICAgICAgID8geCAtIE1hdGguZmxvb3Ioc2hpcC5sZW5ndGggLyAyKVxuICAgICAgICA6IHkgLSBNYXRoLmZsb29yKHNoaXAubGVuZ3RoIC8gMik7XG4gICAgICBsZXQgZW5kID0gc3RhcnQgKyBzaGlwLmxlbmd0aCAtIDE7XG5cbiAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBhcnJheSA9IGhvcml6b250YWwgPyBbaSwgeV0gOiBbeCwgaV07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpbWFnaW5hcnlCb2FyZC5zb21lKChjZWxsKSA9PiBjZWxsWzBdID09PSBhcnJheVswXSAmJiBjZWxsWzFdID09PSBhcnJheVsxXSlcbiAgICAgICAgICAgIHx8IHN0YXJ0IDwgMFxuICAgICAgICAgICAgfHwgZW5kID4gOVxuICAgICAgICApIHtcbiAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgaG9yaXpvbnRhbCA9IEJvb2xlYW4oTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSk7XG4gICAgICAgICAgc3RhcnQgPSBob3Jpem9udGFsXG4gICAgICAgICAgICA/IHggLSBNYXRoLmZsb29yKHNoaXAubGVuZ3RoIC8gMilcbiAgICAgICAgICAgIDogeSAtIE1hdGguZmxvb3Ioc2hpcC5sZW5ndGggLyAyKTtcbiAgICAgICAgICBlbmQgPSBzdGFydCArIHNoaXAubGVuZ3RoIC0gMTtcbiAgICAgICAgICBpID0gc3RhcnQ7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gaG9yaXpvbnRhbCA/IFtpLCB5XSA6IFt4LCBpXTtcbiAgICAgICAgaW1hZ2luYXJ5Qm9hcmQucHVzaChhcnJheSk7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRBSVNoaXBzLnB1c2goe1xuICAgICAgICB0eXBlOiBzaGlwLnR5cGUsXG4gICAgICAgIGxlbmd0aDogc2hpcC5sZW5ndGgsXG4gICAgICAgIGluc2VydENvb3JkaW5hdGVzOiBbeCwgeV0sXG4gICAgICAgIGhvcml6b250YWwsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjdXJyZW50QUlTaGlwcztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSA9ICdQbGF5ZXInKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmJvYXJkID0gbnVsbDtcbiAgfVxuXG4gIGFzc2lnbkJvYXJkKGdhbWVCb2FyZCkge1xuICAgIHRoaXMuYm9hcmQgPSBnYW1lQm9hcmQ7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgsIHR5cGUpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMuaGFzUG9zaXRpb25lZCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzU3VuayA9IGZhbHNlO1xuICAgIHRoaXMuanVzdFN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuYm93Q29vcmRpbmF0ZXMgPSBudWxsO1xuICAgIHRoaXMuaXNIb3Jpem9udGFsID0gbnVsbDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IHRoaXMuaGl0cykgdGhpcy5pc1N1bmsoKTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICB0aGlzLmhhc1N1bmsgPSB0cnVlO1xuICAgIHRoaXMuanVzdFN1bmsgPSB0cnVlO1xuICB9XG5cbiAgcmVzZXRKdXN0U3VuaygpIHtcbiAgICB0aGlzLmp1c3RTdW5rID0gZmFsc2U7XG4gIH1cblxuICBpc1Bvc2l0aW9uZWQoYm93Q29vcmRpbmF0ZXMsIGlzSG9yaXpvbnRhbCkge1xuICAgIHRoaXMuaGFzUG9zaXRpb25lZCA9IHRydWU7XG4gICAgdGhpcy5ib3dDb29yZGluYXRlcyA9IGJvd0Nvb3JkaW5hdGVzO1xuICAgIHRoaXMuaXNIb3Jpem9udGFsID0gaXNIb3Jpem9udGFsO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJjb250cm9sbGVyRE9NXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHBsYXllcnMsIGdlbmVyYXRlUGxheWVycywgcGxhY2VQbGF5ZXJTaGlwcyB9IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgQUkgZnJvbSAnLi9wbGF5ZXIvYWknO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci9wbGF5ZXInO1xuaW1wb3J0IHNwcml0ZUJhdHRsZXNoaXAgZnJvbSAnLi4vYXNzZXRzL3NoaXBCYXR0bGVzaGlwLnBuZyc7XG5pbXBvcnQgc3ByaXRlQ2FycmllciBmcm9tICcuLi9hc3NldHMvc2hpcENhcnJpZXIucG5nJztcbmltcG9ydCBzcHJpdGVDcnVpc2VyIGZyb20gJy4uL2Fzc2V0cy9zaGlwQ3J1aXNlci5wbmcnO1xuaW1wb3J0IHNwcml0ZURlc3Ryb3llciBmcm9tICcuLi9hc3NldHMvc2hpcERlc3Ryb3llci5wbmcnO1xuaW1wb3J0IHNwcml0ZVN1Ym1hcmluZSBmcm9tICcuLi9hc3NldHMvc2hpcFN1Ym1hcmluZS5wbmcnO1xuaW1wb3J0IHNwcml0ZUZpcmUgZnJvbSAnLi4vYXNzZXRzL2ZpcmUuZ2lmJztcbmltcG9ydCBzcHJpdGVFeHBsb3Npb24gZnJvbSAnLi4vYXNzZXRzL2V4cGxvc2lvbi5naWYnO1xuXG5sZXQgYXVkaW9Wb2x1bWUgPSAxO1xuXG5jb25zdCBjaGFuZ2VBdWRpb1ZvbHVtZSA9ICh2YWx1ZSkgPT4ge1xuICBhdWRpb1ZvbHVtZSA9IHZhbHVlO1xuICBjb25zdCBhdWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhdWRpbycpO1xuICBhdWRpb3MuZm9yRWFjaCgoYXVkaW8pID0+IGF1ZGlvLnZvbHVtZSA9IHZhbHVlKTtcbn07XG5cbmNvbnN0IHBsYXlNZW51Q2xpY2tTRlggPSAoKSA9PiB7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NmeE1lbnUnKTtcbiAgYXVkaW8udm9sdW1lID0gYXVkaW9Wb2x1bWU7XG4gIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgYXVkaW8ucGxheSgpO1xufTtcblxuY29uc3QgcGxheUZpcmVTRlggPSAoKSA9PiB7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NmeEZpcmUnKTtcbiAgYXVkaW8udm9sdW1lID0gYXVkaW9Wb2x1bWU7XG4gIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgYXVkaW8ucGxheSgpO1xufTtcblxuY29uc3Qgc3RvcEFsbEJHTSA9ICgpID0+IHtcbiAgc3RvcE1lbnVCR00oKTtcbiAgc3RvcFZpY3RvcnlCR00oKTtcbiAgc3RvcEdhbWVCR00oKTtcbn07XG5cbmNvbnN0IHBsYXlNZW51QkdNID0gKCkgPT4ge1xuICBzdG9wVmljdG9yeUJHTSgpO1xuICBzdG9wR2FtZUJHTSgpO1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZ21NZW51Jyk7XG4gIGF1ZGlvLnZvbHVtZSA9IGF1ZGlvVm9sdW1lO1xuICBhdWRpby5wbGF5KCk7XG59O1xuXG5jb25zdCBzdG9wTWVudUJHTSA9ICgpID0+IHtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmdtTWVudScpO1xuICBhdWRpby5wYXVzZSgpO1xuICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG59O1xuXG5jb25zdCBwbGF5VmljdG9yeUJHTSA9ICgpID0+IHtcbiAgc3RvcE1lbnVCR00oKTtcbiAgc3RvcEdhbWVCR00oKTtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmdtVmljdG9yeScpO1xuICBhdWRpby52b2x1bWUgPSBhdWRpb1ZvbHVtZTtcbiAgYXVkaW8ucGxheSgpO1xufTtcblxuY29uc3Qgc3RvcFZpY3RvcnlCR00gPSAoKSA9PiB7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnbVZpY3RvcnknKTtcbiAgYXVkaW8ucGF1c2UoKTtcbiAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xufTtcblxuY29uc3QgcGxheUdhbWVCR00gPSAoKSA9PiB7XG4gIHN0b3BNZW51QkdNKCk7XG4gIHN0b3BWaWN0b3J5QkdNKCk7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnbUdhbWUnKTtcbiAgYXVkaW8udm9sdW1lID0gYXVkaW9Wb2x1bWU7XG4gIGF1ZGlvLnBsYXkoKTtcbn07XG5cbmNvbnN0IHN0b3BHYW1lQkdNID0gKCkgPT4ge1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZ21HYW1lJyk7XG4gIGF1ZGlvLnBhdXNlKCk7XG4gIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbn07XG5cbmNvbnN0IHNoaXBzRGF0YSA9IFtcbiAge1xuICAgIHR5cGU6ICdDYXJyaWVyJyxcbiAgICBsZW5ndGg6IDUsXG4gICAgc3JjOiBzcHJpdGVDYXJyaWVyLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ0JhdHRsZXNoaXAnLFxuICAgIGxlbmd0aDogNCxcbiAgICBzcmM6IHNwcml0ZUJhdHRsZXNoaXAsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ3J1aXNlcicsXG4gICAgbGVuZ3RoOiAzLFxuICAgIHNyYzogc3ByaXRlQ3J1aXNlcixcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdTdWJtYXJpbmUnLFxuICAgIGxlbmd0aDogMyxcbiAgICBzcmM6IHNwcml0ZVN1Ym1hcmluZSxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdEZXN0cm95ZXInLFxuICAgIGxlbmd0aDogMixcbiAgICBzcmM6IHNwcml0ZURlc3Ryb3llcixcbiAgfSxcbl07XG5cbmxldCBjdXJyZW50UGxheWVyO1xubGV0IHRhcmdldFBsYXllcjtcblxuY29uc3Qgc3dpdGNoUGxheWVycyA9ICgpID0+IHtcbiAgY3VycmVudFBsYXllciA9IGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcnNbMF0gPyBwbGF5ZXJzWzFdIDogcGxheWVyc1swXTtcbiAgdGFyZ2V0UGxheWVyID0gdGFyZ2V0UGxheWVyID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF07XG59O1xuXG5jb25zdCBsb3NlRm9jdXNGcm9tR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XG4gIGdhbWUuY2xhc3NMaXN0LmFkZCgnbG9zZS1mb2N1cycpO1xufTtcblxuY29uc3QgcmV0dXJuRm9jdXNUb0dhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuICBnYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2xvc2UtZm9jdXMnKTtcbiAgZ2FtZS5jbGFzc0xpc3QuYWRkKCdyZXR1cm4tZm9jdXMnKTtcbiAgZ2FtZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgZ2FtZS5jbGFzc0xpc3QucmVtb3ZlKCdyZXR1cm4tZm9jdXMnKTtcbiAgfSwgeyBvbmNlOiB0cnVlIH0pO1xufTtcblxuY29uc3QgaGlkZURpYWxvZyA9ICgpID0+IHtcbiAgcGxheU1lbnVDbGlja1NGWCgpO1xuICBjb25zdCBkaWFsb2dPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZy1vdmVybGF5Jyk7XG4gIGRpYWxvZ092ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcbiAgZGlhbG9nT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgZGlhbG9nT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLW91dCcpO1xuICAgIGRpYWxvZ092ZXJsYXkucmVtb3ZlKCk7XG4gIH0sIHsgb25jZTogdHJ1ZSB9KTtcbn07XG5cbmNvbnN0IHNob3dXaW5uZXJEaWFsb2cgPSAoKSA9PiB7XG4gIGNvbnN0IHNpdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1jb250YWluZXInKTtcblxuICBjb25zdCBkaWFsb2dPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpYWxvZ092ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLW92ZXJsYXknKTtcblxuICBjb25zdCBkaWFsb2dCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlhbG9nQm94LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZycpO1xuXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMS5jbGFzc0xpc3QuYWRkKCdzdWInLCAndGV4dCcpO1xuICBwMS50ZXh0Q29udGVudCA9IGN1cnJlbnRQbGF5ZXIgaW5zdGFuY2VvZiBBSVxuICAgID8gJ0FsbCB5b3VyIHNoaXBzIGhhdmUgYmVlbiBkZXN0cm95ZWQuJ1xuICAgIDogJ0FsbCBlbmVteSBzaGlwcyBoYXZlIGJlZW4gZGVzdHJveWVkLic7XG5cbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAyLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFBsYXllci5uYW1lfSB3aW5zIWA7XG4gIHAyLmNsYXNzTGlzdC5hZGQoJ21haW4nLCAndGV4dCcpO1xuXG4gIGNvbnN0IGJ0blBsYXlBZ2FpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5QbGF5QWdhaW4uY2xhc3NMaXN0LmFkZCgncGxheScsICdidXR0b24nKTtcbiAgYnRuUGxheUFnYWluLnRleHRDb250ZW50ID0gJ1BsYXkgQWdhaW4nO1xuICBidG5QbGF5QWdhaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0R2FtZSk7XG5cbiAgY29uc3QgYnRuTWVudVJldHVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5NZW51UmV0dXJuLmNsYXNzTGlzdC5hZGQoJ21lbnUnLCAnYnV0dG9uJyk7XG4gIGJ0bk1lbnVSZXR1cm4udGV4dENvbnRlbnQgPSAnUmV0dXJuIHRvIE1lbnUnO1xuICBidG5NZW51UmV0dXJuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV0dXJuVG9NZW51KTtcblxuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQocDEpO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQocDIpO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQoYnRuUGxheUFnYWluKTtcbiAgZGlhbG9nQm94LmFwcGVuZENoaWxkKGJ0bk1lbnVSZXR1cm4pO1xuICBkaWFsb2dPdmVybGF5LmFwcGVuZENoaWxkKGRpYWxvZ0JveCk7XG4gIHNpdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlhbG9nT3ZlcmxheSk7XG59O1xuXG5jb25zdCBjaGVja1dpbm5pbmdDb25kaXRpb24gPSAoKSA9PiB7XG4gIGlmICghdGFyZ2V0UGxheWVyLmJvYXJkLmlzRmxlZXRPcGVyYXRpb25hbCgpKSB7XG4gICAgcGxheVZpY3RvcnlCR00oKTtcbiAgICBsb3NlRm9jdXNGcm9tR2FtZSgpO1xuICAgIHNob3dXaW5uZXJEaWFsb2coKTtcbiAgICBoaWRlUGxheWVySFAoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzZWxlY3RTaGlwT2JqZWN0ID0gKHBsYXllciwgY2VsbCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRTaGlwXSA9IHBsYXllclxuICAgIC5ib2FyZFxuICAgIC5mbGVldFxuICAgIC5maWx0ZXIoKHNoaXApID0+IHNoaXAudHlwZSA9PT0gY2VsbC5kYXRhc2V0LnNoaXApO1xuICByZXR1cm4gc2VsZWN0ZWRTaGlwO1xufTtcblxuY29uc3QgaWZTdW5rRXhwbG9zaW9uID0gKGNlbGwpID0+IHtcbiAgY29uc3QgZXhwbG9kaW5nQ2VsbCA9IGNlbGw7XG4gIGlmIChleHBsb2RpbmdDZWxsLmRhdGFzZXQuc2hpcCkge1xuICAgIGNvbnN0IGV4cGxvZGluZ0NlbGxQbGF5ZXIgPSBwbGF5ZXJzLmZpbmQoKHBsYXllcikgPT4gcGxheWVyLm5hbWUgPT09IGNlbGwuZGF0YXNldC5wbGF5ZXJOYW1lKTtcbiAgICBjb25zdCBleHBsb2RpbmdTaGlwID0gc2VsZWN0U2hpcE9iamVjdChleHBsb2RpbmdDZWxsUGxheWVyLCBleHBsb2RpbmdDZWxsKTtcbiAgICBpZiAoZXhwbG9kaW5nU2hpcC5oYXNTdW5rKSB7XG4gICAgICBjb25zdCBhcnJheSA9IFtcbiAgICAgICAgW1xuICAgICAgICAgICtleHBsb2RpbmdDZWxsLmRhdGFzZXQueCArIDEsXG4gICAgICAgICAgK2V4cGxvZGluZ0NlbGwuZGF0YXNldC55LFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgK2V4cGxvZGluZ0NlbGwuZGF0YXNldC54IC0gMSxcbiAgICAgICAgICArZXhwbG9kaW5nQ2VsbC5kYXRhc2V0LnksXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICArZXhwbG9kaW5nQ2VsbC5kYXRhc2V0LngsXG4gICAgICAgICAgK2V4cGxvZGluZ0NlbGwuZGF0YXNldC55ICsgMSxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICtleHBsb2RpbmdDZWxsLmRhdGFzZXQueCxcbiAgICAgICAgICArZXhwbG9kaW5nQ2VsbC5kYXRhc2V0LnkgLSAxLFxuICAgICAgICBdLFxuICAgICAgXTtcbiAgICAgIGV4cGxvZGluZ0NlbGwuZGF0YXNldC5zaGlwID0gJyc7XG4gICAgICBleHBsb2RpbmdDZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcblxuICAgICAgYXJyYXkuZm9yRWFjaCgoW3gsIHldKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdW2RhdGEtcGxheWVyLW5hbWU9XCIke2V4cGxvZGluZ0NlbGxQbGF5ZXIubmFtZX1cIl1bZGF0YS1zaGlwPVwiJHtleHBsb2RpbmdTaGlwLnR5cGV9XCJdYCk7XG4gICAgICAgIGlmIChuZXh0Q2VsbCkgaGl0RXhwbG9zaW9uRWZmZWN0KG5leHRDZWxsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgaGl0RXhwbG9zaW9uRWZmZWN0ID0gYXN5bmMgKGNlbGwpID0+IHtcbiAgaWZTdW5rRXhwbG9zaW9uKGNlbGwpO1xuXG4gIGNvbnN0IGV4cGxvc2lvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBleHBsb3Npb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZXhwbG9zaW9uLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGV4cGxvc2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBleHBsb3Npb24uc3JjID0gYCR7c3ByaXRlRXhwbG9zaW9ufT9yYW5kPSR7TWF0aC5yYW5kb20oKX1gO1xuICBleHBsb3Npb24uY2xhc3NMaXN0LmFkZCgnZXhwbG9zaW9uJyk7XG5cbiAgY29uc3QgZXhwbG9zaW9uU2NhbGUgPSAxLjUgKiAocGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoY2VsbCkud2lkdGgsIDEwKSAvIDYwKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWV4cGxvc2lvbi1zY2FsZScsIGV4cGxvc2lvblNjYWxlKTtcblxuICBleHBsb3Npb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZXhwbG9zaW9uKTtcbiAgY2VsbC5hcHBlbmRDaGlsZChleHBsb3Npb25Db250YWluZXIpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNlbGwucmVtb3ZlQ2hpbGQoZXhwbG9zaW9uQ29udGFpbmVyKTtcbiAgfSwgNTAwMCk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSwgNTAwKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRGaXJlRWZmZWN0ID0gKHRhcmdldENlbGwpID0+IHtcbiAgY29uc3QgZmlyZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmaXJlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZpcmUtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgZmlyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBmaXJlLnNyYyA9IGAke3Nwcml0ZUZpcmV9P3JhbmQ9JHtNYXRoLnJhbmRvbSgpfWA7XG4gIGZpcmUuY2xhc3NMaXN0LmFkZCgnZmlyZScpO1xuXG4gIGZpcmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlyZSk7XG4gIHRhcmdldENlbGwuYXBwZW5kQ2hpbGQoZmlyZUNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBhZGRNaXNzTWFyayA9ICh0YXJnZXRDZWxsKSA9PiB7XG4gIGNvbnN0IG1hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgdGFyZ2V0Q2VsbC5hcHBlbmRDaGlsZChtYXJrKTtcbiAgbWFyay5vdXRlckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5taXNzPC90aXRsZT48cGF0aCBkPVwiTTE5LDYuNDFMMTcuNTksNUwxMiwxMC41OUw2LjQxLDVMNSw2LjQxTDEwLjU5LDEyTDUsMTcuNTlMNi40MSwxOUwxMiwxMy40MUwxNy41OSwxOUwxOSwxNy41OUwxMy40MSwxMkwxOSw2LjQxWlwiIC8+PC9zdmc+Jztcbn07XG5cbmNvbnN0IHVwZGF0ZUhQID0gKCkgPT4ge1xuICBsZXQgdGFnO1xuICBpZiAocGxheWVycy5zb21lKChwbGF5ZXIpID0+IHBsYXllciBpbnN0YW5jZW9mIEFJKSkge1xuICAgIHRhZyA9IHRhcmdldFBsYXllciA9PT0gcGxheWVyc1swXVxuICAgICAgPyAnY3VycmVudCdcbiAgICAgIDogJ2VuZW15JztcbiAgfSBlbHNlIHtcbiAgICB0YWcgPSAnZW5lbXknO1xuICB9XG4gIGNvbnN0IHRvdGFsSFAgPSB0YXJnZXRQbGF5ZXJcbiAgICAuYm9hcmRcbiAgICAuZmxlZXRcbiAgICAucmVkdWNlKCh0b3RhbCwgc2hpcCkgPT4gdG90YWwgKyBzaGlwLmxlbmd0aCwgMCk7XG4gIGNvbnN0IGN1cnJlbnRIUCA9IHRhcmdldFBsYXllclxuICAgIC5ib2FyZFxuICAgIC5mbGVldFxuICAgIC5yZWR1Y2UoKHRvdGFsLCBzaGlwKSA9PiB0b3RhbCAtIHNoaXAuaGl0cywgdG90YWxIUCk7XG4gIGNvbnN0IGhlYWx0aCA9IGAke01hdGgucm91bmQoKGN1cnJlbnRIUCAvIHRvdGFsSFApICogMTAwKX0lYDtcbiAgY29uc3QgaGl0ID0gYCR7TWF0aC5yb3VuZCgoMSAvIHRvdGFsSFApICogMTAwKX0lYDtcbiAgY29uc3QgZW1wdHkgPSBgJHtNYXRoLnJvdW5kKCgxIC0gY3VycmVudEhQIC8gdG90YWxIUCkgKiAxMDApfSVgO1xuXG4gIGNvbnN0IHBsYXllckhlYWx0aFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YWd9IC5oZWFsdGggPiAudGV4dCBgKTtcbiAgcGxheWVySGVhbHRoVGV4dC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRIUH0vJHt0b3RhbEhQfWA7XG5cbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7dGFnfS1oZWFsdGhgLCBoZWFsdGgpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHt0YWd9LWhpdGAsIGhpdCk7XG5cbiAgY29uc3QgcGxheWVySGVhbHRoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFnfSAuaGVhbHRoID4gLmJhciBgKTtcbiAgcGxheWVySGVhbHRoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7dGFnfS1oaXRgLCAnMCUnKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHt0YWd9LWVtcHR5YCwgZW1wdHkpO1xuICB9LCB7IG9uY2U6IHRydWUgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVCb2FyZCA9IGFzeW5jIChbeCwgeV0pID0+IHtcbiAgY29uc3QgdGFyZ2V0Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXVtkYXRhLXBsYXllci1uYW1lPVwiJHt0YXJnZXRQbGF5ZXIubmFtZX1cIl1gKTtcbiAgaWYgKHRhcmdldFBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXApIHtcbiAgICBjb25zdCB0YXJnZXRTaGlwID0gc2VsZWN0U2hpcE9iamVjdCh0YXJnZXRQbGF5ZXIsIHRhcmdldENlbGwpO1xuICAgIGlmICh0YXJnZXRTaGlwLmhhc1N1bmspIHtcbiAgICAgIHByaW50U2lua2luZ1Nwcml0ZSh0YXJnZXRTaGlwKTtcbiAgICB9XG4gIH1cbiAgYXdhaXQgaGl0RXhwbG9zaW9uRWZmZWN0KHRhcmdldENlbGwpO1xuICBpZiAodGFyZ2V0UGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcCkge1xuICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgaWYgKHRhcmdldENlbGwuZGF0YXNldC5zaGlwKSBhZGRGaXJlRWZmZWN0KHRhcmdldENlbGwpO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgIGFkZE1pc3NNYXJrKHRhcmdldENlbGwpO1xuICB9XG59O1xuXG5jb25zdCBzaG93SW5wdXRCbG9ja2VyID0gKCkgPT4ge1xuICBjb25zdCBibG9ja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJsb2NrZXIuY2xhc3NMaXN0LmFkZCgnYmxvY2tlcicpO1xuXG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuICBnYW1lLmFwcGVuZENoaWxkKGJsb2NrZXIpO1xufTtcblxuY29uc3QgaGlkZUlucHV0QmxvY2tlciA9ICgpID0+IHtcbiAgY29uc3QgYmxvY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9ja2VyJyk7XG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuICBnYW1lLnJlbW92ZUNoaWxkKGJsb2NrZXIpO1xufTtcblxuY29uc3Qgc3RhcnRUdXJuID0gKCkgPT4ge1xuICBjbGVhckdhbWVDb250YWluZXIoKTtcbiAgaW5pdGlhbGl6ZUdhbWUoKTtcbn07XG5cbmNvbnN0IHNob3dQbGF5ZXJXYWl0U2NyZWVuID0gKCkgPT4ge1xuICBjb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcblxuICBjb25zdCBwbGF5ZXJXYWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBsYXllcldhaXQuY2xhc3NMaXN0LmFkZCgncGxheWVyLXdhaXQnKTtcbiAgcGxheWVyV2FpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0VHVybik7XG5cbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi50ZXh0Q29udGVudCA9IGN1cnJlbnRQbGF5ZXIubmFtZTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLnRleHRDb250ZW50ID0gJ1ByZXNzIGFueXdoZXJlIHRvIHN0YXJ0IHlvdXIgdHVybi4nO1xuXG4gIHBsYXllcldhaXQuYXBwZW5kQ2hpbGQoaDIpO1xuICBwbGF5ZXJXYWl0LmFwcGVuZENoaWxkKHApO1xuICBnYW1lLmFwcGVuZENoaWxkKHBsYXllcldhaXQpO1xufTtcblxuY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gIHdpbmRvdy5zY3JvbGwoe1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgfSk7XG59O1xuXG5jb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcbiAgd2luZG93LnNjcm9sbCh7XG4gICAgdG9wOiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCxcbiAgICBsZWZ0OiAwLFxuICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgfSk7XG59O1xuXG5sZXQgcHJldmlvdXNIaXRDZWxsID0gWy0xLCAtMV07XG5cbmNvbnN0IHByb2Nlc3NIaXQgPSBhc3luYyAoW3gsIHldKSA9PiB7XG4gIHRhcmdldFBsYXllclxuICAgIC5ib2FyZFxuICAgIC5yZWNlaXZlQXR0YWNrKFxuICAgICAgW3gsIHldLFxuICAgICk7XG4gIHByZXZpb3VzSGl0Q2VsbCA9IFsreCwgK3ldO1xuICBzaG93SW5wdXRCbG9ja2VyKCk7XG4gIGF3YWl0IHVwZGF0ZUJvYXJkKFt4LCB5XSk7XG4gIGlmICh0YXJnZXRQbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5zaGlwKSB1cGRhdGVIUCgpO1xuICBpZiAoY2hlY2tXaW5uaW5nQ29uZGl0aW9uKCkpIHJldHVybjtcblxuICBzd2l0Y2hQbGF5ZXJzKCk7XG4gIGlmIChjdXJyZW50UGxheWVyIGluc3RhbmNlb2YgQUkpIHtcbiAgICBoaXRDZWxsQUkoKTtcbiAgfSBlbHNlIGlmICghKHRhcmdldFBsYXllciBpbnN0YW5jZW9mIEFJKSkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgMjUwMCk7XG4gICAgfSk7XG4gICAgY2xlYXJHYW1lQ29udGFpbmVyKCk7XG4gICAgc2hvd1BsYXllcldhaXRTY3JlZW4oKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNjcm9sbFRvQm90dG9tKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbiAgaWYgKHBsYXllcnMuc29tZSgocGxheWVyKSA9PiAocGxheWVyIGluc3RhbmNlb2YgQUkpKSkgaGlkZUlucHV0QmxvY2tlcigpO1xufTtcblxuY29uc3QgaGl0Q2VsbEFJID0gKCkgPT4ge1xuICBwbGF5RmlyZVNGWCgpO1xuICBjb25zdCBbeCwgeV0gPSBjdXJyZW50UGxheWVyLmNob29zZUF0dGFja0Nvb3JkaW5hdGVzKHRhcmdldFBsYXllcik7XG4gIHNjcm9sbFRvVG9wKCk7XG4gIHByb2Nlc3NIaXQoW3gsIHldKTtcbn07XG5cbmNvbnN0IGhpdENlbGxQbGF5ZXIgPSAoZSkgPT4ge1xuICBwbGF5RmlyZVNGWCgpO1xuICBjb25zdCBjZWxsID0gZS5jdXJyZW50VGFyZ2V0O1xuICBjb25zdCB7IHggfSA9IGNlbGwuZGF0YXNldDtcbiAgY29uc3QgeyB5IH0gPSBjZWxsLmRhdGFzZXQ7XG4gIGlmIChcbiAgICBjZWxsLmRhdGFzZXQucGxheWVyTmFtZSA9PT0gdGFyZ2V0UGxheWVyLm5hbWVcbiAgICAmJiAhdGFyZ2V0UGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uaXNIaXRcbiAgKSB7XG4gICAgcHJvY2Vzc0hpdChbeCwgeV0pO1xuICB9XG59O1xuXG5jb25zdCBwcmludFNpbmtpbmdTcHJpdGUgPSAoc2hpcCkgPT4ge1xuICBjb25zdCB7IHgsIHkgfSA9IHNoaXAuYm93Q29vcmRpbmF0ZXM7XG4gIGNvbnN0IHNoaXBQbGF5ZXIgPSBwbGF5ZXJzLmZpbmQoKHBsYXllcikgPT4gcGxheWVyLmJvYXJkLmdldEZsZWV0KCkuaW5jbHVkZXMoc2hpcCkpO1xuICBjb25zdCBib3dDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdW2RhdGEtcGxheWVyLW5hbWU9XCIke3NoaXBQbGF5ZXIubmFtZX1cIl1gKTtcbiAgY29uc3QgYm93Q2VsbENoaWxkcmVuID0gQXJyYXkuZnJvbShib3dDZWxsLmNoaWxkTm9kZXMpO1xuICBpZiAoYm93Q2VsbENoaWxkcmVuLnNvbWUoKGNoaWxkKSA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nwcml0ZS1jb250YWluZXInKSkpIHJldHVybjtcbiAgYm93Q2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLWJvdycpO1xuXG4gIGNvbnN0IHNwcml0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzcHJpdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ByaXRlLWNvbnRhaW5lcicpO1xuICBpZiAoc2hpcC5pc0hvcml6b250YWwpIHNwcml0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG5cbiAgY29uc3Qgc2hpcFNwcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzaGlwU3ByaXRlLnNyYyA9IHNoaXBzRGF0YS5maW5kKChzaGlwRGF0YSkgPT4gc2hpcERhdGEudHlwZSA9PT0gc2hpcC50eXBlKS5zcmM7XG4gIHNoaXBTcHJpdGUuY2xhc3NMaXN0LmFkZCgnc3ByaXRlJyk7XG5cbiAgY29uc3Qgc3ByaXRlU2NhbGUgPSAwLjM1ICogKHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJvd0NlbGwpLndpZHRoLCAxMCkgLyA2MCk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zcHJpdGUtc2NhbGUnLCBzcHJpdGVTY2FsZSk7XG5cbiAgc3ByaXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBTcHJpdGUpO1xuICBib3dDZWxsLmFwcGVuZENoaWxkKHNwcml0ZUNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBwcmludFNwcml0ZXMgPSAoKSA9PiB7XG4gIGN1cnJlbnRQbGF5ZXIuYm9hcmQuZ2V0RmxlZXQoKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgaWYgKCFzaGlwLmhhc1N1bmspIHtcbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gc2hpcC5ib3dDb29yZGluYXRlcztcbiAgICAgIGNvbnN0IGJvd0NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1bZGF0YS1wbGF5ZXItbmFtZT1cIiR7Y3VycmVudFBsYXllci5uYW1lfVwiXWApO1xuICAgICAgYm93Q2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLWJvdycpO1xuXG4gICAgICBjb25zdCBzcHJpdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNwcml0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzcHJpdGUtY29udGFpbmVyJyk7XG4gICAgICBpZiAoc2hpcC5pc0hvcml6b250YWwpIHNwcml0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG5cbiAgICAgIGNvbnN0IHNoaXBTcHJpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHNoaXBTcHJpdGUuc3JjID0gc2hpcHNEYXRhLmZpbmQoKHNoaXBEYXRhKSA9PiBzaGlwRGF0YS50eXBlID09PSBzaGlwLnR5cGUpLnNyYztcbiAgICAgIHNoaXBTcHJpdGUuY2xhc3NMaXN0LmFkZCgnc3ByaXRlJyk7XG5cbiAgICAgIGNvbnN0IHNwcml0ZVNjYWxlID0gMC4zNSAqIChwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib3dDZWxsKS53aWR0aCwgMTApIC8gNjApO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXNwcml0ZS1zY2FsZScsIHNwcml0ZVNjYWxlKTtcblxuICAgICAgc3ByaXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBTcHJpdGUpO1xuICAgICAgYm93Q2VsbC5hcHBlbmRDaGlsZChzcHJpdGVDb250YWluZXIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCByZXNpemVTcHJpdGVzID0gKCkgPT4ge1xuICBjb25zdCBib3dDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNlbGwnKTtcbiAgY29uc3Qgc3ByaXRlU2NhbGUgPSAwLjM1ICogKHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJvd0NlbGwpLndpZHRoLCAxMCkgLyA2MCk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zcHJpdGUtc2NhbGUnLCBzcHJpdGVTY2FsZSk7XG59O1xuXG5jb25zdCByZXN1bWVHYW1lID0gKCkgPT4ge1xuICByZXR1cm5Gb2N1c1RvR2FtZSgpO1xuICBoaWRlRGlhbG9nKCk7XG4gIHVuaGlkZVBsYXllckhQKCk7XG59O1xuXG5jb25zdCByZXN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgcmV0dXJuRm9jdXNUb0dhbWUoKTtcbiAgaGlkZURpYWxvZygpO1xuICBjbGVhckdhbWVDb250YWluZXIoKTtcbiAgZ2VuZXJhdGVQbGF5ZXJzKFxuICAgIFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2h1bWFuJyxcbiAgICAgICAgbmFtZTogcGxheWVyc1swXS5uYW1lLFxuICAgICAgfSxcbiAgICAgIHBsYXllcnNbMV0gaW5zdGFuY2VvZiBBSVxuICAgICAgICA/IHtcbiAgICAgICAgICB0eXBlOiAnQUknLFxuICAgICAgICAgIGRpZmZpY3VsdHk6IHBsYXllcnNbMV0uZGlmZmljdWx0eSxcbiAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICB0eXBlOiAnaHVtYW4nLFxuICAgICAgICAgIG5hbWU6IHBsYXllcnNbMV0ubmFtZSxcbiAgICAgICAgfSxcbiAgICBdLFxuICApO1xuICBbY3VycmVudFBsYXllciwgdGFyZ2V0UGxheWVyXSA9IHBsYXllcnM7XG4gIGluaXRpYWxpemVHYW1lQ29udGFpbmVyKCk7XG4gIGluaXRpYWxpemVTaGlwUGxhY2VtZW50U2NyZWVuKCk7XG59O1xuXG5jb25zdCByZXR1cm5Ub01lbnUgPSAoKSA9PiB7XG4gIHN0b3BBbGxCR00oKTtcbiAgcmV0dXJuRm9jdXNUb0dhbWUoKTtcbiAgaGlkZURpYWxvZygpO1xuICBjbGVhckdhbWVDb250YWluZXIoKTtcbiAgaW5pdGlhbGl6ZU1haW5NZW51KCk7XG59O1xuXG5jb25zdCBzaG93UGF1c2VNZW51ID0gKCkgPT4ge1xuICBjb25zdCBzaXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgZGlhbG9nT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaWFsb2dPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1vdmVybGF5Jyk7XG5cbiAgY29uc3QgZGlhbG9nQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpYWxvZ0JveC5jbGFzc0xpc3QuYWRkKCdkaWFsb2cnKTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLnRleHRDb250ZW50ID0gJ0dhbWUgcGF1c2VkJztcbiAgcC5jbGFzc0xpc3QuYWRkKCdtYWluJywgJ3RleHQnKTtcblxuICBjb25zdCBidG5SZXN1bWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuUmVzdW1lLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICBidG5SZXN1bWUudGV4dENvbnRlbnQgPSAnUmVzdW1lJztcbiAgYnRuUmVzdW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzdW1lR2FtZSwgeyBvbmNlOiB0cnVlIH0pO1xuXG4gIGNvbnN0IGJ0blJlc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuUmVzdGFydC5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgYnRuUmVzdGFydC50ZXh0Q29udGVudCA9ICdSZXN0YXJ0JztcbiAgYnRuUmVzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc3RhcnRHYW1lLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgY29uc3QgYnRuTWVudVJldHVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5NZW51UmV0dXJuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICBidG5NZW51UmV0dXJuLnRleHRDb250ZW50ID0gJ1JldHVybiB0byBNZW51JztcbiAgYnRuTWVudVJldHVybi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJldHVyblRvTWVudSwgeyBvbmNlOiB0cnVlIH0pO1xuXG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChwKTtcbiAgZGlhbG9nQm94LmFwcGVuZENoaWxkKGJ0blJlc3VtZSk7XG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChidG5SZXN0YXJ0KTtcbiAgZGlhbG9nQm94LmFwcGVuZENoaWxkKGJ0bk1lbnVSZXR1cm4pO1xuICBkaWFsb2dPdmVybGF5LmFwcGVuZENoaWxkKGRpYWxvZ0JveCk7XG4gIHNpdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlhbG9nT3ZlcmxheSk7XG59O1xuXG5jb25zdCBjbGlja1BhdXNlTWVudSA9ICgpID0+IHtcbiAgcGxheU1lbnVDbGlja1NGWCgpO1xuICBsb3NlRm9jdXNGcm9tR2FtZSgpO1xuICBoaWRlUGxheWVySFAoKTtcbiAgc2hvd1BhdXNlTWVudSgpO1xufTtcblxuY29uc3QgY2xpY2tQbGFjZW1lbnRTaGlwID0gKGUpID0+IHtcbiAgY29uc3QgeyBzaGlwIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvckFsbChgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwfVwiYClcbiAgICAuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgfSk7XG4gIGUuY3VycmVudFRhcmdldC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xufTtcblxuY29uc3QgdW5jbGlja1NoaXBQbGFjZW1lbnQgPSAoZSkgPT4ge1xuICBjb25zdCB7IHNoaXAgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKGAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXB9XCJgKVxuICAgIC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGhvdmVyU2hpcFBsYWNlbWVudCA9IChlKSA9PiB7XG4gIGlmIChpc0RyYWdnaW5nU2hpcCkgcmV0dXJuO1xuICBjb25zdCB7IHNoaXAgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKGAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXB9XCJgKVxuICAgIC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgfSk7XG59O1xuXG5jb25zdCB1bmhvdmVyU2hpcFBsYWNlbWVudCA9IChlKSA9PiB7XG4gIGNvbnN0IHsgc2hpcCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcH1cImApXG4gICAgLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGN1cnJlbnRQbGF5ZXJTaGlwcyA9IFtdO1xuXG5jb25zdCBjb25maXJtUGxhY2VtZW50ID0gKCkgPT4ge1xuICBwbGFjZVBsYXllclNoaXBzKGN1cnJlbnRQbGF5ZXIsIGN1cnJlbnRQbGF5ZXJTaGlwcyk7XG4gIGN1cnJlbnRQbGF5ZXJTaGlwcy5sZW5ndGggPSAwO1xuICBoaWRlRGlhbG9nKCk7XG4gIHN3aXRjaFBsYXllcnMoKTtcblxuICBpZiAoXG4gICAgcGxheWVyc1swXS5ib2FyZC5mbGVldC5sZW5ndGggPiAwXG4gICAgJiYgcGxheWVyc1sxXS5ib2FyZC5mbGVldC5sZW5ndGggPiAwXG4gICkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgcmVzZXRTaGlwUGxhY2VtZW50RHJhZ0RhdGEpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVQbGFjZW1lbnRDZWxscyk7XG4gICAgaW5pdGFsaXplUGxheWVySFBWYWx1ZXMoKTtcbiAgICBjbGVhckdhbWVDb250YWluZXIoKTtcbiAgICBpZiAocGxheWVycy5zb21lKChwbGF5ZXIpID0+IHBsYXllciBpbnN0YW5jZW9mIEFJKSkge1xuICAgICAgaW5pdGlhbGl6ZUdhbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd1BsYXllcldhaXRTY3JlZW4oKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRQbGF5ZXIgaW5zdGFuY2VvZiBBSSkge1xuICAgIGN1cnJlbnRQbGF5ZXJTaGlwcy5wdXNoKC4uLkFJLmFycmFuZ2VTaGlwc09uQm9hcmQoc2hpcHNEYXRhKSk7XG4gICAgY29uZmlybVBsYWNlbWVudCgpO1xuICB9IGVsc2Uge1xuICAgIGNsZWFyR2FtZUNvbnRhaW5lcigpO1xuICAgIGluaXRpYWxpemVHYW1lQ29udGFpbmVyKCk7XG4gICAgaW5pdGlhbGl6ZVNoaXBQbGFjZW1lbnRTY3JlZW4oKTtcbiAgfVxufTtcblxuY29uc3QgY2xpY2tDb25maXJtUGxhY2VtZW50ID0gKCkgPT4ge1xuICBwbGF5TWVudUNsaWNrU0ZYKCk7XG4gIGN1cnJlbnRQbGF5ZXJTaGlwcy5sZW5ndGggPSAwO1xuXG4gIGNvbnN0IHBsYWNlZFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYWNlbWVudC5ib2FyZHMgLmNlbGwuYm93IC5zcHJpdGUtY29udGFpbmVyJyk7XG4gIHBsYWNlZFNoaXBzLmZvckVhY2goKHBsYWNlZFNoaXApID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzaGlwLCBsZW5ndGgsIGJvd1gsIGJvd1ksIGhvcml6b250YWwsXG4gICAgfSA9IHBsYWNlZFNoaXAucGFyZW50Tm9kZS5kYXRhc2V0O1xuICAgIGxldCBpbnNlcnRDb29yZGluYXRlcztcbiAgICBpZiAoaG9yaXpvbnRhbCA9PT0gJ3RydWUnKSB7XG4gICAgICBpbnNlcnRDb29yZGluYXRlcyA9IFtcbiAgICAgICAgK2Jvd1ggLSBNYXRoLmNlaWwoK2xlbmd0aCAvIDIpICsgMSxcbiAgICAgICAgK2Jvd1ksXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnNlcnRDb29yZGluYXRlcyA9IFtcbiAgICAgICAgK2Jvd1gsXG4gICAgICAgICtib3dZIC0gTWF0aC5jZWlsKCtsZW5ndGggLyAyKSArIDEsXG4gICAgICBdO1xuICAgIH1cbiAgICBjdXJyZW50UGxheWVyU2hpcHMucHVzaCh7XG4gICAgICB0eXBlOiBzaGlwLFxuICAgICAgbGVuZ3RoOiArbGVuZ3RoLFxuICAgICAgaW5zZXJ0Q29vcmRpbmF0ZXMsXG4gICAgICBob3Jpem9udGFsOiBob3Jpem9udGFsID09PSAndHJ1ZScsXG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHNpdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1jb250YWluZXInKTtcblxuICBjb25zdCBkaWFsb2dPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpYWxvZ092ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLW92ZXJsYXknKTtcblxuICBjb25zdCBkaWFsb2dCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlhbG9nQm94LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZycpO1xuXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMS5jbGFzc0xpc3QuYWRkKCdzdWInLCAndGV4dCcpO1xuICBwMS50ZXh0Q29udGVudCA9IGBZb3UgaGF2ZSBwbGFjZWQgJHtjdXJyZW50UGxheWVyU2hpcHMubGVuZ3RofSBzaGlwKHMpLmA7XG5cbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAyLnRleHRDb250ZW50ID0gJ0NvbmZpcm0gcGxhY2VtZW50Pyc7XG4gIHAyLmNsYXNzTGlzdC5hZGQoJ21haW4nLCAndGV4dCcpO1xuXG4gIGNvbnN0IGJ0blllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5ZZXMuY2xhc3NMaXN0LmFkZCgncGxheScsICdidXR0b24nKTtcbiAgYnRuWWVzLnRleHRDb250ZW50ID0gJ1llcyc7XG4gIGJ0blllcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbmZpcm1QbGFjZW1lbnQsIHsgb25jZTogdHJ1ZSB9KTtcblxuICBjb25zdCBidG5ObyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5Oby5jbGFzc0xpc3QuYWRkKCdtZW51JywgJ2J1dHRvbicpO1xuICBidG5Oby50ZXh0Q29udGVudCA9ICdObyc7XG4gIGJ0bk5vLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZURpYWxvZywgeyBvbmNlOiB0cnVlIH0pO1xuXG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChwMSk7XG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChwMik7XG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChidG5ZZXMpO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQoYnRuTm8pO1xuICBkaWFsb2dPdmVybGF5LmFwcGVuZENoaWxkKGRpYWxvZ0JveCk7XG4gIHNpdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlhbG9nT3ZlcmxheSk7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyc1RvU2hpcENlbGwgPSAoY2VsbCkgPT4ge1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBob3ZlclNoaXBQbGFjZW1lbnQpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB1bmhvdmVyU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xpY2tQbGFjZW1lbnRTaGlwKTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdW5jbGlja1NoaXBQbGFjZW1lbnQpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB1bmNsaWNrU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZHJhZ1NoaXBPblBsYWNlbWVudEJvYXJkKTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZW50ZXInLCBob3ZlclNoaXBQbGFjZW1lbnQpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHVuaG92ZXJTaGlwUGxhY2VtZW50KTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGNsaWNrUGxhY2VtZW50U2hpcCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdW5jbGlja1NoaXBQbGFjZW1lbnQpO1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHVuY2xpY2tTaGlwUGxhY2VtZW50KTtcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGRyYWdTaGlwT25QbGFjZW1lbnRCb2FyZCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwT25QbGFjZW1lbnRCb2FyZCk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB1bnBsYWNlU2hpcEZyb21QbGFjZW1lbnRCb2FyZCk7XG59O1xuXG5jb25zdCBlbXB0eUNlbGxEYXRhT25QbGFjZW1lbnRCb2FyZCA9IChjZWxsKSA9PiB7XG4gIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYm93Jyk7XG4gIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2hpcCcpO1xuICBjZWxsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sZW5ndGgnKTtcbiAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYm93LXgnKTtcbiAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYm93LXknKTtcbiAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaG9yaXpvbnRhbCcpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBob3ZlclNoaXBQbGFjZW1lbnQpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB1bmhvdmVyU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xpY2tQbGFjZW1lbnRTaGlwKTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdW5jbGlja1NoaXBQbGFjZW1lbnQpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB1bmNsaWNrU2hpcFBsYWNlbWVudCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZHJhZ1NoaXBPblBsYWNlbWVudEJvYXJkKTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZW50ZXInLCBob3ZlclNoaXBQbGFjZW1lbnQpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHVuaG92ZXJTaGlwUGxhY2VtZW50KTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGNsaWNrUGxhY2VtZW50U2hpcCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdW5jbGlja1NoaXBQbGFjZW1lbnQpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIHVuY2xpY2tTaGlwUGxhY2VtZW50KTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGRyYWdTaGlwT25QbGFjZW1lbnRCb2FyZCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwT25QbGFjZW1lbnRCb2FyZCk7XG4gIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB1bnBsYWNlU2hpcEZyb21QbGFjZW1lbnRCb2FyZCk7XG59O1xuXG5jb25zdCByb3RhdGVTaGlwT25QbGFjZW1lbnRCb2FyZCA9IChlKSA9PiB7XG4gIGlmIChlLmRldGFpbCA+IDEpIHJldHVybjtcbiAgaWYgKGlzRHJhZ2dpbmdTaGlwKSByZXR1cm47XG5cbiAgY29uc3Qgcm90YXRlZFNoaXBDZWxsID0gZS5jdXJyZW50VGFyZ2V0O1xuICBjb25zdCB7IHNoaXAsIGxlbmd0aCB9ID0gcm90YXRlZFNoaXBDZWxsLmRhdGFzZXQ7XG4gIGxldCBib3dYID0gK3JvdGF0ZWRTaGlwQ2VsbC5kYXRhc2V0LmJvd1g7XG4gIGxldCBib3dZID0gK3JvdGF0ZWRTaGlwQ2VsbC5kYXRhc2V0LmJvd1k7XG4gIGNvbnN0IHJvdGF0ZWRTaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYWNlbWVudCAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXB9XCJdIC5zcHJpdGUtY29udGFpbmVyYCk7XG4gIGNvbnN0IHJvdGF0ZWRTaGlwQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxhY2VtZW50IC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcH1cIl1gKTtcblxuICByb3RhdGVkU2hpcENlbGxzLmZvckVhY2goKHNoaXBDZWxsKSA9PiB7XG4gICAgZW1wdHlDZWxsRGF0YU9uUGxhY2VtZW50Qm9hcmQoc2hpcENlbGwpO1xuICB9KTtcblxuICBpZiAocm90YXRlZFNoaXBDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICByb3RhdGVkU2hpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJyk7XG4gIH0gZWxzZSB7XG4gICAgcm90YXRlZFNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICB9XG5cbiAgbGV0IHNjYW5VcCA9IHRydWU7XG4gIGxldCBzY2FuUmlnaHQgPSB0cnVlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgK2xlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2hpcENlbGwgPSByb3RhdGVkU2hpcENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2Jvd1ggLSBpfVwiXVtkYXRhLXk9XCIke2Jvd1l9XCJdYClcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtib3dYfVwiXVtkYXRhLXk9XCIke2Jvd1kgLSBpfVwiXWApO1xuICAgIGlmIChcbiAgICAgICFzaGlwQ2VsbFxuICAgICAgfHwgKHNoaXBDZWxsLmRhdGFzZXQuc2hpcCAmJiBzaGlwQ2VsbC5kYXRhc2V0LnNoaXAgIT09IHJvdGF0ZWRTaGlwQ2VsbC5kYXRhc2V0LnNoaXApXG4gICAgKSB7XG4gICAgICBpZiAoYm93WSA9PT0gMCkgc2NhblVwID0gdHJ1ZTtcbiAgICAgIGlmIChib3dZID09PSA5KSBzY2FuVXAgPSBmYWxzZTtcbiAgICAgIGlmIChib3dYID09PSAwKSBzY2FuUmlnaHQgPSB0cnVlO1xuICAgICAgaWYgKGJvd1ggPT09IDkpIHNjYW5SaWdodCA9IGZhbHNlO1xuICAgICAgYm93WSA9IHNjYW5VcCA/IGJvd1kgKyAxIDogYm93WSAtIDE7XG4gICAgICBib3dYID0gc2NhblJpZ2h0ID8gYm93WCArIDEgOiBib3dYIC0gMTtcbiAgICAgIGkgPSAtMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgK2xlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2hpcENlbGwgPSByb3RhdGVkU2hpcENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2Jvd1ggLSBpfVwiXVtkYXRhLXk9XCIke2Jvd1l9XCJdYClcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtib3dYfVwiXVtkYXRhLXk9XCIke2Jvd1kgLSBpfVwiXWApO1xuICAgIGlmICghc2hpcENlbGwpIGNvbnRpbnVlO1xuICAgIGlmICghc2hpcENlbGwuZGF0YXNldC5zaGlwKSB7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBzaGlwQ2VsbC5hcHBlbmRDaGlsZChyb3RhdGVkU2hpcENvbnRhaW5lcik7XG4gICAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoJ2JvdycpO1xuICAgICAgfVxuICAgICAgc2hpcENlbGwuZGF0YXNldC5zaGlwID0gc2hpcDtcbiAgICAgIHNoaXBDZWxsLmRhdGFzZXQubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgc2hpcENlbGwuZGF0YXNldC5ib3dYID0gYm93WDtcbiAgICAgIHNoaXBDZWxsLmRhdGFzZXQuYm93WSA9IGJvd1k7XG4gICAgICBzaGlwQ2VsbC5kYXRhc2V0Lmhvcml6b250YWwgPSByb3RhdGVkU2hpcENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKTtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXJzVG9TaGlwQ2VsbChzaGlwQ2VsbCk7XG4gICAgfVxuICB9XG59O1xuXG5sZXQgaXNEcmFnZ2luZ1NoaXAgPSBmYWxzZTtcbmxldCBkcmFnZ2VkU2hpcENvbnRhaW5lciA9IG51bGw7XG5sZXQgZHJhZ2dlZFNoaXBDZWxsID0gbnVsbDtcbmxldCBkcmFnZ2VkU2hpcENlbGxzID0gbnVsbDtcblxuY29uc3QgcmVzZXRTaGlwUGxhY2VtZW50RHJhZ0RhdGEgPSAoKSA9PiB7XG4gIGlzRHJhZ2dpbmdTaGlwID0gZmFsc2U7XG4gIGRyYWdnZWRTaGlwQ29udGFpbmVyID0gbnVsbDtcbiAgZHJhZ2dlZFNoaXBDZWxsID0gbnVsbDtcbiAgZHJhZ2dlZFNoaXBDZWxscyA9IG51bGw7XG59O1xuXG5jb25zdCBkcmFnU2hpcE9uUGxhY2VtZW50Qm9hcmQgPSAoZSkgPT4ge1xuICBpc0RyYWdnaW5nU2hpcCA9IHRydWU7XG4gIGRyYWdnZWRTaGlwQ2VsbCA9IGUuY3VycmVudFRhcmdldDtcblxuICBjb25zdCB7IHNoaXAgfSA9IGRyYWdnZWRTaGlwQ2VsbC5kYXRhc2V0O1xuICBkcmFnZ2VkU2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwfVwiXSAuc3ByaXRlLWNvbnRhaW5lcmApO1xuICBkcmFnZ2VkU2hpcENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnBsYWNlbWVudCAuY2VsbFtkYXRhLXNoaXA9XCIke3NoaXB9XCJdYCk7XG5cbiAgZHJhZ2dlZFNoaXBDZWxsLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG59O1xuXG5jb25zdCBtb3ZlRHJhZ2dlZFNoaXBPblBsYWNlbWVudEJvYXJkID0gKGUpID0+IHtcbiAgaWYgKCFpc0RyYWdnaW5nU2hpcCkgcmV0dXJuO1xuXG4gIGNvbnN0IHsgeCwgeSB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gIGNvbnN0IHsgc2hpcCwgbGVuZ3RoIH0gPSBkcmFnZ2VkU2hpcENlbGwuZGF0YXNldDtcbiAgY29uc3QgYm93WCA9ICt4ICsgK2RyYWdnZWRTaGlwQ2VsbC5kYXRhc2V0LmJvd1ggLSBkcmFnZ2VkU2hpcENlbGwuZGF0YXNldC54O1xuICBjb25zdCBib3dZID0gK3kgKyArZHJhZ2dlZFNoaXBDZWxsLmRhdGFzZXQuYm93WSAtIGRyYWdnZWRTaGlwQ2VsbC5kYXRhc2V0Lnk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCArbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaGlwQ2VsbCA9IGRyYWdnZWRTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7Ym93WCAtIGl9XCJdW2RhdGEteT1cIiR7Ym93WX1cIl1gKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2Jvd1h9XCJdW2RhdGEteT1cIiR7Ym93WSAtIGl9XCJdYCk7XG4gICAgaWYgKFxuICAgICAgIXNoaXBDZWxsXG4gICAgICB8fCAoc2hpcENlbGwuZGF0YXNldC5zaGlwICYmIHNoaXBDZWxsLmRhdGFzZXQuc2hpcCAhPT0gZHJhZ2dlZFNoaXBDZWxsLmRhdGFzZXQuc2hpcClcbiAgICApIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGJvd0NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxhY2VtZW50IC5jZWxsW2RhdGEteD1cIiR7Ym93WH1cIl1bZGF0YS15PVwiJHtib3dZfVwiXWApO1xuICBpZiAoIWJvd0NlbGwpIHJldHVybjtcbiAgYm93Q2VsbC5hcHBlbmRDaGlsZChkcmFnZ2VkU2hpcENvbnRhaW5lcik7XG5cbiAgZHJhZ2dlZFNoaXBDZWxscy5mb3JFYWNoKChzaGlwQ2VsbCkgPT4ge1xuICAgIGVtcHR5Q2VsbERhdGFPblBsYWNlbWVudEJvYXJkKHNoaXBDZWxsKTtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCArbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaGlwQ2VsbCA9IGRyYWdnZWRTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7Ym93WCAtIGl9XCJdW2RhdGEteT1cIiR7Ym93WX1cIl1gKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2Jvd1h9XCJdW2RhdGEteT1cIiR7Ym93WSAtIGl9XCJdYCk7XG4gICAgaWYgKCFzaGlwQ2VsbCkgeyBjb250aW51ZTsgfVxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKCdib3cnKTtcbiAgICB9XG4gICAgaWYgKCFzaGlwQ2VsbC5kYXRhc2V0LnNoaXApIHtcbiAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICBzaGlwQ2VsbC5kYXRhc2V0LnNoaXAgPSBzaGlwO1xuICAgICAgc2hpcENlbGwuZGF0YXNldC5sZW5ndGggPSBsZW5ndGg7XG4gICAgICBzaGlwQ2VsbC5kYXRhc2V0LmJvd1ggPSBib3dYO1xuICAgICAgc2hpcENlbGwuZGF0YXNldC5ib3dZID0gYm93WTtcbiAgICAgIHNoaXBDZWxsLmRhdGFzZXQuaG9yaXpvbnRhbCA9IGRyYWdnZWRTaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpO1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcnNUb1NoaXBDZWxsKHNoaXBDZWxsKTtcbiAgICB9XG4gIH1cblxuICBkcmFnZ2VkU2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwfVwiXSAuc3ByaXRlLWNvbnRhaW5lcmApO1xuICBkcmFnZ2VkU2hpcENlbGwgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gIGRyYWdnZWRTaGlwQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxhY2VtZW50IC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcH1cIl1gKTtcbn07XG5cbmNvbnN0IGNoZWNrRm9yQXRMZWFzdE9uZVNoaXBPblBsYWNlbWVudEJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBoYXNTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcy5wbGFjZW1lbnQgLnNwcml0ZS1jb250YWluZXInKTtcbiAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFjZW1lbnRDb25maXJtQnRuJyk7XG4gIGlmIChoYXNTaGlwKSB7XG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ29uZmlybVBsYWNlbWVudCk7XG4gICAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpcm1CdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NvbmZpcm1QbGFjZW1lbnQpO1xuICAgIGNvbmZpcm1CdXR0b24uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgfVxufTtcblxuY29uc3QgdW5wbGFjZVNoaXBGcm9tUGxhY2VtZW50Qm9hcmQgPSAoZSkgPT4ge1xuICBjb25zdCB7IHNoaXAgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICBjb25zdCB1bnBsYWNlZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQuaW5mbyAuY29udGFpbmVyW2RhdGEtc2hpcD1cIiR7c2hpcH1cIl1gKTtcbiAgY29uc3QgdW5wbGFjZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYWNlbWVudC5pbmZvIC5jb250YWluZXJbZGF0YS1zaGlwPVwiJHtzaGlwfVwiXSAuY2VsbDpsYXN0LWNoaWxkYCk7XG4gIGNvbnN0IHNwcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGFjZW1lbnQgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwfVwiXSAuc3ByaXRlLWNvbnRhaW5lcmApO1xuICBjb25zdCBzaGlwQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxhY2VtZW50IC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcH1cIl1gKTtcbiAgc2hpcENlbGxzLmZvckVhY2goKHNoaXBDZWxsKSA9PiB7XG4gICAgZW1wdHlDZWxsRGF0YU9uUGxhY2VtZW50Qm9hcmQoc2hpcENlbGwpO1xuICB9KTtcbiAgc3ByaXRlLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcbiAgdW5wbGFjZWRDZWxsLmFwcGVuZENoaWxkKHNwcml0ZSk7XG4gIHVucGxhY2VkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3VucGxhY2VkJyk7XG4gIHVucGxhY2VkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VTaGlwT25QbGFjZW1lbnRCb2FyZCwgeyBvbmNlOiB0cnVlIH0pO1xuICBjaGVja0ZvckF0TGVhc3RPbmVTaGlwT25QbGFjZW1lbnRCb2FyZCgpO1xufTtcblxuY29uc3QgcmVzZXRQbGFjZW1lbnRCb2FyZCA9ICgpID0+IHtcbiAgcGxheU1lbnVDbGlja1NGWCgpO1xuICBzaGlwc0RhdGEuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IHVucGxhY2VkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYWNlbWVudC5pbmZvIC5jb250YWluZXJbZGF0YS1zaGlwPVwiJHtzaGlwLnR5cGV9XCJdYCk7XG4gICAgY29uc3QgdW5wbGFjZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYWNlbWVudC5pbmZvIC5jb250YWluZXJbZGF0YS1zaGlwPVwiJHtzaGlwLnR5cGV9XCJdIC5jZWxsOmxhc3QtY2hpbGRgKTtcbiAgICBjb25zdCBzcHJpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxhY2VtZW50IC5jZWxsW2RhdGEtc2hpcD1cIiR7c2hpcC50eXBlfVwiXSAuc3ByaXRlLWNvbnRhaW5lcmApO1xuICAgIGlmIChzcHJpdGUpIHtcbiAgICAgIGNvbnN0IHNoaXBDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wbGFjZW1lbnQgLmNlbGxbZGF0YS1zaGlwPVwiJHtzaGlwLnR5cGV9XCJdYCk7XG4gICAgICBzaGlwQ2VsbHMuZm9yRWFjaCgoc2hpcENlbGwpID0+IHtcbiAgICAgICAgZW1wdHlDZWxsRGF0YU9uUGxhY2VtZW50Qm9hcmQoc2hpcENlbGwpO1xuICAgICAgfSk7XG4gICAgICBzcHJpdGUuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICAgICAgdW5wbGFjZWRDZWxsLmFwcGVuZENoaWxkKHNwcml0ZSk7XG4gICAgICB1bnBsYWNlZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd1bnBsYWNlZCcpO1xuICAgICAgdW5wbGFjZWRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVNoaXBPblBsYWNlbWVudEJvYXJkLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuICB9KTtcbiAgY2hlY2tGb3JBdExlYXN0T25lU2hpcE9uUGxhY2VtZW50Qm9hcmQoKTtcbn07XG5cbmNvbnN0IHBsYWNlU2hpcE9uUGxhY2VtZW50Qm9hcmQgPSAoZSkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gIGNvbnN0IHsgc2hpcCwgbGVuZ3RoIH0gPSBjb250YWluZXIuZGF0YXNldDtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3VucGxhY2VkJyk7XG5cbiAgY29uc3Qgc3ByaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYWNlbWVudCBbZGF0YS1zaGlwPVwiJHtzaGlwfVwiXSAuY2VsbCAuc3ByaXRlLWNvbnRhaW5lcmApO1xuICBsZXQgYm93WCA9IDk7XG4gIGxldCBib3dZID0gOTtcblxuICAvLyBDaGVjayBmb3IgdmFsaWQgaW5pdGlhbCBwbGFjZW1lbnRcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNoaXBDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtib3dYIC0gaX1cIl1bZGF0YS15PVwiJHtib3dZfVwiXWApO1xuICAgIGlmICghc2hpcENlbGwpIHtcbiAgICAgIGJvd1ggPSA5O1xuICAgICAgYm93WSAtPSAxO1xuICAgICAgaSA9IC0xO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChzaGlwQ2VsbC5kYXRhc2V0LnNoaXApIHtcbiAgICAgIGJvd1ggLT0gMTtcbiAgICAgIGkgPSAtMTtcbiAgICB9XG4gIH1cblxuICAvLyBBY3R1YWxseSBwbGFjZSBzcHJpdGUgb24gc3VjY2Vzc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2hpcENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2Jvd1ggLSBpfVwiXVtkYXRhLXk9XCIke2Jvd1l9XCJdYCk7XG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIHNoaXBDZWxsLmFwcGVuZENoaWxkKHNwcml0ZSk7XG4gICAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKCdib3cnKTtcbiAgICB9XG4gICAgc2hpcENlbGwuZGF0YXNldC5zaGlwID0gc2hpcDtcbiAgICBzaGlwQ2VsbC5kYXRhc2V0Lmxlbmd0aCA9IGxlbmd0aDtcbiAgICBzaGlwQ2VsbC5kYXRhc2V0LmJvd1ggPSBib3dYO1xuICAgIHNoaXBDZWxsLmRhdGFzZXQuYm93WSA9IGJvd1k7XG4gICAgc2hpcENlbGwuZGF0YXNldC5ob3Jpem9udGFsID0gc3ByaXRlLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpO1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzVG9TaGlwQ2VsbChzaGlwQ2VsbCk7XG4gIH1cbiAgY2hlY2tGb3JBdExlYXN0T25lU2hpcE9uUGxhY2VtZW50Qm9hcmQoKTtcbn07XG5cbmNvbnN0IHJlc2l6ZVBsYWNlbWVudENlbGxzID0gKCkgPT4ge1xuICBjb25zdCBib3dDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlbWVudCAuY2VsbCcpO1xuICBjb25zdCBwbGFjZW1lbnRDZWxsV2lkdGggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib3dDZWxsKS53aWR0aDtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXBsYWNlbWVudC1jZWxsLXdpZHRoJywgcGxhY2VtZW50Q2VsbFdpZHRoKTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVTaGlwUGxhY2VtZW50U2NyZWVuID0gKCkgPT4ge1xuICBwbGF5R2FtZUJHTSgpO1xuICBwcmV2aW91c0hpdENlbGwgPSBbLTEsIC0xXTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCByZXNldFNoaXBQbGFjZW1lbnREcmFnRGF0YSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVQbGFjZW1lbnRDZWxscyk7XG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuICBjb25zdCBwbGFjZW1lbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBsYWNlbWVudEluZm8uY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50JywgJ2luZm8nKTtcblxuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDEudGV4dENvbnRlbnQgPSBjdXJyZW50UGxheWVyLm5hbWU7XG5cbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAyLnRleHRDb250ZW50ID0gJ0FycmFuZ2UgeW91ciBmbGVldCBvbiB0aGUgYmF0dGxlZmllbGQhJztcblxuICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDMudGV4dENvbnRlbnQgPSAnU2hpcHMgYXZhaWxhYmxlOic7XG5cbiAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2hpcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpcHMnKTtcblxuICBzaGlwc0RhdGEuZm9yRWFjaCgoc2hpcERhdGEpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywgJ3VucGxhY2VkJyk7XG4gICAgY29udGFpbmVyLmRhdGFzZXQuc2hpcCA9IHNoaXBEYXRhLnR5cGU7XG4gICAgY29udGFpbmVyLmRhdGFzZXQubGVuZ3RoID0gc2hpcERhdGEubGVuZ3RoO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlU2hpcE9uUGxhY2VtZW50Qm9hcmQsIHsgb25jZTogdHJ1ZSB9KTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXBEYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcblxuICAgICAgaWYgKGkgPT09IHNoaXBEYXRhLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBzcHJpdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3ByaXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Nwcml0ZS1jb250YWluZXInKTtcbiAgICAgICAgc3ByaXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcblxuICAgICAgICBjb25zdCBzaGlwU3ByaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHNoaXBTcHJpdGUuc3JjID0gc2hpcERhdGEuc3JjO1xuICAgICAgICBzaGlwU3ByaXRlLmNsYXNzTGlzdC5hZGQoJ3Nwcml0ZScpO1xuICAgICAgICBzaGlwU3ByaXRlLmRyYWdnYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHNwcml0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwU3ByaXRlKTtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChzcHJpdGVDb250YWluZXIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2JvdycpO1xuICAgICAgfVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgICBzaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9KTtcblxuICBwbGFjZW1lbnRJbmZvLmFwcGVuZENoaWxkKHAxKTtcbiAgcGxhY2VtZW50SW5mby5hcHBlbmRDaGlsZChwMik7XG4gIHBsYWNlbWVudEluZm8uYXBwZW5kQ2hpbGQocDMpO1xuICBwbGFjZW1lbnRJbmZvLmFwcGVuZENoaWxkKHNoaXBzQ29udGFpbmVyKTtcbiAgZ2FtZS5hcHBlbmRDaGlsZChwbGFjZW1lbnRJbmZvKTtcblxuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzJyk7XG4gIGJvYXJkcy5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQnKTtcblxuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuXG4gIGZvciAobGV0IGkgPSA5OyBpID49IDA7IGkgLT0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICBjZWxsLmRhdGFzZXQueCA9IGo7XG4gICAgICBjZWxsLmRhdGFzZXQueSA9IGk7XG4gICAgICBjZWxsLmRhdGFzZXQucGxheWVyTmFtZSA9IGN1cnJlbnRQbGF5ZXIubmFtZTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG1vdmVEcmFnZ2VkU2hpcE9uUGxhY2VtZW50Qm9hcmQpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZW50ZXInLCBtb3ZlRHJhZ2dlZFNoaXBPblBsYWNlbWVudEJvYXJkKTtcbiAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgfVxuICBib2FyZHMuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuXG4gIGNvbnN0IHBsYWNlbWVudEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGxhY2VtZW50QnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQnLCAnYnV0dG9ucycpO1xuXG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICByZXNldEJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZXNldCc7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRQbGFjZW1lbnRCb2FyZCk7XG5cbiAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25maXJtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdkaXNhYmxlZCcpO1xuICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuICBjb25maXJtQnV0dG9uLmlkID0gJ3BsYWNlbWVudENvbmZpcm1CdG4nO1xuXG4gIHBsYWNlbWVudEJ1dHRvbnMuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuICBwbGFjZW1lbnRCdXR0b25zLmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuICBnYW1lLmFwcGVuZENoaWxkKHBsYWNlbWVudEJ1dHRvbnMpO1xuXG4gIHJlc2l6ZVNwcml0ZXMoKTtcbiAgcmVzaXplUGxhY2VtZW50Q2VsbHMoKTtcbn07XG5cbmNvbnN0IGNsZWFyR2FtZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XG4gIHdoaWxlIChnYW1lLmZpcnN0Q2hpbGQpIHtcbiAgICBnYW1lLnJlbW92ZUNoaWxkKGdhbWUuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IHRvZ2dsZVZvbHVtZSA9IChlKSA9PiB7XG4gIGlmIChhdWRpb1ZvbHVtZSA9PT0gMSkge1xuICAgIGNoYW5nZUF1ZGlvVm9sdW1lKDAuNjYpO1xuICAgIGUuY3VycmVudFRhcmdldC5maXJzdENoaWxkLm91dGVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnZvbHVtZS1tZWRpdW08L3RpdGxlPjxwYXRoIGQ9XCJNNSw5VjE1SDlMMTQsMjBWNEw5LDlNMTguNSwxMkMxOC41LDEwLjIzIDE3LjUsOC43MSAxNiw3Ljk3VjE2QzE3LjUsMTUuMjkgMTguNSwxMy43NiAxOC41LDEyWlwiIC8+PC9zdmc+JztcbiAgfSBlbHNlIGlmIChhdWRpb1ZvbHVtZSA9PT0gMC42Nikge1xuICAgIGNoYW5nZUF1ZGlvVm9sdW1lKDAuMzMpO1xuICAgIGUuY3VycmVudFRhcmdldC5maXJzdENoaWxkLm91dGVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnZvbHVtZS1sb3c8L3RpdGxlPjxwYXRoIGQ9XCJNNyw5VjE1SDExTDE2LDIwVjRMMTEsOUg3WlwiIC8+PC9zdmc+JztcbiAgfSBlbHNlIGlmIChhdWRpb1ZvbHVtZSA9PT0gMC4zMykge1xuICAgIGNoYW5nZUF1ZGlvVm9sdW1lKDApO1xuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdtdXRlJyk7XG4gICAgZS5jdXJyZW50VGFyZ2V0LmZpcnN0Q2hpbGQub3V0ZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+dm9sdW1lLW9mZjwvdGl0bGU+PHBhdGggZD1cIk0xMiw0TDkuOTEsNi4wOUwxMiw4LjE4TTQuMjcsM0wzLDQuMjdMNy43Myw5SDNWMTVIN0wxMiwyMFYxMy4yN0wxNi4yNSwxNy41M0MxNS41OCwxOC4wNCAxNC44MywxOC40NiAxNCwxOC43VjIwLjc3QzE1LjM4LDIwLjQ1IDE2LjYzLDE5LjgyIDE3LjY4LDE4Ljk2TDE5LjczLDIxTDIxLDE5LjczTDEyLDEwLjczTTE5LDEyQzE5LDEyLjk0IDE4LjgsMTMuODIgMTguNDYsMTQuNjRMMTkuOTcsMTYuMTVDMjAuNjIsMTQuOTEgMjEsMTMuNSAyMSwxMkMyMSw3LjcyIDE4LDQuMTQgMTQsMy4yM1Y1LjI5QzE2Ljg5LDYuMTUgMTksOC44MyAxOSwxMk0xNi41LDEyQzE2LjUsMTAuMjMgMTUuNSw4LjcxIDE0LDcuOTdWMTAuMThMMTYuNDUsMTIuNjNDMTYuNSwxMi40MyAxNi41LDEyLjIxIDE2LjUsMTJaXCIgLz48L3N2Zz4nO1xuICB9IGVsc2UgaWYgKGF1ZGlvVm9sdW1lID09PSAwKSB7XG4gICAgY2hhbmdlQXVkaW9Wb2x1bWUoMSk7XG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ211dGUnKTtcbiAgICBlLmN1cnJlbnRUYXJnZXQuZmlyc3RDaGlsZC5vdXRlckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT52b2x1bWUtaGlnaDwvdGl0bGU+PHBhdGggZD1cIk0xNCwzLjIzVjUuMjlDMTYuODksNi4xNSAxOSw4LjgzIDE5LDEyQzE5LDE1LjE3IDE2Ljg5LDE3Ljg0IDE0LDE4LjdWMjAuNzdDMTgsMTkuODYgMjEsMTYuMjggMjEsMTJDMjEsNy43MiAxOCw0LjE0IDE0LDMuMjNNMTYuNSwxMkMxNi41LDEwLjIzIDE1LjUsOC43MSAxNCw3Ljk3VjE2QzE1LjUsMTUuMjkgMTYuNSwxMy43NiAxNi41LDEyTTMsOVYxNUg3TDEyLDIwVjRMNyw5SDNaXCIgLz48L3N2Zz4nO1xuICB9XG4gIHBsYXlNZW51Q2xpY2tTRlgoKTtcbn07XG5cbmNvbnN0IHNob3dWb2x1bWVCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbWVudScpO1xuXG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnRhaW5lcicsICdtYXgtd2lkdGgnKTtcblxuICBjb25zdCB2b2x1bWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdm9sdW1lQnRuLmNsYXNzTGlzdC5hZGQoJ3ZvbHVtZS1idG4nKTtcbiAgdm9sdW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVm9sdW1lKTtcblxuICBjb25zdCB2b2x1bWVCdG5TVkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcblxuICB2b2x1bWVCdG4uYXBwZW5kQ2hpbGQodm9sdW1lQnRuU1ZHKTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHZvbHVtZUJ0bik7XG4gIG1haW5NZW51LmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbiAgaWYgKGF1ZGlvVm9sdW1lID09PSAxKSB7XG4gICAgdm9sdW1lQnRuU1ZHLm91dGVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnZvbHVtZS1oaWdoPC90aXRsZT48cGF0aCBkPVwiTTE0LDMuMjNWNS4yOUMxNi44OSw2LjE1IDE5LDguODMgMTksMTJDMTksMTUuMTcgMTYuODksMTcuODQgMTQsMTguN1YyMC43N0MxOCwxOS44NiAyMSwxNi4yOCAyMSwxMkMyMSw3LjcyIDE4LDQuMTQgMTQsMy4yM00xNi41LDEyQzE2LjUsMTAuMjMgMTUuNSw4LjcxIDE0LDcuOTdWMTZDMTUuNSwxNS4yOSAxNi41LDEzLjc2IDE2LjUsMTJNMyw5VjE1SDdMMTIsMjBWNEw3LDlIM1pcIiAvPjwvc3ZnPic7XG4gIH0gZWxzZSBpZiAoYXVkaW9Wb2x1bWUgPT09IDAuNjYpIHtcbiAgICB2b2x1bWVCdG5TVkcub3V0ZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+dm9sdW1lLW1lZGl1bTwvdGl0bGU+PHBhdGggZD1cIk01LDlWMTVIOUwxNCwyMFY0TDksOU0xOC41LDEyQzE4LjUsMTAuMjMgMTcuNSw4LjcxIDE2LDcuOTdWMTZDMTcuNSwxNS4yOSAxOC41LDEzLjc2IDE4LjUsMTJaXCIgLz48L3N2Zz4nO1xuICB9IGVsc2UgaWYgKGF1ZGlvVm9sdW1lID09PSAwLjMzKSB7XG4gICAgdm9sdW1lQnRuU1ZHLm91dGVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnZvbHVtZS1sb3c8L3RpdGxlPjxwYXRoIGQ9XCJNNyw5VjE1SDExTDE2LDIwVjRMMTEsOUg3WlwiIC8+PC9zdmc+JztcbiAgfSBlbHNlIGlmIChhdWRpb1ZvbHVtZSA9PT0gMCkge1xuICAgIHZvbHVtZUJ0bi5jbGFzc0xpc3QuYWRkKCdtdXRlJyk7XG4gICAgdm9sdW1lQnRuU1ZHLm91dGVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnZvbHVtZS1vZmY8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsNEw5LjkxLDYuMDlMMTIsOC4xOE00LjI3LDNMMyw0LjI3TDcuNzMsOUgzVjE1SDdMMTIsMjBWMTMuMjdMMTYuMjUsMTcuNTNDMTUuNTgsMTguMDQgMTQuODMsMTguNDYgMTQsMTguN1YyMC43N0MxNS4zOCwyMC40NSAxNi42MywxOS44MiAxNy42OCwxOC45NkwxOS43MywyMUwyMSwxOS43M0wxMiwxMC43M00xOSwxMkMxOSwxMi45NCAxOC44LDEzLjgyIDE4LjQ2LDE0LjY0TDE5Ljk3LDE2LjE1QzIwLjYyLDE0LjkxIDIxLDEzLjUgMjEsMTJDMjEsNy43MiAxOCw0LjE0IDE0LDMuMjNWNS4yOUMxNi44OSw2LjE1IDE5LDguODMgMTksMTJNMTYuNSwxMkMxNi41LDEwLjIzIDE1LjUsOC43MSAxNCw3Ljk3VjEwLjE4TDE2LjQ1LDEyLjYzQzE2LjUsMTIuNDMgMTYuNSwxMi4yMSAxNi41LDEyWlwiIC8+PC9zdmc+JztcbiAgfVxufTtcblxuY29uc3QgaW5pdGlhbGl6ZUdhbWVDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuXG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnRhaW5lcicsICdtYXgtd2lkdGgnKTtcblxuICBjb25zdCBzZXR0aW5nc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzZXR0aW5nc0J0bi5jbGFzc0xpc3QuYWRkKCdzZXR0aW5ncy1idG4nKTtcbiAgc2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja1BhdXNlTWVudSk7XG5cbiAgY29uc3Qgc2V0dGluZ3NCdG5TVkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcblxuICBjb25zdCB2b2x1bWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdm9sdW1lQnRuLmNsYXNzTGlzdC5hZGQoJ3ZvbHVtZS1idG4nKTtcbiAgdm9sdW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVm9sdW1lKTtcblxuICBjb25zdCB2b2x1bWVCdG5TVkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcblxuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmRzLmNsYXNzTGlzdC5hZGQoJ2JvYXJkcycsICdtYXgtd2lkdGgnKTtcblxuICB2b2x1bWVCdG4uYXBwZW5kQ2hpbGQodm9sdW1lQnRuU1ZHKTtcbiAgc2V0dGluZ3NCdG4uYXBwZW5kQ2hpbGQoc2V0dGluZ3NCdG5TVkcpO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQodm9sdW1lQnRuKTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldHRpbmdzQnRuKTtcbiAgZ2FtZS5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuICBnYW1lLmFwcGVuZENoaWxkKGJvYXJkcyk7XG5cbiAgc2V0dGluZ3NCdG5TVkcub3V0ZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y29nPC90aXRsZT48cGF0aCBkPVwiTTEyLDE1LjVBMy41LDMuNSAwIDAsMSA4LjUsMTJBMy41LDMuNSAwIDAsMSAxMiw4LjVBMy41LDMuNSAwIDAsMSAxNS41LDEyQTMuNSwzLjUgMCAwLDEgMTIsMTUuNU0xOS40MywxMi45N0MxOS40NywxMi42NSAxOS41LDEyLjMzIDE5LjUsMTJDMTkuNSwxMS42NyAxOS40NywxMS4zNCAxOS40MywxMUwyMS41NCw5LjM3QzIxLjczLDkuMjIgMjEuNzgsOC45NSAyMS42Niw4LjczTDE5LjY2LDUuMjdDMTkuNTQsNS4wNSAxOS4yNyw0Ljk2IDE5LjA1LDUuMDVMMTYuNTYsNi4wNUMxNi4wNCw1LjY2IDE1LjUsNS4zMiAxNC44Nyw1LjA3TDE0LjUsMi40MkMxNC40NiwyLjE4IDE0LjI1LDIgMTQsMkgxMEM5Ljc1LDIgOS41NCwyLjE4IDkuNSwyLjQyTDkuMTMsNS4wN0M4LjUsNS4zMiA3Ljk2LDUuNjYgNy40NCw2LjA1TDQuOTUsNS4wNUM0LjczLDQuOTYgNC40Niw1LjA1IDQuMzQsNS4yN0wyLjM0LDguNzNDMi4yMSw4Ljk1IDIuMjcsOS4yMiAyLjQ2LDkuMzdMNC41NywxMUM0LjUzLDExLjM0IDQuNSwxMS42NyA0LjUsMTJDNC41LDEyLjMzIDQuNTMsMTIuNjUgNC41NywxMi45N0wyLjQ2LDE0LjYzQzIuMjcsMTQuNzggMi4yMSwxNS4wNSAyLjM0LDE1LjI3TDQuMzQsMTguNzNDNC40NiwxOC45NSA0LjczLDE5LjAzIDQuOTUsMTguOTVMNy40NCwxNy45NEM3Ljk2LDE4LjM0IDguNSwxOC42OCA5LjEzLDE4LjkzTDkuNSwyMS41OEM5LjU0LDIxLjgyIDkuNzUsMjIgMTAsMjJIMTRDMTQuMjUsMjIgMTQuNDYsMjEuODIgMTQuNSwyMS41OEwxNC44NywxOC45M0MxNS41LDE4LjY3IDE2LjA0LDE4LjM0IDE2LjU2LDE3Ljk0TDE5LjA1LDE4Ljk1QzE5LjI3LDE5LjAzIDE5LjU0LDE4Ljk1IDE5LjY2LDE4LjczTDIxLjY2LDE1LjI3QzIxLjc4LDE1LjA1IDIxLjczLDE0Ljc4IDIxLjU0LDE0LjYzTDE5LjQzLDEyLjk3WlwiIC8+PC9zdmc+JztcbiAgaWYgKGF1ZGlvVm9sdW1lID09PSAxKSB7XG4gICAgdm9sdW1lQnRuU1ZHLm91dGVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnZvbHVtZS1oaWdoPC90aXRsZT48cGF0aCBkPVwiTTE0LDMuMjNWNS4yOUMxNi44OSw2LjE1IDE5LDguODMgMTksMTJDMTksMTUuMTcgMTYuODksMTcuODQgMTQsMTguN1YyMC43N0MxOCwxOS44NiAyMSwxNi4yOCAyMSwxMkMyMSw3LjcyIDE4LDQuMTQgMTQsMy4yM00xNi41LDEyQzE2LjUsMTAuMjMgMTUuNSw4LjcxIDE0LDcuOTdWMTZDMTUuNSwxNS4yOSAxNi41LDEzLjc2IDE2LjUsMTJNMyw5VjE1SDdMMTIsMjBWNEw3LDlIM1pcIiAvPjwvc3ZnPic7XG4gIH0gZWxzZSBpZiAoYXVkaW9Wb2x1bWUgPT09IDAuNjYpIHtcbiAgICB2b2x1bWVCdG5TVkcub3V0ZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+dm9sdW1lLW1lZGl1bTwvdGl0bGU+PHBhdGggZD1cIk01LDlWMTVIOUwxNCwyMFY0TDksOU0xOC41LDEyQzE4LjUsMTAuMjMgMTcuNSw4LjcxIDE2LDcuOTdWMTZDMTcuNSwxNS4yOSAxOC41LDEzLjc2IDE4LjUsMTJaXCIgLz48L3N2Zz4nO1xuICB9IGVsc2UgaWYgKGF1ZGlvVm9sdW1lID09PSAwLjMzKSB7XG4gICAgdm9sdW1lQnRuU1ZHLm91dGVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnZvbHVtZS1sb3c8L3RpdGxlPjxwYXRoIGQ9XCJNNyw5VjE1SDExTDE2LDIwVjRMMTEsOUg3WlwiIC8+PC9zdmc+JztcbiAgfSBlbHNlIGlmIChhdWRpb1ZvbHVtZSA9PT0gMCkge1xuICAgIHZvbHVtZUJ0bi5jbGFzc0xpc3QuYWRkKCdtdXRlJyk7XG4gICAgdm9sdW1lQnRuU1ZHLm91dGVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnZvbHVtZS1vZmY8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsNEw5LjkxLDYuMDlMMTIsOC4xOE00LjI3LDNMMyw0LjI3TDcuNzMsOUgzVjE1SDdMMTIsMjBWMTMuMjdMMTYuMjUsMTcuNTNDMTUuNTgsMTguMDQgMTQuODMsMTguNDYgMTQsMTguN1YyMC43N0MxNS4zOCwyMC40NSAxNi42MywxOS44MiAxNy42OCwxOC45NkwxOS43MywyMUwyMSwxOS43M0wxMiwxMC43M00xOSwxMkMxOSwxMi45NCAxOC44LDEzLjgyIDE4LjQ2LDE0LjY0TDE5Ljk3LDE2LjE1QzIwLjYyLDE0LjkxIDIxLDEzLjUgMjEsMTJDMjEsNy43MiAxOCw0LjE0IDE0LDMuMjNWNS4yOUMxNi44OSw2LjE1IDE5LDguODMgMTksMTJNMTYuNSwxMkMxNi41LDEwLjIzIDE1LjUsOC43MSAxNCw3Ljk3VjEwLjE4TDE2LjQ1LDEyLjYzQzE2LjUsMTIuNDMgMTYuNSwxMi4yMSAxNi41LDEyWlwiIC8+PC9zdmc+JztcbiAgfVxufTtcblxuY29uc3QgcHJpbnRQcmV2aW91c1BsYXllckF0dGFjayA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgW3gsIHldID0gcHJldmlvdXNIaXRDZWxsO1xuICBjb25zdCBjdXJyZW50UGxheWVySGl0Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ib2FyZC5jdXJyZW50IC5jZWxsW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xuICBpZiAoIWN1cnJlbnRQbGF5ZXJIaXRDZWxsKSByZXR1cm47XG4gIGlmIChjdXJyZW50UGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcCkge1xuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gY3VycmVudFBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXA7XG4gICAgaWYgKGN1cnJlbnRTaGlwLmhhc1N1bmspIHtcbiAgICAgIHByaW50U2lua2luZ1Nwcml0ZShjdXJyZW50U2hpcCk7XG4gICAgfVxuICB9XG4gIGF3YWl0IGhpdEV4cGxvc2lvbkVmZmVjdChjdXJyZW50UGxheWVySGl0Q2VsbCk7XG4gIGlmIChjdXJyZW50UGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcCkge1xuICAgIGN1cnJlbnRQbGF5ZXJIaXRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgIGlmIChjdXJyZW50UGxheWVySGl0Q2VsbC5kYXRhc2V0LnNoaXApIGFkZEZpcmVFZmZlY3QoY3VycmVudFBsYXllckhpdENlbGwpO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRQbGF5ZXJIaXRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICBhZGRNaXNzTWFyayhjdXJyZW50UGxheWVySGl0Q2VsbCk7XG4gIH1cbn07XG5cbmNvbnN0IGluaXRpYWxpemVCb2FyZCA9IGFzeW5jICgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZVNwcml0ZXMpO1xuICBbY3VycmVudFBsYXllciwgdGFyZ2V0UGxheWVyXS5mb3JFYWNoKGFzeW5jIChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzJyk7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICAgIGlmIChwbGF5ZXIgPT09IGN1cnJlbnRQbGF5ZXIpIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICBpZiAocGxheWVyID09PSB0YXJnZXRQbGF5ZXIpIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ3RhcmdldCcpO1xuXG4gICAgZm9yIChsZXQgeSA9IDk7IHkgPj0gMDsgeSAtPSAxKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4ICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgY2VsbC5kYXRhc2V0LnggPSB4O1xuICAgICAgICBjZWxsLmRhdGFzZXQueSA9IHk7XG4gICAgICAgIGNlbGwuZGF0YXNldC5wbGF5ZXJOYW1lID0gcGxheWVyLm5hbWU7XG4gICAgICAgIGNlbGwuZGF0YXNldC5zaGlwID0gcGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcFxuICAgICAgICAgID8gcGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcC50eXBlXG4gICAgICAgICAgOiAnJztcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllciA9PT0gdGFyZ2V0UGxheWVyXG4gICAgICAgICAgJiYgY3VycmVudFBsYXllciBpbnN0YW5jZW9mIFBsYXllclxuICAgICAgICAgICYmICEoY3VycmVudFBsYXllciBpbnN0YW5jZW9mIEFJKVxuICAgICAgICApIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaXRDZWxsUGxheWVyKTtcblxuICAgICAgICBjb25zdCBbcHJldlgsIHByZXZZXSA9IHByZXZpb3VzSGl0Q2VsbDtcbiAgICAgICAgaWYgKHBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXAgJiYgcGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcC5oYXNTdW5rKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcblxuICAgICAgICBpZiAoISgocHJldlggPT09IHggJiYgcHJldlkgPT09IHkpICYmIChwbGF5ZXIgPT09IGN1cnJlbnRQbGF5ZXIpKSkge1xuICAgICAgICAgIGlmIChwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5pc0hpdCAmJiBwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5zaGlwKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgaWYgKCFwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5zaGlwLmhhc1N1bmspIGFkZEZpcmVFZmZlY3QoY2VsbCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5pc0hpdCAmJiAhcGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcCkge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICBhZGRNaXNzTWFyayhjZWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYm9hcmRzLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgfSk7XG4gIHByaW50U3ByaXRlcygpO1xuICBpZiAocGxheWVycy5ldmVyeSgocGxheWVyKSA9PiAhKHBsYXllciBpbnN0YW5jZW9mIEFJKSkpIHtcbiAgICB1cGRhdGVQbGF5ZXJzSFBPblR1cm5TdGFydCgpO1xuICAgIGNvbnN0IFtwcmV2WCwgcHJldlldID0gcHJldmlvdXNIaXRDZWxsO1xuICAgIGlmIChwcmV2WCAhPT0gLTEgJiYgcHJldlkgIT09IC0xKSB7XG4gICAgICBpZiAoY3VycmVudFBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3ByZXZYXVtwcmV2WV0uc2hpcCkgYW5pbWF0ZUN1cnJlbnRQbGF5ZXJIUEhpdE9uVHVyblN0YXJ0KCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHByZXZYICE9PSAtMSAmJiBwcmV2WSAhPT0gLTEpIHBsYXlGaXJlU0ZYKCk7XG4gICAgICBwcmludFByZXZpb3VzUGxheWVyQXR0YWNrKCk7XG4gICAgfSwgNTAwKTtcbiAgfVxufTtcblxuY29uc3QgaGlkZVBsYXllckhQID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJzSFAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLWluZm8nKTtcbiAgcGxheWVyc0hQLmZvckVhY2goKHBsYXllckhQKSA9PiBwbGF5ZXJIUC5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXR5LWhpZGRlbicpKTtcbn07XG5cbmNvbnN0IHVuaGlkZVBsYXllckhQID0gKCkgPT4ge1xuICBjb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbiAgY29uc3QgcGxheWVyc0hQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1pbmZvJyk7XG4gIGdhbWUuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgIHBsYXllcnNIUC5mb3JFYWNoKChwbGF5ZXJIUCkgPT4gcGxheWVySFAuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJpbGl0eS1oaWRkZW4nKSk7XG4gIH0sIHsgb25jZTogdHJ1ZSB9KTtcbn07XG5cbmNvbnN0IGluaXRhbGl6ZVBsYXllckhQVmFsdWVzID0gKCkgPT4ge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY3VycmVudC1oZWFsdGgnLCAnMTAwJScpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY3VycmVudC1oaXQnLCAnMCUnKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWN1cnJlbnQtZW1wdHknLCAnMCUnKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWVuZW15LWhlYWx0aCcsICcxMDAlJyk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1lbmVteS1oaXQnLCAnMCUnKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWVuZW15LWVtcHR5JywgJzAlJyk7XG59O1xuXG5jb25zdCBhbmltYXRlQ3VycmVudFBsYXllckhQSGl0T25UdXJuU3RhcnQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHRvdGFsSFAgPSBjdXJyZW50UGxheWVyXG4gICAgLmJvYXJkXG4gICAgLmZsZWV0XG4gICAgLnJlZHVjZSgodG90YWwsIHNoaXApID0+IHRvdGFsICsgc2hpcC5sZW5ndGgsIDApO1xuICBjb25zdCBjdXJyZW50SFAgPSBjdXJyZW50UGxheWVyXG4gICAgLmJvYXJkXG4gICAgLmZsZWV0XG4gICAgLnJlZHVjZSgodG90YWwsIHNoaXApID0+IHRvdGFsIC0gc2hpcC5oaXRzLCB0b3RhbEhQKTtcbiAgY29uc3QgaGVhbHRoID0gYCR7TWF0aC5yb3VuZCgoY3VycmVudEhQIC8gdG90YWxIUCkgKiAxMDApfSVgO1xuICBjb25zdCBoaXQgPSBgJHtNYXRoLnJvdW5kKCgxIC8gdG90YWxIUCkgKiAxMDApfSVgO1xuICBjb25zdCBlbXB0eSA9IGAke01hdGgucm91bmQoKDEgLSBjdXJyZW50SFAgLyB0b3RhbEhQKSAqIDEwMCl9JWA7XG5cbiAgY29uc3QgcGxheWVySGVhbHRoVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50IC5oZWFsdGggPiAudGV4dCAnKTtcblxuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGluaXRIZWFsdGggPSBgJHtNYXRoLnJvdW5kKCgoY3VycmVudEhQICsgMSkgLyB0b3RhbEhQKSAqIDEwMCl9JWA7XG4gICAgY29uc3QgaW5pdEVtcHR5ID0gYCR7TWF0aC5yb3VuZCgoMSAtIChjdXJyZW50SFAgKyAxKSAvIHRvdGFsSFApICogMTAwKX0lYDtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY3VycmVudC1oZWFsdGgnLCBpbml0SGVhbHRoKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY3VycmVudC1lbXB0eScsIGluaXRFbXB0eSk7XG4gICAgcGxheWVySGVhbHRoVGV4dC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRIUCArIDF9LyR7dG90YWxIUH1gO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcblxuICBwbGF5ZXJIZWFsdGhUZXh0LnRleHRDb250ZW50ID0gYCR7Y3VycmVudEhQfS8ke3RvdGFsSFB9YDtcblxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY3VycmVudC1oZWFsdGgnLCBoZWFsdGgpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY3VycmVudC1oaXQnLCBoaXQpO1xuXG4gIGNvbnN0IHBsYXllckhlYWx0aEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50IC5oZWFsdGggPiAuYmFyICcpO1xuICBwbGF5ZXJIZWFsdGhCYXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY3VycmVudC1oaXQnLCAnMCUnKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY3VycmVudC1lbXB0eScsIGVtcHR5KTtcbiAgfSwgeyBvbmNlOiB0cnVlIH0pO1xufTtcblxuY29uc3QgdXBkYXRlUGxheWVyc0hQT25UdXJuU3RhcnQgPSBhc3luYyAoKSA9PiB7XG4gIHBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgY29uc3QgdGFnID0gY3VycmVudFBsYXllciA9PT0gcGxheWVyXG4gICAgICA/ICdjdXJyZW50J1xuICAgICAgOiAnZW5lbXknO1xuICAgIGNvbnN0IHRvdGFsSFAgPSBwbGF5ZXJcbiAgICAgIC5ib2FyZFxuICAgICAgLmZsZWV0XG4gICAgICAucmVkdWNlKCh0b3RhbCwgc2hpcCkgPT4gdG90YWwgKyBzaGlwLmxlbmd0aCwgMCk7XG4gICAgY29uc3QgY3VycmVudEhQID0gcGxheWVyXG4gICAgICAuYm9hcmRcbiAgICAgIC5mbGVldFxuICAgICAgLnJlZHVjZSgodG90YWwsIHNoaXApID0+IHRvdGFsIC0gc2hpcC5oaXRzLCB0b3RhbEhQKTtcbiAgICBjb25zdCBoZWFsdGggPSBgJHtNYXRoLnJvdW5kKChjdXJyZW50SFAgLyB0b3RhbEhQKSAqIDEwMCl9JWA7XG4gICAgY29uc3QgZW1wdHkgPSBgJHtNYXRoLnJvdW5kKCgxIC0gY3VycmVudEhQIC8gdG90YWxIUCkgKiAxMDApfSVgO1xuXG4gICAgY29uc3QgcGxheWVySGVhbHRoVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhZ30gLmhlYWx0aCA+IC50ZXh0IGApO1xuICAgIHBsYXllckhlYWx0aFRleHQudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50SFB9LyR7dG90YWxIUH1gO1xuXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7dGFnfS1oZWFsdGhgLCBoZWFsdGgpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke3RhZ30taGl0YCwgJzAlJyk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7dGFnfS1lbXB0eWAsIGVtcHR5KTtcbiAgfSk7XG59O1xuXG5jb25zdCBpbml0aWFsaXplUGxheWVySFAgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuICBwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHRhZyA9IGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllciA/ICdjdXJyZW50JyA6ICdlbmVteSc7XG5cbiAgICBjb25zdCBwbGF5ZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVySW5mby5jbGFzc0xpc3QuYWRkKHRhZywgJ3BsYXllci1pbmZvJyk7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS50ZXh0Q29udGVudCA9IHRhZyA9PT0gJ2N1cnJlbnQnID8gJ0FsbGllZCBmbGVldCcgOiAnRW5lbXkgZmxlZXQnO1xuXG4gICAgY29uc3QgaGVhbHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhbHRoLmNsYXNzTGlzdC5hZGQoJ2hlYWx0aCcpO1xuXG4gICAgY29uc3QgdG90YWxIUCA9IHBsYXllclxuICAgICAgLmJvYXJkXG4gICAgICAuZmxlZXRcbiAgICAgIC5yZWR1Y2UoKHRvdGFsLCBzaGlwKSA9PiB0b3RhbCArIHNoaXAubGVuZ3RoLCAwKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBgJHt0b3RhbEhQfS8ke3RvdGFsSFB9YDtcblxuICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhci5jbGFzc0xpc3QuYWRkKCdiYXInKTtcblxuICAgIGNvbnN0IGhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhpdC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcblxuICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW1wdHkuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcblxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAyLnRleHRDb250ZW50ID0gcGxheWVyLm5hbWU7XG5cbiAgICBoZWFsdGguYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgaGVhbHRoLmFwcGVuZENoaWxkKGJhcik7XG4gICAgaGVhbHRoLmFwcGVuZENoaWxkKGhpdCk7XG4gICAgaGVhbHRoLmFwcGVuZENoaWxkKGVtcHR5KTtcbiAgICBwbGF5ZXJJbmZvLmFwcGVuZENoaWxkKHAxKTtcbiAgICBwbGF5ZXJJbmZvLmFwcGVuZENoaWxkKGhlYWx0aCk7XG4gICAgcGxheWVySW5mby5hcHBlbmRDaGlsZChwMik7XG4gICAgZ2FtZS5hcHBlbmRDaGlsZChwbGF5ZXJJbmZvKTtcbiAgfSk7XG59O1xuXG5jb25zdCBpbml0aWFsaXplR2FtZSA9ICgpID0+IHtcbiAgaW5pdGlhbGl6ZUdhbWVDb250YWluZXIoKTtcbiAgaW5pdGlhbGl6ZVBsYXllckhQKCk7XG4gIGluaXRpYWxpemVCb2FyZCgpO1xufTtcblxuY29uc3QgY2xlYXJNYWluTWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51Jyk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZCgnY2xpY2stc2luaycpO1xuICAgIG1haW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIG1haW5NZW51LnJlbW92ZSgpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBzdGFydEdhbWVQbGF5ZXIgPSBhc3luYyAoZSkgPT4ge1xuICBwbGF5TWVudUNsaWNrU0ZYKCk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgcGxheWVyMU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMU5hbWVJbnB1dCcpLnZhbHVlXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMU5hbWVJbnB1dCcpLnZhbHVlXG4gICAgOiAnUGxheWVyIDEnO1xuICBjb25zdCBwbGF5ZXIyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIyTmFtZUlucHV0JykudmFsdWVcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIyTmFtZUlucHV0JykudmFsdWVcbiAgICA6ICdQbGF5ZXIgMic7XG5cbiAgZ2VuZXJhdGVQbGF5ZXJzKFxuICAgIFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2h1bWFuJyxcbiAgICAgICAgbmFtZTogcGxheWVyMU5hbWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnaHVtYW4nLFxuICAgICAgICBuYW1lOiBwbGF5ZXIyTmFtZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgKTtcblxuICBbY3VycmVudFBsYXllciwgdGFyZ2V0UGxheWVyXSA9IHBsYXllcnM7XG5cbiAgYXdhaXQgY2xlYXJNYWluTWVudSgpO1xuICBpbml0aWFsaXplR2FtZUNvbnRhaW5lcigpO1xuICBpbml0aWFsaXplU2hpcFBsYWNlbWVudFNjcmVlbigpO1xufTtcblxuY29uc3Qgc3RhcnRHYW1lQUkgPSBhc3luYyAoZSkgPT4ge1xuICBwbGF5TWVudUNsaWNrU0ZYKCk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxTmFtZUlucHV0JykudmFsdWVcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxTmFtZUlucHV0JykudmFsdWVcbiAgICA6ICdQbGF5ZXIgMSc7XG4gIGNvbnN0IEFJTGV2ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51IGZvcm0gLmJ1dHRvbi5BSS50b2dnbGVkJykuZGF0YXNldC5sZXZlbDtcblxuICBnZW5lcmF0ZVBsYXllcnMoXG4gICAgW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnaHVtYW4nLFxuICAgICAgICBuYW1lOiBwbGF5ZXJOYW1lLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ0FJJyxcbiAgICAgICAgZGlmZmljdWx0eTogQUlMZXZlbCxcbiAgICAgIH0sXG4gICAgXSxcbiAgKTtcblxuICBbY3VycmVudFBsYXllciwgdGFyZ2V0UGxheWVyXSA9IHBsYXllcnM7XG5cbiAgYXdhaXQgY2xlYXJNYWluTWVudSgpO1xuICBpbml0aWFsaXplR2FtZUNvbnRhaW5lcigpO1xuICBpbml0aWFsaXplU2hpcFBsYWNlbWVudFNjcmVlbigpO1xufTtcblxuY29uc3QgY2xlYXJNYWluTWVudUJ1dHRvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51IC5idXR0b25zJyk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjbGljay1zaW5rJyk7XG4gICAgYnV0dG9uc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrLXNpbmsnKTtcbiAgICAgIHdoaWxlIChidXR0b25zQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5yZW1vdmVDaGlsZChidXR0b25zQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHNob3dWZXJzdXNQbGF5ZXIgPSBhc3luYyAoKSA9PiB7XG4gIHBsYXlNZW51Q2xpY2tTRlgoKTtcbiAgYXdhaXQgY2xlYXJNYWluTWVudUJ1dHRvbnMoKTtcblxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbWVudSAuYnV0dG9ucycpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwxLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gIGxhYmVsMS5odG1sRm9yID0gJ3BsYXllcjFOYW1lSW5wdXQnO1xuICBsYWJlbDEudGV4dENvbnRlbnQgPSAnUGxheWVyIDE6JztcblxuICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dDEuaWQgPSAncGxheWVyMU5hbWVJbnB1dCc7XG4gIGlucHV0MS50eXBlID0gJ3RleHQnO1xuICBpbnB1dDEucGxhY2Vob2xkZXIgPSAnTmFtZSc7XG4gIGlucHV0MS5tYXhMZW5ndGggPSAxNjtcblxuICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGNvbnN0IGxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsMi5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICBsYWJlbDIuaHRtbEZvciA9ICdwbGF5ZXIyTmFtZUlucHV0JztcbiAgbGFiZWwyLnRleHRDb250ZW50ID0gJ1BsYXllciAyOic7XG5cbiAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQyLmlkID0gJ3BsYXllcjJOYW1lSW5wdXQnO1xuICBpbnB1dDIudHlwZSA9ICd0ZXh0JztcbiAgaW5wdXQyLnBsYWNlaG9sZGVyID0gJ05hbWUnO1xuICBpbnB1dDIubWF4TGVuZ3RoID0gMTY7XG5cbiAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBjb25zdCBidG5TdGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5TdGFydC5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgYnRuU3RhcnQudHlwZSA9ICdzdWJtaXQnO1xuICBidG5TdGFydC50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lJztcbiAgYnRuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWVQbGF5ZXIsIHsgb25jZTogdHJ1ZSB9KTtcblxuICBjb25zdCBidG5CYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bkJhY2suY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIGJ0bkJhY2sudGV4dENvbnRlbnQgPSAnQmFjayc7XG4gIGJ0bkJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VmVyc3VzT3B0aW9ucywgeyBvbmNlOiB0cnVlIH0pO1xuXG4gIGxpMS5hcHBlbmRDaGlsZChsYWJlbDEpO1xuICBsaTEuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcbiAgbGkyLmFwcGVuZENoaWxkKGxhYmVsMik7XG4gIGxpMi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuICBsaTMuYXBwZW5kQ2hpbGQoYnRuU3RhcnQpO1xuICB1bC5hcHBlbmRDaGlsZChsaTEpO1xuICB1bC5hcHBlbmRDaGlsZChsaTIpO1xuICB1bC5hcHBlbmRDaGlsZChsaTMpO1xuICBmb3JtLmFwcGVuZENoaWxkKHVsKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidG5CYWNrKTtcbn07XG5cbmNvbnN0IHRvZ2dsZUFJRGlmZmljdWx0eSA9IChlKSA9PiB7XG4gIHBsYXlNZW51Q2xpY2tTRlgoKTtcbiAgY29uc3QgY3VycmVudFRvZ2dsZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51IGZvcm0gLmJ1dHRvbi5BSS50b2dnbGVkJyk7XG4gIGNvbnN0IGNsaWNrZWRCdXR0b24gPSBlLmN1cnJlbnRUYXJnZXQ7XG5cbiAgY3VycmVudFRvZ2dsZWRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlZCcpO1xuICBjbGlja2VkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZWQnKTtcbn07XG5cbmNvbnN0IHNob3dWZXJzdXNBSSA9IGFzeW5jICgpID0+IHtcbiAgcGxheU1lbnVDbGlja1NGWCgpO1xuICBhd2FpdCBjbGVhck1haW5NZW51QnV0dG9ucygpO1xuXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51IC5idXR0b25zJyk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gIGxhYmVsLmh0bWxGb3IgPSAncGxheWVyMU5hbWVJbnB1dCc7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gJ1BsYXllciAxOic7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5pZCA9ICdwbGF5ZXIxTmFtZUlucHV0JztcbiAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSAnTmFtZSc7XG4gIGlucHV0Lm1heExlbmd0aCA9IDE2O1xuXG4gIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICBwLnRleHRDb250ZW50ID0gJ0FJIExldmVsOic7XG5cbiAgY29uc3QgYnRuRWFzeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5FYXN5LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdBSScsICd0b2dnbGVkJyk7XG4gIGJ0bkVhc3kudHlwZSA9ICdidXR0b24nO1xuICBidG5FYXN5LnRleHRDb250ZW50ID0gJ0Vhc3knO1xuICBidG5FYXN5LmRhdGFzZXQubGV2ZWwgPSAnRWFzeSc7XG4gIGJ0bkVhc3kuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBSURpZmZpY3VsdHkpO1xuXG4gIGNvbnN0IGJ0bk5vcm1hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5Ob3JtYWwuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ0FJJyk7XG4gIGJ0bk5vcm1hbC50eXBlID0gJ2J1dHRvbic7XG4gIGJ0bk5vcm1hbC50ZXh0Q29udGVudCA9ICdOb3JtYWwnO1xuICBidG5Ob3JtYWwuZGF0YXNldC5sZXZlbCA9ICdOb3JtYWwnO1xuICBidG5Ob3JtYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBSURpZmZpY3VsdHkpO1xuXG4gIGNvbnN0IGJ0bkNoZWF0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bkNoZWF0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdBSScpO1xuICBidG5DaGVhdC50eXBlID0gJ2J1dHRvbic7XG4gIGJ0bkNoZWF0LnRleHRDb250ZW50ID0gJ0NoZWF0JztcbiAgYnRuQ2hlYXQuZGF0YXNldC5sZXZlbCA9ICdDaGVhdCc7XG4gIGJ0bkNoZWF0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQUlEaWZmaWN1bHR5KTtcblxuICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGNvbnN0IGJ0blN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0blN0YXJ0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICBidG5TdGFydC50eXBlID0gJ3N1Ym1pdCc7XG4gIGJ0blN0YXJ0LnRleHRDb250ZW50ID0gJ1N0YXJ0IEdhbWUnO1xuICBidG5TdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZUFJLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgY29uc3QgYnRuQmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5CYWNrLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICBidG5CYWNrLnRleHRDb250ZW50ID0gJ0JhY2snO1xuICBidG5CYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1ZlcnN1c09wdGlvbnMsIHsgb25jZTogdHJ1ZSB9KTtcblxuICBsaTEuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBsaTEuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBsaTIuYXBwZW5kQ2hpbGQocCk7XG4gIGxpMi5hcHBlbmRDaGlsZChidG5FYXN5KTtcbiAgbGkyLmFwcGVuZENoaWxkKGJ0bk5vcm1hbCk7XG4gIGxpMi5hcHBlbmRDaGlsZChidG5DaGVhdCk7XG4gIGxpMy5hcHBlbmRDaGlsZChidG5TdGFydCk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMSk7XG4gIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gIHVsLmFwcGVuZENoaWxkKGxpMyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodWwpO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkJhY2spO1xufTtcblxuY29uc3Qgc2hvd1ZlcnN1c09wdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gIHBsYXlNZW51Q2xpY2tTRlgoKTtcbiAgcGxheU1lbnVCR00oKTtcbiAgYXdhaXQgY2xlYXJNYWluTWVudUJ1dHRvbnMoKTtcblxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbWVudSAuYnV0dG9ucycpO1xuXG4gIGNvbnN0IHZlcnN1c1BsYXllckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB2ZXJzdXNQbGF5ZXJCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIHZlcnN1c1BsYXllckJ0bi50ZXh0Q29udGVudCA9ICdWZXJzdXMgUGxheWVyJztcbiAgdmVyc3VzUGxheWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1ZlcnN1c1BsYXllciwgeyBvbmNlOiB0cnVlIH0pO1xuXG4gIGNvbnN0IHZlcnN1c0FJQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHZlcnN1c0FJQnRuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICB2ZXJzdXNBSUJ0bi50ZXh0Q29udGVudCA9ICdWZXJzdXMgQUknO1xuICB2ZXJzdXNBSUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dWZXJzdXNBSSwgeyBvbmNlOiB0cnVlIH0pO1xuXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQodmVyc3VzUGxheWVyQnRuKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh2ZXJzdXNBSUJ0bik7XG59O1xuXG5jb25zdCBpbml0aWFsaXplTWFpbk1lbnUgPSAoKSA9PiB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVTcHJpdGVzKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCByZXNldFNoaXBQbGFjZW1lbnREcmFnRGF0YSk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVQbGFjZW1lbnRDZWxscyk7XG4gIGNvbnN0IHNpdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1jb250YWluZXInKTtcblxuICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnUnKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0JhdHRsZXNoaXAnO1xuXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7XG5cbiAgY29uc3QgcGxheUdhbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcGxheUdhbWVCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIHBsYXlHYW1lQnRuLnRleHRDb250ZW50ID0gJ1BsYXkgR2FtZSc7XG4gIHBsYXlHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1ZlcnN1c09wdGlvbnMsIHsgb25jZTogdHJ1ZSB9KTtcblxuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvcHlyaWdodC5jbGFzc0xpc3QuYWRkKCdjb3B5cmlnaHQnKTtcblxuICBjb25zdCBnaXRodWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGdpdGh1Yi5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9yaW50aGVvLyc7XG5cbiAgY29uc3QgZ2l0aHViU1ZHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG5cbiAgY29uc3QgeWVhciA9IChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLnRleHRDb250ZW50ID0gYCDCqSAke3llYXJ9IHJpbnRoZW9gO1xuXG4gIGdpdGh1Yi5hcHBlbmRDaGlsZChnaXRodWJTVkcpO1xuICBjb3B5cmlnaHQuYXBwZW5kQ2hpbGQoZ2l0aHViKTtcbiAgY29weXJpZ2h0LmFwcGVuZENoaWxkKHNwYW4pO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZChwbGF5R2FtZUJ0bik7XG4gIG1haW5NZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XG4gIG1haW5NZW51LmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG4gIHNpdGVDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbk1lbnUpO1xuXG4gIGdpdGh1YlNWRy5vdXRlckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5naXRodWI8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsMkExMCwxMCAwIDAsMCAyLDEyQzIsMTYuNDIgNC44NywyMC4xNyA4Ljg0LDIxLjVDOS4zNCwyMS41OCA5LjUsMjEuMjcgOS41LDIxQzkuNSwyMC43NyA5LjUsMjAuMTQgOS41LDE5LjMxQzYuNzMsMTkuOTEgNi4xNCwxNy45NyA2LjE0LDE3Ljk3QzUuNjgsMTYuODEgNS4wMywxNi41IDUuMDMsMTYuNUM0LjEyLDE1Ljg4IDUuMSwxNS45IDUuMSwxNS45QzYuMSwxNS45NyA2LjYzLDE2LjkzIDYuNjMsMTYuOTNDNy41LDE4LjQ1IDguOTcsMTggOS41NCwxNy43NkM5LjYzLDE3LjExIDkuODksMTYuNjcgMTAuMTcsMTYuNDJDNy45NSwxNi4xNyA1LjYyLDE1LjMxIDUuNjIsMTEuNUM1LjYyLDEwLjM5IDYsOS41IDYuNjUsOC43OUM2LjU1LDguNTQgNi4yLDcuNSA2Ljc1LDYuMTVDNi43NSw2LjE1IDcuNTksNS44OCA5LjUsNy4xN0MxMC4yOSw2Ljk1IDExLjE1LDYuODQgMTIsNi44NEMxMi44NSw2Ljg0IDEzLjcxLDYuOTUgMTQuNSw3LjE3QzE2LjQxLDUuODggMTcuMjUsNi4xNSAxNy4yNSw2LjE1QzE3LjgsNy41IDE3LjQ1LDguNTQgMTcuMzUsOC43OUMxOCw5LjUgMTguMzgsMTAuMzkgMTguMzgsMTEuNUMxOC4zOCwxNS4zMiAxNi4wNCwxNi4xNiAxMy44MSwxNi40MUMxNC4xNywxNi43MiAxNC41LDE3LjMzIDE0LjUsMTguMjZDMTQuNSwxOS42IDE0LjUsMjAuNjggMTQuNSwyMUMxNC41LDIxLjI3IDE0LjY2LDIxLjU5IDE1LjE3LDIxLjVDMTkuMTQsMjAuMTYgMjIsMTYuNDIgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPjwvc3ZnPic7XG4gIHNob3dWb2x1bWVCdXR0b24oKTtcbn07XG5cbmluaXRpYWxpemVNYWluTWVudSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9