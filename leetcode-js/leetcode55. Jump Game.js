/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let sum = 0;
    let nextStep = 0;
    if(nums.length == 1) return true;
    while(true){
        nextStep = nums[sum];
        sum  =sum + nextStep;
        if(sum >= nums.length - 1){
            return true;
        }else if(sum == 0 || nextStep ==0){
            return false;
        }
    }
};

var test1 = [2,3,1,1,4];
var test2 = [3,2,1,0,4];

console.log(canJump(test1))
console.log(canJump(test2))