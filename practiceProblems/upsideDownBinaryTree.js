/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * # 156 
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var TreeNode = function (val) {
  this.val = val;
  this.left = this.right = null;
}

var upsideDownBinaryTree = function (root) {

  let reverse = (root) => {
    if (!root || !root.left) {
      return root;
    }

    let node = reverse(root.left);
    root.left.left = root.right;
    root.left.right = root;
    root.left = null;
    root.right = null;

    return node;
  }
  return reverse(root);
};


let printNode = (root) => {
  if (root === null) {
    return;
  }
  printNode(root.left);
  printNode(root.right);
  console.log(root.val);
}

let t = new TreeNode(1);
t.left = new TreeNode(2);
t.right = new TreeNode(3);
t.left.left = new TreeNode(4);
t.left.right = new TreeNode(5);

// printNode(t);
let ttt = upsideDownBinaryTree(t);
console.log(ttt);
