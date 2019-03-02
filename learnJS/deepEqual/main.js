'use strict';

/**
 * Сравнивает два значения
 * Для приметивных типов возвращает то же что и,
 * для Объектов проверяет равенство всех примитивных значений
 * во всех свойствах - включая вложенные объекты
 *
 * @param {any} a
 * @param {any} b
 *
 * @return {boolean}
 */
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (Object(a) === Object(b)) {
    return true;
  } 
  // if(Object(a).length !== Object(b).length) {
  //   return false;
  // }
  if (Object(a).Equals(b) ) {
    return true;
  }
  return false;
}


// Tests

let a = { name: 'Misha', order: { price: 20 } };
let b = { order: { price: 20 }, name: 'Misha' };
let c = { name: 'Misha', order: { price: 20 }, extraField: null };
let d = { order: { price: 20 }, name: 'Petya' };
let e = { name: 'Misha', order: { price: 1000 } };
let f = { name: 'Misha', order: { price: 20, extraField: null } };


test(deepEqual(5, 5), true, '5 and 5 should be equal');
test(deepEqual(null, null), true, 'null and null should be equal');
test(deepEqual(a, b), true, 'A and B should be equal');
test(deepEqual({ test: a }, { test: b }), true, 'A and B should be equal');

test(deepEqual(5, 6), false, '5 and 6 should NOT be equal');
test(deepEqual(0, false), false, '0 and false should NOT be equal');
test(deepEqual(null, 5), false, 'A and C should NOT be equal');
test(deepEqual(a, null), false, 'A and C should NOT be equal');

test(deepEqual(a, c), false, 'A and C should NOT be equal');
test(deepEqual(a, d), false, 'A and D should NOT be equal');
test(deepEqual(a, e), false, 'A and E should NOT be equal');
test(deepEqual(a, f), false, 'A and F should NOT be equal');


function test(actual, expected, testName = '') {
  if (actual !== expected) {
    const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
    console.error(errorMessage);
  } else {
    console.log(`Test ${testName} passed!`);
  }
}