'use strict';

// ==============================

// Task 3

let string = 'The quick brown fox jumped over the lazy dog'; // 'jumped'

// let string = 'Google do a roll'; // 'Google'

// let string = 'May the force be with you'; // 'force'

function findLongestWord(string){

    let temp = string.split(' ');
    let longestWord = temp[0];

    for(let i = 0; i < temp.length - 1; i++){
        if(temp[i].length >= longestWord.length){
            longestWord = temp[i];
            // console.log(longestWord);
        }
    }
    
    return longestWord;

}

console.log(findLongestWord(string));

