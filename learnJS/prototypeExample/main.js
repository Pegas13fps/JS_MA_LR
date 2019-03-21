"use strict";

function CoffeOnProto(power) {
    this._power = power;
    this._waterAmount = 0;
}

CoffeOnProto.prototype.run = function() {
  console.log(`Run on power ${this._power}`);
  console.log(`Amount ${this._waterAmount}`);
}

CoffeOnProto.prototype.setWaterAmount = function(amount) {
    this._waterAmount = amount;
}

const machine1 = new CoffeOnProto(100);
const machine2 = new CoffeOnProto(100);
console.log(machine1.run === machine2.run); // one link. 2 example
