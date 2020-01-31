/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(root == null) return;
    let left = root.left;
    let right = root.right;

    flatten(root.left);
    flatten(root.right);
    root.left = null;    
    root.right = left;
    let cur = root;
    while(cur.right != null) cur = cur.right;
    cur.right = right;
};