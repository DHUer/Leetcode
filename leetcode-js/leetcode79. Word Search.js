/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let isVisited = Array.from(new Array(board.length), () => new Array(board[0].length)); 
    for(let i = 0; i<isVisited.length; i ++){
        for(let j = 0; j<isVisited[0].length; j ++){
            isVisited[i][j] = false;
        }
    }
    
    for(let i = 0; i<board.length; i++){
        for(let j = 0; j<board[0].length; j++){
            if(dfs(board, i, j, 0)) return true;
        }
    }

    return false;
    function dfs(board, i, j, k){
        if(k == word.length) return true;
        if(i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false;
        if(isVisited[i][j]) return false;
        if(board[i][j] != word[k]) return false;
        isVisited[i][j] = true;
        if(dfs(board, i + 1, j, k + 1)) return true;
        if(dfs(board, i - 1, j, k + 1)) return true;
        if(dfs(board, i, j + 1, k + 1)) return true;
        if(dfs(board, i, j - 1, k + 1)) return true;
        isVisited[i][j] = false;

        return false;

    }
};

var iboard =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

console.log(exist(iboard, "ABCCED"))

console.log(exist(iboard, "SEE"))