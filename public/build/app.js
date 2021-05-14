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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-297431"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3RpbnltY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwibmFtZXMiOlsicHV0RGVsZXRlQnV0dG9uIiwiJGZvcm0iLCIkZGVsZXRlQnV0dG9uIiwiJCIsImFwcGVuZCIsIm9uIiwicmVtb3ZlIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsImZpbmQiLCJlYWNoIiwiZSIsImxpc3QiLCJ0YXJnZXQiLCJkYXRhIiwiY291bnRlciIsImNoaWxkcmVuIiwibGVuZ3RoIiwibmV3V2lkZ2V0IiwicmVwbGFjZSIsIm5ld0VsZW0iLCJodG1sIiwiY29uc29sZSIsImxvZyIsImV2ZW50Iiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiLCJhdHRyIiwib25sb2FkIiwicmV2b2tlT2JqZWN0VVJMIiwiYWRkQ2xhc3MiLCJjc3MiLCJhcHBlbmRUbyIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIkNvbnRyb2xsZXIiLCJzY3JvbGxfdG8iLCJjbGlja2VkX2xpbmsiLCJuYXZfaGVpZ2h0IiwiZWxlbWVudF9jbGFzcyIsIm9mZnNldCIsInRvcCIsIndpbmRvdyIsInNjcm9sbFRvcCIsInN0b3AiLCJhbmltYXRlIiwicHJldmVudERlZmF1bHQiLCJvdXRlckhlaWdodCIsImZpbGVOYW1lIiwidmFsIiwicGFyZW50IiwidGV4dCIsImxvYWRGaWxlIiwib3V0cHV0IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0aW55bWNlIiwic2VsZWN0b3IiLCJwbHVnaW5zIiwibW9iaWxlIiwibWVudSIsInRjIiwidGl0bGUiLCJpdGVtcyIsIm1lbnViYXIiLCJ0b29sYmFyIiwiYXV0b3NhdmVfYXNrX2JlZm9yZV91bmxvYWQiLCJhdXRvc2F2ZV9pbnRlcnZhbCIsImF1dG9zYXZlX3ByZWZpeCIsImF1dG9zYXZlX3Jlc3RvcmVfd2hlbl9lbXB0eSIsImF1dG9zYXZlX3JldGVudGlvbiIsImltYWdlX2FkdnRhYiIsImxpbmtfbGlzdCIsInZhbHVlIiwiaW1hZ2VfbGlzdCIsImltYWdlX2NsYXNzX2xpc3QiLCJpbXBvcnRjc3NfYXBwZW5kIiwidGVtcGxhdGVzIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwidGVtcGxhdGVfY2RhdGVfZm9ybWF0IiwidGVtcGxhdGVfbWRhdGVfZm9ybWF0IiwiaGVpZ2h0IiwiaW1hZ2VfY2FwdGlvbiIsInF1aWNrYmFyc19zZWxlY3Rpb25fdG9vbGJhciIsIm5vbmVkaXRhYmxlX25vbmVkaXRhYmxlX2NsYXNzIiwidG9vbGJhcl9tb2RlIiwic3BlbGxjaGVja2VyX2lnbm9yZV9saXN0IiwiY29udGVudF9zdHlsZSIsImNvbnRleHRtZW51IiwiZ2xvYmFsIiwiYnNDdXN0b21GaWxlSW5wdXQiLCJhcHAiLCJzdGFydFN0aW11bHVzQXBwIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBLGlFQUFlO0FBQ2YsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNERCxTQUFTQSxl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Q0FDTDtBQUFFZixTQUFLLEVBQUUsV0FBVDtBQUFzQmdCLGVBQVcsRUFBRSxxQkFBbkM7QUFBMERDLFdBQU8sRUFBRTtBQUFuRSxHQURLLEVBRVQ7QUFBRWpCLFNBQUssRUFBRSxtQkFBVDtBQUE4QmdCLGVBQVcsRUFBRSwwQkFBM0M7QUFBdUVDLFdBQU8sRUFBRTtBQUFoRixHQUZTLEVBR1Q7QUFBRWpCLFNBQUssRUFBRSxxQkFBVDtBQUFnQ2dCLGVBQVcsRUFBRSxxQkFBN0M7QUFBb0VDLFdBQU8sRUFBRTtBQUE3RSxHQUhTLENBbkNDO0FBd0NaQyx1QkFBcUIsRUFBRSw2Q0F4Q1g7QUF5Q1pDLHVCQUFxQixFQUFFLDhDQXpDWDtBQTBDWkMsUUFBTSxFQUFFLEdBMUNJO0FBMkNaQyxlQUFhLEVBQUUsSUEzQ0g7QUE0Q1pDLDZCQUEyQixFQUFFLGdFQTVDakI7QUE2Q1pDLCtCQUE2QixFQUFFLGdCQTdDbkI7QUE4Q1pDLGNBQVksRUFBRSxTQTlDRjtBQStDWkMsMEJBQXdCLEVBQUUsQ0FBQyxPQUFELEVBQVUsV0FBVixDQS9DZDtBQWdEZDtBQUNFQyxlQUFhLEVBQUUsNEJBakRIO0FBa0RaQyxhQUFXLEVBQUUsc0NBbERELENBbURkOztBQUVFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBekRjLENBQWIsRTs7Ozs7Ozs7Ozs7O0FHWEQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2NvbGxlY3Rpb24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9jb2xsZWN0aW9uLmpzXCIsXG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vc2Nyb2xsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvc2Nyb2xsLmpzXCIsXG5cdFwiLi90aW55bWNlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvdGlueW1jZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oanx0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImZ1bmN0aW9uIHB1dERlbGV0ZUJ1dHRvbigkZm9ybSkge1xyXG4gICAgbGV0ICRkZWxldGVCdXR0b24gPSAkKCc8ZGl2ICBpZD1cImJ1dHRvbl9yZW1vdmVfdXNlcnNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+U3VwcHJpbWVyPC9idXR0b24+PC9kaXY+JylcclxuICAgICRmb3JtLmFwcGVuZCgkZGVsZXRlQnV0dG9uKVxyXG4gICAgJGZvcm0uYXBwZW5kKCc8aW1nIGlkPVwiaW1nLXByZXNcIiBzcmM9XCJcIiBhbHQ9XCJcIj4nKVxyXG4gICAgJGRlbGV0ZUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJGZvcm0ucmVtb3ZlKClcclxuICAgIH0pXHJcbn1cclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI3RvcGljLWxpc3QnKS5maW5kKCcudG9waWMnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwdXREZWxldGVCdXR0b24oJCh0aGlzKSk7XHJcbiAgICB9KVxyXG4gICAgalF1ZXJ5KCcuYWRkLWFub3RoZXItY29sbGVjdGlvbi13aWRnZXQnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIHZhciBsaXN0ID0gJCgkKGUudGFyZ2V0KS5kYXRhKCdsaXN0LXNlbGVjdG9yJykpO1xyXG4gICAgICAgIHZhciBjb3VudGVyID0gbGlzdC5kYXRhKCd3aWRnZXQtY291bnRlcicpIHx8IGxpc3QuY2hpbGRyZW4oKS5sZW5ndGg7XHJcbiAgICAgICAgdmFyIG5ld1dpZGdldCA9IGxpc3QuZGF0YSgncHJvdG90eXBlJyk7XHJcbiAgICAgICAgbmV3V2lkZ2V0ID0gbmV3V2lkZ2V0LnJlcGxhY2UoL19fbmFtZV9fL2csIGNvdW50ZXIpO1xyXG4gICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICBsaXN0LmRhdGEoJ3dpZGdldC1jb3VudGVyJywgY291bnRlcik7XHJcbiAgICAgICAgdmFyIG5ld0VsZW0gPSBqUXVlcnkobGlzdC5kYXRhKCd3aWRnZXQtdGFncycpKS5odG1sKG5ld1dpZGdldCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIG5ld1dpZGdldClcclxuICAgICAgICAkKCcjYWN0dWFsaXRlc19mb3JtX3RvcGljXzBfaWxsdXN0cmF0aW9uJykub24oJ2NoYW5nZScsKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgICQoJyNpbWctcHJlcycpLmF0dHIoJ3NyYycsc3JjKVxyXG4gICAgICAgICAgICAgc3JjLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHNyYykgLy8gZnJlZSBtZW1vcnlcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfSlcclxuICAgICAgICBuZXdFbGVtLmFkZENsYXNzKCdjYXJkJylcclxuICAgICAgICBuZXdFbGVtLmFkZENsYXNzKCdtdC00JylcclxuICAgICAgICBuZXdFbGVtLmNzcygncGFkZGluZycsJzJlbScpXHJcbiAgICAgICAgbmV3RWxlbS5jc3MoJ2NvbG9yJywnYmxhY2snKVxyXG4gICAgICAgIHB1dERlbGV0ZUJ1dHRvbihuZXdFbGVtKTtcclxuICAgICAgICBuZXdFbGVtLmFwcGVuZFRvKGxpc3QpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsImZ1bmN0aW9uIHNjcm9sbF90byhjbGlja2VkX2xpbmssIG5hdl9oZWlnaHQpIHtcclxuICAgIHZhciBlbGVtZW50X2NsYXNzID0gY2xpY2tlZF9saW5rLmF0dHIoJ2hyZWYnKTtcclxuICAgIHZhciBzY3JvbGxfdG8gPSAwO1xyXG4gICAgaWYoZWxlbWVudF9jbGFzcyAhPSAnLmhvbWUnKSB7XHJcbiAgICAgICAgc2Nyb2xsX3RvID0gJChlbGVtZW50X2NsYXNzKS5vZmZzZXQoKS50b3AgLSBuYXZfaGVpZ2h0O1xyXG4gICAgICAgICQoZWxlbWVudF9jbGFzcykuY3NzKCdjb2xvcicsJ2dyZWVuJylcclxuICAgIH1cclxuICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSAhPSBzY3JvbGxfdG8pIHtcclxuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDogc2Nyb2xsX3RvfSwgMTAwMCk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLm5hdi1ob21lJykuY3NzKCdjb2xvcicsJ3llbGxvdycpXHJcbiAgICAkKCdhLnNjcm9sbC1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzY3JvbGxfdG8oJCh0aGlzKSwgJCgnbmF2Jykub3V0ZXJIZWlnaHQoKSk7XHJcbiAgICAgICAgJCgnLm5hdi1saW5rJykuY3NzKCdjb2xvcicsJ3doaXRlJylcclxuICAgICAgICAkKHRoaXMpLmNzcygnY29sb3InLCd5ZWxsb3cnKVxyXG4gICAgfSk7XHJcbiBcclxufSk7XHJcblxyXG4kKCcjcHJlc2VudGF0aW9uX2Zvcm1fcGhvdG8nKS5vbignY2hhbmdlJywoZXZlbnQpID0+IHtcclxuICAgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgY29uc29sZS5sb2coc3JjKVxyXG4gICAgJCgnI2ltZy1wcmVzJykuYXR0cignc3JjJyxzcmMpXHJcbiAgICBzcmMub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoc3JjKSAvLyBmcmVlIG1lbW9yeVxyXG4gICAgfVxyXG59KVxyXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jdXN0b20tZmlsZS1pbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBmaWxlTmFtZSA9ICQodGhpcykudmFsKCkucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoLy4qXFwvLywgJycpO1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoJy5jdXN0b20tZmlsZScpLmZpbmQoJy5jdXN0b20tZmlsZS1sYWJlbCcpLnRleHQoZmlsZU5hbWUpO1xyXG59KTtcclxudmFyIGxvYWRGaWxlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIHZhciBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc2VudGF0aW9uX2Zvcm1fcGhvdG8nKTtcclxuICAgIG91dHB1dC5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LnRhcmdldC5maWxlc1swXSk7XHJcbiAgICBjb25zb2xlLmxvZyhvdXRwdXQpXHJcbiAgICBvdXRwdXQub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwob3V0cHV0LnNyYykgLy8gZnJlZSBtZW1vcnlcclxuICAgIH1cclxuICB9O1xyXG4iLCJpbXBvcnQgdGlueW1jZSBmcm9tICd0aW55bWNlL3RpbnltY2UnO1xyXG5pbXBvcnQgJ3RpbnltY2UvdGhlbWVzL3NpbHZlci90aGVtZSdcclxuaW1wb3J0ICd0aW55bWNlL3RoZW1lcy9zaWx2ZXIvdGhlbWUnXHJcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL3Bhc3RlL3BsdWdpbidcclxuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvbGluay9wbHVnaW4nXHJcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2F1dG9yZXNpemUvcGx1Z2luJ1xyXG5pbXBvcnQgJ3RpbnltY2UvaWNvbnMvZGVmYXVsdCdcclxuLy8gaW1wb3J0ICd0aW55bWNlL3NraW5zL2NvbnRlbnQvZGVmYXVsdCdcclxuXHJcbi8vIGltcG9ydCAndGlueW1jZS9za2lucy9jb250ZW50L2RlZmF1bHQnXHJcblxyXG4gdGlueW1jZS5pbml0KHtcclxuICAgIC8vIHNraW46IGZhbHNlLFxyXG4gICAgc2VsZWN0b3I6ICcudGlueW1jZScsXHJcbiAgICBwbHVnaW5zOiAncHJpbnQgcHJldmlldyAgaW1wb3J0Y3NzIHNlYXJjaHJlcGxhY2UgYXV0b2xpbmsgYXV0b3NhdmUgc2F2ZSBkaXJlY3Rpb25hbGl0eSB2aXN1YWxibG9ja3MgdmlzdWFsY2hhcnMgZnVsbHNjcmVlbiBpbWFnZSBsaW5rIG1lZGlhIHRlbXBsYXRlIGNvZGVzYW1wbGUgdGFibGUgY2hhcm1hcCBociBwYWdlYnJlYWsgbm9uYnJlYWtpbmcgYW5jaG9yIHRvYyBpbnNlcnRkYXRldGltZSBhZHZsaXN0IGxpc3RzIHdvcmRjb3VudCBpbWFnZXRvb2xzIHRleHRwYXR0ZXJuIG5vbmVkaXRhYmxlIGhlbHAgY2hhcm1hcCBxdWlja2JhcnMgZW1vdGljb25zJyxcclxuIFxyXG4gIG1vYmlsZToge1xyXG4gICAgcGx1Z2luczogJ3ByaW50IHByZXZpZXcgIGltcG9ydGNzcyAgc2VhcmNocmVwbGFjZSBhdXRvbGluayBhdXRvc2F2ZSBzYXZlIGRpcmVjdGlvbmFsaXR5IHZpc3VhbGJsb2NrcyB2aXN1YWxjaGFycyBmdWxsc2NyZWVuIGltYWdlIGxpbmsgbWVkaWEgdGVtcGxhdGUgY29kZXNhbXBsZSB0YWJsZSBjaGFybWFwIGhyIHBhZ2VicmVhayBub25icmVha2luZyBhbmNob3IgdG9jIGluc2VydGRhdGV0aW1lIGFkdmxpc3QgbGlzdHMgd29yZGNvdW50IHRleHRwYXR0ZXJuIG5vbmVkaXRhYmxlIGhlbHAgY2hhcm1hcCBxdWlja2JhcnMgZW1vdGljb25zJ1xyXG4gIH0sXHJcbiAgbWVudToge1xyXG4gICAgdGM6IHtcclxuICAgICAgdGl0bGU6ICdUaW55Q29tbWVudHMnLFxyXG4gICAgICBpdGVtczogJ2FkZGNvbW1lbnQgc2hvd2NvbW1lbnRzIGRlbGV0ZWFsbGNvbnZlcnNhdGlvbnMnXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZW51YmFyOiAnZmlsZSBlZGl0IHZpZXcgaW5zZXJ0IGZvcm1hdCB0b29scyB0YWJsZSB0YyBoZWxwJyxcclxuICB0b29sYmFyOiAndW5kbyByZWRvIHwgYm9sZCBpdGFsaWMgdW5kZXJsaW5lIHN0cmlrZXRocm91Z2ggfCBmb250c2VsZWN0IGZvbnRzaXplc2VsZWN0IGZvcm1hdHNlbGVjdCB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IG91dGRlbnQgaW5kZW50IHwgIG51bWxpc3QgYnVsbGlzdCB8IGZvcmVjb2xvciBiYWNrY29sb3IgcmVtb3ZlZm9ybWF0IHwgcGFnZWJyZWFrIHwgY2hhcm1hcCBlbW90aWNvbnMgfCBmdWxsc2NyZWVuICBwcmV2aWV3IHNhdmUgcHJpbnQgfCBpbnNlcnRmaWxlIGltYWdlIG1lZGlhIHRlbXBsYXRlIGxpbmsgYW5jaG9yIGNvZGVzYW1wbGUgfCBhMTF5Y2hlY2sgbHRyIHJ0bCB8IHNob3djb21tZW50cyBhZGRjb21tZW50JyxcclxuICBhdXRvc2F2ZV9hc2tfYmVmb3JlX3VubG9hZDogdHJ1ZSxcclxuICBhdXRvc2F2ZV9pbnRlcnZhbDogJzMwcycsXHJcbiAgYXV0b3NhdmVfcHJlZml4OiAne3BhdGh9e3F1ZXJ5fS17aWR9LScsXHJcbiAgYXV0b3NhdmVfcmVzdG9yZV93aGVuX2VtcHR5OiBmYWxzZSxcclxuICBhdXRvc2F2ZV9yZXRlbnRpb246ICcybScsXHJcbiAgaW1hZ2VfYWR2dGFiOiB0cnVlLFxyXG4gIGxpbmtfbGlzdDogW1xyXG4gICAgeyB0aXRsZTogJ015IHBhZ2UgMScsIHZhbHVlOiAnaHR0cHM6Ly93d3cudGlueS5jbG91ZCcgfSxcclxuICAgIHsgdGl0bGU6ICdNeSBwYWdlIDInLCB2YWx1ZTogJ2h0dHA6Ly93d3cubW94aWVjb2RlLmNvbScgfVxyXG4gIF0sXHJcbiAgaW1hZ2VfbGlzdDogW1xyXG4gICAgeyB0aXRsZTogJ015IHBhZ2UgMScsIHZhbHVlOiAnaHR0cHM6Ly93d3cudGlueS5jbG91ZCcgfSxcclxuICAgIHsgdGl0bGU6ICdNeSBwYWdlIDInLCB2YWx1ZTogJ2h0dHA6Ly93d3cubW94aWVjb2RlLmNvbScgfVxyXG4gIF0sXHJcbiAgaW1hZ2VfY2xhc3NfbGlzdDogW1xyXG4gICAgeyB0aXRsZTogJ05vbmUnLCB2YWx1ZTogJycgfSxcclxuICAgIHsgdGl0bGU6ICdTb21lIGNsYXNzJywgdmFsdWU6ICdjbGFzcy1uYW1lJyB9XHJcbiAgXSxcclxuICBpbXBvcnRjc3NfYXBwZW5kOiB0cnVlLFxyXG4gIHRlbXBsYXRlczogW1xyXG4gICAgICAgIHsgdGl0bGU6ICdOZXcgVGFibGUnLCBkZXNjcmlwdGlvbjogJ2NyZWF0ZXMgYSBuZXcgdGFibGUnLCBjb250ZW50OiAnPGRpdiBjbGFzcz1cIm1jZVRtcGxcIj48dGFibGUgd2lkdGg9XCI5OCUlXCIgIGJvcmRlcj1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIj48dHI+PHRoIHNjb3BlPVwiY29sXCI+IDwvdGg+PHRoIHNjb3BlPVwiY29sXCI+IDwvdGg+PC90cj48dHI+PHRkPiA8L3RkPjx0ZD4gPC90ZD48L3RyPjwvdGFibGU+PC9kaXY+JyB9LFxyXG4gICAgeyB0aXRsZTogJ1N0YXJ0aW5nIG15IHN0b3J5JywgZGVzY3JpcHRpb246ICdBIGN1cmUgZm9yIHdyaXRlcnMgYmxvY2snLCBjb250ZW50OiAnT25jZSB1cG9uIGEgdGltZS4uLicgfSxcclxuICAgIHsgdGl0bGU6ICdOZXcgbGlzdCB3aXRoIGRhdGVzJywgZGVzY3JpcHRpb246ICdOZXcgTGlzdCB3aXRoIGRhdGVzJywgY29udGVudDogJzxkaXYgY2xhc3M9XCJtY2VUbXBsXCI+PHNwYW4gY2xhc3M9XCJjZGF0ZVwiPmNkYXRlPC9zcGFuPjxiciAvPjxzcGFuIGNsYXNzPVwibWRhdGVcIj5tZGF0ZTwvc3Bhbj48aDI+TXkgTGlzdDwvaDI+PHVsPjxsaT48L2xpPjxsaT48L2xpPjwvdWw+PC9kaXY+JyB9XHJcbiAgXSxcclxuICB0ZW1wbGF0ZV9jZGF0ZV9mb3JtYXQ6ICdbRGF0ZSBDcmVhdGVkIChDREFURSk6ICVtLyVkLyVZIDogJUg6JU06JVNdJyxcclxuICB0ZW1wbGF0ZV9tZGF0ZV9mb3JtYXQ6ICdbRGF0ZSBNb2RpZmllZCAoTURBVEUpOiAlbS8lZC8lWSA6ICVIOiVNOiVTXScsXHJcbiAgaGVpZ2h0OiA2MDAsXHJcbiAgaW1hZ2VfY2FwdGlvbjogdHJ1ZSxcclxuICBxdWlja2JhcnNfc2VsZWN0aW9uX3Rvb2xiYXI6ICdib2xkIGl0YWxpYyB8IHF1aWNrbGluayBoMiBoMyBibG9ja3F1b3RlIHF1aWNraW1hZ2UgcXVpY2t0YWJsZScsXHJcbiAgbm9uZWRpdGFibGVfbm9uZWRpdGFibGVfY2xhc3M6ICdtY2VOb25FZGl0YWJsZScsXHJcbiAgdG9vbGJhcl9tb2RlOiAnc2xpZGluZycsXHJcbiAgc3BlbGxjaGVja2VyX2lnbm9yZV9saXN0OiBbJ0VwaG94JywgJ01veGllY29kZSddLFxyXG4vLyAgIHRpbnljb21tZW50c19tb2RlOiAnZW1iZWRkZWQnLFxyXG4gIGNvbnRlbnRfc3R5bGU6ICcubXltZW50aW9ueyBjb2xvcjogZ3JheTsgfScsXHJcbiAgY29udGV4dG1lbnU6ICdsaW5rIGltYWdlIGltYWdldG9vbHMgdGFibGUgY29uZmlndXInLFxyXG4vLyAgIGExMXlfYWR2YW5jZWRfb3B0aW9uczogdHJ1ZSxcclxuICBcclxuICAvKlxyXG4gIFRoZSBmb2xsb3dpbmcgc2V0dGluZ3MgcmVxdWlyZSBtb3JlIGNvbmZpZ3VyYXRpb24gdGhhbiBzaG93biBoZXJlLlxyXG4gIEZvciBpbmZvcm1hdGlvbiBvbiBjb25maWd1cmluZyB0aGUgbWVudGlvbnMgcGx1Z2luLCBzZWU6XHJcbiAgaHR0cHM6Ly93d3cudGlueS5jbG91ZC9kb2NzL3BsdWdpbnMvcHJlbWl1bS9tZW50aW9ucy8uXHJcbiAgKi9cclxuICBcclxuICB9KTsiLCIvLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCBic0N1c3RvbUZpbGVJbnB1dCBmcm9tICdicy1jdXN0b20tZmlsZS1pbnB1dCc7XG5cbiAvLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbiBpbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuIGltcG9ydCAnLi9jb250cm9sbGVycy9zY3JvbGwuanMnO1xuIGltcG9ydCAnLi9jb250cm9sbGVycy90aW55bWNlLmpzJztcbiBpbXBvcnQgJy4vY29udHJvbGxlcnMvY29sbGVjdGlvbi5qcyc7XG5cbiBcbiBnbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSAkO1xuXG5ic0N1c3RvbUZpbGVJbnB1dC5pbml0KCk7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==