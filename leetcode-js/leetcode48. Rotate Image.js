/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let length = matrix.length;
    let layers = length % 2 ? length/2 : Math.floor(length/2) + 1;
    for(let i = 0; i<layers; i ++){
        let layerLength = length - 2*i;
        for(let j = 0; j<layerLength - 1; j++){
            let [preX, preY] = [i, i + j];
            let [targetX, targetY] = [0, 0];
            let [pre, temp] = [matrix[preX][preY], 0]
            for(let k = 0; k<4; k++){
                [targetX, targetY] = [preY, length - preX - 1];
                temp = matrix[targetX][targetY];
                console.log(temp)
                matrix[targetX][targetY] = pre;
                [preX, preY] = [targetX, targetY];
                pre = temp;
            }
        }
    }
};

Tmatrix = 
[
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];

rotate(Tmatrix);
console.log(Tmatrix)