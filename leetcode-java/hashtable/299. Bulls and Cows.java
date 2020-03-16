package hashtable;

import java.util.Hashtable;

class Solution {
    public String getHint(String secret, String guess) {
        int[] m = new int[256];
        int bull = 0, cows = 0;
        for (int i = 0; i < secret.length(); i++) {
            if (secret.charAt(i) == guess.charAt(i))
                ++bull;
            else
                ++m[secret.charAt(i)];
        }
        for (int i = 0; i < secret.length(); i++) {
            if (secret.charAt(i) != guess.charAt(i) && m[guess.charAt(i)] != 0) {
                ++cows;
                --m[guess.charAt(i)];
            }
        }
        return bull + "A" + cows + "B";
    }
}