/**
 * In a binary tree, the root node is at depth 0, and
 * children of each depth k node are at depth k+1.
 *
 * Two nodes of a binary tree are cousins if they have the
 * same depth, but have different parents.
 *
 * We are given the root of a binary tree with unique values,
 * and the values x and y of two different nodes in the tree.
 *
 * Return true if and only if the nodes corresponding to the
 * values x and y are cousins.
 *
 * Example 1:
 * Input: root = [1,2,3,4], x = 4, y = 3
 * Output: false
 *
 *           1
 *          / \
 *         2   3
 *        /
 *       4
 *
 * Example 2:
 * Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
 * Output: true
 *
 *           1
 *          / \
 *         2   3
 *          \   \
 *           4   5
 *
 * Example 3:
 * Input: root = [1,2,3,null,4], x = 2, y = 3
 * Output: false
 *
 *           1
 *          / \
 *         2   3
 *          \
 *           4
 *
 * Note:
 * The number of nodes in the tree will be between 2 and 100.
 * Each node has a unique integer value from 1 to 100.
 *
 * Definition for a binary tree node.
 *
 * function TreeNode(val, left, right) {
 *  this.val = (val===undefined ? 0 : val)
 *  this.left = (left===undefined ? null : left)
 *  this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

// BFS
var isCousins = function (root, x, y) {
  const queue = [root];
  const xyNodes = { x: [null, null], y: [null, null] };
  let depth = 1;

  // Traverse down
  while (queue.length) {
    // Traverse sideways
    let nodes = queue.length;
    while (nodes) {
      let parent = queue.shift();

      if (parent.left) {
        if (parent.left.val === x) {
          xyNodes.x = [depth, parent.val];
        } else if (parent.left.val === y) {
          xyNodes.y = [depth, parent.val];
        } else {
          queue.push(parent.left);
        }
      }

      if (parent.right) {
        if (parent.right.val === x) {
          xyNodes.x = [depth, parent.val];
        } else if (parent.right.val === y) {
          xyNodes.y = [depth, parent.val];
        } else {
          queue.push(parent.right);
        }
      }

      nodes--;
    }
    depth++;
  }

  return xyNodes.x[0] === xyNodes.y[0] && xyNodes.x[1] !== xyNodes.y[1];
};

// DFS
var isCousins = function (root, x, y) {
  if (!root || !x || !y) {
    return false;
  }

  const xyNodes = {};

  const dfs = (node, depth, parent) => {
    if (!node) {
      return;
    }

    if (node.val === x) {
      xyNodes.x = [depth, parent];
    }

    if (node.val === y) {
      xyNodes.y = [depth, parent];
    }

    if (xyNodes.x && xyNodes.y) {
      return;
    }

    dfs(node.left, depth + 1, node);
    dfs(node.right, depth + 1, node);
  };

  dfs(root, 0, null);

  return xyNodes.x[0] === xyNodes.y[0] && xyNodes.x[1] !== xyNodes.y[1];
};
