function greet1(){
    return "Hello"
}
console.log(greet1())

async function greet2(){
    return "Hello"
}

console.log(greet2())

// 

// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 2000)
//     });
  
//     let result = await promise; // wait until the promise resolves (*)
//     console.log(result); // "done!"

//   }
  
//   f();

//   

 function resolveHello(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hello!");
        }, 2000);
    });
}

function resolveWorld(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("world!");
        }, 1000);
    });
}

function parallel(){
    Promise.all([
        (async () => console.log(await resolveHello()))(),
        (async () => console.log(await resolveWorld()))(),
    ])
    console.log("Finally");
}
parallel();