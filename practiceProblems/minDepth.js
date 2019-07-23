/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * # 111 
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {

  if (root === null) {
    return 0;
  }

  let l = Number.MAX_VALUE;

  let getLevel = (root, level) => {
    if (root === null) {
      return;
    }

    if (root !== null && root.left === null && root.right === null) {
      if (level < l) {
        l = level;
      }
    }
    getLevel(root.left, level + 1);
    getLevel(root.right, level + 1);
  }
  getLevel(root, 1);
  return l;
};