/*
 * Filename: /Users/wling/Code/leetcode-java/string/44. Wildcard Matching.java
 * Path: /Users/wling/Code/leetcode-java/string
 * Created Date: Monday, March 23rd 2020, 9:20:41 am
 * Author: wling
 * 
 * Copyright (c) 2020 Your Company
 */
package string;
class Solution3 {
    public boolean isMatch(String s, String p) {
        boolean [][]dp = new boolean[s.length() + 1][p.length() + 1];
        dp[0][0] = true;
        for(int j = 1; j <= p.length(); j ++) {
            dp[0][j] =  dp[0][j - 1] && p.charAt(j - 1) == '*';
        }

        for(int i = 1; i <= s.length(); i ++) {
            for(int j = 1; j <= p.length(); j ++) {
                if(p.charAt(j - 1) == '?' || p.charAt(j - 1) == s.charAt(i - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                }else if(p.charAt(j - 1) == '*'){
                    dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
                }
            }
       }
        return dp[p.length()][s.length()];
    }
    public static void main(String[] args) {
        Solution3 s = new Solution3();
        System.out.println(s.isMatch("cb", "?a"));
    }
}