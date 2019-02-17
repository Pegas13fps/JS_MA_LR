'use strict';

// forLoop 2 place
// function sumTo(n) {
//   let result = 0;

//   for (let i = 1; i <= n; i++) {
//     result += i;
//   }

//   return result;
// }

// recursion loop 3 place and have only 10.000 limitation
// function sumTo(n) {
//   if (n != 1) {
//     return n + sumTo(n - 1);
//   } else {
//     return n;
//   }
// }

// or 
// function sumTo(n) {
//   if (n == 1) return 1;
//   return n + sumTo(n - 1);
// }

// math formula example. 1 place speed work
function sumTo(n) {
  return n * (n + 1) / 2;
}


console.log(sumTo(100)); // 5050