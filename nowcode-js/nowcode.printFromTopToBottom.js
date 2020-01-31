 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function PrintFromTopToBottom(root)
{
    // write code here
    if(root == null){
        return false
    }
    var queue = [root]
    while( queue.length != 0)
    {
        var temp = queue.shift()
        kf(temp != null)
        {
            console.log(temp.val)
            var leftNode = temp.left
            var rightNode = temp.right
            queue.push(leftNode, rightNode)
        }
            
    }
}


var root = new TreeNode(1)
var leftRoot  = new TreeNode(2);
var rightRoot = new TreeNode(3)
root.left = leftRoot
root.right = rightRoot
PrintFromTopToBottom(root)