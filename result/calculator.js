class Arithmetic {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }
  subtract() {
    return this.a - this.b;
  }

  multiply() {
    return this.a * this.b;
  }

  divide() {
    if (this.b != 0) {
      return this.a / this.b;
    }
    return "divided by zero !!!!";
  }
};

//const op = new Arithmetic(100,40);
//console.log(`Addition -> ${op.add()}`);
//console.log(`subtraction -> ${op.subtract()}`);
//console.log(`Multiplication -> ${op.multiply()}`);

module.exports = Arithmetic;
