package string;
class Solution {
    public int lengthOfLastWord(String s) {
        
        String [] res = s.split(" ");
        if(res.length >= 1)
        return res[res.length - 1].length();
        else return 0;
    }
}