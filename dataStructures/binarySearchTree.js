const util = require('util');
const options = {depth: null, colors: true}

// Use this function to print the output on node repl
const printThis = (object) => console.log(
  util.inspect(object, options)
)

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = null;
    if (value) {
      this.root = new Node(value);
    }
  }

  insertIteratively(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let curr = this.root;
    while(true) {
      if (value < curr.value) {
        if (!curr.left) {
          curr.left = newNode;
          return;
        } else {
          curr = curr.left
        }
      } else if (value > curr.value) {
        if (!curr.right) {
          curr.right = newNode;
          return;
        } else {
          curr = curr.right;
        }
      } else {
        return;
      }
    }
  }

  insertRecursively(value) {
    const newNode = new Node(value);
    const root = this.root;
    const recurse = node => {
      if (!node) {
        node = newNode;
      } else if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          recurse(node.left);
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          recurse(node.right);
        }
      } else {
        return;
      }
    }
    recurse(root);
  }

  containsIteratively(target) {
    if (!this.root) {
      return false;
    }
    let curr = this.root;
    while(true) {
      if (target === curr.value) {
        return true;
      } else if (target < curr.value && curr.left) {
        curr = curr.left;
      } else if (target > curr.value && curr.right) {
        curr = curr.right;
      } else {
        break;
      }
    }
    return false;
  }

  containsRecursively(target) {
    const recurse = node => {
      if (node.value === target) {
        return true;
      } else if (target < node.value && node.left) {
        return recurse(node.left);
      } else if (target > node.value && node.right) {
        return recurse(node.right);
      } else {
        return false;
      }
    }
    return recurse(this.root);
  }

  validateTree(node) {
    const isValid = (node, maxVal, minVal) => {
      if (!node) {
        return true;
      }
      if (node.val <= minVal || node.val >= maxVal) {
        return false;
      }
      const isLeftValid = isValid(node.left, node.val, minVal);
      const isRightValid = isValid(node.right, maxVal, node.val);

      return isLeftValid && isRightValid;
    }
    return isValid(node, Infinity, -Infinity);
  }

  depthFirstLog(callback) {
    const walk = node => {
      if (node !== null) {
        walk(node.left);
        walk(node.right);
      }
      callback(node);
    }
    walk(this.root);
  }

  breadthFirstLog(callback) {
    const queue = [];
    queue.push(this.root);

    while(queue.length > 0) {
      let curr = queue.shift();

      callback(curr);
      if (curr.left !== null) {
        queue.push(curr.left);
      }
      if (curr.right !== null) {
        queue.push(curr.right);
      }
    }
  }
}

const bst = new BinarySearchTree(6);
bst.insertIteratively(1);
bst.insertIteratively(2);
bst.insertIteratively(3);
bst.insertIteratively(4);
bst.insertIteratively(5);

bst.insertIteratively(7);
bst.insertIteratively(8);
bst.insertIteratively(9);
bst.insertIteratively(10);
bst.insertIteratively(11);
// printThis(bst);
// console.log(bst.containsIteratively(14));
// console.log(bst.containsRecursively(14));
// printThis(bst.depthFirstLog(node =>
//   {
//     if (node) {
//       console.log(node.value);
//     }
//   })
// );
// printThis(bst.breadthFirstLog(node =>
//   {
//     if (node) {
//       console.log(node.value);
//     }
//   })
// );
// console.log('=====\n=====')
// bst.insertRecursively(5);
// bst.insertRecursively(3);
// bst.insertRecursively(2);
// bst.insertRecursively(4);
// bst.insertRecursively(1);
//
// bst.insertRecursively(11);
// bst.insertRecursively(9);
// bst.insertRecursively(8);
// bst.insertRecursively(10);
// bst.insertRecursively(7);
// printThis(bst);
const test = {
  root: {
    value: 10,
    left: {
      value: 5,
      left: {
        value: 4,
        left: {
          value: 3,
          left: null,
          right: {
            value: 3.5,
            left: null,
            right: {
              value: 6,
              left: null,
              right: null
            },
          }
        },
        right: null
      },
      right: null
    },
    right: {
      value: 15,
      left: null,
      right: null
    }
  }
}

const validateTree = node => {
  const isValid = (node, maxVal, minVal) => {
    if (!node) {
      return true;
    }
    if (node.value <= minVal || node.value >= maxVal) {
      return false;
    }
    const isLeftValid = isValid(node.left, node.value, minVal);
    const isRightValid = isValid(node.right, maxVal, node.value);

    return isLeftValid && isRightValid;
  }
  return isValid(node, Infinity, -Infinity);
}

console.log(bst.validateTree(this.root));
console.log(validateTree(test.root));
