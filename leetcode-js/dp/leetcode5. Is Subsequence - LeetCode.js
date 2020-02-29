/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let short = s.length - 1
    if(short < 0) return false
    let long = t.length - 1
    while(long >= 0) {
        if(s[short] == t[long]) {
            short --
        }
        if(short < 0) return true
        long --
    }
    if(short >= 0) return false
};

isSubsequence("abc", "ahbgdc")