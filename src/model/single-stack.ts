export class SingleStack {
  stockMarketIndex: string;
  stockMarketCost: number;
  change: number;

  constructor(stockMarketIndex, stockMarketCost, change) {
    this.stockMarketIndex = stockMarketIndex;
    this.stockMarketCost = stockMarketCost;
    this.change = change;
  }
}
