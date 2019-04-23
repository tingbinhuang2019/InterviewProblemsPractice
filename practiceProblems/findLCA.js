function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return -1;
  }

  if (root.val === p || root.val === q) {
    return root.val;
  }

  let l = lowestCommonAncestor(root.left, p, q);
  let r = lowestCommonAncestor(root.right, p, q);

  if (l !== -1 && r !== -1) {
    return root.val;
  } else {
    return l + r + 1;
  }
};

let a = new TreeNode(3);
a.left = new TreeNode(5);
a.left.left = new TreeNode(6);
a.left.right = new TreeNode(2);
a.left.right.left = new TreeNode(7);
a.left.right.right = new TreeNode(4);
a.right = new TreeNode(1);
a.right.left = new TreeNode(0);
a.right.right = new TreeNode(8);

console.log(lowestCommonAncestor(a, 7, 1));