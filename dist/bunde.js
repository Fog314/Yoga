/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../script.js":
/*!********************!*\
  !*** ../script.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.addEventListener('DOMContentLoaded', function () {\r\n    'use strict';\r\n\r\n    let tabs = __webpack_require__(/*! ./parts/tabs.js */ \"./tabs.js\"),\r\n        timer = __webpack_require__(/*! ./parts/timer.js */ \"./timer.js\"),\r\n        modal = __webpack_require__(/*! ./parts/modal.js */ \"./modal.js\"),\r\n        form = __webpack_require__(/*! ./parts/form.js */ \"./form.js\"),\r\n        slider = __webpack_require__(/*! ./parts/slider.js */ \"./slider.js\"),\r\n        calc = __webpack_require__(/*! ./parts/calc.js */ \"./calc.js\");\r\n\r\n        tabs();\r\n        timer();\r\n        modal();\r\n        form();\r\n        slider();\r\n        calc();\r\n});\n\n//# sourceURL=webpack:///../script.js?");

/***/ }),

/***/ "./calc.js":
/*!*****************!*\
  !*** ./calc.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return calc; });\nfunction calc(){\r\n\r\nlet persons = document.querySelectorAll('.counter-block-input')[0],\r\n    restDays = document.querySelectorAll('.counter-block-input')[1],\r\n    place = document.querySelector('#select'),\r\n    totalValue = document.querySelector('#total'),\r\n    personsSum = 0,\r\n    daysSum = 0,\r\n    total = 0;\r\n\r\n\r\ntotalValue.innerHTML = 0;\r\n\r\npersons.addEventListener('input', () => {\r\n    personsSum = persons.value;\r\n    total = (Number(daysSum) + Number(personsSum)) * 4000;\r\n    console.log(total);\r\n    if (restDays.value == '' || persons.value == '') {\r\n        totalValue.innerHTML = 0;\r\n    } else {\r\n        totalValue.innerHTML = total;\r\n    }\r\n});\r\n\r\nrestDays.addEventListener('input', () => {\r\n    daysSum = restDays.value;\r\n    total = (Number(daysSum) + Number(personsSum)) * 4000;\r\n    if (persons.value == '' || restDays.value == '') {\r\n        totalValue.innerHTML = 0;\r\n    } else {\r\n        totalValue.innerHTML = total;\r\n    }\r\n});\r\n\r\n\r\nplace.addEventListener('change', () => {\r\n    if (restDays.value == '' || persons.value == '') {\r\n        totalValue.innerHTML = 0;\r\n    } else {\r\n        let a = total;\r\n        totalValue.innerHTML = a * place.options[place.selectedIndex].value;\r\n    }\r\n\r\n\r\n});\r\n\r\nlocalStorage.setItem(\"number\", 1);\r\n\r\n\r\nconsole.log(localStorage.getItem(\"number\"));\r\n\r\n\r\nlocalStorage.removeItem(\"number\");\r\n}\n\n//# sourceURL=webpack:///./calc.js?");

/***/ }),

/***/ "./form.js":
/*!*****************!*\
  !*** ./form.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let message = {\r\n    loading: \"загрузка\",\r\n    success: \"Спасибо, скоро мы с вами свяжемся\",\r\n    failure: \"Что-то пошло не так\"\r\n};\r\n\r\nlet form = document.querySelector(\".main-form\");\r\nlet formInput = form.querySelector('input');\r\nlet input = document.getElementsByTagName('input');\r\nlet contactForm = document.querySelector('#form');\r\nlet contactFormInput = contactForm.querySelectorAll('input');\r\nlet statusMessage = document.createElement('div');\r\nconsole.log(form);\r\nconsole.log(contactForm);\r\nstatusMessage.classList.add('status');\r\n\r\nfunction writeMessage() {\r\n    return new Promise((resolve, reject) => {\r\n        resolve();\r\n        reject();\r\n    });\r\n}\r\n\r\nconst func = writeMessage();\r\n\r\nlet funcSuccess = function () {\r\n    statusMessage.textContent = message.success;\r\n}\r\n\r\nlet funcFailure = function () {\r\n    statusMessage.textContent = message.failure;\r\n}\r\n\r\nfunc.then(funcSuccess, funcFailure);\r\n\r\n\r\n\r\n\r\n///////////////////////////Event listener навешиваем\r\nform.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n    // создать объект для формы\r\n    var formData = new FormData();\r\n\r\n    function appendFormData(key, value) {\r\n        formData.append(key, value);\r\n    }\r\n    appendFormData(formInput.name, formInput.value);\r\n\r\n\r\n    ///переводим данные в формат json\r\n    let obj = {};\r\n    formData.forEach(function (value, key) {\r\n        obj[key] = value;\r\n    });\r\n    let json = JSON.stringify(obj); ///js обьекты в json формат\r\n\r\n\r\n    // отослать\r\n    var xhr = new XMLHttpRequest();\r\n    xhr.open(\"POST\", \"server.php\");\r\n    xhr.send(json);\r\n    xhr.addEventListener('readystatechange', writeMessage);\r\n    for (let i = 0; i < input.length; i++) {\r\n        input[i].value = \"\";\r\n    }\r\n\r\n    writeMessage();\r\n\r\n});\r\ncontactForm.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n    // создать объект для формы\r\n    var formData = new FormData();\r\n\r\n    function appendFormData(key, value) {\r\n        formData.append(key, value);\r\n    }\r\n\r\n    for (let i = 0; i < contactFormInput.length; i++) {\r\n        appendFormData(contactFormInput[i].name, contactFormInput[i].value);\r\n    }\r\n\r\n    let obj = {};\r\n    formData.forEach(function (value, key) {\r\n        obj[key] = value;\r\n    });\r\n    let json = JSON.stringify(obj); ///js обьекты в json формат\r\n\r\n    // отослать\r\n    var xhr = new XMLHttpRequest();\r\n    xhr.open(\"POST\", \"server.php\");\r\n    xhr.send(json);\r\n    xhr.addEventListener('readystatechange', writeMessage);\r\n    for (let i = 0; i < input.length; i++) {\r\n        input[i].value = \"\";\r\n    }\r\n\r\n    writeMessage();\r\n\r\n});\n\n//# sourceURL=webpack:///./form.js?");

/***/ }),

