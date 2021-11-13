import { Stack, Hand, Discard } from "./Stack";
import { Card } from "./Card";
export abstract class Move {
	from: Stack;
	to: Stack;
	card: Card;

	makeMove() {
		this.to.cards.push(
			this.from.cards.splice(this.from.cards.indexOf(this.card), 1)[0]
		);
		console.log("from:", this.from.cards.length);
		console.log("to:", this.to.cards.length);
	}

	constructor(from: Stack, to: Stack, card: Card) {
		this.from = from;
		this.to = to;
		this.card = card;
	}
}

export class PickupMove extends Move {
	constructor(from: Stack, to: Hand, card: Card) {
		super(from, to, card);
	}
}

export class PutdownMove extends Move {
	constructor(from: Hand, to: Discard, card: Card) {
		super(from, to, card);
	}
}
