var lengthOfLongestSubstring = function (s) {
  // 1. create hash table to store the position of the uniq character
  const hash = new Map();
  let maxLength = 0;
  let left = 0;
  // 2. loop over all the characters
  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    // 3. we check the hash if we visited the char already
    if (hash.has(char)) {
      // 4. if we visited the char already we want to move the pointer here + 1
      left = Math.max(hash.get(char) + 1, left);
      hash.set(char, right);
      maxLength = Math.max(maxLength, right - left + 1);
    } else {
      hash.set(char, right);
      // 5. else if haven't encountered the char yet we move the right pointer
      maxLength = Math.max(maxLength, right - left + 1);
      // 6. check the length by subtracting right and left pointer
    }
  }

  return maxLength;
};
