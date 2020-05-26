/**
 * Write a class StockSpanner which collects daily price quotes for some stock,
 * and returns the span of that stock's price for the current day.
 *
 * The span of the stock's price today is defined as the maximum number of
 * consecutive days (starting from today and going backwards) for which the
 * price of the stock was less than or equal to today's price.
 *
 * For example, if the price of a stock over the next 7 days were
 * [100, 80, 60, 70, 60, 75, 85], then the stock spans would be
 * [1, 1, 1, 2, 1, 4, 6].
 *
 * Example 1:
 *
 * Input:
 * ["StockSpanner","next","next","next","next","next","next","next"],
 * [[],[100],[80],[60],[70],[60],[75],[85]]
 * Output:
 * [null,1,1,1,2,1,4,6]
 *
 * Explanation:
 * First, S = StockSpanner() is initialized.
 * Then:
 * S.next(100) is called and returns 1,
 * S.next(80) is called and returns 1,
 * S.next(60) is called and returns 1,
 * S.next(70) is called and returns 2,
 * S.next(60) is called and returns 1,
 * S.next(75) is called and returns 4,
 * S.next(85) is called and returns 6.
 *
 * Note that (for example) S.next(75) returned 4, because the last 4 prices
 * (including today's price of 75) were less than or equal to today's price.
 *
 * Note:
 * Calls to StockSpanner.next(int price) will have 1 <= price <= 10^5.
 * There will be at most 10000 calls to StockSpanner.next per test case.
 * There will be at most 150000 calls to StockSpanner.next across all test cases.
 * The total time limit for this problem has been reduced by 75% for C++,
 * and 50% for all other languages.
 */
var StockSpanner = function() {
  this.prices = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  // Solution using a loop that is weighted:
  // We don't need to store everything on the prices array we just need to
  // store values in descending order.
  let current = [price, 1];
  // store the current prices with it's current span
  let idx = this.prices.length - 1;
  
  while (idx >= 0 && price >= this.prices[idx][0]) {
    // add the span of the previous smaller or equal element to the current
    // then pop it.
    // storing the span to the current allows us to pop it.
    current[1] += this.prices[idx][1];
    this.prices.pop();
    idx--;
  }
  
  this.prices.push(current);
  return current[1];
  
  // Solutions using loops:
  // Using unweighted elements
  // while loop
  let span = 1;
  let idx = this.prices.length - 1;
  
  while loop
  while (idx >= 0) {
    if (price >= this.prices[idx]) {
      span++;
    } else {
      break;
    }
    idx--;
  }
  
  // for loop
  for (let i = this.prices.length - 1; i >= 0; i--) {
    if (price >= this.prices[i]) {
      span++;
    } else {
      break;
    }
  }
  
  this.prices.push(price);
  return span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */