/**
 * @LeetCode - #208 - https://leetcode.com/problems/implement-trie-prefix-tree/
 * @ProblemDescription
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
 * Implement the Trie class:
 * Trie() Initializes the trie object.
 * void insert(String word) Inserts the string word into the trie.
 * boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
 * boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 */



class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        if (!word) return;

        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (node.children.hasOwnProperty(word[i])) {
                node = node.children[word[i]];
                continue;
            } else {
                node.children[word[i]] = new TrieNode();
                node = node.children[word[i]]
            }
        }
        node.isEndOfWord = true;
    }

    search(word) {
        if (!word) return false;

        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (node.children.hasOwnProperty(word[i])) node = node.children[word[i]];
            else return false;
        }

        return node.isEndOfWord;
    }

    startsWith(word) {
        if (!word) return false;

        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (node.children.hasOwnProperty(word[i])) node = node.children[word[i]];
            else return false;
        }

        return true;
    }
}