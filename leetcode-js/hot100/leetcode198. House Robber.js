/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = new Array();
    dp[0] = nums[0];
    if(nums.length >= 2 ) dp[1] = Math.max(nums[1], nums[0])
    for(let i = 2; i < nums.length; i ++){
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[nums.length - 1];
};

let a = [4, 1, 1, 100, 11, 1000]; let b = [51, 11111, 10019, 18, 18, 11 ,11, 12];

let c = [1];
console.log(rob(a))
console.log(rob(b))
console.log(rob(c))