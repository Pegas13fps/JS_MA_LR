"use strict";

function grow(x) {
    let result;
    if (x.length !== 0) {
        result = x.reduce((sum, curr) => sum *= curr);
        return result;
    }
}
console.log(grow([1, 2, 3])); // 6
console.log(grow([4, 1, 1, 1, 4])); // 16
console.log(grow([2, 2, 2, 2, 2, 2])) // 64