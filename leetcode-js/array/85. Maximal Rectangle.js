/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let ans = 0;
    if(matrix.length == 0) return 0;
    let heights = new Array(matrix[0].length).fill(0);
    for(let i = 0; i < matrix.length; i ++) {
        for(let j = 0; j < matrix[0].length; j ++) {
            heights[j] = (matrix[i][j] == 0 ? 0 : (heights[j] + 1));
        }
        ans = Math.max(ans, largestRectangleArea(heights));
    }
    return ans;
};

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

maximalRectangle([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
  ])