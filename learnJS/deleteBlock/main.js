"use strict";

let btn = document.querySelectorAll('.remove-button');
        
btn.forEach(function(element) {
    element.onclick = function() {
        let parentBlock = this.parentNode;
        parentBlock.style.display = 'none';
        // parentBlock.parentNode.removeChild(parentBlock); // book variant
    }
});
