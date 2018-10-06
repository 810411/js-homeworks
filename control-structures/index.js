'use strict';

// task_1

function order(countInStock, unitsForOrder) {
  if (unitsForOrder > countInStock) {
    console.log('На складе нет такого количества товаров.');
  } else if (unitsForOrder === countInStock) {
    console.log('Вы забираете весь товар c нашего склада!');
  } else {
    console.log('Заказ оформлен.');
  }
}

order(100, 1);
order(100, 100);
order(1, 100);

// task_2

var destination = 'Звезда смерти';

switch (destination) {
  case 'Луна':
    console.log('Стоимость доставки для области Луна: 150 Q');
    break;
  case 'Крабовидная туманность':
    console.log('Стоимость доставки для области Крабовидная туманность: 250 Q');
    break;
  case 'Галактика Туманность Андромеды':
    console.log('Стоимость доставки для области Галактика Туманность Андромеды: 550 Q');
    break;
  case 'Туманность Ориона':
    console.log('Стоимость доставки для области Туманность Ориона: 600 Q');
    break;
  case 'Звезда смерти':
    console.log('Стоимость доставки для области Звезда смерти: договорная цена');
    break;
  default:
    console.log('В ваш квадрант доставка не осуществляется');
}

// task_3

var price = 'Полтинник';

try {
  if (typeof(price) !== 'number') {
    throw `Вы допустили ошибку: ${price} не является числом`;
  }
  console.log('Цена товара введена корректно');
} catch (err) {
  console.log(err);
}

// task_4

var planetOfResidence;
var age;

if (planetOfResidence === 'Земля') {
  if (age < 18) {
    console.log('Вы не достигли совершеннолетия.')
  }else {
    console.log('Приятных покупок.')
  }
}else if (planetOfResidence === 'Юпитер') {
  if (age < 120) {
    console.log('Сожалеем. Вернитесь на 120-й день рождения!')
  }else {
    console.log('Чистого неба и удачных покупок!')
  }
}else {
  console.log('Спасибо, что пользуетесь услугами нашего магазина!')
}

// if (planetOfResidence === 'Земля' && age < 18) {
//   console.log('Вы не достигли совершеннолетия.')
// } else if (planetOfResidence === 'Земля' && age >= 18) {
//   console.log('Приятных покупок.')
// } else if (planetOfResidence === 'Юпитер' && age < 120) {
//   console.log('Сожалеем. Вернитесь на 120-й день рождения!')
// } else if (planetOfResidence === 'Юпитер' && age >= 120) {
//   console.log('Чистого неба и удачных покупок!')
// } else {
//   console.log('Спасибо, что пользуетесь услугами нашего магазина!')
// }
