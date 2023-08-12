const Game = require("./Game");

const args = process.argv.slice(2);

if (args.length === 1 && args[0] === "help") {
  console.log("Help message: This is the help information.");
  process.exit(0);
}

if (args.length < 2) {
  console.log("Usage: node index.js choice1 choice2 ...");
  process.exit(1);
}

const game = new Game(args);
game.play();
