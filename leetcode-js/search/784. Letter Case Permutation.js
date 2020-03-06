/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let res = []
    let sArray = S.split('')
    dfs(sArray, 0)
    function dfs (sArray,  index) {
        if(index == sArray.length) {
            res.push(sArray.join(''))
            return
        }
        
        if (!isNaN(sArray[index])) dfs(sArray, index + 1)
        else {
            let tem = String(sArray[index])
            sArray[index] = tem.toUpperCase()
            dfs(sArray, index + 1)
            sArray[index] = tem.toLowerCase()
            dfs(sArray, index + 1)
        }
        
    }

    return res
};

letterCasePermutation("a1")