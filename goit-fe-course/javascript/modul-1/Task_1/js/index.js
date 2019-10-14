'use strict';

// lesson 1

// ==============================

// Task 1

const name = 'Генератор защитного поля';
let price = 1000;

// console.log('Name = ', name);
// console.log('Price = ', price);

console.log('Выбран «' + name + '» цена за штуку ' + price + ' кредитов');

price = 2000;

console.log('Выбран «' + name + '» цена за штуку ' + price + ' кредитов');

// ==============================

// Task 2

// const total = 100;
// const ordered = 10;
// // const ordered = 20;
// // const ordered = 80;
// // const ordered = 130;

// if(ordered > total){
//     console.log('На складе недостаточно твоаров!');
// }
// else{
//     console.log('Заказ оформлен, с вами свяжется менеджер');
// }

// ==============================

// Task 3
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// message = prompt('Введите пароль', 'jqueryismyjam');

// switch(message){
//     case ADMIN_PASSWORD:
//         message = 'Добро пожаловать!'; 
//         break;
//     case null:
//         message = 'Отменено пользователем!'; 
//         break;
//     default:
//         message = 'Доступ запрещен, неверный пароль!'; 
// }

// alert(message);

// ==============================

// Task 4

// const credits = 23580;
// let pricePerDroid = 3000;
// let quantity;
// let totalPrice;

// quantity = prompt('Введите количество дронов для покупки', '');

// if(quantity == null){
//     totalPrice = 'Отменено пользователем!';
// }
// else{
//     totalPrice = quantity * pricePerDroid;
//     if(totalPrice > credits){
//         alert('Недостаточно средств на счету!');
//     }
//     else{
//         totalPrice = quantity * pricePerDroid;
//         alert('Вы купили ' + quantity + ' дроидов, на счету осталось ' + (credits - totalPrice) + ' кредитов.');
//     }
// }

// ==============================

// Task 5

// let costDelivery;
// let country;

// country = prompt('Введите страну в которую будет произвидена доставка', '');

// if(country !== null){
//     country = country.toLowerCase();
// }

// switch(country){
//     case 'китай':
//         costDelivery = 100;
//         country = 'Китай';
//         break;

//     case 'чили':
//         costDelivery = 250;
//         country = 'Чили';
//         break;

//     case 'австралия':
//         costDelivery = 170;
//         country = 'Австралия';
//         break;

//     case 'индия':
//         costDelivery = 80;
//         country = 'Индия';
//         break;
        
//     case 'ямайка':
//         costDelivery = 120;
//         country = 'Ямайка';
//         break;

//     default:
//         alert('В вашей стране доставка не доступна');
// }

// if(costDelivery !== undefined){
//     alert('Доставка в ' + country + ' будет стоить ' + costDelivery + ' кредитов');
// }
// ==============================

// Task 6

// let input;
// let total = 0;

// while(input !== null){
//     input = prompt('Для выхода нажмите Cancel', '');
//     // total = total + 1;
//     total++;
// }
// alert('Общая сумма чисел равна ' + total);

