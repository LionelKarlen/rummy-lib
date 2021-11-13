import { Rummy } from "./Rummy";
import { Card } from "./Card";
import { Rank } from "./Rank";
import { Suit } from "./Suit";
import { Meld, Run } from "./Meld";
import { Util } from "./Util";
import { MeldType } from "./MeldType";

function debug() {
	let rummy = new Rummy();

	console.log(rummy.board.stock.cards[0].suit);

	console.log(new Card(Rank.QUEEN, Suit.CLUBS));

	let cards: Card[] = [
		new Card(Rank.QUEEN, Suit.CLUBS),
		new Card(Rank.KING, Suit.CLUBS),
		new Card(Rank.JACK, Suit.CLUBS),
	];
	console.log(Util.isValidMeld(MeldType.RUN, cards));
}

debug();
