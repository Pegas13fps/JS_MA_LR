'use strict';

// Вроде понял, спасибо огромное. Просто перескакывал позицию для сравнения...
// чем больше был бы массив тем больше оставалось бы... 
let arr = [1, 2, 3, 4, 5];

const consecutiveNumb = function(x, t) {
  let resultArr = [...x];

  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] + resultArr[i + 1] === t) {
      resultArr.splice(i + 1, 1);
      i--;
      }
    }

  return resultArr;
}

console.log(consecutiveNumb(arr, 3)); // 1 3 4 5
console.log(consecutiveNumb([2, 2, 2, 2, 2, 2, 2], 4)); // 2 как то так, при старом 2 2 2 2 было бы...
console.log(consecutiveNumb([2, 1, 1, 1, 2], 2)); // 2 1 2

// Given an array of integers (x), and a target (t),
// you must find out if any two consecutive numbers in the array sum to t.
// If so, remove the second number.

// Example:
// x = [1, 2, 3, 4, 5]
// t = 3 
// 1+2 = t, so remove 2. No other pairs = t, so rest of array remains:
// [1, 3, 4, 5]
// Work through the array from left to right.
// Return the resulting array.