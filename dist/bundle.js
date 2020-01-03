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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/data.json":
/*!************************!*\
  !*** ./data/data.json ***!
  \************************/
/*! exports provided: level1, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"level1\":{\"map\":[[\"w\",\"w\",\"w\",\"w\",\"w\",\"w\",\"w\",\"w\",\"w\",\"w\"],[\"w\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"w\"],[\"w\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"w\"],[\"w\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"w\"],[\"w\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"w\"],[\"w\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"w\"],[\"w\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"w\"],[\"w\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"w\"],[\"w\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"e\",\"w\"],[\"w\",\"w\",\"w\",\"w\",\"w\",\"w\",\"w\",\"w\",\"w\",\"w\"]],\"gameObjects\":[{\"elementId\":\"player\",\"class\":\"p\",\"type\":\"player\",\"position\":{\"x\":3,\"y\":1}},{\"elementId\":\"body_0\",\"class\":\"p\",\"type\":\"snakeBody\",\"position\":{\"x\":2,\"y\":1}},{\"elementId\":\"body_1\",\"class\":\"p\",\"type\":\"snakeBody\",\"position\":{\"x\":1,\"y\":1}}]}}");

/***/ }),

/***/ "./node_modules/swipe-listener/dist/swipe-listener.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/swipe-listener/dist/swipe-listener.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},SwipeListener=function(a,b){if(a){'undefined'!=typeof window&&function(){function a(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent('CustomEvent');return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c}return'function'!=typeof window.CustomEvent&&void(a.prototype=window.Event.prototype,window.CustomEvent=a)}();b||(b={}),b=_extends({},{minHorizontal:10,minVertical:10,deltaHorizontal:3,deltaVertical:5,preventScroll:!1,lockAxis:!0,touch:!0,mouse:!0},b);var c=[],d=!1,e=function(){d=!0},f=function(a){d=!1,h(a)},g=function(a){d&&(a.changedTouches=[{clientX:a.clientX,clientY:a.clientY}],i(a))};b.mouse&&(a.addEventListener('mousedown',e),a.addEventListener('mouseup',f),a.addEventListener('mousemove',g));var h=function(d){var e=Math.abs,f=Math.max,g=Math.min;if(c.length){for(var h='function'==typeof TouchEvent&&d instanceof TouchEvent,j=[],k=[],l={top:!1,right:!1,bottom:!1,left:!1},m=0;m<c.length;m++)j.push(c[m].x),k.push(c[m].y);var i=j[0],n=j[j.length-1],o=k[0],p=k[k.length-1],q={x:[i,n],y:[o,p]};if(1<c.length){var r={detail:_extends({touch:h},q)},s=new CustomEvent('swiperelease',r);a.dispatchEvent(s)}var t=j[0]-j[j.length-1],u='none';u=0<t?'left':'right';var v,w=g.apply(Math,j),x=f.apply(Math,j);if(e(t)>=b.minHorizontal&&('left'==u?(v=e(w-j[j.length-1]),v<=b.deltaHorizontal&&(l.left=!0)):'right'==u?(v=e(x-j[j.length-1]),v<=b.deltaHorizontal&&(l.right=!0)):void 0),t=k[0]-k[k.length-1],u='none',u=0<t?'top':'bottom',w=g.apply(Math,k),x=f.apply(Math,k),e(t)>=b.minVertical&&('top'==u?(v=e(w-k[k.length-1]),v<=b.deltaVertical&&(l.top=!0)):'bottom'==u?(v=e(x-k[k.length-1]),v<=b.deltaVertical&&(l.bottom=!0)):void 0),(c=[],l.top||l.right||l.bottom||l.left)){b.lockAxis&&((l.left||l.right)&&e(i-n)>e(o-p)?l.top=l.bottom=!1:(l.top||l.bottom)&&e(i-n)<e(o-p)&&(l.left=l.right=!1));var y={detail:_extends({directions:l,touch:h},q)},z=new CustomEvent('swipe',y);a.dispatchEvent(z)}else{var A=new CustomEvent('swipecancel',{detail:_extends({touch:h},q)});a.dispatchEvent(A)}}},i=function(d){b.preventScroll&&d.preventDefault();var e=d.changedTouches[0];if(c.push({x:e.clientX,y:e.clientY}),1<c.length){var f=c[0].x,g=c[c.length-1].x,h=c[0].y,i=c[c.length-1].y,j={detail:{x:[f,g],y:[h,i],touch:'function'==typeof TouchEvent&&d instanceof TouchEvent}},k=new CustomEvent('swiping',j);a.dispatchEvent(k)}},j=!1;try{var k=Object.defineProperty({},'passive',{get:function(){j={passive:!b.preventScroll}}});window.addEventListener('testPassive',null,k),window.removeEventListener('testPassive',null,k)}catch(a){}return b.touch&&(a.addEventListener('touchmove',i,j),a.addEventListener('touchend',h)),{off:function(){a.removeEventListener('touchmove',i,j),a.removeEventListener('touchend',h),a.removeEventListener('mousedown',e),a.removeEventListener('mouseup',f),a.removeEventListener('mousemove',g)}}}}; true&&'undefined'!=typeof module.exports?(module.exports=SwipeListener,module.exports.default=SwipeListener): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return SwipeListener}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: DIRECTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION", function() { return DIRECTION; });
const DIRECTION = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle */ "./src/obstacle.js");



