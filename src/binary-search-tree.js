const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  _root = null;

  root() {
    return this._root;
  }

  add(data) {
    const node = {
      data: data,
      left: null,
      right: null,
    };

    if (this._root === null) {
      this._root = node;
      return;
    }

    let currentNode = this._root;

    while (currentNode) {
      if (currentNode.data > data) {
        if (!currentNode.left) {
          currentNode.left = node;
          return;
        }

        currentNode = currentNode.left;
      } else if (currentNode.data < data) {
        if (!currentNode.right) {
          currentNode.right = node;
          return;
        }

        currentNode = currentNode.right;
      }
    }


  }

  has(data) {

    const queue = [this._root];

    while (queue.length) {
      const currentNode = queue.shift();
      if (currentNode.data === data) {
        return true;
      }
      if (currentNode.left) {
        queue.push(currentNode.left)
      }

      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this._root;

    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }

      if (currentNode.data > data) {
        currentNode = currentNode.left;
      } else if (currentNode.data < data) {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    let currentNode = this._root;

    while (currentNode) {
      if (currentNode.data === data) {
        currentNode.data = null;
      }

      if (currentNode.data > data) {
        currentNode = currentNode.left;
      } else if (currentNode.data < data) {
        currentNode = currentNode.right;
      }
    }
  }

  min() {
    let currentNode = this._root;

    while (currentNode && currentNode.left) {
      currentNode = currentNode.left;
    }

    if (currentNode === null) {
      return null;
    }

    return currentNode.data;
  }

  max() {
    let currentNode = this._root;

    while (currentNode && currentNode.right) {
      currentNode = currentNode.right;
    }

    if (currentNode === null) {
      return null;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};