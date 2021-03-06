/**
 * Given a string, sort it in decreasing order based on the frequency of characters.
 *
 * Example 1:
 * Input:
 * "tree"
 *
 * Output:
 * "eert"
 *
 * Explanation:
 * 'e' appears twice while 'r' and 't' both appear once.
 * So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
 *
 * Example 2:
 * Input:
 * "cccaaa"
 *
 * Output:
 * "cccaaa"
 *
 * Explanation:
 * Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
 * Note that "cacaca" is incorrect, as the same characters must be together.
 *
 * Example 3:
 * Input:
 * "Aabb"
 *
 * Output:
 * "bbAa"
 *
 * Explanation:
 * "bbaA" is also a valid answer, but "Aabb" is incorrect.
 * Note that 'A' and 'a' are treated as two different characters.
 */
// Time: O(3n) => O(n);
// Space: O(2n) => O(n);
const frequencySort = function (s) {
  let hashMap = [...s].reduce((map, char) => {
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
    return map;
  }, new Map());

  return [...hashMap]
    .sort(([aChar, aCount], [bChar, bCount]) => bCount - aCount)
    .reduce((str, [char, count]) => (str += char.repeat(count)), '');
};
