function funcWithDefault(a = 55) {
    arguments[0] = 99; // updating arguments[0] does not also update a
    console.log(a);
  }
  funcWithDefault(10); // 10
  
  function funcWithDefault2(a = 55) {
    a = 99; // updating a does not also update arguments[0]
    console.log(arguments[0]);
  }
  funcWithDefault2(10); // 10
  
  // An untracked default parameter
  function funcWithDefault3(a = 55) {
    console.log(arguments[0]);
    console.log(arguments.length);
  }
  funcWithDefault3(); // undefined; 0
  