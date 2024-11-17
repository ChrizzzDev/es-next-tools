/**
 * Represents a node in a Trie.
 */
class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEndOfWord: boolean = false;
}

/**
 * Represents a Trie (prefix tree).
 */
export class Trie {
  private root: TrieNode = new TrieNode();

  /**
   * Inserts a word into the Trie.
   * @param {string} word - The word to insert.
   */
  insert(word: string): void {
    let current = this.root;
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char)!;
    }
    current.isEndOfWord = true;
  }

  /**
   * Searches for a word in the Trie.
   * @param {string} word - The word to search for.
   * @returns {boolean} True if found, false otherwise.
   */
  search(word: string): boolean {
    let current = this.root;
    for (const char of word) {
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char)!;
    }
    return current.isEndOfWord;
  }
}