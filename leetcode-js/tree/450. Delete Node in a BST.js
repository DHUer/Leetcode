/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    let  cur = root
    let pre = null
    while(cur != null && cur.val != key) {
        pre = cur
        if(key > cur.val) {
            cur = cur.right
        } else if(key < cur.val) {
            cur = cur.left
        }
    }
    if(pre == null) {
        return deleteRootNode(cur) 
    }
    if(pre.left == cur) {
        pre.left = deleteRootNode(cur)
    } else if(pre.right == cur) {
        pre.right = deleteRootNode(cur)
    }

    return root
};

function deleteRootNode(cur) {
    if(cur == null) {
        return null
    } else if(cur.left == null) {
        return cur.right
    } else if(cur.right == null) {
        return cur.left
    } else {
        let next = cur.right
        let pre = null
        for(;next.left != null; pre = next, next = next.left);
        next.left = cur.left
        if(cur.right != next) {
            pre.left = next.right
            next.right = cur.right
        }
        return next
    }
}