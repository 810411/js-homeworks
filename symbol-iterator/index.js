'use strict';

// task 1

class BarcodeGenerator {
  constructor(size = 1) {
    this._size = parseInt(size);
  }

  static get prefix() {
    return Symbol;
  }

  create() {
    const prefix = BarcodeGenerator.prefix in this ?
      String(this[BarcodeGenerator.prefix]) + '-' : '';

    return prefix + Math.random().toString().substr(2, this._size);
  }
}

const generator = new BarcodeGenerator(4);

generator[BarcodeGenerator.prefix] = 'AA';
console.log(generator.create());

generator[BarcodeGenerator.prefix] = 'XX';
console.log(generator.create());
console.log(generator.create());
console.log(generator.create());

delete generator[BarcodeGenerator.prefix];
console.log(generator.create());

console.log('='.repeat(10));


// task 2

class HexRange {
  constructor(from, to) {
    this._from = from;
    this._to = to;
  }

  [Symbol.iterator]() {
    let current = this._from;
    let last = this._to;

    return {
      next() {
        return {
          done: !(current <= last),
          value: (current++).toString(16)
        };
      }
    }
  }
}

let queue = new HexRange(247, 253);
console.log(...queue);

console.log('='.repeat(10));


// task 3

class DateRange {
  constructor(from, to) {
    this._from = from;
    this._to = to;
  }

  [Symbol.iterator]() {
    let current = new Date(this._from.toDateString());
    let last = new Date(this._to.toDateString());


    return {
      next: function () {
        function shiftCurrent() {
          const res = new Date(current);
          current.setDate(current.getDate() + 1);
          return res;
        }

        while (!(current.getDay() % 6) && current <= last) {
          shiftCurrent();
        }

        return {
          done: !(current <= last),
          value: shiftCurrent()
        };
      }
    }
  }
}

const from = new Date(2017, 2, 13, 23, 59);
const to = new Date(2017, 2, 21, 0, 1);
let range = new DateRange(from, to);

for (let day of range) {
  console.log(day.toLocaleDateString('ru-Ru'));
}
