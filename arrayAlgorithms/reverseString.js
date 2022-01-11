const reverseString = (str) => {
  const input = str.split('');
  let leftIndex = 0;
  let rightIndex = str.length - 1;

  while(leftIndex < rightIndex) {
    let temp = input[leftIndex];
    input[leftIndex] = input[rightIndex];
    input[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
  return input.join('');
}

/*
time complexity: O(n)
space complexity: O(1)
*/
