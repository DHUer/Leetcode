package string;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

class Solution5 {
    public List<String> restoreIpAddresses(String s) {
        List<String> res = new LinkedList<>();
        List<String> tmp = new LinkedList<>();
        dfs(s, tmp, 0, res);
        return res;
    }

    public void dfs(String s, List<String> tmp, int start, List<String> res) {
        if(tmp.size() == 4 && start >= s.length()) {
            StringBuilder str = new StringBuilder();
            for(String num : tmp) {
                if(isValid(num)) str.append(num).append(".");
                else  return;
            }
            res.add(str.deleteCharAt(str.length() - 1).toString());
            return;
        }
        
        for(int i = 0; i < 3; i ++) {
            if(i + start + 1 <= s.length() && tmp.size() < 4) {
                tmp.add((s.substring(start, i + start + 1)));
                dfs(s, tmp, start + 1 + i, res);
                tmp.remove(tmp.size() - 1);
            }
        }
    }

    public boolean isValid(String num) {
        if((num.charAt(0) == '0' && num.length() > 1) || num.length() > 3 || Integer.parseInt(num) > 255) {
            return false;
        }
        return true;
    }

    public static void main(String[] args) {
        Solution5 s = new Solution5();
        System.out.println(s.restoreIpAddresses("010010"));
    }
}