/**
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in order.
 *
 * You may assume no duplicates in the array.
 *
 * Example 1:
 * Input: [1,3,5,6], 5
 * Output: 2
 *
 * Example 2:
 * Input: [1,3,5,6], 2
 * Output: 1
 *
 * Example 3:
 * Input: [1,3,5,6], 7
 * Output: 4
 *
 * Example 4:
 * Input: [1,3,5,6], 0
 * Output: 0
 */
const searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

const searchInsertBinarySearch = function (nums, target) {
  if (nums[nums.length - 1] < target) return nums.length;

  let floor = 0;
  let ceiling = nums.length - 1;

  while (floor < ceiling) {
    let mid = Math.floor((floor + ceiling) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      floor = mid + 1;
    } else {
      ceiling = mid;
    }
  }

  return floor;
};
