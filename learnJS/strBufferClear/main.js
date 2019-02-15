'use strict';

function makeBuffer() {
  let result = '';

  function buffer(str) {
    if (arguments.length === 0) {
      return result;
    }
    result += str;
  };
  buffer.clear = function() {
    result = '';
  }
  return buffer;
};

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log(buffer()); // Замыкания Использовать Нужно!

buffer.clear();
console.log(buffer(), ' Наш буфер пуст');