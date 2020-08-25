/**
 * Given a binary tree, return all root-to-leaf paths.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 *
 * Input:
 *     1
 *   /   \
 *  2     3
 *   \
 *    5
 *
 * Output: ["1->2->5", "1->3"]
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
 */
// Time: O(n);
// Space: O(n);
const binaryTreePaths = function (root) {
  let result = [];

  const dfs = (node, path) => {
    if (!node) return;

    if (!node.left && !node.right) {
      result.push(`${path + node.val}`);
      return;
    }

    dfs(node.left, `${path + node.val}->`);
    dfs(node.right, `${path + node.val}->`);
  };

  dfs(root, '');
  return result;
};
