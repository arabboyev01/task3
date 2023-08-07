const readline = require("readline");

class UserInterface {
  constructor(gameRules, hmacGenerator, hmac) {
    this.gameRules = gameRules;
    this.hmacGenerator = hmacGenerator;
    this.hmac = hmac;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  start() {
    console.log("Available moves:");
    this.gameRules.moves.forEach((move, index) => {
      console.log(`${index + 1} - ${move}`);
    });

    this.rl.question("Enter your move: ", (userInput) => {
      const userMove = this.gameRules.moves[userInput - 1];

      if (!userMove) {
        console.log("Invalid move.");
        this.rl.close();
        return;
      }

      if (userMove === "exit") {
        console.log("You exited the game.");
      } else if (userMove === "help") {
        console.log("You are getting help");
      } else {
        const computerMove = this.gameRules.getRandomMove();
        const winner = this.gameRules.determineWinner(userMove, computerMove);
        
        const userHMAC = this.hmacGenerator.calculateHMAC(userMove);
      
        console.log(`Your move: ${userMove}`);
        console.log(`Computer move: ${computerMove}`);
        console.log(
          `${winner === "Draw" ? "It's a draw!" : `${winner} wins!`}`
        );
        console.log(`HMAC key: ${this.hmac}`);

        this.rl.close();
      }
    });
  }
}

module.exports = UserInterface;
