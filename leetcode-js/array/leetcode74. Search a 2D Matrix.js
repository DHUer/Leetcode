/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length
    if(!m) return false
    let n = matrix[0].length
    let row = m - 1
    let col = 0
    while(row >=0 && col < n){
        if(matrix[row][col] < target) col ++
        else if(matrix[row][col] > target) row --
        else return true 
    }
    return false

};