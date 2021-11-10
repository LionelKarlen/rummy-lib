import { Rank } from "./Rank";
import { Suit } from "./Suit";
export class Card {
	rank: Rank;
	suit: Suit;

	constructor(rank: Rank, suit: Suit) {
		this.rank = rank;
		this.suit = suit;
	}
}
