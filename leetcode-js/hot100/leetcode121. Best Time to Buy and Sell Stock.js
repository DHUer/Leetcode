/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(!prices.length) return null;
    let [left, right, max] = [prices[0], prices[0], 0];
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < left){
            left = prices[i];
            right = prices[i];
        }else if(prices[i] > right){
            right = prices[i];
        }
        max = Math.max(max, right - left);
    }
    return max;
};


let a = [7,1,5,3,6,4,1, 11, 12, 0, 1111];
let b = [1,1,1,1,1]
let c = [3,1,1];


console.log(maxProfit(a));
console.log(maxProfit(b));
console.log(maxProfit(c));