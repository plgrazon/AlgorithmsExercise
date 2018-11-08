const mergeArrays = (arr1, arr2) => {
  const mergedArray = [];

  let firstIdx = 0;
  let secondIdx = 0;
  let mergedIdx = 0;

  while (mergedIdx < (arr1.length + arr2.length))  {
    let elOne = arr1[firstIdx];
    let elTwo = arr2[secondIdx];
    let arrOneOver = firstIdx >= arr1.length;
    let arrTwoOver = secondIdx >= arr2.length;

    if (!arrOneOver && (arrTwoOver || elOne < elTwo)) {
      mergedArray[mergedIdx] = elOne;
      firstIdx++;
    } else {
      mergedArray[mergedIdx] = elTwo;
      secondIdx++
    }
    mergedIdx++;
  }
  return mergedArray;
}

var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19, 22, 24];

console.log(mergeArrays(myArray, alicesArray));

/*
time complexity: O(n);
space complexity: O(n);
*/
