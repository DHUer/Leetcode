package dp;

import java.util.HashMap;

class Solution {
    HashMap<Integer, Boolean> stoneMap = new HashMap<>();
    HashMap<String, Boolean> isVisited = new HashMap<>();
    int target;

    public boolean canCross(int[] stones) {
        target = stones[stones.length - 1];
        for (int s : stones) {
            stoneMap.put(s, true);
        }
        return jump(1, 0);
    }

    public boolean jump(int step, int prePos) {
        int cur = prePos + step;
        String universal = new StringBuilder("" + step + "#" + prePos).toString();
        if (cur == target) {
            return true;
        } else if (stoneMap.containsKey(cur) && step != 0 && !isVisited.containsKey(universal)) {
            isVisited.put(universal, true);
            boolean res = jump(step + 1, cur) || jump(step, cur) || jump(step - 1, cur);
            return res;
        } else {
            return false;
        }
    }
}