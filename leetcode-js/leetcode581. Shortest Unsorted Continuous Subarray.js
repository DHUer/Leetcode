/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let [start, end] = [undefined, undefined];
    let curMax;
    for(let i = 0; i < nums.length; i ++){
        if(i == 0) curMax = nums[i];
        if(nums[i] >= curMax) curMax = nums[i];
        else{
            if(start == undefined) {
                start = i - 1; end = i;
            }
            else{
                end = i;
            }
        }
    }
    if(start == undefined) return 0
    else return end - start + 1;

};
console.log(findUnsortedSubarray([2, 6, 4, 5, 8, 10, 9, 15]));