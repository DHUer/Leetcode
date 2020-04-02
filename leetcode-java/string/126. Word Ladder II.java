package string;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Set;

class Solution11 {
    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        List<List<String>> ans = new ArrayList<>();
        // 如果不含有结束单词，直接结束，不然后边会造成死循环
        if (!wordList.contains(endWord)) {
            return ans;
        }
        // 利用 BFS 得到所有的邻居节点,以及每个节点的所在层数
        HashMap<String, Integer> distance = new HashMap<>();
        HashMap<String, ArrayList<String>> map = new HashMap<>();
        bfs(beginWord, endWord, wordList, map, distance);
        ArrayList<String> temp = new ArrayList<String>();
        // temp 用来保存当前的路径
        temp.add(beginWord);
        findLaddersHelper(beginWord, endWord, map, distance, temp, ans);
        return ans;
    }
    
    private void findLaddersHelper(String beginWord, String endWord, HashMap<String, ArrayList<String>> map,
                                   HashMap<String, Integer> distance, ArrayList<String> temp, List<List<String>> ans) {
        if (beginWord.equals(endWord)) {
            ans.add(new ArrayList<String>(temp));
            return;
        }
        // 得到所有的下一个的节点
        /*
          "a"
          "c"
          ["a","b","c"]*/
        //之所以是 map.getOrDefault 而不是 get，就是上边的情况 get 会出错
        ArrayList<String> neighbors = map.getOrDefault(beginWord, new ArrayList<String>());
        for (String neighbor : neighbors) {
            //判断层数是否符合
            if (distance.get(beginWord) + 1 == distance.get(neighbor)) {
                temp.add(neighbor);
                findLaddersHelper(neighbor, endWord, map, distance, temp, ans);
                temp.remove(temp.size() - 1);
            }
        }
    }
    
    public void bfs(String beginWord, String endWord, List<String> wordList, HashMap<String, ArrayList<String>> map,
                    HashMap<String, Integer> distance) {
        Queue<String> queue = new LinkedList<>();
        queue.offer(beginWord);
        distance.put(beginWord, 0);
        boolean isFound = false;
        int depth = 0;
        Set<String> dict = new HashSet<>(wordList);
        while (!queue.isEmpty()) {
            int size = queue.size();
            depth++;
            for (int j = 0; j < size; j++) {
                String temp = queue.poll();
                // 一次性得到所有的下一个的节点
                ArrayList<String> neighbors = getNeighbors(temp, dict);
                map.put(temp, neighbors);
                for (String neighbor : neighbors) {
                    if (!distance.containsKey(neighbor)) {
                        distance.put(neighbor, depth);
                        if (neighbor.equals(endWord)) {
                            isFound = true;
                        }
                        queue.offer(neighbor);
                    }
    
                }
            }
            if (isFound) {
                break;
            }
        }
    }
    
    private ArrayList<String> getNeighbors(String node, Set<String> dict) {
        ArrayList<String> res = new ArrayList<String>();
        char chs[] = node.toCharArray();
    
        for (char ch = 'a'; ch <= 'z'; ch++) {
            for (int i = 0; i < chs.length; i++) {
                if (chs[i] == ch)
                    continue;
                char old_ch = chs[i];
                chs[i] = ch;
                 if (dict.contains(String.valueOf(chs))) {
                    res.add(String.valueOf(chs));
                }
                chs[i] = old_ch;
            }
    
        }
        return res;
    }

    public static void main(String[] args) {
        Solution11 s = new Solution11();
        
        List<String> wordList = new ArrayList<>(Arrays.asList("hot", "dot", "dog", "lot", "log", "cog"));
        s.findLadders("hit", "cog", wordList);
    }
}
