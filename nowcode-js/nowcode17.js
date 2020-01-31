function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function HasSubtree(pRoot1, pRoot2)
{
    // write code hereoo
    if(pRoot1 == null || pRoot2 == null) return false;
    if(isSame(pRoot1, pRoot2)) return true;
    else return HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
}

function isSame(pRoot1, pRoot2){
    if(pRoot2 == null ) return true;
    else if(!pRoot1) return false;
    else if(pRoot1.val == pRoot2.val) return isSame(pRoot1.left, pRoot2.left) && isSame(pRoot1.right, pRoot2.right);
    else return false;
}

node1 = new TreeNode(1);
node2 = new TreeNode(2);
node3 = new TreeNode(3);

node4 = new TreeNode(1);


node1.left = node2;
node1.right = node3;

// [node2.left, node2.right] = [null, null];
// [node3.left, node3.right] = [null, null];

console.log(HasSubtree(node1, node4));