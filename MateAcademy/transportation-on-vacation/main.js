'use strict';

function rentCar(days) {
  let priceDays = days * 40;
  
  if (days >= 7) {
      alert(`Your amount will be: ${priceDays - 50}$ Your discount 50$`);
  } else if(days >= 3 && days <= 6) {
      alert(`Your amount will be: ${priceDays - 20}$ Your discount 20$`);
  } else {
      alert(`Your amount will be: ${priceDays}$`);
  }
}

let rentCarDays = prompt('How many days do you need a car?');

rentCar(rentCarDays);