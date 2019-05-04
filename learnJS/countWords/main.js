'use strict';

// * Implement function countWords:
// *
// * Function takes a text without punctuation marks and returns the number of
// * words in the given text. Words are separated by one or many whitespaces.
// * Also, whitespaces can appear at the beginning and end of the text.
// *
// * e.g. for `text = '   You  area programmer '` it should return `3`.


const text = '   You  area programmer ';

function countWords(text) {
    let trimedStr = text.trim().split(" ");
    let result = trimedStr.filter(element => element !== "").length;

    return result;
}

console.log(countWords(text)); // 3