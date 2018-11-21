'use strict';

let positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    producer: {
      name: 'Рязанский телепортостроительный завод',
      deferPeriod: 10,
      lot: 3
    },
    price: 10000
  },
  {
    title: 'Ховерборд Mattel 2016',
    producer: {
      name: 'Волжский Ховерборд Завод',
      deferPeriod: 24,
      lot: 14
    },
    price: 9200
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    producer: {
      name: 'Тульский оружейный комбинат',
      deferPeriod: 5,
      lot: 1
    },
    price: 57000
  }
];


// task 1

function lotCalculator(position, qty) {
  let calcLots = Math.ceil(qty / position.producer.lot);
  return {
    lots: calcLots,
    total: calcLots * position.producer.lot * position.price
  }
}

let result1 = lotCalculator(positions[1], 15);
console.log(`${positions[1].title} 15 штук: заказать партий ${result1.lots}, стоимость ${result1.total} Q`);

let result2 = lotCalculator(positions[2], 1);
console.log(`${positions[2].title} 1 штука: заказать партий ${result2.lots}, стоимость ${result2.total} Q`);


// task 2

const DEFERED_PAYMENTS = [];
const PRODUCER = [];

for (let i = 0; i < positions.length; i++) {
  PRODUCER[i] = positions[i].producer;
}

function deferPay(producerObj, shippingAmount, shippingDate) {
  const paymentDate = new Date(shippingDate);
  paymentDate.setDate(paymentDate.getDate() + producerObj.deferPeriod);

  DEFERED_PAYMENTS.push({
    producer: producerObj,
    amount: shippingAmount,
    paymentDate: paymentDate
  })
}

//.toLocaleDateString('ru-Ru') выводит не совсем как в п.7, а вида '2030-4-20', поэтому
function formatLogForDefered(deferedPayment) {
  let day = deferedPayment.paymentDate.getDate();
  let month = deferedPayment.paymentDate.getMonth() + 1;
  let year = deferedPayment.paymentDate.getFullYear();

  day = (day.toString().length < 2) ? `0${day}` : day;
  month = (month.toString().length < 2) ? `0${month}` : month;

  return `${day}.${month}.${year}: ${deferedPayment.producer.name}, сумма ${deferedPayment.amount} Q`
}

deferPay(PRODUCER[0], 7200, new Date(2030, 4 - 1, 10));
console.log(formatLogForDefered(DEFERED_PAYMENTS[0]));

deferPay(PRODUCER[1], 14600, new Date(2030, 4 - 1, 24));
console.log(formatLogForDefered(DEFERED_PAYMENTS[1]));

deferPay(PRODUCER[2], 1000, new Date(2030, 12 - 1, 1));
console.log(formatLogForDefered(DEFERED_PAYMENTS[2]));


// task 3

function loadCurrencyJSON() {
  return `{"AUD":44.95,"AZN":33.73,"GBP":73.42,"AMD":0.12,"BYN":30.96,"BGN":32.01,
  "BRL":18.8,"HUF":0.2,"DKK":8.42,"USD":58.85,"EUR":62.68,"INR":0.88,"KZT":0.18,
    "CAD":44.74,"KGS":0.85,"CNY":8.55,"MDL":2.94,"NOK":7.02,"PLN":14.55,"RON":13.92,
    "ZZZ":79.91,"SGD":41.36,"TJS":7.43,"TRY":15.97,"TMT":16.84,"UZS":0.02,"UAH":2.16,
    "CZK":2.32,"SEK":6.6,"CHF":58.69,"ZAR":4.4,"KRW":0.05,"JPY":0.52}`;
}

let currency;

try {
  currency = JSON.parse(loadCurrencyJSON());
} catch (e) {
  console.error(e.name, e.message);
}

function convertCurrency(amount, from, to) {
  if (currency) {
    return Math.round((amount * currency[from] / currency[to]) * 100) / 100;
  }
  return NaN;
}

let price1 = convertCurrency(7000, 'ZZZ', 'USD');
console.log(`Сумма ${price1} USD`);

let price2 = convertCurrency(790, 'EUR', 'ZZZ');
console.log(`Сумма ${price2} ZZZ`);

let price3 = convertCurrency(1000, 'JPY', 'USD');
console.log(`Сумма ${price3} USD`);
