(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./collection.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/collection.js",
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js",
	"./scroll.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/scroll.js",
	"./scrollView.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/scrollView.js",
	"./tinymce.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/tinymce.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/collection.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/collection.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

function putDeleteButton($form) {
  var $deleteButton = $('<div  id="button_remove_users"><button type="button" class="btn btn-danger">Supprimer</button></div>');
  $form.append($deleteButton);
  $form.append('<img id="img-pres" src="" alt="">');
  $deleteButton.on('click', function () {
    $form.remove();
  });
}

jQuery(document).ready(function () {
  $('#topic-list').find('.topic').each(function () {
    putDeleteButton($(this));
  });
  jQuery('.add-another-collection-widget').on('click', function (e) {
    var list = $($(e.target).data('list-selector'));
    var counter = list.data('widget-counter') || list.children().length;
    var newWidget = list.data('prototype');
    newWidget = newWidget.replace(/__name__/g, counter);
    counter++;
    list.data('widget-counter', counter);
    var newElem = jQuery(list.data('widget-tags')).html(newWidget);
    console.log(_typeof(newWidget));
    $('#actualites_form_topic_0_illustration').on('change', function (event) {
      src = URL.createObjectURL(event.target.files[0]);
      $('#img-pres').attr('src', src);

      src.onload = function () {
        URL.revokeObjectURL(src); // free memory
      };
    });
    newElem.addClass('card');
    newElem.addClass('mt-4');
    newElem.css('padding', '2em');
    newElem.css('color', 'black');
    putDeleteButton(newElem);
    newElem.appendTo(list);
  });
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/scroll.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/scroll.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

function scroll_to(clicked_link, nav_height) {
  var element_class = clicked_link.attr('href');
  var scroll_to = 0;

  if (element_class != '.home') {
    scroll_to = $(element_class).offset().top - nav_height;
    $(element_class).css('color', 'green');
  }

  if ($(window).scrollTop() != scroll_to) {
    $('html, body').stop().animate({
      scrollTop: scroll_to
    }, 1000);
  }
}

$(function () {
  $('.nav-home').css('color', 'yellow');
  $('a.scroll-link').on('click', function (e) {
    e.preventDefault();
    scroll_to($(this), $('nav').outerHeight());
    $('.nav-link').css('color', 'white');
    $(this).css('color', 'yellow');
  });
});
$('#presentation_form_photo').on('change', function (event) {
  src = URL.createObjectURL(event.target.files[0]);
  console.log(src);
  $('#img-pres').attr('src', src);

  src.onload = function () {
    URL.revokeObjectURL(src); // free memory
  };
});
$(document).on('change', '.custom-file-input', function () {
  var fileName = $(this).val().replace(/\\/g, '/').replace(/.*\//, '');
  $(this).parent('.custom-file').find('.custom-file-label').text(fileName);
});

var loadFile = function loadFile(event) {
  var output = document.getElementById('presentation_form_photo');
  output.src = URL.createObjectURL(event.target.files[0]);
  console.log(output);

  output.onload = function () {
    URL.revokeObjectURL(output.src); // free memory
  };
};

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/scrollView.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/scrollView.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

var withinViewport = function () {
  'use strict'; // Cutting the mustard
  // http://webfieldmanual.com/guides/cutting-the-mustard.html

  if (window.requestAnimationFrame && document.documentElement.classList) {
    // Passes the test so add enhanced class to HTML tag
    document.documentElement.classList.add('enhanced'); // Throttle
    // https://underscorejs.org/#throttle

    var throttle = function throttle(func, wait, options) {
      var _ = {
        now: Date.now || function () {
          return new Date().getTime();
        }
      };
      var context, args, result;
      var timeout = null;
      var previous = 0;

      if (!options) {
        options = {};
      }

      var later = function later() {
        previous = options.leading === false ? 0 : _.now();
        timeout = null;
        result = func.apply(context, args);

        if (!timeout) {
          context = args = null;
        }
      };

      return function () {
        var now = _.now();

        if (!previous && options.leading === false) {
          previous = now;
        }

        var remaining = wait - (now - previous);
        context = this;
        args = arguments;

        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }

          previous = now;
          result = func.apply(context, args);

          if (!timeout) {
            context = args = null;
          }
        } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
        }

        return result;
      };
    }; // requestAnimationFrame
    // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/


    var _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame; // Global class for revealing element


    var revealer = document.querySelectorAll('.revealer'); // Get the viewport (window) dimensions

    var getViewportSize = function getViewportSize() {
      return {
        width: window.document.documentElement.clientWidth,
        height: window.document.documentElement.clientHeight
      };
    }; // Get the current scoll position


    var getCurrentScroll = function getCurrentScroll() {
      return {
        x: window.pageXOffset,
        y: window.pageYOffset
      };
    }; // Get element dimensions and position


    var getElemInfo = function getElemInfo(elem) {
      var offsetTop = 0;
      var offsetLeft = 0;
      var offsetHeight = elem.offsetHeight;
      var offsetWidth = elem.offsetWidth;

      do {
        if (!isNaN(elem.offsetTop)) {
          offsetTop += elem.offsetTop;
        }

        if (!isNaN(elem.offsetLeft)) {
          offsetLeft += elem.offsetLeft;
        }
      } while ((elem = elem.offsetParent) !== null);

      return {
        top: offsetTop,
        left: offsetLeft,
        height: offsetHeight,
        width: offsetWidth
      };
    }; // Check visibility of the element in the viewport


    var checkVisibility = function checkVisibility(elem) {
      var viewportSize = getViewportSize();
      var currentScroll = getCurrentScroll();
      var elemInfo = getElemInfo(elem);
      var spaceOffset = 0.2;
      var elemHeight = elemInfo.height;
      var elemWidth = elemInfo.width;
      var elemTop = elemInfo.top;
      var elemLeft = elemInfo.left;
      var elemBottom = elemTop + elemHeight;
      var elemRight = elemLeft + elemWidth;

      var checkBoundaries = function checkBoundaries() {
        // Defining the element boundaries and extra space offset
        var top = elemTop + elemHeight * spaceOffset;
        var left = elemLeft + elemWidth * spaceOffset;
        var bottom = elemBottom - elemHeight * spaceOffset;
        var right = elemRight - elemWidth * spaceOffset; // Defining the window boundaries and window offset

        var wTop = currentScroll.y + 0;
        var wLeft = currentScroll.x + 0;
        var wBottom = currentScroll.y - 0 + viewportSize.height;
        var wRight = currentScroll.x - 0 + viewportSize.width; // Check if the element is within boundary

        return top < wBottom && bottom > wTop && left > wLeft && right < wRight;
      };

      return checkBoundaries();
    }; // Run a loop with checkVisibility() and add / remove classes to the elements


    var toggleElement = function toggleElement() {
      for (var i = 0; i < revealer.length; i++) {
        if (checkVisibility(revealer[i])) {
          revealer[i].classList.add('revealed');
        } else {
          revealer[i].classList.remove('revealed');
        }
      }
    }; // Throttle events and requestAnimationFrame


    var scrollHandler = throttle(function () {
      _requestAnimationFrame(toggleElement);
    }, 300);
    var resizeHandler = throttle(function () {
      _requestAnimationFrame(toggleElement); // For demo purposes only


      fullscreenIntro();
    }, 300);
    scrollHandler(); // Listening for events

    if (window.addEventListener) {
      addEventListener('scroll', scrollHandler, false);
      addEventListener('resize', resizeHandler, false);
    } else if (window.attachEvent) {
      window.attachEvent('onscroll', scrollHandler);
      window.attachEvent('onresize', resizeHandler);
    } else {
      window.onscroll = scrollHandler;
      window.onresize = resizeHandler;
    }
  } // FOR DEMO PURPOSES ONLY
  // Makes fullscreen intro on any device so user is forced to scroll


  var fullscreenIntro = function fullscreenIntro() {
    var fullscreen = document.querySelectorAll('.fullscreen');

    for (var i = 0; i < fullscreen.length; i++) {
      fullscreen[i].style.height = getViewportSize().height + 1 + 'px';
    }
  };

  fullscreenIntro();
  return withinViewport;
}();

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/tinymce.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/tinymce.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tinymce_tinymce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/tinymce */ "./node_modules/tinymce/tinymce.js");
/* harmony import */ var tinymce_tinymce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tinymce_tinymce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tinymce_themes_silver_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/themes/silver/theme */ "./node_modules/tinymce/themes/silver/theme.js");
/* harmony import */ var tinymce_themes_silver_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinymce_themes_silver_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tinymce_plugins_paste_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tinymce/plugins/paste/plugin */ "./node_modules/tinymce/plugins/paste/plugin.js");
/* harmony import */ var tinymce_plugins_paste_plugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_paste_plugin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tinymce_plugins_link_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tinymce/plugins/link/plugin */ "./node_modules/tinymce/plugins/link/plugin.js");
/* harmony import */ var tinymce_plugins_link_plugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_link_plugin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tinymce_plugins_autoresize_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tinymce/plugins/autoresize/plugin */ "./node_modules/tinymce/plugins/autoresize/plugin.js");
/* harmony import */ var tinymce_plugins_autoresize_plugin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_autoresize_plugin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tinymce_icons_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tinymce/icons/default */ "./node_modules/tinymce/icons/default/index.js");
/* harmony import */ var tinymce_icons_default__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tinymce_icons_default__WEBPACK_IMPORTED_MODULE_5__);






 // import 'tinymce/skins/content/default'
