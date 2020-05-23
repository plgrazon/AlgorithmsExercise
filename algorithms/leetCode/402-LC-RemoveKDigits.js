/**
 * Given a non-negative integer num represented as a string, remove k digits
 * from the number so that the new number is the smallest possible.
 *
 * Example 1:
 * Input: num = "1432219", k = 3
 * Output: "1219"
 * Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219
 * which is the smallest.
 *
 * Example 2:
 * Input: num = "10200", k = 1
 * Output: "200"
 * Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
 *
 * Example 3:
 * Input: num = "10", k = 2
 * Output: "0"
 * Explanation: Remove all the digits from the number and it is left with nothing which is 0.
 *
 * Note:
 * The length of num is less than 10002 and will be ≥ k.
 * The given num does not contain any leading zero.
 */
// Time: O(n);
// Space: O(n);

const removeKdigits = function (num, k) {
  const stack = [];

  for (let digit of num) {
    while (k && stack.length && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  while (k) {
    stack.pop();
    k--;
  }

  while (stack.length && stack[0] === '0') {
    stack.shift();
  }

  return stack.length !== 0 ? stack.join('') : '0';
};

/**
 * Notes:
 * The first loop will only work on elements with a peak in the middle. The reason
 * is because if the last element in the stack is smaller than the digit we just push.
 *
 * With Peak:
 * "132"
 *
 *    x
 *    |
 *  3 |      *
 *    |     /  \
 *  2 |    /    *
 *    |   /
 *  1 |  *
 *    |
 *    *____________ y
 *       1   2   3
 *
 * Without a peak:
 * "123"
 *    x
 *    |
 *  3 |       *
 *    |      /
 *  2 |     *
 *    |    /
 *  1 |   *
 *    |
 *    *__________ y
 *       1  2  3
 *
 * A number without a peak is always in ascending order. And given an ascending
 * number we can just pop the values from right to left. This will be handled on
 * the second loop.
 */
