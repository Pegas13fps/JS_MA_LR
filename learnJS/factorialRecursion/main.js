'use strict';

// function factorial(n) {
//   if (n != 1) {
//     return n * factorial(n - 1);
//   } else {
//     return n;
//   }
// }

// or 
function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

// ternar operator example
// function factorial(n) {
//   return (n != 1) ? n * factorial(n - 1) : 1;
// }


console.log(factorial(5)); // 120