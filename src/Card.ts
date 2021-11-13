import { Score } from "./Score";
import { Rank } from "./Rank";
import { Suit } from "./Suit";
import { Util } from "./Util";
export class Card {
	rank: Rank;
	suit: Suit;
	score: Score;

	constructor(rank: Rank, suit: Suit) {
		this.rank = rank;
		this.suit = suit;
		this.score = Util.getScore(rank);
	}
}
