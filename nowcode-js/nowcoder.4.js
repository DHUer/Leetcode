function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(pre == null) return null;

    var piv  = pre.indexOf(vin[0]);
    var leftPre = pre.slice(0, piv);
    var rightPre  = pre.slice(piv + 1);
    if(leftPre != null){
        leftVin = Array.from(vin, function(val){
        if(leftPre.includes(val)) return val;
        }).filter(Boolean);
    }
    if(rightPre != null){
        rightVin = Array.from(vin, function(val){
        if(rightPre.includes(val)) return val;
         }).filter(Boolean);
    }
    
    var root = new TreeNode(vin[0]);
    root.left = reConstructBinaryTree(leftPre, leftVin);
    root.right = reConstructBinaryTree(rightPre, rightVin);
    return root;
}

pre = [1,2,4,7,3,5,6,8];
vin = [4,7,2,1,5,3,8,6];


reConstructBinaryTree(pre, vin);