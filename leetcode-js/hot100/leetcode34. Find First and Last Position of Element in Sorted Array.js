/**
IndentLinesToggle * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let [left, right] = [0, nums.length - 1];
    let mid = Math.floor((left + right) / 2 );
    let [lowRes, highRes] = [-1, -1];
    while(left <= right){
        if(nums[mid] == target){
            [lowRes, highRes] = [mid, mid];
            while(lowRes - 1 >=0 && nums[lowRes - 1] == target){
                lowRes --;
            }
            while(highRes + 1 < nums.length && nums[highRes + 1] == target){
                highRes ++;
            }
            break;
        }
        else if(nums[mid] > target){
            right = mid - 1;
        }else {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2) ;
    }
    return [lowRes, highRes];
};

var array = [5,7,7,8,8,10];
var target = 8;
console.log(searchRange(array, target));
