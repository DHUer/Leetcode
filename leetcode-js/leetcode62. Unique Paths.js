/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    recrusive = function (x, y){
        if(x==m && y==n){
            return 1;
        }else if(x > m || y > n){
            return 0;
        }else{
            return recrusive(x+1, y) + recrusive(x, y+1);
        }
    }
    return recrusive(1,1);
};

var uniquePaths = function(m, n) {
    
    var x = new Array(m + 1);

    for ( let i = 0; i < x.length; i++) {
        x[i] = new Array(n + 1);
        if(i == 1) x[1] = Array.from(x[1], () => 1);
        if(i == 0) x[0] = Array.from(x[0], () => 0);
    }
    for(let i = 0; i < x.length; i++){
        x[i][0] = 0;
        x[i][1] = 1;
    }
    x[1][1] = 1;
    Array.from(x[0], () =>  0)
    for(let i = 2; i <= m; i ++){
        for(let j = 2; j <= n; j ++){
            x[i][j] = x[i-1][j] + x[i][j-1]
            console.log(x[i][j])
        }
    }
    return x[m][n]
};


console.log(uniquePaths(19, 13))