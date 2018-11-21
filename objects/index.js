'use strict';

let positions = [
  'Телепорт бытовой VZHIH-101',
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)'
];

let prices = [
  10000,
  4800,
  9200,
  2500,
  57000
];

let hitName = positions[2], hitPrice = prices[2];


// task 1

let hit = {};

hit.name = hitName;
hit.price = hitPrice;

console.log(`Хит продаж мартобря: <${hit.name}> цена ${hit.price} Q`);


// task 2

let items = [];

for (let i = 0; i < positions.length; i++) {
  items[i] = {
    name: positions[i],
    price: prices[i]
  };
}

console.log(`Купите ${items[4].name} по цене ${items[4].price} Q`);


// task 3

function showDiscount(product, qty) {
  let discount;
  let cost = product.price * qty;

  if (qty < 10) {
    discount = 5;
  } else if (qty < 50) {
    discount = 7;
  } else if (qty < 100) {
    discount = 10;
  } else {
    discount = 15;
  }

  let costWithDisc = cost * (100 - discount) / 100;
  let benefit = cost - costWithDisc;

  console.log(`${product.name} — стоимость партии из ${qty} штук ${costWithDisc} Q (скидка ${discount} %),\
 ваша выгода ${benefit} Q!`)
}

showDiscount(items[0], 12);
showDiscount(items[3], 97);


// task 4

items[3].amount = 4;

function updateAmount(product, qty = 1) {
  if (!('amount' in product)) {
    return;
  }
  if (product.amount === 0 || product.amount < qty) {
    console.log(`${product.name} закончился на складе.`);
  } else if (product.amount === qty) {
    console.log(`Это был последний ${product.name}, вам повезло!`);
    product.amount = product.amount - qty;
  } else {
    product.amount = product.amount - qty
    console.log(`${product.name} — остаток ${product.amount} шт.`);
  }
}

updateAmount(items[1], 17);
updateAmount(items[3], 2);
updateAmount(items[3]);
updateAmount(items[3]);
updateAmount(items[3]);
updateAmount(items[3]);
