/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let isVisited = Array.from(Array(grid.length), () => new Array(grid[0].length));
    let count = 0;
    for(let i = 0; i < grid.length; i ++){
        for(let j = 0; j < grid[0].length; j ++){
            isVisited[i][j] = false;
        }
    }

    for(let i = 0; i < grid.length; i ++){
        for(let j = 0; j < grid[0].length; j ++){
            if(grid[i][j] == 1){
                dfs(i, j);
                count ++;
            }
        }
    }

    function dfs(i, j){
        if(!isVisited[i][j] && grid[i][j] == 1){
            isVisited[i][j] = true;
            grid[i][j] = 0;
            if(i >=1 ) dfs(i - 1, j);
            if(i < grid.length -1) dfs(i + 1, j);
            if(j >=1 ) dfs(i, j - 1);
            if(j < grid[0].length -1) dfs(i, j + 1);

            isVisited[i][j] = false;
        }
    }
    return count;
};
let a = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

let c = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
]

let b =[
    [1]
]
console.log(numIslands(b))
