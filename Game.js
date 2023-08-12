const readline = require("readline");
const Rules = require("./Rules");
const Table = require("./Table");
const Crypto = require("./Crypto");

class Game {
  constructor(choices) {
    this.choices = choices;
    this.rules = new Rules(choices);
    this.table = new Table(choices);
    this.crypto = new Crypto();
    this.key = this.crypto.generateKey();
  }

  displayTable() {
    const table = this.table.generateTable();
    console.table(table);
  }

  play() {
    console.log(
      `Available moves:\n${this.choices
        .map((choice, index) => `${index + 1} - ${choice}`)
        .join("\n")} \n0 - exit\n? - help`
    );

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Enter your move: ", (userChoice) => {
      rl.close();

      if (userChoice === "0") {
        console.log("You are exiting the game!");
        process.exit(0);
      } else if (userChoice === "?") {
        this.displayTable();
        this.play();
      } else {
        const index = parseInt(userChoice) - 1;
        if (index >= 0 && index < this.choices.length) {
          const userMove = this.choices[index];
          const computerMove =
            this.choices[Math.floor(Math.random() * this.choices.length)];

          const userHMAC = this.crypto.calculateHMAC(this.key, userMove);
          console.log(`Computer's move: ${computerMove}`);

          const result = this.rules.determineWinner(userMove, computerMove);
          console.log(result);
          console.log(`Your HMAC: ${userHMAC}`);
        } else {
          console.log("Invalid choice. Please choose a valid option.");
          this.play();
        }
      }
    });
  }
}

module.exports = Game;
