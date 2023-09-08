//LOOP EXERCİSES
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const computerNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
  rl.question("guess a number between 1 to 10: ", function (userGuess) {
    const guess = parseInt(userGuess);

    if (isNaN(guess) || guess < 1 || guess > 10) {
      console.log("Please write a valid number ");
      guessNumber();
    } else if (guess === computerNumber) {
      console.log("congrats, you guess it right!");
      rl.close();
    } else if (guess < computerNumber) {
      console.log("you should guess a bigger number!");
      guessNumber();
    } else {
      console.log("you should guess a smaller number!");
      guessNumber();
    }
  });
}

guessNumber();
