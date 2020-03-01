/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n == 2) return 1
    if(n == 3) return 2
    let product = 1
    while(n > 4) {
        product *= 3
        n -= 3
    }
    product *= n
    return  product
};

var integerBreak = function(n) {
    let dp = new Array(n + 1).fill(0)
    dp[2] = 1
    for(let i = 3; i <= n; i ++) {
        for(let j = 1; j < i; j ++) {
            dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i -j]))
        }
    }
    return dp[n]
}