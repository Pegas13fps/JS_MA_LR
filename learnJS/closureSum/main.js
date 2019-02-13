'use strict';

function sum(a) {
   
  let funcSum = function(b) {
    return a + b;
  }
  return funcSum;
};

console.log(sum(5)(-1));