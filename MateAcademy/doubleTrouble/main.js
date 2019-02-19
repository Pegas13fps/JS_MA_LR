'use strict';

let arr = [1, 2, 3, 4, 5];

const consecutiveNumb = function(x, t) {
  let resultArr = [...x];

  for (let i = 0; i < x.length; i++) {
      if (x[i] + x[i + 1] === t) {
        resultArr.splice(x[i], 1);
      }
  }

  return resultArr;
}

// и еще один вариант я не знаю какой более правильный не до конца понял условие. все со всеми парами или только сразу попашвиеся
// const consecutiveNumb = function(x, t) {
//   let resultArr = [...x];

//   for (let i = 0; i < x.length; i++) {
//     for (let j = 0; j < x.length; j++) {
//       if (x[j] + x[i] === t) {
//         resultArr.splice(x[j], 1);
//       }
//       break;
//     }
//   }

//   return resultArr;
// }

console.log(consecutiveNumb(arr, 3)); // 1 3 4 5