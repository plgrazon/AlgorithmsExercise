/**
 * Given a string, find the length of the longest substring without repeating
 * characters.
 *
 * Example 1:
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 *
 * Example 2:
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 *
 * Note that the answer must be a substring, "pwke" is a 
 * subsequence and not a substring.
 */
// Time: O(n);
// Space: O(n);
const lengthOfLongestSubstring = function(s) {
  let seen = new Map();
  let startIdx = 0;
  let maxCount = 0;
  let currCount = 0;
  
  for (let endIdx = 0; endIdx < s.length; endIdx++) {
    let char = s[endIdx];
    
    if (!seen.has(char)) {
      maxCount = Math.max(maxCount, endIdx - startIdx + 1);
      seen.set(char, endIdx);
    } else {
      startIdx = Math.max(seen.get(char) + 1, startIdx);
      maxCount = Math.max(maxCount, endIdx - startIdx + 1);
      seen.set(char, endIdx)
    }
  }
  
  return maxCount;
};
