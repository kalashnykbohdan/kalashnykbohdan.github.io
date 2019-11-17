'use strict';


// ==============================

// Task 2

const inventory = {
  items: ['Монорельса', 'Фильтр'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    inventory.items = inventory.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  switch(action){
    case 'add':
        inventory.add(itemName);
        break;
    case 'remove':
        inventory.remove(itemName);
        break;
    default: 'Нет такого действия'
  }
};

invokeInventoryAction('Аптечка', 'add');


console.log(inventory.items);

invokeInventoryAction('Фильтр', 'remove');


console.log(inventory.items);
