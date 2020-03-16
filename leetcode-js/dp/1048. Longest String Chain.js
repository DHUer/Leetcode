/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    let dp = new Map()
    words.sort((a, b) => a.length - b.length)
    let res = 0
    for(const word of words) {
        let best = 0
        for(let i = 0; i < word.length; i ++) {
            let prev = word.substr(0, i) + word.substr(i + 1)
            best = Math.max(best, (dp.get(prev) || 0) + 1)
        }

        dp.set(word, best)
        res = Math.max(best, res)
    }
    return res
};

longestStrChain(["a","b","ba","bca","bda","bdca"])