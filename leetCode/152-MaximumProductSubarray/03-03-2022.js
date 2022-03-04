/**
 * @param {number[]} nums
 * @return {number}
 */
// Brute Force:
// Time: O(n^2);
// Space: O(1);
const maxProduct = (nums) => {
  let maxProd = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let currProd = 1;
    for (let j = i; j < nums.length; j++) {
      currProd *= nums[j];
      maxProd = Math.max(currProd, maxProd);
    }
  }

  return maxProd;
};

// Dynamic Programming:
// Time: O(n);
// Space: O(1);
const maxProduct = (nums) => {
  let maxProd = nums[0];
  let maxSoFar = nums[0];
  let minSoFar = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let currNum = nums[i];
    let tempMax = maxSoFar;
    maxSoFar = Math.max(currNum, currNum * maxSoFar, currNum * minSoFar);
    minSoFar = Math.min(currNum, currNum * tempMax, currNum * minSoFar);
    maxProd = Math.max(maxProd, maxSoFar);
  }

  return maxProd;
};
