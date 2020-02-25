/**
 * @param {number[]} nums
 * @return {number}
 */
//var lengthOfLIS = function(nums) {
//    if(nums.length == 0) return null;
//    if(nums.length == 1) return 1;
//    let dp = Array.from(Array(nums.length), () => new Array(nums.length));
//    
//    for(let i = 1; i < nums.length; i ++){
//        if(nums[i] > nums[i-1]) dp[i-1][i] = 2;
//        else dp[i-1][i] = 1;
//    }
//
//    for(let i = 2; i < nums.length; i ++){
//        for(let j = i; j < nums.length; j ++){
//            if(dp[j - i][j - 1]&&nums[j] > nums[j - 1]) dp[j - i][j] = dp[j - i][j - 1] + 1;
//            else dp[j-i][j] = Math.max(dp[j-i+1][j], dp[j-i][j-1]);
//        }
//    }
//    console.log(dp[0][nums.length -1]);
//    return dp[0][nums.length -1];
//};
// lengthOfLIS([1,1,1,1,,1,12]);
// lengthOfLIS([2,2,2,2]);
// lengthOfLIS([2,2,2,3]);
// lengthOfLIS([1,3,2,4,2,5,7,2,2,8]);
// console.log(lengthOfLIS([-2, -1]));
// lengthOfLIS([3,1,0]);
var lengthOfLIS = function(nums){
    if(!nums.length) return null;
    let dp = new Array(nums.length);
    let mx = 0;
    for(let i = 0; i < nums.length; i ++){
        dp[i] = 1;
        for(let j = 0; j < i; j ++){
            if(nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
        }
        mx = Math.max(mx, dp[i]);
    }
    return mx;
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))