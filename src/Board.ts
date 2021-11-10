import { Discard, Stock } from "./Stack";
export class Board {
	discard: Discard;
	stock: Stock;

	constructor() {
		this.discard = new Discard();
		this.stock = new Stock();
	}
}
