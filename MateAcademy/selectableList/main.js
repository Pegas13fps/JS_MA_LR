'use strict';

class SelectableList {
    constructor({element, btn}) {
        this.element = element;
        this.btn = btn;
        console.log(this.element);
        this._renderList();
        this.getSelected();
    }

    _renderList() {
        this.element.addEventListener('click', (event) => {
            let target = event.target;
            console.log('click', target);

            // if (event.tagName !== 'LI') return; 
            console.log('inside');
            if (event.metaKey || event.ctrlKey) {
                this.selectedLi(target)
            } else if (event.shiftKey) {

            } else {
                this.oneSelected(target);
            }

            // target.classList.toggle('selected');
        });
    }

    selectedLi(li) {
        li.classList.toggle('selected');
    }

    oneSelected(li) {
        this.removePrev();
        li.classList.add('selected');
    }
    removePrev() {
        [...document.querySelectorAll('.selected')].forEach( (item) => {
            item.classList.remove('selected');
        });
    }

    getSelected() {
        this.btn.addEventListener('click', function() {
            alert([...document.querySelectorAll('.selected')].map( (item) => item.textContent).join(", "))
        });
    }
  
}

const listSelect = new SelectableList({
    element: document.querySelector('ul'),
    btn: document.querySelector('.show__selected')
});