'use strict';

function numJewelsInStones(Jawels, Stones) {
  let jawelsArr = [...Jawels];
  let jawelsCounter = 0;

  for (let i = 0; i < Stones.length; i++) {
    for (let j = 0; j < Stones.length; j++) {
      if (Stones[j].includes(jawelsArr[i])) {
        jawelsCounter++;
      }
    }
  }

  return jawelsCounter;
}

console.log(numJewelsInStones('aA', 'aAAbbbb')); // 3
console.log(numJewelsInStones('z', 'ZZ')); // 0
