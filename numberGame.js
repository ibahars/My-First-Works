//FİNDİNG THE BİGGEST NUMBER EXERCİSE
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = "";
rl.question(
  "please write 3 numbers with emptys:",
  function findlargestnumber(numbers) {
    numbers = numbers.split(" ").map(Number);

    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
    console.log("biggest number is:" + largest);
    rl.close();
  }
);
