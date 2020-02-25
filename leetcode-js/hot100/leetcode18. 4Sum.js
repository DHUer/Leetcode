/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b)
    let result = []
    for(let i = 0; i <nums.length; i++){
        if(i > 0 && nums[i - 1] == nums[i]) continue
        threeSums(i + 1, target - nums[i])
    }
    function threeSums(lo, targets){
        for(let i = lo; i < nums.length; i ++){
            if(i > lo && nums[i] == nums[i - 1]) continue
            let j = i + 1
            let k = nums.length - 1
            let t = targets - nums[i]
            while(j < k){
                if(nums[j] + nums[k] < t) ++ j
                else if (nums[j] + nums[k] > t) --k
                else{ // equal
                    result.push([nums[lo -1], nums[i], nums[j], nums[k]])
                    ++ j
                    -- k
                    while(j < k && nums[j] == nums[j - 1]) j ++ // skip the same result 
                    while(j < k && nums[k] == nums[k + 1]) k -- // skip the same result
                }
            }
        }
    }
    return result
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
module.exports = fourSum