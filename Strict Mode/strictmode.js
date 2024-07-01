'use strict';
function myStrictFunction() {
    function nested(){
        return "And so am I!"
    }
    return `Hi! I'm strict mode function! ${nested}`; 
    
}

function myNotStrictFunction() {
    return "I'm not strict.";
}

console.log(myStrictFunction());
console.log(myNotStrictFunction());

// 

const obj = {};
Object.defineProperty(obj, 'readOnly',{writable:false, value:17})
console.log(obj.readOnly);
// obj.readOnly = 15

// Assignment to a getter-only property
const obj2 = {
    get x() {
      return 17;
    },
  };
// obj2.x = 5; // TypeError

const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16

// Cannot use duplicate assignment
function sum(a,a,c){
    return[a,a,c]
}
console.log(sum(1,2,3));