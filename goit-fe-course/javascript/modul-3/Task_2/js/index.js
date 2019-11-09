'use strict';


// ==============================

// Task 2
const obj = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

function countProps(obj){
    let objLength = Object.keys(obj).length;
    return objLength;
}

console.log(countProps(obj));