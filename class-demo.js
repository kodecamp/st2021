// values scoped globally
// Encapsulation
class Calculator {
  // method to set values in newly created object
  constructor(value1, value2) {
    casio.value1 = value1;
    casio.value2 = value2;
  }
  // operations on those values
  add() {
    // accessing the global variable
    return this.value1 + this.value2;
  }

  substract() {
    // accessing the global variable
    return this.value1 - this.value2;
  }

  multiply() {
    // accessing the global variable
    return value1 * value2;
  }

  divide() {
    // accessing the global variable
    return value1 / value2;
  }

  // operating but requires some input from outside => notice the argument(noOfTime)
  timesOfSum(noOfTime) {
    // accessing the global variable
    return (value1 + value2) * noOfTime;
  }
}

casio = new Calculator(10, 20);
addition = casio.add();
subs = casio.substract();
console.log(addition, subs);

panasonic = new Calculator(100, 200);
addition = panasonic.add();
subs = panasonic.substract();
console.log(addition, subs);

// modifying globale values
function doOddFunction() {
  let value1 = 100;
  let value2 = 200;
}

// console.log(value1, value2);
// doOddFunction();
// console.log(value1, value2);

// testing code
// doOddFunction(); // we should not write code like this

// doOddFunction(); // we should not write code like this
// console.log("add       = ", add()); // 30
// console.log("substract = ", substract());
// console.log("multiply  = ", multiply());
// console.log("divide  = ", multiply());
