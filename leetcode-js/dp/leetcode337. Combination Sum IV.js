/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let len = nums.length
    if(len == 0) {
        return 0
    }

    let dp = new Array(target + 1).fill(0)
    dp[0] = 1
    for(let i = 1; i <= target; i ++){
        for(let j = 0; j < len; j ++){
            if(i -  nums[j] >= 0){
                dp[i] += dp[i - nums[j]]
            }
        }
    }

    return dp[target]
};

combinationSum4([1,2,3], 4)