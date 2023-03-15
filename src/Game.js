import { Chess } from "chess.js";
import { BehaviorSubject } from "rxjs";

const chess = new Chess();

const game = new BehaviorSubject({
  chess: chess.board(),
});

export default game;
