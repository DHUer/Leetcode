package dp;

class Solution21 {
    public int getMoneyAmount(int n) {
        int localMax = 0;
        int globalMin = Integer.MAX_VALUE;
        int[][] dp = new int[n + 1][n + 1];
        for(int len = 1; len <= n; len ++) {
            for(int i = 1; i <= n - len; i ++) {
                int j = i + len; 
                globalMin = Integer.MAX_VALUE;
                for(int k = i + 1; k <= j - 1; k ++) {
                    localMax = k + Math.max(dp[i][k - 1], dp[k + 1][j]);
                    globalMin = Math.min(globalMin, localMax);
                }
                dp[i][j] = i + 1 == j ? i : globalMin;
            }
        }
        return dp[1][n];
    }

    public static void main(String[] args) {
        Solution21 s = new Solution21();
        s.getMoneyAmount(10);
    }
}