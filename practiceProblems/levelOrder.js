/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * # 102 
 */

var TreeNode = function (val) {
  this.val = val;
  this.left = this.right = null;
}

var levelOrder = function (root) {
  let arr = [], res = [];
  let i = 0, j = 0;
  arr.push(root);
  arr.push('#');

  while (i < arr.length) {
    if (arr[i] !== '#') {
      if (arr[i].left !== null) arr.push(arr[i].left);
      if (arr[i].right !== null) arr.push(arr[i].right);
    } else if (arr[i] === '#' && i === arr.length - 1) {
      break;
    } else {
      arr.push('#');
    }
    i++;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '#') {
      j++;
    } else {
      if (res[j] === undefined) {
        res[j] = [];
      }
      res[j].push(arr[i].val);
    }
  }
  return res;
};

let tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);
console.log(levelOrder(tree));