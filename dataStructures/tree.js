const util = require('util');
const options = {depth: null, colors: true}

// Use this function to print the output on node repl
const printThis = (object) => console.log(
  util.inspect(object, options)
)

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor(value) {
    this.root = null;
    if (value) {
      this.root = new Node(value);
    }
  }

  traverseDF(callback) {
    const walk = node => {
      node.children.forEach(walk);
      callback(node);
    }
    walk(this.root);
  }

  traverseBF(callback) {
    const queue = [];
    queue.push(this.root);

    while(queue.length > 0) {
      let node = queue.shift();
      callback(node);

      node.children.forEach(leaf => queue.push(leaf));
    }
  }

  add(value, parentValue) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    this.traverseDF(node => {
      if (node.value === parentValue) {
        node.children.push(newNode);
      }
    });
  }
}

const tree = new Tree('Chairman');
tree.add('CEO', 'Chairman');
tree.add('CTO', 'Chairman');
tree.add('CFO', 'Chairman');
tree.add('VP Operations', 'CEO');
tree.add('Salesman 1', 'VP Operations');
tree.add('Salesman 2', 'VP Operations');
tree.add('Salesman 3', 'VP Operations');
tree.add('VP Software', 'CTO');
tree.add('Engineer 1', 'VP Software');
tree.add('VP Accounting', 'CFO');
printThis(tree.traverseBF(node => console.log(node.value)));
