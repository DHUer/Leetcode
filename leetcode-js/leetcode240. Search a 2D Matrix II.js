/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchmatrix = function(matrix, target) {
    let [i, j] = [matrix.length - 1, 0];
    while(i > -1 && j < matrix[0].length){
        if(matrix[i][j] > target) i --;
        if(matrix[i][j] < target) j ++;
        if(matrix[i][j] == target) return true;
    }
    return false;
};

let m = [
    [1,4,7,11,15],
    [2,5,8,12,19],
    [3,6,9,16,22],
    [10,13,14,17,24],
    [18,21,23,26,30]
]

console.log(searchMatrix(m, 1));
console.log(searchMatrix(m, 15));
console.log(searchMatrix(m, 30));
console.log(searchMatrix(m, 31))
console.log(searchMatrix(m, 16));