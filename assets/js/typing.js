

module.exports = {
  goToEnd: function() {
    editor.gotoLine(editor.session.getLength() + 1)
  },

  printLines: function(stringArray) {
    this.printLines(stringArray)
  },

  printFormattedLines: function(stringArray) {
    editor.setBehavioursEnabled(false)
    this.printLines(this.formatComments(stringArray), function () {
      editor.setBehavioursEnabled(true)
    })
  },

  formatComments: function(stringArray) {
    var out = [];
    for (i in stringArray) {
      var line = stringArray[i];
      if (line) {
        out[i] = "// " + line + "\n";
      } else {
        out[i] = "\n";
      }
    }
    return out;
  },

  printLines: function(stringArray, end) {
    _this = this;
    if (stringArray[0]) {
      this.printLine(stringArray[0], function() {_this.printLines(stringArray.slice(1), end)})
    } else {
      end()
    }
  },

  printLine: function(string, continuation) {
    _this = this;
    if (string[0]) {
      this.printChar(string[0], function() {_this.printLine(string.slice(1), continuation)})
    } else {
      continuation()
    }
  },

  printChar: function (char, continuation) {
    setTimeout(function(){
      editor.insert(char);
      continuation()
    }, Math.random() * (100) + 30)
  }
}