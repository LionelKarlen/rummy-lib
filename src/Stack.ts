import { StackType } from "./StackType";
import { Card } from "./Card";

export abstract class Stack {
	type: StackType;
	cards: Card[];

	constructor(type: StackType) {
		this.type = type;
		this.cards = [];
	}
}

export class Stock extends Stack {
	constructor() {
		super(StackType.STOCK);
	}
}

export class Discard extends Stack {
	constructor() {
		super(StackType.DISCARD);
	}
}

export class Hand extends Stack {
	constructor() {
		super(StackType.HAND);
	}
}
