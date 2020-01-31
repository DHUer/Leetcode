
//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root == null) return 0;
    return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};

let node1 = new TreeNode(3);
let node2 = new TreeNode(9);
let node3 = new TreeNode(20);
let node4 = new TreeNode(15);
let node5 = new TreeNode(7);


node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

console.log(maxDepth(node1))