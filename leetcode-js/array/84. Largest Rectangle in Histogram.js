/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0);
    let stack = [];
    let ans = 0;
    for(let i = 0; i < heights.length; i ++) {
        while(stack.length != 0 && heights[stack[stack.length - 1]] > heights[i]) {
            let top = stack.pop();
            ans = Math.max(ans, heights[top] * (stack.length == 0 ? i : i - stack[stack.length - 1] - 1));
        }
        stack.push(i);
    }
    return ans;
};

largestRectangleArea([2,1,5,6,2,3])