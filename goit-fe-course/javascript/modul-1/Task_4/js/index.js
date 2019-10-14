'use strict';

// ==============================

// Task 4

const credits = 23580;
let pricePerDroid = 3000;
let quantity;
let totalPrice;

quantity = prompt('Введите количество дронов для покупки', '');

if(quantity == null){
    totalPrice = 'Отменено пользователем!';
}
else{
    totalPrice = quantity * pricePerDroid;
    if(totalPrice > credits){
        alert('Недостаточно средств на счету!');
    }
    else{
        totalPrice = quantity * pricePerDroid;
        alert('Вы купили ' + quantity + ' дроидов, на счету осталось ' + (credits - totalPrice) + ' кредитов.');
    }
}

