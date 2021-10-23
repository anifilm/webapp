const _ = require('fxjs/Strict');
const L = require('fxjs/Lazy');
const C = require('fxjs/Concurrency');

const a = [1, 2, 3, 4, 5, 6, 7, 8];
const ret = _.go(
  a,
  _.map((a) => a),
  _.filter((a) => a % 2 !== 0),
  _.take(2)
);
console.log(ret); // [1, 3]

const ret_lazy = _.go(
  a,
  L.map((a) => a),
  L.filter((a) => a % 2 !== 0),
  L.take(2)
);
console.log([...ret_lazy]); // [1, 3]
