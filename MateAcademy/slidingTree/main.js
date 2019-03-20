"use strict";

const usTree = document.querySelector('.tree');
const liArr = [...document.querySelectorAll('li')];

liArr.forEach(function(element) {
    let curElement = element.firstChild.textContent;
    element.firstChild.remove(curElement);
    const span = document.createElement('span');
    span.textContent = curElement;
    element.insertAdjacentElement('afterbegin', span);
});

usTree.addEventListener('click', function(event) {
    let target = event.target;

    if (target.tagName !== 'SPAN') return;

    let li = target.parentNode;
    let ulList = li.querySelector('ul');
    
    if (ulList) {
        ulList.classList.toggle('none');
    }
});