'use strict';
import users from './inside/users.js';

//============================================

// Task 6

const getUsersWithAge = (users, min, max) => {
  return users.filter(users => (min < users.age && users.age< max))
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
