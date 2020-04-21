package math;

class Solution {
    public String convertToTitle(int n) {
        StringBuilder res = new StringBuilder();
        char tmp = 'A';
        while(n != 0) {
            int last = n % 26;
            if(last == 0) {
                res.insert(0, "Z");
                n --;
            } else {
                res.insert(0, (char)(tmp + last - 1));
            }
            n = n / 26;
        }
        return res.toString();
    }
}