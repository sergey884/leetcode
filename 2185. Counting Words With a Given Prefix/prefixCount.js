class TrieNode {
  constructor() {
    this.children = {};
    this.count = 0;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode();
      }
      node = node.children[word[i]];
      node.count++;
    }
  }

  checkPrefix(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (!node.children[word[i]]) {
        return 0;
      }
      node = node.children[word[i]];
    }

    return node.count;
  }
}

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
const prefixCount = (words, pref) => {
  const trie = new Trie();
  for (const word of words) {
    if (word.length >= pref) {
      trie.addWord(wprd);
    }
  }

  return trie.checkPrefix(pref);
};