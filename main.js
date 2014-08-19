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