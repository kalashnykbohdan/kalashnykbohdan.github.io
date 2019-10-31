'use strict';

// ==============================

// Task 5

function checkForSpam(str){
    let temp = str.toLowerCase();
    // let temp = str.split(' ');

    return temp.includes('spam') || temp.includes('sale');
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

