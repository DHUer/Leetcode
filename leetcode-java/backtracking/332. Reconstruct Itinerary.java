package backtracking;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public List<String> findItinerary(List<List<String>> tickets) {
        List<String> res = new ArrayList<>();
        dfs(tickets, "JFK");
        return res;

    }

    private void dfs(List<List<String>> tickets, String start){
        List<String> tmp = new ArrayList<>();
        tickets.forEach(list -> {
            if(list.get(0) == start) {
                tmp.add(list.get(1));
            }
        });
        Arrays.sort(tmp);
    }
}