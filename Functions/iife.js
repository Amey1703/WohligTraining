(function addTogether() {
  var x = 20;
  var y = 20;
  var answer = x + y;
  console.log(answer);
  })();

(function checkBalance(balance) {
  if (balance > 0) {
    console.log("Balance is positive");
  } else if (balance <= 0) {
    console.log("Balance is 0");
    for(var i = 0; i <10; i++) {
    balance += 10;}
  }else{
    log("Balance is negative");
  }
  console.log( balance);
})(0)