/**
 * Given a binary tree, find its maximum depth.
 *
 * The maximum depth is the number of nodes along the longest path from the root
 *  node down to the farthest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 * Given binary tree [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * return its depth = 3.
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 *
 * @param {TreeNode} root
 * @return {number}
 */
// Time: O(n);
// Space: O(1);
// Iteratively:
var maxDepth = function (root) {
  const queue = [root];
  let depth = 0;

  if (!root) return depth;

  while (queue.length) {
    let nodes = queue.length;
    while (nodes) {
      let parent = queue.shift();

      if (parent.left) queue.push(parent.left);
      if (parent.right) queue.push(parent.right);
      nodes--;
    }
    depth++;
  }

  return depth;
};

// Recursively:
// Time: O(n);
// Space: O(1);
var maxDepth = function (root) {
  let self = 1;

  const dfs = (node) => {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);

    return Math.max(left, right) + self;
  };

  return dfs(root);
};
