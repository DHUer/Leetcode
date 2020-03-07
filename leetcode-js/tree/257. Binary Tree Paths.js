/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let path = []
    let ans = []
    dfs(root, path)
    function dfs(root, path) {
        if(root == null) return
        path.push(root.val)
        if(root.left == null && root.right == null) {
            tem = ""
            for(let i = 0; i < path.length; i ++) {
                if(i == 0) tem += path[i]
                else tem = tem + "->" + path[i]
            }
            ans.push(tem)
            path.pop()
            return
        } else {
            dfs(root.left, path)
            dfs(root.right, path)
        }
        path.pop()
    }
    return ans
};