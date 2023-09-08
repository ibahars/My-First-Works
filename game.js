const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let point = 0;
rl.question("What is the highest mountain on Earth: ", function (answer1) {
  if (answer1.toLowerCase() === "everest") {
    point = point + 10;
    console.log("Your answer is correct!");
  } else {
    console.log("Your answer is wrong.");
  }

  rl.question("Who is the writer of 'Romeo and Juliet': ", function (answer2) {
    if (answer2.toLowerCase() === "shakespeare") {
      point = point + 8;
      console.log("Your answer is correct! Your total point is " + point + ".");
    } else {
      console.log("Your answer is wrong. Your total point is " + point + ".");
    }

    rl.close();
  });
});
