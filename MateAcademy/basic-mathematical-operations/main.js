'use strict';

// 1 Example
function basicOp(operand, numb1, numb2) {
  let result;
  if (operand == '+') {
      result = numb1 + numb2;
  } else if (operand == '-') {
      result = numb1 - numb2;
  } else if (operand == '*') {
      result = numb1 * numb2;
  } else if (operand == "/") {
      result = numb1 / numb2;
  }

  return result;
}

// 2 Example 

// function basicOp(operand, numb1, numb2) {
// 	return console.log(eval(numb1 + operand + numb2));
// }
console.log(basicOp('/', 10, 2));