class Game {
  constructor(levels) {
    this.lastUpdate = performance.now();
    this.deltatime = 0;
    this.gameObjects = [];
    this.runGame = true;
    this.init(levels);
    this.update();
  }

  init(levels) {
    const obstacles = [];
    const objects = [];
    levels.level1.map.forEach((row, x) => {
      row.forEach((item, y) => {
        if (item === 'w') {
          obstacles.push(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["Obstacle"](`${item}_${x}_${y}`, x, y));
        }
      });
    });
    levels.level1.gameObjects.forEach(gameObject => {
      switch (gameObject.type) {
        case 'player':
          {
            const player = new _player__WEBPACK_IMPORTED_MODULE_0__["Player"](gameObject.elementId, gameObject.position.x, gameObject.position.y);
            player.collisionObservers.push(this);
            player.obstacles = obstacles;
            objects.push(player);
          }
          break;

        case 'snakeBody':
          {
            const bodyPart = new _player__WEBPACK_IMPORTED_MODULE_0__["Player"](gameObject.elementId, gameObject.position.x, gameObject.position.y);
            objects.push(bodyPart);
          }
          break;
      }
    });
    this.gameObjects = [].concat(objects).concat(obstacles);
  }

  update() {
    const now = performance.now();
    this.deltatime = now - this.lastUpdate;
    this.lastUpdate = now;
    this.gameObjects.forEach(gameObject => {
      gameObject.deltatime = this.deltatime;
      gameObject.update(this.deltatime);
    });
    setTimeout(() => {
      this.render();
    }, 0);
  }

  render() {
    if (this.runGame) {
      this.gameObjects.forEach(gameObject => {
        gameObject.render();
      });
      this.update();
    } else {
      document.getElementById('game-canvas').remove();
    }
  }

  collision() {
    this.runGame = false;
  }

}



/***/ }),

/***/ "./src/gameObject.js":
/*!***************************!*\
  !*** ./src/gameObject.js ***!
  \***************************/
/*! exports provided: GameObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameObject", function() { return GameObject; });
class GameObject {
  constructor(elementId) {
    this.elementRef = document.getElementById(elementId);
  }

  update(deltatime) {}

  render() {}

}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.json */ "./data/data.json");
var _data_data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/data.json */ "./data/data.json", 1);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");

 // eslint-disable-next-line no-unused-vars

const game = new _game__WEBPACK_IMPORTED_MODULE_1__["Game"](_data_data_json__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ "./src/obstacle.js":
/*!*************************!*\
  !*** ./src/obstacle.js ***!
  \*************************/
/*! exports provided: Obstacle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Obstacle", function() { return Obstacle; });
/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObject */ "./src/gameObject.js");


class Obstacle extends _gameObject__WEBPACK_IMPORTED_MODULE_0__["GameObject"] {
  constructor(elementId, x, y) {
    super(elementId);
    this.position = {
      x,
      y
    };
  }

}



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var swipe_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swipe-listener */ "./node_modules/swipe-listener/dist/swipe-listener.min.js");
/* harmony import */ var swipe_listener__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swipe_listener__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameObject */ "./src/gameObject.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");




class Player extends _gameObject__WEBPACK_IMPORTED_MODULE_1__["GameObject"] {
  constructor(elementId, x, y) {
    super(elementId);
    this.init(x, y);
  }

  init(x, y) {
    this.position = {
      x,
      y
    };
    this.direction = _constants__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].RIGHT;
    this.speed = 3;
    this.obstacles = [];
    this.collisionObservers = [];
    this.positionObservers = [];
    const container = document.querySelector('#container');
    swipe_listener__WEBPACK_IMPORTED_MODULE_0___default()(container);
    container.addEventListener('swipe', event => {
      console.log(event);
    });

    document.onkeydown = key => this.processInputs(key);
  }

  processInputs(key) {
    if (![_constants__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].UP, _constants__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].RIGHT, _constants__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].DOWN, _constants__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].LEFT].includes(key.keyCode)) {
      return;
    }

    this.direction = key.keyCode;
  }

  update(deltatime) {
    const position = this.speed * (deltatime / 1000);
    const nextPosition = { ...this.position
    };

    switch (this.direction) {
      case _constants__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].UP:
        nextPosition.y -= position;
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].RIGHT:
        nextPosition.x += position;
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].DOWN:
        nextPosition.y += position;
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].LEFT:
        nextPosition.x -= position;
        break;
    }

    if (!this.detectCollisions(nextPosition)) {
      this.positionObservers.forEach(observer => {
        observer.playerPositionChanged(this.position, nextPosition);
      });
      this.position = nextPosition;
    } else {
      this.notifyCollision();
    }
  }

  render() {
    if (!this.elementRef) {
      return;
    }

    this.elementRef.style.display = 'block';
    this.elementRef.style.left = `calc(${Math.trunc(this.position.x) * 2}vh + 1px)`;
    this.elementRef.style.top = `calc(${Math.trunc(this.position.y) * 2}vh + 1px)`;
  }

  detectCollisions(nextPosition) {
    return this.obstacles.some(obstacle => {
      return obstacle.position.x === Math.trunc(nextPosition.x) && obstacle.position.y === Math.trunc(nextPosition.y);
    });
  }

  notifyCollision() {
    this.collisionObservers.forEach(observer => {
      observer.collision();
    });
  }

}



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map