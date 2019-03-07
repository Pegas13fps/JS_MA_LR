'use strict';

let leftArrow = document.querySelector('.arrow__left');
let rightArrow = document.querySelector('.arrow__right');
let ulBox = document.querySelector('.img__box ul');

let allLi = document.querySelectorAll('li').length;

let counter = 0;
let totalMargin = 0;

leftArrow.addEventListener('click', function() {
  if ((allLi - 3) >= 3) {
    totalMargin -= 390;
    counter += 3;
    allLi -= 3;
  } else if ((allLi - 2) > 2) {
    totalMargin -= 260;
    counter += 2;
    allLi -= 2;
  } else if ((allLi - 1) >= 1) {
    totalMargin -= 130;
    counter += 1;
    allLi = 0;
  }
  ulBox.style.marginLeft = totalMargin + 'px';
});

rightArrow.addEventListener('click', function() {

  if (counter >= 3) {
    totalMargin += 390;
    counter -= 3;
    allLi += 3;
  } else if (counter > 2) {
    totalMargin += 260;
    counter -= 2;
    allLi += 2;
  } else if (counter >= 1) {
    totalMargin += 130;
    counter -= 1;
    allLi += 1;
    counter = 0;
  }
  ulBox.style.marginLeft = totalMargin + 'px';
});
