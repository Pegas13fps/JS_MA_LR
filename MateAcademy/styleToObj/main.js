'use strict';

const stylesString = `
  background-color: #fff;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  clear: both;
  cursor: pointer;
  float: left;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  height: 42px;
  line-height: 40px;
  outline: 0;
  padding-left: 18px;
  padding-right: 30px;
  position: relative;
  text-align: left !important;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
  width: auto;
`;

/**
 * Функция принимает строку со стилями
 * и возвращает объект, у которого названия CSS свойств это ключи
 * а значения - строки
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  let strArr = sourceString.split(';');
  let stylesObject = {};
  let keyValueArr = [];

  for (let i = 0; i < strArr.length - 1; i++) {
    keyValueArr = strArr[i].trim().split(':');
    let key = keyValueArr[0];
    let value = keyValueArr[1].trim(); // <--- comment 54
    stylesObject[key] = value;
  }

  //  В некоторых значения в строке появлялся пробел,
  //  обьясните пожалуйста от куда он вылазил не могу понять,
  //  пришлось обрезать с помозью trim. Спасибо.

  return stylesObject;
}

convertToObject(stylesString);

// ----- Tests ------

const EXPECTED_OBJECT = {
  "background-color": "#fff",
  "-webkit-border-radius": "5px",
  "border-radius": "5px",
  "border": "1px solid #e8e8e8",
  "-webkit-box-sizing": "border-box",
  "box-sizing": "border-box",
  "clear": "both",
  "cursor": "pointer",
  "float": "left",
  "font-family": "inherit",
  "font-size": "14px",
  "font-weight": "400",
  "height": "42px",
  "line-height": "40px",
  "outline": "0",
  "padding-left": "18px",
  "padding-right": "30px",
  "position": "relative",
  "text-align": "left !important",
  "-webkit-transition": "all .2s ease-in-out",
  "transition": "all .2s ease-in-out",
  "-moz-user-select": "none",
  "-ms-user-select": "none",
  "user-select": "none",
  "white-space": "nowrap",
  "width": "auto",
};

console.assert(
  JSON.stringify(EXPECTED_OBJECT) === JSON.stringify(convertToObject(stylesString)),
  'Object is not equal to expected value'
);
