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
 *   f(n) = f(n - 1) + f(n - 2) ... + f(n - k)
 * 4. What is the order of execution
 *   bottom - up -> because we relay on the previous answer
 * 5. Where to look for the answer
 *   f(n)
 */
// Time: O(n);
// Space: O(n);
function climbStairsNwaysArray(n, k) {
  let hash = Array(n + 1).fill(0);
  hash[0] = 1;
  hash[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      if (i - j < 0) continue;
      hash[i] += hash[i - j];
    }
  }
  return hash[n];
}

let example1 = climbStairsNwaysArray(5, 2); // 8
let example2 = climbStairsNwaysArray(4, 3); // 7
let example3 = climbStairsNwaysArray(3, 2); // 3
let example4 = climbStairsNwaysArray(5, 3); // 13

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
