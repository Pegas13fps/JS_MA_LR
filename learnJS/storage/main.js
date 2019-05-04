'use strict';

// * Implement function storage:
// * function works with next pattern:

function storage() {

    return function() {
        const obj = {};
        return {
            setValue: function(props, val) {
                obj[props] = val;
            },
            getValue: function(val) {
                console.log(obj, obj[val])
            }
        };
    }()
}

const propsStorage = storage();
const propsStorage1 = storage();

propsStorage.setValue('name', 'Peter');
propsStorage.setValue('age', 30);

propsStorage.getValue('name'); // Peter
propsStorage.getValue('age'); // 30

propsStorage1.setValue('name', 'Alex');
propsStorage1.setValue('age', 18);

propsStorage1.getValue('name'); // Alex
propsStorage1.getValue('age'); // 18

console.log(propsStorage);

// * const propsStorage = storage();
// * propsStorage.setValue('name', 'Peter');
// * propsStorage.setValue('age', 30);
// * propsStorage.getValue('name'); // Peter
// * propsStorage.getValue('age'); // 30
// * propsStorage.setValue('age', 31);
// * propsStorage.getValue('age'); // 31
// * propsStorage.getValue('occupation'); // undefined