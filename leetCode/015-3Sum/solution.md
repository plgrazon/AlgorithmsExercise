### Solution

There are various ways to solve this problem. 
1. Brute Force
    * using 3 for loops
2. Using a for loop and two sum 2 pointer
3. Using a for loop and two sum hash table

### Brute Force

This is very straight forward. We just need to make 3 for loops. One edge case
is if there are duplicate numbers. If there are duplicate numbers the best way
to approach this would be sorting the numbers and on the main / outer loop, we
would be skipping if the currentNumber is the same as the previous number. If no
duplicates we can skip sorting.

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

### For loop and Two Sum Hash Table

Didn't try this yet