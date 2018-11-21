'use strict';

function rand(min, max) {
  return Math.ceil((max - min + 1) * Math.random()) + min - 1;
}

function generateId() {
  return Array(4).fill(1).map(value => rand(1000, 9999)).join('-');
}

const pointsInfo = [
  {title: 'Темная сторона Луны', coords: [500, 200, 97]},
  {title: 'Седьмое кольцо Юпитера', coords: [934, -491, 712]},
  {title: 'Саратов', coords: [30, 91, 77]}
];


// task 1

function OrdersTeleportationPoint(title, x, y, z) {
  const point = Object.create(OrdersTeleportationPoint.prototype);
  point.title = title;
  point.x = x;
  point.y = y;
  point.z = z;
  return point;
}

OrdersTeleportationPoint.prototype = {
  getDistance(x, y, z) {
    return Math.sqrt(Math.pow(x - this.x, 2)
      + Math.pow(y - this.y, 2)
      + Math.pow(z - this.z, 2)
    );
  }
};

const point = new OrdersTeleportationPoint('Темная сторона Луны', 500, 200, 97);
let distance = point.getDistance(100, -100, 33);
console.log(`Расстояние до пункта «${point.title}» составит ${distance.toFixed(0)} единиц`);

// Расстояние до пункта «Темная сторона Луны» составит 504 единиц
console.log('='.repeat(10));


// task 2

function OrdersTeleportationPointLocator(points) {
  if (!(Array.isArray(points))) {
    throw 'Argument is not Array'
  }

  this.getClosest = function (x, y, z) {
    return points
      .filter(point => point instanceof OrdersTeleportationPoint)
      .reduce(function (closest, point) {
        return point.getDistance(x, y, z) < closest.getDistance(x, y, z) ? point : closest;
      })
  }
}

const points = pointsInfo.map(point => new OrdersTeleportationPoint(point.title, ...point.coords));
points.unshift('пустота');
points.splice(3, 0, 'пустота');

try {
  const locator = new OrdersTeleportationPointLocator(points);
  const closestPoint = locator.getClosest(333, 294, 77);

  console.log(`Ближайший пункт телепортации заказов «${closestPoint.title}»`);

} catch (e) {
  console.log(e);
}

// Ближайший пункт телепортации заказов «Темная сторона Луны»
console.log('='.repeat(10));


// task 3

class LoyaltyCard {
  constructor(name, sum) {
    this.owner = name;
    Object.defineProperty(this, 'id', {
      value: generateId()
    });
    Object.defineProperty(this, 'balance', {
      value: sum,
      configurable: true
    });
    this._orders = [sum]
  }

  get discount() {
    return this.balance <= 3000 ? 0 :
      this.balance <= 5000 ? 3 :
        this.balance <= 10000 ? 5 : 7
  }

  append(OrderSum) {
    this._orders.push(OrderSum);
    Object.defineProperties(this, {
      'balance': {
        value: this.balance + OrderSum
      }
    });
  }

  getFinalSum(OrderSum) {
    return OrderSum - (OrderSum * this.discount / 100)
  }

  show() {
    console.log(`Карта ${this.id}`);
    console.log(`  Владелец: ${this.owner}`);
    console.log(`  Баланс: ${this.balance} Q`);
    console.log(`  Текущая скидка: ${this.discount} %`);
    console.log('  Заказы:');
    this._orders.forEach((sum, index) =>
      console.log(`    #${index + 1} на сумму ${sum} Q`)
    );
  }
}

const card = new LoyaltyCard('Иванов Иван', 6300);
let newOrderSum = 7000;
let finalSum = card.getFinalSum(newOrderSum);
console.log(`Итоговая сумма для заказа на ${newOrderSum} Q по карте`
  + ` составит ${finalSum} Q. Скидка ${card.discount} %.`);

card.append(newOrderSum);
console.log(`Баланс карты после покупки ${card.balance} Q.`);
card.show();

// Итоговая сумма для заказа на 7000 Q по карте составит 6650 Q. Скидка 5 %.
// Баланс карты после покупки 13300 Q.
//   Карта 8055-7525-8052-8450
// Владелец: Иванов Иван
// Баланс: 13300 Q
// Текущая скидка: 7 %
// Заказы:
// #1 на сумму 6300 Q
// #2 на сумму 7000 Q