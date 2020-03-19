'use strict';

const categories = document.querySelector('#categories');

const quantityCategories = categories.children.length;
console.log('В списке ' + quantityCategories + ' категории.');

const str = [...categories.children]
.map(e => `${e.children[0].textContent}: ${e.children[1].children.length}`)
.join('\n');
console.log(str);

console.log(categories);

// const quantityCategories = document.querySelectorAll('.item').length;
// console.log('В списке ' + quantityCategories + ' категории.');

// const categories = document.querySelectorAll('.item');

// categories.forEach((element) =>{
//     const h2Name = element.querySelector('h2').textContent;
//     const quantityLi = element.querySelectorAll('li').length;
//     console.log(`h2: ${h2Name}, quantityLi: ${quantityLi}`);
// })