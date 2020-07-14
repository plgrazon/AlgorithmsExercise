/**
 * Given two binary trees, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical
 * and the nodes have the same value.
 *
 * Example 1:
 * Input:
 *       1         1
 *      / \       / \
 *     2   3     2   3
 *    [1,2,3]   [1,2,3]
 *
 * Output: true
 *
 * Example 2:
 * Input:
 *      1         1
 *     /           \
 *    2             2
 *  [1,2]       [1,null,2]
 *
 * Output: false
 *
 * Example 3:
 * Input:
 *      1         1
 *     / \       / \
 *    2   1     1   2
 *   [1,2,1]   [1,1,2]
 *
 * Output: false
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// Time: O(2n);
// Space: O(2n);
// The first solution is not optimal and is a brute force way.
let isSameTree = function(p, q) {
  let treeOne = [];
  let treeTwo = [];

  const dfs = (node, flag) => {
    if (!node) {
      flag === "first" ? treeOne.push(0) : treeTwo.push(0);
      return;
    }

    if (flag === "first") treeOne.push(node.val);
    else treeTwo.push(node.val);

    dfs(node.left, flag);
    dfs(node.right, flag);
  };

  dfs(p, "first");
  dfs(q);

  return treeOne.join("") === treeTwo.join("");
};

// Time: O(n);
// Space: O(n);
// A more optimal approach where we use one call that would check both trees
// simultaneously.
let isSameTree = function(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
