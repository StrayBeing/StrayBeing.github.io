
const readline = require("readline");
const math1 = require("./mathOperations1");
const MyMathModule2 = require("./mathOperations2");
const math2 = new MyMathModule2();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Wybierz moduł:\n1. math1 (exports)\n2. math2 (OOP)");
rl.question("Wprowadź (1 lub 2): ", function (moduleChoice) {
  rl.question("Wpisz pierwszą liczbę do obliczenia: ", function (num1) {
    rl.question("Wpisz drugą liczbę do obliczenia: ", function (num2) {
      rl.question("Wybierz operację (dodaj, odejmij, pomnóż, podziel, potęga): ", function (operation) {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        let selectedModule = moduleChoice === "1" ? math1 : math2;

        let result;
        switch (operation.toLowerCase()) {
          case "dodaj":
            result = selectedModule.add(a, b);
            console.log(`Suma liczb ${a} + ${b} = ${result}`);
            break;
          case "odejmij":
            result = selectedModule.subtract(a, b);
            console.log(`Różnica liczb ${a} - ${b} = ${result}`);
            break;
          case "pomnóż":
            result = selectedModule.multiply(a, b);
            console.log(`Iloczyn liczb ${a} * ${b} = ${result}`);
            break;
          case "podziel":
            result = selectedModule.divide(a, b);
            console.log(`Iloraz liczb ${a} / ${b} = ${result}`);
            break;
          case "potęga":
            result = selectedModule.power(a, b);
            console.log(`Potęga liczby ${a} do ${b} = ${result}`);
            break;
          default:
            console.log("Nieznana operacja. Wybierz: dodaj, odejmij, pomnóż, podziel, lub potęga.");
            rl.close();
            return;
        }
        rl.close();
      });
    });
  });
});
rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});
