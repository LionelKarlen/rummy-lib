import { Rummy } from "./Rummy";
import { Card } from "./Card";
import { Score } from "./Score";
import { Suit } from "./Suit";
import { Meld, Run } from "./Meld";
import { Util } from "./Util";
import { MeldType } from "./MeldType";
import { Rank } from "./Rank";
import { Hand, Stack, Stock } from "./Stack";
import { StackType } from "./StackType";
import { PickupMove, Move } from "./Move";

function debug() {
	let rummy = new Rummy();

	console.log(rummy.board.stock.cards[0].suit);

	let cards: Card[] = [
		new Card(Rank.QUEEN, Suit.CLUBS),
		new Card(Rank.KING, Suit.CLUBS),
		new Card(Rank.JACK, Suit.CLUBS),
	];
	console.log(Util.isValidMeld(MeldType.RUN, cards));

	let hand: Hand = new Hand();
	hand.cards.push(cards[2]);
	console.log("hand", hand.cards);
	let stack: Stack = new Stock();
	stack.cards.push(cards[0]);
	stack.cards.push(cards[1]);
	console.log("stack", stack.cards);
	let move: PickupMove = new PickupMove(stack, hand, stack.cards[0]);
	move.makeMove();
	console.log("hand after", hand.cards);
	console.log("stack after", stack.cards);
}

debug();
