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
var rob = function(root) {
    let m = new Map();
    function dfs(root){
        if(!root) return 0;
        if(m.has(root)) return m.get(root);
        let val = 0;
        if(root.left) val += dfs(root.left.left) + dfs(root.left.right);
        if(root.right) val += dfs(root.right.left) + dfs(root.right.right);
        val = Math.max(val + root.val, dfs(root.left) + dfs(root.right));
        m.set(root, val);
        return val;
    }
    return dfs(root);
};