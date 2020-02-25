/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length == 0) return []
    let res = []
    let [left, right, up, down] = [0, matrix[0].length - 1, 0, matrix.length - 1]
    let [m, n] = [matrix[0].length, matrix.length]
    while(res.length < m * n){
        for(let j = left; j <= right && res.length < m * n; j ++){
            res.push(matrix[up][j])
        }
        for(let i = up + 1; i <= down - 1 && res.length < m * n; i ++){
            res.push(matrix[i][right])
        }
        for(let j = right; j >= left && res.length < m * n ; j --){
            res.push(matrix[down][j])
        }
        for(let i = down -1; i >= up + 1 && res.length < m * n; i --){
            res.push(matrix[i][left])
        }
        left ++, right --, up ++, down --
    }
    return res
};