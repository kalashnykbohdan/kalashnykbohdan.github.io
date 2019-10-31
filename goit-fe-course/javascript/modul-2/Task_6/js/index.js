'use strict';


// ==============================

// Task 6
let input;
const numbers = [];
let total = 0;

let iter = 0;

while(input !== null){
    input = prompt('Для выхода нажмите Cancel', '');
    
    if(input !== null){
        numbers[iter] = input;
        total += Number(numbers[iter]);
        iter++;
    } 
}
console.log('Общая сумма чисел равна ' + total);
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

