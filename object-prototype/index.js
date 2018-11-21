'use strict';

const positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    price: 10000,
    discount: 7,
    available: 3
  },
  {
    title: 'Ховерборд Mattel 2016',
    price: 9200,
    discount: 4,
    available: 14
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    price: 57000,
    discount: 0,
    available: 1
  }
];

// task 1

const itemPrototype = {
  hold(amount = 1) {
    if (this.available < amount) {
      return false;
    }
    this.available -= amount;
    this.holded += amount;
    return true;
  },
  unhold(amount=this.holded) {
    if (this.holded < amount) {
      return false;
    } else {
      this.holded -= amount;
      this.available += amount;
    }
    return true;
  },
  toString() {
    return `${this.title} (остаток ${this.available}, в резерве ${this.holded})`;
  }
};

function createItem(title, amount) {
  const item = Object.create(itemPrototype);
  item.title = title;
  item.available = amount;
  item.holded = 0;
  return item;
}

const items = [];
for (let item of positions) {
  items.push(createItem(item.title, item.available));
}

items[0].hold(2);
items[1].hold(8);
items[1].hold(12);
items[2].hold(1);

for (let item of items) {
  console.log(`Товар ${item}`);
}

items[0].unhold(1);
console.log(`Товар ${items[0]}`);
items[1].unhold();
console.log(`Товар ${items[1]}`);
items[2].unhold(3);
console.log(`Товар ${items[2]}`);

console.log('='.repeat(10));

// task 2

for (let item of positions) {
  const config = {
    get() {
      return this.price * (100 - this.discount) / 100;
    },
    set(finPrice) {
      if (finPrice > this.price) {
        throw `Ошибка, добавлена окончательная цена ${finPrice} больше базовой ${this.price}`;
      }
      this.discount = Math.round((this.price - finPrice) / this.price * 100);
    }
  };
  Object.defineProperty(item, 'finalPrice', config);
}

console.log(positions[0].finalPrice);
positions[2].finalPrice = 28500;
console.log(`${positions[2].discount}%`);

console.log(positions[1].finalPrice);
try {
  positions[1].finalPrice = 10000;
} catch (e) {
  console.log(e);
}

positions[0].finalPrice = 1000;
console.log(`${positions[0].discount}%`);

console.log('='.repeat(10));

// task 3

function isValidPosition(form, fields) {
  for (let field of fields) {
    if (!(form.hasOwnProperty(field))) {
      return false;
    }
  }
  return true;
}

const requiredFields = ['title', 'price', 'discount'];
let form1 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  price: 7800,
  discount: 0
};
let form2 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  discount: 10
};


if (isValidPosition(form1, requiredFields)) {
  console.log('Форма № 1 заполнена верно');
} else {
  console.log('В форме № 1 не заполнены необходимые поля');
}

if (isValidPosition(form2, requiredFields)) {
  console.log('Форма № 2 заполнена верно');
} else {
  console.log('В форме № 2 не заполнены необходимые поля');
}
