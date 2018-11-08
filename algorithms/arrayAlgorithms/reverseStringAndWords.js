/* Given an array of words and characters reverse it.
 input:
  'abcde 12345'
  [
    'a', 'b', 'c', 'd', 'e',
    ' ',
    '1', '2', '3', '4', '5',
  ]
  ouput:
  '12345 abcde'
  [
    '1', '2', '3', '4', '5',
    ' ',
    'a', 'b', 'c', 'd', 'e',
  ]
*/

const reverseWords = (wordsArr) => {
  // reverse all the characters first:
  reverseChars(wordsArr, 0, wordsArr.length - 1);

  let leftIndex = 0;
  for (let i = 0; i <= wordsArr.length; i++) {
    if (wordsArr[i] === ' ' || i === wordsArr.length) {
      reverseChars(wordsArr, leftIndex, i - 1);
      leftIndex = i + 1;
    }
  }
  return wordsArr;
}

// helper function:
const reverseChars = (wordArr, leftIndex, rightIndex) => {
  if (leftIndex < rightIndex) {
    let temp = wordArr[rightIndex];
    wordArr[leftIndex] = wordArr[rightIndex];
    wordArr[rightIndex] = temp;
  }
  return wordArr
}

/*
time complexity: O(n);
space complexity: O(1);
*/
