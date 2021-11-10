import { Discard, Stock } from "./Stack";
class Board {
	discard: Discard;
	stock: Stock;

	constructor(discard: Discard, stock: Stock) {
		this.discard = discard;
		this.stock = stock;
	}
}
