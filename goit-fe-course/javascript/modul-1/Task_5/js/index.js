'use strict';

// ==============================

// Task 5

let costDelivery;
let country;

country = prompt('Введите страну в которую будет произвидена доставка', '');

if(country !== null){
    country = country.toLowerCase();
}

switch(country){
    case 'китай':
        costDelivery = 100;
        country = 'Китай';
        break;

    case 'чили':
        costDelivery = 250;
        country = 'Чили';
        break;

    case 'австралия':
        costDelivery = 170;
        country = 'Австралия';
        break;

    case 'индия':
        costDelivery = 80;
        country = 'Индия';
        break;
        
    case 'ямайка':
        costDelivery = 120;
        country = 'Ямайка';
        break;

    default:
        alert('В вашей стране доставка не доступна');
}

if(costDelivery !== undefined){
    alert('Доставка в ' + country + ' будет стоить ' + costDelivery + ' кредитов');
}
