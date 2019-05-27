'use strict';

function whatday(num) { 
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (num > 0 && num < 8) {
    return weekDays[num - 1];
    }
  return "Wrong, please enter a number between 1 and 7";
}
