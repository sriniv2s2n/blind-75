/**
 * @LeetCode - #211 - https://leetcode.com/problems/design-add-and-search-words-data-structure/
 * @ProblemDescription
 * Design a data structure that supports adding new words and finding if a string matches any previously added string.
 * Implement the WordDictionary class:
 * WordDictionary() Initializes the object.
 * void addWord(word) Adds word to the data structure, it can be matched later.
 * bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 */

let Node = function () {
    this.children = {};
    this.isEndOfWord = false;
}


let WordDictionary = function () {
    this.root = new Node();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        if (!(node.children.hasOwnProperty(word[i]))) node.children[word[i]] = new Node();
        node = node.children[word[i]];
    }
    node.isEndOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    let node = this.root;

    let dfs = (node, word) => {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === ".") {
                let child = Object.keys(node.children);
                if (child.length > 0) {
                    let result = dfs(node.children[child.pop()], word.slice(i + 1));
                    while (result === false && child.length !== 0) {
                        result = dfs(node.children[child.pop()], word.slice(i + 1));
                    }
                    return result;
                } else return false;
            } else if (node.children.hasOwnProperty(word[i])) {
                node = node.children[word[i]];
            } else return false;
        }
        return node.isEndOfWord;
    }

    return dfs(node, word);

};