/**
 * Given two strings s1 and s2, write a function to return true if s2 contains
 * the permutation of s1. In other words, one of the first string's permutations
 * is the substring of the second string.
 *
 * Example 1:
 * Input: s1 = "ab" s2 = "eidbaooo"
 * Output: True
 * Explanation: s2 contains one permutation of s1 ("ba").
 *
 * Example 2:
 * Input:s1= "ab" s2 = "eidboaoo"
 * Output: False
 *
 * Constraints:
 * The input strings only contain lower case letters.
 * The length of both given strings is in range [1, 10,000].
 */
// Time: O(n);
// Space: O(n);
// Solved with sliding window technique with auxiliary
const checkInclusion = function (s1, s2) {
  let map = new Map();
  let uniq = 0;

  for (let char of s1) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
      uniq++;
    }
  }

  let startWindow = 0;

  for (let endWindow = 0; endWindow < s2.length; endWindow++) {
    let currEnd = s2[endWindow];

    if (map.has(currEnd)) map.set(currEnd, map.get(currEnd) - 1);
    if (map.get(currEnd) === 0) uniq--;
    if (uniq === 0) return true;

    if (endWindow - startWindow + 1 === s1.length) {
      let currStart = s2[startWindow];

      if (map.has(currStart)) map.set(currStart, map.get(currStart) + 1);
      if (map.get(currStart) === 1) uniq++;

      startWindow++;
    }
  }

  return false;
};

// Another alternative and commonly used pattern/template:
var checkInclusion = function (s1, s2) {
  let map = new Map();
  let uniq = 0;

  for (let char of s1) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
      uniq++;
    }
  }

  let startWindow = 0;
  let endWindow = 0;

  while (endWindow < s2.length) {
    let currEnd = s2[endWindow];

    if (map.has(currEnd)) map.set(currEnd, map.get(currEnd) - 1);
    if (map.get(currEnd) === 0) uniq--;
    if (uniq === 0) return true;

    while (endWindow - startWindow + 1 === s1.length) {
      let currStart = s2[startWindow];

      if (map.has(currStart)) map.set(currStart, map.get(currStart) + 1);
      if (map.get(currStart) === 1) uniq++;

      startWindow++;
    }

    endWindow++;
  }

  return false;
};
