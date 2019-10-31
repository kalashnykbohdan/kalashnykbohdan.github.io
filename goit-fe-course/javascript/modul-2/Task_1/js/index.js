'use strict';

// lesson 1

// ==============================

// Task 1
const array = ['Mango', 'Poly', 'Ajax'];
// const array = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// const array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

logItems(array);

function  logItems(array){
    for(let i = 0; i < array.length; i++){
        console.log((i + 1) + ' - ' + (array[i])); 
    }
}

