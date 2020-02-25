/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let dir = [[0, 1], [1, 0]]
    let [m, n] = [obstacleGrid.length, obstacleGrid[0].length]
    let count = 0
    let isVisited = Array.from(Array(m), () => {
        return Array(n).fill(false)
    })
    function dfs(i, j) {
        if(obstacleGrid[i][j] == 1) return
        if(i == m - 1 && j == n - 1) {
            count ++
            return 
        }
        isVisited[i][j] = true
        for(const direction of dir){
            let newI = i + direction[0]
            let newJ = j + direction[1]
            if(newI < m && newI >= 0 && newJ < n && newJ >=0 && !isVisited[newI][newJ]){
                
                dfs(newI, newJ, )
            }
        }
        isVisited[i][j] = false
    }
    dfs(0, 0)
    return count
};

var uniquePathsWithObstacles = function (obstacleGrid) {
    if(obstacleGrid.length ==0 || obstacleGrid[0][0] == 1) return 0
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    let dp = Array.from(Array(m + 1), () => {
        return Array(n + 1).fill(0)
    })
    dp[0][1] = 1
    for(let i = 1; i <= m; i ++){
        for(let j = 1; j <= n; j ++){
            if(obstacleGrid[i - 1][j - 1] != 0) continue
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m][n]
}
uniquePathsWithObstacles([[0, 0]])