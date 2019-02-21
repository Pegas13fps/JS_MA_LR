'use strict';

(function() {

  if (document.documentElement.textContent === undefined) {
    Object.defineProperty(HTMLElement.prototype, "textContent", {
      get: function() {
        return this.innerText;
      },
      set: function(value) {
        this.innerText = value;
      }
    });
  }

})(); // check textContent - innerText IE8