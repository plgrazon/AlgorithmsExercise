const util = require('util');
const options = { depth: null, colors: true };

// Use this function to print the output on node repl
const printThis = object => console.log(util.inspect(object, options));

class TrieNode {
  constructor(word) {
    this.word = word || null;
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor(value) {
    if (value) {
      this.root = new TrieNode(value);
    }
    this.root = new TrieNode('');
  }

  insert(wordInput) {
    let currNode = this.root;
    let letter = wordInput.slice(0, 1);
    let word = wordInput.slice(1);

    let child;

    while (letter.length) {
      if (!currNode.children[letter]) {
        child = new TrieNode(letter);
        currNode.children[letter] = child;
      } else {
        child = currNode.children[letter];
      }
      currNode = child;
      letter = word.slice(0, 1);
      word = word.slice(1);
    }
    child.isWord = true;
  }
}
