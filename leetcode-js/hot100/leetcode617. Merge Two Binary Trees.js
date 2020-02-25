/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if(!t1 && !t2) return null;
    let root = new TreeNode();
    root.val = 0;
    let [t1Left, t2Left, t1Right, t2Right] = [null, null, null, null];
    if(t1) {
        root.val += t1.val;
        t1Left = t1.left;
        t1Right = t1.right;
    }
    if(t2) {
        root.val += t2.val;
        t2Left = t2.left;
        t2Right = t2.right;
    }
    root.left = mergeTrees(t1Left, t2Left);
    root.right = mergeTrees(t1Right, t2Right);
    return root;
};
