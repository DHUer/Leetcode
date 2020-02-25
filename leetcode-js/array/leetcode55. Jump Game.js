/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0 
    for(let i = 0; i < nums.length; i ++){
        if(nums[i] == 0){
            if(max > i) continue
            else break
        }else{
            max = Math.max(nums[i] + i, max)
        }
    }
    if(max < nums.length - 1) return false
    else return true

};

module.exports = canJump