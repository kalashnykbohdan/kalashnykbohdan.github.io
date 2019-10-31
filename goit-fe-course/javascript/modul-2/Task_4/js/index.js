'use strict';


// ==============================

// Task 4

// let string = 'Curabitur ligula sapien, tincidunt non.';
let string = 'Vestibulum facilisis, purus nec pulvinar iaculis.';
// let string = 'Curabitur ligula sapien.';


function formatString(string){
    if(string.length > 40){
        string = string.substring(0, 37);
        console.log(string + '...');
    }
    else{
        console.log(string);
    }

}

formatString(string);

