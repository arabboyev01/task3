const UserInterface = require("./UserInterface");
const GameRules = require("./GameRules");
const KeyGenerator = require("./KeyGenerator");
const HMACGenerator = require("./HMACGenerator");
const moves = process.argv.slice(2);

const uniqueMoves = new Set(moves);
if (uniqueMoves.size !== moves.length) {
  console.log("Error: Parameters should not be repeated.");
  process.exit(1);
}

if (moves.length < 3 || moves.length % 2 === 0) {
  console.log("Error: You must provide an odd number of non-repeating moves.");
  process.exit(1);
}

const gameRules = new GameRules(moves);
const key = KeyGenerator.generateKey();
const computerMove = gameRules.getRandomMove();
const hmacGenerator = new HMACGenerator(key);
const hmac = hmacGenerator.calculateHMAC(computerMove);
const userInterface = new UserInterface(gameRules, hmacGenerator, hmac);
console.log("Computer move:", computerMove);
userInterface.start();
