class GameTable {
  constructor(moves) {
    this.moves = moves;
    this.table = this.generateTable();
  }

  generateTable() {
    const numRows = this.moves.length + 1;
    const numCols = this.moves.length + 1;
    const table = new Array(numRows).fill(null).map(() => new Array(numCols));

    for (let i = 0; i < this.moves.length; i++) {
      table[0][i + 1] = this.moves[i];
      table[i + 1][0] = this.moves[i];
    }

    for (let i = 1; i < numRows; i++) {
      for (let j = 1; j < numCols; j++) {
        const relativeMove = (j - i + this.moves.length) % this.moves.length;

        if (relativeMove === 0) {
          table[i][j] = "Draw";
        } else if (relativeMove <= this.moves.length / 2) {
          table[i][j] = "Win";
        } else {
          table[i][j] = "Lose";
        }
      }
    }

    return table;
  }

  printTable() {
    for (let i = 0; i < this.table.length; i++) {
      console.log(this.table[i].join("\t"));
    }
  }
}

module.exports = GameTable;
