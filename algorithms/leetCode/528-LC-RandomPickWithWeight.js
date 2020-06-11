/**
 * Given an array w of positive integers, where w[i] describes the weight of
 * index i, write a function pickIndex which randomly picks an index in
 * proportion to its weight.
 *
 * Note:
 *
 * 1 <= w.length <= 10000
 * 1 <= w[i] <= 10^5
 * pickIndex will be called at most 10000 times.
 *
 * Example 1:
 * Input:
 * ["Solution","pickIndex"]
 * [[[1]],[]]
 * Output: [null,0]
 *
 * Example 2:
 * Input:
 * ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
 * [[[1,3]],[],[],[],[],[]]
 * Output: [null,0,1,1,1,0]
 * Explanation of Input Syntax:
 *
 * The input is two lists: the subroutines called and their arguments. Solution's constructor has one argument, the array w. pickIndex has no arguments. Arguments are always wrapped with a list, even if there aren't any.
 *
 * @param {number[]} w
 */
// Time: O(n);
// Space: O(n);
var Solution = function (w) {
  this.totalWeigth = 0;
  this.weights = [];

  for (let weight of w) {
    this.totalWeigth += weight;
    this.weights.push(this.totalWeigth);
  }
};

/**
 * @return {number}
 */
// Time: O(n);
// Space: O(1);
Solution.prototype.pickIndex = function () {
  let randomIdx = Math.random() * this.totalWeigth;
  for (let i = 0; i < this.weights.length; i++) {
    let weight = this.weights[i];

    if (randomIdx < weight) return i;
  }
};

// Time: O(n);
// Space: O(logn);
Solution.prototype.pickIndex = function () {
  const randomNumber = Math.random() * this.totalWeigth;
  let floor = 0;
  let ceiling = this.weights.length - 1;
  let mid;

  while (floor <= ceiling) {
    mid = floor + Math.floor((ceiling - floor) / 2);

    if (this.weights[mid] === randomNumber) {
      return mid;
    } else if (this.weights[mid] > randomNumber) {
      ceiling = mid - 1;
    } else {
      floor = mid + 1;
    }
  }

  return floor;
};

/**
 * Explanation:
 * Given an array of weights, we need to find the total/max weight for all of the
 * numbers. If the random index is less than the current weight we return the
 * index.
 *
 * Input: [1,2,3]
 * Total Weight: 6
 * Probability per weight: [1/6, 2/6, 3/6]
 * Probability in percent: [17%, 33%, 50%]
 *
 * ▼-------indices--------▼
 * | 0 |   1   |    2     |
 * ▼-weight of each index-▼
 * |17%|  33%  |   50%    |
 * |___|_______|__________|
 * 0   1       3          6 <- This row represents the possible values for each
 * ^---probability range--^     index.
 *
 * To further explain the row of possible values:
 * given a random number in the range: 0-0.99 we return index 0.
 * given a random number in the range: 1-2.99 we return index 1.
 * given a random number in the range: 3-5.99 we return index 2.
 *
 * Random is exclusive and will never return the multiplier.
 *
 *
 * Input: [1,3,4]
 * Total Weight: 8
 * Probability per index: [1/8, 3/8, 4/8]
 * Probability in percent: [12.5%, 37.5%, 50%]
 *
 * ▼-------indices--------▼
 * | 0 |   1   |    2     |
 * ▼-weight of each index-▼
 * |13%|  37%  |   50%    |
 * |___|_______|__________|
 * 0   1       4          8
 * ^---probability range--^
 */

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
