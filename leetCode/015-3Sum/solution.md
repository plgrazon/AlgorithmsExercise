### Solution

There are various ways to solve this problem. 
1. Brute Force
    * using 3 for loops
2. Using a for loop and two sum 2 pointer
3. Using a for loop and two sum hash table

### Brute Force

This is very straight forward. We just need to make 3 nested for loops. If there are duplicates the best way to approach this would be sorting the array first
that way we can compare neighboring numbers. If the number has been visited
before we just skip it.
#### Code

No Duplicates:
```javascript
var threeSum = function(nums) {
  const result = [];
  
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {      
        let sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  
  return result;
};
```

With Duplicates:
```javascript
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      
      for (let k = j + 1; k < nums.length; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) {
          continue;
        }
        
        let sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  
  return result;
};
```

### For loop and Two Sum Pointer

For this solution the number needs to be sorted.
If all numbers are unique we can just do a regular for loop without condition and
two pointers.

If numbers are not unique we need to check the outer loop if the current firstNum
and the number before is the same. If they are we skip it.

Another edge case if we already found a pair of numbers that equates to the sum

```javascript
  [-2, -2, 0, 2, 2] target = 0;
//  ^            ^
//  lo     +     hi === 0;

result = [[-2, 2]]

  [-2, -2, 0, 2, 2] target = 0;
//      ^     ^
//      lo +  hi === 0;

result = [[-2, 2], [-2, 2]];
```

As we can see here there will be duplicates pairs if both ends have duplicates.
To solve this instead of just incrementing both left and right pointers, we would
check if the left pointer is same as the previous num. If they are we keep on 
incrementing left.

```javascript
  [-2, -2, 0, 2, 2] target = 0;
//  ^            ^
//  lo     +     hi === 0;

result = [[-2, 2]]

  [-2, -2, 0, 2, 2] target = 0;
//         ^  ^
//         lo+hi === 2;
//         after we found the first pair, we keep on checking if there are 
//         duplicates

result = [[-2, 2]];
```

#### Code

No Duplicates
```javascript
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    
    // two sum
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let leftNum = nums[left];
      let rightNum = nums[right];
      let threeSum = currNum + leftNum + rightNum;
      
      if (threeSum > 0) {
        right--;
      } else if (threeSum < 0) {
        left++;
      } else {
        result.push([currNum, leftNum, rightNum]);
        left++;
        right--;
      }
    }
  }
  
  return result;
}
```

With Duplicates
```javascript
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    
    if (i > 0 && currNum === nums[i - 1]) {
      continue;
    }
    
    // two sum
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let leftNum = nums[left];
      let rightNum = nums[right];
      let threeSum = currNum + leftNum + rightNum;
      
      if (threeSum > 0) {
        right--;
      } else if (threeSum < 0) {
        left++;
      } else {
        result.push([currNum, leftNum, rightNum]);
        left++;
        right--;
        while (leftNum === nums[left] && left < right) {
          left++;
        }
      }
    }
  }
  
  return result;
}
```

### For loop and Two Sum Hash Table

The idea is we would be using a hash table to keep track of the difference. On
the outher loop we would get the difference between the first num and target. On
the next inner loop we would be using this difference again to subtract the
second number. This newer difference would be then stored in the hashtable if
not yet found. If found we just found our triplet, firstnum, secondnum, and third
num. If the difference is not found on the table, we would be storing the second
num in the hash table. This would only work if there are no duplicates.

Haven't tried with duplicates.
