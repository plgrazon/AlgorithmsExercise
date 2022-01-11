/**
 * Find all the number of ways to climb the nth stair by
 * climbing n steps.
 *
 * Framework for Dp problems:
 * 1. Define the objective function
 *   f(n) is the number of unique ways to reach nth stair by making 1 to k steps
 * 2. Identify base cases:
 *   f(0) = 1
 *   f(1) = 1
 * 3. Write down a recurence relation for the optimized objective function
 *   f(n) = Σ (n-i)
 * 4. What is the order of execution
 *   bottom - up -> because we relay on the previous answer
 * 5. Where to look for the answer
 *   f(n)
 */
// Time: O(nk) => O(n);
// Space: O(n);
// Example
// n = 7 k = 3
// redSteps = array of booleans [false, true, false, true, true, false, false]
function climbStairsNstepsSkipRed(n, k, redSteps) {
  let hash = Array(k).fill(0);
  hash[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < k; j++) {
      if (i - j < 0) continue;
      // i - 1 because the boolean array is indexed zero
      // k is only 7 in this case but we iterate on the other loop 8 times
      if (redSteps[i - 1]) hash[i % k] = 0;
      else hash[i % k] += hash[(i - j) % k];
    }
  }

  return hash[n % k];
}

const example1 = climbStairsNstepsSkipRed(7, 3, [
  false,
  true,
  false,
  true,
  true,
  false,
  false,
]);

console.log(example1);
