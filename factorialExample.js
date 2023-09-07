const readline = require("readline");
const { camelCase } = require("change-case");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function factorial(newNumber) {
  if (newNumber === 1) {
    return 1;
  }

  return newNumber * factorial(newNumber - 1); //recursive function example
}

function calculating() {
  rl.question("Please write a number: ", function (userInput) {
    const result = factorial(parseInt(userInput));
    console.log(camelCase("Factorial of your number is ") + result);

    rl.close();
  });
}
calculating();
