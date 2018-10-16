module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WordCloud3d = __webpack_require__(1);

var _WordCloud3d2 = _interopRequireDefault(_WordCloud3d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _WordCloud3d2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _cuonUtils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cloud = __webpack_require__(6);

// https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-text-html.html
// learning webgl web https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-fundamentals.html#toc 

var WordCloud3d = function (_PureComponent) {
    _inherits(WordCloud3d, _PureComponent);

    function WordCloud3d(props) {
        _classCallCheck(this, WordCloud3d);

        var _this = _possibleConstructorReturn(this, (WordCloud3d.__proto__ || Object.getPrototypeOf(WordCloud3d)).call(this, props));

        _this.usrd3Cloud = function () {
            var words = ["Hello", "world", "normally", "you", "want", "more", "words", "than", "this"].map(function (d) {
                return { text: d, size: 10 + Math.random() * 90 };
            });

            cloud().size([960, 500]).canvas(_this.el).words(words).padding(0).rotate(function () {
                return ~~(Math.random() * 2) * 90;
            })
            // .rotate(90)
            .font("Impact").fontSize(function (d) {
                return d.size;
            })
            // .spiral(function(size){return function(t){return [(Math.random() * 2)*10,(Math.random() * 2)*10]}})
            .on("end", _this.end).start();
        };

        _this.state = {
            timer: null
        };
        return _this;
    }

    _createClass(WordCloud3d, [{
        key: "end",
        value: function end(words, tags, bounds) {
            console.log(words, tags, bounds);
        }
    }, {
        key: "validateWebgl",
        value: function validateWebgl(gl) {
            if (!gl) {
                console.log("failed to use webgl");
                return false;
            }
            return true;
        }
        // 创建顶点着色源

    }, {
        key: "createVsource",
        value: function createVsource() {
            var source = ["attribute vec4 a_position;", "void main() {", "    gl_Position = a_position;", "}"].join("\n");
            return source;
        }
        // 创建片元着色源

    }, {
        key: "createPsource",
        value: function createPsource() {
            var source = ["precision mediump float;", "void main() {", "    gl_FragColor = vec4(1, 0, 0.5, 1);", "}"].join("\n");
            return source;
        }
        // 创建着色器

    }, {
        key: "createShader",
        value: function createShader(gl, type, source) {
            var shader = gl.createShader(type); // 创建着色器对象
            gl.shaderSource(shader, source); // 提供数据源
            gl.compileShader(shader); // 编译 -> 生成着色器
            var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
            if (success) {
                return shader;
            }
            console.log(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
        }
        // 创建一个program

    }, {
        key: "createProgram",
        value: function createProgram(gl, vertexShader, fragmentShader) {
            var program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            var success = gl.getProgramParameter(program, gl.LINK_STATUS);
            if (success) {
                return program;
            }

            console.log(gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
        }
        //WebGL的主要任务就是设置好状态并为GLSL着色程序提供数据

    }, {
        key: "bindPosition",
        value: function bindPosition(gl, program, positions) {
            var positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

            // 重新调整画布
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            // 调整好以后背景渲染
            this.clearColor(gl);
            // 并启动program
            gl.useProgram(program);

            return positionBuffer;
        }
    }, {
        key: "drawRect",
        value: function drawRect(gl) {}
    }, {
        key: "clearColor",
        value: function clearColor(gl) {
            gl.clearColor(0.3, 0.4, 0.5, 0.8); // 清空颜色
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.clearDepth(5); //清空景深
            gl.clear(gl.DEPTH_BUFFER_BIT);
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var gl = (0, _cuonUtils.getWebGLContext)(this.el);
            // validate whether client web has the context of webgl 
            if (!this.validateWebgl(gl)) {
                return undefined;
            }
            // this.usrd3Cloud()

            var vsource = this.createVsource();
            var psource = this.createPsource();
            var vshader = this.createShader(gl, gl.VERTEX_SHADER, vsource);
            var pshader = this.createShader(gl, gl.FRAGMENT_SHADER, psource);

            var program = this.createProgram(gl, vshader, pshader);

            var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
            var positions = [0, 0, 0, 0.5, 0.7, 0];
            var positionBuffer = this.bindPosition(gl, program, positions);

            gl.enableVertexAttribArray(positionAttributeLocation);

            // 将绑定点绑定到缓冲数据（positionBuffer）
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            // 告诉属性怎么从positionBuffer中读取数据 (ARRAY_BUFFER)
            var size = 2; // 每次迭代运行提取两个单位数据
            var type = gl.FLOAT; // 每个单位的数据类型是32位浮点型
            var normalize = false; // 不需要归一化数据
            var stride = 0; // 0 = 移动单位数量 * 每个单位占用内存（sizeof(type)）
            // 每次迭代运行运动多少内存到下一个数据开始点
            var offset = 0; // 从缓冲起始位置开始读取
            gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

            var primitiveType = gl.TRIANGLES;
            var offset = 0;
            var count = 3;
            gl.drawArrays(primitiveType, offset, count);

            // this.clearColor(gl)


            // this.state.timer = setTimeout()
            // requestAnimationFrame()
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var canvasstyle = {
                width: "100%",
                height: "100%"
            };
            var style = this.props.style;

            var cw = void 0,
                ch = void 0;
            style && (cw = style.width) && (ch = style.height);
            return _react2.default.createElement("canvas", { ref: function ref(el) {
                    return _this2.el = el;
                }, style: _extends({}, canvasstyle, style) });
        }
    }]);

    return WordCloud3d;
}(_react.PureComponent);

exports.default = WordCloud3d;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import {WebGLUtils} from './webgl-utils';
// import {WebGLDebugUtils} from './webgl-debug'
var _require = __webpack_require__(4),
    WebGLUtils = _require.WebGLUtils;

var _require2 = __webpack_require__(5),
    WebGLDebugUtils = _require2.WebGLDebugUtils;
// cuon-utils.js (c) 2012 kanda and matsuda
/**
 * Create a program object and make current
 * @param gl GL context
 * @param vshader a vertex shader program (string)
 * @param fshader a fragment shader program (string)
 * @return true, if the program object was created and successfully made current 
 */


function initShaders(gl, vshader, fshader) {
  var program = createProgram(gl, vshader, fshader);
  if (!program) {
    console.log('Failed to create program');
    return false;
  }

  gl.useProgram(program);
  gl.program = program;

  return true;
}

/**
 * Create the linked program object
 * @param gl GL context
 * @param vshader a vertex shader program (string)
 * @param fshader a fragment shader program (string)
 * @return created program object, or null if the creation has failed
 */
function createProgram(gl, vshader, fshader) {
  // Create shader object
  var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshader);
  var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fshader);
  if (!vertexShader || !fragmentShader) {
    return null;
  }

  // Create a program object
  var program = gl.createProgram();
  if (!program) {
    return null;
  }

  // Attach the shader objects
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  // Link the program object
  gl.linkProgram(program);

  // Check the result of linking
  var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!linked) {
    var error = gl.getProgramInfoLog(program);
    console.log('Failed to link program: ' + error);
    gl.deleteProgram(program);
    gl.deleteShader(fragmentShader);
    gl.deleteShader(vertexShader);
    return null;
  }
  return program;
}

