
/*
 * Filename: /Users/wling/Code/leetcode-java/string/97. Interleaving String.java
 * Path: /Users/wling/Code/leetcode-java/string
 * Created Date: Tuesday, March 24th 2020, 10:50:05 am
 * Author: wling
 * 
 */

package string;
class Solution7 {

    public boolean isInterleave(String s1, String s2, String s3) {

        if ((s1.length()+s2.length())!=s3.length()) return false;
    
        boolean[][] matrix = new boolean[s2.length()+1][s1.length()+1];
    
        matrix[0][0] = true;
    
        for (int i = 1; i < matrix[0].length; i++){
            matrix[0][i] = matrix[0][i-1]&&(s1.charAt(i-1)==s3.charAt(i-1));
        }
    
        for (int i = 1; i < matrix.length; i++){
            matrix[i][0] = matrix[i-1][0]&&(s2.charAt(i-1)==s3.charAt(i-1));
        }
    
        for (int i = 1; i < matrix.length; i++){
            for (int j = 1; j < matrix[0].length; j++){
                matrix[i][j] = (matrix[i-1][j]&&(s2.charAt(i-1)==s3.charAt(i+j-1)))
                        || (matrix[i][j-1]&&(s1.charAt(j-1)==s3.charAt(i+j-1)));
            }
        }
    
        return matrix[s2.length()][s1.length()];
    
    }
    
    public boolean dfs(char [] c1, char [] c2, char [] c3, int i, int j, int k, boolean [][] invalid) {
        if(!invalid[i][j]) return false;
        if(k == c3.length) return true;
        boolean isValid = (c1[i] == c3[k] && dfs(c1, c2, c3, i + 1, j, k + 1, invalid)) ||
                            (c2[j] == c3[k] && dfs(c1, c2, c3, i, j + 1, k + 1, invalid));
        if(isValid) invalid[i][j] = false;
        return isValid;
    }
    
    public  static void main(String []args) {

        Solution7 s = new Solution7();
        s.isInterleave("aabcc", "dbbca", "aadbbcbcac");
    }
}