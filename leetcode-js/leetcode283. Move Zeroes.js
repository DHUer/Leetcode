/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i ++){
        if(nums[i] == 0) count ++;
        if(nums[i]) nums[i - count] = nums[i];
    }
    let i = nums.length -1 ;
    while(count){
        nums[i] = 0;
        count --;
        i --
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]))