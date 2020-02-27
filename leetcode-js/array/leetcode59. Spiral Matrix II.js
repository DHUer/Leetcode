/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let res = Array.from(Array(n), () => {
        return new Array(n)
    })

    let count = 1
    let [left, right, up, down] = [0, n - 1, 0, n - 1]
    while(count <= n * n){
        for(let i = left; i <=right && count <= n * n; i ++){
            res[up][i] = count
            count ++
        }
        for(let j = up + 1; j <= down && count <= n * n; j ++){
            res[j][right] = count
            count ++
        }
        for(let i = right - 1; i >=left && count <= n * n; i --){
            res[down][i] = count
            count ++
        }
        for(let j = down - 1; j > up && count <= n * n; j --){
            res[j][left] = count
            count ++
        }
        up ++, down --, right --, left ++
    }
    return res
};

generateMatrix(3)