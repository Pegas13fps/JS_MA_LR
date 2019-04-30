"use strict";

function sum(numbers) {
    let result = numbers.reduce((acum, el) => acum + el, 0);

    return result;
};

console.log(sum([])); // 0
console.log(sum([1, 5.2, 4, 0, -1])); // 9.2