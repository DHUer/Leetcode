package math;

import java.util.Arrays;

class Solution15 {
    public int nthSuperUglyNumber(int n, int[] primes) {
        int[] ugly = new int[n];
        int[] idx = new int[primes.length];
        int[] val = new int[primes.length];
        Arrays.fill(val, 1);

        int next = 1;
        for (int i = 0; i < n; i++) {
            ugly[i] = next;

            next = Integer.MAX_VALUE;
            for (int j = 0; j < primes.length; j++) {
                // skip duplicate and avoid extra multiplication
                if (val[j] == ugly[i])
                    val[j] = ugly[idx[j]++] * primes[j];
                // find next ugly number
                next = Math.min(next, val[j]);
            }
        }

        return ugly[n - 1];
    }

    public static void main(String[] args) {
        Solution15 s = new Solution15();
        int []primes = new int[]{2, 7, 13, 19};
        s.nthSuperUglyNumber(12, primes);
    }
}