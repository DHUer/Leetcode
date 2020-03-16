/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length
    let ans = []
    let rowMin = new Array(m).fill(Infinity)
    let colMax = new Array(n).fill(0) 
    for(let i = 0; i < n; i ++) {
        for(let j = 0; j < m; j ++) {
            colMax[i] = Math.max(colMax[i], matrix[j][i])
        }
    }

    for(let i = 0; i < m; i ++) {
        for(let j = 0; j < n; j ++) {
            rowMin[i] = Math.min(rowMin[i], matrix[i][j])
        }
    }

    for(let i = 0; i < m; i ++) {
        for(let j = 0; j < n; j ++) {
            if(colMax[j] == rowMin[i])  ans.push(rowMin[i])
        }
    }

    return ans
};

luckyNumbers([[1,10,4,2]])