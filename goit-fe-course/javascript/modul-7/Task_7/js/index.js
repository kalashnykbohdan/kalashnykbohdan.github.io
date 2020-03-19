'use strict';

const fontSize = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

fontSize.addEventListener('input', changeFontSize)

function changeFontSize(){
  let font_size = event.currentTarget.value;
  text.style.fontSize = `${font_size}px`;
}


