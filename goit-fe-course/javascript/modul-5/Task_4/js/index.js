'use strict';


// ==============================

// Task 4

class StringBuilder{
  constructor(_value){
    this._value = _value;
  }

  get value(){
    return this._value;
  }
  append(str){
    this._value += str;
  }
  prepend(str){
    this._value = str + this._value;
  }
  pad(str){
    this._value += str;
    this._value = str + this._value;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='