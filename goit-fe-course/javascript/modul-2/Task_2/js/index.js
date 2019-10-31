'use strict';


// ==============================

// Task 2

let message = 'Proin sociis natoque et magnis parturient montes mus';
const pricePerWord = 10;

function calculateEngravingPrice(message, pricePerWord){
    const massWord = message.split(' ');
    return (massWord.length * pricePerWord);
    // return massWord;
}

console.log('Full cost engraving decoration ' + calculateEngravingPrice(message, pricePerWord));

