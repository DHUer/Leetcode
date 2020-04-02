package array;
class Solution11 {
    public int largestRectangleArea(int[] heights) {
        int ans = Integer.MIN_VALUE;
        if(heights == null || heights.length == 0) return 0;
        int [] lessFromLeft = new int[heights.length];
        int [] lessFromRight = new int[heights.length];
        lessFromRight[heights.length - 1] = heights.length;
        lessFromLeft[0] = -1;
        for(int i = 1; i < heights.length; i ++) {
            int p = i - 1;
            while(p >= 0 && heights[i] <= heights[p]) {
                p = lessFromLeft[p];
            }
            lessFromLeft[i] = p;
        }

        for(int i = heights.length - 2; i >= 0; i --) {
            int p = i + 1;
            while(p < heights.length && heights[i] <= heights[p]) {
                p = lessFromRight[p];
            }
            lessFromRight[i] = p;
        }
        for(int i = 0; i < heights.length; i ++) {
            ans = Math.max(ans, heights[i] * (lessFromRight[i] - lessFromLeft[i] - 1));
        }
        return ans;
    }
    public static void main(String[] args) {
        Solution11 s = new Solution11();
        int [] input = {2,1,5,6,2,3};
        s.largestRectangleArea(input);
    }
}