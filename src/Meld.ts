import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { Card } from "./Card";
import { MeldType } from "./MeldType";
import { Rank } from "./Rank";
import { Suit } from "./Suit";
import { Util } from "./Util";
export abstract class Meld {
	cards: Card[];
	type: MeldType;

	constructor(cards: Card[], type: MeldType) {
		this.cards = cards;
		this.type = type;
	}

	abstract isValidAddition(card: Card): boolean;
	addToMeld(card: Card) {
		this.cards.push(card);
		this.cards = Util.sortCards(this.cards);
	}
}

export class Book extends Meld {
	rank: Rank;

	constructor(cards: Card[]) {
		super(cards, MeldType.BOOK);
		this.rank = cards[0].rank;
	}

	isValidAddition(card: Card): boolean {
		return card.rank === this.rank;
	}
}

export class Run extends Meld {
	suit: Suit;

	constructor(cards: Card[]) {
		super(cards, MeldType.RUN);
		this.suit = cards[0].suit;
	}

	isValidAddition(card: Card): boolean {
		return (
			card.suit == this.suit &&
			(card.rank == this.cards[this.cards.length - 1].rank + 1 ||
				card.rank == this.cards[this.cards.length - 1].rank)
		);
	}
}
