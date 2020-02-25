/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {

    candidates.sort((a,b) => a-b);
    var results = [];
    var tempList = [];
    subSearch(candidates, target, 0);
    function subSearch(candidates, target, i) {
        if (target == 0) {
            results.push(tempList.slice());
            return;
        }
        else if (target < 0) {
            return;
        }
        else {
            for (; i < candidates.length; i++) {
                tempList.push(candidates[i]);
                subSearch(candidates, target - candidates[i], i);
                tempList.pop();
            }
        }
    }
    return results;
};



var array = [2, 3, 6, 7], target = 7;
combinationSum(array, 7);
console.log(combinationSum(array, 7));
