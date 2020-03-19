'use strict';
let counterValue = 0;

const incrementButton = document.querySelector('button[data-action="increment"]')
incrementButton.addEventListener('click', increment)

const decrementButton = document.querySelector('button[data-action="decrement"]')
decrementButton.addEventListener('click', decrement)

const value = document.querySelector('#value');

function increment(){
  counterValue++;
  // console.log(counterValue);
  value.textContent = counterValue; 
}

function decrement (){
  counterValue--;
  // console.log(counterValue);
  value.textContent = counterValue; 
}


