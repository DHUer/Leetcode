package tree;

import java.util.HashMap;

//Definition for a binary tree node.
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

class Solution {
    HashMap<TreeNode, Integer> map = new HashMap<>();
    public int diameterOfBinaryTree(TreeNode root) {
        if(root == null) {
            return 0;
        }
        if(!map.containsKey(root.left)) {
            int left = depth(root.left);
            map.put(root.left, left);
        }
        if(!map.containsKey(root.right)) {
            int right = depth(root.right);
            map.put(root.right, right);
        }
        int leftNode = diameterOfBinaryTree(root.left);
        int rightNode = diameterOfBinaryTree(root.right);
        return Math.max(Math.max(leftNode, rightNode), map.get(root.left) + map.get(root.right));
    }

    public int depth(TreeNode root) {
        if(root == null) {
            return 0;
        }
        return Math.max(depth(root.left), depth(root.right)) + 1;
    }
}