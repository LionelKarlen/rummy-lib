import { Hand, MeldStack } from "./Stack";

export class Player {
	hand: Hand;
	score: number;
	meldStack: MeldStack;

	constructor() {
		this.hand = new Hand();
		this.score = 0;
		this.meldStack = new MeldStack();
	}
}
