import { Stack, Hand, Discard, MeldStack } from "./Stack";
import { Card } from "./Card";
import { StackType } from "./StackType";
import { Meld } from "./Meld";
import { Rank } from "./Rank";
import { Suit } from "./Suit";
import { Util } from "./Util";
export abstract class Move {
	from: Stack;
	to: Stack;
	card: Card;

	makeMove(): boolean {
		if (!this.isCardInStack(this.from, this.card)) {
			return false;
		}
		this.to.cards.push(
			this.from.cards.splice(this.from.cards.indexOf(this.card), 1)[0]
		);
		// this.postMoveLog();
		return true;
	}

	postMoveLog() {
		console.log("from:", this.from.cards.length);
		console.log("to:", this.to.cards.length);
	}
	isCardInStack(stack: Stack, card: Card) {
		if (
			stack.cards.findIndex(
				(c, i) => c.rank == card.rank && c.suit == card.suit
			) == -1
		) {
			console.log("failed");
			return false;
		}
		return true;
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
		Util.checkGameOver(from);
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
			if (!this.isCardInStack(this.from, card)) {
				return false;
			}
		}
		for (let card of this.meld.cards) {
			this.from.cards.splice(this.from.cards.indexOf(card), 1);
		}
		// this.postMoveLog();
		return true;
	}
}

export class LayMove extends Move {
	meld: Meld;
	constructor(from: Hand, to: MeldStack, card: Card, meld: Meld) {
		super(from, to, card);
		this.meld = meld;
	}

	makeMove() {
		if (!this.isCardInStack(this.from, this.card)) {
			return false;
		}
		let index = this.from.cards.indexOf(this.card);
		console.log("index", index);

		(this.to as MeldStack).melds[
			(this.to as MeldStack).melds.indexOf(this.meld)
		].addToMeld(this.from.cards.splice(index, 1)[0]);
		// this.postMoveLog();
		return true;
	}
}
