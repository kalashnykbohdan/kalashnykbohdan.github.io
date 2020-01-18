'use strict';
import users from './inside/users.js';

// ==============================


// Task 2

    const getUsersWithEyeColor = (users, color) => {
     const usersColor = users.filter(users => users.eyeColor === color);
     return usersColor.map(usersColor => usersColor.name);
    }


console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]