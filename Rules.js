class Rules {
  constructor(choices) {
    this.choices = choices;
  }

  determineWinner(playerMove, computerMove) {
    const playerIndex = this.choices.indexOf(playerMove);
    // const computerIndex = this.choices.indexOf(computerMove);

    const movesInCircle = this.choices
      .slice(playerIndex + 1)
      .concat(this.choices.slice(0, playerIndex));
    const halfIndex = Math.floor(movesInCircle.length / 2);

    if (movesInCircle.slice(0, halfIndex).includes(computerMove)) {
      return "Player wins!";
    } else if (playerMove === computerMove) {
      return "It's a tie!";
    } else {
      return "Computer wins!";
    }
  }
}

module.exports = Rules;