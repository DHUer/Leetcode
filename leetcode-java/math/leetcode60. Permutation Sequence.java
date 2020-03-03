package math;

import java.util.ArrayList;
import java.util.List;

class Solution {
    public String getPermutation(int n, int k) {
        List<Number> num = new ArrayList<>(n + 1);
        StringBuffer sb = new StringBuffer();
        int [] factorials = new int[n + 1];
        factorials[0] = 1;
        int sum = 1;

        for(int i = 1; i <= n; i ++) {
            sum *= i;
            factorials[i] = sum;
        }

        for(int i = 1; i <= n; i ++) {
            num.add(i);
        }

        k --;
        for(int i = 1; i <= n; i ++) {
            int index = k / factorials[n - i];
            sb.append(String.valueOf(num.get(index)));
            num.remove(index);
            k = k - index*factorials[n - i];
        }
        return String.valueOf(sb);
    }
}