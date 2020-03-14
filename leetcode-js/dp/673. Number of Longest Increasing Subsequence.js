/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let cnt = new Array(nums.length + 1).fill(1)
    let ans = 0
    let maxLen = 0
    let dp = new Array(nums.length + 1)

    for(let i = 0; i < nums.length; i ++) {
        dp[i] = 1
        for(let j = 0; j < i; j ++) {
            if(nums[i] > nums[j]) {
                if(dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1
                    cnt[i] = cnt[j]
                } else if(dp[j] + 1 == dp[i]) {
                    cnt[i] += cnt[j]
                }
            }
        }
        maxLen = Math.max(maxLen, dp[i])
    }

    for(let i = 0; i < nums.length; i ++) {
        if(dp[i] == maxLen) ans += cnt[i]
    }
    return ans
};
findNumberOfLIS([1,2,4,3,5,4,7,2])
findNumberOfLIS([1,1,1,1,1])