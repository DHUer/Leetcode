package string;

import java.beans.BeanInfo;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Set;


class Solution12 {
    
    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        List<List<String>> ans = new ArrayList<>();
        if(!wordList.contains(endWord)) {
            return ans;
        }

        HashMap<String, Integer> distance = new HashMap<>();
        HashMap<String, ArrayList<String>> map = new HashMap<>();
        ArrayList<String> temp = new ArrayList<>();
        temp.add(beginWord);

        bfs(beginWord, endWord, wordList, map, distance);

        findLadderHelper(beginWord, endWord, map, distance, temp, ans);

        return ans;
    }
    
    private void findLadderHelper(String beginWord, String endWord, HashMap<String, ArrayList<String>> map, HashMap<String, Integer> distance,
    ArrayList<String> temp, List<List<String>> ans) {
        if(beginWord.equals(endWord)) {
            ans.add(new ArrayList<String>(temp));
        }

        ArrayList<String> neighbors = map.getOrDefault(beginWord, new ArrayList<>());
        for(String neighbor : neighbors) {
            if(distance.get(beginWord) + 1 == distance.get(neighbor)) {
                temp.add(neighbor);
                findLadderHelper(beginWord, endWord, map, distance, temp, ans);
                temp.remove(temp.size() - 1);
            }
        }
    }

    private void bfs(String beginWord, String endWord, List<String> wordList, HashMap<String, ArrayList<String>> map,
                    HashMap<String, Integer> distance){
        Queue <String> queue = new LinkedList<>();
        queue.offer(beginWord);
        distance.put(beginWord, 0);
        boolean isFound = false;
        int depth = 0;
        Set<String> dict = new HashSet<>(wordList);

        while(!queue.isEmpty()) {
            int size = queue.size();
            depth ++;
            for(int i = 0; i < size; i ++) {
                String temp = queue.poll();
                ArrayList<String> neighbors = getNeighbors(temp, dict);
                map.put(temp, neighbors);
                for(String neighbor : neighbors) {
                    if(!distance.containsKey(neighbor)) {
                        distance.put(neighbor, depth);
                        if(neighbor.equals(endWord)) {
                            isFound = true;
                        }
                        queue.offer(neighbor);
                    }
                }
                if(isFound) {
                    break;
                }
            }
        }
    }


    private ArrayList<String> getNeighbors(String node, Set<String> dict) {
        ArrayList<String> res = new ArrayList<>();

        char chs[] = node.toCharArray();
        for(char i = 'a'; i <= 'z'; i ++) {
            for(int j = 0; j < chs.length; j ++) {
                char old_char = chs[j];
                if(chs[j] == i) 
                    continue;
                if(dict.contains(String.valueOf(chs))) {
                    res.add(String.valueOf(chs));
                }
                chs[j] = old_char;
            }
        }
        return res;
    }
    public static void main(String[] args) {
        Solution12 s = new Solution12();
        
        List<String> wordList = new ArrayList<>(Arrays.asList("hot", "dot", "dog", "lot", "log", "cog"));
        s.findLadders("hit", "cog", wordList);
    }
}