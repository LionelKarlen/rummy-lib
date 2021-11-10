import { Rummy } from "./Rummy";
import { Card } from './Card';
import { Rank } from "./Rank";
import { Suit } from './Suit';

function debug() {
	
	let rummy=new Rummy();
	
	console.log(new Card(Rank.QUEEN,Suit.CLUBS));
}

debug();