'use strict';

// lesson 1

// ==============================

// Task 1

// console.log(Account.prototype.getInfo); // function


const Account = function(login, email){
  this.login = login;
  this.email = email;
  
  this.getInfo = function(){
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  }
}

const mango = new Account('Mangozedog','mango@dog.woof',);

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly','poly@mail.com',);

poly.getInfo(); // Login: Poly, Email: poly@mail.com

// console.log(Account.prototype.getInfo); // function
