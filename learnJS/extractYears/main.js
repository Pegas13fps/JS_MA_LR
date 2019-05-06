'use strict';

// * Implement function extractYears:
// * Function takes a text and returns array of years between 1900 and 2099
// * including (range `[1900, 2099]`) which appear in the given text. The order of
// * years in the returned array is the same as they appear in the text. If no
// * year found the function returns an empty array.

// * e.g. for text:

// * Usually people who were born in 1995 can find they first job not later than
// * in 2020 but also not earlier than in 2012. Number 11999 is not included in
// * the result because it's too big. It is out of range between 1900 and 2099.
// *
// * The result should be `[1995, 2020, 2012, 1900, 2099]`
// *
// * @param {string} text
// *
// * @return {number[]}

function extractYears(text) {
    let result = text.split(" ").map((el) => parseInt(+el)).filter((el) => (!isNaN(el) && el >= 1900 && el <= 2099));

    return result;
}

console.log(extractYears("Usually people who were born in 1995 can find they first job not later than in 2020 but also not earlier than in 2012. Number 11999 is not included in the result because it's too big. It is out of range between 1900 and 2099."));