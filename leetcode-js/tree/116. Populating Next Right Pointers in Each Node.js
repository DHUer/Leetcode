/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(root == null) return null
    let pre = root
    let cur = null
    while(pre.left) {
        cur = pre
        while(cur) {
            cur.left.next = cur.right
            if(cur.next) cur.right.next = cur.next.left
            cur = cur.next
        }
        pre = pre.left
    }
    return root
};