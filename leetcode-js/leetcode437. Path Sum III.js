
//Definition for a binary tree node.
//function TreeNode(val) {
//    this.val = val;
//    this.left = this.right = null;
//}
//
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
let count = 0;
var pathSum = function(root, sum) {
    dfs(root, sum);
    function dfs(root, sum){
        if(!root) return;
        if(root.val == sum) {count ++; console.log(root);}
        dfs(root.left, sum);
        dfs(root.right, sum);
        dfs(root.left, sum - root.val);
        dfs(root.right, sum - root.val);
    }
    return count;
};

let n1 = new TreeNode(2);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(2);
let n5 = new TreeNode(2);
n1.left = n2;
n1.right = n4;
n4.left = n3;
n4.right = n5;

console.log(pathSum(n1, 4));
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
let count = 0;
var pathSum = function(root, sum) {
    if(!root) return 0;
    return sumUp(root, 0, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
}

var sumUp = function(root, pre, sum){
    if(!root) return 0;
    let cur = pre + root.val;
    return (cur == sum) + sumUp(root.left, cur, sum) + sumUp(root.right, cur, sum);
}