/**
 * Represents a node in a binary search tree.
 * @template T The type of value stored in the node.
 */
class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  /**
   * Creates a new node.
   * @param {T} value - The value to be stored in the node.
   */
  constructor(value: T) {
    this.value = value;
  }
}

/**
 * Represents a binary search tree.
 * @template T The type of elements in the tree.
 */
export class BinarySearchTree<T> {
  private root: TreeNode<T> | null = null;

  /**
   * Inserts a value into the tree.
   * @param {T} value - The value to insert.
   */
  insert(value: T): void {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  /**
   * Searches for a value in the tree.
   * @param {T} value - The value to search for.
   * @returns {boolean} True if found, false otherwise.
   */
  search(value: T): boolean {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  delete(value: T): boolean {
    const deleteNode = (node: TreeNode<T> | null): TreeNode<T> | null => {
      if (!node) return null;

      if (value < node.value) {
        node.left = deleteNode(node.left);
      } else if (value > node.value) {
        node.right = deleteNode(node.right);
      } else {
        if (!node.left) return node.right
        if (!node.right) return node.left;

        let minLargeNode = node.right;
        while (minLargeNode && minLargeNode.left) {
          minLargeNode = minLargeNode.left;
        }
        node.value = minLargeNode!.value;
        node.right = deleteNode(node.right);
      }
      return node;
    };

    const initialRoot = this.root;
    this.root = deleteNode(initialRoot);
    return this.root !== initialRoot;
  }

  height(): number {
    const calculateHeight = (node: TreeNode<T> | null): number => {
      if (!node) return -1;
      return 1 + Math.max(calculateHeight(node.left), calculateHeight(node.right));
    };

    return calculateHeight(this.root);
  }

  countNodes(): number {
    const count = (node: TreeNode<T> | null): number => {
      if (!node) return 0;
      return 1 + count(node.left) + count(node.right);
    }

    return count(this.root);
  }
}