// import 'tinymce/skins/content/default'

tinymce_tinymce__WEBPACK_IMPORTED_MODULE_0___default().init({
  // skin: false,
  selector: '.tinymce',
  plugins: 'print preview  importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
  mobile: {
    plugins: 'print preview  importcss  searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount textpattern noneditable help charmap quickbars emoticons'
  },
  menu: {
    tc: {
      title: 'TinyComments',
      items: 'addcomment showcomments deleteallconversations'
    }
  },
  menubar: 'file edit view insert format tools table tc help',
  toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
  autosave_ask_before_unload: true,
  autosave_interval: '30s',
  autosave_prefix: '{path}{query}-{id}-',
  autosave_restore_when_empty: false,
  autosave_retention: '2m',
  image_advtab: true,
  link_list: [{
    title: 'My page 1',
    value: 'https://www.tiny.cloud'
  }, {
    title: 'My page 2',
    value: 'http://www.moxiecode.com'
  }],
  image_list: [{
    title: 'My page 1',
    value: 'https://www.tiny.cloud'
  }, {
    title: 'My page 2',
    value: 'http://www.moxiecode.com'
  }],
  image_class_list: [{
    title: 'None',
    value: ''
  }, {
    title: 'Some class',
    value: 'class-name'
  }],
  importcss_append: true,
  templates: [{
    title: 'New Table',
    description: 'creates a new table',
    content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
  }, {
    title: 'Starting my story',
    description: 'A cure for writers block',
    content: 'Once upon a time...'
  }, {
    title: 'New list with dates',
    description: 'New List with dates',
    content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
  }],
  template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
  template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
  height: 600,
  image_caption: true,
  quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
  noneditable_noneditable_class: 'mceNonEditable',
  toolbar_mode: 'sliding',
  spellchecker_ignore_list: ['Ephox', 'Moxiecode'],
  //   tinycomments_mode: 'embedded',
  content_style: '.mymention{ color: gray; }',
  contextmenu: 'link image imagetools table configur' //   a11y_advanced_options: true,

  /*
  The following settings require more configuration than shown here.
  For information on configuring the mentions plugin, see:
  https://www.tiny.cloud/docs/plugins/premium/mentions/.
  */

});

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bs_custom_file_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bs-custom-file-input */ "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js");
/* harmony import */ var bs_custom_file_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bs_custom_file_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _controllers_scroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/scroll.js */ "./assets/controllers/scroll.js");
/* harmony import */ var _controllers_scroll_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_controllers_scroll_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _controllers_tinymce_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/tinymce.js */ "./assets/controllers/tinymce.js");
/* harmony import */ var _controllers_collection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/collection.js */ "./assets/controllers/collection.js");
/* harmony import */ var _controllers_collection_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_controllers_collection_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _controllers_scrollView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllers/scrollView.js */ "./assets/controllers/scrollView.js");
/* harmony import */ var _controllers_scrollView_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_controllers_scrollView_js__WEBPACK_IMPORTED_MODULE_7__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// any CSS you import will output into a single css file (app.css in this case)


 // start the Stimulus application






__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;
bs_custom_file_input__WEBPACK_IMPORTED_MODULE_2___default().init();

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/controllers/collection.js":
/*!******************************************!*\
  !*** ./assets/controllers/collection.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

function putDeleteButton($form) {
  var $deleteButton = $('<div  id="button_remove_users"><button type="button" class="btn btn-danger">Supprimer</button></div>');
  $form.append($deleteButton);
  $form.append('<img id="img-pres" src="" alt="">');
  $deleteButton.on('click', function () {
    $form.remove();
  });
}

jQuery(document).ready(function () {
  $('#topic-list').find('.topic').each(function () {
    putDeleteButton($(this));
  });
  jQuery('.add-another-collection-widget').on('click', function (e) {
    var list = $($(e.target).data('list-selector'));
    var counter = list.data('widget-counter') || list.children().length;
    var newWidget = list.data('prototype');
    newWidget = newWidget.replace(/__name__/g, counter);
    counter++;
    list.data('widget-counter', counter);
    var newElem = jQuery(list.data('widget-tags')).html(newWidget);
    console.log(_typeof(newWidget));
    $('#actualites_form_topic_0_illustration').on('change', function (event) {
      src = URL.createObjectURL(event.target.files[0]);
      $('#img-pres').attr('src', src);

      src.onload = function () {
        URL.revokeObjectURL(src); // free memory
      };
    });
    newElem.addClass('card');
    newElem.addClass('mt-4');
    newElem.css('padding', '2em');
    newElem.css('color', 'black');
    putDeleteButton(newElem);
    newElem.appendTo(list);
  });
});

/***/ }),

/***/ "./assets/controllers/scroll.js":
/*!**************************************!*\
  !*** ./assets/controllers/scroll.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

function scroll_to(clicked_link, nav_height) {
  var element_class = clicked_link.attr('href');
  var scroll_to = 0;

  if (element_class != '.home') {
    scroll_to = $(element_class).offset().top - nav_height;
    $(element_class).css('color', 'green');
  }

  if ($(window).scrollTop() != scroll_to) {
    $('html, body').stop().animate({
      scrollTop: scroll_to
    }, 1000);
  }
}

$(function () {
  $('.nav-home').css('color', 'yellow');
  $('a.scroll-link').on('click', function (e) {
    e.preventDefault();
    scroll_to($(this), $('nav').outerHeight());
    $('.nav-link').css('color', 'white');
    $(this).css('color', 'yellow');
  });
});
$('#presentation_form_photo').on('change', function (event) {
  src = URL.createObjectURL(event.target.files[0]);
  console.log(src);
  $('#img-pres').attr('src', src);

  src.onload = function () {
    URL.revokeObjectURL(src); // free memory
  };
});
$(document).on('change', '.custom-file-input', function () {
  var fileName = $(this).val().replace(/\\/g, '/').replace(/.*\//, '');
  $(this).parent('.custom-file').find('.custom-file-label').text(fileName);
});

var loadFile = function loadFile(event) {
  var output = document.getElementById('presentation_form_photo');
  output.src = URL.createObjectURL(event.target.files[0]);
  console.log(output);

  output.onload = function () {
    URL.revokeObjectURL(output.src); // free memory
  };
};

/***/ }),

