'use strict';
import users from './inside/users.js';

//============================================

// Task 8

  const getUsersWithFriend  = (users, friendName) => 
    users
      .filter(users => users.friends.includes(friendName))
      .map(users => users.name)

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log("-------------------");
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//-----------------------------------------------------------------------------------------------------
