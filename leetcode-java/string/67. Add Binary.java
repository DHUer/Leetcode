/*
 * Filename: /Users/wling/Code/leetcode-java/string/67. Add Binary.java
 * Path: /Users/wling/Code/leetcode-java/string
 * Created Date: Monday, March 23rd 2020, 5:38:58 pm
 * Author: wling
 * 
 */


package string;
class Solution4 {
    public String addBinary(String a, String b) {
        StringBuilder res = new StringBuilder();
        int i = a.length() - 1, j = b.length() - 1;
        int carray = 0;
        while(i >= 0 || j >= 0 || carray > 0) {
            int sum = 0;
            if(i >= 0 && j >= 0) {
                sum = a.charAt(i) + b.charAt(j) - '0' - '0' + carray;
                i --; j --;
            } else if(i >= 0) {
                sum = a.charAt(i) + carray - '0';
                i --;
            } else if(j >= 0) {
                sum = b.charAt(j) + carray - '0';
                j --;
            } else {
                sum = carray;
            }
            carray = sum / 2;
            res.append(sum % 2);
        }
        return res.reverse().toString();
    }
    public static void main(String[] args) {
        Solution4  s = new Solution4();
        s.addBinary("11", "1");
    }
}