/***/ "./assets/controllers/scrollView.js":
/*!******************************************!*\
  !*** ./assets/controllers/scrollView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

var withinViewport = function () {
  'use strict'; // Cutting the mustard
  // http://webfieldmanual.com/guides/cutting-the-mustard.html

  if (window.requestAnimationFrame && document.documentElement.classList) {
    // Passes the test so add enhanced class to HTML tag
    document.documentElement.classList.add('enhanced'); // Throttle
    // https://underscorejs.org/#throttle

    var throttle = function throttle(func, wait, options) {
      var _ = {
        now: Date.now || function () {
          return new Date().getTime();
        }
      };
      var context, args, result;
      var timeout = null;
      var previous = 0;

      if (!options) {
        options = {};
      }

      var later = function later() {
        previous = options.leading === false ? 0 : _.now();
        timeout = null;
        result = func.apply(context, args);

        if (!timeout) {
          context = args = null;
        }
      };

      return function () {
        var now = _.now();

        if (!previous && options.leading === false) {
          previous = now;
        }

        var remaining = wait - (now - previous);
        context = this;
        args = arguments;

        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }

          previous = now;
          result = func.apply(context, args);

          if (!timeout) {
            context = args = null;
          }
        } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
        }

        return result;
      };
    }; // requestAnimationFrame
    // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/


    var _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame; // Global class for revealing element


    var revealer = document.querySelectorAll('.revealer'); // Get the viewport (window) dimensions

    var getViewportSize = function getViewportSize() {
      return {
        width: window.document.documentElement.clientWidth,
        height: window.document.documentElement.clientHeight
      };
    }; // Get the current scoll position


    var getCurrentScroll = function getCurrentScroll() {
      return {
        x: window.pageXOffset,
        y: window.pageYOffset
      };
    }; // Get element dimensions and position


    var getElemInfo = function getElemInfo(elem) {
      var offsetTop = 0;
      var offsetLeft = 0;
      var offsetHeight = elem.offsetHeight;
      var offsetWidth = elem.offsetWidth;

      do {
        if (!isNaN(elem.offsetTop)) {
          offsetTop += elem.offsetTop;
        }

        if (!isNaN(elem.offsetLeft)) {
          offsetLeft += elem.offsetLeft;
        }
      } while ((elem = elem.offsetParent) !== null);

      return {
        top: offsetTop,
        left: offsetLeft,
        height: offsetHeight,
        width: offsetWidth
      };
    }; // Check visibility of the element in the viewport


    var checkVisibility = function checkVisibility(elem) {
      var viewportSize = getViewportSize();
      var currentScroll = getCurrentScroll();
      var elemInfo = getElemInfo(elem);
      var spaceOffset = 0.2;
      var elemHeight = elemInfo.height;
      var elemWidth = elemInfo.width;
      var elemTop = elemInfo.top;
      var elemLeft = elemInfo.left;
      var elemBottom = elemTop + elemHeight;
      var elemRight = elemLeft + elemWidth;

      var checkBoundaries = function checkBoundaries() {
        // Defining the element boundaries and extra space offset
        var top = elemTop + elemHeight * spaceOffset;
        var left = elemLeft + elemWidth * spaceOffset;
        var bottom = elemBottom - elemHeight * spaceOffset;
        var right = elemRight - elemWidth * spaceOffset; // Defining the window boundaries and window offset

        var wTop = currentScroll.y + 0;
        var wLeft = currentScroll.x + 0;
        var wBottom = currentScroll.y - 0 + viewportSize.height;
        var wRight = currentScroll.x - 0 + viewportSize.width; // Check if the element is within boundary

        return top < wBottom && bottom > wTop && left > wLeft && right < wRight;
      };

      return checkBoundaries();
    }; // Run a loop with checkVisibility() and add / remove classes to the elements


    var toggleElement = function toggleElement() {
      for (var i = 0; i < revealer.length; i++) {
        if (checkVisibility(revealer[i])) {
          revealer[i].classList.add('revealed');
        } else {
          revealer[i].classList.remove('revealed');
        }
      }
    }; // Throttle events and requestAnimationFrame


    var scrollHandler = throttle(function () {
      _requestAnimationFrame(toggleElement);
    }, 300);
    var resizeHandler = throttle(function () {
      _requestAnimationFrame(toggleElement); // For demo purposes only


      fullscreenIntro();
    }, 300);
    scrollHandler(); // Listening for events

    if (window.addEventListener) {
      addEventListener('scroll', scrollHandler, false);
      addEventListener('resize', resizeHandler, false);
    } else if (window.attachEvent) {
      window.attachEvent('onscroll', scrollHandler);
      window.attachEvent('onresize', resizeHandler);
    } else {
      window.onscroll = scrollHandler;
      window.onresize = resizeHandler;
    }
  } // FOR DEMO PURPOSES ONLY
  // Makes fullscreen intro on any device so user is forced to scroll


  var fullscreenIntro = function fullscreenIntro() {
    var fullscreen = document.querySelectorAll('.fullscreen');

    for (var i = 0; i < fullscreen.length; i++) {
      fullscreen[i].style.height = getViewportSize().height + 1 + 'px';
    }
  };

  fullscreenIntro();
  return withinViewport;
}();

/***/ }),

/***/ "./assets/controllers/tinymce.js":
/*!***************************************!*\
  !*** ./assets/controllers/tinymce.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tinymce_tinymce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce/tinymce */ "./node_modules/tinymce/tinymce.js");
/* harmony import */ var tinymce_tinymce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tinymce_tinymce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tinymce_themes_silver_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/themes/silver/theme */ "./node_modules/tinymce/themes/silver/theme.js");
/* harmony import */ var tinymce_themes_silver_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinymce_themes_silver_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tinymce_plugins_paste_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tinymce/plugins/paste/plugin */ "./node_modules/tinymce/plugins/paste/plugin.js");
/* harmony import */ var tinymce_plugins_paste_plugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_paste_plugin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tinymce_plugins_link_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tinymce/plugins/link/plugin */ "./node_modules/tinymce/plugins/link/plugin.js");
/* harmony import */ var tinymce_plugins_link_plugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_link_plugin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tinymce_plugins_autoresize_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tinymce/plugins/autoresize/plugin */ "./node_modules/tinymce/plugins/autoresize/plugin.js");
/* harmony import */ var tinymce_plugins_autoresize_plugin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_autoresize_plugin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tinymce_icons_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tinymce/icons/default */ "./node_modules/tinymce/icons/default/index.js");
/* harmony import */ var tinymce_icons_default__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tinymce_icons_default__WEBPACK_IMPORTED_MODULE_5__);






 // import 'tinymce/skins/content/default'
// import 'tinymce/skins/content/default'

