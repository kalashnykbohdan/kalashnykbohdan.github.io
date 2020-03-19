'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ulList = document.querySelector('#ingredients');

const createAllinList = document.createElement('div');

console.log(createAllinList);

ulList.append(createAllinList)

const createListLi = (array) => array
    .map((iteams) => {
        const createList = document.createElement('li');
        createList.textContent = iteams;
        createAllinList.append(createList);
    });

    createListLi(ingredients);

// function createUserProfile(name) {

//     name.forEach(iteams => {
//         const iteamList = document.createElement('li');
//         iteamList.textContent = iteams; 
//         createAllinList.appendChild(iteamList);
//         console.log(iteamList);
//         return iteamList;  
//     });
// }

// createListLi(ingredients);



// const ulIngredients = document.querySelector('#ingredients');
// console.log('ulIngredients:', ulIngredients);

// const createSiblingLi = document.createElement('li');

// const createListLi = (array) => array
//     .map((ingr) => {
//         const createLi = document.createElement('li');
//         createLi.classList = 'list';
//         createLi.textContent = ingr;
//         createSiblingLi.append(createLi);
//     });

// createListLi(ingredients);

// ulIngredients.append(createSiblingLi);