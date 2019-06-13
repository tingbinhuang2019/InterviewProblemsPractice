/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * # 129 
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var sumNumbers = function (root) {
  let sum = 0;

  let getSum = (root, num) => {

    if (root.left === null && root.right === null) {
      sum += num;
    }

    if (root.left !== null) {
      getSum(root.left, num * 10 + root.left.val);
    }

    if (root.right !== null) {
      getSum(root.right, num * 10 + root.right.val);
    }
  }

  getSum(root, root.val);
  return sum;
};

let t = new TreeNode(1);
t.left = new TreeNode(2);
t.right = new TreeNode(3);

console.log(sumNumbers(t, 1));