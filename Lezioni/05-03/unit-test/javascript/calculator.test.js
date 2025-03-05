const Calculator = require("./calculator");

describe("Calculator", () => {
  let calc;

  beforeEach(() => {
    // Questo viene eseguito prima di ogni test
    calc = new Calculator();
  });

  test("should add two numbers correctly", () => {
    // Arrange e Act
    const result = calc.add(2, 3);

    // Assert
    expect(result).toBe(5);
  });

  test("should divide two numbers correctly", () => {
    const result = calc.divide(10, 2);
    expect(result).toBe(5);
  });

  test("should throw error when dividing by zero", () => {
    // Verifichiamo che una funzione sollevi un'eccezione
    expect(() => calc.divide(10, 0)).toThrow("Impossibile dividere per zero");
  });
});
