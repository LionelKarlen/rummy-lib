import { Rummy } from "./Rummy";
import { Card } from "./Card";
import { Score } from "./Score";
import { Suit } from "./Suit";
import { Meld, Run, Book } from "./Meld";
import { Util } from "./Util";
import { MeldType } from "./MeldType";
import { Rank } from "./Rank";
import { Hand, Stack, Stock } from "./Stack";
import { StackType } from "./StackType";
import { PickupMove, Move, PutdownMove, MeldMove } from "./Move";

function test() {
	let rummy = new Rummy();

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

function debug() {
	let rummy = new Rummy();

	let pickup = new PickupMove(
		rummy.board.stock,
		rummy.players[0].hand,
		rummy.board.stock.cards[0]
	);
	pickup.makeMove();

	let cards: Card[] = [
		new Card(Rank.QUEEN, Suit.CLUBS),
		new Card(Rank.KING, Suit.CLUBS),
		new Card(Rank.JACK, Suit.CLUBS),
	];

	let meld = new Book(cards);

	let meldmove = new MeldMove(
		rummy.players[0].hand,
		rummy.players[0].meldStack,
		meld
	);
	meldmove.makeMove();

	let putdown = new PutdownMove(
		rummy.players[0].hand,
		rummy.board.discard,
		rummy.players[0].hand.cards[0]
	);
	putdown.makeMove();
}

debug();
