'use strict';

let lis = document.getElementsByTagName('li');

    for (i = 0; i < lis.length; i++) {
      // получить название из текстового узла
      var title = lis[i].firstChild.data;

      title = title.trim(); // убрать лишние пробелы с концов

      // получить количество детей
      let childCount = lis[i].getElementsByTagName('li').length;

      console.log(title + ': ' + childCount);
    }