/**
 * @param {number} N
 * @return {number}
 */
var numTilings = function(N) {
    let dp = new Array(N + 1).fill(0)
    dp[1] = 1
    dp[2] = 2
    dp[3] = 5
    let mod = 1e9 + 7
    for(let i = 4; i <= N; i ++) {
        dp[i] = (2*dp[i - 1] + dp[i - 3]) % mod
    }

    return dp[N] 
};