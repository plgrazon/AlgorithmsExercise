/**
 * Write a function to delete a node (except the tail) in a singly linked list,
 * given only access to that node.
 *
 * Given linked list -- head = [4,5,1,9], which looks like following:
 *   ---     ---     ---     ---
 *  | 4 |-->| 5 |-->| 1 |-->| 9 |
 *   ---     ---     ---     ---
 *
 * Example 1:
 * Input: head = [4,5,1,9], node = 5
 * Output: [4,1,9]
 * Explanation: You are given the second node with value 5, the linked list
 * should become 4 -> 1 -> 9 after calling your function.
 *
 * Example 2:
 * Input: head = [4,5,1,9], node = 1
 * Output: [4,5,9]
 * Explanation: You are given the third node with value 1, the linked list
 * should become 4 -> 5 -> 9 after calling your function.
 *
 * Note:
 * The linked list will have at least two elements.
 * All of the nodes' values will be unique.
 * The given node will not be the tail and it will always be a valid node of
 * the linked list.
 * Do not return anything from your function.
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// Time: O(1);
// Space: O(1);
const deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

/**
 * Explanation:
 * Given the node that we're supposed to delete we can't just remove it, the
 * solution is to change the value then modify the pointer.
 *
 * Exammple:
 *  Head:
 *   ---     ---     ---     ---     ---
 *  | 4 |-->| 5 |-->| 1 |-->| 9 |-->| x |
 *   ---     ---     ---     ---     ---
 *            ^ Target and node param.
 * Step 1:
 * Change the value of the target to the value of the next node
 *   ---     ---     ---     ---     ---
 *  | 4 |-->| 1 |-->| 1 |-->| 9 |-->| x |
 *   ---     ---     ---     ---     ---
 *
 * Step 2:
 * Change the pointer of target to the next.next
 *   ---     ---     ---     ---     ---
 *  | 4 |-->| 1 |-->| 1 |-->| 9 |-->| x |
 *   ---     ---     ---     ---     ---
 *            ^---------------^
 *
 * Output:
 *   ---     ---     ---     ---
 *  | 4 |-->| 1 |-->| 9 |-->| x |
 *   ---     ---     ---     ---
 */
