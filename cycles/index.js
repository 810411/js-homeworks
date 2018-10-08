'use strict';

var positions = [
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)',
  'Машина времени DeLorean',
  'Репликатор домашний STAR-94',
  'Лингвенсор 000-17',
  'Целеуказатель электронный WAY-Y'
];

// task 1

var arrayLength = positions.length;

console.log('Список наименований');
for (let i = 0; i < arrayLength; i++) {
  console.log(`${i + 1} '${positions[i]}'`);
}

// task 2

positions.push('Экзоскелет Trooper-111', 'Нейроинтерфейс игровой SEGUN', 'Семена дерева Эйва');
arrayLength = positions.length;
console.log('Окончательный список наименований');
for (let i = 0; i < arrayLength; i++) {
  console.log(`${i + 1} '${positions[i]}'`);
}

// task 3

var index = positions.indexOf('Машина времени DeLorean');

positions.unshift(positions.splice(index, 1)[0]);
console.log('Принять в первую очередь');
for (let i = 0; i < 3; i++) {
  console.log(`${i + 1} '${positions[i]}'`);
}

// task 4

var [name1, name2, name3, name4, name5, ...restElements] = positions;

console.log('В магазине');
for (let name of [name1, name2, name3, name4, name5]) {
  console.log(name);
}

console.log('Остальные товары');
for (let name of restElements) {
  console.log(name);
}
