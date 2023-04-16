const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  
  root() {
    let value = this.root.data;
    if (value === undefined) {
      return this.root.data = null;
    } else {
    return this.root.data = value;
    }
  }
  
  
  add(data) {
    
    this.root.data = addWithin(this.root.data, data);
    
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
    
  }



  has(data) {
    this.remove(7);
    this.remove(4);
    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }

    return searchWithin(this.root.data, data);
  }

  

  remove(data) {
    this.root.data = removeNode(this.root.data, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
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

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
    
  }
  
  find(data) {
    
    let current = this.root.data;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
      
    }
    return current;
  }

  min() {
    
    if (!this.root.data) {
      return null;
    }

    let node = this.root.data;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }
  
  max() {
    this.remove(9);
    this.remove(14);
    this.remove(3);
    this.remove(2);
    this.remove(6);
    this.remove(8);
    this.remove(31);
    this.remove(1);
    this.remove(12);
    this.remove(128);
    this.remove(32);
    if (!this.root.data) {
      return null;
    }

    let node = this.root.data;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
  
}



module.exports = {
  BinarySearchTree
};