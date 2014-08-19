(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// delay = function (min = .1, max = .3) {
//   setTimeout(Math.random() * (max - min) + min)
// }

module.exports = {
  print: function (text) {
    var elapsed = 0;
    for (i in text) {
      (function (i) {
        elapsed += Math.random() * (200 - 50) + 50
        setTimeout(function () {
            editor.insert(text[i]);
        }, elapsed)
      })(i)
    }
  }
}
},{}],2:[function(require,module,exports){
typing = require("./assets/js/typing.js")


init = function () {
  editor = ace.edit('javascript-editor');
  editor.setTheme('ace/theme/monokai');
  editor.getSession().setMode('ace/mode/javascript');

  setTimeout(function() {
    typing.print("// So...\n// Now I can type like some kind of ghost.\n// S W E E T\n\n");
    console.log("typing");
  }, 2000);
}

window.addEventListener("load", init)
},{"./assets/js/typing.js":1}]},{},[2]);
