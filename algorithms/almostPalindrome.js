/**
 * Return a boolean to indicate whether a string is an 'almost
 * palindrome' (an `almost palindrome` is just one character shy of being a true
 * palindrome).
 * Example: hanakh => true
 */

const almostPalindrome = str => {
  let start = 0;
  let end = str.length - 1;
  let result = false;

  while (start < end) {
    if (str[start] === str[end]) {
      start++;
      end--;
      console.log('same ends');
      continue;
    }
    if (str[start + 1] === string[end]) {
      start += 2;
      end--;
      result = true;
      continue;
    }
  }
};

const test = ['hanakh', 'dirt', 'appla', 'stuff', 'banana', 'anana'];

function isAlmostPalindrome(string) {
  let start = 0;
  let end = string.length - 1;
  let result = false;
  while (start < end) {
    if (string[start] === string[end]) {
      start++;
      end--;
      continue;
    }
    if (string[start + 1] === string[end]) {
      start += 2;
      end--;
      result = true;
      continue;
    }
    if (string[start] === string[end - 1]) {
      start++;
      end -= 2;
      result = true;
      continue;
    }
    start = end;
    result = false;
  }
  return result;
}

let results = test.map(t => `${t}: ${isAlmostPalindrome(t)}`);
console.log(results);

console.log(almostPalindrome('bob'));
