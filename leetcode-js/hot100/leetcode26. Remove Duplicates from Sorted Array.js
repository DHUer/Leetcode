/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 2) return 
    let [low, high] = [0, 1]
    while(high < nums.length){
        if(nums[high] == nums[high - 1]) high ++
        else {
            nums[ ++low] = nums[high ++]
        }
    }
    if(nums[low] != nums[high]) nums[++ low] = nums[high]
    nums.length = low
    return nums
};
console.log(removeDuplicates([1,1,2]))
module.exports = removeDuplicates