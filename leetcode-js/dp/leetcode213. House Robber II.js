/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if(nums.length == 0) return null
    if(nums.length == 1) return nums[0]
    if(nums.length == 2) return Math.max(nums[0], nums[1])
    if(nums.length == 3) return Math.max(nums[0], nums[1], nums[2])
    let dp_front = Array(nums.length)
    let dp_tail = Array(nums.length)
    let frontMax = nums[0] 
    let tailMax =  nums[2]
    dp_front[0] = nums[0]
    dp_front[1] = nums[1]
    dp_tail[1] = nums[1]
    dp_tail[2] = nums[2]
    for(let i = 2; i < nums.length - 1; i ++) {
        if(i > 2) {
            dp_front[i] = Math.max(dp_front[i - 2], dp_front[i - 3]) + nums[i]
        } else {
            dp_front[i] = dp_front[i - 2] + nums[i]
        }
        frontMax = Math.max(dp_front[i], frontMax)
    }

    for(let i = 3; i < nums.length; i ++) {
        if(i > 3) {
            dp_tail[i] = Math.max(dp_tail[i - 2], dp_tail[i - 3]) + nums[i]
        } else {
            dp_tail[i] = dp_tail[i - 2] + nums[i]
        }
        tailMax = Math.max(dp_tail[i], tailMax)
    }
    return Math.max(tailMax, frontMax)
};

rob([1,2,3])
rob([1,2,3,4])