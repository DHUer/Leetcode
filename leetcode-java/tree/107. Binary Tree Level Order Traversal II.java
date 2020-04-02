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
import java.util.*;
class Solution {
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> ans = new LinkedList<>();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        if(root == null) return ans;
        while(!queue.isEmpty()) {
            List<Integer> temp = new ArrayList<>();
            int len = queue.size();
            for(int i = 0; i < len; i ++) {
                TreeNode node = queue.poll();
                temp.add(node.val);
                if(node.left != null) {
                    queue.offer(node.left);
                }
                if(node.right != null) {
                    queue.offer(node.right);
                }
            }
            ans.add(0, temp);
        }
        return ans;
    }
}