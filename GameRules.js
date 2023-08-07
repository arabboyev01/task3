class GameRules {
  constructor(moves) {
    this.moves = moves;
    this.totalMoves = moves.length;
    this.halfMoves = Math.floor(this.totalMoves / 2);
  }

  determineWinner(userMove, computerMove) {
    const userIndex = this.moves.indexOf(userMove);
    const computerIndex = this.moves.indexOf(computerMove);

    if (userIndex === computerIndex) return "Draw";

    const relativeMove = (computerIndex - userIndex + this.totalMoves) % this.totalMoves;

    if (relativeMove > 0 && relativeMove <= this.halfMoves) return "Computer";
    else return "You";
  }

  getRandomMove() {
    const randomIndex = Math.floor(Math.random() * this.totalMoves);
    return this.moves[randomIndex];
  }
}

module.exports = GameRules;
