'use strict';

const data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

let container = document.querySelector('#container');

function createTree(container, data) {

  container.innerHTML = objToList(data);
}

function objToList(obj) {
  let itemsHtml = Object.keys(obj)
  .map(key => `<li>${key}${objToList(obj[key])}</li>`).join('');

  if (itemsHtml.length === 0) return '';
  return `
    <ul>
      ${itemsHtml}
    </ul>
  `;
}

createTree(container, data);