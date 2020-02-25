/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum = Array.from(Array(nums.length), ()=>{
        return new Array(nums.length).fill(0);
    });
    let cnt = 0;
    for(let i = 0; i < nums.length; i ++){
        cnt += nums[i];
        sum[0][i] = cnt;
    }
    let count = 0;
    for(let i = 0; i < nums.length; i ++){
        for(let j = i; j < nums.length; j ++){
            if(i >= 1)sum[i][j] = sum[0][j] - sum[0][i - 1];
	    if(sum[i][j] == k) count ++;
        }
    }
    return count;
};

var subarraySum = function(nums, k){
    let map = new Map();
    let curSum = 0;
    let ans = 0;
    map.set(0, 1);
    for(let i = 0; i < nums.length; i ++){
	curSum += nums[i];
	ans += map.get(curSum - k) || 0;
	map.set(curSum, map.get(curSum) + 1 || 1);
    }
    return ans;
}
console.log(subarraySum([1, 1, -1, 1], 1));
