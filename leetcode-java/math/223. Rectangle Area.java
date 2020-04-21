package math;

class Solution {
    public int computeArea(int A, int B, int C, int D, int E, int F, int G, int H) {
        int areaOfSqrA = (C - A) * (D - B);
        int areaOfSqrB = (G - E) * (H - F);
        int left = Math.max(A, E);
        int right = Math.min(C, G);
        int top = Math.min(D, H);
        int bottom = Math.max(B, F);
        int overLap = 0;
        if(right > left && top > bottom) {
            overLap = (right - left) * (top - bottom);
        }
        return areaOfSqrA + areaOfSqrB - overLap;
    }
}