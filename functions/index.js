'use strict';

// task 1

function calcGuarantee(yearsQty) {
  if (yearsQty === 0) {
    return 0;
  } else if (yearsQty === 1) {
    return 1250;
  } else if (yearsQty === 2) {
    return 2300;
  }
  return NaN;
}

console.log(`Дополнительное гарантийное обслуживание: ${calcGuarantee(1)} Q`);

// task 2

const WORD_PRICE = 11;

function calcEngraving(text) {
  if (typeof text === 'string') {
    text = text.split(' ');
    for (let i = 0; i < text.length; i++) {
      if (text[i] === '') {
        text.splice(i, 1);
        i--;
      }
    }
    return text.length * WORD_PRICE;
  }
  return 0;
}

console.log(`Подарочная упаковка и гравировка: ${calcEngraving(' Hello   World  ')} Q`);
console.log(`Подарочная упаковка и гравировка: ${calcEngraving(undefined)} Q`);

// task 3

function calcDelivery(destination=0) {
  switch (destination) {
    case 'Луна':
      return 150;
    case 'Крабовидная туманность':
      return 250;
    case 'Галактика Туманность Андромеды':
      return 550;
    case 'Туманность Ориона':
      return 600;
    case 0:
      return 0;
    default:
      return NaN;
  }
}

let answerAboutDelivery = (deliveryPrice) => {
  if (deliveryPrice === 0) {
    return 'Доставка не требуется';
  } else if (isNaN(deliveryPrice)) {
    return 'Ошибка при расчете стоимости доставки';
  } else {
    return `Стоимость доставки: ${deliveryPrice} Q`;
  }
};

console.log(answerAboutDelivery(calcDelivery('Луна')));

// task 4

function calcOrderPrice(productCost, guaranteeTime, engravingText, destination) {
  let guarantee = calcGuarantee(guaranteeTime);
  let engraving = calcEngraving(engravingText);
  let delivery = calcDelivery(destination);

  let result = `Общая стоимость заказа: ${productCost + guarantee + engraving + delivery} Q.\n`;
  result += `Из них ${guarantee} Q за гарантийное обслуживание на ${guaranteeTime} год/года.\n`;
  result += `Гравировка "${engravingText}" на сумму ${engraving} Q.\n`;
  if (destination) {
    result += `Доставка в область ${destination}: ${delivery} Q.`;
  } else {
    result += 'Доставка не требуется';
  }
  return result;
}

console.log(calcOrderPrice(4000, 1, 'A B C D E', 'Галактика Туманность Андромеды'));

console.log(calcOrderPrice(1000, 0, 'Hello World'));
