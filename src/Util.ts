import { Rank } from "./Rank";
import { Suit } from "./Suit";
import { Card } from "./Card";
import { Run, Book } from "./Meld";
import { MeldType } from "./MeldType";
import { Score } from "./Score";
import { Hand } from "./Stack";

export class Util {
	static generateDeck(): Card[] {
		let cards: Card[] = [];
		for (let i = 0; i < 4; i++) {
			for (const rank in Rank) {
				if (typeof Rank[rank] !== "number") {
					continue;
				}
				cards.push(
					new Card(
						Rank[rank] as unknown as Rank,
						i as unknown as Suit
					)
				);
			}
		}
		console.log(cards.length);
		return cards;
	}

	static shuffleCards(cards: Card[]) {
		for (let i = cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[cards[i], cards[j]] = [cards[j], cards[i]];
		}
		return cards;
	}

	static sortCards(cards: Card[]): Card[] {
		return cards.sort((a, b) => a.rank - b.rank);
	}

	static getScore(rank: Rank) {
		// console.log("Rank:",rank,Rank[rank]);
		let score: Score;
		if (rank < 10) {
			score = Object.values(Score)[rank + 10] as unknown as Score;
		} else if (rank == 10) {
			score = Score.TEN;
		} else if (rank == 11) {
			score = Score.JACK;
		} else if (rank == 12) {
			score = Score.QUEEN;
		} else {
			score = Score.KING;
		}
		// console.log(score);
		return score;
	}

	static calculateScore(hand: Hand) {
		let score = 0;
		for (let card of hand.cards) {
			score += card.score;
		}
		return score;
	}

	static isValidMeld(meldType: MeldType, cards: Card[]) {
		cards = this.sortCards(cards);
		if (cards.length < 3) return false;
		let meld =
			meldType == MeldType.RUN
				? new Run([cards[0]])
				: new Book([cards[0]]);
		for (let i = 1; i < cards.length; i++) {
			if (!meld.isValidAddition(cards[i])) return false;
			meld.addToMeld(cards[i]);
		}
		return true;
	}

	static checkGameOver(hand: Hand) {
		return hand.cards.length == 0;
	}
}
