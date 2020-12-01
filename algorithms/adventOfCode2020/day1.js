/**
 * Given a list of numbers find the pair whose sum totals to 2020. Return the
 * product of the numbers
 *
 * Example:
 * [1721, 979, 366, 299, 675, 1456]
 *
 * Answer:
 *
 * 1721 + 299 = 2020
 * 1721 * 299 = 514579
 *
 * Return 514579
 */
const numbers = require('./day1Input.json');

// Time: O(n^2);
// Space: O(1);
const findSumAndProductSlow = () => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === 2020) {
        console.log(numbers[i], numbers[j]);
      }
    }
  }
};

// Time: O(n);
// Space: O(n);
const findSumAndProduct = () => {
  const remainders = {};

  for (let i = 0; i < numbers.length; i++) {
    let curr = numbers[i];
    let remainder = 2020 - curr;

    if (remainder in remainders) {
      console.log(remainder * curr);
      return remainder * curr;
    }
    remainders[curr] = 1;
  }
};

// There is no linear solution for three sum but we can make it O(n) by using
// dynamic programming and sorting

// Time: O(n^3);
// Space: O(1);
const findThreeSumAndProductSlow = () => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        let first = numbers[i];
        let second = numbers[j];
        let third = numbers[k];

        if (first + second + third === 2020) {
          console.log(first * second * third);
          return first * second * third;
        }
      }
    }
  }
};

findSumAndProduct();
findSumAndProductSlow();
findThreeSumAndProductSlow();
