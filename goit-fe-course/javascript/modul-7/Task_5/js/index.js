'use strict';

const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')

input.addEventListener('input', handleInputChange)

function handleInputChange(event){
  if(span.textContent === '' || event.currentTarget.value === ''){
    span.textContent = 'незнакомец';
  }
  else{
    span.textContent = event.currentTarget.value;
  }
}