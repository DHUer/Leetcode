package math;

class Solution {
    public boolean canMeasureWater(int x, int y, int z) {
        int gcd;
        if(z == 0) return true;
        if(x + y < z) return false;

        while(x != 0 && y != 0) {
            int tmp = x;
            x = y;
            y = tmp % y;
        }

        gcd = x == 0 ? y : x;
        return z % gcd == 0;
    }
}