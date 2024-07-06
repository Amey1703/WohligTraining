const sum = (a, b) => {
  return a + b;
}

const myFunction = (input) => {
    if(typeof input === 'number'){
        throw new Error('Invalid input')
    }
}

const fetchData = (callback) =>{
    setTimeout(() =>{
        callback('peanut butter')
    });
}

module.exports = {sum, myFunction, fetchData};