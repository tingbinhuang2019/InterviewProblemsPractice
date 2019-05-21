/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 * # 450 
 */

var TreeNode = function (val) {
  this.val = val;
  this.left = this.right = null;
}

let findMin = (root) => {

  while (root.left !== null) {
    root = root.left;
  }
  return root;
}

var deleteNode = function (root, key) {
  if (root === null) {
    return null;
  }
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left === null) {
      return root.right;
    }
    if (root.right === null) {
      return root.left;
    }
    let minNode = findMin(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, root.val);
  }
  return root;
};

let printNode = (node) => {
  if (node === null || node === undefined) {
    return;
  }
  console.log(node.val);
  printNode(node.left);
  printNode(node.right);
}

let tree = new TreeNode(5);
tree.left = new TreeNode(3);
tree.right = new TreeNode(6);
tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(4);
tree.right.right = new TreeNode(7);

// printNode(tree);
printNode(deleteNode(tree, 3));
