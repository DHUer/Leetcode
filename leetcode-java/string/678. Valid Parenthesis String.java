package string;

class Solution {
    public boolean checkValidString(String s) {
        return check(s, 0, 0);
    }

    private boolean check(String s, int start, int count) {
        if(count < 0) {
            return false;
        }

        for(int i = start; i < s.length(); i ++) {
            if(s.charAt(i) == '(') {
                count ++;
            } else if (s.charAt(i) == ')') {
                if(count <= 0) {
                    return false;
                }
                count --;
            } else if(s.charAt(i) == '*') {
                return check(s, i + 1, count + 1) || check(s, i + 1, count) || check(s, i + 1, count - 1);
            }
        }

        return count == 0;
    }
}