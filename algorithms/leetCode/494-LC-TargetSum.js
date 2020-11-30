/**
 * You are given a list of non-negative integers, a1, a2, ..., an, and a target,
 * S. Now you have 2 symbols + and -. For each integer, you should choose one
 * from + and - as its new symbol.
 *
 * Find out how many ways to assign symbols to make sum of integers
 * equal to target S.
 *
 * Example 1:
 * Input: nums is [1, 1, 1, 1, 1], S is 3.
 * Output: 5
 *
 * Explanation:
 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3
 *
 * There are 5 ways to assign symbols to make the sum of nums be target 3.
 *
 * Constraints:
 *
 * The length of the given array is positive and will not exceed 20.
 * The sum of elements in the given array will not exceed 1000.
 * Your output answer is guaranteed to be fitted in a 32-bit integer.
 */
// Time: O(n);
// Space: O(n);

const findTargetSumWays = function(nums, S) {
  let hash = {};

  const dp = (index, count) => {
    if (index === nums.length) {
      if (count === S) {
        return 1;
      } else {
        return 0;
      }
    } else {
      let result = 0;
      let key = `${index}:${count}`;

      if (!(key in hash)) {
        hash[key] = 0;
        hash[key] += dp(index + 1, count + nums[index]);
        hash[key] += dp(index + 1, count - nums[index]);
      }

      result += hash[key];
      return result;
    }
  };

  return dp(0, 0);
};
