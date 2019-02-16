'use strict';

function makeArmy() {

  let shooters = [];

  for (var i = 0; i < 10; i++)(function(i) {
    let shooter = function() {
      console.log(i);
    };
    shooters.push(shooter);
  })(i);

  return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9