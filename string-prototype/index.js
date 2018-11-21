'use strict';

function showSpecialPrice() {
  console.log('Введен секретный код. Все цены уменьшены вдвое!');
}

// task 1

function fixAmount(amount) {
  let fixed = parseFloat(amount.toString().replace(',', '.'));
  return isNaN(fixed) ? -1 : fixed;
}

const orders = [
  {price: 21, amount: 4},
  {price: 50, amount: '17 штук'},
  {price: 7, amount: '1,5 килограмма'},
  {price: 2, amount: ' 2.7 метра '},
  {price: 1, amount: 'семь единиц'},
  {price: 1, amount: true}
];

for (let order of orders) {
  let result = fixAmount(order.amount);
  console.log(`Заказ на сумму: ${result * order.price} Q`);
}

console.log('='.repeat(10));

// task 2

const KEY_WORD = 'r2d2';
let handleKey = storage();

function storage() {
  let userString = '';
  return function (char) {
    userString = userString.concat(char);
    if (userString.slice(-KEY_WORD.length).toLowerCase() === KEY_WORD) {
      showSpecialPrice();
    }
    ;
  }
}

const KEYS = ['2', '4', 'R', '2', 'd', '2'];
for (let key of KEYS) {
  handleKey(key);
}

console.log('='.repeat(10));

// task 3

function parseData(namesList, stringsList, delimeter = ',') {
  const result = [];
  for (let line of stringsList) {
    let cells = line.split(delimeter);
    let item = {};
    for (let i = 0; i < namesList.length; i++) {
      item[namesList[i]] = cells[i];
    }
    result.push(item);
  }
  return result;
}

const data = [
  '12,Телепорт бытовой VZHIH-101 ,17,10000',
  '77, Меч световой FORCE (синий луч), 2,57000'
];

let items = parseData(['id', 'name', 'amount', 'price'], data);
console.log(items);