/***/ "./modal.js":
/*!******************!*\
  !*** ./modal.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let more = document.querySelector('.more');\r\nlet overlay = document.querySelector('.overlay');\r\nlet close = document.querySelector('.popup-close');\r\nlet descriptionBtn = document.querySelectorAll('.description-btn');\r\n\r\nfor (let i = 0; i < descriptionBtn.length; i++) {\r\n    descriptionBtn[i].addEventListener('click', function () {\r\n        overlay.style.display = 'block';\r\n        this.classList.add('more-splash');\r\n        document.body.style.overflow = 'hidden';\r\n    });\r\n}\r\n\r\n\r\nmore.addEventListener('click', function () {\r\n    overlay.style.display = 'block';\r\n    this.classList.add('more-splash');\r\n    document.body.style.overflow = 'hidden';\r\n});\r\n\r\nclose.addEventListener('click', function () {\r\n    overlay.style.display = 'none';\r\n    more.classList.remove('more-splash');\r\n    document.body.style.overflow = '';\r\n});\r\n\r\nclass Options {\r\n    constructor(height, width, bg, color, fontSize, textAlign) {\r\n        this.height = height;\r\n        this.width = width;\r\n        this.backgroundColor = bg;\r\n        this.color = color;\r\n        this.fontSize = fontSize;\r\n        this.textAlign = textAlign;\r\n    }\r\n\r\n    divCreat(text = \"defaultText\") {\r\n        let div = document.createElement('div');\r\n        div.textContent = text;\r\n        div.style.cssText = `height: ${this.height};\r\n                                width: ${this.width};\r\n                                background-color: ${this.backgroundColor};\r\n                                color: ${this.color};\r\n                                font-size: ${this.fontSize};\r\n                                text-align: ${this.textAlign};`;\r\n        document.body.appendChild(div);\r\n    }\r\n}\r\nlet styles = ['100px', '100%', 'black', 'white', '140%', 'center']\r\nlet hello = \"©Tim Iskhakov.2020\";\r\nlet newDiv = new Options(...styles);\r\nnewDiv.divCreat(hello);\n\n//# sourceURL=webpack:///./modal.js?");

/***/ }),

