/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = []
    let map = new Map()
    function dfs(depth, sum, result){
        if(sum == target) {
            let temp = [...result]
            temp.sort((a, b) => a - b)
            let str = temp.join('')
            if(!map.has(str)) {res.push([...temp]), map.set(str, true)}
        }
        if(depth > candidates.length) return 
        else{
            result.push(candidates[depth])
            dfs(depth + 1, sum + candidates[depth], result)
            result.pop()
            dfs(depth + 1, sum, result)
        }
    }

    dfs(0, 0, [])
    return res
};
var combinationSum2 = function(candidates, target){
    candidates.sort((a, b) => a - b)
    let res = []
    function dfs(cur, tar, path){
        if(tar == 0) {
            res.push([...path])
        }
        if(tar < 0)
            return
        for(let i = cur; i < candidates.length; i ++){
            if(i > cur && candidates[i] == candidates[i - 1]) continue
            path.push(candidates[i])
            dfs(i + 1, tar - candidates[i], path)
            path.pop()
        }
    }
    dfs(0, target, [])
    return res
}

console.log(combinationSum2([10,1,2,7,6,1,5], 8))
module.exports = combinationSum2