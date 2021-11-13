import { Card } from "./Card";
import { Hand } from "./Stack";

export class Player {
	hand: Hand;
	score: number;

	constructor() {
		this.hand = new Hand();
		this.score = 0;
	}
}
