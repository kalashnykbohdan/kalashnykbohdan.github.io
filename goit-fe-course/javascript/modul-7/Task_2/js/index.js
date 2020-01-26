'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const letsGo = document.querySelector('#ingredients');

const createAllinList = document.createElement('div');

createUserProfile(ingredients);

letsGo.append(createAllinList);


function createUserProfile(name) {

    name.forEach(iteam => {
        const iteamList = document.createElement('li');
        iteamList.textContent = iteam; 
        createAllinList.appendChild(iteamList);
        console.log(iteamList);
        return iteamList;  
    });
}
