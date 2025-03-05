// Installazione: npm install --save-dev mocha chai

// Il file di test con Mocha e Chai
const Calculator = require("./calculator");
const expect = require("chai").expect;

describe("Calculator", function () {
  let calc;

  beforeEach(function () {
    calc = new Calculator();
  });

  it("should add two numbers correctly", function () {
    const result = calc.add(2, 3);
    expect(result).to.equal(5);
  });

  it("should divide two numbers correctly", function () {
    const result = calc.divide(10, 2);
    expect(result).to.equal(5);
  });

  it("should throw error when dividing by zero", function () {
    // Verifichiamo che una funzione sollevi un'eccezione
    expect(function () {
      calc.divide(10, 0);
    }).to.throw("Impossibile dividere per zero");
  });
});
