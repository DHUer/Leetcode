/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var results = [];
    subPer(nums, 0);
    function subPer(nums, start) {
        if (start === nums.length - 1) {
            results.push([...nums]);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            [nums[i], nums[start]] = [nums[start], nums[i]]
            subPer(nums, start + 1);
            [nums[i], nums[start]] = [nums[start], nums[i]]
        }
    }
    return results;
};



console.log(permute([1, 2, 3]))
