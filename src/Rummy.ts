import { Player } from "./Player";
import { Board } from "./Board";
import { Util } from "./Util";

export class Rummy {
	players: Player[];
	board: Board;

	constructor() {
		this.players = [new Player(), new Player()];
		this.board = new Board();
		console.log(this.board.stock.cards);
		let cards = Util.generateDeck();
		console.log(cards);
		this.board.stock.cards = cards;
	}
}
