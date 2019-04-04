// This is the iteration version of binary search tree class. 

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST1 {
  constructor() {
    this.root = null;
    this.obj = {};
  }
	/*
		Insert method in BST.
	*/
  insert(val) {
    // let newNode = new Node(val);
    let newNode;
    if (this.root === null) {
      newNode = new Node(val);
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (val < current.value) {
          if (current.left === null) {
            newNode = new Node(val);
            current.left = newNode;
            break;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if (current.right === null) {
            newNode = new Node(val);
            current.right = newNode;
            break;
          } else {
            current = current.right;
          }
        }
      }
      if (newNode !== undefined) {
        this.obj[newNode.value] = 1;
      }
    }
  }
	/*
		Find method in BST.
	*/
  find(val) {
    if (this.root === null) return false;
    let current = this.root;

    while (true) {
      if (val === current.value) {
        return true;
      } else if (val < current.value) {
        if (current.left === null) {
          return false;
        } else {
          current = current.left;
        }
      } else if (val > current.value) {
        if (current.right === null) {
          return false;
        } else {
          current = current.right;
        }
      }
    }
  }

  remove(val) {
    if (this.obj[val]) {
      this.removeNode(this.root, val);
    }
  }

  removeNode(root, val) {
    if (val < root.value) {
      root.left = this.removeNode(root.left, val);
      return root;
    } else if (val > root.value) {
      root.right = this.removeNode(root.right, val);
      return root;
    } else {
      if (root.left === null && root.right === null) {
        root = null;
        return root;
      } else if (root.left === null) {
        // left child is empty
        return root.right;
      } else if (root.right === null) {
        // right child is empty
        return root.left;
      } else {
        // left and right are NOT empty
        let tempNode = root.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        root.value = tempNode.value;
        root.right = this.removeNode(root.right, tempNode.value);
        return root;
      }
    }
  }

  print() {
    let data = [];
    this.printInOrder(this.root, data);
    return data;
  }

  printInOrder(root, data) {
    if (root === null) return;
    if (root.left) {
      this.printInOrder(root.left, data);
    }
    console.log(root.value);
    if (root.right) {
      this.printInOrder(root.right, data);
    }
  }
}



