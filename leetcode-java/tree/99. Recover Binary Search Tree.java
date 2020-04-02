import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;


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
    public void recoverTree(TreeNode root) {
        List<Integer> vals = new ArrayList<>();
        List<TreeNode> valsList = new ArrayList<>();

        inorder(root, vals, valsList);
        Collections.sort(vals);
        for(int i = 0; i < vals.size(); i ++) {
            valsList.get(i).val = vals.get(i);
        }
    }

    public void inorder(TreeNode root, List<Integer> vals, List<TreeNode> valsList) {
        if(root == null) {
            return;
        }
        inorder(root.left, vals, valsList);
        vals.add(root.val);
        valsList.add(root);
        inorder(root.right, vals, valsList);
    }
}