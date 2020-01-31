/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(nums == "") return [[]];
    let res = [];
    for(let i = 0; i < nums.length; i ++){
        if(i == 0) res.push([nums[i]]);
        else{
            let len = res.length;
            for(let j = 0; j < len; j ++){
                res[len + j]  = [].concat(res[j]).concat(nums[i])
            }
            res[res.length] = [nums[i]];
        }
    }
    res.push([])
    return res;
};
console.log(subsets([1]));