/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; i ++){
        if(!map.has(nums[i])) map.set(nums[i], 1);
        else map.set(nums[i], map.get(nums[i]) + 1);

        if(map.get(nums[i]) > Math.floor(nums.length / 2)) return nums[i]
    }
    return null;
};