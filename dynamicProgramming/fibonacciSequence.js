/**
 * Solve fibonacci sequence using dynamic programming
 *
 * Framework for Dp problems:
 * 1. Define the objective function
 *   f(n) is the value at the given num
 * 2. Identify base cases:
 *   f(0) = 0
 *   f(1) = 1
 *   f(2) = 1
 * 3. Write down a recurence relation for the optimized objective function
 *   f(n) = f(n - 1) + f(n - 2)
 * 4. What is the order of execution
 *   bottom - up -> because we relay on the previous answer
 * 5. Where to look for the answer
 *   f(n)
 */
// Time: O(n) => O(n);
// Space: O(n);
function fibonacciSequence(n) {
  const hash = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    hash[i] = hash[i - 1] + hash[i - 2];
  }

  return hash[n];
}

console.log(fibonacciSequence(3)); // 2
console.log(fibonacciSequence(5)); // 5
console.log(fibonacciSequence(10)); // 55
