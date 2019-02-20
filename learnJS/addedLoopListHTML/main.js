'use strict';

const ul = document.createElement('ul');

while (true) {
    const text = prompt('item?', '');
    if (!text) {
        break;
    }
    ul.insertAdjacentHTML('beforeend', `<li>${text}</li>`)
}

document.body.appendChild(ul);