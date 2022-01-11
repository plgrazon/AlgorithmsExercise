/*
Input:
unordered array of integers
non empty array

Output:
array of triplets if no triplets return an empty array
triplets should be in ascending order

Constraint:
input is not ordered
*/

// Brute force method:
// Time: O(n^2) => O(n^3);
// Space: O(n);
function threeNumberSum(array, targetSum) {
  const results = [];
  array.sort((a, b) => a - b);
  console.log(array);

  for (let i = 0; i < array.length - 2; i++) {
    let firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let secondNum = array[j];
      for (let k = j + 1; k < array.length; k++) {
        let thirdNum = array[k];

        if (firstNum + secondNum + thirdNum === targetSum) {
          results.push([firstNum, secondNum, thirdNum]);
        }
      }
    }
  }

  return results;
}

// Two Pointer Method:
// Time: O(n^2);
// Space: O(1) / O(n)
// if no triplet the space is constant but if there is it becomes O(n);
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const results = [];

  for (let i = 0; i < array.length - 2; i++) {
    let currNum = array[i];
    let leftIdx = i + 1;
    let rightIdx = array.length - 1;

    while (leftIdx < rightIdx) {
      let leftNum = array[leftIdx];
      let rightNum = array[rightIdx];
      let currentSum = currNum + leftNum + rightNum;

      if (currentSum === targetSum) {
        results.push([currNum, leftNum, rightNum]);
        leftIdx++;
        rightIdx--;
      } else if (currentSum < targetSum) {
        leftIdx++;
      } else {
        rightIdx--;
      }
    }
  }

  return results;
}

// Hashing Method:
// Time: O(n^2);
// Space: O(n)
// using hashing doesn't require sorting. sorting the array won't sort the output

function threeNumberSum(array, targetSum) {
  const results = [];

  for (let i = 0; i < array.length - 2; i++) {
    const set = new Set();
    const firstDiff = targetSum - array[i];

    for (let j = i + 1; j < array.length; j++) {
      let secondDiff = firstDiff - array[j];

      if (set.has(secondDiff)) {
        results.push([array[i], array[j], secondDiff]);
      } else {
        set.add(array[j]);
      }
    }
  }

  return results;
}
