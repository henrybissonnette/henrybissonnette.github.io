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