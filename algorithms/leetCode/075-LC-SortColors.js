/**
 * Given an array with n objects colored red, white or blue, sort them in-place
 * so that objects of the same color are adjacent, with the colors in the order
 * red, white and blue.
 *
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white,
 * and blue respectively.
 *
 * Note: You are not suppose to use the library's sort function for this problem.
 *
 * Example:
 * Input: [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 *
 * Follow up:
 * A rather straight forward solution is a two-pass algorithm using counting sort.
 * First, iterate the array counting number of 0's, 1's, and 2's, then
 * overwrite array with total number of 0's, then 1's and followed by 2's.
 * Could you come up with a one-pass algorithm using only constant space?
 */
// Time: 0(n + mn) => O(n);
// Space: O(n);
var sortColors = function (nums) {
  const counts = new Array(3).fill(0);
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    counts[num]++;
  }

  let numIdx = 0;
  let countIdx = 0;

  while (numIdx < nums.length) {
    while (counts[countIdx] > 0) {
      nums[numIdx] = countIdx;
      counts[countIdx]--;
      numIdx++;
    }
    countIdx++;
  }
};

// Time: O(n);
// Space: O(1);
var sortColorsOnePass = function (nums) {
  let floor = 0;
  let ceiling = nums.length - 1;
  let i = 0;
  let temp;

  while (i <= ceiling) {
    if (nums[i] === 0) {
      temp = nums[floor];
      nums[floor] = nums[i];
      nums[i] = temp;
      floor++;
      i++;
    } else if (nums[i] === 2) {
      temp = nums[ceiling];
      nums[ceiling] = nums[i];
      nums[i] = temp;
      ceiling--;
    } else {
      i++;
    }
  }
};
