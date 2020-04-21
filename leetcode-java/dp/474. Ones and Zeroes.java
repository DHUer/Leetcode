package dp;

import java.util.Arrays;
import java.util.Comparator;

class Solution11 {
    public int findMaxForm(String[] strs, int m, int n) {
        int [][][] dp = new int[strs.length + 1][m + 1][n + 1];
        for(int len = 1; len <= strs.length; len ++) {
            int []nums = new int[]{0, 0};
            nums = calculate(strs[len - 1]);
            for(int i = 0; i <= m; i ++) {
                for(int j = 0; j <= n; j ++) {
                    if(len == 0) {
                        dp[len][i][j] = 0;
                    } else if(i >= nums[0] && j >= nums[1]) {
                        dp[len][i][j] = Math.max(dp[len - 1][i][j], dp[len - 1][i - nums[0]][j - nums[1]] + 1);
                    } else {
                        dp[len][i][j] = dp[len - 1][i][j];
                    }
                }
            }
        }
        return dp[strs.length][m][n];
    }

    private int[] calculate(String s) {
        int []res = new int[2];
        for(char ch : s.toCharArray()) {
            if(ch == '0') {
                res[0] ++;
            } else {
                res[1] ++;
            }
        }
        return res;
    }
}