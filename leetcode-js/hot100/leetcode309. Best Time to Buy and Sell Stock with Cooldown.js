/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp = new Array(prices.length);
    let max = 0
    for(let i = 0; i < prices.length; i ++){
        dp[i] = 0;
        for(let j = i - 1; j >=0; j --){
            if(j - 2 >= 0) max = Math.max(prices[i] - prices[j] + dp[j - 2], max);
            else max = Math.max(prices[i] - prices[j], max);
        }
        dp[i] = max;
        //console.log(max);
    }
    return max;
};


maxProfit([1,1,3,4,2,5,6,7]);