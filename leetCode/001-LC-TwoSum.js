/**
 * Given and array of numbers return the index
 * of the two nums that will equate to the target
 *
 * input: [1,2,3,4,5], 3
 * output: [0,1]
 **/
// Time: O(n^2);
// Space: O(1);
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// Time: O(n);
// Space: O(n);
const twoSums = (nums, target) => {
  const remainders = {};
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let rem = target - curr;
    if (rem in remainders) {
      return [remainders[rem], i];
    }
    remainders[curr] = i;
  }
};

console.log(twoSums([2, 7, 11, 15], 9));
