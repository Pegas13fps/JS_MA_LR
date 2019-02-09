'use strict';

function PrimeNumbs(usNum) {
  backPoint:
  for(let i = 2; i <= usNum; i++) {
      for(let j = 2; j < i; j++) {
          if(i % j == 0) continue backPoint;
      }
      console.log(i);
  }
}
PrimeNumbs(13);