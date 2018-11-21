'use strict';

// task 1

const PALINDROM_MIN_LEN = 10;

function checkCoupon(code) {
  let result = code.split(/[\W_]+/).join('').toLowerCase();
  return result.length >= PALINDROM_MIN_LEN
    && result === result.split('').reverse().join('');
}

let codes = [
  'Madam, I’m Adam',
  'A man, a plan, a canal. Panama',
  '----<-------Eve------->-----',
  '[__777-x-44-x-777__]',
  '1234564321',
  'Olson in Oslo'
];

for (let code of codes) {
  let result = checkCoupon(code) ? 'подходит' : 'не подходит';
  console.log(`Код «${code}» ${result}`);
}

/*
  Код «Madam, I’m Adam» подходит
  Код «A man, a plan, a canal. Panama» подходит
  Код «----<-------Eve------->-----» не подходит
  Код «[__777-x-44-x-777__]» подходит
  Код «1234564321» не подходит
  Код «Olson in Oslo» подходит
*/

console.log('='.repeat(10));

// task 2

function stripTags(text) {
  return text.replace(/<\/?[^\W_]+>/ig, '');
}

const texts = [
  '<strong>Наши</strong> <em>ховерборды</em> лучшие в <u>мире</u>!',
  '<EM>Световой меч</EM> в <strong>каждый</strong> дом!'
];

for (let text of texts) {
  console.log(stripTags(text));
}

// Наши ховерборды лучшие в мире!
// Световой меч в каждый дом!

console.log('='.repeat(10));

// task 3

function validate(form, fields) {
  for (let field of fields) {
    let rule = field.rule;
    if (typeof rule === 'string') {
      if (rule === 'email') {
        rule = /^[\w]+@[a-z]+\.[a-z]{2,4}$/i;
      } else if (rule === 'phone') {
        rule = /^\+7\d{10}$/;
      } else {
        continue;
      }
    }
    if (!(rule.test(form[field.name]))) {
      return false;
    }
  }
  return true;
}

const fields = [
  {name: 'name', rule: /^[a-z ]{5,}$/i},
  {name: 'email', rule: 'email'},
  {name: 'phone', rule: 'phone'},
];

const forms = [
  {name: 'Ivan Ivanov', email: 'ivan@test.co', phone: '+79212753690'},
  {name: 'III', email: 'ivan@test', phone: '11111'}
];

for (let form of forms) {
  console.log(form);
  if (validate(form, fields)) {
    console.log('Ошибок нет');
  } else {
    console.log('Форма заполнена неверно');
  }
}

/*
  { name: 'Ivan Ivanov',
    email: 'ivan@test.co',
    phone: '+79212753690' }
  Ошибок нет
  { name: 'III', email: 'ivan@test', phone: '11111' }
  Форма заполнена неверно
*/