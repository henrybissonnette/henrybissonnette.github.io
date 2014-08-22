(function () {
  exercise = require("./assets/js/exercises/hello_phillip.js");
  window.ENV = window.location.origin === "file://" ? "dev" : "prod";

  bindRun = function () {
    $('#run').on('click', function () {
      eval(editor.getValue());
      if (testSuite) {
        testSuite()
      }
    })
  }

  init = function () {
    bindRun();
    editor = ace.edit('javascript-editor');
    editor.setTheme('ace/theme/monokai');
    editor.getSession().setMode('ace/mode/javascript');

    setTimeout(function() {
      exercise.intro()
      }, 2000);

    testSuite = exercise.testSuite
  }

  window.addEventListener("load", init);
})()