/***/ "./slider.js":
/*!*******************!*\
  !*** ./slider.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let slideIndex = 1; ///текущий слайд\r\nlet slides = document.querySelectorAll('.slider-item');\r\nlet prev = document.querySelector('.prev');\r\nlet next = document.querySelector('.next');\r\n\r\nlet dotsWrap = document.querySelector('.slider-dots');\r\nlet dots = document.querySelectorAll('.dot');\r\nconsole.log(dots);\r\nshowSlides(slideIndex);\r\n\r\n\r\nfunction showSlides(n) {\r\n\r\n    if (n > slides.length) {\r\n        slideIndex = 1;\r\n    }\r\n\r\n    if (n < 1) {\r\n        slideIndex = slides.length;\r\n    }\r\n\r\n    slides.forEach((item) => {\r\n        item.style.display = \"none\";\r\n    });\r\n\r\n    dots.forEach((item) => {\r\n        item.classList.remove('dot-active');\r\n    });\r\n\r\n    slides[slideIndex - 1].style.display = 'block';\r\n    dots[slideIndex - 1].classList.add('dot-active');\r\n}\r\n\r\nfunction plusSlides(n) {\r\n    showSlides(slideIndex += n);\r\n}\r\n\r\nfunction currentSlide(n) {\r\n    showSlides(slideIndex = n);\r\n}\r\n\r\n\r\n\r\n///////////////Event listener на стрелки\r\nprev.addEventListener('click', () => {\r\n    plusSlides(-1);\r\n});\r\n\r\nnext.addEventListener('click', () => {\r\n    plusSlides(1);\r\n});\r\n\r\n\r\n////////////////Event listener на дотс\r\ndotsWrap.addEventListener('click', (event) => {\r\n    for (let i = 0; i < dots.length; i++) {\r\n        if (event.target.classList.contains('dot') && (event.target == dots[i])) {\r\n            currentSlide(i + 1);\r\n        }\r\n    };\r\n});\n\n//# sourceURL=webpack:///./slider.js?");

/***/ }),

/***/ "./tabs.js":
/*!*****************!*\
  !*** ./tabs.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tabs() {\r\n    let tab = document.querySelectorAll('.info-header-tab'),\r\n        info = document.querySelector('.info-header'),\r\n        tabContent = document.querySelectorAll('.info-tabcontent');\r\n\r\n    function hideTabContent(a) {\r\n        for (let i = a; i < tabContent.length; i++) {\r\n            tabContent[i].classList.remove('show');\r\n            tabContent[i].classList.add('hide');\r\n        };\r\n    };\r\n\r\n    hideTabContent(1);\r\n\r\n    function showTabContent(b) {\r\n        if (tabContent[b].classList.contains('hide')) {\r\n            tabContent[b].classList.remove('hide');\r\n            tabContent[b].classList.add('show');\r\n        }\r\n    }\r\n\r\n    info.addEventListener('click', function (event) {\r\n        let target = event.target;\r\n        if (target && target.classList.contains('info-header-tab')) {\r\n            for (let i = 0; i < tab.length; i++) {\r\n                if (target == tab[i]) {\r\n                    hideTabContent(0);\r\n                    showTabContent(i);\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n\r\n    });\r\n}\r\n\r\nmodule.exports = tabs;\r\n\n\n//# sourceURL=webpack:///./tabs.js?");

/***/ }),

/***/ "./timer.js":
/*!******************!*\
  !*** ./timer.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let deadline = '2020-05-25';\r\n\r\nfunction getTimeRemaining(endtime) {\r\n    let t = Date.parse(deadline) - Date.parse(new Date());\r\n    let seconds = Math.floor((t / 1000) % 60);\r\n    let minutes = Math.floor((t / 1000 / 60) % 60);\r\n    let hours = Math.floor(t / 1000 / 60 / 60 % 24);\r\n    let days = Math.floor(t / 1000 / 60 / 60 / 24);\r\n\r\n    return {\r\n        'total': t,\r\n        'days': days,\r\n        'hours': hours,\r\n        'minutes': minutes,\r\n        'seconds': seconds,\r\n    };\r\n};\r\n\r\nfunction setClock(id, endtime) {\r\n    let timer = document.querySelector('#id'),\r\n        days = document.querySelector('.days'),\r\n        hours = document.querySelector('.hours'),\r\n        minutes = document.querySelector('.minutes'),\r\n        seconds = document.querySelector('.seconds'),\r\n        timeInterval = setInterval(updateClock, 0.1);\r\n\r\n    function updateClock() {\r\n        let t = getTimeRemaining(endtime);\r\n        if (days.textContent < 10) {\r\n            days.textContent = \"0\" + t.days + \" :\";\r\n        } else days.textContent = t.days + \" :\";\r\n\r\n        if (hours.textContent < 10) {\r\n            hours.textContent = \"0\" + t.hours;\r\n        } else hours.textContent = t.hours;\r\n\r\n        if (minutes.textContent < 10) {\r\n            minutes.textContent = \"0\" + t.minutes;\r\n        } else minutes.textContent = t.minutes;\r\n\r\n        if (seconds.textContent < 10) {\r\n            seconds.textContent = \"0\" + t.seconds;\r\n        } else seconds.textContent = t.seconds;\r\n\r\n        if (t.total <= 0) {\r\n            clearInterval(timeInterval);\r\n        }\r\n    }\r\n};\r\n\r\n\r\nsetClock('timer', deadline);\n\n//# sourceURL=webpack:///./timer.js?");

/***/ })

/******/ });