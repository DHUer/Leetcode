/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let dp = Array.from(Array(s.length), () => (Array(s.length)))
    for(let i = 0; i < s.length; i ++) dp[i][i] = true
    for(let step = 1; step < s.length; step ++){
        for(let i = 0; i < s.length - step ; i ++){
            if(step == 1) dp[i][step + i] = s[i] == s[i + step]
            else dp[i][step + i] = dp[i + 1][ step + i - 1] && s[i] == s[step + i]
        }
    }
    let count = 0
    for(let i = 0; i < s.length; i ++){
        for(let j = 0; j < s.length; j++){
            if(dp[i][j]) count ++
        }
    }
    return count
};

console.log(countSubstrings('a'))