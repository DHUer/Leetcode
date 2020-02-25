/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let map = new Map();
var diameterOfBinaryTree = function(root) {
    if(!root)
        return 0;
    if(!map.has(root.left)){
        let left = depth(root.left);
        map.set(root.left, left);
    }
    if(!map.has(root.right)){
        let right = depth(root.right);
        map.set(root.right, right);
    }
    return Math.max(diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right), map.get(root.left) + map.get(root.right));
};


function depth(root){
    if(!root)
	return 0;
    return Math.max(1 + depth(root.left), 1 + depth(root.right));
}
