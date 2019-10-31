'use strict';

// ==============================

// Task 7

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {

    if(login.length >= 4 && 16 >= login.length){
        return true;
    }

    return false;
};

const isLoginUnique = function(allLogins, login) {
    for(let i = 0; i < allLogins.length; i++){

        if(allLogins[i] == login){
            
            return false;
        }
    }

    return true;
};

const addLogin = function(allLogins, login) {
      if(isLoginValid(login) == true){
        if(isLoginUnique(allLogins, login) == true){
            allLogins[allLogins.length] = login;
            console.log('Логин успешно добавлен! ' + allLogins[allLogins.length-1]);
        }
        else{
            console.log('Такой логин уже используется!');
        }
    }else{
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    }
};

// Вызовы функции для проверки
// addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

