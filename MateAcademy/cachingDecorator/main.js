"use strict";

function f(x) {
  return Math.random() * x; // random для удобства тестирования
}

// В этой задаче функция f имеет только один аргумент, и он является числом.
function makeCaching(f) {
  let cachArg;
   return function(numb) {
    cachArg = numb;
     if (cachArg === numb) {
      return cachArg;
     }
   }
}

f = makeCaching(f);
let a, b;

a = f(1);
b = f(1);
console.log( a == b ); // true (значение закешировано)

b = f(2);
console.log( a == b ); // false, другой аргумент => другое значение

// надеюсь все правильно понял. Работает вроде как коректно.