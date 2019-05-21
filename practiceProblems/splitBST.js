/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} V
 * @return {TreeNode[]}
 * # 776
 */

var TreeNode = function (val) {
  this.val = val;
  this.left = this.right = null;
}

var splitBST = function (root, V) {

  if (root === null) {
    return [null, null];
  } else if (root.val <= V) {
    let parts = splitBST(root.right, V);
    root.right = parts[0];
    parts[0] = root;
    return parts;
  } else {
    let parts = splitBST(root.left, V);
    root.left = parts[1];
    parts[1] = root;
    return parts;
  }
};

let printNode = (node) => {
  if (node === null || node === undefined) {
    return;
  }
  console.log(node.val);
  printNode(node.left);
  printNode(node.right);
}

let tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.right = new TreeNode(6);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);
tree.right.left = new TreeNode(5);
tree.right.right = new TreeNode(7);

console.log(splitBST(tree, 2));
// console.log(splitBST(tree, 3));
// console.log(splitBST(tree, 6));