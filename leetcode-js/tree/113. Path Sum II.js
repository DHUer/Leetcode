
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let path = []
    let ans = []
    function dfs(root, currentSum, path) {
        if(root == null) return

        path.push(root.val)
        if(root.left == null && root.right == null && currentSum == root.val) {
            ans.push([...path])
            path.pop()
            return
        } else {
            dfs(root.left, currentSum - root.val, path)
            dfs(root.right, currentSum - root.val, path)
        }
        path.pop()
    }
    dfs(root, sum, path)
    return ans
};

let node1 = new TreeNode(5)
let node2 = new TreeNode(8)

node1.left = node2

pathSum(node1, 13)