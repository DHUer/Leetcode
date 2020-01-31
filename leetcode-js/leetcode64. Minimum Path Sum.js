/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let [m, n] = [grid.length, grid[0].length];

    let dp = new Array(m).fill(0).map(_ => new Array(n).fill(0));
    dp[0][0] = grid[0][0];
    for(let i = 1; i < m; i++) dp[i][0] = dp[i-1][0] + grid[i][0]; // loop row
    for(let j = 1; j < n; j++) dp[0][j] = dp[0][j-1] + grid[0][j]; // loop col

    for(let i = 1; i < m; i ++){
        for(let j = 1; j < n; j ++){
            dp [i][j] = Math.min(dp[i][j-1] + grid[i][j], dp[i-1][j] + grid[i][j]);
        }
    }
    return dp[m-1][n-1]
};
let array = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]

console.log(minPathSum(array))