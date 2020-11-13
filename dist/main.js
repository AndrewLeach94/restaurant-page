/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst removePreviousContent = () => {\r\n    const contentArea = document.querySelector(\"#content\");\r\n    contentArea.removeChild(contentArea.firstChild);\r\n}\r\n\r\nconst homePage = () => {\r\n    const contentArea = document.querySelector(\"#content\");\r\n\r\n    //remove the previous content except if it's on page load\r\n    if(contentArea.children.length != 0) {\r\n        removePreviousContent();\r\n    }\r\n\r\n    const homeContentArea = document.createElement(\"div\");\r\n    homeContentArea.id = \"content_home\";\r\n    contentArea.appendChild(homeContentArea);\r\n    \r\n    // build the main section\r\n    const mainSection = document.createElement(\"section\");\r\n    mainSection.id = \"column_left-home\";\r\n    homeContentArea.appendChild(mainSection);\r\n\r\n    //build the CTA container\r\n    const ctaContainer = document.createElement(\"article\")\r\n    ctaContainer.id = \"CTA-container\";\r\n    mainSection.appendChild(ctaContainer);\r\n\r\n    //add header to CTA container\r\n    const ctaMessage = document.createElement(\"h1\");\r\n    ctaMessage.textContent = \"Definitely not your typical New Orleans cuisine\"\r\n    ctaMessage.id = \"cta_message-home\";\r\n    ctaContainer.appendChild(ctaMessage);\r\n\r\n    //add CTA buttons\r\n    const ctaPrimary = document.createElement(\"button\");\r\n    ctaPrimary.type = \"button\";\r\n    ctaPrimary.className = \"cta_primary\";\r\n    ctaPrimary.textContent = \"View Menu\";\r\n    ctaContainer.appendChild(ctaPrimary);\r\n\r\n    const ctaSecondary = document.createElement(\"button\");\r\n    ctaSecondary.type = \"button\";\r\n    ctaSecondary.className = \"cta_secondary\";\r\n    ctaSecondary.textContent = \"Get in Touch!\";\r\n    ctaContainer.appendChild(ctaSecondary);\r\n\r\n    //add social media container\r\n    const socialContainer = document.createElement(\"div\");\r\n    socialContainer.id = \"social_container\";\r\n    ctaContainer.appendChild(socialContainer);\r\n\r\n    //add social media buttons\r\n    const facebookIcon = document.createElement(\"i\");\r\n    facebookIcon.className = \"fab fa-facebook\";\r\n    socialContainer.appendChild(facebookIcon);\r\n    \r\n    const twitterIcon = document.createElement(\"i\");\r\n    twitterIcon.className = \"fab fa-twitter\";\r\n    socialContainer.appendChild(twitterIcon);\r\n    \r\n    const instagramIcon = document.createElement(\"i\");\r\n    instagramIcon.className = \"fab fa-instagram\";\r\n    socialContainer.appendChild(instagramIcon);\r\n\r\n    // add the image figure container\r\n    const imageContainer = document.createElement(\"figure\");\r\n    imageContainer.id = \"container_image-home\";\r\n    homeContentArea.appendChild(imageContainer);\r\n\r\n    // add cover image\r\n    const coverImage = document.createElement(\"img\");\r\n    coverImage.src = \"images/gumbo.webp\"\r\n    imageContainer.appendChild(coverImage);    \r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://resturant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n;\r\n\r\n\r\nconst navigation = (() => {\r\n    const contentArea = document.querySelector(\"#content\")\r\n\r\n    //add event listeners\r\n    const home = (() => {\r\n        const homeLink = document.querySelector(\"#link_home\");\r\n        homeLink.addEventListener(\"click\", () => (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)());\r\n    })();\r\n\r\n    const menu = (() => {\r\n        const menuLink = document.querySelector(\"#link_menu\");\r\n        menuLink.addEventListener(\"click\", () => (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.default)());    \r\n    })();\r\n\r\n    return {home, menu};\r\n})();\r\n\r\n//initial page load\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\r\n\r\n\n\n//# sourceURL=webpack://resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst MenuPage = () => {\r\n    const removePreviousContent = () => {\r\n        const contentArea = document.querySelector(\"#content\");\r\n        const previousContent = contentArea.firstChild;\r\n    \r\n        //add animateOut class to element before removing it for seamless transition\r\n        previousContent.classList.add(\"animateOut\")\r\n    \r\n        contentArea.addEventListener(\"transitionend\", () => {\r\n            previousContent.remove();\r\n            buildMenuPage();\r\n        })\r\n    }\r\n\r\n    const buildMenuPage = () => {\r\n    //build menu container \r\n    const contentArea = document.querySelector(\"#content\");\r\n\r\n    const menuContentArea = document.createElement(\"div\");\r\n    menuContentArea.id = \"content_menu\";\r\n    contentArea.appendChild(menuContentArea);\r\n\r\n    //build the grid structure\r\n    const menuParentGrid = document.createElement(\"main\"); \r\n    menuParentGrid.id = \"menu_parent-grid\";\r\n    menuParentGrid.className = \"fadeIn\";\r\n    menuContentArea.appendChild(menuParentGrid);\r\n\r\n    //build the menu heading\r\n    const heading = document.createElement(\"h1\");\r\n    heading.id = \"menu_heading-primary\";\r\n    heading.textContent = \"Menu\";\r\n    menuParentGrid.appendChild(heading);\r\n\r\n    //build the menu navigation\r\n\r\n    const navContainer = document.createElement(\"div\");\r\n    navContainer.id = \"menu_navigation\";\r\n    menuParentGrid.appendChild(navContainer);\r\n\r\n    //build menu navigation buttons\r\n    const buttonAppetizer = document.createElement(\"button\");\r\n    buttonAppetizer.type = \"button\";\r\n    buttonAppetizer.id = \"menu_nav-appetizer\";\r\n    buttonAppetizer.id = \"menu_nav-button\";\r\n    buttonAppetizer.textContent = \"Appetizers\";\r\n    navContainer.appendChild(buttonAppetizer);\r\n    \r\n    const buttonEntree = document.createElement(\"button\");\r\n    buttonEntree.type = \"button\";\r\n    buttonEntree.id = \"menu_nav-entree\";\r\n    buttonEntree.id = \"menu_nav-button\";\r\n    buttonEntree.textContent = \"Entrees\";\r\n    navContainer.appendChild(buttonEntree);\r\n    \r\n    const buttonDessert = document.createElement(\"button\");\r\n    buttonDessert.type = \"button\";\r\n    buttonDessert.id = \"menu_nav-dessert\";\r\n    buttonDessert.id = \"menu_nav-button\";\r\n    buttonDessert.textContent = \"Desserts\";\r\n    navContainer.appendChild(buttonDessert);\r\n\r\n    // build the menu item container\r\n    const itemParent = document.createElement(\"div\");\r\n    itemParent.id = \"menu_item-parent\";\r\n    menuParentGrid.appendChild(itemParent);\r\n\r\n    // build the menu item objects\r\n    const appetizers = [\r\n        {\r\n            name: \"Seafood Gumbo\",\r\n            bio: \"Some seafood gumbo\",\r\n            price: \"$9.95\",\r\n        },\r\n\r\n        {\r\n            name: \"Soup of the Day\",\r\n            bio: \"We rotate through our soups on a seasonal basis\",\r\n            price: \"$9.95\",\r\n        },\r\n\r\n        {\r\n            name: \"Boudin Egg Roll\",\r\n            bio: \"Served with a vibrant mirliton jicama slaw and a crispy andouille vinaigrette\",\r\n            price: \"$9.95\",\r\n        },\r\n\r\n        {\r\n            name: \"Wedge Salad\",\r\n            bio: \"Iceberg lettuce topped with a creamy creole dressing, grape tomato, red onion and crumbled blue cheese\",\r\n            price: \"$7.95\",\r\n        },\r\n\r\n        {\r\n            name: \"Onion Tart\",\r\n            bio: \"Served warm, topped with arugula, crispy bacon batons and creole mustard vinaigrette\",\r\n            price: \"$9.50\",\r\n        },\r\n\r\n    ]\r\n\r\n    const entrees = [\r\n        {\r\n            name: \"Shrimp and Grits\",\r\n            bio: \"Slow cooked stone ground grits, topped with Louisiana Gulf shrimp, leeks, smoked tomato butter sauce and crispy garlic\",\r\n            price: \"$29\",\r\n        },\r\n\r\n        {\r\n            name: \"Crispy Onion Salmon\",\r\n            bio: \"Faroe Islands Salmon topped with a sweet onion panko crust and served with haricots verts and a wild mushroom cream sauce\",\r\n            price: \"$31\",\r\n        },\r\n\r\n        {\r\n            name: \"Pesto Linguine\",\r\n            bio: \"Sauteed asparagus, grape tomato, arugula, red onion, roasted bell pepper and sweet corn tossed with linguine and pesto\",\r\n            price: \"$22, w/shrimp: $31\",\r\n        },\r\n\r\n        {\r\n            name: \"Roasted Half Chicken\",\r\n            bio: \"House brined chicken with buttermilk mashed potatoes, sauteed kale and bacon, and a Steen’s cane syrup glaze\",\r\n            price: \"$29\",\r\n        },\r\n\r\n        {\r\n            name: \"Wood Grilled Porkschop\",\r\n            bio: \"Double cut chop served with andouille potato hash, smoked corn cream and haricots verts\",\r\n            price: \"$32\",\r\n        },\r\n\r\n\r\n    ]\r\n\r\n    const desserts = [\r\n        {\r\n            name: \"White Chocolate Bread Pudding\",\r\n            bio: \"With candied pecans and rum sauce\",\r\n            price: \"$9.95\",\r\n        },\r\n\r\n        {\r\n            name: \"Flourless Chocolate Cake\",\r\n            bio: \"With creme anglaise and blackberries\",\r\n            price: \"$9.95\",\r\n        },\r\n\r\n        {\r\n            name: \"Vanilla Bean Créme Brûlée\",\r\n            bio: \"Self-explainatory...\",\r\n            price: \"$9.95\",\r\n        },\r\n\r\n    ]\r\n\r\n    // populate the menu!\r\n\r\n    const populateAppetizers = (() => {\r\n        // create the heading\r\n        const heading = document.createElement(\"h2\");\r\n        heading.className = \"menu_subheading\";\r\n        heading.textContent = \"Appetizers\";\r\n        itemParent.appendChild(heading); \r\n\r\n        //build a loop that adds every menu item to the item container\r\n        appetizers.forEach(currentItem => {\r\n            const itemContainer = document.createElement(\"div\");\r\n            itemContainer.id = `appetizer_item-${currentItem.name}`\r\n            itemContainer.className = \"item_container\";\r\n            itemParent.appendChild(itemContainer);\r\n            \r\n\r\n            const name = document.createElement(\"h4\");\r\n            name.textContent = currentItem.name;\r\n\r\n            const bio = document.createElement(\"p\");\r\n            bio.textContent = currentItem.bio;\r\n\r\n            const price = document.createElement(\"p\");\r\n            price.textContent = currentItem.price;\r\n\r\n            // push menu items to its container\r\n            itemContainer.appendChild(name);\r\n            itemContainer.appendChild(bio);\r\n            itemContainer.appendChild(price);\r\n        })\r\n    })();\r\n\r\n    const populateEntrees = () => {\r\n        //remove previous content - if any\r\n        const removePreviousMenu = (() => {\r\n            const previousMenu = document.querySelector(\"#menu_item-parent\");\r\n\r\n            //add animateOut class to element before removing it for seamless transition\r\n            previousMenu.className = \"animateOut\";\r\n\r\n            const removeElement = () => {\r\n                while (previousMenu.firstChild) {\r\n                    previousMenu.removeChild(previousMenu.firstChild);\r\n                }\r\n                \r\n                //populate the menu\r\n                populateMenu();\r\n            }\r\n                //remove all DOM elements aftger the transition has ended\r\n                previousMenu.addEventListener(\"transitionend\", () => removeElement()); \r\n\r\n        })();\r\n        \r\n        const populateMenu = () => {\r\n            // create the heading\r\n            const heading = document.createElement(\"h2\");\r\n            heading.className = \"menu_subheading\";\r\n            heading.textContent = \"Entrées\";\r\n            itemParent.appendChild(heading); \r\n\r\n            //build a loop that adds every menu item to the item container\r\n            entrees.forEach(currentItem => {\r\n                const itemContainer = document.createElement(\"div\");\r\n                itemContainer.id = `entree_item-${currentItem.name}`\r\n                itemContainer.className = \"item_container\";\r\n                itemParent.appendChild(itemContainer);\r\n                \r\n\r\n                const name = document.createElement(\"h4\");\r\n                name.textContent = currentItem.name;\r\n\r\n                const bio = document.createElement(\"p\");\r\n                bio.textContent = currentItem.bio;\r\n\r\n                const price = document.createElement(\"p\");\r\n                price.textContent = currentItem.price;\r\n\r\n                // push menu items to its container\r\n                itemContainer.appendChild(name);\r\n                itemContainer.appendChild(bio);\r\n                itemContainer.appendChild(price);\r\n\r\n                //animate the menu in\r\n                animateIn();\r\n        })\r\n\r\n        }\r\n\r\n        const animateIn = () => itemParent.className = \"animateIn\";\r\n\r\n    };\r\n\r\n    const populateDesserts = () => {\r\n        //remove previous content - if any\r\n        const removePreviousMenu = (() => {\r\n            const previousMenu = document.querySelector(\"#menu_item-parent\");\r\n\r\n            //add animateOut class to element before removing it for seamless transition\r\n            previousMenu.className = \"animateOut\";\r\n\r\n            const removeElement = () => {\r\n                while (previousMenu.firstChild) {\r\n                    previousMenu.removeChild(previousMenu.firstChild);\r\n                }\r\n                \r\n                //populate the menu\r\n                populateMenu();\r\n            }\r\n                //remove all DOM elements aftger the transition has ended\r\n                previousMenu.addEventListener(\"transitionend\", () => removeElement()); \r\n\r\n        })();\r\n        \r\n        const populateMenu = () => {\r\n        // create the heading\r\n        const heading = document.createElement(\"h2\");\r\n        heading.className = \"menu_subheading\";\r\n        heading.textContent = \"Desserts\";\r\n        itemParent.appendChild(heading); \r\n\r\n        //build a loop that adds every menu item to the item container\r\n        desserts.forEach(currentItem => {\r\n            const itemContainer = document.createElement(\"div\");\r\n            itemContainer.id = `appetizer_item-${currentItem.name}`\r\n            itemContainer.className = \"item_container\";\r\n            itemParent.appendChild(itemContainer);\r\n            \r\n\r\n            const name = document.createElement(\"h4\");\r\n            name.textContent = currentItem.name;\r\n\r\n            const bio = document.createElement(\"p\");\r\n            bio.textContent = currentItem.bio;\r\n\r\n            const price = document.createElement(\"p\");\r\n            price.textContent = currentItem.price;\r\n\r\n            // push menu items to its container\r\n            itemContainer.appendChild(name);\r\n            itemContainer.appendChild(bio);\r\n            itemContainer.appendChild(price);\r\n\r\n            //animate the menu in\r\n            animateIn();\r\n        })\r\n\r\n        }\r\n\r\n        const animateIn = () => itemParent.className = \"animateIn\";\r\n    };\r\n\r\n\r\n    //add button event listeners \r\n    buttonEntree.addEventListener(\"click\", () => populateEntrees());\r\n    buttonDessert.addEventListener(\"click\", () => populateDesserts())\r\n\r\n    }\r\n\r\n    //remove previous content and build menu page\r\n    removePreviousContent();\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuPage);\n\n//# sourceURL=webpack://resturant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;