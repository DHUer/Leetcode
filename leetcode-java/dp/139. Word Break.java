package dp;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution14 {
    public boolean wordBreak(String s, List<String> wordDict) {
        boolean []dp = new boolean[s.length() + 1];
        dp[0] = true;
        for(int i = 1; i <= s.length(); i ++) {
            for(int k = i; k >= 0; k --) {
                if(dp[i]) break;
                if(wordDict.contains(s.substring(k, i))) {
                    dp[i] = dp[k];
                }
            }
        }
        return dp[s.length()];
    }

    public static void main(String[] args) {
        Solution14 s = new Solution14();
        List<String> exa = new ArrayList<String>(Arrays.asList("leet", "code"));
        s.wordBreak("leetcode", exa);
    }
    
} 