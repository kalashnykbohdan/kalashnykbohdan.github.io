'use strict';

// lesson 1

// ==============================

// Task 1

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

for (const element of Object.keys(user)) {
console.log(element);
}
// ======================================
console.log('================');

user.mod = 'happy';

console.log('mod - ' + user.mod);

user.hobby = 'javascript';

console.log('hobby - ' + user.hobby);

user.premium = false;

console.log('premium - ' + user.premium);
// ======================================
console.log('================');

for (const element of Object.entries(user)) {
    console.log(element);
  }