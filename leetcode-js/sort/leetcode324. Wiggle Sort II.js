/** Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....
* 
* Example 1:
* 
* Input: nums = [1, 5, 1, 1, 6, 4]
* Output: One possible answer is [1, 4, 1, 5, 1, 6].
* Example 2:
* 
* Input: nums = [1, 3, 2, 2, 3, 1]
* Output: One possible answer is [2, 3, 1, 3, 1, 2].
* Note:
* You may assume all input has valid answer.
* 
* Follow Up:
* Can you do it in O(n) time and/or in-place with O(1) extra space?
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    nums.sort((a, b) => a - b)

    let mid = Math.floor(nums.length / 2)
    for(let i = 1; i < nums.length && i < mid; i += 2) {
        [nums[i], nums[mid]] = [nums[mid], nums[i]]
        mid ++
    }
};

var wiggleSort = function(nums) {
    let tem = [...nums]
    tem.sort((a, b) => a - b)
    let n = nums.length, k = Math.floor((n + 1) / 2), j = n
    for(let i = 0; i < n; i ++) {
        nums[i] = i & 1 ? tem[-- j] : tem[-- k]
    }

}

wiggleSort([1,5,1,1,6,4])

