'use strict';

// * Implement function calculateRoundedRating:
// * Function takes an exact rating of the product - the float number between 1
// * and 5 including (range `[1, 5]`) and returns the rounded rating to closest
// * 0.5 (1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5 or 5).

function calculateRoundedRating(rating) {
    return Math.round(rating * 2).toFixed(1) / 2;
}

console.log(calculateRoundedRating(3.666)); // 3.5
console.log(calculateRoundedRating(1.92)); // 2
console.log(calculateRoundedRating(4.25)); // 4.5
console.log(calculateRoundedRating(1.2499999)); // 1