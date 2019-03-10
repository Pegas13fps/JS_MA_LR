'use strict';

let field = document.querySelector('#field');
let ball = document.querySelector('#ball');
// ball.style.width = '40px';
// ball.style.height = '40px';

var coords = field.getBoundingClientRect();

var coords1 = [coords.left, coords.top];
var coords2 = [coords.right, coords.bottom];

console.log(coords1, coords2);


field.addEventListener('click', function(event) {

    ball.style.left = (event.clientX - ball.clientWidth) + 'px';
    ball.style.top = (event.clientY - ball.clientHeight) + 'px';

    // ball.style.top = (event.clientY - (ball.offsetHeight / 2)) + 'px';

    console.log(event.clientX - (ball.clientWidth / 2), ' X');


    console.log(event.clientX);
    console.log(event.clientY);
    console.log('click');
});
