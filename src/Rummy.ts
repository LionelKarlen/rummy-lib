import { Player } from "./Player";
import { Board } from "./Board";
import { Util } from "./Util";

export class Rummy {
	players: Player[];
	board: Board;

	constructor() {
		this.players = [new Player(), new Player()];
		this.board = new Board();
		let cards = Util.generateDeck();
		Util.shuffleCards(cards);
		for (let i = 0; i < this.players.length; i++) {
			this.players[i].hand.cards = cards.splice(0, 10);
		}
		this.board.stock.cards = cards.splice(0, cards.length - 1);
		this.board.discard.cards = [cards[0]];
	}
}
