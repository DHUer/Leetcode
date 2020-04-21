package array;

import java.util.HashSet;
import java.util.Set;

class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for(int num : nums) {
            set.add(num);
        }
        int maxLen = 0;
        for(int num : nums) {
            int now = num;
            int consecutiveLen = 1;
            while(set.contains(now + 1)) {
                consecutiveLen ++;
                now ++;
            }
            maxLen = Math.max(consecutiveLen, maxLen);
        }

        return maxLen;
    }
}