'use strict';

const ANCESTRY_FILE = [
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
  {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
  {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
  {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
  {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
  {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
  {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
  {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
  {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
  {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
  {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
  {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
  {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
  {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
  {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
  {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
  {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
  {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
  {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
  {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
  {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
  {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
  {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
  {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
];

const columnsNames = ['id', 'name', 'sex', 'born', 'died', 'age', 'century', 'mother', 'father', 'children'];

// element is a link to DOM element.
let peopleTable = document.querySelector('.people');

// create a function showPeople(element, people)
function showPeople(element, people) {

// generate a table from given items (without innerHTML and insretAdjucentHTML)
  let tabel = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');

  element.appendChild(tabel).classList.add('people__table');
  tabel.appendChild(thead);
  tabel.appendChild(tbody);

  columnsNames.forEach(function(item) {
    let th = document.createElement('th');
    thead.appendChild(th).textContent = item;
  });
// columns to display:
  for (let i = 0; i < people.length; i++) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr).classList.add('person');

    for (let j = 0; j < columnsNames.length; j++) {
      let td = document.createElement('td');
      if (columnsNames[j] === 'id') {
        td.innerHTML = i + 1;
      }
      if (columnsNames[j] === 'name') {
        td.innerHTML = people[i].name;
      }
      if (columnsNames[j] === 'sex') {
        td.innerHTML = people[i].sex;
      }
      if (columnsNames[j] === 'born') {
        td.innerHTML = people[i].born;
      }
      if (columnsNames[j] === 'died') {
        td.innerHTML = people[i].died;
      }
      if (columnsNames[j] === 'age') {
        td.innerHTML = people[i].died - people[i].born;
      }
      if (columnsNames[j] === 'century') {
        td.innerHTML = (Math.ceil(people[i].died / 100));
      }
      if (columnsNames[j] === 'mother') {
        td.innerHTML = people[i].mother;
      }
      if (columnsNames[j] === 'father') {
        td.innerHTML = people[i].father;
      }
      if (columnsNames[j] === 'children') {
        td.innerHTML = people[i].father ; // chldren not finish
      }
      tr.appendChild(td);
    }
  }
  // console.log(people[0]);
  // console.log(Object.values(people[0])); // берем значения people 1;
}

// add class person--male/person--female based on sex add lightpink background to all women
function addFlameClass(personsArr) {
console.log(personsArr);
personsArr.forEach(function(item) {
  if (item.children[2].innerHTML === 'f') {
    item.classList.add('person--female');
    }
    item.classList.add('person--male');
  });
}

// add class person--mother/person--father based on children add cornflowerblue background to all fathers
function addFatherMotherClass(personsArr) {
  personsArr.forEach(function(itemFather) {
    if (itemFather.children[2].innerHTML === 'm') {
      console.log(itemFather.children[1], itemFather.children[8]);
      personsArr.forEach(function(itemChildren) {
        if (itemFather.children[1] === itemChildren.children[8]) {
          console.log(itemFather.children[1], itemChildren.children[7]);
        }
      });
      // item.classList.add('person--female');
      }
      // item.classList.add('person--male');
    });
};


showPeople(peopleTable, ANCESTRY_FILE);
const personsArr = [...document.querySelectorAll('.person')];
addFlameClass(personsArr);
addFatherMotherClass(personsArr);
