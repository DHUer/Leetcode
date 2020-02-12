function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

    let [level, res] = [0, []];
    backTrack(root, level);
    function backTrack(root, level){
        if(root == null) return;
        if(res[level] == null) {
	    res[level] = [];
            res[level].push(root.val);
        }else{
            res[level].push(root.val);
        }
        backTrack(root.left, level + 1);
        backTrack(root.right, level + 1);
    }
    return res;
};
var n1 =new TreeNode(1)
var n2 =new TreeNode(2)
var n3 =new TreeNode(3)

n1.left = n2;
n1.right = n3;

console.log(levelOrder(n1))
