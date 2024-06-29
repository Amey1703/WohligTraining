try {
    foo.bar();
  } catch (e) {
    if (e instanceof EvalError) {
      console.error(`${e.name}: ${e.message}`);
    } else if (e instanceof RangeError) {
      console.error(`${e.name}: ${e.message}`);
    }
    // etc.
    else {
      // If none of our cases matched leave the Error unhandled
      throw e;
    }
  }

