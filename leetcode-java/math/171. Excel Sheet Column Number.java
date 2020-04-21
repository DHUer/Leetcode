package math;

class Solution {
    public int titleToNumber(String s) {
        int res = 0, i = s.length() - 1;
        int carray = 1;
        while(i >= 0) {
            res += carray * (s.charAt(i --) - 'A' + 1);
            carray *= 26;
        }
        return res;
    }
}