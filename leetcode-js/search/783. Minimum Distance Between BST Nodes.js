
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let ans = Infinity
    function traverse(root) {
        if(root == null) return
        let leftMax = search(root.left, "right")
        let rightMin = search(root.right, "left")
        
        if(leftMax != null) {
            ans = Math.min(ans, root.val - leftMax)
        }

        if(rightMin != null) {
            ans = Math.min(ans, rightMin - root.val)
        }
        traverse(root.left)
        traverse(root.right)

    }

    function search(root, direction) {

        if(root == null) return null
        if(direction == "right") {
            if(root.right == null) return root.val
            else return search(root.right, direction)
        }
        if(direction == "left" ) {
            if(root.left == null) return root.val
            else return search(root.left, direction)
        }
        
    }

    traverse(root)
    return ans
};


let node1 = new TreeNode(90)
let node2 = new TreeNode(69)
let node3 = new TreeNode(49)
let node4 = new TreeNode(89)
node1.left = node2
node2.right = node4 
node2.left = node3
minDiffInBST(node1)