package hashtable;

import java.util.HashSet;
import java.util.Set;

class Solution11 {
    public boolean isValidSudoku(char[][] board) {
        Set<Character> set = new HashSet<>();
        int [][] directions=  {{-1, -1}, {-1, 0}, {-1, 1}, {0, -1}, {0, 0}, {0, 1}, {1, -1}, {1, 0}, {1, 1}};
        //check the row is correct or not
        for(int i = 0; i < 9; i ++) {
            set.clear();
            for(int j = 0; j < 9; j ++) {
                if(board[i][j] == '.') {
                    continue;
                } 
                if(set.contains(board[i][j])) {
                    System.out.println('x');
                    return false;
                } else {
                    set.add(board[i][j]);
                }
            }
        }
        //check the column is correct or not
        for(int i = 0; i < 9; i ++) {
            set.clear();
            for(int j = 0; j < 9; j ++) {
                if(board[j][i] == '.'){
                    continue;
                }
                if(set.contains(board[j][i])) {
                    return false;
                } else {
                    set.add(board[j][i]);
                }
            }
        }
        //check the 3*3 area
        for(int i = 0; i < 3;i ++) {
            for(int j = 0; j < 3; j ++) {
                set.clear();
                //left-top element
                for (int []dir : directions) {
                    int x = i*3 + 1 + dir[0];
                    int y = j*3 + 1 + dir[1];
                    if(board[x][y] == '.'){
                        continue;
                    }
                    if(set.contains(board[x][y])) {
                        System.out.println('x');
                        return false;
                    } else {
                        set.add(board[x][y]);
                    }
                }
            }
        }
        return true;
    }
    public static void main(String[] args) {
        Solution11 s = new Solution11();
        char [][] board = {
            { '5','3','.','.','7','.','.','.','.'},
            { '6','.','.','1','9','5','.','.','.'},
            { '.','9','8','.','.','.','.','6','.'},
            { '8','.','.','.','6','.','.','.','3'},
            { '4','.','.','8','.','3','.','.','1'},
            { '7','.','.','.','2','.','.','.','6'},
            { '.','6','.','.','.','.','2','8','.'},
            { '.','.','.','4','1','9','.','.','5'},
            { '.','.','.','.','8','.','.','7','9'}
        };

        s.isValidSudoku(board);
    }
}