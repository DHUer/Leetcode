/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    if(!nums.length) return []
    let dp = new Array(nums.length).fill(-1)
    let count = new Array(nums.length).fill(1)
    let max = 0
    let index = -1 
    nums.sort((a, b) => a - b)
    for(let i = 0; i < nums.length; i ++){
        for(let j = i - 1; j >= 0; j --){
            if(nums[i] % nums[j] == 0){
                if(1 + count[j] > count[i]){
                    count[i] = count[j] + 1
                    dp[i] = j
                }
            }
        }
        if(count[i] > max){
            max = count[i]
            index = i
        }
    }

    let res =  []
    while(index != -1){
        res.push(nums[index])
        index = dp[index]
    }
    return res
};


largestDivisibleSubset([4, 8, 10, 240])