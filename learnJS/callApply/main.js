"use strict";

function sum(arr) {
    return arr.reduce(function(a, b) {
      return a + b;
    });
  }
  
  console.log( sum([1, 2, 3]) ); // 6 (=1+2+3)

  function sumArgs() {
    arguments.reduce = [].reduce; // скопируем reduce из массива
    return arguments.reduce(function(a, b) {
      return a + b;
    });
  }
  
  console.log( sumArgs(4, 5, 6) ); // 15


  function sumArgs() {
    return [].reduce.call(arguments, function(a, b) {  // запустим reduce из массива напрямую
      return a + b;
    });
  }
  
  console.log( sumArgs(4, 5, 6) ); // 15