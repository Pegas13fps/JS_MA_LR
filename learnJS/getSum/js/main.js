"use strict";

function getSum(a, b) {
    let sum = 0;
    if (a === b) {
        return a;
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    } else if (b < a) {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    }
    return sum;
};

console.log(getSum(-1, 2)); // 2
console.log(getSum(1, 0)); // 1