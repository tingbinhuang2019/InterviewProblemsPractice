class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {

    let add = (root, val) => {
      if (root === null) {
        root = new Node(val);

      } else {
        if (val < root.val) {
          root.left = this.insert(root.left, val);
        } else if (val > root.val) {
          root.right = this.insert(root.right, val);
        }
      }
      console.log(root);
      // return root;
    }
    add(this.root, val);
  }
}

let bst = new BST();

bst.insert(14);
bst.insert(2);
bst.insert(3);
bst.insert(7);
console.log(bst.root)
