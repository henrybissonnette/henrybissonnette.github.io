typing = require("./assets/js/typing.js")

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
    typing.printFormattedLines([
      "Hello Phillip!",
      "I decided to make my own coding tutorials for you.",
      "So far I don't have very much.",
      "This is more just a proof of concept than a working prototype.",
      "",
      "Most importantly I made this cool code to print stuff out at",
      "the kind of pace someone would normally type at.",
      "So I can type in your browser like some kind of ghost.",
      "",
      "Sweet.",
      "Right?",
      "",
      "",
      "So...",
      "Let's try it out.",
      "Remember how functions work?",
      "Something like this:",
      "aFunction = function () {",
      "  console.log('this function is amazing');",
      "}",
      "",
      "Something that we didn't really talk about when I was there",
      "is 'return' values.", 
      "When you call a function, it gives back whatever it's return value is.",
      "This function for instance would return the sum of two numbers:",
      "addNumbers = function (a, b) {",
      "  return a + b;",
      "}",
      "",
      "Now, let's try this thing out!",
      "Write a function called myName that returns the string Phillip.",
      "When you're done, hit the run button in the upper right."
      ])
  }, 2000);

  testSuite = function () {
    try {
      var name = myName();
      if (name === "Phillip") {
        typing.goToEnd();
        typing.printFormattedLines([
          "",
          "Awesome.",
          "Your function works.",
          "",
          "Ummm...",
          "That's all I've got for now...",
          "Keep working on the Javascript tutorials, and I'll try to make something cooler."
          ])
      } else {
        typing.goToEnd();
        typing.printFormattedLines([
          "",
          "No " + name + ",",
          "I think that your name should be Phillip.",
          "I appreciate your creativity, but, for now, change it to Phillip and run it again."
          ])
      }
    }
    catch (err) {
      typing.goToEnd();
      typing.printFormattedLines([
        "",
        "Ummm. Your function throws an error.",
        "Look at the error in the console and see if you can figure out what went wrong.",
        "Remember you can open the console with control+shift+j",
        "Run things again when you're ready."
        ]);
      throw err;
    }
  }
}

window.addEventListener("load", init)