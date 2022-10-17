const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js'); 

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor () {
    this.rooten = null;
  }
  
  root() {
    if (!this.rooten) {
      return this.rooten;
    }
    else {
      return this.rooten;
    }
    
  }

  add(value) {
    this.rooten = adder(this.rooten, value);
    function adder(node, value) {
      if (!node) {
        return new Node(value);
      }
      if (node.data === value) {
        return node;
      }
      if (value < node.data) {
        node.left = adder(node.left, value);
      }
      else {
        node.right = adder(node.right, value);
      }
      return node;
    }
  }
  
  has(value) {
    return search(this.rooten, value);

    function search(node, value) {
      if (!node) {
        return false;
      }
      if (node.data === value) {
        return true;
      }

      return value < node.data ? search(node.left, value) : search(node.right, value);
    }
  }

  find(value) {
    return search(this.rooten, value);

    function search(node, value) {
      if (!node) {
        return node;
      }
      if (node.data === value) {
        return node;
      }

      return value < node.data ? search(node.left, value) : search(node.right, value);
    }
  }

  remove(value) {
    this.rooten = remover(this.rooten, value);

    function remover(node, value) {
      if (!node) {
        return null;
      }
      if (value < node.data) {
        node.left = remover(node.left, value);
        return node;
      }
      else if (node.data < value) {
        node.right = remover(node.right, value);
        return node;
      }
      else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = remover(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rooten) {
      return;
    }

    let node = this.rooten;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rooten) {
      return;
    }

    let node = this.rooten;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};