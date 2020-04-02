
// Definition for a binary tree node.

package tree;

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;


class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}
class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        if(root == null) return null;
        Queue<TreeNode> queue = new LinkedList<>();
        ArrayList<List<Integer>> ans = new ArrayList<List<Integer>>();
        queue.offer(root);
        boolean isRight = false;
        while(!queue.isEmpty()) {
            int len = queue.size();
            List<Integer> temp = new ArrayList<Integer>();
            for(int i = 0; i < len; i ++) {
                TreeNode node = queue.poll();
                temp.add(node.val);
                if(node.right != null) {
                    queue.offer(node.right);
                }
                if(node.left != null) {
                    queue.offer(node.left);
                }
            }
            if(isRight) {
                ans.add(temp);
            } else {
                Collections.reverse(temp);
                ans.add(temp);
            }
            isRight = isRight ^ Boolean.TRUE;
        }
        return ans;
    }
}