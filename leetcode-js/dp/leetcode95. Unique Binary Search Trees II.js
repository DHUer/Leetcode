
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(!n) return []
    function dfs(start, end) {
        let res = []
        if(start > end) {
            res.push(null)
            return res 
        }
        if(start == end) {
            res.push(new TreeNode(start))
            return res
        }
        let left, right
        for(let i = start; i <= end; i ++) {
            left = dfs(start, i - 1)
            right = dfs(i + 1, end)
            for(const lnode of left){
                for(const rnode of right) {
                    let root = new TreeNode(i)
                    root.left = lnode
                    root.right = rnode
                    res.push(root)
                }
            }
        }
        return res

    }
    return dfs(1, n)
};
