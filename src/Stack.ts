import { StackType } from "./StackType";
abstract class Stack {
	type: StackType;

	constructor(type: StackType) {
		this.type = type;
	}
}

export class Stock extends Stack {
	constructor() {
		super(StackType.STOCK);
	}
}

export class Discard extends Stack {
	constructor() {
		super(StackType.DISCARD)
	}
}

