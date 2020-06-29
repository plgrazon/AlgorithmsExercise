/**
 * Given a string S, return the "reversed" string where all characters that are
 * not a letter stay in the same place, and all letters reverse their positions.
 *
 * Example 1:
 * Input: "ab-cd"
 * Output: "dc-ba"
 *
 * Example 2:
 * Input: "a-bC-dEf-ghIj"
 * Output: "j-Ih-gfE-dCba"
 *
 * Example 3:
 * Input: "Test1ng-Leet=code-Q!"
 * Output: "Qedo1ct-eeLg=ntse-T!"
 *
 * Note:
 * S.length <= 100
 * 33 <= S[i].ASCIIcode <= 122
 * S doesn't contain \ or "
 */
// Time: O(n)
// Space: O(n)
const isChar = (char) => /^[A-Z]$/i.test(char);

const reverseOnlyLetters = function (S) {
  let res = S.split('');

  let startIdx = 0;
  let endIdx = S.length - 1;

  while (startIdx < endIdx) {
    let start = isChar(res[startIdx]);
    let end = isChar(res[endIdx]);

    if (start && end) {
      [res[startIdx], res[endIdx]] = [res[endIdx], res[startIdx]];
      startIdx++;
      endIdx--;
    } else if (!start && !end) {
      startIdx++;
      endIdx--;
    } else if (!start) {
      startIdx++;
    } else {
      endIdx--;
    }
  }

  return res.join('');
};
