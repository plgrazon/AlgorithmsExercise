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

  traverse(callback) {
    const walk = node => {
      callback(node);
      node.children.forEach(walk);
    }
    walk(this.root);
  }

  add(value, parentValue) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    this.traverse(node => {
      if (node.value === parentValue) {
        node.children.push(newNode);
      }
    });
  }
}
