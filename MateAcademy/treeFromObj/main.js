'use strict';

let data = {
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

let container = document.getElementById('container');

function createTree(container, data) {
  if (Object.keys(data)) {
    let ul = document.createElement('ul');
		container.appendChild(ul); 

    for (let key in data) {
      let li = document.createElement('li');
      li.textContent = key;
      ul.appendChild(li);
      createTree(li, data[key]); // 2 дня пытался без рекурсии сделать...
    }
  }
}

createTree(container, data); // создаёт
