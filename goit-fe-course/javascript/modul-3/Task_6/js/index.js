'use strict';


// ==============================

// Task 6

function calculateTotalPrice(arr, productName){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name == productName){
            return arr[i].price * arr[i].quantity;
        }
        
    }
}

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  
  console.log(calculateTotalPrice(products, 'Радар')); // 5200
  
  console.log(calculateTotalPrice(products, 'Дроид')); // 2800