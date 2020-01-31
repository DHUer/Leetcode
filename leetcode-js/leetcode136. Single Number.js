/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(!nums.length) return null;
    let sum = nums[0];
    for(let i = 1; i < nums.length; i ++){
        sum = sum ^ nums[i];
    }
    return sum;
};

let a = [1, 2, 2, 3, 3]

console.log(singleNumber(a))