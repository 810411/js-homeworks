'use strict';

const clients = [{
  name: 'Филип Фрай',
  email: 'fray@mail.un',
  isSubscribed: false,
  orders: [11700, 1980, 450, 5500]
}, {
  name: 'Доктор Джон Зоидберг',
  email: 'zoidberg-md@list.un',
  isSubscribed: true,
  orders: [720]
}, {
  name: 'Бендер Сгибатель Родригес',
  email: 'bender.rodriges@rambler.un',
  isSubscribed: true,
  orders: [440, 226, 7650, 2990, 70]
}];


// task 1

clients.findByName = function (name) {
  return this.find(client => client.name === name);
};

const clientOne = clients.findByName('Доктор Джон Зоидберг');
console.log(clientOne.email); // zoidberg-md@list.un

const clientTwo = clients.findByName('Люрр');
console.log(typeof clientTwo); // undefined

console.log('='.repeat(10));


// task 2

function compareByTotalSumm(left, right) {
  let summ = client => client.orders.reduce((memo, el) => memo + el);
  return Math.sign(summ(right) - summ(left));
}

clients
  .sort(compareByTotalSumm)
  .forEach(client => console.log(client.name));

console.log('='.repeat(10));


// task 3

function sendMail(email) {
  console.log(`Письмо отправлено на адрес ${email}`);
}

function getSubscribedEmails(list) {
  return list
    .filter(client => client.isSubscribed)
    .map(client => client.email);
}

getSubscribedEmails(clients).forEach(sendMail);
