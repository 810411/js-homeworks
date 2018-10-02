'use strict';

// task 1

var name;
var price;

// task 2

name = 'Телепорт бытовой VZHIH-101';
price = 10000;

console.log(`В наличии имеется: «${name}»`);
console.log(`Стоимость товара ${price} Q`);

// task 3

var productCount = 2;
var discount = 10;
var totalCost;

totalCost = productCount * price * (100 - discount) / 100;

console.log(`Цена покупки составит ${totalCost} Q`);

// task 4

var balance = 52334224;
var wholesalePrice = 6500;

var remainBalance = balance % wholesalePrice;
productCount = (balance - remainBalance) / wholesalePrice;

console.log(`Мы можем закупить ${productCount} единиц товара, после закупки на счету останется ${remainBalance} Q`);
