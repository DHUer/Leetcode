/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let [cur, rootStack, res] = [root, [], []];
    
    while(cur != null || rootStack.length){
        while(cur != null){
            rootStack.push(cur);
            cur = cur.left;
        }
        let temp = rootStack.pop();
        res.push(temp.val);
        cur = temp.right;
    }
    return res;
};