/**
 * Create a shader object
 * @param gl GL context
 * @param type the type of the shader object to be created
 * @param source shader program (string)
 * @return created shader object, or null if the creation has failed.
 */
function loadShader(gl, type, source) {
  // Create shader object
  var shader = gl.createShader(type);
  if (shader == null) {
    console.log('unable to create shader');
    return null;
  }

  // Set the shader program
  gl.shaderSource(shader, source);

  // Compile the shader
  gl.compileShader(shader);

  // Check the result of compilation
  var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!compiled) {
    var error = gl.getShaderInfoLog(shader);
    console.log('Failed to compile shader: ' + error);
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

/** 
 * Initialize and get the rendering for WebGL
 * @param canvas <cavnas> element
 * @param opt_debug flag to initialize the context for debugging
 * @return the rendering context for WebGL
 */
function getWebGLContext(canvas, opt_debug) {
  // Get the rendering context for WebGL
  var gl = WebGLUtils.setupWebGL(canvas);
  if (!gl) return null;

  // if opt_debug is explicitly false, create the context for debugging
  if (arguments.length < 2 || opt_debug) {
    gl = WebGLDebugUtils.makeDebugContext(gl);
  }

  return gl;
}
// console.log("module.exports",module.exports);
// module.exports["getWebGLContext"] = getWebGLContext;
// exports function
// export default getWebGLContext
module.exports = {
  getWebGLContext: getWebGLContext,
  initShaders: initShaders
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Copyright 2010, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @fileoverview This file contains functions every webgl program will need
 * a version of one way or another.
 *
 * Instead of setting up a context manually it is recommended to
 * use. This will check for success or failure. On failure it
 * will attempt to present an approriate message to the user.
 *
 *       gl = WebGLUtils.setupWebGL(canvas);
 *
 * For animated WebGL apps use of setTimeout or setInterval are
 * discouraged. It is recommended you structure your rendering
 * loop like this.
 *
 *       function render() {
 *         window.requestAnimationFrame(render, canvas);
 *
 *         // do rendering
 *         ...
 *       }
 *       render();
 *
 * This will call your rendering function up to the refresh rate
 * of your display but will stop rendering if your app is not
 * visible.
 */
module.exports.WebGLUtils = function () {

  /**
   * Creates the HTLM for a failure message
   * @param {string} canvasContainerId id of container of th
   *        canvas.
   * @return {string} The html.
   */
  var makeFailHTML = function makeFailHTML(msg) {
    return '' + '<div style="margin: auto; width:500px;z-index:10000;margin-top:20em;text-align:center;">' + msg + '</div>';
    return '' + '<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>' + '<td align="center">' + '<div style="display: table-cell; vertical-align: middle;">' + '<div style="">' + msg + '</div>' + '</div>' + '</td></tr></table>';
  };

  /**
   * Mesasge for getting a webgl browser
   * @type {string}
   */
  var GET_A_WEBGL_BROWSER = '' + 'This page requires a browser that supports WebGL.<br/>' + '<a href="http://get.webgl.org">Click here to upgrade your browser.</a>';

  /**
   * Mesasge for need better hardware
   * @type {string}
   */
  var OTHER_PROBLEM = '' + "It doesn't appear your computer can support WebGL.<br/>" + '<a href="http://get.webgl.org">Click here for more information.</a>';

  /**
   * Creates a webgl context. If creation fails it will
   * change the contents of the container of the <canvas>
   * tag to an error message with the correct links for WebGL.
   * @param {Element} canvas. The canvas element to create a
   *     context from.
   * @param {WebGLContextCreationAttirbutes} opt_attribs Any
   *     creation attributes you want to pass in.
   * @param {function:(msg)} opt_onError An function to call
   *     if there is an error during creation.
   * @return {WebGLRenderingContext} The created context.
   */
  var setupWebGL = function setupWebGL(canvas, opt_attribs, opt_onError) {
    function handleCreationError(msg) {
      var container = document.getElementsByTagName("body")[0];
      //var container = canvas.parentNode;
      if (container) {
        var str = window.WebGLRenderingContext ? OTHER_PROBLEM : GET_A_WEBGL_BROWSER;
        if (msg) {
          str += "<br/><br/>Status: " + msg;
        }
        container.innerHTML = makeFailHTML(str);
      }
    };

    opt_onError = opt_onError || handleCreationError;

    if (canvas.addEventListener) {
      canvas.addEventListener("webglcontextcreationerror", function (event) {
        opt_onError(event.statusMessage);
      }, false);
    }
    var context = create3DContext(canvas, opt_attribs);
    if (!context) {
      if (!window.WebGLRenderingContext) {
        opt_onError("");
      } else {
        opt_onError("");
      }
    }

    return context;
  };

  /**
   * Creates a webgl context.
   * @param {!Canvas} canvas The canvas tag to get context
   *     from. If one is not passed in one will be created.
   * @return {!WebGLContext} The created context.
   */
  var create3DContext = function create3DContext(canvas, opt_attribs) {
    var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
    var context = null;
    for (var ii = 0; ii < names.length; ++ii) {
      try {
        context = canvas.getContext(names[ii], opt_attribs);
      } catch (e) {}
      if (context) {
        break;
      }
    }
    return context;
  };

  return {
    create3DContext: create3DContext,
    setupWebGL: setupWebGL
  };
}();

/**
 * Provides requestAnimationFrame in a cross browser
 * way.
 */
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function ( /* function FrameRequestCallback */callback, /* DOMElement Element */element) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();
}

/** * ERRATA: 'cancelRequestAnimationFrame' renamed to 'cancelAnimationFrame' to reflect an update to the W3C Animation-Timing Spec. 
 * 
 * Cancels an animation frame request. 
 * Checks for cross-browser support, falls back to clearTimeout. 
 * @param {number}  Animation frame request. */
if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame || window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame || window.clearTimeout;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//Copyright (c) 2009 The Chromium Authors. All rights reserved.
//Use of this source code is governed by a BSD-style license that can be
//found in the LICENSE file.

// Various functions for helping debug WebGL apps.

module.exports.WebGLDebugUtils = function () {

  /**
   * Wrapped logging function.
   * @param {string} msg Message to log.
   */
  var log = function log(msg) {
    if (window.console && window.console.log) {
      window.console.log(msg);
    }
  };

  /**
   * Which arguements are enums.
   * @type {!Object.<number, string>}
   */
  var glValidEnumContexts = {

    // Generic setters and getters

    'enable': { 0: true },
    'disable': { 0: true },
    'getParameter': { 0: true },

    // Rendering

    'drawArrays': { 0: true },
    'drawElements': { 0: true, 2: true },

    // Shaders

    'createShader': { 0: true },
    'getShaderParameter': { 1: true },
    'getProgramParameter': { 1: true },

    // Vertex attributes

    'getVertexAttrib': { 1: true },
    'vertexAttribPointer': { 2: true },

    // Textures

    'bindTexture': { 0: true },
    'activeTexture': { 0: true },
    'getTexParameter': { 0: true, 1: true },
    'texParameterf': { 0: true, 1: true },
    'texParameteri': { 0: true, 1: true, 2: true },
    'texImage2D': { 0: true, 2: true, 6: true, 7: true },
    'texSubImage2D': { 0: true, 6: true, 7: true },
    'copyTexImage2D': { 0: true, 2: true },
    'copyTexSubImage2D': { 0: true },
    'generateMipmap': { 0: true },

    // Buffer objects

    'bindBuffer': { 0: true },
    'bufferData': { 0: true, 2: true },
    'bufferSubData': { 0: true },
    'getBufferParameter': { 0: true, 1: true },

    // Renderbuffers and framebuffers

    'pixelStorei': { 0: true, 1: true },
    'readPixels': { 4: true, 5: true },
    'bindRenderbuffer': { 0: true },
    'bindFramebuffer': { 0: true },
    'checkFramebufferStatus': { 0: true },
    'framebufferRenderbuffer': { 0: true, 1: true, 2: true },
    'framebufferTexture2D': { 0: true, 1: true, 2: true },
    'getFramebufferAttachmentParameter': { 0: true, 1: true, 2: true },
    'getRenderbufferParameter': { 0: true, 1: true },
    'renderbufferStorage': { 0: true, 1: true },

    // Frame buffer operations (clear, blend, depth test, stencil)

    'clear': { 0: true },
    'depthFunc': { 0: true },
    'blendFunc': { 0: true, 1: true },
    'blendFuncSeparate': { 0: true, 1: true, 2: true, 3: true },
    'blendEquation': { 0: true },
    'blendEquationSeparate': { 0: true, 1: true },
    'stencilFunc': { 0: true },
    'stencilFuncSeparate': { 0: true, 1: true },
    'stencilMaskSeparate': { 0: true },
    'stencilOp': { 0: true, 1: true, 2: true },
    'stencilOpSeparate': { 0: true, 1: true, 2: true, 3: true },

    // Culling

    'cullFace': { 0: true },
    'frontFace': { 0: true }
  };

  /**
   * Map of numbers to names.
   * @type {Object}
   */
  var glEnums = null;

  /**
   * Initializes this module. Safe to call more than once.
   * @param {!WebGLRenderingContext} ctx A WebGL context. If
   *    you have more than one context it doesn't matter which one
   *    you pass in, it is only used to pull out constants.
   */
  function init(ctx) {
    if (glEnums == null) {
      glEnums = {};
      for (var propertyName in ctx) {
        if (typeof ctx[propertyName] == 'number') {
          glEnums[ctx[propertyName]] = propertyName;
        }
      }
    }
  }

  /**
   * Checks the utils have been initialized.
   */
  function checkInit() {
    if (glEnums == null) {
      throw 'WebGLDebugUtils.init(ctx) not called';
    }
  }

  /**
   * Returns true or false if value matches any WebGL enum
   * @param {*} value Value to check if it might be an enum.
   * @return {boolean} True if value matches one of the WebGL defined enums
   */
  function mightBeEnum(value) {
    checkInit();
    return glEnums[value] !== undefined;
  }

  /**
   * Gets an string version of an WebGL enum.
   *
   * Example:
   *   var str = WebGLDebugUtil.glEnumToString(ctx.getError());
   *
   * @param {number} value Value to return an enum for
   * @return {string} The string version of the enum.
   */
  function glEnumToString(value) {
    checkInit();
    var name = glEnums[value];
    return name !== undefined ? name : "*UNKNOWN WebGL ENUM (0x" + value.toString(16) + ")";
  }

  /**
   * Returns the string version of a WebGL argument.
   * Attempts to convert enum arguments to strings.
   * @param {string} functionName the name of the WebGL function.
   * @param {number} argumentIndx the index of the argument.
   * @param {*} value The value of the argument.
   * @return {string} The value as a string.
   */
  function glFunctionArgToString(functionName, argumentIndex, value) {
    var funcInfo = glValidEnumContexts[functionName];
    if (funcInfo !== undefined) {
      if (funcInfo[argumentIndex]) {
        return glEnumToString(value);
      }
    }
    return value.toString();
  }

  /**
   * Given a WebGL context returns a wrapped context that calls
   * gl.getError after every command and calls a function if the
   * result is not gl.NO_ERROR.
   *
   * @param {!WebGLRenderingContext} ctx The webgl context to
   *        wrap.
   * @param {!function(err, funcName, args): void} opt_onErrorFunc
   *        The function to call when gl.getError returns an
   *        error. If not specified the default function calls
   *        console.log with a message.
   */
  function makeDebugContext(ctx, opt_onErrorFunc) {
    init(ctx);
    opt_onErrorFunc = opt_onErrorFunc || function (err, functionName, args) {
      // apparently we can't do args.join(",");
      var argStr = "";
      for (var ii = 0; ii < args.length; ++ii) {
        argStr += (ii == 0 ? '' : ', ') + glFunctionArgToString(functionName, ii, args[ii]);
      }
      log("WebGL error " + glEnumToString(err) + " in " + functionName + "(" + argStr + ")");
    };

    // Holds booleans for each GL error so after we get the error ourselves
    // we can still return it to the client app.
    var glErrorShadow = {};

    // Makes a function that calls a WebGL function and then calls getError.
    function makeErrorWrapper(ctx, functionName) {
      return function () {
        var result = ctx[functionName].apply(ctx, arguments);
        var err = ctx.getError();
        if (err != 0) {
          glErrorShadow[err] = true;
          opt_onErrorFunc(err, functionName, arguments);
        }
        return result;
      };
    }

    // Make a an object that has a copy of every property of the WebGL context
    // but wraps all functions.
    var wrapper = {};
    for (var propertyName in ctx) {
      if (typeof ctx[propertyName] == 'function') {
        wrapper[propertyName] = makeErrorWrapper(ctx, propertyName);
      } else {
        wrapper[propertyName] = ctx[propertyName];
      }
    }

    // Override the getError function with one that returns our saved results.
    wrapper.getError = function () {
      for (var err in glErrorShadow) {
        if (glErrorShadow[err]) {
          glErrorShadow[err] = false;
          return err;
        }
      }
      return ctx.NO_ERROR;
    };

    return wrapper;
  }

  function resetToInitialState(ctx) {
    var numAttribs = ctx.getParameter(ctx.MAX_VERTEX_ATTRIBS);
    var tmp = ctx.createBuffer();
    ctx.bindBuffer(ctx.ARRAY_BUFFER, tmp);
    for (var ii = 0; ii < numAttribs; ++ii) {
      ctx.disableVertexAttribArray(ii);
      ctx.vertexAttribPointer(ii, 4, ctx.FLOAT, false, 0, 0);
      ctx.vertexAttrib1f(ii, 0);
    }
    ctx.deleteBuffer(tmp);

    var numTextureUnits = ctx.getParameter(ctx.MAX_TEXTURE_IMAGE_UNITS);
    for (var ii = 0; ii < numTextureUnits; ++ii) {
      ctx.activeTexture(ctx.TEXTURE0 + ii);
      ctx.bindTexture(ctx.TEXTURE_CUBE_MAP, null);
      ctx.bindTexture(ctx.TEXTURE_2D, null);
    }

    ctx.activeTexture(ctx.TEXTURE0);
    ctx.useProgram(null);
    ctx.bindBuffer(ctx.ARRAY_BUFFER, null);
    ctx.bindBuffer(ctx.ELEMENT_ARRAY_BUFFER, null);
    ctx.bindFramebuffer(ctx.FRAMEBUFFER, null);
    ctx.bindRenderbuffer(ctx.RENDERBUFFER, null);
    ctx.disable(ctx.BLEND);
    ctx.disable(ctx.CULL_FACE);
    ctx.disable(ctx.DEPTH_TEST);
    ctx.disable(ctx.DITHER);
    ctx.disable(ctx.SCISSOR_TEST);
    ctx.blendColor(0, 0, 0, 0);
    ctx.blendEquation(ctx.FUNC_ADD);
    ctx.blendFunc(ctx.ONE, ctx.ZERO);
    ctx.clearColor(0, 0, 0, 0);
    ctx.clearDepth(1);
    ctx.clearStencil(-1);
    ctx.colorMask(true, true, true, true);
    ctx.cullFace(ctx.BACK);
    ctx.depthFunc(ctx.LESS);
    ctx.depthMask(true);
    ctx.depthRange(0, 1);
    ctx.frontFace(ctx.CCW);
    ctx.hint(ctx.GENERATE_MIPMAP_HINT, ctx.DONT_CARE);
    ctx.lineWidth(1);
    ctx.pixelStorei(ctx.PACK_ALIGNMENT, 4);
    ctx.pixelStorei(ctx.UNPACK_ALIGNMENT, 4);
    ctx.pixelStorei(ctx.UNPACK_FLIP_Y_WEBGL, false);
    ctx.pixelStorei(ctx.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    // TODO: Delete this IF.
    if (ctx.UNPACK_COLORSPACE_CONVERSION_WEBGL) {
      ctx.pixelStorei(ctx.UNPACK_COLORSPACE_CONVERSION_WEBGL, ctx.BROWSER_DEFAULT_WEBGL);
    }
    ctx.polygonOffset(0, 0);
    ctx.sampleCoverage(1, false);
    ctx.scissor(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.stencilFunc(ctx.ALWAYS, 0, 0xFFFFFFFF);
    ctx.stencilMask(0xFFFFFFFF);
    ctx.stencilOp(ctx.KEEP, ctx.KEEP, ctx.KEEP);
    ctx.viewport(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT | ctx.STENCIL_BUFFER_BIT);

    // TODO: This should NOT be needed but Firefox fails with 'hint'
    while (ctx.getError()) {}
  }

  function makeLostContextSimulatingContext(ctx) {
    var wrapper_ = {};
    var contextId_ = 1;
    var contextLost_ = false;
    var resourceId_ = 0;
    var resourceDb_ = [];
    var onLost_ = undefined;
    var onRestored_ = undefined;
    var nextOnRestored_ = undefined;

    // Holds booleans for each GL error so can simulate errors.
    var glErrorShadow_ = {};

    function isWebGLObject(obj) {
      //return false;
      return obj instanceof WebGLBuffer || obj instanceof WebGLFramebuffer || obj instanceof WebGLProgram || obj instanceof WebGLRenderbuffer || obj instanceof WebGLShader || obj instanceof WebGLTexture;
    }

    function checkResources(args) {
      for (var ii = 0; ii < args.length; ++ii) {
        var arg = args[ii];
        if (isWebGLObject(arg)) {
          return arg.__webglDebugContextLostId__ == contextId_;
        }
      }
      return true;
    }

    function clearErrors() {
      var k = Object.keys(glErrorShadow_);
      for (var ii = 0; ii < k.length; ++ii) {
        delete glErrorShadow_[k];
      }
    }

    // Makes a function that simulates WebGL when out of context.
    function makeLostContextWrapper(ctx, functionName) {
      var f = ctx[functionName];
      return function () {
        // Only call the functions if the context is not lost.
        if (!contextLost_) {
          if (!checkResources(arguments)) {
            glErrorShadow_[ctx.INVALID_OPERATION] = true;
            return;
          }
          var result = f.apply(ctx, arguments);
          return result;
        }
      };
    }

    for (var propertyName in ctx) {
      if (typeof ctx[propertyName] == 'function') {
        wrapper_[propertyName] = makeLostContextWrapper(ctx, propertyName);
      } else {
        wrapper_[propertyName] = ctx[propertyName];
      }
    }

    function makeWebGLContextEvent(statusMessage) {
      return { statusMessage: statusMessage };
    }

    function freeResources() {
      for (var ii = 0; ii < resourceDb_.length; ++ii) {
        var resource = resourceDb_[ii];
        if (resource instanceof WebGLBuffer) {
          ctx.deleteBuffer(resource);
        } else if (resource instanceof WebGLFramebuffer) {
          //WebctxFramebuffer
          ctx.deleteFramebuffer(resource);
        } else if (resource instanceof WebGLProgram) {
          //WebctxProgram
          ctx.deleteProgram(resource);
        } else if (resource instanceof WebGLRenderbuffer) {
          //WebctxRenderbuffer
          ctx.deleteRenderbuffer(resource);
        } else if (resource instanceof WebGLShader) {
          //WebctxShader
          ctx.deleteShader(resource);
        } else if (resource instanceof WebGLTexture) {
          //WebctxTexture
          ctx.deleteTexture(resource);
        }
      }
    }

    wrapper_.loseContext = function () {
      if (!contextLost_) {
        contextLost_ = true;
        ++contextId_;
        while (ctx.getError()) {}
        clearErrors();
        glErrorShadow_[ctx.CONTEXT_LOST_WEBGL] = true;
        setTimeout(function () {
          if (onLost_) {
            onLost_(makeWebGLContextEvent("context lost"));
          }
        }, 0);
      }
    };

    wrapper_.restoreContext = function () {
      if (contextLost_) {
        if (onRestored_) {
          setTimeout(function () {
            freeResources();
            resetToInitialState(ctx);
            contextLost_ = false;
            if (onRestored_) {
              var callback = onRestored_;
              onRestored_ = nextOnRestored_;
              nextOnRestored_ = undefined;
              callback(makeWebGLContextEvent("context restored"));
            }
          }, 0);
        } else {
          throw "You can not restore the context without a listener";
        }
      }
    };

    // Wrap a few functions specially.
    wrapper_.getError = function () {
      if (!contextLost_) {
        var err;
        while (err = ctx.getError()) {
          glErrorShadow_[err] = true;
        }
      }
      for (var err in glErrorShadow_) {
        if (glErrorShadow_[err]) {
          delete glErrorShadow_[err];
          return err;
        }
      }
      return ctx.NO_ERROR;
    };

    var creationFunctions = ["createBuffer", "createFramebuffer", "createProgram", "createRenderbuffer", "createShader", "createTexture"];
    for (var ii = 0; ii < creationFunctions.length; ++ii) {
      var functionName = creationFunctions[ii];
      wrapper_[functionName] = function (f) {
        return function () {
          if (contextLost_) {
            return null;
          }
          var obj = f.apply(ctx, arguments);
          obj.__webglDebugContextLostId__ = contextId_;
          resourceDb_.push(obj);
          return obj;
        };
      }(ctx[functionName]);
    }

    var functionsThatShouldReturnNull = ["getActiveAttrib", "getActiveUniform", "getBufferParameter", "getContextAttributes", "getAttachedShaders", "getFramebufferAttachmentParameter", "getParameter", "getProgramParameter", "getProgramInfoLog", "getRenderbufferParameter", "getShaderParameter", "getShaderInfoLog", "getShaderSource", "getTexParameter", "getUniform", "getUniformLocation", "getVertexAttrib"];
    for (var ii = 0; ii < functionsThatShouldReturnNull.length; ++ii) {
      var functionName = functionsThatShouldReturnNull[ii];
      wrapper_[functionName] = function (f) {
        return function () {
          if (contextLost_) {
            return null;
          }
          return f.apply(ctx, arguments);
        };
      }(wrapper_[functionName]);
    }

    var isFunctions = ["isBuffer", "isEnabled", "isFramebuffer", "isProgram", "isRenderbuffer", "isShader", "isTexture"];
    for (var ii = 0; ii < isFunctions.length; ++ii) {
      var functionName = isFunctions[ii];
      wrapper_[functionName] = function (f) {
        return function () {
          if (contextLost_) {
            return false;
          }
          return f.apply(ctx, arguments);
        };
      }(wrapper_[functionName]);
    }

    wrapper_.checkFramebufferStatus = function (f) {
      return function () {
        if (contextLost_) {
          return ctx.FRAMEBUFFER_UNSUPPORTED;
        }
        return f.apply(ctx, arguments);
      };
    }(wrapper_.checkFramebufferStatus);

    wrapper_.getAttribLocation = function (f) {
      return function () {
        if (contextLost_) {
          return -1;
        }
        return f.apply(ctx, arguments);
      };
    }(wrapper_.getAttribLocation);

    wrapper_.getVertexAttribOffset = function (f) {
      return function () {
        if (contextLost_) {
          return 0;
        }
        return f.apply(ctx, arguments);
      };
    }(wrapper_.getVertexAttribOffset);

    wrapper_.isContextLost = function () {
      return contextLost_;
    };

    function wrapEvent(listener) {
      if (typeof listener == "function") {
        return listener;
      } else {
        return function (info) {
          listener.handleEvent(info);
        };
      }
    }

    wrapper_.registerOnContextLostListener = function (listener) {
      onLost_ = wrapEvent(listener);
    };

    wrapper_.registerOnContextRestoredListener = function (listener) {
      if (contextLost_) {
        nextOnRestored_ = wrapEvent(listener);
      } else {
        onRestored_ = wrapEvent(listener);
      }
    };

    return wrapper_;
  }

  return {
    /**
     * Initializes this module. Safe to call more than once.
     * @param {!WebGLRenderingContext} ctx A WebGL context. If
     *    you have more than one context it doesn't matter which one
     *    you pass in, it is only used to pull out constants.
     */
    'init': init,

    /**
     * Returns true or false if value matches any WebGL enum
     * @param {*} value Value to check if it might be an enum.
     * @return {boolean} True if value matches one of the WebGL defined enums
     */
    'mightBeEnum': mightBeEnum,

    /**
     * Gets an string version of an WebGL enum.
     *
     * Example:
     *   WebGLDebugUtil.init(ctx);
     *   var str = WebGLDebugUtil.glEnumToString(ctx.getError());
     *
     * @param {number} value Value to return an enum for
     * @return {string} The string version of the enum.
     */
    'glEnumToString': glEnumToString,

    /**
     * Converts the argument of a WebGL function to a string.
     * Attempts to convert enum arguments to strings.
     *
     * Example:
     *   WebGLDebugUtil.init(ctx);
     *   var str = WebGLDebugUtil.glFunctionArgToString('bindTexture', 0, gl.TEXTURE_2D);
     *
     * would return 'TEXTURE_2D'
     *
     * @param {string} functionName the name of the WebGL function.
     * @param {number} argumentIndx the index of the argument.
     * @param {*} value The value of the argument.
     * @return {string} The value as a string.
     */
    'glFunctionArgToString': glFunctionArgToString,

    /**
     * Given a WebGL context returns a wrapped context that calls
     * gl.getError after every command and calls a function if the
     * result is not NO_ERROR.
     *
     * You can supply your own function if you want. For example, if you'd like
     * an exception thrown on any GL error you could do this
     *
     *    function throwOnGLError(err, funcName, args) {
     *      throw WebGLDebugUtils.glEnumToString(err) + " was caused by call to" +
     *            funcName;
     *    };
     *
     *    ctx = WebGLDebugUtils.makeDebugContext(
     *        canvas.getContext("webgl"), throwOnGLError);
     *
     * @param {!WebGLRenderingContext} ctx The webgl context to wrap.
     * @param {!function(err, funcName, args): void} opt_onErrorFunc The function
     *     to call when gl.getError returns an error. If not specified the default
     *     function calls console.log with a message.
     */
    'makeDebugContext': makeDebugContext,

    /**
     * Given a WebGL context returns a wrapped context that adds 4
     * functions.
     *
     * ctx.loseContext:
     *   simulates a lost context event.
     *
     * ctx.restoreContext:
     *   simulates the context being restored.
     *
     * ctx.registerOnContextLostListener(listener):
     *   lets you register a listener for context lost. Use instead
     *   of addEventListener('webglcontextlostevent', listener);
     *
     * ctx.registerOnContextRestoredListener(listener):
     *   lets you register a listener for context restored. Use
     *   instead of addEventListener('webglcontextrestored',
     *   listener);
     *
     * @param {!WebGLRenderingContext} ctx The webgl context to wrap.
     */
    'makeLostContextSimulatingContext': makeLostContextSimulatingContext,

    /**
     * Resets a context to the initial state.
     * @param {!WebGLRenderingContext} ctx The webgl context to
     *     reset.
     */
    'resetToInitialState': resetToInitialState
  };
}();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("d3-cloud");

/***/ })
/******/ ]);