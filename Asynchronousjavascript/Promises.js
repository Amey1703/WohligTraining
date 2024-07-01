const promise = new Promise((resolve, reject) =>{
    resolve(1)
}).then((res) => res*2)
.then((res) => res**2)
.then((res) => console.log(res))
.catch((err) => console.log(err))

console.log(promise)

// example
const onFullfilment = (result) => {
    console.log(result);
    console.log('Start setting the table');
}

const onRejection = (error) => {
    console.log(error);
    console.log('Start cooking pasta');
}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Food truck found!');
        // reject("Food truck not found!")
    }, 2000);
});


promise1.then(onFullfilment, onRejection)
console.log(promise1);