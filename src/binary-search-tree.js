const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    this.rootNode = addTo(this.rootNode, data)

    function addTo(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        node.left = addTo(node.left, data)
      } else {
        node.right = addTo(node.right, data)
      }

      return node
    }
  }

  has(data) {
    return check(this.rootNode, data)

    function check(node, data) {
      if (!node) {
        return false
      }

      if (node.data === data) {
        return true
      }

      if (data < node.data) {
        return check(node.left, data)
      } else {
        return check(node.right, data)
      }
    }
  }

  find(data) {
    return search(this.rootNode, data)

    function search(node, data) {
      if (!node) {
        return null
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        return search(node.left, data)
      } else {
        return search(node.right, data)
      }
    }
  }
  
  remove(data) {
    this.rootNode = deleteNode(this.rootNode, data)

    function deleteNode(node, data) {
      if (!node) {
        return null
      }

      if (data < node.data) {
        node.left = deleteNode(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = deleteNode(node.right, data)
        return node
      } else {
        // equal
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right
          return node
        }

        if (!node.right) {
          node = node.left
          return node
        }

        let minFromRight = node.right
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data

        node.right = deleteNode(node.right, minFromRight.data)

        return node
      }
    }
    
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
}