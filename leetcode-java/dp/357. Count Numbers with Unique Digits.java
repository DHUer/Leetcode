package dp;
class Solution {
    public int countNumbersWithUniqueDigits(int n) {
        if(n == 0) return 1;

        int res = 10;
        int uniqueDigits = 9;
        int avaliableNumber = 9;
        while(n -- > 1 && avaliableNumber > 0) {
            uniqueDigits *= avaliableNumber;
             res += uniqueDigits;   
             avaliableNumber --;
        }
        return res;
    }
}