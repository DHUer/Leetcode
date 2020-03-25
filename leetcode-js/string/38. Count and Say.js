/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let res = ['1']
    let pre = ['1']
    for(let i = 1; i < n; i ++) {
        let j = 0
        let next = ""
        while(j < pre.length) {
            let count = 1
            let curEle = pre[j]
            while(j + 1 < pre.length && pre[j] == pre[j + 1]) {
                count ++
                j ++
            }
            next += count + curEle
            j ++
        }
        pre = next.split("")
        res = pre
    }
    return res.join("")
};
countAndSay(10)
