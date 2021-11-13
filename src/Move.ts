import { Stack, Hand, Discard, MeldStack } from "./Stack";
import { Card } from "./Card";
import { StackType } from "./StackType";
import { Meld } from "./Meld";
import { Rank } from "./Rank";
import { Suit } from "./Suit";
export abstract class Move {
	from: Stack;
	to: Stack;
	card: Card;

	makeMove() {
		this.to.cards.push(
			this.from.cards.splice(this.from.cards.indexOf(this.card), 1)[0]
		);
		this.postMoveLog();
	}

	postMoveLog() {
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
		if (from.type == StackType.DISCARD) {
			this.to.cards[0].isDiscard = true;
		}
	}
}

export class PutdownMove extends Move {
	constructor(from: Hand, to: Discard, card: Card) {
		super(from, to, card);
		for (let i = 0; i < this.from.cards.length; i++) {
			this.from.cards[i].isDiscard = false;
		}
	}
}

export class MeldMove extends Move {
	meld: Meld;
	constructor(from: Hand, to: MeldStack, meld: Meld) {
		let card: Card = new Card(Rank.ACE, Suit.CLUBS);
		super(from, to, card);
		this.meld = meld;
	}

	makeMove() {
		(this.to as MeldStack).melds.push(this.meld);
		for (let card of this.meld.cards) {
			this.from.cards.splice(this.from.cards.indexOf(card), 1);
		}
	}
}
