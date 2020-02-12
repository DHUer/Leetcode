/**
 * @param {number[]} nums
 * @return {boolean}
 */
// dp[i][j] = dp[i-1][j]||dp[i-1][j-nums[i]]
var canPartition = function (nums) {
   let sum = 0;
   for(let ele of nums) sum = sum + ele; 
   if(sum&1 == 1) return false;
   sum /= 2;
   let dp = Array.from(Array(nums.length + 1), ()=> new Array(sum + 1));
   for(let i = 0; i < nums.length + 1; i ++) dp[i][0] = true;
   for(let j = 1; j < sum + 1; j ++) dp[0][j] = false;
   for(let i = 1; i < nums.length + 1; i ++){
       for(let j = 1; j < sum + 1; j ++){
           if(j >= nums[i]) dp[i][j] = dp[i - 1][j - nums[i]]||dp[i - 1][j];
           else dp[i][j] = dp[i - 1][j];
       }
   }
   return dp[nums.length][sum];
};