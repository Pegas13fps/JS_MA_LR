'use strict';

function initializeDestroyer() {
  let elements = [];
  
  // Вешаем обработчик на правый клик, а точнее вместо вызова контекстного меню
  document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      const target = event.target;
      // находим индекс элемента в массиве. Если -1 то элемента в массиве нет.
      const existsIndex = elements.indexOf(target);
      // если элемент уже был в массиве - удаляем его оттуда и убираем бордер
      if (existsIndex >= 0) {
        elements.splice(existsIndex, 1);
        target.style.border = 'none'; 
      } else {
        // элемента еще не было в массиве. добавляем его и дорисовываем бордер
        elements.push(target);
        target.style.border = '1px solid red'; 
      }
  })
  
  // Следим за клавишами. Нас интересует клавиша с кодом 46, delete
  document.addEventListener('keyup', (event) => {
      if (event.keyCode === 46) {
          elements.forEach((el) => el.remove());
          elements = [];
      }
  })
}

initializeDestroyer();
