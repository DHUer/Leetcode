/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function(nums, target) {
    let proximitySum = Infinity
    let curSum = 0
    let res = 0
    function permutation(start) {
        for(let i = start; i < nums.length; i ++){
            [nums[i], nums[start]] = [nums[start], nums[i]] 
            if(start >= 2){ 
                curSum = nums[0] + nums[1] + nums[2] 
                if(Math.abs(curSum - target) < proximitySum){ 
                    proximitySum = Math.abs(curSum - target) 
                    res = curSum 
                } 
            }else{ 
                permutation(start + 1) 
            } 
            [nums[start], nums[i]] = [nums[i], nums[start]]
        } 
    } 
    permutation(0) 
    return res 
};
module.exports = threeSumClosest
