/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n + 1).fill(0)
    dp[0] = 1
    dp[1] = 1
    for(let i = 2; i <= n; i ++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n]
};

var climbStairs = function(n) {
    if(n <= 0) return 0
    if(n <= 1) return 1
    if(n <= 2) return 2

    let oneStepBefore = 2
    let twoStepBefore = 1
    let allWay = 0
    for(let i = 2; i < n; i ++) {
        allWay = oneStepBefore + twoStepBefore
        twoStepBefore = oneStepBefore
        oneStepBefore = allWay
    }
    return allWay
}