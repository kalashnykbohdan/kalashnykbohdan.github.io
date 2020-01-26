'use strict';

const input = document.querySelector('#validation-input')

input.addEventListener('change', event => {
  if(event.currentTarget.value.length < 8){

    // const input = document.querySelector('validation-input.invalid')
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
  else{
    input.classList.add('invalid');
  }
  // console.log(event.currentTarget.value);
})