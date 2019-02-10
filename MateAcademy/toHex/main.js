'use strict';

// to Hex 
function toHex(value) {
  let hexArr = [];
  let decNumb = value;
  let hexStr = '0123456789ABCDEF'
  while (decNumb > 0) {
    hexArr.push(hexStr[decNumb % 16]); // new Variant
    decNumb = parseInt(decNumb / 16);
  }

  // for (let i = 0; i < hexArr.length; i++) {   Old variant
  //   if (hexArr[i] === 10) {
  //     hexArr[i] = 'A';
  //   } else if (hexArr[i] === 11) {
  //     hexArr[i] = 'B';
  //   } else if (hexArr[i] === 12) {
  //     hexArr[i] = 'C';
  //   } else if (hexArr[i] === 13) {
  //     hexArr[i] = 'D';
  //   } else if (hexArr[i] === 14) {
  //     hexArr[i] = 'E';
  //   } else if (hexArr[i] === 15) {
  //     hexArr[i] = 'F';
  //   }
  // }

  let hexNumber = hexArr.reverse().join('');
  return console.log(`Our HEX Number: ${hexNumber}`);
}

toHex(42);

toHex(255);

toHex(420);
