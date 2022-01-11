/**
 * Invert a binary tree.
 *
 * Example:
 *
 * Input:
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 *
 * Output:
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 *
 * Trivia:
 * This problem was inspired by this original tweet by Max Howell:
 *
 * Google: 90% of our engineers use the software you wrote (Homebrew),
 * but you can’t invert a binary tree on a whiteboard so f*** off.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// Time: O(n);
// Space: O(1);
let invertTree = function (root) {
  const dfs = (node) => {
    if (!node) return null;

    let left = dfs(node.left);
    let right = dfs(node.right);

    node.left = right;
    node.right = left;

    return node;
  };

  dfs(root);
  return root;
};

// Time: O(n);
// Space: O(n);
let invertTree = function (root) {
  const queue = [root];

  while (queue.length) {
    let parent = queue.shift();

    if (!parent) continue;
    if (parent.left) queue.push(parent.left);
    if (parent.right) queue.push(parent.right);

    let left = parent.left;
    let right = parent.right;

    parent.left = right;
    parent.right = left;
  }

  return root;
};
