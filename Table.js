class Table {
  constructor(choices) {
    this.choices = choices;
  }

  generateTable() {
    const n = this.choices.length;
    const table = new Array(n + 2)
      .fill(null)
      .map(() => new Array(n + 2).fill(""));

    table[0][0] = "Moves \\ Moves";
    for (let i = 0; i < n; i++) {
      table[0][i + 1] = this.choices[i];
      table[i + 1][0] = this.choices[i];
    }

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        table[i][j] = this.choices[(n + j - i) % n];
      }
    }

    return table;
  }
}

module.exports = Table;
