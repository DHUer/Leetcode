/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let len = 0
    strs.sort((a, b) => {
        return a.length - b.length
    })
    len = strs[0].length
    let res = ""
    for(let i = 0; i < len; i ++){
        let temp = strs[0][i]
        let unEqual = false
        strs.forEach((val) => {
            if(temp != val[i]) unEqual = true
        })
        if(!unEqual) res += temp
        else break
    }
    return res
};

longestCommonPrefix(["flower","flow","flight"])