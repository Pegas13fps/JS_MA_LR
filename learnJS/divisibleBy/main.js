'use strict';

// Find numbers which are divisible by given number

function divisibleBy(numbers, divisor) {
    let arr = numbers.filter(el => {
        return el % divisor === 0;
    });
    
    return arr;
}

console.log(divisibleBy([1, 2, 4, 5, 6], 2));