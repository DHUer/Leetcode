package math;

class Solution {
    // public double myPow(double x, int n) {
        // if(n == 0) {
            // return 1;
        // }
        // if(n < 0) {
            // n = -n;
            // x = 1/x;
        // }
        // return (n % 2 == 0) ? myPow(x * x, n / 2) : x * myPow(x * x, n / 2);
    // }

    public double myPow(double x, int n) {
        double ans = 1;
        long absN = Math.abs((long) n);
        while(absN > 0) {
            if((absN&1) == 1) {
                ans *= x;
            }
            absN >>= 1;
            x *= x;
        }
        return n < 0 ? 1 / ans : ans;
    }
}