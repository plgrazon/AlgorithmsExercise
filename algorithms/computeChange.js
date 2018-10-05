// use memoize to remove duplicates.
class Change {
  constructor() {
    this.memo = {}
  }

  changePossibilitiesTopDown(amountLeft, denominations, currentIndex = 0) {
    const memoKey = [amountLeft, currentIndex].join(',');
    if (this.memo.hasOwnProperty(memoKey)) {
      return this.memo[memoKey];
    }
    if (amountLeft === 0) {
      return 1;
    }
    if (amountLeft < 0) {
      return 0;
    }
    if (currentIndex === denominations.length) {
      return 0;
    }
    const currentCoin = denominations[currentIndex];
    let numPossibilities = 0;
    while(amountLeft >= 0) {
      numPossibilities += this.changePossibilitiesTopDown(amountLeft, denominations, currentIndex + 1);
      amountLeft -= currentCoin;
    }
    this.memo[memoKey] = numPossibilities;
    return numPossibilities;
  }
}

function changePossibilitiesBottomUp(amount, denominations) {
  const combinations = new Array(amount + 1).fill(0);
  // coin can't be zero, the first is 0;
  combinations[0] = 1;
  denominations.forEach(coin => {
    for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
      const higherAmountRemainder = higherAmount - coin;
      combinations[higherAmount] += combinations[higherAmountRemainder];
    }
  });

  return combinations[amount];
}
