'use strict';

let field = document.querySelector('#field');
let centerFieldX = field.clientWidth / 2;
let centerFieldY = field.clientHeight / 2;

let ball = document.querySelector('#ball');
ball.style.left = Math.round((centerFieldX - ball.offsetHeight / 2)) + 'px';
ball.style.top = Math.round((centerFieldY - ball.offsetWidth / 2)) + 'px';
