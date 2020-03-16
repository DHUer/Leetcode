/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let twoStepBackBefore = cost[0]
    let oneStepBackBefore=  cost[1]
    let cur = 0
    for(let i = 2; i < cost.length; i ++) {
        cur = Math.min(twoStepBackBefore, oneStepBackBefore) + cost[i]
        twoStepBackBefore = oneStepBackBefore
        oneStepBackBefore = cur
    }
    return Math.min(oneStepBackBefore, twoStepBackBefore)
};
minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])