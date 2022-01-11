/**
 * Write a function that reverses a string. The input string is given as an
 * array of characters char[].
 *
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array in-place with O(1) extra memory.
 *
 * You may assume all the characters consist of printable ascii characters.
 *
 * Example 1:
 * Input: ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 *
 * Example 2:
 * Input: ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 * 
 * Hint #1  
 * The entire logic for reversing a string is based on using the opposite 
 * directional two-pointer approach!
 */
// Time: O(n);
// Space: O(1);
const reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    let temp = s[i];
    let end = s.length - 1 - i;

    [s[i], s[end]] = [s[end], s[i]];
  }

  return s;
};

const reverseStringOneLine =  (s) => return s.reverse();