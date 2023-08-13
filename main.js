const Game = require("./Game");

const args = process.argv.slice(2);

if (args.length === 1 && args[0] === "help") {
    console.log("Help message: This is the help information.");
    process.exit(0);
}

if (args.length === 1) {
    console.log('All choices should be valid strings.');
    process.exit(1);
}

function hasDuplicates(array) {
  return (new Set(array)).size !== array.length;
}

if (hasDuplicates(args)) {
    console.log('Repeated parameters: The same choice is repeated.');
    process.exit(0);
}

if (args.length < 5 && args.length % 2 !== 0) {
  console.log('Even number of parameters');
  process.exit(0);
}
if (!args.length) {
  console.log('Please fill that with valid moves');
  process.exit(0);
}

const game = new Game(args);
game.play();
