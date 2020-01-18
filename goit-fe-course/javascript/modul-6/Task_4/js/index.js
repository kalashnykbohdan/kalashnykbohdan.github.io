'use strict';
import users from './inside/users.js';

// ==============================

// Task 4

const getInactiveUsers = users => {
  // const  activeUsers = users.filter(user => !user.isActive);
  // const  activeUsers = users.filter(user => user.isActive);
  return users.filter(user => !user.isActive);

};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]