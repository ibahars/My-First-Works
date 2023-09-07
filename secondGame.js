//TAŞ KAĞIT MAKAS OYUNU
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function game() {
  let options = ["stone", "paper", "scissors"];

  rl.question(
    "which one do you pick? stone, paper, scissors? : ",
    function (player_move) {
      const myrandomindex = Math.floor(Math.random() * options.length);
      const myrandomchoice = options[myrandomindex];

      if (player_move === myrandomchoice) {
        console.log("We tied!");
      } else if (
        (player_move === "stone" && myrandomchoice === "paper") ||
        (player_move === "paper" && myrandomchoice === "scissors") ||
        (player_move === "scissors" && myrandomchoice === "stone")
      ) {
        console.log("I won!");
      } else {
        console.log("You won!");
      }

      rl.question(
        "Would you like to play again? (yes/no):",
        function (player_answer) {
          if (player_answer === "yes") {
            game();
          } else {
            console.log("Goodbye! :)");
            rl.close();
          }
        }
      );
    }
  );
}
game();
