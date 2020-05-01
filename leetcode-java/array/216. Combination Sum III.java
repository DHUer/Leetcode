package array;

import java.util.ArrayList;
import java.util.List;

class Solution {
    private int k, n;
    public List<List<Integer>> combinationSum3(int k, int n) {
        this.k = k;
        this.n = n;
        List<List<Integer>> res = new ArrayList<>();
        List<Integer> list = new ArrayList<>();
        dfs(1, list, res);
        return res;
    }

    private void dfs(int start, List<Integer> last, List<List<Integer>> res) {
        if(start > 10) {
            return;
        }
        if(last.size() > k) {
            return;
        }
        int sum = last.stream().mapToInt(Integer::intValue).sum();
        if(sum == n && last.size() == k) {
            res.add(new ArrayList<>(last));
            return;
        }
        last.add(start);
        dfs(start + 1, last, res);
        last.remove(last.size() - 1);
        dfs(start + 1, last, res);
    }
}