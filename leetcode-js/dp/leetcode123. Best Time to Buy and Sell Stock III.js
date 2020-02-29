/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [globalM1, globalM2] = [0, 0]
    let maxArray = [globalM1, globalM2]
    let [left, right] = [prices[0], [prices[0]]]
    let local = 0
    for(let i = 0; i < prices.length; i ++) {
        if(prices[i] < left) {
            left = prices[i]
            right = prices[i]
        } else {
            right = prices[i]
        }
        if(right - left > local) {
            local = right - left
            maxArray.sort((a, b) => a - b)
            if(local > maxArray[0]) maxArray[0] = local
        }
    }

};

var maxProfit = function(prices) {
    if(prices.length == 0) return 0
    let n = prices.length
    let g = Array.from(Array(n), () => {return Array(3).fill(0)})
    let l = Array.from(Array(n), () => {return Array(3).fill(0)})
    for(let i = 1; i < n; i ++) {
        let diff = prices[i] - prices[i - 1]
        for(let j = 1; j <= 2; j ++) {
            l[i][j] = Math.max(g[i - 1][j - 1] + Math.max(diff, 0), l[i - 1][j] + diff)
            g[i][j] = Math.max(g[i - 1][j], l[i][j])
        }

    }
    return g[n - 1][2]
}

maxProfit([3,3,5,0,0,3,1,4])