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
// top-down approach
function climbStairs2Ways(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return climbStairs2Ways(n - 1) + climbStairs2Ways(n - 2);
}

// Time: O(n)
// Space: O(n)
// bottom-up approach
function climbStairs2WaysArray(n) {
  const results = [1, 1];

  for (let i = 2; i <= n; i++) {
    results[i] = results[i - 1] + results[i - 2];
  }

  return results[n];
}

// Time: O(n)
// Space: O(n)
// bottom-up approach
function climbStairs3WaysArray(n) {
  const results = [1, 1, 2];

  for (let i = 3; i <= n; i++) {
    results[i] = results[i - 1] + results[i - 2] + [i - 3];
  }

  return results[n];
}

// In this example we optimize it further because we don't need to track
// all numbers we only need the last two numbers and the result of it
// Time: O(n)
// Space: O(1)
// bottom-up approach
function climbStairs2WaysArrayOptimized(n) {
  let oneStep = 1;
  let twoStep = 1;
  let result;

  for (let i = 2; i <= n; i++) {
    result = oneStep + twoStep;
    oneStep = twoStep;
    twoStep = result;
  }

  return result;
}

const steps = climbStairs2Ways(5); // 8
const stepsArr = climbStairs2WaysArray(5); // 8
const stepsArrOptimized = climbStairs2WaysArrayOptimized(5); // 8

console.log(steps);
console.log(stepsArr);
console.log(stepsArrOptimized);
