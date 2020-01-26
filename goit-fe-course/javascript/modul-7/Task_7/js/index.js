'use strict';

const fontSize = document.querySelector('#font-size-control')
const textSpan = document.querySelector('#text')

fontSize.addEventListener('input', changeFontSize)

function changeFontSize(){
  let font_size = event.currentTarget.value;
  textSpan.style = `font-size: ${font_size}px`;
}


