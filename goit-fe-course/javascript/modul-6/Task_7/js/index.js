'use strict';
import users from './inside/users.js';

//============================================

// Task 7

//const calculateTotalBalance = users => users.reduce((acc, value) => acc + value.balance, 0);
const calculateTotalBalance = users => {
  return users.reduce((acc, value) => acc + value.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916