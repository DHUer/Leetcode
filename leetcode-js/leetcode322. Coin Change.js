/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount);
    let n = 1;
    dp[0] = 0;
    while(n <= amount){
        let min = Infinity;
        for(let i = 0;i < coins.length; i ++){
            if(n - coins[i] >= 0) min = Math.min(min, dp[n - coins[i]] + 1);
        }
        dp[n] = min;
        n ++;
    }
    if(dp[amount] == Infinity) return -1;
    return dp[amount];
};

console.log(coinChange([1, 2, 88, 99], 42949672));