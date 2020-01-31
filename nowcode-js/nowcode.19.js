function printMatrix(matrix)
{
    // write code here
    var m=matrix.length;
    var n=matrix[0].length;
    if(m==0||n==0){
        return res
    }
    var res=[];
    var left=0,top=0,right=n-1,bottom=m-1;
    while(left<=right&&top<=bottom){
        for(var i=left;i<=right;i++){
            res.push(matrix[top][i])
        }
        for(var i=top+1;i<=bottom;i++){
            res.push(matrix[i][right])
        }
        if(top!=bottom){
            for(var i=right-1;i>=left;i--){
                res.push(matrix[bottom][i])
            }
        }
        if(left!=right){
            for(var i=bottom-1;i>top;i--){
                res.push(matrix[i][left])
            }
        }
        left++;
        right--;
        top++;
        bottom--;   
    }
    return res;
}
var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(printMatrix(matrix));