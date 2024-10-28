const myMathModule1 = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : "Nie można dzielić przez zero",
    power: (a, b) => Math.pow(a, b),
  };
  
  module.exports = myMathModule1;