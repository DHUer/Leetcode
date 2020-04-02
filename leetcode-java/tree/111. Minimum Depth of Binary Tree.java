/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
package tree;
class Solution {
    public int minDepth(TreeNode root) {
        if(root == null) return 0;
        if(root.left == null) {
            return minDepth(root.right) + 1;
        } else if(root.right == null) {
            return minDepth(root.left) + 1;
        } else {
            int leftHeight = minDepth(root.left);
            int rightHeight = minDepth(root.right);
            return Math.min(leftHeight, rightHeight) + 1;
        }
    }
}