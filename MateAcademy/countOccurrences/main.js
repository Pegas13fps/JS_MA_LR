'use strict';

function countOccurances(targetString, targetSymbol) {
  let characterСounter = 0;

  for (let i = 0; i < targetString.length; i++) {
    if (targetString[i].toLowerCase().includes(targetSymbol.toLowerCase())) {
      characterСounter++;
    }
  }
  return characterСounter;
}

console.log(countOccurances('Samsung', 'S'));
console.log(countOccurances('Apple', 'p'));
console.log(countOccurances('MateAcademy', 'm'));
