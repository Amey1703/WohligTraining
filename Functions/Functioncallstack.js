function greeting() {
    sayHi();
  }
  function sayHi() {
    return "Hi!";
  }
  
  // Invoke the `greeting` function
  greeting();
  
  /**
   * Ignore all the functions until it reaches greeting()
   * Add greeting to call stack
   * Executes the `greeting` function
   * get to sayHi()
   * add sayHi to call stack
   * Executes the `sayHi` function
   * Remove sayHi from call stack
   * Completes execution of the `greeting` function
   * Removes the `greeting` function
   * 
   */