package dp;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        Map<Integer, Set<List<Integer>>> map = new HashMap<>();
        Arrays.sort(candidates);
        int len = candidates.length;
        for(int i = 1; i <= target; i ++) {
            map.put(i, new HashSet<>());
            for(int j = 0; j < len && candidates[j] <= target; j ++) {
                if(i == candidates[j]) {
                    List<Integer> temp = new ArrayList<>();
                    temp.add(i);
                    map.get(i).add(temp);
                } else if(i > candidates[j]) {
                    int key = i - candidates[j];
                    for(Iterator iterator = map.get(key).iterator(); iterator.hasNext();) {
                        List list = (List) iterator.next();
                        List tempList = new ArrayList<>();
                        tempList.addAll(list);
                        tempList.add(candidates[j]);
                        Collections.sort(tempList);
                        map.get(i).add(tempList);
                    }
                }
            }
        }
        result.addAll(map.get(target));
        return result;
    }
}