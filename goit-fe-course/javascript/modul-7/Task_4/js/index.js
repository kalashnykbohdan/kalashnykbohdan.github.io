'use strict';
let counterValue = 0;

const incrementButton = document.querySelector('button[data-action="increment"]')
incrementButton.addEventListener('click', increment())

const decrementButton = document.querySelector('button[data-action="decrement"]')
decrementButton.addEventListener('click', decrement())

function increment(){
  counterValue++;
  saveInSpan();
}

function decrement (){
  counterValue--;
  saveInSpan();
}

function saveInSpan(){
  const spanTeg = document.querySelector('#value');
  spanTeg.textContent = counterValue; 
}
