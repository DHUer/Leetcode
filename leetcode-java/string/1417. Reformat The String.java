package string;

class Solution {
    public String reformat(String s) {
        int c1 = 0, c2 = 0, i = 0, j = 0;
        for(char ch : s.toCharArray()) {
            if(Character.isLetter(ch)) {
                c1 ++;
            } else {
                c2 ++;
            }
        }

        if(Math.abs(c1 - c2) > 1) return "";

        String ans = "";
        while(ans.length() < s.length()) {
            if(((ans.length() % 2) == 1) ^ (c1 > c2)){
                while(i < s.length() &&Character.isDigit(s.charAt(i))) {
                    i ++;
                }
                if(i < s.length()) ans += s.charAt(i ++);
            } else {
                while(j < s.length() && Character.isLetter(s.charAt(j))) {
                    j ++;
                }
                if(j < s.length()) ans += s.charAt(j ++);
            }
        }
        return ans;
    }
}