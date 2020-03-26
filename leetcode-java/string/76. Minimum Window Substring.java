package string;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

class Solution10 {
    public String minWindow(String s, String t) {
        Map<Character, Integer> needs = new HashMap<>();
        Map<Character, Integer> window = new HashMap<>();

        for (int i = 0; i < t.length(); i++) {
            char ch = t.charAt(i);
            needs.put(ch, needs.getOrDefault(ch, 0) + 1);
        }

        int left = 0, right = 0;
        int match = 0, minLen = Integer.MAX_VALUE, start = 0;
        while (right < s.length()) {
            char c1 = s.charAt(right);
            if (needs.containsKey(c1)) {
                window.put(c1, window.getOrDefault(c1, 0) + 1);
                if (window.get(c1) == needs.get(c1)) {
                    match++;
                }
            }
            right++;

            while (match == needs.size()) {
                if (right - left < minLen) {
                    minLen = right - left;
                    start = left;
                }
                char c2 = s.charAt(left);
                if (needs.containsKey(c2)) {
                    window.put(c2, window.get(c2) - 1);
                    if (window.get(c2) < needs.get(c2)) {
                        match--;
                    }
                }
                left++;
            }
        }

        return minLen == Integer.MAX_VALUE ? "" : s.substring(start, minLen + start);
    }

    public static void main(String[] args) throws FileNotFoundException {
        Solution10 s = new Solution10();
        File myFile = new File("string/a.txt");
        Scanner myReader = new Scanner(myFile);
        String str = myReader.nextLine();
        String tar = myReader.nextLine();
        String ss = s.minWindow(str, tar);
    }
}