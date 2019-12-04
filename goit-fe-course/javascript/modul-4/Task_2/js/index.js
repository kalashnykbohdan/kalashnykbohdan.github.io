'use strict';


// ==============================

// Task 2

// const inventory = {
//   items: ['Монорельса', 'Фильтр'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     inventory.items = inventory.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function(itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   switch(action){
//     case 'add':
//         inventory.add(itemName);
//         break;
//     case 'remove':
//         inventory.remove(itemName);
//         break;
//     default: 'Нет такого действия'
//   }
// };

// invokeInventoryAction('Аптечка', 'add');


// console.log(inventory.items);

// invokeInventoryAction('Фильтр', 'remove');


// console.log(inventory.items);

// ==============================
const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

const pushInventoryAdd = inventory.add.bind(inventory);
const pushInventoryRemove = inventory.remove.bind(inventory);

invokeInventoryAction('Medkit', pushInventoryAdd);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', pushInventoryRemove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']