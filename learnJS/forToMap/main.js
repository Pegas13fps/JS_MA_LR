'use strict';

let arr = ["Есть", "жизнь", "на", "Марсе"];

let arrLength = arr.map(function(item) {
  return item.length;
});

console.log(arrLength);