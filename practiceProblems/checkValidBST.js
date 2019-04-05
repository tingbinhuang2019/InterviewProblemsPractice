class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let checkValidBST = (root) => {
  let pre = null;

  let checkBST = (root) => {
    if (root === null) return true;
    if (!checkBST(root.left)) return false;
    if (pre !== null && pre >= root.val) return false;
    pre = root;
    if (!checkBST(root.right)) return false;
    return true;
  }
}