'use strict';

let links = document.querySelectorAll('a');

links.forEach(element => {
  let href = element.getAttribute('href');

  if (href === null) {

  } else if (href.indexOf('http://internal.com') === 0) {

  } else if (href.indexOf('://') === -1) {

  } else {
    element.classList.add('external');
  }
});