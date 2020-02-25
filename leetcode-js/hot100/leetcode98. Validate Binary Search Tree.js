/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let [stack, pre, cur] = [[], null, root];
    while(cur!=null || stack.length != 0){
        while(cur != null){
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        if(pre!=null && pre.val >= cur.val) return false;
        pre = cur;
        cur = cur.right;
    }
    return true;
};