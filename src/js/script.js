const btnStart = document.querySelector(".btn-start");
const board = document.querySelector(".board__buttons");
const boardBtns = document.querySelectorAll(".board__buttons button");

console.log(boardBtns);

class Game {
  constructor() {
    btnStart.addEventListener("click", this._initGame.bind(this));
    // this._initGame();
  }

  _initGame() {
    // Select the level
    const levelSelect = document.querySelectorAll(
      ".board__controls-level input"
    );
    levelSelect.forEach((l) => {
      if (l.checked) this.level = l.value;
    });

    // Reset the sequence
    this.sequence = [];
  }
}

const game = new Game();
