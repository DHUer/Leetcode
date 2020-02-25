/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    // result = Max(len, (mx - 1)*(n + 1) + left)
    let m = new Map()

    let maxVal = 0
    let maxValCount = 0
    for(let task of tasks){
        let tVal = m.has(task) ? m.get(task) + 1 : 1
        m.set(task, tVal)
        if(tVal > maxVal){
            maxVal = tVal
            maxValCount = 1
        }else if(tVal === maxVal){
            maxValCount ++
        }
    }
    return Math.max(tasks.length, (maxVal - 1)*(n + 1) + maxValCount)

};

