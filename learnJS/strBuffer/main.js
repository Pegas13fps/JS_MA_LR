'use strict';

function makeBuffer() {
  let result = '';
  return function buffer(str) {
    if (arguments.length === 0) {
      return result;
    }
    result += str;
  };
};

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log(buffer()); // Замыкания Использовать Нужно!