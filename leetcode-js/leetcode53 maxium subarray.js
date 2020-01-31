/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length == 0) return null;
    let [local, global] = [nums[0], nums[0]];
    for(let i = 1; i < nums.length; i ++){
        local = Math.max(local + nums[i], nums[i]);
        global = Math.max(local, global);
    }
    return global;
}
let a = [-2, 1, -3,4,-1,2,1,-5,4]
let b = [1, 2, 3];
console.log(maxSubArray(a))