tinymce_tinymce__WEBPACK_IMPORTED_MODULE_0___default().init({
  // skin: false,
  selector: '.tinymce',
  plugins: 'print preview  importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
  mobile: {
    plugins: 'print preview  importcss  searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount textpattern noneditable help charmap quickbars emoticons'
  },
  menu: {
    tc: {
      title: 'TinyComments',
      items: 'addcomment showcomments deleteallconversations'
    }
  },
  menubar: 'file edit view insert format tools table tc help',
  toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
  autosave_ask_before_unload: true,
  autosave_interval: '30s',
  autosave_prefix: '{path}{query}-{id}-',
  autosave_restore_when_empty: false,
  autosave_retention: '2m',
  image_advtab: true,
  link_list: [{
    title: 'My page 1',
    value: 'https://www.tiny.cloud'
  }, {
    title: 'My page 2',
    value: 'http://www.moxiecode.com'
  }],
  image_list: [{
    title: 'My page 1',
    value: 'https://www.tiny.cloud'
  }, {
    title: 'My page 2',
    value: 'http://www.moxiecode.com'
  }],
  image_class_list: [{
    title: 'None',
    value: ''
  }, {
    title: 'Some class',
    value: 'class-name'
  }],
  importcss_append: true,
  templates: [{
    title: 'New Table',
    description: 'creates a new table',
    content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
  }, {
    title: 'Starting my story',
    description: 'A cure for writers block',
    content: 'Once upon a time...'
  }, {
    title: 'New list with dates',
    description: 'New List with dates',
    content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
  }],
  template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
  template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
  height: 600,
  image_caption: true,
  quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
  noneditable_noneditable_class: 'mceNonEditable',
  toolbar_mode: 'sliding',
  spellchecker_ignore_list: ['Ephox', 'Moxiecode'],
  //   tinycomments_mode: 'embedded',
  content_style: '.mymention{ color: gray; }',
  contextmenu: 'link image imagetools table configur' //   a11y_advanced_options: true,

  /*
  The following settings require more configuration than shown here.
  For information on configuring the mentions plugin, see:
  https://www.tiny.cloud/docs/plugins/premium/mentions/.
  */

});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-22039b"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3Njcm9sbFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3RpbnltY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwibmFtZXMiOlsicHV0RGVsZXRlQnV0dG9uIiwiJGZvcm0iLCIkZGVsZXRlQnV0dG9uIiwiJCIsImFwcGVuZCIsIm9uIiwicmVtb3ZlIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsImZpbmQiLCJlYWNoIiwiZSIsImxpc3QiLCJ0YXJnZXQiLCJkYXRhIiwiY291bnRlciIsImNoaWxkcmVuIiwibGVuZ3RoIiwibmV3V2lkZ2V0IiwicmVwbGFjZSIsIm5ld0VsZW0iLCJodG1sIiwiY29uc29sZSIsImxvZyIsImV2ZW50Iiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiLCJhdHRyIiwib25sb2FkIiwicmV2b2tlT2JqZWN0VVJMIiwiYWRkQ2xhc3MiLCJjc3MiLCJhcHBlbmRUbyIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIkNvbnRyb2xsZXIiLCJzY3JvbGxfdG8iLCJjbGlja2VkX2xpbmsiLCJuYXZfaGVpZ2h0IiwiZWxlbWVudF9jbGFzcyIsIm9mZnNldCIsInRvcCIsIndpbmRvdyIsInNjcm9sbFRvcCIsInN0b3AiLCJhbmltYXRlIiwicHJldmVudERlZmF1bHQiLCJvdXRlckhlaWdodCIsImZpbGVOYW1lIiwidmFsIiwicGFyZW50IiwidGV4dCIsImxvYWRGaWxlIiwib3V0cHV0IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aXRoaW5WaWV3cG9ydCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRocm90dGxlIiwiZnVuYyIsIndhaXQiLCJvcHRpb25zIiwiXyIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiY29udGV4dCIsImFyZ3MiLCJyZXN1bHQiLCJ0aW1lb3V0IiwicHJldmlvdXMiLCJsYXRlciIsImxlYWRpbmciLCJhcHBseSIsInJlbWFpbmluZyIsImFyZ3VtZW50cyIsImNsZWFyVGltZW91dCIsInRyYWlsaW5nIiwic2V0VGltZW91dCIsIl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXZlYWxlciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRWaWV3cG9ydFNpemUiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q3VycmVudFNjcm9sbCIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEVsZW1JbmZvIiwiZWxlbSIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRXaWR0aCIsImlzTmFOIiwib2Zmc2V0UGFyZW50IiwibGVmdCIsImNoZWNrVmlzaWJpbGl0eSIsInZpZXdwb3J0U2l6ZSIsImN1cnJlbnRTY3JvbGwiLCJlbGVtSW5mbyIsInNwYWNlT2Zmc2V0IiwiZWxlbUhlaWdodCIsImVsZW1XaWR0aCIsImVsZW1Ub3AiLCJlbGVtTGVmdCIsImVsZW1Cb3R0b20iLCJlbGVtUmlnaHQiLCJjaGVja0JvdW5kYXJpZXMiLCJib3R0b20iLCJyaWdodCIsIndUb3AiLCJ3TGVmdCIsIndCb3R0b20iLCJ3UmlnaHQiLCJ0b2dnbGVFbGVtZW50IiwiaSIsInNjcm9sbEhhbmRsZXIiLCJyZXNpemVIYW5kbGVyIiwiZnVsbHNjcmVlbkludHJvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50Iiwib25zY3JvbGwiLCJvbnJlc2l6ZSIsImZ1bGxzY3JlZW4iLCJzdHlsZSIsInRpbnltY2UiLCJzZWxlY3RvciIsInBsdWdpbnMiLCJtb2JpbGUiLCJtZW51IiwidGMiLCJ0aXRsZSIsIml0ZW1zIiwibWVudWJhciIsInRvb2xiYXIiLCJhdXRvc2F2ZV9hc2tfYmVmb3JlX3VubG9hZCIsImF1dG9zYXZlX2ludGVydmFsIiwiYXV0b3NhdmVfcHJlZml4IiwiYXV0b3NhdmVfcmVzdG9yZV93aGVuX2VtcHR5IiwiYXV0b3NhdmVfcmV0ZW50aW9uIiwiaW1hZ2VfYWR2dGFiIiwibGlua19saXN0IiwidmFsdWUiLCJpbWFnZV9saXN0IiwiaW1hZ2VfY2xhc3NfbGlzdCIsImltcG9ydGNzc19hcHBlbmQiLCJ0ZW1wbGF0ZXMiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJ0ZW1wbGF0ZV9jZGF0ZV9mb3JtYXQiLCJ0ZW1wbGF0ZV9tZGF0ZV9mb3JtYXQiLCJpbWFnZV9jYXB0aW9uIiwicXVpY2tiYXJzX3NlbGVjdGlvbl90b29sYmFyIiwibm9uZWRpdGFibGVfbm9uZWRpdGFibGVfY2xhc3MiLCJ0b29sYmFyX21vZGUiLCJzcGVsbGNoZWNrZXJfaWdub3JlX2xpc3QiLCJjb250ZW50X3N0eWxlIiwiY29udGV4dG1lbnUiLCJnbG9iYWwiLCJic0N1c3RvbUZpbGVJbnB1dCIsImFwcCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FB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O0FBQUVqQixTQUFLLEVBQUUsbUJBQVQ7QUFBOEJnQixlQUFXLEVBQUUsMEJBQTNDO0FBQXVFQyxXQUFPLEVBQUU7QUFBaEYsR0FGUyxFQUdUO0FBQUVqQixTQUFLLEVBQUUscUJBQVQ7QUFBZ0NnQixlQUFXLEVBQUUscUJBQTdDO0FBQW9FQyxXQUFPLEVBQUU7QUFBN0UsR0FIUyxDQW5DQztBQXdDWkMsdUJBQXFCLEVBQUUsNkNBeENYO0FBeUNaQyx1QkFBcUIsRUFBRSw4Q0F6Q1g7QUEwQ1p0RSxRQUFNLEVBQUUsR0ExQ0k7QUEyQ1p1RSxlQUFhLEVBQUUsSUEzQ0g7QUE0Q1pDLDZCQUEyQixFQUFFLGdFQTVDakI7QUE2Q1pDLCtCQUE2QixFQUFFLGdCQTdDbkI7QUE4Q1pDLGNBQVksRUFBRSxTQTlDRjtBQStDWkMsMEJBQXdCLEVBQUUsQ0FBQyxPQUFELEVBQVUsV0FBVixDQS9DZDtBQWdEZDtBQUNFQyxlQUFhLEVBQUUsNEJBakRIO0FBa0RaQyxhQUFXLEVBQUUsc0NBbERELENBbURkOztBQUVFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBekRjLENBQWIsRTs7Ozs7Ozs7Ozs7O0FHWEQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2NvbGxlY3Rpb24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9jb2xsZWN0aW9uLmpzXCIsXG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vc2Nyb2xsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvc2Nyb2xsLmpzXCIsXG5cdFwiLi9zY3JvbGxWaWV3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvc2Nyb2xsVmlldy5qc1wiLFxuXHRcIi4vdGlueW1jZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL3RpbnltY2UuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJmdW5jdGlvbiBwdXREZWxldGVCdXR0b24oJGZvcm0pIHtcclxuICAgIGxldCAkZGVsZXRlQnV0dG9uID0gJCgnPGRpdiAgaWQ9XCJidXR0b25fcmVtb3ZlX3VzZXJzXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPlN1cHByaW1lcjwvYnV0dG9uPjwvZGl2PicpXHJcbiAgICAkZm9ybS5hcHBlbmQoJGRlbGV0ZUJ1dHRvbilcclxuICAgICRmb3JtLmFwcGVuZCgnPGltZyBpZD1cImltZy1wcmVzXCIgc3JjPVwiXCIgYWx0PVwiXCI+JylcclxuICAgICRkZWxldGVCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRmb3JtLnJlbW92ZSgpXHJcbiAgICB9KVxyXG59XHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyN0b3BpYy1saXN0JykuZmluZCgnLnRvcGljJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcHV0RGVsZXRlQnV0dG9uKCQodGhpcykpO1xyXG4gICAgfSlcclxuICAgIGpRdWVyeSgnLmFkZC1hbm90aGVyLWNvbGxlY3Rpb24td2lkZ2V0Jykub24oJ2NsaWNrJywgKGUpID0+IHsgXHJcbiAgICAgICAgdmFyIGxpc3QgPSAkKCQoZS50YXJnZXQpLmRhdGEoJ2xpc3Qtc2VsZWN0b3InKSk7XHJcbiAgICAgICAgdmFyIGNvdW50ZXIgPSBsaXN0LmRhdGEoJ3dpZGdldC1jb3VudGVyJykgfHwgbGlzdC5jaGlsZHJlbigpLmxlbmd0aDtcclxuICAgICAgICB2YXIgbmV3V2lkZ2V0ID0gbGlzdC5kYXRhKCdwcm90b3R5cGUnKTtcclxuICAgICAgICBuZXdXaWRnZXQgPSBuZXdXaWRnZXQucmVwbGFjZSgvX19uYW1lX18vZywgY291bnRlcik7XHJcbiAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgIGxpc3QuZGF0YSgnd2lkZ2V0LWNvdW50ZXInLCBjb3VudGVyKTtcclxuICAgICAgICB2YXIgbmV3RWxlbSA9IGpRdWVyeShsaXN0LmRhdGEoJ3dpZGdldC10YWdzJykpLmh0bWwobmV3V2lkZ2V0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgbmV3V2lkZ2V0KVxyXG4gICAgICAgICQoJyNhY3R1YWxpdGVzX2Zvcm1fdG9waWNfMF9pbGx1c3RyYXRpb24nKS5vbignY2hhbmdlJywoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICAgJCgnI2ltZy1wcmVzJykuYXR0cignc3JjJyxzcmMpXHJcbiAgICAgICAgICAgICBzcmMub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoc3JjKSAvLyBmcmVlIG1lbW9yeVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KVxyXG4gICAgICAgIG5ld0VsZW0uYWRkQ2xhc3MoJ2NhcmQnKVxyXG4gICAgICAgIG5ld0VsZW0uYWRkQ2xhc3MoJ210LTQnKVxyXG4gICAgICAgIG5ld0VsZW0uY3NzKCdwYWRkaW5nJywnMmVtJylcclxuICAgICAgICBuZXdFbGVtLmNzcygnY29sb3InLCdibGFjaycpXHJcbiAgICAgICAgcHV0RGVsZXRlQnV0dG9uKG5ld0VsZW0pO1xyXG4gICAgICAgIG5ld0VsZW0uYXBwZW5kVG8obGlzdCk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiZnVuY3Rpb24gc2Nyb2xsX3RvKGNsaWNrZWRfbGluaywgbmF2X2hlaWdodCkge1xyXG4gICAgdmFyIGVsZW1lbnRfY2xhc3MgPSBjbGlja2VkX2xpbmsuYXR0cignaHJlZicpO1xyXG4gICAgdmFyIHNjcm9sbF90byA9IDA7XHJcbiAgICBpZihlbGVtZW50X2NsYXNzICE9ICcuaG9tZScpIHtcclxuICAgICAgICBzY3JvbGxfdG8gPSAkKGVsZW1lbnRfY2xhc3MpLm9mZnNldCgpLnRvcCAtIG5hdl9oZWlnaHQ7XHJcbiAgICAgICAgJChlbGVtZW50X2NsYXNzKS5jc3MoJ2NvbG9yJywnZ3JlZW4nKVxyXG4gICAgfVxyXG4gICAgaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpICE9IHNjcm9sbF90bykge1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzY3JvbGxfdG99LCAxMDAwKTtcclxuICAgIH1cclxufVxyXG4gXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcubmF2LWhvbWUnKS5jc3MoJ2NvbG9yJywneWVsbG93JylcclxuICAgICQoJ2Euc2Nyb2xsLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNjcm9sbF90bygkKHRoaXMpLCAkKCduYXYnKS5vdXRlckhlaWdodCgpKTtcclxuICAgICAgICAkKCcubmF2LWxpbmsnKS5jc3MoJ2NvbG9yJywnd2hpdGUnKVxyXG4gICAgICAgICQodGhpcykuY3NzKCdjb2xvcicsJ3llbGxvdycpXHJcbiAgICB9KTtcclxuIFxyXG59KTtcclxuXHJcbiQoJyNwcmVzZW50YXRpb25fZm9ybV9waG90bycpLm9uKCdjaGFuZ2UnLChldmVudCkgPT4ge1xyXG4gICBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LnRhcmdldC5maWxlc1swXSk7XHJcbiAgICBjb25zb2xlLmxvZyhzcmMpXHJcbiAgICAkKCcjaW1nLXByZXMnKS5hdHRyKCdzcmMnLHNyYylcclxuICAgIHNyYy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzcmMpIC8vIGZyZWUgbWVtb3J5XHJcbiAgICB9XHJcbn0pXHJcbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmN1c3RvbS1maWxlLWlucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGZpbGVOYW1lID0gJCh0aGlzKS52YWwoKS5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvLipcXC8vLCAnJyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgnLmN1c3RvbS1maWxlJykuZmluZCgnLmN1c3RvbS1maWxlLWxhYmVsJykudGV4dChmaWxlTmFtZSk7XHJcbn0pO1xyXG52YXIgbG9hZEZpbGUgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgdmFyIG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzZW50YXRpb25fZm9ybV9waG90bycpO1xyXG4gICAgb3V0cHV0LnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIGNvbnNvbGUubG9nKG91dHB1dClcclxuICAgIG91dHB1dC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChvdXRwdXQuc3JjKSAvLyBmcmVlIG1lbW9yeVxyXG4gICAgfVxyXG4gIH07XHJcbiIsInZhciB3aXRoaW5WaWV3cG9ydCA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAvLyBDdXR0aW5nIHRoZSBtdXN0YXJkXHJcbiAgLy8gaHR0cDovL3dlYmZpZWxkbWFudWFsLmNvbS9ndWlkZXMvY3V0dGluZy10aGUtbXVzdGFyZC5odG1sXHJcblxyXG4gIGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QpIHtcclxuXHJcbiAgICAvLyBQYXNzZXMgdGhlIHRlc3Qgc28gYWRkIGVuaGFuY2VkIGNsYXNzIHRvIEhUTUwgdGFnXHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZW5oYW5jZWQnKTtcclxuXHJcbiAgICAvLyBUaHJvdHRsZVxyXG4gICAgLy8gaHR0cHM6Ly91bmRlcnNjb3JlanMub3JnLyN0aHJvdHRsZVxyXG4gICAgdmFyIHRocm90dGxlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgb3B0aW9ucykge1xyXG4gICAgICB2YXIgXyA9IHtcclxuICAgICAgICBub3c6IERhdGUubm93IHx8IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgdmFyIGNvbnRleHQsIGFyZ3MsIHJlc3VsdDtcclxuICAgICAgdmFyIHRpbWVvdXQgPSBudWxsO1xyXG4gICAgICB2YXIgcHJldmlvdXMgPSAwO1xyXG4gICAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IF8ubm93KCk7XHJcbiAgICAgICAgdGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICBpZiAoIXRpbWVvdXQpIHtcclxuICAgICAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbm93ID0gXy5ub3coKTtcclxuICAgICAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHByZXZpb3VzID0gbm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XHJcbiAgICAgICAgY29udGV4dCA9IHRoaXM7XHJcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICBpZiAocmVtYWluaW5nIDw9IDAgfHwgcmVtYWluaW5nID4gd2FpdCkge1xyXG4gICAgICAgICAgaWYgKHRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHByZXZpb3VzID0gbm93O1xyXG4gICAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICAgIGlmICghdGltZW91dCkge1xyXG4gICAgICAgICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgIC8vIGh0dHA6Ly93d3cucGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xyXG4gICAgdmFyIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XHJcblxyXG4gICAgLy8gR2xvYmFsIGNsYXNzIGZvciByZXZlYWxpbmcgZWxlbWVudFxyXG4gICAgdmFyIHJldmVhbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJldmVhbGVyJyk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSB2aWV3cG9ydCAod2luZG93KSBkaW1lbnNpb25zXHJcbiAgICB2YXIgZ2V0Vmlld3BvcnRTaXplID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc2NvbGwgcG9zaXRpb25cclxuICAgIHZhciBnZXRDdXJyZW50U2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeDogd2luZG93LnBhZ2VYT2Zmc2V0LFxyXG4gICAgICAgIHk6IHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBHZXQgZWxlbWVudCBkaW1lbnNpb25zIGFuZCBwb3NpdGlvblxyXG4gICAgdmFyIGdldEVsZW1JbmZvID0gZnVuY3Rpb24oZWxlbSkge1xyXG4gICAgICB2YXIgb2Zmc2V0VG9wID0gMDtcclxuICAgICAgdmFyIG9mZnNldExlZnQgPSAwO1xyXG4gICAgICB2YXIgb2Zmc2V0SGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHZhciBvZmZzZXRXaWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICBkbyB7XHJcbiAgICAgICAgaWYgKCFpc05hTihlbGVtLm9mZnNldFRvcCkpIHtcclxuICAgICAgICAgIG9mZnNldFRvcCArPSBlbGVtLm9mZnNldFRvcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc05hTihlbGVtLm9mZnNldExlZnQpKSB7XHJcbiAgICAgICAgICBvZmZzZXRMZWZ0ICs9IGVsZW0ub2Zmc2V0TGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gd2hpbGUgKChlbGVtID0gZWxlbS5vZmZzZXRQYXJlbnQpICE9PSBudWxsKTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiBvZmZzZXRUb3AsXHJcbiAgICAgICAgbGVmdDogb2Zmc2V0TGVmdCxcclxuICAgICAgICBoZWlnaHQ6IG9mZnNldEhlaWdodCxcclxuICAgICAgICB3aWR0aDogb2Zmc2V0V2lkdGhcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ2hlY2sgdmlzaWJpbGl0eSBvZiB0aGUgZWxlbWVudCBpbiB0aGUgdmlld3BvcnRcclxuICAgIHZhciBjaGVja1Zpc2liaWxpdHkgPSBmdW5jdGlvbihlbGVtKSB7XHJcbiAgICAgIHZhciB2aWV3cG9ydFNpemUgPSBnZXRWaWV3cG9ydFNpemUoKTtcclxuICAgICAgdmFyIGN1cnJlbnRTY3JvbGwgPSBnZXRDdXJyZW50U2Nyb2xsKCk7XHJcbiAgICAgIHZhciBlbGVtSW5mbyA9IGdldEVsZW1JbmZvKGVsZW0pO1xyXG4gICAgICB2YXIgc3BhY2VPZmZzZXQgPSAwLjI7XHJcbiAgICAgIHZhciBlbGVtSGVpZ2h0ID0gZWxlbUluZm8uaGVpZ2h0O1xyXG4gICAgICB2YXIgZWxlbVdpZHRoID0gZWxlbUluZm8ud2lkdGg7XHJcbiAgICAgIHZhciBlbGVtVG9wID0gZWxlbUluZm8udG9wO1xyXG4gICAgICB2YXIgZWxlbUxlZnQgPSBlbGVtSW5mby5sZWZ0O1xyXG4gICAgICB2YXIgZWxlbUJvdHRvbSA9IGVsZW1Ub3AgKyBlbGVtSGVpZ2h0O1xyXG4gICAgICB2YXIgZWxlbVJpZ2h0ID0gZWxlbUxlZnQgKyBlbGVtV2lkdGg7XHJcblxyXG4gICAgICB2YXIgY2hlY2tCb3VuZGFyaWVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gRGVmaW5pbmcgdGhlIGVsZW1lbnQgYm91bmRhcmllcyBhbmQgZXh0cmEgc3BhY2Ugb2Zmc2V0XHJcbiAgICAgICAgdmFyIHRvcCA9IGVsZW1Ub3AgKyBlbGVtSGVpZ2h0ICogc3BhY2VPZmZzZXQ7XHJcbiAgICAgICAgdmFyIGxlZnQgPSBlbGVtTGVmdCArIGVsZW1XaWR0aCAqIHNwYWNlT2Zmc2V0O1xyXG4gICAgICAgIHZhciBib3R0b20gPSBlbGVtQm90dG9tIC0gZWxlbUhlaWdodCAqIHNwYWNlT2Zmc2V0O1xyXG4gICAgICAgIHZhciByaWdodCA9IGVsZW1SaWdodCAtIGVsZW1XaWR0aCAqIHNwYWNlT2Zmc2V0O1xyXG5cclxuICAgICAgICAvLyBEZWZpbmluZyB0aGUgd2luZG93IGJvdW5kYXJpZXMgYW5kIHdpbmRvdyBvZmZzZXRcclxuICAgICAgICB2YXIgd1RvcCA9IGN1cnJlbnRTY3JvbGwueSArIDA7XHJcbiAgICAgICAgdmFyIHdMZWZ0ID0gY3VycmVudFNjcm9sbC54ICsgMDtcclxuICAgICAgICB2YXIgd0JvdHRvbSA9IGN1cnJlbnRTY3JvbGwueSAtIDAgKyB2aWV3cG9ydFNpemUuaGVpZ2h0O1xyXG4gICAgICAgIHZhciB3UmlnaHQgPSBjdXJyZW50U2Nyb2xsLnggLSAwICsgdmlld3BvcnRTaXplLndpZHRoO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgZWxlbWVudCBpcyB3aXRoaW4gYm91bmRhcnlcclxuICAgICAgICByZXR1cm4gKHRvcCA8IHdCb3R0b20pICYmIChib3R0b20gPiB3VG9wKSAmJiAobGVmdCA+IHdMZWZ0KSAmJiAocmlnaHQgPCB3UmlnaHQpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIGNoZWNrQm91bmRhcmllcygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBSdW4gYSBsb29wIHdpdGggY2hlY2tWaXNpYmlsaXR5KCkgYW5kIGFkZCAvIHJlbW92ZSBjbGFzc2VzIHRvIHRoZSBlbGVtZW50c1xyXG4gICAgdmFyIHRvZ2dsZUVsZW1lbnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXZlYWxlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChjaGVja1Zpc2liaWxpdHkocmV2ZWFsZXJbaV0pKSB7XHJcbiAgICAgICAgICByZXZlYWxlcltpXS5jbGFzc0xpc3QuYWRkKCdyZXZlYWxlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXZlYWxlcltpXS5jbGFzc0xpc3QucmVtb3ZlKCdyZXZlYWxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUaHJvdHRsZSBldmVudHMgYW5kIHJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgdmFyIHNjcm9sbEhhbmRsZXIgPSB0aHJvdHRsZShmdW5jdGlvbigpIHtcclxuICAgICAgX3JlcXVlc3RBbmltYXRpb25GcmFtZSh0b2dnbGVFbGVtZW50KTtcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgdmFyIHJlc2l6ZUhhbmRsZXIgPSB0aHJvdHRsZShmdW5jdGlvbigpIHtcclxuICAgICAgX3JlcXVlc3RBbmltYXRpb25GcmFtZSh0b2dnbGVFbGVtZW50KTtcclxuXHJcbiAgICAgIC8vIEZvciBkZW1vIHB1cnBvc2VzIG9ubHlcclxuICAgICAgZnVsbHNjcmVlbkludHJvKCk7XHJcbiAgICB9LCAzMDApO1xyXG5cclxuICAgIHNjcm9sbEhhbmRsZXIoKTtcclxuXHJcbiAgICAvLyBMaXN0ZW5pbmcgZm9yIGV2ZW50c1xyXG4gICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbnNjcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29ucmVzaXplJywgcmVzaXplSGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aW5kb3cub25zY3JvbGwgPSBzY3JvbGxIYW5kbGVyO1xyXG4gICAgICB3aW5kb3cub25yZXNpemUgPSByZXNpemVIYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vIEZPUiBERU1PIFBVUlBPU0VTIE9OTFlcclxuICAvLyBNYWtlcyBmdWxsc2NyZWVuIGludHJvIG9uIGFueSBkZXZpY2Ugc28gdXNlciBpcyBmb3JjZWQgdG8gc2Nyb2xsXHJcbiAgdmFyIGZ1bGxzY3JlZW5JbnRybyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGZ1bGxzY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnVsbHNjcmVlbicpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmdWxsc2NyZWVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZ1bGxzY3JlZW5baV0uc3R5bGUuaGVpZ2h0ID0gZ2V0Vmlld3BvcnRTaXplKCkuaGVpZ2h0ICsgMSArICdweCc7XHJcbiAgICB9XHJcbiAgfTtcclxuICBmdWxsc2NyZWVuSW50cm8oKTtcclxuXHJcbiAgcmV0dXJuIHdpdGhpblZpZXdwb3J0O1xyXG5cclxufSgpKTsiLCJpbXBvcnQgdGlueW1jZSBmcm9tICd0aW55bWNlL3RpbnltY2UnO1xyXG5pbXBvcnQgJ3RpbnltY2UvdGhlbWVzL3NpbHZlci90aGVtZSdcclxuaW1wb3J0ICd0aW55bWNlL3RoZW1lcy9zaWx2ZXIvdGhlbWUnXHJcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL3Bhc3RlL3BsdWdpbidcclxuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvbGluay9wbHVnaW4nXHJcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2F1dG9yZXNpemUvcGx1Z2luJ1xyXG5pbXBvcnQgJ3RpbnltY2UvaWNvbnMvZGVmYXVsdCdcclxuLy8gaW1wb3J0ICd0aW55bWNlL3NraW5zL2NvbnRlbnQvZGVmYXVsdCdcclxuXHJcbi8vIGltcG9ydCAndGlueW1jZS9za2lucy9jb250ZW50L2RlZmF1bHQnXHJcblxyXG4gdGlueW1jZS5pbml0KHtcclxuICAgIC8vIHNraW46IGZhbHNlLFxyXG4gICAgc2VsZWN0b3I6ICcudGlueW1jZScsXHJcbiAgICBwbHVnaW5zOiAncHJpbnQgcHJldmlldyAgaW1wb3J0Y3NzIHNlYXJjaHJlcGxhY2UgYXV0b2xpbmsgYXV0b3NhdmUgc2F2ZSBkaXJlY3Rpb25hbGl0eSB2aXN1YWxibG9ja3MgdmlzdWFsY2hhcnMgZnVsbHNjcmVlbiBpbWFnZSBsaW5rIG1lZGlhIHRlbXBsYXRlIGNvZGVzYW1wbGUgdGFibGUgY2hhcm1hcCBociBwYWdlYnJlYWsgbm9uYnJlYWtpbmcgYW5jaG9yIHRvYyBpbnNlcnRkYXRldGltZSBhZHZsaXN0IGxpc3RzIHdvcmRjb3VudCBpbWFnZXRvb2xzIHRleHRwYXR0ZXJuIG5vbmVkaXRhYmxlIGhlbHAgY2hhcm1hcCBxdWlja2JhcnMgZW1vdGljb25zJyxcclxuIFxyXG4gIG1vYmlsZToge1xyXG4gICAgcGx1Z2luczogJ3ByaW50IHByZXZpZXcgIGltcG9ydGNzcyAgc2VhcmNocmVwbGFjZSBhdXRvbGluayBhdXRvc2F2ZSBzYXZlIGRpcmVjdGlvbmFsaXR5IHZpc3VhbGJsb2NrcyB2aXN1YWxjaGFycyBmdWxsc2NyZWVuIGltYWdlIGxpbmsgbWVkaWEgdGVtcGxhdGUgY29kZXNhbXBsZSB0YWJsZSBjaGFybWFwIGhyIHBhZ2VicmVhayBub25icmVha2luZyBhbmNob3IgdG9jIGluc2VydGRhdGV0aW1lIGFkdmxpc3QgbGlzdHMgd29yZGNvdW50IHRleHRwYXR0ZXJuIG5vbmVkaXRhYmxlIGhlbHAgY2hhcm1hcCBxdWlja2JhcnMgZW1vdGljb25zJ1xyXG4gIH0sXHJcbiAgbWVudToge1xyXG4gICAgdGM6IHtcclxuICAgICAgdGl0bGU6ICdUaW55Q29tbWVudHMnLFxyXG4gICAgICBpdGVtczogJ2FkZGNvbW1lbnQgc2hvd2NvbW1lbnRzIGRlbGV0ZWFsbGNvbnZlcnNhdGlvbnMnXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZW51YmFyOiAnZmlsZSBlZGl0IHZpZXcgaW5zZXJ0IGZvcm1hdCB0b29scyB0YWJsZSB0YyBoZWxwJyxcclxuICB0b29sYmFyOiAndW5kbyByZWRvIHwgYm9sZCBpdGFsaWMgdW5kZXJsaW5lIHN0cmlrZXRocm91Z2ggfCBmb250c2VsZWN0IGZvbnRzaXplc2VsZWN0IGZvcm1hdHNlbGVjdCB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IG91dGRlbnQgaW5kZW50IHwgIG51bWxpc3QgYnVsbGlzdCB8IGZvcmVjb2xvciBiYWNrY29sb3IgcmVtb3ZlZm9ybWF0IHwgcGFnZWJyZWFrIHwgY2hhcm1hcCBlbW90aWNvbnMgfCBmdWxsc2NyZWVuICBwcmV2aWV3IHNhdmUgcHJpbnQgfCBpbnNlcnRmaWxlIGltYWdlIG1lZGlhIHRlbXBsYXRlIGxpbmsgYW5jaG9yIGNvZGVzYW1wbGUgfCBhMTF5Y2hlY2sgbHRyIHJ0bCB8IHNob3djb21tZW50cyBhZGRjb21tZW50JyxcclxuICBhdXRvc2F2ZV9hc2tfYmVmb3JlX3VubG9hZDogdHJ1ZSxcclxuICBhdXRvc2F2ZV9pbnRlcnZhbDogJzMwcycsXHJcbiAgYXV0b3NhdmVfcHJlZml4OiAne3BhdGh9e3F1ZXJ5fS17aWR9LScsXHJcbiAgYXV0b3NhdmVfcmVzdG9yZV93aGVuX2VtcHR5OiBmYWxzZSxcclxuICBhdXRvc2F2ZV9yZXRlbnRpb246ICcybScsXHJcbiAgaW1hZ2VfYWR2dGFiOiB0cnVlLFxyXG4gIGxpbmtfbGlzdDogW1xyXG4gICAgeyB0aXRsZTogJ015IHBhZ2UgMScsIHZhbHVlOiAnaHR0cHM6Ly93d3cudGlueS5jbG91ZCcgfSxcclxuICAgIHsgdGl0bGU6ICdNeSBwYWdlIDInLCB2YWx1ZTogJ2h0dHA6Ly93d3cubW94aWVjb2RlLmNvbScgfVxyXG4gIF0sXHJcbiAgaW1hZ2VfbGlzdDogW1xyXG4gICAgeyB0aXRsZTogJ015IHBhZ2UgMScsIHZhbHVlOiAnaHR0cHM6Ly93d3cudGlueS5jbG91ZCcgfSxcclxuICAgIHsgdGl0bGU6ICdNeSBwYWdlIDInLCB2YWx1ZTogJ2h0dHA6Ly93d3cubW94aWVjb2RlLmNvbScgfVxyXG4gIF0sXHJcbiAgaW1hZ2VfY2xhc3NfbGlzdDogW1xyXG4gICAgeyB0aXRsZTogJ05vbmUnLCB2YWx1ZTogJycgfSxcclxuICAgIHsgdGl0bGU6ICdTb21lIGNsYXNzJywgdmFsdWU6ICdjbGFzcy1uYW1lJyB9XHJcbiAgXSxcclxuICBpbXBvcnRjc3NfYXBwZW5kOiB0cnVlLFxyXG4gIHRlbXBsYXRlczogW1xyXG4gICAgICAgIHsgdGl0bGU6ICdOZXcgVGFibGUnLCBkZXNjcmlwdGlvbjogJ2NyZWF0ZXMgYSBuZXcgdGFibGUnLCBjb250ZW50OiAnPGRpdiBjbGFzcz1cIm1jZVRtcGxcIj48dGFibGUgd2lkdGg9XCI5OCUlXCIgIGJvcmRlcj1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIj48dHI+PHRoIHNjb3BlPVwiY29sXCI+IDwvdGg+PHRoIHNjb3BlPVwiY29sXCI+IDwvdGg+PC90cj48dHI+PHRkPiA8L3RkPjx0ZD4gPC90ZD48L3RyPjwvdGFibGU+PC9kaXY+JyB9LFxyXG4gICAgeyB0aXRsZTogJ1N0YXJ0aW5nIG15IHN0b3J5JywgZGVzY3JpcHRpb246ICdBIGN1cmUgZm9yIHdyaXRlcnMgYmxvY2snLCBjb250ZW50OiAnT25jZSB1cG9uIGEgdGltZS4uLicgfSxcclxuICAgIHsgdGl0bGU6ICdOZXcgbGlzdCB3aXRoIGRhdGVzJywgZGVzY3JpcHRpb246ICdOZXcgTGlzdCB3aXRoIGRhdGVzJywgY29udGVudDogJzxkaXYgY2xhc3M9XCJtY2VUbXBsXCI+PHNwYW4gY2xhc3M9XCJjZGF0ZVwiPmNkYXRlPC9zcGFuPjxiciAvPjxzcGFuIGNsYXNzPVwibWRhdGVcIj5tZGF0ZTwvc3Bhbj48aDI+TXkgTGlzdDwvaDI+PHVsPjxsaT48L2xpPjxsaT48L2xpPjwvdWw+PC9kaXY+JyB9XHJcbiAgXSxcclxuICB0ZW1wbGF0ZV9jZGF0ZV9mb3JtYXQ6ICdbRGF0ZSBDcmVhdGVkIChDREFURSk6ICVtLyVkLyVZIDogJUg6JU06JVNdJyxcclxuICB0ZW1wbGF0ZV9tZGF0ZV9mb3JtYXQ6ICdbRGF0ZSBNb2RpZmllZCAoTURBVEUpOiAlbS8lZC8lWSA6ICVIOiVNOiVTXScsXHJcbiAgaGVpZ2h0OiA2MDAsXHJcbiAgaW1hZ2VfY2FwdGlvbjogdHJ1ZSxcclxuICBxdWlja2JhcnNfc2VsZWN0aW9uX3Rvb2xiYXI6ICdib2xkIGl0YWxpYyB8IHF1aWNrbGluayBoMiBoMyBibG9ja3F1b3RlIHF1aWNraW1hZ2UgcXVpY2t0YWJsZScsXHJcbiAgbm9uZWRpdGFibGVfbm9uZWRpdGFibGVfY2xhc3M6ICdtY2VOb25FZGl0YWJsZScsXHJcbiAgdG9vbGJhcl9tb2RlOiAnc2xpZGluZycsXHJcbiAgc3BlbGxjaGVja2VyX2lnbm9yZV9saXN0OiBbJ0VwaG94JywgJ01veGllY29kZSddLFxyXG4vLyAgIHRpbnljb21tZW50c19tb2RlOiAnZW1iZWRkZWQnLFxyXG4gIGNvbnRlbnRfc3R5bGU6ICcubXltZW50aW9ueyBjb2xvcjogZ3JheTsgfScsXHJcbiAgY29udGV4dG1lbnU6ICdsaW5rIGltYWdlIGltYWdldG9vbHMgdGFibGUgY29uZmlndXInLFxyXG4vLyAgIGExMXlfYWR2YW5jZWRfb3B0aW9uczogdHJ1ZSxcclxuICBcclxuICAvKlxyXG4gIFRoZSBmb2xsb3dpbmcgc2V0dGluZ3MgcmVxdWlyZSBtb3JlIGNvbmZpZ3VyYXRpb24gdGhhbiBzaG93biBoZXJlLlxyXG4gIEZvciBpbmZvcm1hdGlvbiBvbiBjb25maWd1cmluZyB0aGUgbWVudGlvbnMgcGx1Z2luLCBzZWU6XHJcbiAgaHR0cHM6Ly93d3cudGlueS5jbG91ZC9kb2NzL3BsdWdpbnMvcHJlbWl1bS9tZW50aW9ucy8uXHJcbiAgKi9cclxuICBcclxuICB9KTsiLCIvLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCBic0N1c3RvbUZpbGVJbnB1dCBmcm9tICdicy1jdXN0b20tZmlsZS1pbnB1dCc7XG5cbiAvLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbiBpbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuIGltcG9ydCAnLi9jb250cm9sbGVycy9zY3JvbGwuanMnO1xuIGltcG9ydCAnLi9jb250cm9sbGVycy90aW55bWNlLmpzJztcbiBpbXBvcnQgJy4vY29udHJvbGxlcnMvY29sbGVjdGlvbi5qcyc7XG4gaW1wb3J0ICcuL2NvbnRyb2xsZXJzL3Njcm9sbFZpZXcuanMnO1xuIFxuIGdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XG5cbmJzQ3VzdG9tRmlsZUlucHV0LmluaXQoKTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9