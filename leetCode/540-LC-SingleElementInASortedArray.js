/**
 * You are given a sorted array consisting of only integers where every element
 * appears exactly twice, except for one element which appears exactly once.
 * Find this single element that appears only once.
 *
 * Example 1:
 * Input: [1,1,2,3,3,4,4,8,8]
 * Output: 2
 *
 * Example 2:
 * Input: [3,3,7,7,10,11,11]
 * Output: 10
 *
 * Note: Your solution should run in O(log n) time and O(1) space.
 */
// Time: O(n);
// Space: O(1);
const singleNonDuplicate = function (nums) {
  return nums.reduce((acc, num) => acc ^ el);
};

// Time: O(logN);
// Space: O(1);
const singleNonDuplicate = function (nums) {
  let head = 0;
  let tail = nums.length - 1;

  while (head <= tail) {
    let mid = Math.floor((head + tail) / 2);

    if (mid % 2 === 0) {
      if (nums[mid] === nums[mid - 1]) {
        tail = mid - 1;
      } else if (nums[mid] === nums[mid + 1]) {
        head = mid + 1;
      } else {
        return nums[mid];
      }
    } else {
      if (nums[mid] === nums[mid - 1]) {
        head = mid + 1;
      } else if (nums[mid] === nums[mid + 1]) {
        tail = mid - 1;
      } else {
        return nums[mid];
      }
    }
  }
};

/**
 * Notes:
 * The single element will always be on the odd length side
 *
 * Example 1: Even midpoint
 * input: [1, 1, 2, 3, 3, 4, 4, 8, 8]
 * index:  0  1  2  3  4  5  6  7  8
 *         ^-odd-*     ^           ^
 *       Head         Mid        Tail
 *
 * If the mid matches to either left or right go to the
 * same direction. The side where it matches becomes odd length.
 *
 * Example 2: Odd mid point
 * input: [3, 3, 4, 4, 8, 9, 9]
 * index:  0  1  2  3  4  5  6
 *         ^        ^  *-odd-^
 *       Head      Mid     Tail
 *
 * If the mid mid matches with either left or right go to the
 * opposite direction. The side where it matches becomes even length.
 */
