'use strict';

function spEng(sentence){
  if (~sentence.toLowerCase().indexOf('english')) {
    return true;
  };
  return false;
}

console.log(spEng('english')); // true
console.log(spEng('egnlish')); // false
