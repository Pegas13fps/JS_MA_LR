'use strict';

field.addEventListener('click', function(event) {

    // let field = document.querySelector('#field');
    // let ball = document.querySelector('#ball');

    ball.style.left = (event.clientX - ball.clientWidth) + 'px';
    ball.style.top = (event.clientY - ball.clientHeight) + 'px';

    if (event.clientX < ball.clientWidth) {
        ball.style.left = 0 + 'px';
    }
    if (event.clientX > field.clientWidth) {
        ball.style.left = field.clientWidth - ball.clientWidth + 'px';
    }
    if (event.clientY < ball.clientHeight) {
        ball.style.top = 0 + 'px';
    }
    if (event.clientY > field.clientHeight) {
        ball.style.top = field.clientHeight - ball.clientHeight + 'px';
    }
});
// вопрос, правильно ли обращатся так напрямую к элементам если у них указан id.
// или лучше все равно в переменную их писать querySelector('#field');