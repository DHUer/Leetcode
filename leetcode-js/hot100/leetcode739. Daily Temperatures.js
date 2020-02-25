/**
 * @param {number[]} T 
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let res = Array(T.length).fill(0)
    let stack = []
    for(let i = 0; i < T.length; i ++){
        while(stack.length && T[i] > T[stack[stack.length - 1]]){
            let t = stack.pop()
            res[t] = i - t
        }
        stack.push(i)
    }
    return res
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))