'use strict';

// task 1

const TAX_RATE = 73;
let totalTax = 0;

function calcTax(proceeds) {
  totalTax += proceeds * TAX_RATE / 100;
}

calcTax(100);
calcTax(1000);
calcTax(9000);

console.log(`Налог с продаж (${TAX_RATE} %), к оплате: ${totalTax} Q`);

// task 2

let wrappingPaper = 30;

function willPack(width, height, lenght) {
  let packingArea = Math.round(((width + lenght) * height + width * lenght) * 2);

  if (wrappingPaper > packingArea) {
    wrappingPaper -= packingArea;
    return true;
  }
  return false;
}

const BOXES = [
  [1, 0.2, 0.7],
  [100, 30, 7],
  [1, 2, 3]
];

for (let [wdth, hght, lnght] of BOXES) {
  let answer = willPack(wdth, hght, lnght) ? '' : ' не';
  console.log(`Заказ (${wdth}/${hght}/${lnght} м)${answer} упакован, осталось упаковочной бумаги ${wrappingPaper} м2`);
}

// task 3

const TELEPORT_CHARGES = [7, 2, 1, 4, 8];
let counters = [];

for (let i = 0; i < TELEPORT_CHARGES.length; i++) {
  counters[i] = function () {
    if (TELEPORT_CHARGES[i] > 1) {
      TELEPORT_CHARGES[i]--;
      console.log(`Телепорт ${i + 1} использован, заряд — ${TELEPORT_CHARGES[i]} единиц`);
    } else if (TELEPORT_CHARGES[i] === 1) {
      TELEPORT_CHARGES[i]--;
      console.log(`Телепорт ${i + 1} использован, заряд — ${TELEPORT_CHARGES[i]} единиц, требуется перезарядка!`);
    } else {
      console.log(`Телепорт ${i + 1} недоступен, перезаряжается`);
    }
  }
}

for (let i of [1, 0, 2, 4, 3, 4, 1, 1]) {
  counters[i]();
}
