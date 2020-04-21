/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let [left, right] = [0, nums.length - 1]
    while(left < right) {
        while(nums[right] >= 1){
            right --
        }
        // [nums[left], nums[right]]= [nums[right], nums[left]] 
        while(nums[left] <= 1){
            left ++
        } 
        [nums[right], nums[left]] = [nums[left], nums[right]]
    }

};
var sortColors = function(nums) {
    let second = nums.length - 1
    let zero = 0
    let i = 0
    while(i <= second) {
        if(nums[i] == 0) {
            [nums[zero],nums[i]] = [nums[i], nums[zero]]
            i ++
            zero ++
        } else if(nums[i] == 1){
            i ++
        } else if(nums[i] == 2) {
            [nums[second], nums[i]] = [nums[i], nums[second]]
            second --
        }
    }
}
sortColors([2, 1 , 0, 0, 2, 2])