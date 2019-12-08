'use strict';


// ==============================

// Task 3
class Storage {
  constructor(items = []){
    this.items = items;
    this.item = this.item;


  }

  getItems(){
    return this.items;
  }
  addItem(item){
    this.items.push(item);
  }
  removeItem(item){
    for(var i = this.items.length -1; i >= 0; i--) 
    {    
      if(this.items[i] === item) 
      {       
        this.items.splice(i, 1);    
      }
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Пролонгер',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

