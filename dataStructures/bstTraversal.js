/**
 * There are 3 different ways to traverse a BST and they are the following:
 *
 *        F
 *       / \
 *      B   \
 *     / \   G
 *    A   D   \
 *       / \   \
 *      C  E   I
 *            /
 *           H
 *
 * 1.) Pre-order Traversal (Root, Left, Right)
 *     Output: F B A D C E G I H
 *
 * 2.) In-order Traversal (Left, Root, Right)
 *     - this will result in a ascending order
 *     Output: A B C D E F G H I
 *
 * 3.) Post-order Traversal (Left, Right, Root)
 *     Output: A C E D B H I G F
 *
 * The tree ways above uses depth search traversal (stack). One other way:
 *
 * 4.) Breadth First Traversal (Left, Right)
 *     Output: F B G A D I C E H
 */

/**
 * Pre-Order Traversal:
 */
// Time: O(n);
// Space: O(n);
// Iterative:
const preOrderIterative = (node) => {
  const stack = [root];
  const result = [];

  while (stack.length) {
    let curr = stack.pop();
    result.push(curr.val);

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  return result;
};
// Time: O(n);
// Space: O(n);
// Recursive:
const preOrderRecursive = (root) => {
  const nodeList = [];

  const dfs = (node) => {
    if (!node) return;
    nodeList.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };

  return nodeList;
};

/**
 * In-Order Traversal:
 */
// Time: O(n);
// Space: O(n);
// Iterative:
const inOrderIterative = (node) => {
  const stack = [];
  const result = [];
  const curr = node;

  while (stack || curr) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      result.push(curr.val);
      curr = curr.right;
    }
  }

  return result;
};
// Time: O(n);
// Space: O(n);
// Recursive:
const inOrderRecursive = (root) => {
  const nodeList = [];

  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    nodeList.push(node.val);
    dfs(node.right);
  };

  return nodeList;
};

/**
 * Post-Order Traversal:
 */
// Time: O(n^2);
// Space: O(n);
// Iterative:
// Solving using unshift which is O(n) which makes this exponential.
const postOrderIterativeUnshift = (node) => {
  const stack = [root];
  const result = [];

  while (stack.length) {
    let curr = stack.pop();
    result.unshift(curr.val);

    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }

  return result;
};
// Time: O(n);
// Space: O(n);
// Solving using reverse which is O(n) and traversal O(n) this is O(2n) or O(n).
const postOrderIterativeReverse = (node) => {
  const stack = [root];
  const result = [];

  while (stack.length) {
    let curr = stack.pop();
    result.push(curr.val);

    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }

  return result.reverse();
};
// Time: O(n^2);
// Space: O(n);
// Recursive:
const postOrderRecursive = (root) => {
  const nodeList = [];

  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    nodeList.push(node.val);
  };

  return nodeList;
};
