'use strict';

// ==============================

// Task 3
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = prompt('Введите пароль', 'jqueryismyjam');

switch(message){
    case ADMIN_PASSWORD:
        message = 'Добро пожаловать!'; 
        break;
    case null:
        message = 'Отменено пользователем!'; 
        break;
    default:
        message = 'Доступ запрещен, неверный пароль!'; 
}

alert(message);
