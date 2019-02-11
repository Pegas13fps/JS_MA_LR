'use strict';

function rle(source) {
  let strArr = [];
  let counterSymbol = 1;
  let nextSymbol = 1;

  for (let i = 0; i < source.length; i++) {
    if (source[i] === source[i + 1]) {
      counterSymbol++;
    } else if (source[i] !== source[nextSymbol] && counterSymbol > 1) {
      strArr.push(source[i] + counterSymbol);
      counterSymbol = 1;
    } else {
      strArr.push(source[i]);
    }

    nextSymbol++;
  }

  let resultStr = strArr.join('');

  return resultStr;
}

console.log(rle('AAAB')); // A3B
console.log(rle('aBB')); // aB2
console.log(rle('BCCDDDAXXXX')); // BC2D3AX4
