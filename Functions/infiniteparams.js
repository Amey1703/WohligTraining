function saveAddress(street, city, state) {
    console.log(street, city, state);
  }
  
  saveAddress('123 Street', 'NYC', 'New York');

//   

function saveAddress(street, city, state, ...restAddress){
    console.log(street, city, state, restAddress);
  
}

saveAddress(
    '123 Street', 
    'NYC', 
    'New York', 
    'Address 1', 
    '123456', 
    'US'
);

// '123 Street' 'NYC' 'Address 1 123456 US'

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  console.log(factorial(5)); // 120
  