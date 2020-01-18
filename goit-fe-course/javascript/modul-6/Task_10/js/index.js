'use strict';
import users from './inside/users.js';

//============================================

// Task 10

const getSortedUniqueSkills = users => 
  users
  .reduce((allSkills, value) => {
    allSkills.push(...value.skills);
    return allSkills;
  }, [])
  .filter((item, index, skills) => skills.indexOf(item) === index)
  .sort()

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]