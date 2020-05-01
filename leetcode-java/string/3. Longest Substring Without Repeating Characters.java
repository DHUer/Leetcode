package string;

import java.util.HashMap;
import java.util.Map;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int left = 0, right = 0, res = 1;
        while(right < s.length()) {
            map.put(s.charAt(right), map.getOrDefault(s.charAt(right), 0) + 1);
            if(map.get(s.charAt(right)) > 1) {
                res = Math.max(res, right - left);
            } else {
                res = Math.max(res, right - left + 1);
            }
            while(map.get(s.charAt(right)) > 1) {
                // decrease the window
                map.put(s.charAt(left), map.get(s.charAt(left)) - 1);
                left ++;
            }
            right ++;
        }
        return res;
    }
}
