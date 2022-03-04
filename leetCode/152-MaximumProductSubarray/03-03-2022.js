/**
 * @param {number[]} nums
 * @return {number}
 */
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
