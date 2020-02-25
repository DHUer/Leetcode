
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length == 0) return null;
    if(preorder.length == 1) return new TreeNode(preorder[0]);
    let root = new TreeNode(preorder[0]);
    let index = inorder.indexOf(root.val);
    let preorderLeft = preorder.slice(1, index + 1);
    let preorderRight = preorder.slice(index + 1);
    let inorderLeft = inorder.slice(0, index);
    let inorderRight = inorder.slice(index + 1);

    root.left = buildTree(preorderLeft, inorderLeft);
    root.right = buildTree(preorderRight, inorderRight);

    return root;
};

let preorder = [3,9,20,15,7]
let inorder = [9,3,15,20,7]

console.log(buildTree(preorder, inorder));
