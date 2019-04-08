'use strict';

class SelectableList {
    constructor({element, btn}) {
        this.element = element;
        this.btn = btn;
        this._renderList();
        this.getSelected();
    }

    _renderList() {
        this.element.addEventListener('click', (event) => {
            let target = event.target;
            
            if (target.tagName !== 'LI') return;

            if (event.metaKey || event.ctrlKey) {
                this.selectedLi(target)
            } else if (event.shiftKey) {
                this.shiftSelected(target)
            } else {
                this.oneSelected(target);
            }
            this.lastClickedLi = target;
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

    shiftSelected(li) {
        let startElem = this.lastClickedLi || this.element.children[0];
        let isLastClickedBefore = startElem.compareDocumentPosition(li) & this.element.children.length - 1;
        
        if (isLastClickedBefore) {
            for (let element = startElem; element !== li; element = element.nextElementSibling) {
                element.classList.add('selected');
            }
        } else {
            for (let element = startElem; element !== li; element = element.previousElementSibling) {
                element.classList.add('selected');
            }
        }
        li.classList.add('selected');
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