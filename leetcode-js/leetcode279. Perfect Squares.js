/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let border = Math.floor(Math.sqrt(n));
    let mi = Infinity;
    function dfs(sum, i){
        if(sum < 0) return Infinity;
        if(sum == 0) return 0;
        if(sum > 0){
            let a = new Array();
            for(let j = i; j >0; j --){
                var temp = dfs(sum - j*j, j) + 1;
                a.push(temp);
            }
            let res = Math.min(...a);
            return res;
        }
    }

    let res = dfs(n, border);
    if(res == Infinity) return null;
    else return res;
};


var numSquares = function(n){
    let dp = new Array(n + 1);
    dp.fill(Infinity);
    dp[0] = 0;
    for(let i = 0; i <= n; i ++){
        for(let j = 1; i + j*j <=n; ++j){
            dp[i + j*j] = Math.min(dp[i + j*j], dp[i] + 1);
        }
    }
    return dp[n];

}
console.log(numSquares(12));