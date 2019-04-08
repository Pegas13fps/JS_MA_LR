'use strict';

import SelectableList from './SelectableList.js'

const listSelect = new SelectableList({
    element: document.querySelector('ul'),
    btn: document.querySelector('.show__selected')
});