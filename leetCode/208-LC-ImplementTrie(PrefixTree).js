/**
 * Implement a trie with insert, search, and startsWith methods.
 *
 * Example:
 *
 * Trie trie = new Trie();
 *
 * trie.insert("apple");
 * trie.search("apple");   // returns true
 * trie.search("app");     // returns false
 * trie.startsWith("app"); // returns true
 * trie.insert("app");
 * trie.search("app");     // returns true
 *
 * Note:
 *
 * You may assume that all inputs are consist of lowercase letters a-z.
 * All inputs are guaranteed to be non-empty strings.
 */
/**
 * Initialize your data structure here.
 */
class TrieNode {
  constructor(letter) {
    this.letter = letter;
    this.children = new Map();
    this.isWord = false;
  }
}

// Time: O(mn);
// Space: O(mn);
// m = number of children
// n = word length
var Trie = function () {
  this.root = new TrieNode('');
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let curr = this.root;

  for (let char of word) {
    if (!curr.children.has(char)) {
      curr.children.set(char, new TrieNode(char));
    }

    curr = curr.children.get(char);
  }

  curr.isWord = true;
};

Trie.prototype.searchHelper = function (word) {
  let curr = this.root;

  for (let char of word) {
    if (!curr.children.has(char)) {
      return null;
    } else {
      curr = curr.children.get(char);
    }
  }

  return curr;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let result = this.searchHelper(word);

  return !!(result && result.isWord);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let result = this.searchHelper(prefix);

  return !!result;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
