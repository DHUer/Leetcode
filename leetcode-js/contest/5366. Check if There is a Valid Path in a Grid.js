
let validNext = {
    'r': [1, 3, 5],
    'l': [1, 4, 6],
    'd': [2, 5, 6],
    'u': [2, 3, 4]
}

let dir = {
    'r': [0, 1],
    'l': [0, -1],
    'u': [-1, 0],
    'd': [1, 0]
}

let street = {
    1: ['l', 'r'],
    2: ['d', 'u'],
    3: ['l', 'd'],
    4: ['d', 'r'],
    5: ['l', 'u'],
    6: ['u', 'r']
}
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    if(grid.length == 0) return false
    function dfs(i, j, vaildNextPath) {
        if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) 
            return false
        if(grid[i][j] == 'X' || vaildNextPath.indexOf(grid[i][j]) == - 1)
            return false
        if(i == grid.length - 1 && j == grid[0].length - 1)
            return true
        let cur = grid[i][j]
        grid[i][j] = 'X'
        for(const d of street[cur]) {
            [x, y] = [dir[d][0], dir[d][1]]
            if(dfs(x + i, y + j, validNext[d])) {
                return true
            }
        }
        return false

    }
    return dfs(0, 0, [1,2,3,4,5,6])
};

console.log(hasValidPath([[2,4,3],[6,5,2]]))