"use strict";

const imgBox = document.querySelector('#thumbs');
let largeImg = document.querySelector('#largeImg');

imgBox.addEventListener('click', function(event) {
    let target = event.target;

    if (target.nodeName === 'IMG') {
        largeImg.src = target.parentNode.href;
        largeImg.alt = target.parentNode.title;
    }
    event.preventDefault();
});
