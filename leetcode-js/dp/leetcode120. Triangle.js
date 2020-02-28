/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let depth = triangle.length

    let minSum = Infinity 
    function dfs (cur, curDepth, curSum) {
        if(curDepth == depth) {
            minSum = Math.min(curSum, minSum) 
            return 
        }
        for(let i = cur; i < cur + 2 && i < triangle[curDepth].length; i ++) {
            curSum += triangle[curDepth][i]
            dfs(i, curDepth + 1, curSum)
            curSum -= triangle[curDepth][i]
        }

    }
    dfs(0, 0, 0)
};

var minimumTotal = function(triangle) {
    let depth = triangle[triangle.length - 1].length
    if(!depth) return 0
    
    let dp = new Array(depth).fill(0)
    let minSum
    for(let i = 0; i < depth; i ++) {
        minSum = Infinity
        for(let j = triangle[i].length - 1; j >= 0; j --) {

            if(j == 0) dp[j] = dp[0] + triangle[i][j]
            else if(j == triangle[i].length - 1) dp[j] = dp[j - 1] + triangle[i][j]
            else {
                dp[j] = Math.min(dp[j], dp[j - 1]) + triangle[i][j]
            }
            minSum = Math.min(minSum, dp[j])
        }
    }

    return minSum
}
minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])