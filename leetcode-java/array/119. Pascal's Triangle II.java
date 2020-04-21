package array;

import java.util.ArrayList;
import java.util.List;

class Solution13 {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> pre = new ArrayList<>();
        List<Integer> now = new ArrayList<>();
        pre.add(1);
        if(rowIndex == 1) return pre;
        if(rowIndex == 0) return now;
        for(int i = 2; i <= rowIndex + 1; i ++) {
            now = new ArrayList<>();
            for(int j = 0; j < i ; j ++) {
                if(j == 0 || j == i - 1) {
                    now.add(1);
                } else {
                    now.add(pre.get(j - 1) + pre.get(j));
                }
            }
            pre = now;
        }
        return now;
    }

    public static void main(String[] args) {
        Solution13 s = new Solution13();
        s.getRow(4);
    }
}