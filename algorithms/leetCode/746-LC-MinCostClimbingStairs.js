/**
 * On a staircase, the i-th step has some non-negative cost cost[i] assigned
 * (0 indexed).
 *
 * Once you pay the cost, you can either climb one or two steps.
 * You need to find minimum cost to reach the top of the floor, and you can
 * either start from the step with index 0, or the step with index 1.
 *
 * Example 1:
 * Input: cost = [10, 15, 20]
 * Output: 15
 * Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
 *
 * Example 2:
 * Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
 * Output: 6
 * Explanation: Cheapest is start on cost[0], and only step on 1s,
 * skipping cost[3].
 *
 * Note:
 * cost will have a length in the range [2, 1000].
 * Every cost[i] will be an integer in the range [0, 999].
 *
 * Hint:
 * Say f[i] is the final cost to climb to the top from step i.
 * Then f[i] = cost[i] + min(f[i+1], f[i+2]).
 */
// Time: O(n);
// Space: O(1);

const minCostClimbingStairs = cost => {
  const dfs = index => {
    if (index >= cost.length) return 0;
    return cost[index] + Math.min(dfs(index + 1), dfs(index + 2));
  };
  return Math.min(dfs(0), dfs(1));
};

// Time: O(n);
// Space: O(1);
const minCostClimbingStairsLoop = function(cost) {
  let start1 = cost[0];
  let start2 = cost[1];

  for (let i = 2; i < cost.length; i++) {
    let currentCost = cost[i] + Math.min(start1, start2);
    start1 = start2;
    start2 = currentCost;
  }

  return Math.min(start1, start2);
};
