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
var sumNumbers = function(root) {
    function dfs(root, sum) {
        if(root == null) return 0
        if(root.left == null && root.right == null) return sum * 10 + root.val
        return dfs(root.left, sum * 10 + root.val) + dfs(root.right, sum * 10 + root.val)
    }
    return dfs(root, 0)
};