/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let [low, high] = [0, nums.length - 1]
    while(low < high){
        let mid = Math.floor((low + high) / 2)
        if(nums[mid] > target) high --
        else if(nums[mid] < target) low ++
        else return mid
    }
    if(nums[high] < target) return high + 1
    else return high
};


console.log(searchInsert([1, 3, 5, 6], 0))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
