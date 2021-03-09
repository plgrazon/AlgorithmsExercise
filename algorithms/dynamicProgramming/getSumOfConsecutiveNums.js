/**
 * Get all the sum of consecutive numbers using dynamic
 * programming
 *
 * General idea:
 * f(n) = f(n - 1) + n
 */
function getSum(num) {
  if (num === 1) {
    return 1;
  }
  return getSum(num - 1) + num;
}

/**
 * Another way of solving it using an array
 */
function getSumArray(num) {
  const results = [0];

  for (let i = 1; i <= num; i++) {
    results[i] = results[i - 1] + i;
  }

  return results;
}

let result = getSum(10);
let resultsArray = getSumArray(10);

console.log(result);
console.log(resultsArray);
