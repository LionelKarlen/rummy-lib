import { Player } from "./Player";
import { Board } from "./Board";
import { Util } from "./Util";
import { Move } from "./Move";

export class Rummy {
	players: Player[];
	board: Board;
	isGameOver: boolean;

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
		this.isGameOver = false;
	}

	makeMove(player: Player, move: Move) {
		move.makeMove();
		if (this.board.stock.cards.length == 1) {
			console.log("stock empty",this.board.stock.cards.length);
			this.board.stock.cards = this.board.discard.cards.splice(
				0,
				this.board.discard.cards.length - 2
			);
			this.board.stock.cards = Util.shuffleCards(this.board.stock.cards);
			console.log("stock filled",this.board.stock.cards.length);
		}
		if (Util.checkGameOver(player.hand)) {
			this.handleGameOver();
		}
	}

	handleGameOver() {
		for (let i = 0; i < this.players.length; i++) {
			this.players[i].score = Util.calculateScore(this.players[i].hand);
		}
		this.isGameOver = true;
	}
}
