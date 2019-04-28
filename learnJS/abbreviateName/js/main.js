"use strict";

function abbrevName(name) {
    let nameArr = name.split(' ');
    let firstStr = nameArr[0].slice(0, 1).toUpperCase();
    let secondStr = nameArr[1].slice(0, 1).toUpperCase();
    let initials = `${firstStr}.${secondStr}`;
    return initials;

}

console.log(abbrevName("Sam Harris")); // S.H
console.log(abbrevName("Patrick Feenan")); // P.H
console.log(abbrevName("Evan Cole")); // E.C
console.log(abbrevName("P Favuzzi")); // P.F
console.log(abbrevName("David Mendieta")); // D.M