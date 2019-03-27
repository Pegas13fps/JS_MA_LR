"use strict";

function squareDigits(num){
  let arrNumbs = [...num.toString()];
  
  let resArr = arrNumbs.map(function(item) {
    return item * item
  });
  let result  = resArr.join('');

  return result;
}

console.log(squareDigits(9119));