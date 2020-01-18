'use strict';
import users from './inside/users.js';

// ==============================

// Task 3

const getUsersWithGender = (users, gender) => {
  const usersGender = users.filter(users => users.gender === gender);
  return usersGender.map(usersGender => usersGender.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]