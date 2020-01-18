'use strict';
import users from './inside/users.js';
// lesson 1

// ==============================

// Task 1
// users[0].name

const getUserNames = users => {

  return users.map((users) => users.name);
};

console.log(getUserNames(users));
[ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
