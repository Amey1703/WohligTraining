
// Implicit conversion - Coercion

let a = 10;
let b = "10";
console.log("Coercion conversion:");
console.log(a + b); // 1010
console.log(a*b); // 100


// Explicit conversion - Typecasting

let x = 10;
let y = String(x)
let z =  Number(y)

console.log("Typecsting conversion:");
console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);