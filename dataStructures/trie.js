const util = require('util');
const options = { depth: null, colors: true };

// Use this function to print the output on node repl
const printThis = object => console.log(util.inspect(object, options));

class TrieNode {
  constructor(word) {
    this.word = word || '';
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('');
  }

  insert(wordInput) {
    let currNode = this.root;

    for (let i = 0; i < wordInput.length; i++) {
      let letter = wordInput[i];
      // if double letter add the same TrieNode
      let child = (currNode.children[letter] =
        currNode.children[letter] || new TrieNode(letter));

      currNode = child;
    }

    currNode.isWord = true;
  }

  searchHelper(word) {
    let curr = this.root;

    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      curr = curr.children[letter];

      if (!curr) {
        return null;
      }
    }
    return curr;
  }

  search(word) {
    let result = this.searchHelper(word);

    return (result && result.isWord) || false;
  }

  startsWith(word) {
    return !!this.searchHelper(word);
  }
}
