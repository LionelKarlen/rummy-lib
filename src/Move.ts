import { Stack, Hand } from "./Stack";
import { Card } from "./Card";
export abstract class Move {
	from: Stack;
	to: Stack;
	card: Card;

	abstract makeMove(): void;

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

	makeMove() {
		this.to.cards.push(
			this.from.cards.splice(this.from.cards.indexOf(this.card), 1)[0]
		);
	}
}
