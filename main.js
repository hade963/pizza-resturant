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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAboutPage\": () => (/* binding */ createAboutPage)\n/* harmony export */ });\nfunction crEl(element) { \n  return document.createElement(element);\n}\nfunction createAboutPage() { \n  const container = document.querySelector('main .container');\n  container.innerHTML = '';\n  const about = crEl('div');\n  about.id = 'about';\n    const h1 = crEl('h1');\n    h1.textContent = 'About Us ';\n    about.appendChild(h1);\n    const text = crEl('p');\n    text.textContent = 'we are a spical pizza resturant, we offer thousand kinds of pizza and we have a deleviry service because our goal is the rest of our customers and we beleive that work have to be done in the best way it would.';\n    about.appendChild(text);\n  container.appendChild(about);\n  console.log('done');\n}\n\n//# sourceURL=webpack://pizza-resturant/./src/about.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElements\": () => (/* binding */ createElements),\n/* harmony export */   \"createHomePage\": () => (/* binding */ createHomePage)\n/* harmony export */ });\nfunction crEl(element) { \n  return document.createElement(element);\n}\n function createElements() {\n  // Start header\n  const header = crEl('header');\n  const container = crEl('div');\n  container.className = 'container';\n\n  const logo = crEl('div');\n  logo.className = 'logo';\n  logo.textContent = 'lissa Pizza';\n  container.appendChild(logo);\n\n  const ul = crEl('ul');\n  const links = ['Home','Menu','About us'];\n  for(let i=0;i<links.length;i++) { \n    const element = crEl('li');\n    element.textContent = links[i];\n    element.dataset.index = i+1;\n    ul.appendChild(element);\n  }\n\n  container.appendChild(ul);\n  header.appendChild(container);\n  // End header\n  \n\n  // Start main content\n  const main = crEl('main');\n  // End main content \n  const content = document.querySelector('#content');\n  content.appendChild(header);\n  content.appendChild(main);\n}\nfunction createHomePage() { \n  const main = document.querySelector('main'); \n  main.innerHTML = '';\n  const cont = crEl('div');\n  cont.className = 'container';\n  const h1 = crEl('h1');\n  h1.textContent = 'Welecome in the best Pizza resturant in the world';\n  const p = crEl('p');\n  p.textContent = 'We are offering the best pizza and fastest dilevary in the world. tasty, dilicuos and high quality.';\n  const btn = crEl('button');\n  btn.textContent = 'Order Now!';\n  cont.appendChild(h1);\n  cont.appendChild(p);\n  cont.appendChild(btn);\n  main.appendChild(cont);\n}\n\n\n\n\n//# sourceURL=webpack://pizza-resturant/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createElements)();\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();\nconst orderBtn = document.querySelector('main .container button');\norderBtn.addEventListener('click',function() { \n});\n\n// createMenu();\nconst home = document.querySelector('[data-index = \"1\"');\nhome.addEventListener('click',_homepage__WEBPACK_IMPORTED_MODULE_0__.createHomePage);\n\nconst menu = document.querySelector('[data-index = \"2\"');\nmenu.addEventListener('click',_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu);\n\nconst about = document.querySelector('[data-index = \"3\"');\nabout.addEventListener('click',_about__WEBPACK_IMPORTED_MODULE_2__.createAboutPage);\n\n//# sourceURL=webpack://pizza-resturant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction crEl(element) { \n  return document.createElement(element);\n}\n\nlet myproducts = ['images/aurelien-lemasson-theobald-x00CzBt4Dfk-unsplash.jpg',\n  'images/engin-akyurt-QI32uJ52aOo-unsplash.jpg',\n  'images/kelvin-t-AcA8moIiD3g-unsplash.jpg',\n  'images/engin-akyurt-QI32uJ52aOo-unsplash.jpg',\n  'images/nik-owens-40OJLYVWeeM-unsplash.jpg',\n  'images/omer-haktan-bulut-Ut7Vz28HNEQ-unsplash.jpg',\n  'images/quin-engle-lHUdfk5WGXc-unsplash.jpg',\n  'images/aurelien-lemasson-theobald-x00CzBt4Dfk-unsplash.jpg',\n  'images/the-pizza-g740589339_1920 (2).jpg'\n];\n\nfunction createMenu() { \n  const container = document.querySelector('main .container');\n  container.innerHTML = ''; \n  const menu = crEl('div');\n  menu.className = 'menu';\n  for(let i=0;i<myproducts.length;i++) { \n    const box = crEl('div');\n    box.className = 'box';\n      const imageholder = crEl('div');\n      imageholder.className = 'imageholder';\n        const image = crEl('img');\n        image.src = myproducts[i];\n        const span = crEl('span');\n          span.appendChild(image);\n        imageholder.appendChild(span);\n      box.appendChild(imageholder);\n      const content = crEl('div');\n      content.className = 'content';\n        const h3 = crEl('h3');\n        h3.textContent = `Offer number ${i+1}`;\n        content.appendChild(h3);\n        const text = crEl('p');\n        text.textContent = `this offer have a ${i*50 / 100 }% off order it fast`;\n        content.appendChild(text);\n        const buton = crEl('button');\n        buton.textContent = 'Start Your Order';\n        content.appendChild(buton);\n      box.appendChild(content);\n      menu.appendChild(box);\n    }\n    container.appendChild(menu);\n}\n\n//# sourceURL=webpack://pizza-resturant/./src/menu.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;