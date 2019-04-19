/* Maximum depth on binary tree is a node 
that has the longest path from root node to itself.

Example: 

              1
            /   \
           2     3
                / \
               4   5
              / \
             6   7 
             
maximum depth: 3 (from 6 or 7 to 1)
*/

let findMaxDepth = (root) => {
  if (root === null) {
    return 0;
  }
  return Math.max(findMaxDepth(root.left), findMaxDepth(root.right)) + 1;
}
