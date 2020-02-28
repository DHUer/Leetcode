/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s.length == 0) return 0
    let dp = new Array(s.length + 1).fill(0)
    dp[0] = 1
    dp[1] = s[0] == '0' ? 0 : 1
    for(let i = 2; i <= s.length; i ++) {
        let first = Number(s[i - 1])
        let second = Number(s[i - 2] + s[i - 1])
        if(first >= 1 && first <= 9) {
            dp[i] += dp[i - 1] 
        }
        if(second >= 10 && second <= 26) {
            dp[i] += dp[i - 2]
        }
    }
    return dp[s.length]
};

// var numDecodings = function(s) {
    // if(s.length != 0) return 0
    // let dp = new Array(s.length + 1).fill(0)
    
    // dp[s.length] = 1
    // dp[s.length - 1] = s[s.length - 1] == '0' ? 0 : 1
    // for(let i = s.length - 2; i >= 0; i ++) {
        // if(s[i] == '0') continue 
        // else dp[i] = Number(s[i] + s[i + 1]) <= 26 ? dp[i + 1] + dp[i + 2] : dp[i + 1]
    // }
    // return dp[0]
// }

numDecodings("1220")