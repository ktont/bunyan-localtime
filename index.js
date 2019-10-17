var bunyan = require('bunyan');

function localtime(D) {
  D = D || new Date();

  var y = D.getFullYear(),
      m = D.getMonth() + 1,
      d = D.getDate(),
      H = D.getHours(),
      M = D.getMinutes(),
      s = D.getSeconds(),
      S = D.getMilliseconds();

  var r = '' + y +
      '-' +
      (m < 10 ? '0' + m : m) +
      '-' +
      (d < 10 ? '0' + d : d) +
      ' ' +
      (H < 10 ? '0' + H : H) +
      ':' +
      (M < 10 ? '0' + M : M) +
      ':' +
      (s < 10 ? '0' + s : s) +
      '.' +
      (S < 10 ? '00' + S : S < 100 ? '0' + S : S);
  return r;
}

for(var k in bunyan.levelFromName) {
  var b = bunyan.prototype[k];
  bunyan.prototype[k] = (function(k, b) {
    return function() {
      var a = Array.prototype.slice.call(arguments, 0);
      a.unshift({time: localtime()});
      b.apply(this, a);
    }
  })(k, b);
}

module.exports = bunyan;
