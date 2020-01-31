/**
 * @param {character[][]} matrix
 * @return {number}
 */

var maximalSquare = function(matrix) {
    let dp = Array.from(Array(matrix.length), () => new Array(matrix[0].length));
    for(let i = 0; i < matrix.length; i ++){
        for(let j = 0; j < matrix[0].length; j ++){
            dp[i][j] = matrix[i][j]==1?1:0;
        }
    }
    let maxLen = 0
    for(let i = 0; i < matrix.length; i ++){
        for(let j = 0; j < matrix[0].length; j ++){
            if(dp[i][j]){
                let [t1, t2, t3] = [0, 0, 0];
                if(i >= 1) t1 = dp[i-1][j];
                if(j >= 1) t2 = dp[i][j - 1];
                if(i >=1 && j >= 1) t3 = dp[i-1][j-1];
                dp[i][j] = Math.min(t1, t2, t3) + 1;
                maxLen = Math.max(dp[i][j], maxLen);
            }
        }
    }
    return maxLen*maxLen;

};