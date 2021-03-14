/**
 * Find all the number of ways to climb the nth stair by
 * climbing 1 or 2 steps.
 *
 * Framework for Dp problems:
 * 1. Define the objective function
 *   f(n) is the number of unique ways to reach nth stair
 * 2. Identify base cases:
 *   f(0) = 1
 *   f(1) = 1
 *   f(2) = 2
 * 3. Write down a recurence relation for the optimized objective function
 *   f(n) = f(n - 1) + f(n - 2)
 * 4. What is the order of execution
 *   bottom - up -> because we relay on the previous answer
 * 5. Where to look for the answer
 *   f(n)
 */
// Time: O(n)
// Space: O(1)
function climbStairsNthWays(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return climbStairsNthWays(n - 1) + climbStairsNthWays(n - 2);
}

// Time: O(n)
// Space: O(n)
function climbStairsNthWaysArray(n) {
  const results = [1, 1];

  for (let i = 2; i <= n; i++) {
    results[i] = results[i - 1] + results[i - 2];
  }

  return results[n];
}

const steps = climbStairsNthWays(5); // 8
const stepsArr = climbStairsNthWaysArray(5); // 8

console.log(steps);
console.log(steps);
