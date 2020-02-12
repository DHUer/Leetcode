/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res = [];
    for(let i = 0; i < nums.length; i ++){
        if(nums[i] != nums[nums[i] - 1]){
            let temp = nums[i] - 1;
            nums[i] = nums[nums[i] - 1];
            nums[temp] = temp + 1;
            i --;
        }
    }
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] != i + 1){
            if(nums[i] != i + 1) res.push(i + 1);
        }
    }
    
    return res;
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));