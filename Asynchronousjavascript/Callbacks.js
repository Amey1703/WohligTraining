// Synchronous callbacks
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12]

 let num = numbers.sort((a, b) => a-b)
let b = numbers.map(n => n*2)
let c = numbers.filter(n => n%2 === 0)

console.log({num, b, c})


// Asynchronous callbacks
function greet(name){
    console.log(`Hello ${name}!`)
}

setTimeout(greet,3000,"Vishwas")