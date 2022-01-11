/**
 * Given a string s and a non-empty string p, find all the start indices of p's
 * anagrams in s.
 *
 * Strings consists of lowercase English letters only and the length of both
 * strings s and p will not be larger than 20,100.
 *
 * The order of output does not matter.
 *
 * Example 1:
 * Input:
 * s: "cbaebabacd" p: "abc"
 * Output:
 * [0, 6]
 *
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of "abc".
 *
 * Example 2:
 * Input:
 * s: "abab" p: "ab"
 * Output:
 * [0, 1, 2]
 *
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 */
// Time: O(n);
// Space: O(n);
// Solved with sliding window technique with auxiliary
const findAnagrams = function (s, p) {
  let map = new Map();
  let uniq = 0;
  let result = [];

  for (let char of p) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      uniq++;
      map.set(char, 1);
    }
  }

  let startWindow = 0;

  for (let endWindow = 0; endWindow < s.length; endWindow++) {
    let currEnd = s[endWindow];

    if (map.has(currEnd)) map.set(currEnd, map.get(currEnd) - 1);
    if (map.get(currEnd) === 0) uniq--;
    if (uniq === 0) result.push(startWindow);

    if (endWindow - startWindow + 1 === p.length) {
      let currStart = s[startWindow];

      if (map.has(currStart)) map.set(currStart, map.get(currStart) + 1);
      if (map.get(currStart) === 1) uniq++;

      startWindow++;
    }
  }

  return result;
};

// Another alternative and commonly used pattern/template:
const findAnagrams = function (s, p) {
  let map = new Map();
  let uniq = 0;
  let result = [];

  for (let char of p) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      uniq++;
      map.set(char, 1);
    }
  }

  let startWindow = 0;
  let endWindow = 0;

  while (endWindow < s.length) {
    let currEnd = s[endWindow];

    if (map.has(currEnd)) map.set(currEnd, map.get(currEnd) - 1);
    if (map.get(currEnd) === 0) uniq--;

    while (uniq === 0) {
      let currStart = s[startWindow];

      if (endWindow - startWindow + 1 === p.length) {
        result.push(startWindow);
      }

      if (map.has(currStart)) map.set(currStart, map.get(currStart) + 1);
      if (map.get(currStart) === 1) uniq++;

      startWindow++;
    }

    endWindow++;
  }

  return result;
};
