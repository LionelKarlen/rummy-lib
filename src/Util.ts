import { Rank } from "./Rank";
import { Suit } from "./Suit";
import { Card } from './Card';

export class Util {
	static generateDeck(): Card[] {
		let cards: Card[]=[];
		for (const suit in Suit) {
			for (const rank in Rank) {
				cards.push(new Card(
					rank as unknown as Rank,
					suit as unknown as Suit
				))
			}
		}
		return cards;
	}
}
