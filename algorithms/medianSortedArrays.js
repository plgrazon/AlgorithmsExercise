const findMedianSortedArrays = (nums1, nums2) => {
  let len = nums1.length + nums2.length;
  let mid = len / 2
  let combined = nums1
    .concat(nums2)
    .sort((a, b) => a - b);

  if (len % 2 === 0) {
    let median = (combined[mid] + combined[mid - 1])/2
    return median;
  } else {
    return combined[Math.floor(len / 2)]
  }
}

/*
time complexity: O(n log n);
space complexity: O(1)
*/

// faster solution:

const findMedianSortedArraysFaster = (nums1, nums2) => {
  let totalLen = nums1.length + nums2.length;
  let idx1 = 0;
  let idx2 = 0;
  let curr;
  let last;

  while (idx1 + idx2 <= totalLen/2) {
    if (curr) {
      last = curr;
    }
    let elOne = nums1[idx1];
    let elTwo = nums2[idx2];
    if (elOne === undefined) {
      curr = elTwo;
      idx2++;
    } else if (elTwo === undefined) {
      curr = elOne;
      idx1++;
    } else if (elOne < elTwo) {
      curr = elOne;
      idx1++;
    } else {
      curr = elTwo;
      idx2++;
    }
  }
  return totalLen % 2 === 0 ? (last + curr) / 2 : curr;
}

/*
time complexity: O(m + n);
space complexity: O(1)
*/

console.log(findMedianSortedArraysFaster(
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
  [0,6]
));
