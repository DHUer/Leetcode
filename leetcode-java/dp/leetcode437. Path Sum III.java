package dp;

import java.util.HashMap;

// Definition for a binary tree node.


class Solution {
    public int pathSum(TreeNode root, int sum) {
        HashMap<Integer, Integer> preSum = new HashMap();
        preSum.put(0, 1);
        helper(root, 0, sum, preSum);
        return count;
    }
    int count = 0;
    public void helper(TreeNode root, int curSum, int target, HashMap<Integer, Integer> preSum) {
        if(root == null) {
            return ;
        }

        curSum += root.val;
        if(preSum.containsKey(curSum - target)) {
            count += preSum.get(curSum - target);
        }

        if(!preSum.containsKey(curSum)) {
            preSum.put(curSum, 1);
        } else {
            preSum.put(curSum, 1 + preSum.get(curSum));
        }

        helper(root.left, curSum, target, preSum);
        helper(root.right, curSum, target, preSum);

        preSum.put(curSum, preSum.get(curSum) - 1);
    }

}