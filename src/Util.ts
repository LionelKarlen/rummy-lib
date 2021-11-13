import { Rank } from "./Rank";
import { Suit } from "./Suit";
import { Card } from "./Card";
import { Run, Book } from "./Meld";
import { MeldType } from "./MeldType";

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

	static sortCards(cards: Card[]): Card[] {
		return cards.sort((a, b) => a.rank - b.rank);
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
		}
		return true;
	}
}
