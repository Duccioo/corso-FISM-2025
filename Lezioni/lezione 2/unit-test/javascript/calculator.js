class Calculator {
  add(a, b) {
    return a + b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Impossibile dividere per zero");
    }
    return a / b;
  }
}

module.exports = Calculator;
