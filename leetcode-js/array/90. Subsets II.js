/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => {return a - b});
    let size = 0, startIndex = 0;
    let res = [[]];
    for(let i = 0; i < nums.length; i ++) {
        startIndex = i >= 1 && nums[i - 1] == nums[i] ? size : 0;
        size = res.length;
        for(let j = startIndex; j < size; j ++) {
            let temp = [...res[j]];
            temp.push(nums[i]);
            res.push([...temp]);
        }
    }
    return res;
};

subsetsWithDup([1, 2, 2])