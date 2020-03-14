/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let values = new Array(10001).fill(0)
    let dp = new Array(10001).fill(0)
    for(const num of nums) {
        values[num] += num
    }

    for(let i = 0; i < values.length; i ++) {
        if(i >= 2) {
            dp[i] = Math.max(dp[i - 1], values[i] + dp[i - 2])
        }
    }
    return dp[values.length - 1]
};