/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    int len = 0;
    public int longestUnivaluePath(TreeNode root) {
        if (root == null)
            return 0;
        len = 0;
        uniValuePath(root);
        return len;
    }

    public int uniValuePath(TreeNode root) {
        if(root == null) return 0;
        int l = uniValuePath(root.left);
        int r = uniValuePath(root.right);
        int pl = 0;
        int pr = 0;
        if(root.left !=null && root.val == root.left.val) pl = l + 1; 
        if(root.right != null && root.val == root.right.val) pr = r + 1;
        len = Math.max(len, pl + pr);
        return  Math.max(pl, pr);
    }
}