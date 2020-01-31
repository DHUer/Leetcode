/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = new Array(nums.length);
    res[0] = 1;
    let left = 1;
    for(let i = 1; i < nums.length; i ++){
        res[i] = res[i - 1]*nums[i - 1];

    }
    for(let i = nums.length - 1; i >=0; i --){
        res[i] = left*res[i];
        left = left*nums[i];
    }
    return res;
};

console.log(productExceptSelf([1,2,3,4]))