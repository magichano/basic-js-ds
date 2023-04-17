const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {

  constructor() {
    this.rroot = null;
  } 


  root() {
    return this.rroot;
  }

  add (data){
    this.rroot = addd(this.rroot, data);
  
    function addd(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data===data) {
        return node;
      }

      if (data < node.data) {
        node.left = addd(node.left, data);
      } else {
        node.right = addd(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return search(this.rroot, data);

    function search(node, data) {
      if (!node) {
        return false
      }

      if (node.data===data) {
        return true
      }

      if (node.data > data) {
        return search(node.left, data)
      }
      else {
        return search(node.right, data)
      }
    }
  }

  find(data) {
    return ffind(this.rroot, data);

    function ffind(node, data) {
      if (!node) {
        return null
      }

      if (node.data===data) {
        return node
      }

      if (node.data > data) {
        return ffind(node.left, data)
      }
      else {
        return ffind(node.right, data)
      }
    }
  }

  remove(data){
    return deletee(this.rroot, data)

    function deletee (node, data){
      if (!node) {
        return null
      }
      if (data < node.data) {
        node.left = deletee(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = deletee(node.right, data);
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

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = deletee(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rroot) {
      return null;
    }

    let minn = this.rroot;
    while(minn.left) {
      minn = minn.left;
    }

    return minn.data;
  }

  max() {
    if (!this.rroot) {
      return null;
    }

    let maxx = this.rroot;
    while(maxx.right) {
      maxx = maxx.right;
    }

    return maxx.data;
  }


}

module.exports = {
  BinarySearchTree
};