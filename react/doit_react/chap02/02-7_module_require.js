// CommonJS 방식

var module = require('./MyModule');

function Func() {
  module();
}

module.exports = new Func();


// RequireJS 방식

//define(['./MyModule'], function(module) {
//  function Func() {
//    module();
//  }
//  return new Func();
//});
