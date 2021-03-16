/**
 * This problem was asked by Uber.
 *
 * Given an array of integers, return a new array such that each element at
 * index i of the new array is the product of all the numbers in the original
 * array except the one at i.
 *
 * For example, if our input was [1, 2, 3, 4, 5], the expected output
 * would be [120, 60, 40, 30, 24]. If our input was
 */
// Time: O(2n) => O(n)
// Space: O(1)
function getProductExceptIndex(arr) {
  let total = arr.reduce((acc, num) => acc * num);
  return arr.map((num) => total / num);
}

const example1 = getProductExceptIndex([1, 2, 3, 4, 5]);
const example2 = getProductExceptIndex([3, 2, 1]);

console.log(example1);
console.log(example2);
