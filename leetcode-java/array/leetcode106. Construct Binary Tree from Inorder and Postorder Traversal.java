package array;

import java.util.HashMap;
import java.util.stream.IntStream;

//Definition for a binary tree node.
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

class Solution {
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        if (postorder.length == 0) {
            return null;
        }
        
        HashMap<Integer, Integer> map = new HashMap<>(); 
        for (int i = 0; i < inorder.length; i++) { 
            map.put(inorder[i], i);
        }
        return buildTree(map, 0, inorder.length - 1, postorder, postorder.length - 1);
    }
    
    private TreeNode buildTree(HashMap<Integer, Integer> map, int inStart, int inEnd, int[] postorder, int poEnd) {//no need poStart
        TreeNode node = new TreeNode(postorder[poEnd]); 
        
        int pivot = map.get(node.val); 
        int leftSize = pivot - inStart; 
        int rightSize = inEnd - pivot;
        
        if (rightSize > 0) { 
            node.right = buildTree(map, pivot + 1, inEnd, postorder, poEnd - 1);
        }
        
        if (leftSize > 0) { 
            node.left = buildTree(map, inStart, pivot - 1, postorder, poEnd - rightSize - 1);
        }
        return node;  
    }
}