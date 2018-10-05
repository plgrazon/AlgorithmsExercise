function binarySearch(target, nums) {
  let floorIdx = 0;
  let ceilingIdx = nums.length - 1;
  let middleIdx;
  let value;

  while(floorIdx <= ceilingIdx) {
    middleIdx = Math.floor((floorIdx + ceilingIdx) / 2);
    value = nums[middleIdx];

    if (target === value) {
      return middleIdx;
    } else if (target < value) {
      ceilingIdx = middleIdx - 1;
    } else {
      floorIdx = middleIdx + 1;
    }
  }
  return -1;
}
