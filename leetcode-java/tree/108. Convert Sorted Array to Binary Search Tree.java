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
    public TreeNode sortedArrayToBST(int[] nums) {
        return getTreeBST(nums, 0, nums.length - 1);
    }

    public TreeNode getTreeBST(int[] nums, int beginIndex, int endIndex) {
        if(beginIndex > endIndex) {
            return null;
        }
        int mid = (beginIndex + endIndex) / 2;
        TreeNode root = new TreeNode(nums[mid]);
        root.left = getTreeBST(nums, beginIndex, mid - 1);
        root.right = getTreeBST(nums, mid + 1, endIndex);
        return root;
    }
}