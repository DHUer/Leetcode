package tree;
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
    public boolean btreeGameWinningMove(TreeNode root, int n, int x) {
        val = x;
        count(root);
        int parent = n - left - right - 1;
        return Math.max(parent, Math.max(left, right)) > n / 2;
    }

    int left = 0;
    int right = 0;
    int val = 0;

    public int count(TreeNode root) {
        if(root == null) {
            return 0;
        }
        int l = count(root.left);
        int r = count(root.right);
        if(root.val == val) {
            left = l;
            right = r;
        }
        return l + r + 1;
    }
}