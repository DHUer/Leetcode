/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    let nodes =  []
    storeBSTNodes(root, nodes)

    let n = nodes.length
    return buildTreeUtil(nodes, 0, n - 1)
};

var storeBSTNodes = function(root, nodes) {
    if(root == null) return
    storeBSTNodes(root.left, nodes)
    nodes.push(root)
    storeBSTNodes(root.right, nodes)
}

var buildTreeUtil = function(nodes, start, end) {
    if(start > end) return null

    let mid = Math.floor((start + end) / 2)
    let node = nodes[mid]
    node.left = buildTreeUtil(nodes, start, mid - 1)
    node.right = buildTreeUtil(nodes, mid + 1, end)
    return node
}