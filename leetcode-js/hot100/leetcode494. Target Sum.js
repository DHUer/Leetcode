/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    let count = 0;
    dfs(0, 0);
    function dfs(sum, i){
        if(i == nums.length) {if(sum == S) count ++; return;}
        dfs(nums[i] + sum, i + 1);
        dfs(sum - nums[i], i + 1);
    }
    return count;
};

var findTargetSumWays = function(nums, S){
    let dp = new Map();
    dp.set(0, 1);
    for(let num of nums){
        let n = new Map();
        for(let a of dp){
            let sum = a[0]; let cnt = a[1];
            n.set(sum + num, n.get(sum + num) + cnt || cnt);
            n.set(sum - num, n.get(sum + num) + cnt || cnt);
        }
        dp = n;
    }
    return dp.get(S);
}

console.log(findTargetSumWays([1, 1, 1], 3));