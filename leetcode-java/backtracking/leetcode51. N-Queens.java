package backtracking;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> res = new ArrayList<>();
        char [][] nQueens = new char[n][n];
        for(int i = 0; i < n; i ++) {
            for(int j = 0; j < n; j ++){
                nQueens[i][j] = '.';
            }
        }
        
        solveNQueens(res, nQueens, 0, n);

        return res;
    }

    public void solveNQueens(List<List<String>> res, char [][] nQueens, int row, int n) {
        if(row == n) {
            List<String> tem = new ArrayList<>();
            for(int i = 0; i < n; i ++) {
                String str = new String(nQueens[i]);
                tem.add(str);
            }
            res.add(tem);
        }
        for(int col = 0; col != n; col ++) {
            if(isValid(nQueens, row, col, n)) {
                nQueens[row][col] = 'Q';
                solveNQueens(res, nQueens, row + 1, n);
                nQueens[row][col] = '.';
            }
        }
    }

    public boolean isValid(char [][] nQueens, int row, int col, int n){
        for(int i = 0; i < row; i ++) {
            if(nQueens[i][col] == 'Q') {
                return false;
            }
        }

        for(int i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, -- j) {
            if(nQueens[i][j] == 'Q') {
                return false;
            }
        }

        for(int i = row - 1, j = col + 1; i >= 0 && j < n; i --, j ++) {
            if(nQueens[i][j] == 'Q') {
                return false;
            }
        }
        return true;
    }
}