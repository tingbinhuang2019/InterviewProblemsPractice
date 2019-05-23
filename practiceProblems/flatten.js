var TreeNode = function (val) {
  this.val = val;
  this.left = this.right = null;
}

let treeToLinkedList = (root) => {
  let pre = null;

  let flatten = (root) => {
    if (root === null) {
      return;
    }
    flatten(root.right);
    flatten(root.left);
    root.right = pre;
    root.left = null;
    pre = root;
  }
  flatten(root);
  return root;
}
let tree = new TreeNode(5);
tree.left = new TreeNode(3);
tree.right = new TreeNode(6);
tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(4);
tree.right.right = new TreeNode(7);
console.log(treeToLinkedList(tree));