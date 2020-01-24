/**
 * Given a binary search tree, rearrange the tree in in-order so that the left
 * most node in the tree is now the root of the tree, and every node has no
 * left child and only 1 right child.
 *
 * Example:
 * Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]
 * Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 **/

const TreeNode = val => {
  this.val = val;
  this.left = null;
  this.right = null;
};

// Depth first search was used for all of the solutions.
// Solution 1:

const increasingBST = root => {
  const nums = [];

  const traverse = node => {
    if (node !== null) {
      traverse(node.left);
      nums.push(node.val);
      traverse(node.right);
    } else {
      return;
    }
  };
  traverse(root);

  const newRoot = new TreeNode(nums[0]);
  let curr = newRoot;
  for (let i = 1; i < nums.length; i++) {
    let newNode = new TreeNode(nums[i]);
    curr.right = newNode;
    curr = newNode;
  }
  return newRoot;
};

// Solution 2:
// Faster method by traversing left and adding the root to the right.
// Only return the right because the root has empty val and left val.

const increasingBST = root => {
  let newRoot = new TreeNode();
  let currNode = newRoot;

  const traverse = node => {
    if (node !== null) {
      traverse(node.left);
      currNode.right = node;
      currNode = currNode.right;
      currNode.left = null;
      traverse(node.right);
    }
  };
  traverse(root);
  return newRoot;
};

// Solution 3
// Fastest solution

const increasingBST = root => {
  const traverse = node => {
    if (node !== null) {
      traverse(node.left);
      newRoot.right = new TreeNode(node.val);
      newRoot = newRoot.right;
      traverse(node.right);
    } else {
      return;
    }
  };

  let newRoot = new TreeNode();
  let head = newRoot;
  traverse(root);
  return head.right;
};
