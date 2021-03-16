/**
 * Find all the number of ways to climb the nth stair by
 * climbing n steps.
 *
 * Example:
 * n = 4, k = 2, P = [0, 3, 2 ,4]
 *
 *       0----1----2----3
 * cost:      3    2    4
 *
 * Framework for Dp problems:
 * 1. Define the objective function
 *   f(n) - smallest cost to get to the nth stair
 * 2. Identify base cases:
 *   f(0) = 0  f(2) = 2
 *   f(1) = 3  f(3) = 6
 * 3. Write down a recurence relation for the optimized objective function
 *   f(n) = P(n) + min(P(n - 1), P(n - 2));
 * 4. What is the order of execution
 *   bottom - up -> because we relay on the previous answer
 * 5. Where to look for the answer
 *   f(n)
 */
function minimizeStairCostRecursive(n, costs) {
  const hash = Array(n + 1).fill(0);
  hash[1] = costs[0];

  for (let i = 2; i <= n; i++) {
    hash[i] = getMin(hash[i - 1], hash[i - 2]) + costs[i - 1];
    console.log(hash);
  }

  return hash[n];
}

function getMin(a, b) {
  if (a < b) return a;
  else return b;
}

const example1 = minimizeStairCostRecursive(3, [3, 2, 4]);

console.log(example1);
