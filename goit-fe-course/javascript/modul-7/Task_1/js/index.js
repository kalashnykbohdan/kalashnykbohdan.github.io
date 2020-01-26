'use strict';

const quantityCategories = document.querySelectorAll('.item').length;
console.log('В списке ' + quantityCategories + ' категории.');

const categories = document.querySelectorAll('.item');

categories.forEach((element) =>{
    const h2Name = element.querySelector('h2').textContent;
    const quantityLi = element.querySelectorAll('li').length;
    console.log(`h2: ${h2Name}, quantityLi: ${quantityLi}`);
})

