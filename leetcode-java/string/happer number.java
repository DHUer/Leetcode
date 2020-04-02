package string;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

class Solution12 {
    public boolean isHappy(int n) {
        Set<Integer> hashSet = new HashSet<>();
        List<Integer> ele = new ArrayList<>();
        while(n != 1) {
            ele.clear();
            getDigits(n, ele);
            int res = 0;
            for(int i = 0; i < ele.size(); i ++) {
                res += Math.sqrt(ele.get(i));
            }
            if(hashSet.contains(res)) {
                return false;
            } else {
                hashSet.add(res);
            }
            n = res;
        }
        return true;
    }

    private void getDigits(int n, List<Integer> ele) {
        while(n != 0) {
            if(n >= 10) {
                ele.add(n / 10);
            } else {
                ele.add(n);
                break;
            }
            n = n - 10 * (n / 10);
        }
    }

    public static void main(String[] args) {
        Solution12 s = new Solution12();
        s.isHappy(2);
    }
}
