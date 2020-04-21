package math;

class Solution {
    public int nthUglyNumber(int n) {
        int [] res = new int[n + 1];
        res[0] = 1;
        int i2 = 0, i3= 0, i5 = 0;
        int i = 1;
        while(i < n) {
            int m2 = res[i2] * 2;
            int m3 = res[i3] * 3;
            int m5 = res[i5] * 5;
            int min = Math.min(m2, Math.min(m3, m5));
            if(min == m2) i2 ++;
            if(min == m3) i3 ++;
            if(min == m5) i5 ++;
            res[i ++] = min;
        } 
        return res[n - 1];
    }
}