import { Chess } from "chess.js";
import { BehaviorSubject } from "rxjs";

const chess = new Chess();

const game = new BehaviorSubject();

export default game;

export const move = (from, to) => {
  const moveProcess = chess.move({ from, to });
  if (moveProcess) {
    updateGame();
  }
};

const updateGame = () => {
  const gameOver = chess.isGameOver();
  game.next({
    chess: chess.board(),
    gameOver,
    result: gameOver ? gameResult() : null,
  });
};

const gameResult = () => {
  if (chess.isCheckmate()) {
    const winner = chess.turn() === "b" ? "White" : "Black";
    return `is Checkmate - Winner : ${winner} `;
  } else if (chess.isDraw()) {
    let result = "50 Move Rule";
    if (chess.isStalemate()) {
      result = "Dead end Loop";
    } else if (chess.isThreefoldRepetition()) {
      result = "Repeat";
    } else if (chess.isInsufficientMaterial()) {
      result = "is Insufficient Material";
    }
    return result;
  } else {
    return "unknown state";
  }
};

export const init = () => {
  updateGame();
};
