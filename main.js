(function () {
  openingExercise = require("./assets/js/exercises/hello_phillip.js");
  window.ENV = window.location.origin === "file://" ? "dev" : "prod";

  bindRun = function () {
    $('#run').on('click', function () {
      eval(editor.getValue());
      if (testSuite) {
        testSuite()
      }
    })
  }

  initializeEditor = function () {
    window.editor = ace.edit('javascript-editor');
    editor.setTheme('ace/theme/monokai');
    editor.getSession().setMode('ace/mode/javascript');
  }

  initializeExercise = function (exercise) {
    editor.setValue("")
    setTimeout(function() {
      exercise.intro()
      }, 2000);

    testSuite = exercise.testSuite
  }

  init = function () {
    bindRun();
    initializeEditor();
    initializeExercise(openingExercise);
  }

  window.addEventListener("load", init);
})()