'use strict';

function capitalsFirstSort(str) {
  let splitStr = [];
  let upperCaseArr = [];
  let lowerCaseArr = [];
  let sortedStr;
  let numbsSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '\\', '^', '[', ']', '$', '.', '|', '?', '*', '+', '(', ')'];

  splitStr = str.split(' ');

  for (let i = 0; i < splitStr.length; i++) {
    for (let j = 0; j < numbsSymbols.length; j++) {
      if (splitStr[i].charAt(0) === numbsSymbols[j]) {
        splitStr.splice(splitStr[j], 1);
        continue;
      }
    }

    if (splitStr[i].charAt(0).toUpperCase() === splitStr[i].charAt(0)) {
      upperCaseArr.push(splitStr[i]);
    } else if (splitStr[i].charAt(0).toLowerCase() === splitStr[i].charAt(0)) {
      lowerCaseArr.push(splitStr[i]);
    }
  }

  sortedStr = upperCaseArr.concat(lowerCaseArr).join(' ');

  return sortedStr;
}

console.log(capitalsFirstSort('1mm $$ hey You, [ss Sort me Already!'));
// For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

// Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end.
// The order of the uppercase and lowercase words should be the order in which they occur.
// If a word starts with a number or special character, skip the word and leave it out of the result.
// Input String will not be empty.
// For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"
