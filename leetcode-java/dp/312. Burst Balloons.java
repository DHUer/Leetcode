package dp;

class Solution {
    public int maxCoins(int[] nums) {
        int[][] dp = new int[nums.length + 2][nums.length + 2];
        int[] Inums = new int[nums.length + 2];
        Inums[0] = 1;
        Inums[nums.length + 1] = 1;
        for(int i = 1; i <= nums.length; i ++) {
            Inums[i] = nums[i - 1];
        }
        for(int len = 1; len <= nums.length; len ++) {
            for(int i = 1; i <= nums.length - len + 1; i ++) {
                // 
                int j = i + len - 1;
                for(int k = i; k <= j; k ++) {
                    dp[i][j] = Math.max(dp[i][j], Inums[i - 1] * Inums[k] * Inums[j + 1] + dp[i][k - 1] + dp[k + 1][j]);
                }
            }
        }
        return dp[1][nums.length];
    }
}